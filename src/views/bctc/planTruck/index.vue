<template>
<div v-if="plan">
    <avue-form ref="form" :option="optionPlanBasic" v-model="plan" v-if="plan"/>
    <br/>
    <avue-crud :option="option"
               :table-loading="loading"
               :data="data"
               :page.sync="page"
               :permission="permissionList"
               :before-open="beforeOpen"
               v-model="form"
               ref="crud"
               @row-update="rowUpdate"
               @row-save="rowSave"
               @row-del="rowDel"
               @search-change="searchChange"
               @search-reset="searchReset"
               @selection-change="selectionChange"
               @current-change="currentChange"
               @size-change="sizeChange"
               @refresh-change="refreshChange"
               @on-load="onLoad">
      <template slot="menuLeft">
                <el-button  type="success"
                   size="small" 
                   >已分配 {{page.total}} 辆拖车
        </el-button>
        <el-button  type="primary"
                   size="small"
                   icon="el-icon-plus"
                   v-if="permission.planTruck_delete"
                   @click="box = true">增 加
        </el-button>
        <el-button type="danger"
                   size="small"
                   icon="el-icon-delete"
                   plain
                   v-if="permission.planTruck_delete"
                   @click="handleDelete">删 除
        </el-button>
      </template>
    </avue-crud>

    <el-dialog :title="`增加拖车`"
      :top="'5vh'"
      append-to-body
      :visible.sync="box"
      v-if="box"
      width="60%">
          <TruckSelect @onSelectTruckList="onSelectTruckList"/>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleAdd">确定</el-button>
        <el-button @click="box=false">取消</el-button>
      </span> -->
    </el-dialog>
</div>
</template>

<script>
  import {getList, getDetail, add, update, remove} from "./api.js";
  import optionPlanBasic from "../plan1/const-basic.js";
  import option from "./const.js";
  import optionAdd from "../truck/const-add.js";
  import {mapGetters} from "vuex";
  import TruckSelect from '../truck/select.vue'

  export default {
    components:{
      TruckSelect,
    },
    props: ['plan'],
    data() {
      return {
        form: {},
        box: false,
        query: {},
        loading: true,
        optionPlanBasic,
        page: {
          pageSize: 100,
          currentPage: 1,
          total: 0
        },
        selectionList: [],
        option: option,
        optionAdd,
        data: []
      };
    },
    computed: {
      ...mapGetters(["permission"]),
      permissionList() {
        return {
          addBtn: this.vaildData(this.permission.planTruck_add, false),
          viewBtn: this.vaildData(this.permission.planTruck_view, false),
          delBtn: this.vaildData(this.permission.planTruck_delete, false),
          editBtn: this.vaildData(this.permission.planTruck_edit, false)
        };
      },
      ids() {
        let ids = [];
        this.selectionList.forEach(ele => {
          ids.push(ele.id);
        });
        return ids.join(",");
      },
    },
    mounted(){
      console.log('plan ：', this.plan)
    },
    methods: {
      onSelectTruckList(list){
        console.log('list2:', list)
        let truckList = list.map(it=>{
          return {
            planId: this.plan.id,
            truckNumber: it.number,
          }
        })
        console.log('list:', truckList)
        add(truckList).then(() => {
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        }, error => {
          window.console.log(error);
        });
        this.box = false
      },
      rowSave(row, done, loading) {
        add(row).then(() => {
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          done();
        }, error => {
          loading();
          window.console.log(error);
        });
      },
      rowUpdate(row, index, done, loading) {
        update(row).then(() => {
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          done();
        }, error => {
          loading();
          console.log(error);
        });
      },
      rowDel(row) {
        this.$confirm("确定将选择数据删除?", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            return remove(row.id);
          })
          .then(() => {
            this.onLoad(this.page);
            this.$message({
              type: "success",
              message: "操作成功!"
            });
          });
      },
      handleDelete() {
        if (this.selectionList.length === 0) {
          this.$message.warning("请选择至少一条数据");
          return;
        }
        this.$confirm("确定将选择数据删除?", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            return remove(this.ids);
          })
          .then(() => {
            this.onLoad(this.page);
            this.$message({
              type: "success",
              message: "操作成功!"
            });
            this.$refs.crud.toggleSelection();
          });
      },
      beforeOpen(done, type) {
        if (["edit", "view"].includes(type)) {
          getDetail(this.form.id).then(res => {
            this.form = res.data.data;
          });
        }
        done();
      },
      searchReset() {
        this.query = {};
        this.onLoad(this.page);
      },
      searchChange(params, done) {
        this.query = params;
        this.page.currentPage = 1;
        this.onLoad(this.page, params);
        done();
      },
      selectionChange(list) {
        this.selectionList = list;
      },
      selectionClear() {
        this.selectionList = [];
        this.$refs.crud.toggleSelection();
      },
      currentChange(currentPage){
        this.page.currentPage = currentPage;
      },
      sizeChange(pageSize){
        this.page.pageSize = pageSize;
      },
      refreshChange() {
        this.onLoad(this.page, this.query);
      },
      onLoad(page, params = {}) {
        console.log(this.query,'query')
        this.query.planId = this.plan.id
        this.loading = true;
        getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
          const data = res.data.data;
          this.page.total = data.total;
          this.data = data.records;
          this.loading = false;
          this.selectionClear();
        });
      }
    }
  };
</script>

<style>
</style>

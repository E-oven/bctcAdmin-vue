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
                     <template slot="taskStatus" slot-scope="scope">
        <el-button type="success" size="mini" v-if="scope.row.taskStatus == '1'">待提箱</el-button>
        <el-button type="primary" size="mini" v-if="scope.row.taskStatus == '2'">待还箱</el-button>
        <el-button type="info" size="mini" v-if="scope.row.taskStatus == '3'">已还箱</el-button>
      </template>
      <template slot="assined" slot-scope="scope">
        <el-button type="success" size="mini" v-if="scope.row.assined == 'Y'">已分配</el-button>
        <el-button type="primary" size="mini" v-if="scope.row.assined == 'N'">未分配</el-button>
      </template>
      <template slot="menuLeft">
         <div v-if="readOnly" class="el-dialog__title">作业箱列表</div>
        <el-button type="primary"
                   size="small"
                   icon="el-icon-plus"
                   v-if="!readOnly && permission.inventory_delete"
                   @click="box = true">增 加
        </el-button>
        <el-button type="danger"
                   size="small"
                   icon="el-icon-delete"
                   plain
                   v-if="!readOnly && permission.inventory_delete"
                   @click="handleDelete">删 除
        </el-button>
      </template>
    </avue-crud>


        <el-dialog :title="`增加集装箱`"
      :top="'5vh'"
      append-to-body
      :visible.sync="box"
      v-if="box"
      width="60%">
          <CntrSelect @onSelectCntrList="onSelectCntrList" fe="F"/>
    </el-dialog>

  </div>
</template>

<script>
  import {getList, getDetail, add, update, remove, assign, assignRemove} from "./api.js";
  import option from "./const-dlg.js";
  import {mapGetters} from "vuex";
  import optionPlanBasic from "../plan1/const-basic.js";
  import CntrSelect from "../inventory/Select.vue";

  export default {
    components:{
      CntrSelect
    },
    props: ['plan','readOnly'],
    data() {
      return {
        box: false,
        optionPlanBasic,
        form: {},
        query: {
          assignPlanNumber: ''
        },
        loading: true,
        page: {
          pageSize: 10,
          currentPage: 1,
          total: 0
        },
        selectionList: [],
        data: []
      };
    },
    computed: {
      ...mapGetters(["permission"]),
      permissionList() {
        return {
          addBtn: this.vaildData(this.permission.inventory_add, false),
          viewBtn: this.vaildData(this.permission.inventory_view, false),
          delBtn: this.vaildData(this.permission.inventory_delete, false),
          editBtn: this.vaildData(this.permission.inventory_edit, false)
        };
      },
      ids() {
        let ids = [];
        this.selectionList.forEach(ele => {
          ids.push(ele.id);
        });
        return ids.join(",");
      },
      option(){
        if(this.readOnly){
          return {...option, 
                  searchShow:false,
                  searchShowBtn:false, 
                  refreshBtn:true,
                  columnBtn:false,
                  // delBtn:false,
                  // editBtn:false,
                  // menuWidth:100
                }
        }
        return option
      }
    },
    methods: {
      onSelectCntrList(list){
        console.log('list23344:', list)
        let ids = []
        list.forEach(it=>{
          ids.push(it.id)
        })
        assign(this.plan.planNumber, ids.join(',')).then(() => {
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
            return assignRemove(this.plan.planNumber, this.ids);
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
        this.query.assignPlanNumber = this.plan.planNumber
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

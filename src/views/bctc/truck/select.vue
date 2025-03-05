<template>
    <avue-crud :option="option"
               :table-loading="loading"
               :data="data"
               :page.sync="page"
               :permission="permissionList"
               :before-open="beforeOpen"
               v-model="form"
               ref="crud" size="mini"
               @search-change="searchChange"
               @search-reset="searchReset"
               @selection-change="selectionChange"
               @current-change="currentChange"
               @size-change="sizeChange"
               @refresh-change="refreshChange"
               @on-load="onLoad">
        <template slot="truckStatus" slot-scope="scope">
          <el-button type="success" size="mini" v-if="scope.row.truckStatus == 'F'">空 闲</el-button>
          <el-button type="danger" size="mini" v-if="scope.row.truckStatus == 'B'">繁 忙</el-button>
        </template>

      <template slot="menuLeft">
          <el-button type="primary" size="small" 
                   icon="el-icon-plus" @click="handleAdd">确定</el-button>
      </template>
    </avue-crud>
</template>

<script>
  import {getList, getDetail, add, update, remove} from "./api.js";
  import option from "./const-add.js";
  import {mapGetters} from "vuex";

  export default {
    data() {
      return {
        form: {},
        query: {},
        loading: true,
        page: {
          pageSize: 10,
          currentPage: 1,
          total: 0
        },
        selectionList: [],
        option: option,
        data: []
      };
    },
    computed: {
      ...mapGetters(["permission"]),
      permissionList() {
        return {
          addBtn: this.vaildData(this.permission.truck_add, false),
          viewBtn: this.vaildData(this.permission.truck_view, false),
          delBtn: this.vaildData(this.permission.truck_delete, false),
          editBtn: this.vaildData(this.permission.truck_edit, false)
        };
      },
      ids() {
        let ids = [];
        this.selectionList.forEach(ele => {
          ids.push(ele.id);
        });
        return ids.join(",");
      }
    },
    methods: {
      handleAdd() {
        if (this.selectionList.length === 0) {
          this.$message.warning("请选择至少一条数据");
          return;
        }
        if(this.selectionList.some(it=>it.truckStatus == 'B')){
          this.$message.warning("选择记录中包含繁忙拖车")
          return
        }
        this.$emit('onSelectTruckList', this.selectionList)
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

<template>
  <basic-container>
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
          <el-button type="primary" size="mini" v-if="scope.row.taskStatus == 1" @click="handleRowDoubleClick(scope.row)">待作业</el-button>
          <el-button type="success" size="mini" v-if="scope.row.taskStatus == 2" @click="handleRowDoubleClick(scope.row)">作业中</el-button>
          <el-button type="info" size="mini" v-if="scope.row.taskStatus == 3" @click="handleRowDoubleClick(scope.row)">已完成</el-button>
          <el-button type="warning" size="mini" v-if="scope.row.taskStatus == 0" @click="handleRowDoubleClick(scope.row)">已作废</el-button>
        </template>

      <template slot="menuLeft">
        <el-button type="danger"
                   size="small"
                   icon="el-icon-delete"
                   plain
                   v-if="permission.task_delete"
                   @click="handleDelete">删 除
        </el-button>
        <el-button type="warning"
            size="small"
            plain
            icon="el-icon-remove"
            v-if="permission.task_delete"
            @click="handleCancel">作 废
        </el-button>
      </template>
    </avue-crud>

    <el-dialog :title="`作业日志`"
      :top="'5vh'"
      append-to-body :close-on-click-modal="false"
      :visible.sync="planLogBox"
      v-if="planLogBox"
      :fullscreen="boxFullscreen"
      width="60%">
          <planLogDialog :data="logPlan"/>
    </el-dialog>

  </basic-container>
</template>

<script>
  import option from "./const.js"
  import mixins from '../task1/mixins'

  export default {
    mixins: [mixins], 
    data() {
      return {
        query: {
          planType: 2
        },
        option
      };
    },
    computed: {

    },
    methods: {
      
    }
  };
</script>

<style>
</style>

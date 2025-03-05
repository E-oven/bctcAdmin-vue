<template>
  <div>
    <avue-crud :option="getOption()"
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
        <div class="el-dialog__title">作业列表</div>
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

  </div>
</template>

<script>
  import option from "./const.js";
  import mixins from '../task1/mixins'
  import mixinsList from '../task1/mixins-list'

  export default {
    mixins: [mixins, mixinsList], 
    props:['planNumber'],
    data() {
      return {
        query: {
          planType: 5
        },
        option
      };
    },
    methods: {
     
    }
  };
</script>

<style>
</style>

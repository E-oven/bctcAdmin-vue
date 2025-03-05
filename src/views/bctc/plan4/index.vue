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

        <template slot="planStatus" slot-scope="scope">
          <el-button type="primary" size="mini" v-if="scope.row.planStatus == 1" @click="handleRowDoubleClick(scope.row)">待下发</el-button>
          <el-button type="success" size="mini" v-if="scope.row.planStatus == 2" @click="handleRowDoubleClick(scope.row)">作业中</el-button>
          <el-button type="info" size="mini" v-if="scope.row.planStatus == 3" @click="handleRowDoubleClick(scope.row)">已完成</el-button>
          <el-button type="warning" size="mini" v-if="scope.row.planStatus == 0" @click="handleRowDoubleClick(scope.row)">已作废</el-button>
        </template>

      <template slot="menuLeft">
        <el-button type="primary"
            size="small"
            icon="el-icon-plus"
            v-if="permission.plan_add"
            @click="handleAdd">新 增
        </el-button>
        <el-button type="danger"
                   size="small"
                   icon="el-icon-delete"
                   plain
                   v-if="permission.plan_delete"
                   @click="handleDelete">删 除
        </el-button>
        <el-button type="primary"
                   size="small"
                   plain
                   icon="el-icon-position"
                   v-if="permission.plan_delete"
                   @click="handleSync">下 发
        </el-button>
        <el-button type="warning"
                   size="small"
                   plain
                   icon="el-icon-remove"
                   v-if="permission.plan_delete"
                   @click="handleCancel">作 废
        </el-button>

      </template>
      <template slot-scope="{row}" slot="menu">

        <el-button type="text"
            icon="el-icon-setting"
            size="small"
            v-if="permission.plan_add"
            plain
            style="border: 0;background-color: transparent !important;"
            @click.stop="handleView(row)">查看
        </el-button>

        <el-button type="text"
            icon="el-icon-edit"
            size="small"
            v-if="permission.plan_edit"
            plain
            style="border: 0;background-color: transparent !important;"
            @click.stop="handleEdit(row)">编辑
        </el-button>

        <el-button type="text"
            icon="el-icon-delete"
            size="small"
            v-if="permission.plan_delete"
            plain
            style="border: 0;background-color: transparent !important;"
            @click.stop="rowDel(row)">删除
        </el-button>

        <el-button type="text"
            icon="el-icon-position"
            size="small"
            v-if="permission.plan_edit"
            plain
            style="border: 0;background-color: transparent !important;"
            @click.stop="handleSync(row)">下发
        </el-button>

        <el-button type="text"
            icon="el-icon-finished"
            size="small"
            v-if="permission.plan_edit"
            plain
            style="border: 0;background-color: transparent !important;"
            @click.stop="handleFinish(row)">完工
        </el-button>

        <!-- <el-button type="text"
                   icon="el-icon-setting"
                   size="small"
                   v-if="permission.plan_add"
                   plain
                   style="border: 0;background-color: transparent !important;"
                   @click.stop="handleEditTruck(row)">拖车分配
        </el-button> -->
      </template>
    </avue-crud>

    <el-dialog :title="`${bizName}作业计划 - 拖车组分配`"
      :top="'5vh'"
      append-to-body :close-on-click-modal="false"
      :visible.sync="box"
      v-if="box"
      :fullscreen="boxFullscreen"
      width="60%">
        <PlanTruck :plan="currentPlan"/>
    </el-dialog>

    <el-dialog :title="`新增${bizName}计划`"
      :top="'5vh'"
      append-to-body :close-on-click-modal="false"
      :visible.sync="addBox"
      v-if="addBox"
      :fullscreen="boxFullscreen"
      width="60%">
        <addDialog @onSubmit="rowSave" @onCancel="cancelEditDialog"/>
    </el-dialog>

    <el-dialog :title="`编辑${bizName}计划`"
      :top="'5vh'"
      append-to-body :close-on-click-modal="false"
      :visible.sync="editBox"
      v-if="editBox"
      :fullscreen="boxFullscreen"
      width="60%">
        <editDialog @onSubmit="rowSave" :data="form" @onCancel="cancelEditDialog"/>
    </el-dialog>

    <el-dialog :title="`查看${bizName}计划`"
      :top="'5vh'"
      append-to-body :close-on-click-modal="false"
      :visible.sync="viewBox"
      v-if="viewBox"
      :fullscreen="boxFullscreen"
      width="60%">
          <viewDialog :data="form" :showPlanTruck="true"/>
    </el-dialog>
    
    <el-dialog :title="`计划日志`"
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
  import {getList, getDetail, add, update, remove, sync, finish, cancel} from "./api.js"
  import option from "./const.js"
  import {mapGetters} from "vuex"
  import PlanTruck from '../planTruckTeam/index.vue'
  import addDialog from './dialog-add.vue'
  import viewDialog from './dialog-view.vue'
  import editDialog from './dialog-edit.vue'
  import planLogDialog from '../planLog/dialog.vue'
  import mixins from '../plan1/mixins'
  export default {
    mixins: [mixins], 
    components:{
      PlanTruck, addDialog, viewDialog, editDialog
    },
    data() {
      return {
        bizName: '拆箱还货(自备箱)',
        query:{
          planType: 4
        },
        option
      };
    },
    computed: {

    },
    watch:{
    
    },
    methods: {
     
    }
  }
</script>

<style>
</style>

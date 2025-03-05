export default {
  height:'auto',
  calcHeight: 30,
  tip: false,
  searchShow: true,
  searchSpan: 4,
  searchMenuSpan: 6,
  border: true,
  index: false,
  viewBtn: false,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  selection: true,
  dialogClickModal: false,
  labelWidth: 140,
  searchLabelWidth: 90,
  searchMenuPosition: 'left',
  menuWidth:280,
  column: [
    {
      label: "ID",
      prop: "id",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
    {
      label: "计划单号",
      prop: "planNumber",
      type: "input",
      align: "center",
      overHidden: true,
      width: 140,
    },
    {
      label: "服务单号",
      prop: "serviceOrder",
      type: "input",
      align: "center",
      overHidden: true,
      width: 140,
    },
    {
      label: "大船船名",
      prop: "shipName",
      type: "input",
      align: "center",
      overHidden: true,
      width: 140,
    },
    {
      label: "计划类型",
      prop: "planType",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_PLAN_TYPE",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
    },
    // {
    //   label: "出库单号",
    //   prop: "coutFormId",
    //   type: "input",
    //   align: "center",
    //   overHidden: true,
    // },

    {
      label: "委托单位",
      prop: "ownerPtnr",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_COM_OWNER",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      search: true,
    },

    {
      label: "货物名称",
      prop: "cargo",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_CARGO_NAMES",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      search: true,
      rules: [{
        required: true,
        message: "请输入货物名称",
        trigger: "blur"
      }],
    },
    {
      label: "空箱堆场",
      prop: "emptyYard",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_CNTR_YARD_E",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      rules: [{
        required: true,
        message: "请输入空箱堆场",
        trigger: "blur"
      }],
    },
    {
      label: "重箱堆场",
      prop: "fullYard",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_CNTR_YARD_F",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      rules: [{
        required: true,
        message: "请输入重箱堆场",
        trigger: "blur"
      }],
    },
    {
      label: "下发计划量(吨)",
      prop: "wgt2",
      type: "input",
      align: "center",
      overHidden: true,
      width: 105
    },
    {
      label: "作业计划量(吨)",
      prop: "wgt",
      type: "input",
      align: "center",
      overHidden: true,
      width: 105
    },
    {
      label: "完成量(吨)",
      prop: "completedWgt",
      type: "input",
      align: "center",
      overHidden: true,
    },
    {
      label: "完成车数",
      prop: "completedTimes",
      type: "input",
      align: "center",
      overHidden: true,
    },
    {
      label: "作业有效期",
      prop: "expiryTime",
      type: "date",
      align: "center",
      overHidden: true,
      format: "yyyy-MM-dd HH:mm:ss",
      valueFormat: "yyyy-MM-dd HH:mm:ss",
      width: 100,
    },
    // {
    //   label: "是否循环",
    //   prop: "loop",
    //   type: "select",
    //   align: "center",
    //   overHidden: true,
    //   width: 100,
    //   dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_YES_NO",
    //   props: {
    //     label: "dictValue",
    //     value: "dictKey"
    //   },
    // },
    {
      label: "计划状态",
      prop: "planStatus",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_PLAN_STATUS",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      search: true,
      slot: true
    },
    {
      label: "作业开始时间",
      prop: "taskStartTime",
      type: "input",
      align: "center",
      overHidden: true,
      width: 100,
    },
    {
      label: "作业结束时间",
      prop: "taskEndTime",
      type: "input",
      align: "center",
      overHidden: true,
      width: 100,
    },

    {
      label: "创建人",
      prop: "createUserName",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
    },
    {
      label: "创建时间",
      prop: "createTime",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      width: 140,
    },
    {
      label: "修改人",
      prop: "updateUserName",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
    },
    {
      label: "修改时间",
      prop: "updateTime",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      width: 140,
    }
  ]
}

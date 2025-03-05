export default {
  height:'auto',
  calcHeight: 30,
  tip: false,
  searchShow: true,
  searchMenuSpan: 4,
  border: true,
  index: false,
  viewBtn: false,
  selection: true,
  dialogClickModal: false,
  labelWidth: 140,
  searchLabelWidth: 100,
  searchMenuPosition: 'left',
  searchSpan:5,
  addBtn: false,
  menuWidth: 150,
  editBtnText: '查 看',
  editTitle:"查 看",
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
      type: "select",
      align: "center",
      overHidden: true,
      filterable: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_PLAN_NUMBER_LIST",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      search: true,
    },
    {
      label: "作业单号",
      prop: "taskNumber",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
    },
    // {
    //   label: "物流公司",
    //   prop: "logisticsPtnr",
    //   type: "select",
    //   align: "center",
    //   overHidden: true,
    //   dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_COM_LOGISTICS",
    //   props: {
    //     label: "dictValue",
    //     value: "dictKey"
    //   },
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
    },
    {
      label: "作业车牌",
      prop: "truckNumber",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_TRUCK_LIST",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      search: true,
    },
    {
      label: "作业箱号",
      prop: "cntrNo",
      type: "input",
      align: "center",
      overHidden: true,
    },
    {
      label: "作业箱型",
      prop: "cntrIso",
      type: "input",
      align: "center",
      overHidden: true,
    },
    {
      label: "净重",
      prop: "netWgt",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
    },
    {
      label: "空车状态",
      prop: "emptyStatus",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_WEIGHT_EMPTY_STATUS",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      display: false,
      hide: true
    },
    {
      label: "空车重量",
      prop: "emptyWgt",
      type: "input",
      align: "center",
      overHidden: true,
    },
    {
      label: "空车时间",
      prop: "emptyTime",
      type: "datetime",
      align: "center",
      overHidden: true,
      format: "yyyy-MM-dd HH:mm:ss",
      valueFormat: "yyyy-MM-dd HH:mm:ss",
      width:140,
    },
    {
      label: "空车司磅员",
      prop: "emptyWeighman",
      type: "select",
      align: "center",
      overHidden: true,
      width:100,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_USERNAME",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      hide: true
    },
    // {
    //   label: "出库状态",
    //   prop: "outboundStatus",
    //   type: "select",
    //   align: "center",
    //   overHidden: true,
    //   dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_OUT_STORE_STATUS",
    //   props: {
    //     label: "dictValue",
    //     value: "dictKey"
    //   },
    //   display: false,
    //   hide: true
    // },
    // {
    //   label: "出库地点",
    //   prop: "outboundYard",
    //   type: "select",
    //   align: "center",
    //   overHidden: true,
    //   dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_BULK_YARD",
    //   props: {
    //     label: "dictValue",
    //     value: "dictKey"
    //   },
    // },
    // {
    //   label: "重车状态",
    //   prop: "fullStatus",
    //   type: "select",
    //   align: "center",
    //   overHidden: true,
    //   dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_WEIGHT_STATUS",
    //   props: {
    //     label: "dictValue",
    //     value: "dictKey"
    //   },
    // },
    
    {
      label: "重车重量",
      prop: "fullWgt",
      type: "input",
      align: "center",
      overHidden: true,
    },
    {
      label: "重车时间",
      prop: "fullTime",
      type: "datetime",
      align: "center",
      overHidden: true,
      format: "yyyy-MM-dd HH:mm:ss",
      valueFormat: "yyyy-MM-dd HH:mm:ss",
      width:140,
    },
    {
      label: "重车司磅员",
      prop: "fullWeighman",
      type: "select",
      align: "center",
      overHidden: true,
      width:100,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_USERNAME",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      hide: true
    },
    // {
    //   label: "灌箱状态",
    //   prop: "loadingStatus",
    //   type: "select",
    //   align: "center",
    //   overHidden: true,
    //   dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_FILL_STATUS",
    //   props: {
    //     label: "dictValue",
    //     value: "dictKey"
    //   },
    // },
    
    // {
    //   label: "封条号",
    //   prop: "sealNumber",
    //   type: "input",
    //   align: "center",
    //   overHidden: true,
    // },
    // {
    //   label: "灌箱时间",
    //   prop: "loadingTime",
    //   type: "datetime",
    //   align: "center",
    //   overHidden: true,
    //   format: "yyyy-MM-dd HH:mm:ss",
    //   valueFormat: "yyyy-MM-dd HH:mm:ss",
    //   width:140,
    // },
    // {
    //   label: "灌箱员",
    //   prop: "loadingUser",
    //   type: "select",
    //   align: "center",
    //   overHidden: true,
    //   dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_USERNAME",
    //   props: {
    //     label: "dictValue",
    //     value: "dictKey"
    //   },
    // },
    {
      label: "拆箱状态",
      prop: "unloadingStatus",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_UNBOX_STATUS",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
    },
    {
      label: "拆箱时间",
      prop: "unloadingTime",
      type: "date",
      align: "center",
      overHidden: true,
      format: "yyyy-MM-dd HH:mm:ss",
      valueFormat: "yyyy-MM-dd HH:mm:ss",
    },
    {
      label: "拆箱人",
      prop: "unloadingUser",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_USERNAME",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
    },
    {
      label: "作业状态",
      prop: "taskStatus",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_TASK_STATUS",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      search: true,
      display: false
    },
    {
      label: "进闸状态",
      prop: "gateInStatus",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_GATE_IN_STATUS",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
    },
    {
      label: "进闸时间",
      prop: "gateInTime",
      type: "date",
      align: "center",
      overHidden: true,
      format: "yyyy-MM-dd HH:mm:ss",
      valueFormat: "yyyy-MM-dd HH:mm:ss",
    },
    {
      label: "出闸状态",
      prop: "gateOutStatus",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_GATE_OUT_STATUS",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
    },
    {
      label: "出闸时间",
      prop: "gateOutTime",
      type: "date",
      align: "center",
      overHidden: true,
      format: "yyyy-MM-dd HH:mm:ss",
      valueFormat: "yyyy-MM-dd HH:mm:ss",
    },
    // {
    //   label: "提还类型",
    //   prop: "ioMode",
    //   type: "select",
    //   align: "center",
    //   overHidden: true,
    //   dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_IO_MODE",
    //   props: {
    //     label: "dictValue",
    //     value: "dictKey"
    //   },
    // },
    // {
    //   label: "创建人",
    //   prop: "createUserName",
    //   type: "input",
    //   align: "center",
    //   overHidden: true,
    //   addDisplay: false,
    //   editDisplay: false,
    //   viewDisplay: false,
    // },
    {
      label: "创建时间",
      prop: "createTime",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      width:140,
    },
    // {
    //   label: "修改人",
    //   prop: "updateUserName",
    //   type: "input",
    //   align: "center",
    //   overHidden: true,
    //   addDisplay: false,
    //   editDisplay: false,
    //   viewDisplay: false,
    // },
    {
      label: "修改时间",
      prop: "updateTime",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      width:140,
    }
    
  ]
}

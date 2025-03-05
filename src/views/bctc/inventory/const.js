export default {
  height:'auto',
  calcHeight: 30,
  tip: false,
  searchShow: true,
  searchMenuSpan: 4,
  border: true,
  index: false,
  viewBtn: true,
  selection: true,
  dialogClickModal: false,
  labelWidth: 140,
  searchLabelWidth: 80,
  searchSpan:4,
  searchMenuPosition: 'left',
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
      label: "服务单号",
      prop: "serviceOrder",
      type: "input",
      align: "center",
      overHidden: true,
      search: true,
      searchLabelWidth: 100
    },
    {
      label: "大船船名",
      prop: "shipName",
      type: "input",
      align: "center",
      overHidden: true,
      search: true,
    },
    {
      label: "委托单位",
      prop: "owner",
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
      label: "箱号",
      prop: "cntrNo",
      type: "input",
      align: "center",
      overHidden: true,
      search: true,
      searchLabelWidth: 50
    },
    // {
    //   label: "箱型",
    //   prop: "sztp2",
    //   type: "input",
    //   align: "center",
    //   overHidden: true,
    // },
    {
      label: "空重",
      prop: "fe",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_FE",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      search: true,
      searchLabelWidth: 50
    },
    {
      label: "货名",
      prop: "cargoType",
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
      label: "货物净重",
      prop: "wgt",
      type: "number",
      align: "center",
      overHidden: true,
    },
    {
      label: "箱型ISO",
      prop: "sztp",
      type: "input",
      align: "center",
      overHidden: true,
    },
    {
      label: "堆场",
      prop: "yardId",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_CNTR_YARD",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      search: true,
      searchLabelWidth: 50,
    },

    {
      label: "残损情况",
      prop: "dmgStatus",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_DMG_STATUS",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
    },

    {
      label: "船名",
      prop: "vslCd",
      type: "input",
      align: "center",
      overHidden: true,
    },
    {
      label: "航次",
      prop: "voy",
      type: "input",
      align: "center",
      overHidden: true,
    },
    {
      width: 140,
      label: "入场时间",
      prop: "entryTime",
      type: "date",
      align: "center",
      overHidden: true,
      format: "yyyy-MM-dd HH:mm:ss",
      valueFormat: "yyyy-MM-dd HH:mm:ss",
    },
    {
      label: "盘点状态",
      prop: "checkStatus",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_CHECK_STATUS",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      addDisplay: false,
      editDisplay: false
    },
    {
      label: "盘点人",
      prop: "checkUser",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_USERNAME",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      addDisplay: false,
      editDisplay: false
    },



    // {
    //   label: "物流公司",
    //   prop: "logisticsCompany",
    //   type: "input",
    //   align: "center",
    //   overHidden: true,
    // },
    // {
    //   label: "计划类型",
    //   prop: "planType",
    //   type: "select",
    //   align: "center",
    //   overHidden: true,
    //   dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_PLAN_TYPE",
    //   props: {
    //     label: "dictValue",
    //     value: "dictKey"
    //   },
    // },
    // {
    //   label: "计划号",
    //   prop: "planNumber",
    //   type: "input",
    //   align: "center",
    //   overHidden: true,
    // },

    // {
    //   label: "入场计划号",
    //   prop: "entryPlanNo",
    //   type: "select",
    //   align: "center",
    //   overHidden: true,
    //   dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_PLAN_NUMBER_LIST",
    //   props: {
    //     label: "dictValue",
    //     value: "dictKey"
    //   },
    // },
    // {
    //   label: "入场计类型",
    //   prop: "entryPlanType",
    //   type: "select",
    //   align: "center",
    //   overHidden: true,
    //   dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_PLAN_TYPE",
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
    //   hide: true
    // },

    {
      label: "封条号",
      prop: "sealNumber",
      type: "input",
      align: "center",
      overHidden: true,
    },

    {
      width: 140,
      label: "创建时间",
      prop: "createTime",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
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
    //   hide: true
    // },
    {
      width: 140,
      label: "修改时间",
      prop: "updateTime",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
    },
  ]
}

export default {
  height:'auto',
  calcHeight: 30,
  tip: false,
  searchShow: false,
  searchMenuSpan: 4,
  border: true,
  index: false,
  viewBtn: true,
  selection: true,
  dialogClickModal: false,
  labelWidth: 140,
  searchLabelWidth: 100,
  searchSpan:4,
  searchMenuPosition: 'left',
  addBtn: false,
  menu	: false,
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
      label: "箱号",
      prop: "cntrNo",
      type: "input",
      align: "center",
      overHidden: true,
      search: true,
    },
    {
      label: "箱型ISO",
      prop: "sztp",
      type: "input",
      align: "center",
      overHidden: true,
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
      label: "任务状态",
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
      label: "分配状态",
      prop: "assined",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_ASSIGN",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
    },

  ]
}

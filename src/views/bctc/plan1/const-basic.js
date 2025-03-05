export default {
  height:'auto',
  calcHeight: 30,
  tip: false,
  searchShow: true,
  searchSpan: 4,
  searchMenuSpan: 6,
  border: true,
  index: false,
  viewBtn: true,
  selection: true,
  dialogClickModal: false,
  labelWidth: 140,
  searchLabelWidth: 90,
  searchMenuPosition: 'left',
  menuWidth:300,
  boxType: 'view',
  detail:true,
  column: [
    {
      label: "计划单号",
      prop: "planNumber",
      type: "input",
      align: "center",
      overHidden: true,
    },
    {
      label: "作业类型",
      prop: "planType",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_PLAN_TYPE",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      search: true,
    },
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
    },
  ]
}

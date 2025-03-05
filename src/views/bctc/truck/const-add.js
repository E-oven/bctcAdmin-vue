export default {
  height:'auto',
  calcHeight: 30,
  tip: false,
  searchShow: true,
  searchMenuSpan: 4,
  searchSpan: 5,
  border: true,
  menu: false,
  index: false,
  viewBtn: true,
  selection: true,
  dialogClickModal: false,
  labelWidth: 140,
  searchLabelWidth: 140,
  searchMenuPosition: 'left',
  addBtn: false,
  columnBtn: false,
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
      label: "拖车公司",
      prop: "companyId",
      type: "select",
      align: "center",
      overHidden: true,
      searchLabelWidth: 90,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_TRUCK_COM_LIST",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      search: true,
      rules: [{
        required: true,
        message: "请输入拖车公司",
        trigger: "blur"
      }],
    },
    {
      label: "车牌号",
      prop: "number",
      type: "input",
      align: "center",
      overHidden: true,
      searchLabelWidth: 70,
      search: true,
      rules: [{
        required: true,
        message: "请输入车牌号",
        trigger: "blur"
      }],
    },
    {
      label: "维修状态",
      prop: "truckState",
      type: "select",
      align: "center",
      overHidden: true,
      searchLabelWidth: 90,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_TRUCK_STATE",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
    },
    {
      label: "所属拖车组",
      prop: "teamName",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
    },
    {
      label: "空闲状态",
      prop: "truckStatus",
      type: "select",
      align: "center",
      overHidden: true,
      searchLabelWidth: 90,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_TRUCK_STATUS",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      search: true,
      addDisplay: false,
      editDisplay: false,
    },
  ]
}

export default {
  height:'auto',
  calcHeight: 30,
  tip: false,
  searchShow: true,
  searchSpan: 4,
  searchMenuSpan: 4,
  border: true,
  index: false,
  viewBtn: true,
  selection: true,
  dialogClickModal: false,
  labelWidth: 140,
  searchLabelWidth: 120,
  searchMenuPosition: 'left',
  addBtn: false,
  menu: false,
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
      label: "拖车公司",
      prop: "companyId",
      type: "select",
      align: "center",
      overHidden: true,
      filterable: true,
      searchLabelWidth: 90,
      group: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_TRUCK_COM_LIST",
      dicFormatter:(res)=>{
        return [{
          dictValue: '内拖',
          groups: res.data.filter(it=>it.AREA == 'I')
        }, {
          dictValue: '外拖',
          groups: res.data.filter(it=>it.AREA == 'O')
        }]
      },
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
    // {
    //   label: "维修状态",
    //   prop: "truckState",
    //   type: "select",
    //   align: "center",
    //   overHidden: true,
    //   searchLabelWidth: 90,
    //   dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_TRUCK_STATE",
    //   props: {
    //     label: "dictValue",
    //     value: "dictKey"
    //   },
    //   search: true,
    // },
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
    // {
    //   label: "创建时间",
    //   prop: "createTime",
    //   type: "input",
    //   align: "center",
    //   overHidden: true,
    //   addDisplay: false,
    //   editDisplay: false,
    //   viewDisplay: false,
    // },
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
    // {
    //   label: "修改时间",
    //   prop: "updateTime",
    //   type: "input",
    //   align: "center",
    //   overHidden: true,
    //   addDisplay: false,
    //   editDisplay: false,
    //   viewDisplay: false,
    // },
  ]
}

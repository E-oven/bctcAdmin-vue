export default {
  height:'auto',
  calcHeight: 30,
  tip: false,
  searchShow: true,
  searchMenuSpan: 6,
  border: true,
  index: false,
  viewBtn: true,
  selection: true,
  dialogClickModal: false,
  labelWidth: 140,
  searchLabelWidth: 80,
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
      label: "货品",
      prop: "type",
      type: "select",
      align: "center",
      overHidden: true,
      searchLabelWidth: 50,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_CARGO_TYPE",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      search: true,
      rules: [{
        required: true,
        message: "请输入货品",
        trigger: "blur"
      }],
    },
    {
      label: "货名",
      prop: "name",
      type: "input",
      align: "center",
      overHidden: true,
      search: true,
      searchLabelWidth: 50,
      rules: [{
        required: true,
        message: "请输入货名",
        trigger: "blur"
      }],
    },
    {
      label: "排序",
      prop: "orderIndex",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
    {
      label: "创建人",
      prop: "createUserName",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
    },
    {
      label: "创建部门",
      prop: "createDept",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
    {
      label: "创建时间",
      prop: "createTime",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
    },
    {
      label: "修改人",
      prop: "updateUserName",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
    },
    {
      label: "修改时间",
      prop: "updateTime",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
    }
  ]
}

export default {
  height:'auto',
  calcHeight: 30,
  tip: false,
  searchShow: true,
  searchSpan: 6,
  searchMenuSpan: 6,
  border: true,
  index: false,
  viewBtn: true,
  selection: true,
  dialogClickModal: false,
  labelWidth: 100,
  searchLabelWidth: 100,
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
      label: "类型",
      prop: "isoType",
      type: "input",
      align: "center",
      overHidden: true,
      search: false,
      rules: [{
        required: true,
        message: "请输入",
        trigger: "blur"
      }],
    },
    {
      label: "ISO代码",
      prop: "isoCode",
      type: "input",
      align: "center",
      overHidden: true,
      search: true,
      rules: [{
        required: true,
        message: "请输入",
        trigger: "blur"
      }],
    },
    {
      label: "自定代码",
      prop: "priCode",
      type: "input",
      align: "center",
      overHidden: true,
      search: true,
      rules: [{
        required: true,
        message: "请输入",
        trigger: "blur"
      }],
    },
    {
      label: "船代&amp;类型代码",
      prop: "grCode",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
    {
      label: "更新工作人员",
      prop: "staffCode",
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
    },
  ]
}

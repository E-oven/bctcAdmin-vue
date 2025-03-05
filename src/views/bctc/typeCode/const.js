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
  searchLabelWidth: 140,
  searchMenuPosition: 'left',

  column: [
    {
      label: "ID", 
      prop: "id",  
      type: "input",  
      search: false, 
      minWidth:100, 
      overHidden: true, 
      display: false, 
      hide: true
    },
    {
      label: "箱型第三四字符",
      prop: "code",
      width: 180, 
      overHidden: true, 
      display: true, 
      type: "input", 
      search: true, 
       rules: [{
        required: true,
        message: "请输入",
        trigger: "blur"
      }],
    },
    {
      label: "原代号",
      prop: "gcode",
      minWidth:100, 
      overHidden: true, 
      display: true, 
      type: "input", 
      search: false, 
       rules: [{
        required: true,
        message: "请输入",
        trigger: "blur"
      }],
    },
    {
      label: "代码描述",
      prop: "codeDesc",
      width: 180, 
      overHidden: true, 
      display: true, 
      type: "input", 
      search: false, 
       rules: [{
        required: true,
        message: "请输入",
        trigger: "blur"
      }],
    },
    {
      label: "类型组描述",
      prop: "gcodeDesc",
      width: 180, 
      overHidden: true, 
      display: true, 
      type: "input", 
      search: false, 
       rules: [{
        required: true,
        message: "请输入",
        trigger: "blur"
      }],
    },
    // {
    //   label: "是否启用",
    //   prop: "useCheck",
    //   width: 110, 
    //   overHidden: true, 
    //   display: true, 
    //   type: "select",  
    //   search: true,
    //   dicUrl: '/api/blade-system/dict/dictionary?code=yes_no',
    //   props: { 
    //     label: "dictValue",
    //     value: "dictKey"
    //   }
    // },
    {
      label: "序列",
      prop: "seq",
      width: 110, 
      overHidden: true, 
      display: true, 
      type: "number",  
      precision: 0, 
      search: false
    },
    {
      label: "创建人",
      prop: "createUserName",
      minWidth:100, 
      overHidden: true, 
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true
    },
    {
      label: "创建部门",
      prop: "createDept",
      minWidth:100, 
      overHidden: true, 
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true
    },

    {
      label: "创建时间",
      prop: "createTime",

       width: 150,

      type: "datetime",
      valueFormat:'yyyy-MM-dd HH:mm:ss',

      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,

      hide: true,
      search:false,
      searchRange:true,
      defaultTime:['00:00:00', '23:59:59'],
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
    },
    {
      label: "更新员工",
      prop: "staffCode",
      minWidth:100, 
      overHidden: true, 
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true
    },
    {
      label: "修改人",
      prop: "updateUserName",
      minWidth:100, 
      overHidden: true, 
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true
    },
    {
      label: "修改时间",
      prop: "updateTime",
      width: 150,
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true
    },


















  ]
}

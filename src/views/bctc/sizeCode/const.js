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
      label: "ID", // 列标题
      prop: "id",  // 列标题内容的字段属性名称
      type: "input",  // Form表单类型 输入框 下拉框 textarea 等等
      search: false, // 是否显示该字段的搜索框，页面头上的搜索框
      minWidth:100, //列宽
      overHidden: true, // 超出列宽部分隐藏
      display: false, // 对话框是否显示该字段3
      hide: true
    },
    {
      label: "箱型第一位字符",
      prop: "code1",
      // 表格列字段样式
      width: 130, // 列宽
      overHidden: true, // 超出列宽部分隐藏
      // 该字段在对话框中的配置
      display: true, // 对话框是否显示该字段
      type: "input", // Form表单类型
      // 该字段在页面上面搜索框的配置
      maxlength:1,
      search: true, // 是否显示该字段的搜索框
       // 该字段在对话框中输入的校验规则
       rules: [{
        required: true,
        message: "请输入",
        trigger: "blur"
      }],
    },
    {
      label: "箱型第二为字符",
      prop: "code2",
      width: 180, // 列宽
      overHidden: true,
      display: true, // 对话框是否显示该字段
      type: "input", // Form表单类型
      maxlength:1,
      search: true, // 是否显示该字段的搜索框
       rules: [{
        required: true,
        message: "请输入",
        trigger: "blur"
      }],
    },
    {
      label: "代码1的描述",
      prop: "code1Desc",
      // 表格列字段样式
      width: 140, // 列宽
      overHidden: true, // 超出列宽部分隐藏
      // 该字段在对话框中的配置
      display: true, // 对话框是否显示该字段
      type: "input", // Form表单类型
      // 该字段在页面上面搜索框的配置
      search: false, // 是否显示该字段的搜索框
       // 该字段在对话框中输入的校验规则
       rules: [{
        required: true,
        message: "请输入",
        trigger: "blur"
      }],
    },
    {
      label: "代码2的描述",
      prop: "code2Desc",
      // 表格列字段样式
      width: 180, // 列宽
      overHidden: true, // 超出列宽部分隐藏
      // 该字段在对话框中的配置
      display: true, // 对话框是否显示该字段
      type: "input", // Form表单类型
      // 该字段在页面上面搜索框的配置
      search: false, // 是否显示该字段的搜索框
       // 该字段在对话框中输入的校验规则
       rules: [{
        required: true,
        message: "请输入",
        trigger: "blur"
      }],
    },
    // {
    //   label: "分辨不分辨Y/N",
    //   prop: "tunnel",
    //   width: 110, // 列宽
    //   overHidden: true, // 超出列宽部分隐藏

    //   display: true, // 对话框是否显示该字段
    //   type: "select",  // Form表单类型 输入框 下拉框 textarea 等等

    //   search: false,

    //   // 表格列字段字段翻译key->value
    //   dicUrl: '/api/blade-system/dict/dictionary?code=yes_no',
    //   props: { // 上面是获取字典,下面是对字典格式化
    //     label: "dictValue",
    //     value: "dictKey"
    //   }
    // },
    {
      label: "序列",
      prop: "seq",
      width: 110, // 列宽
      overHidden: true, // 超出列宽部分隐藏
      display: true, // 对话框是否显示该字段
      type: "number",  // Form表单类型 输入框 下拉框 textarea 等等
      precision: 0, // 保留几位小数点
      search: false
    },
    // {
    //   label: "是否使用",
    //   prop: "useCheck",
    //   width: 160, // 列宽
    //   overHidden: true, // 超出列宽部分隐藏

    //   display: true, // 对话框是否显示该字段
    //   type: "select",  // Form表单类型 输入框 下拉框 textarea 等等

    //   search: true,

    //   // 表格列字段字段翻译key->value
    //   dicUrl: '/api/blade-system/dict/dictionary?code=yes_no',
    //   props: { // 上面是获取字典,下面是对字典格式化
    //     label: "dictValue",
    //     value: "dictKey"
    //   }
    // },
    {
      label: "长",
      prop: "length",
      // 表格列字段样式
      minWidth:100, //列宽
      overHidden: true, // 超出列宽部分隐藏
      // 该字段在对话框中的配置
      display: true, // 对话框是否显示该字段
      type: "input", // Form表单类型
      // 该字段在页面上面搜索框的配置
      search: false, // 是否显示该字段的搜索框
    },
    {
      label: "高",
      prop: "height",
      // 表格列字段样式
      minWidth:100, //列宽
      overHidden: true, // 超出列宽部分隐藏
      // 该字段在对话框中的配置
      display: true, // 对话框是否显示该字段
      type: "input", // Form表单类型
      // 该字段在页面上面搜索框的配置
      search: false, // 是否显示该字段的搜索框
    },
    {
      label: "宽",
      prop: "width",
      // 表格列字段样式
      minWidth:100, //列宽
      overHidden: true, // 超出列宽部分隐藏
      // 该字段在对话框中的配置
      display: true, // 对话框是否显示该字段
      type: "input", // Form表单类型
      // 该字段在页面上面搜索框的配置
      search: false, // 是否显示该字段的搜索框
    },
    {
      label: "创建人",
      prop: "createUserName",
      minWidth:100, //列宽
      overHidden: true, // 超出列宽部分隐藏
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true
    },
    {
      label: "创建部门",
      prop: "createDept",
      minWidth:100, //列宽
      overHidden: true, // 超出列宽部分隐藏
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
      minWidth:100, //列宽
      overHidden: true, // 超出列宽部分隐藏
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true
    },
    {
      label: "修改人",
      prop: "updateUserName",
      minWidth:100, //列宽
      overHidden: true, // 超出列宽部分隐藏
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

export default {
  labelWidth:140,
  labelWidth:140,
  submitText: '保 存',
  submitIcon: 'el-icon-circle-plus-outline',
  emptyText: '取 消',
  emptyIcon: 'el-icon-circle-close',
  group: [
      {
        icon: 'el-icon-document',
        label: '基本信息',
        prop: 'group',
      column: [
        // {
        //   label: "计划单号",
        //   prop: "planNumber",
        //   type: "input",
        //   align: "center",
        //   overHidden: true,
        //   // disabled: true
        // },
        {
          label: "空箱堆场",
          prop: "emptyYard",
          type: "select",
          align: "center",
          overHidden: true,
          dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_CNTR_YARD_E",
          props: {
            label: "dictValue",
            value: "dictKey"
          },
          rules: [{
            required: true,
            message: "请输入空箱堆场",
            trigger: "blur"
          }],
        },
        
        {
          label: "计划描述",
          prop: "planDescr",
          type: "input",
          span: 24,
          align: "center",
          row: true,
          overHidden: true,
        },
      ],
    },
    {
      icon: 'el-icon-document',
      label: '作业策划',
      prop: 'group1',
      column: [
        {
          label: "作业有效期",
          prop: "expiryTime",
          type: "date",
          align: "center",
          overHidden: true,
          format: "yyyy-MM-dd HH:mm:ss",
          valueFormat: "yyyy-MM-dd HH:mm:ss",
        },
        {
          label: "是否循环",
          prop: "loop",
          type: "select",
          align: "center",
          overHidden: true,
          width: 100,
          dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_YES_NO",
          props: {
            label: "dictValue",
            value: "dictKey"
          },
          rules:[
            { required: true, message: '请输入', trigger: 'blur' },
          ]
        },
      ]

    }



    
  ]
}

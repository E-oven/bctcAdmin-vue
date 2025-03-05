export default {
  labelWidth:140,
  boxType: 'view',
  detail:true,
      column: [
        {
          label: "计划单号",
          prop: "planNumber",
          type: "input",
          align: "center",
          overHidden: true,
          width: 140,
        },
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
        },
  ]
}

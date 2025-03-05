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
          // disabled: true
        },
        {
          label: "服务单号",
          prop: "serviceOrder",
          type: "input",
          align: "center",
          overHidden: true,
          addDisplay: false,
          editDisplay: false
        },
        {
          label: "出库单号",
          prop: "coutFormId",
          type: "input",
          align: "center",
          overHidden: true,
          // disabled: true
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
          rules: [{
            required: true,
            message: "请输入货物名称",
            trigger: "blur"
          }],
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
          label: "重箱堆场",
          prop: "fullYard",
          type: "select",
          align: "center",
          overHidden: true,
          dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_CNTR_YARD_F",
          props: {
            label: "dictValue",
            value: "dictKey"
          },
          rules: [{
            required: true,
            message: "请输入重箱堆场",
            trigger: "blur"
          }],
        },
        {
          label: "下发计划量(吨)",
          prop: "wgt2",
          type: "number",
          align: "center",
          overHidden: true,
        },
        {
          label: "办单重量(吨)",
          prop: "wgt3",
          type: "number",
          align: "center",
          overHidden: true,
        },
        {
          label: "作业计划量(吨)",
          prop: "wgt",
          type: "number",
          align: "center",
          overHidden: true,
        },
        {
          label: "完成量(吨)",
          prop: "completedWgt",
          type: "input",
          align: "center",
          overHidden: true,
        },
        {
          label: "剩余量(吨)",
          prop: "surplus",
          type: "input",
          align: "center",
          overHidden: true,
        },
        {
          label: "完成车数",
          prop: "completedTimes",
          type: "input",
          align: "center",
          overHidden: true,
        },
        {
          label: "计划状态",
          prop: "planStatus",
          type: "select",
          align: "center",
          overHidden: true,
          dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_PLAN_STATUS",
          props: {
            label: "dictValue",
            value: "dictKey"
          },
        },
        {
          label: "作业开始时间",
          prop: "taskStartTime",
          type: "input",
          align: "center",
          overHidden: true,
          width: 100,
        },
        {
          label: "作业结束时间",
          prop: "taskEndTime",
          type: "input",
          align: "center",
          overHidden: true,
          width: 100,
        },
  ]
}

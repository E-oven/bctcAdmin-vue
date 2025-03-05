export default {
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
          rules: [{
            required: true,
            message: "请输入",
            trigger: "blur"
          }],
        },
        {
          label: "BDB地磅号",
          prop: "bdb",
          type: "input",
          align: "center",
          overHidden: true,
          rules:[
            { required: true, message: '请输入', trigger: 'blur' },
          ]
        },
        {
          label: "出库单号",
          prop: "coutFormId",
          type: "input",
          align: "center",
          overHidden: true,
          rules:[
            { required: true, message: '请输入', trigger: 'blur' },
          ]
        },
        {
          label: "车提计划号",
          prop: "coutPlanId",
          type: "input",
          align: "center",
          overHidden: true,
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
          label: "物流公司",
          prop: "logisticsPtnr",
          type: "select",
          align: "center",
          overHidden: true,
          dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_COM_LOGISTICS",
          props: {
            label: "dictValue",
            value: "dictKey"
          },
          search: true,
        },
        {
          label: "工班计划号",
          prop: "ticketNumber",
          type: "input",
          align: "center",
          overHidden: true,
        },
        {
          label: "大船船名", // [5]
          prop: "shipName",
          type: "input",
          align: "center",
          overHidden: true
        },
        {
          label: "终端流向", // [5]
          prop: "direction",
          type: "input",
          align: "center",
          overHidden: true
        },
      ],
    },
    {
      icon: 'el-icon-document',
      label: '作业策划',
      prop: 'group1',
      column: [
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
          rules:[
            { required: true, message: '请输入', trigger: 'blur' },
          ]
        },
/*        {
          label: "终端流向",
          prop: "direction",
          type: "input",
          align: "center",
          overHidden: true,
        },*/
        {
          label: "散货堆区",
          prop: "bulkYard",
          type: "select",
          align: "center",
          overHidden: true,
          dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_BULK_YARD",
          props: {
            label: "dictValue",
            value: "dictKey"
          },
          rules: [{
            required: true,
            message: "请输入散货堆区",
            trigger: "blur"
          }],
        },
        {
          label: "过磅地点",
          prop: "wgtHouse",
          type: "select",
          align: "center",
          overHidden: true,
          dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_WEIGHT_HOUSE",
          props: {
            label: "dictValue",
            value: "dictKey"
          },
        },
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

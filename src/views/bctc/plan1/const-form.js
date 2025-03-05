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
        // {
        //   label: "计划单号",
        //   prop: "planNumber",
        //   type: "input",
        //   align: "center",
        //   overHidden: true,
        //   // disabled: true
        // },
        // {
        //   label: "服务单号",
        //   prop: "serviceOrder",
        //   type: "input",
        //   align: "center",
        //   overHidden: true,
        //   addDisplay: false,
        //   editDisplay: false
        // },
        {
          label: "委托单位",
          prop: "ownerPtnr",
          type: "select",
          align: "center",
          overHidden: true,
          filterable: true,
          allowCreate: true,
          dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_COM_OWNER",
          props: {
            label: "dictValue",
            value: "dictKey"
          },
          search: true,
          rules:[
            { required: true, message: '请输入', trigger: 'blur' },
          ]
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
          filterable: true,
          allowCreate: true,
          rules: [{
            required: true,
            message: "请输入货物名称",
            trigger: "blur"
          }],
        },
        {
          label: "工班计划号",
          prop: "ticketNumber",
          type: "input",
          align: "center",
          overHidden: true,
          // rules:[
          //   { required: true, message: '请输入', trigger: 'blur' },
          // ]
        },
        {
          label: "大船船名", // [5]
          prop: "shipName",
          type: "input",
          align: "center",
          overHidden: false,
          rules:[
            { required: true, message: '请输入', trigger: 'blur' },
          ]
        },
        {
          label: "终端流向", // [5]
          prop: "direction",
          type: "input",
          align: "center",
          overHidden: true,
          // rules:[
          //   { required: true, message: '请输入', trigger: 'blur' },
          // ]
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
          rules: [{
            required: true,
            message: "请输入",
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
/*
        {
          label: "终端流向",
          prop: "direction",
          type: "input",
          align: "center",
          overHidden: true,
        },
*/

        {
          label: "作业有效期",
          prop: "expiryTime",
          type: "date",
          align: "center",
          overHidden: true,
          format: "yyyy-MM-dd HH:mm:ss",
          valueFormat: "yyyy-MM-dd HH:mm:ss",
        },
        // {
        //   label: "循环计划",
        //   prop: "loop",
        //   type: "select",
        //   align: "center",
        //   overHidden: true,
        //   dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_YES_NO",
        //   props: {
        //     label: "dictValue",
        //     value: "dictKey"
        //   },
        // },


      ]

    }




  ]
}

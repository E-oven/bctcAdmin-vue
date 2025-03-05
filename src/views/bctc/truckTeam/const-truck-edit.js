export default {
  height:'auto',
  calcHeight: 30,
  tip: false,
  searchShow: false,
  searchMenuSpan: 8,
  border: true,
  index: false,
  viewBtn: true,
  selection: true,
  dialogClickModal: false,
  labelWidth: 140,
  searchLabelWidth: 140,
  menuWidth: 130,
  searchMenuPosition: 'left',
  viewBtn: false,
  editBtn: false,
  addBtn: false,
  size:'mini',
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
      label: "计划ID",
      prop: "planId",
      type: "input",
      align: "center",
      overHidden: true,
      hide: true,
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      search: false,
    },
    {
      label: "车牌号",
      prop: "truckNumber",
      type: "input",
      align: "center",
      overHidden: true,
      search: true,
    },
    {
      label: "拖车公司",
      prop: "truckCompany",
      type: "input",
      align: "center",
      addDisplay: false,
      editDisplay: false,
      overHidden: true,
    },
    {
      label: "车辆维修状态",
      prop: "truckState",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_TRUCK_STATE",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      addDisplay: false,
      editDisplay: false,
      search: true,
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
      prop: "createUser",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
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
      hide: true,
    },
    {
      label: "修改人",
      prop: "updateUser",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
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
      hide: true,
    }
  ]
}

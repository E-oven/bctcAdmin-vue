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
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
    {
      label: "组ID",
      prop: "teamId",
      type: "input",
      align: "center",
      overHidden: true,
    },
    {
      label: "车牌号",
      prop: "truckNumber",
      type: "input",
      align: "center",
      overHidden: true,
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
      label: "车辆状态 WORKING工作中  DONE完成",
      prop: "truckStatus",
      type: "select",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
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
      prop: "updateUser",
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
    {
      label: "状态",
      prop: "status",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
    {
      label: "是否已删除",
      prop: "isDeleted",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
  ]
}

export default {
  height:'auto',
  calcHeight: 30,
  tip: false,
  searchShow: true,
  searchMenuSpan: 6,
  border: true,
  index: false,
  viewBtn: false,
  selection: true,
  dialogClickModal: false,
  labelWidth: 140,
  searchLabelWidth: 100,
  searchMenuPosition: 'left',
  menuWidth:220,
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
      label: "拖车组名",
      prop: "name",
      type: "input",
      align: "center",
      overHidden: true,
      search: true,
    },
    {
      label: "拖车数量",
      prop: "truckCount",
      align: "center",
      type: "input",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      formatter: (row,a,b,c)=>{
        console.log('xxxxx', row,a,b,c)
        return row.truckList.length
      }
    },
    {
      label: "组状态",
      prop: "teamStatus",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_TRUCK_TEAM_STATUS",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      search: true,
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
      prop: "createUserName",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
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
      addDisplay: false,
      editDisplay: false,
    },
    {
      label: "创建时间",
      prop: "createTime",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
    },
    {
      label: "修改人",
      prop: "updateUserName",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
    },
    {
      label: "修改时间",
      prop: "updateTime",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
    }

  ]
}

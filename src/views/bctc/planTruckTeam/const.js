export default {
  height:'auto',
  calcHeight: 30,
  tip: false,
  searchShow: false,
  searchMenuSpan: 6,
  border: true,
  index: false,
  viewBtn: true,
  selection: true,
  dialogClickModal: false,
  labelWidth: 140,
  searchLabelWidth: 140,
  searchMenuPosition: 'left',
  addBtn: false,
  editBtn: false,
  viewBtn: false,
  menuWidth: 120,
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
      type: "",
      align: "center",
      overHidden: true,
      hide: true,
    },
    {
      label: "拖车组",
      prop: "truckTeamId",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_sql_TRUCK_TEAM",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
    },
    {
      label: "拖车数量",
      prop: "truckTeam.name",
      align: "center",
      overHidden: true,
      formatter: (row)=>{
        return row.truckTeam.truckList.length
      }
    },
    {
      label: "拖车组状态",
      prop: "teamStatus",
      type: "select",
      align: "center",
      overHidden: true,
      dicUrl: "/api/blade-system/dict-biz/dictionary?code=biz_TRUCK_TEAM_STATUS",
      props: {
        label: "dictValue",
        value: "dictKey"
      },
      formatter: (row)=>{
        return row.truckTeam.workingPlanNumber ? 'B' : 'F'
      }
    },
    {
      label: "缓存",
      prop: "cache",
      type: "input",
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
      prop: "createUserName",
      type: "input",
      align: "center",
      overHidden: true,
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      width: 140
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
      width: 140
    }
   
  ]
}

export default {
  boxType: 'view',
  detail:true,
  column: [
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
      label: "创建人",
      prop: "createUserName",
      type: "input",
      align: "center",
      overHidden: true,
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

  ]
}


import {mapGetters} from "vuex"
import {getList, getDetail, add, update, remove, sync, finish, cancel} from "./api.js"

export default {
  data() {
    return {
      form: {},
      query: {},
      planLogBox: false,
      logPlan: null,
      addBox: false,
      box: false,
      viewBox: false,
      editBox: false,
      currentPlan: null,
      boxFullscreen: false,
      loading: true,
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      },
      selectionList: [],
      data: []
    };
  },
  computed: {
    ...mapGetters(["permission"]),
    permissionList() {
      return {
        addBtn: this.vaildData(this.permission.plan_add, false),
        viewBtn: this.vaildData(this.permission.plan_view, false),
        delBtn: this.vaildData(this.permission.plan_delete, false),
        editBtn: this.vaildData(this.permission.plan_edit, false)
      };
    },
    ids() {
      let ids = [];
      this.selectionList.forEach(ele => {
        ids.push(ele.id);
      });
      return ids.join(",");
    }
  },
  watch:{
    box(a, b){
      if(!a){
        this.onLoad(this.page);
      }
    }
  },
  methods: {
    handleCancel(row){
      if (!row.id && this.selectionList.length === 0) {
        this.$message.warning("请选择至少一条数据");
        return;
      }
      let ids = row.id ? row.id : this.ids
      this.$confirm("确定将选择的计划作废？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      .then(() => {
        return cancel(ids);
      })
      .then(() => {
        this.onLoad(this.page);
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        this.$refs.crud.toggleSelection();
      });
    },
    handleFinish(row){
      if (!row.id && this.selectionList.length === 0) {
        this.$message.warning("请选择至少一条数据");
        return;
      }
      let ids = row.id ? row.id : this.ids
      this.$confirm("确定将选择的计划完成？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      .then(() => {
        return finish(ids);
      })
      .then(() => {
        this.onLoad(this.page);
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        this.$refs.crud.toggleSelection();
      });
    },
    handleSync(row){
      if (!row.id && this.selectionList.length === 0) {
        this.$message.warning("请选择至少一条数据");
        return;
      }
      let ids = row.id ? row.id : this.ids
      this.$confirm("确定将选择的计划下发？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      .then(() => {
        return sync(ids);
      })
      .then(() => {
        this.onLoad(this.page);
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        this.$refs.crud.toggleSelection();
      });
    },
    handleAdd(){
      this.addBox = true
    },
    handleEdit(row){
      getDetail(row.id).then(res => {
        this.form = res.data.data;
        this.editBox = true
      });
    },
    handleView(row){
      getDetail(row.id).then(res => {
        let data = res.data.data
        data.surplus = (data.wgt*100 - data.completedWgt*100)/100
        this.form = data
        this.viewBox = true
      });
      console.log('handle view')
    },
    handleEditTruck(row){
      this.box = true
      this.currentPlan = row
      console.log('row:',row)
    },
    rowSave(row, done, loading) {
      row.planType = this.query.planType
      add(row).then(() => {
        this.onLoad(this.page);
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        // done();
        this.cancelEditDialog()
        this.addBox = false
        this.editBox = false
      }, error => {
        loading();
        window.console.log(error);
      });
    },
    cancelEditDialog(){
      this.addBox = false
      this.editBox = false
    },
    rowUpdate(row, index, done, loading) {
      update(row).then(() => {
        this.onLoad(this.page);
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        done();
      }, error => {
        loading();
        console.log(error);
      });
    },
    rowDel(row) {
      this.$confirm("确定将选择数据删除?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          return remove(row.id);
        })
        .then(() => {
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        });
    },
    handleDelete() {
      if (this.selectionList.length === 0) {
        this.$message.warning("请选择至少一条数据");
        return;
      }
      this.$confirm("确定将选择数据删除?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          return remove(this.ids);
        })
        .then(() => {
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          this.$refs.crud.toggleSelection();
        });
    },
    beforeOpen(done, type) {
      if (["edit", "view"].includes(type)) {
        getDetail(this.form.id).then(res => {
          this.form = res.data.data;
        });
      }
      done();
    },
    searchReset() {
      this.query = {};
      this.onLoad(this.page);
    },
    searchChange(params, done) {
      let query = Object.assign({}, this.query, params)
      //this.query = params;
      this.page.currentPage = 1;
      this.onLoad(this.page, query);
      done();
    },
    selectionChange(list) {
      this.selectionList = list;
    },
    selectionClear() {
      this.selectionList = [];
      this.$refs.crud.toggleSelection();
    },
    currentChange(currentPage){
      this.page.currentPage = currentPage;
    },
    sizeChange(pageSize){
      this.page.pageSize = pageSize;
    },
    refreshChange() {
      this.onLoad(this.page, this.query);
    },
    onLoad(page, params = {}) {
      console.log(page,params)
      if(this.$refs.crud){
        this.$refs.crud.updateDic('ownerPtnr')
        this.$refs.crud.updateDic('cargo')
      }
      this.loading = true;
      let query = Object.assign({},params, this.query)
      if(!params.planStatus){
        //默认查询未完成作业
        query.planStatusList = [1,2]
      }
      getList(page.currentPage, page.pageSize, query).then(res => {
        const data = res.data.data;
        this.page.total = data.total;
        this.data = data.records;
        this.loading = false;
        this.selectionClear();
      });
    },
    handleRowDoubleClick(row){
      console.log('row:', row)
      this.planLogBox = true
      this.logPlan = row
    }
    
  }










  
}









import {getList, getDetail, add, update, remove, cancel, finish} from "./api.js";
import option from "./const.js";
import {mapGetters} from "vuex";
import planLogDialog from '../planLog/dialog.vue'

export default {
  components:{
    planLogDialog
  },
  data() {
    return {
      planLogBox: false,
      logPlan: null,
      form: {},
      loading: true,
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      },
      selectionList: [],
      option: option,
      data: []
    };
  },
  computed: {
    ...mapGetters(["permission"]),
    permissionList() {
      return {
        addBtn: this.vaildData(this.permission.task_add, false),
        viewBtn: this.vaildData(this.permission.task_view, false),
        delBtn: this.vaildData(this.permission.task_delete, false),
        editBtn: this.vaildData(this.permission.task_edit, false)
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
  methods: {
    handleRowDoubleClick(row){
      console.log('row:', row)
      this.planLogBox = true
      this.logPlan = row
    },
    handleCancel(row){
      if (!row.id && this.selectionList.length === 0) {
        this.$message.warning("请选择至少一条数据");
        return;
      }
      if(this.selectionList.some(it=>it.taskStatus == 3)){
        this.$message.warning("已完成作业禁止作废");
        return;
      }
      let ids = row.id ? row.id : this.ids
      this.$confirm("确定将选择的作业作废？", {
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
      this.$confirm("确定将选择的作业完成？", {
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
    rowSave(row, done, loading) {
      add(row).then(() => {
        this.onLoad(this.page);
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        done();
      }, error => {
        loading();
        window.console.log(error);
      });
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
      this.query = params;
      this.page.currentPage = 1;
      this.onLoad(this.page, params);
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
      this.loading = true;
      getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
        const data = res.data.data;
        this.page.total = data.total;
        data.records.forEach(it=>{
          it.netWgt = it.fullWgt - it.emptyWgt || '0'
        })
        this.data = data.records;
        this.loading = false;
        this.selectionClear();
      });
    }
  }
};



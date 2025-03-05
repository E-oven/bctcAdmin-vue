<template>
  <div>
    <div class="radio" style="margin-bottom:30px;">
      排序：
      <el-radio-group v-model="reverse">
        <el-radio :label="false">最早</el-radio>
        <el-radio :label="true">最新</el-radio>
      </el-radio-group>
    </div>
    <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(item, index) in data"
        :key="index"
        :timestamp="item.createTime">
        {{item.truckNumber}} {{item.content}}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
  import {getList, getDetail, add, update, remove} from "./api.js";
  import option from "./const.js";
  import {mapGetters} from "vuex";

  export default {
    props:['data'],
    data() {
      return {
        reverse: false,
        form: {},
        query: {},
        loading: true,
        page: {
          pageSize: 9999,
          currentPage: 1,
          total: 0
        },
        selectionList: [],
        option: option,
        data: []
      };
    },
    computed: {

    },
    mounted(){
      this.onLoad(this.page, {
        planNumber: this.data.planNumber,
        taskNumber: this.data.taskNumber || ''
      })
    },
    methods: {
      onLoad(page, params = {}) {
        getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
          const data = res.data.data;
          this.page.total = data.total;
          this.data = data.records;
        });
      }
    }
  };
</script>

<style>
</style>

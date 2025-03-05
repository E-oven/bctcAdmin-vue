<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'

export default {
  name: "app",
  data() {
    return {};
  },
  watch: {},
  created() {

  },
  methods: {


  },
  computed: {}
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.avue--detail .el-col{
  margin-bottom: 0;
}
.avue--detail .el-form-item__label{
  padding-right: 12px;
}
.avue--detail .el-form-item__content{
  padding-left: 12px;
}
.statistics-cont{
  display: inline-block;
  margin-left: 12px;
  span{
    font-size: 14px;
  }
}


.top-plane{
  font-size:12px;
  margin: 0 0 14px 0;
}


.avue-crud__menu_hide {
  .avue-crud__menu{
    display: none !important;
  }
}

.el-dialog__body {
    padding: 10px 20px !important;
}

.el-table th,
.el-table-column__header {
  white-space: nowrap;
}

.avue-table th, .avue-table-column__header {
  white-space: nowrap;
}


</style>


import {mapGetters} from "vuex"
import {getList, getDetail, add, update, remove, sync, finish, cancel} from "./api.js"

export default {
  data() {
    return {

    }
  },
  methods: {
    onLoad(page, params = {}) {
      if(this.$refs.crud){
        this.$refs.crud.updateDic('ownerPtnr')
        this.$refs.crud.updateDic('cargo')
      }
      this.loading = true;
      let query = Object.assign({},params, this.query)
      getList(page.currentPage, page.pageSize, query).then(res => {
        const data = res.data.data;
        this.page.total = data.total;
        this.data = data.records;
        this.loading = false;
        this.selectionClear();
      });
    },
  }










  
}








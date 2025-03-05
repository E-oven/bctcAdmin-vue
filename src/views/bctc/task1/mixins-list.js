import {getList, getDetail, add, update, remove, cancel, finish} from "./api.js";
export default {
  components:{
  },
  data() {
    return {

    };
  },
  computed: {
  },
  methods: {
    getOption(){
      return {...this.option, 
        searchShow:false,
        searchShowBtn:false, 
        refreshBtn:true,
        columnBtn:false,
        delBtn:false,
        // editBtn:false,
        menuWidth:100
      }
      // return {...this.option, searchShow:false,searchShowBtn:false, refreshBtn:false,columnBtn:false,delBtn:false,editBtn:false,menuWidth:100}
    },
    onLoad(page, params = {}) {
      this.loading = true;
      let query = Object.assign({}, params, this.query)
      query.planNumber = this.planNumber
      getList(page.currentPage, page.pageSize, query).then(res => {
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



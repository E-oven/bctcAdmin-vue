
import {mapGetters} from "vuex"
import {getList, getDetail, add, update, remove, sync, finish, cancel} from "./api.js"

export default {
  data() {
    return {
      serviceOrderFormId: ''
    }
  },
  watch:{
    'form.coutFormId'(a,b){
      //20240726 需求变更，不再请求
      //this.updateCoutPlanIdDict()
    },
    'form.bdb'(){
      this.handleBdbChange()
    }
  },
  methods: {
    initOption(option){
      let opt = JSON.parse(JSON.stringify(option))
      opt.group[0].column.filter(it=>it.prop == 'bdb')[0].rules.push({ validator: this.validateDbd, trigger: 'blur' })
      return opt
    },
    //new version 20240606
    async query(){
      try{
        let resp = await WS.getDetailsByServiceFormID(this.serviceOrderFormId)
        if (resp != null && resp.length>0 && resp[0] != -3){
          this.form.bdb = resp[1]
          this.form.ownerPtnr = resp[3]
          this.form.wgt2 = resp[4]
          this.form.cargo = resp[2]

          this.form.shipName = resp[5]
          this.form.direction = resp[6]

          await this.handleBdbChange()
          // this.updateCoutPlanIdDict()
        }else {
          this.$message.warning("未查询到服务单记录!");
        }
      }catch(e){
        console.log('err:', e)
        this.$message.warning("未查请求异常");
      }
    },
    async handleBdbChange(){
      if(!this.form.bdb.trim()){
        return
      }
      let bdbResp = await WS.getLoadometersByLoadometerID(this.form.bdb.trim())
      if(bdbResp.length >= 2){
        if(bdbResp[0].startsWith('BDB')){
          this.form.wgt3 = bdbResp[1]
          if(bdbResp[2]){
            this.form.cargo = bdbResp[2]
          }
        }else if(bdbResp[1].startsWith('BDB')){
          this.form.coutFormId = bdbResp[0]
          this.form.wgt3 = bdbResp[2]
          if(bdbResp[3]){
            this.form.cargo = bdbResp[3]
          }
        }
      }else{
        this.$message.warning("未查BDB单号");
      }
    },
    // async updateCoutPlanIdDict(){
    //   if(this.form.coutFormId){
    //     let planList = (await WS.getNanLCTSearchPlanByCoutid(this.form.coutFormId)).data.map(it=>{
    //       return {
    //         value: it.id,
    //         label: it.id + '  [ ' + it.begindate + ' - ' + it.enddate + ' ]'
    //       }
    //     })
    //     console.log('plan resp', planList)
    //     this.$refs.form.updateDic('coutPlanId', planList)
    //   }
    // },
    validateDbd(rule, value, callback) {
      callback()
      return
      // WS.getLoadometersByLoadometerID(value.trim()).then(resp=>{
      //   if(resp == 0){
      //     callback(new Error('BDB地磅号错误'));
      //   }
      //   if(this.coutFormId != resp[0]){
      //     callback(new Error(`BDB地磅号[${value}]与出库单号[${this.coutFormId}]不匹配`));
      //   }
      //   callback()
      // }).catch((e)=>{
      //     callback(new Error('BDB地磅号查询异常'))
      // })
    },
    onSubmit(row, done, loading){
      done();
      console.log('row:', row)
      let data = {
        serviceOrder: this.serviceOrderFormId,
        ... row
      }
      this.$emit('onSubmit', data)
    }

  }











}








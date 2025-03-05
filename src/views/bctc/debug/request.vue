<template>
  <basic-container>
    
      <el-tabs v-model="activeName"  type="card" @tab-click="handleClick">
          <el-tab-pane label="闸口事件测试" name="gate">
            <el-form :inline="true" :model="gateForm" class="demo-form-inline">
              <el-form-item label="闸道">
                <el-input v-model="gateForm.gateNumber" placeholder="闸道"></el-input>
              </el-form-item>
              <el-form-item label="进出">
                <el-select v-model="gateForm.type" placeholder="进出">
                  <el-option label="进闸" value="IN"></el-option>
                  <el-option label="出闸" value="OUT"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="车牌">
                <el-input v-model="gateForm.truckNumber" placeholder="车牌"></el-input>
              </el-form-item>
              <el-form-item label="前箱号">
                <el-input v-model="gateForm.cntrNoF" placeholder="箱号"></el-input>
              </el-form-item>
              <el-form-item label="后箱号">
                <el-input v-model="gateForm.cntrNoB" placeholder="箱号"></el-input>
              </el-form-item>
              <el-form-item label="操作员">
                <el-input v-model="gateForm.opUser" placeholder="操作员"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onGateFormSubmit">发起请求</el-button>
              </el-form-item>
            </el-form>
            <!-- <div class="tit2">请求参数</div>
            <el-input type="textarea" :rows="5" readonly v-model="gateForm.resp"></el-input> -->

            <div class="tit2">响应内容</div>
            <el-input type="textarea" :rows="5" readonly v-model="gateResp"></el-input>
          </el-tab-pane>


          <el-tab-pane label="磅房事件测试" name="weight">
            <el-form :inline="true" :model="weightForm" class="demo-form-inline">
              <el-form-item label="车道号">
                <el-input v-model="weightForm.chanelName" placeholder="车道号"></el-input>
              </el-form-item>
              <el-form-item label="重量">
                <el-input v-model="weightForm.weight" placeholder="重量"></el-input>
              </el-form-item>
              <el-form-item label="车牌">
                <el-input v-model="weightForm.truckNumber" placeholder="车牌"></el-input>
              </el-form-item>
              <el-form-item label="箱号">
                <el-input v-model="weightForm.cntrNo" placeholder="箱号"></el-input>
              </el-form-item>
              <el-form-item label="箱型ISO">
                <el-input v-model="weightForm.sztp" placeholder="车牌"></el-input>
              </el-form-item>
              <el-form-item label="FE">
                <el-input v-model="weightForm.efType" placeholder="f/e"></el-input>
              </el-form-item>
              <el-form-item label="司磅员">
                <el-input v-model="weightForm.opUser" placeholder="司磅员"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onWeightFormSubmit">发起请求</el-button>
              </el-form-item>
            </el-form>
            <div class="tit2">响应内容</div>
            <el-input type="textarea" :rows="5" readonly v-model="weightResp"></el-input>

          </el-tab-pane>
      </el-tabs>

    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
  </basic-container>
</template>

<script>
  import axios from 'axios'
  import $ from 'jquery'
  export default {
    data() {
      return {
        activeName: 'gate',
        gateEventUrl: '/api/bctc/service/gate/event',
        weightEventUrl: '/api/bctc/service/weight/event',
        gateForm:{},
        weightForm:{},
        weightResp:'test',
        gateResp:''
      };
    },
    methods: {

      onWeightFormSubmit(){
        this.weightResp = ''
        let params = {...this.weightForm}
        $.ajax({
          url: this.weightEventUrl,
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(params),
          dataType: 'json',
          success:  (data)=> {
            console.log('Success:', data);
             this.weightResp = JSON.stringify(data)
          },
          error:  (error)=> {
             this.weightResp = error.responseText
            console.error('Error:', error);
          }
        });
      },

      onGateFormSubmit(){
        this.gateResp = ''
        let params = {...this.gateForm}
        $.ajax({
          url: this.gateEventUrl,
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(params),
          dataType: 'json',
          success:  (data)=> {
            console.log('Success:', data);
             this.gateResp = JSON.stringify(data)
          },
          error:  (error)=> {
             this.gateResp = error.responseText
            console.error('Error:', error);
          }
        });
      }
    }
  };
</script>

<style>
.tit{
  font-size:20px;
  padding:10px 0;
  margin-bottom: 30px;
  font-weight: bold;
  border-bottom: solid 1px #ddd;
}
.tit2{
  font-size:16px;
  padding:10px 0;
}
</style>

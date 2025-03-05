<template>
  <div>
  <el-form :inline="true" class="demo-form-inline" size="small" label-width="140px">
    <el-form-item label="服务单号">
      <el-input v-model="serviceOrderFormId" placeholder="服务单号" style="width:300px;"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="query"> 搜 索 </el-button>
    </el-form-item>
  </el-form>
    <avue-form ref="form" :option="option" v-model="form" @submit="onSubmit" @reset-change="$emit('onCancel')"/>
  </div>
</template>

<script>
  import option from "./const-form.js"
  import mixins from '../plan1/form-mixins'

  export default {
    mixins: [mixins], 
    components:{
    },
    props:['visible'],
    data() {
      return {
        serviceOrderFormId: '',
        form: {},
        box: true,
        boxFullscreen: false,
        option: option,
        data: []
      };
    },
    computed: {
     
    },
    watch:{
      
    },
    methods: {
    }
  };
</script>

<style>
</style>

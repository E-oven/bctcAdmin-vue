<template>
  <div>
    <avue-form ref="form" :option="option" v-model="data" @submit="onSubmit" @reset-change="$emit('onCancel')"/>
  </div>
</template>

<script>
  import {getList, getDetail, add, update, remove} from "./api.js";
  import option from "./const-form.js";

  export default {
    components:{
    },
    props:['data'],
    data() {
      return {
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
      onSubmit(row, done, loading){
        console.log('s:', row)
          done();
          this.$emit('onSubmit', row)

      }
      
    }
  };
</script>

<style>
</style>

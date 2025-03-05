<template>
  <div>
    <avue-form ref="form" :option="option" v-model="form" @submit="onSubmit" @reset-change="$emit('onCancel')"/>
  </div>
</template>

<script>
  import option from "./const-form.js"

  export default {
    components:{
    },
    props:['visible'],
    data() {
      return {
        queryNumber: '',
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
      query(){

      },
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

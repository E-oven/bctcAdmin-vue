<template>
  <div>
    <avue-form ref="form" :option="option" v-model="data"/>

    <PlanTruck v-if="showPlanTruck" :plan="data"/>
    <br/>
    <div v-if="showTask">
      <taskList :planNumber="data.planNumber"/>
    </div>
  </div>
</template>

<script>
  import {getList, getDetail, add, update, remove} from "./api.js";
  import taskList from '../task1/list.vue'
  import option from "./const-view.js";
  import PlanTruck from '../planTruckTeam/index.vue'

  export default {
    components:{
      taskList,PlanTruck
    },
    props:['data','showTask', 'showPlanTruck'],
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
          done();
          this.$emit('onSubmit', row)
      }
    }
  };
</script>

<style>
</style>

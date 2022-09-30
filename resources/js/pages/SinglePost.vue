<template>
  <div>
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
    <button @click="callFunction()" >Invia</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    
    data:function(){
      return{
          post:[],
          selected:0
      }
    },

    methods:{
        callFunction(){
           axios.get('/api/posts/2',{
           }).then((response)=>{
               console.log(response)
           }).catch((error)=>{
               console.log(error)
           })
        }

    
  },
}
</script>

<style>

</style>
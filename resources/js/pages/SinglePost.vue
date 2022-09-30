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
export default {
    data:function(){
      return{
          post:[],
          selected:0
      }
    },

    methods:{
        callFunction(){
            console.log('hai cliccato')
        }
    //   getPosts(){
    //       axios.get('/api/posts',{
    //       }).then((response)=>{
    //           this.posts=response.data.result.data;
    //       }).catch((error)=>{
    //           console.log(error)
    //       })

    //       axios.get('/api/tags',{
    //       }).then((response)=>{
    //           this.tags=response.data.result.data;
    //       }).catch((error)=>{
    //           console.log(error)
    //       })
    //   }
  },
}
</script>

<style>

</style>
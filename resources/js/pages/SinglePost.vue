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
    <!-- POST -->
    <div v-if="vuoto" class="card w-25 mx-auto text-center">
        <div>
            <img  :src="Post.post_image" alt="">
        </div>
        <p> {{ Post.author}}</p>
        <h2> {{ Post.title}}</h2>
        <p> {{ Post.Post_content}}</p>
        <p> {{ Post.Post_date}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    
    data:function(){
      return{
          Post:[],
          selected:0,
          vuoto:false
      }
    },

    methods:{
        
        callFunction(){
           axios.get('/api/posts/'+this.selected,{
           }).then((response)=>{
               this.Post=response.data.result.data;
               this.vuoto=true;
           }).catch((error)=>{
               console.log(error)
           })

        }

    
  },
}
</script>

<style>

</style>
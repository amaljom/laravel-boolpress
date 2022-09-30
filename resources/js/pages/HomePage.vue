<template>
  <div>
    <MainComponent :posts="posts" :tags="tags"/>
  </div>
</template>

<script>
import MainComponent from '../components/MainComponent.vue';
import axios from 'axios';

export default {
  components:{
      MainComponent,
  },

  data:function(){
      return{
          posts:[],
          tags:[]
      }
  },

  methods:{
      getPosts(){
          axios.get('/api/posts',{
          }).then((response)=>{
              this.posts=response.data.result.data;
          }).catch((error)=>{
              console.log(error)
          })

          axios.get('/api/tags',{
          }).then((response)=>{
              this.tags=response.data.result.data;
          }).catch((error)=>{
              console.log(error)
          })
      }
  },

  created(){
      this.getPosts();
  }
}
</script>

<style>

</style>
<template>

    <section class="text-center">
        <section class="d-flex justify-content-center">
            <div>
                
                 <router-link class="fz" to="/About">about us</router-link> 
            </div>
            <div>

                 <router-link class="fz" to="/HomePage">home</router-link> 
            </div>
        </section>
 
        <router-view></router-view> 
    </section>
   
</template>

<script>
export default {

}
</script>

<style>
.fz{
    font-size: 2rem;
    margin: 0 15px;
}
</style>

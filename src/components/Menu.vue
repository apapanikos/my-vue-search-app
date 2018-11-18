<template>
    <Slide right>
        <router-link to="/"><span>Home</span></router-link>
        <router-link to="/about"><span>About</span></router-link>
    </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu' 
export default {
     name: 'menu',
     components:{
       Slide

     }
}
</script>

<style lang="scss">
.bm-menu {
  background-color: #58B19F;

  .bm-cross-button {
      margin-right: 1em;
     .bm-cross {
         background-color: #2C3A47;
     }
  }
 span {
     padding:1em 0;
     color: #2C3A47;
 }
}
.bm-burger-bars:nth-of-type(2){
  top:30% !important;
}
.bm-burger-bars:nth-of-type(3){
  top:60% !important;
}
.bm-burger-bars {
    background-color: #55E6C1;
}

.line-style {
    height: 10%;
}
</style>


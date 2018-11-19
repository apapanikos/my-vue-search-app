<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><font-awesome-icon icon="music" /><span> VueLyrics</span></router-link>
      <Menu/>
    </div>
      <div class="page">
          <transition name="router-anim" mode="out-in">
          <router-view/>
        </transition>
      </div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu' 
import Menu from '@/components/Menu.vue'

    export default {
     name: 'app',
     components:{
       Menu

     }
    }
</script>


<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,400i,700');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    background: #2C3A47;
    font-family: 'Poppins', sans-serif;;
  }
  html, body {
    height: 100%
  }
    a{
      text-decoration:none;
    }
  .page {
    width:100%;
    background: #2C3A47;
    color: #55E6C1;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

  }

.hero {
  width:80%;
  height:90vh;
  margin:0 auto;
  text-align: center;
}
.component-heading {
  padding:2em 0;

}
  
p {
   font-size: 18px;
    margin:0;
    line-height: 1.5;
    color: #e2e2e2;
    /* max-width: 750px; */
    text-align: center;
  }
#nav {
    background: #2C3A47;
    padding: 30px;
    border-bottom: 2px solid #55E6C1;

  }

  #nav a{
  color: #55E6C1;
  padding: 0 1em;
  font-size: 1em;
  text-decoration: none;
  }

  #app {
    background: #fff;
    width: 100%;  
    height: 100vh;
  }

  .router-anim-enter-active {
    animation: coming 1s;
    animation-timing-function: cubic-bezier(.65,0,.32,1.55);
    opacity: 0;
  }

  .router-anim-leave-active {
    animation: going 1s;
    animation-timing-function: cubic-bezier(.8,-0.49,.36,1);
  }

  @keyframes going {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(300px);
      opacity: 0;
    }
  }

  @keyframes coming {
    from {
      transform: translateY(300px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

</style>

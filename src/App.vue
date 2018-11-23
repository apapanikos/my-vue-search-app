<template>
  <div id="app">
       <Menu/>
      <div class="page">
        <transition name="router-anim" mode="out-in">
          <router-view/>
        </transition>
      </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Footer from './components/Footer'

    export default {
     name: 'app',
     components:{
       Menu,
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
    background: #f9f9f9;
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
    color: rgb(20, 20, 20);
    background:#f9f9f9;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  
p {
   font-size: 18px;
    margin:0;
    line-height: 1.5;
    text-align: center;
  }


  #app {
    background: #fff;
    width: 100%;  
    height: 100%;
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
      transform: translateX(0);
    }
    to {
      transform: translateX(300px);
      opacity: 0;
    }
  }

  @keyframes coming {
    from {
      transform: translateX(300px);
      opacity: 0;
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }

</style>

<template>
    <div id="nav">
      <router-link to="/"><span>VueLyrics</span></router-link>
      <div class="pull-right">
        <router-link to="/"><span>Home</span></router-link>
        <router-link to="/about"><span>About</span></router-link>
      </div>
    </div>
</template>

<script>

export default {
     name: 'menu',
     components:{


     }
}
</script>

<style lang="scss">
#nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #00b894;
    padding: 20px;
    border-bottom: 1px solid rgb(230, 230, 230);
    
    a{
    color: #fff;
    padding: 0 1em;
    font-size: 1em;
    text-decoration: none;
    }

  }
</style>


<template>
    <div class="home">
      <div class="hero">
        <div class="component-heading">
          <h1>Explore song lyrics</h1>
        </div>
        <p>Discover lyrics app made with <span>Vue.js</span> and musixmatzh API</p>
        <Search/>
        <Tracks/>
      </div>
      </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Search from '@/components/Search.vue'
import Tracks from '@/components/Tracks.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Search,
    Tracks
  }
}
</script>

<style lang="scss" scoped>
  .home {
    .component-heading{
        display: flex;
        align-items: center;
        justify-content: center;
      
    h1 {
      font-size: 3.5em;
      font-weight: 400;
      text-transform: capitalize;

    }
    }
    span{
        color:#4fc08d;
      }
  }
</style>


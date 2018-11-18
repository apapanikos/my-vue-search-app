<template>
    <div class="home">
      <div class="hero">
        <div class="component-heading">
          <h1>Search for lyrics from top charts songs</h1>
        </div>
        <p>This is the perfect tool to find lyrics</p>
        <Search/>
      </div>
      </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Search
  }
}
</script>

<style lang="scss" scoped>

</style>


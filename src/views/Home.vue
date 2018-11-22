<template>
    <div class="home">
      <div class="content">
        <div class="hero">
          <div class="hero__heading">
            <div class="hero__heading-title">
              <h1>Explore song lyrics</h1>
            </div>
            <p>Discover lyrics app made with <a v-bind:href="url1"><span> Vue.js</span> </a>and <a v-bind:href="url2"> <span> Musixmatch API</span> </a></p>
            <Search/>
          </div>
        </div>
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
    Tracks,
  },
  data(){
    return {
      url1:'https://vuejs.org/',
      url2:'https://developer.musixmatch.com/'
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width:100%;

      .content {
      width:100%;
      height:100vh;
      margin:0 auto;
      text-align: center;
      background: #f9f9f9;

      .hero{

         display: flex;
         align-items: center;
         justify-content: center;
         height: 50vh;
         background:#00b894; //linear-gradient(120deg, #00cec9, #00b894);
         width: 100%;


            &__heading{
        
            &-title{
            display: flex;
            align-items: center;
            justify-content: center;
          
              h1 {
                color:#fff;
                font-size: 4.5em;
                font-weight: 300;
                text-transform: capitalize;
                line-height: 1.7

              }
            }
            p{
              color:#2d3436;
              letter-spacing: .2em;
              line-height: 1.7
            }
            span{
                // color:#4fc08d;
                color:#55efc4;
                font-weight: 700;
              }
            strong {
              // color:#ff6050;
              color:#fff;
              font-weight: 700;

            }

         }
      }
    }

    

  }
</style>


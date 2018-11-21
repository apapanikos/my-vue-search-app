<template>
    <div class="home">
      <div class="content">
        <div class="hero">
          <div class="hero__heading">
            <div class="hero__heading-title">
              <h1>Explore song lyrics</h1>
            </div>
            <p>Discover lyrics app made with <span>Vue.js</span> and <strong> Musixmatch API</strong></p>
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
    Tracks
  }
}
</script>

<style lang="scss" scoped>
  .home {

      .content {
      width:100%;
      height:100vh;
      margin:0 auto;
      text-align: center;
      background: #f3f3f3;

      .hero{

         display: flex;
         align-items: center;
         justify-content: center;
         height: 60vh;
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
              line-height: 1.7
            }
            span{
                // color:#4fc08d;
                color:#fff;
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


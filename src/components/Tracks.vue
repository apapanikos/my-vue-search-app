<template>
    <div class="tracks">
        <div class="chart-songs-title">
                <h2>TOP 10 US TRACKS</h2>
        </div>
        <div v-if="tracks.length > 0" class="results">
             <track-item v-for="track in tracks" :key="track.track.track_id" :track="track">
             </track-item>
        </div>
        <div v-else>
            <ball-grid-pulse-loader color="#55E6C1" size="20px"></ball-grid-pulse-loader>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import TrackItem from './TrackItem'

export default {
    name: 'tracks',
    components: {
        TrackItem,
    },
    data() {
        return {
            id:this.$route.params.id,
           tracks:[]
        }
    },
    methods: {

    },
    created() {

    },

      mounted () {
       axios
      .get('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=4b7f42e95eff356453a45073f87f0954')
      .then(res => {
          this.tracks = res.data.message.body.track_list
          console.log(res.data.message.body.track_list)

       })
    //   .catch(error => console.log(error))
  }
}
</script>

<style lang="scss">
   
      .tracks {

        .chart-songs-title {
             padding:2em 0;
         }

        .results {
            flex-wrap: wrap;
            display: flex;
            list-style: none;
            position: relative;
      }  

      }


</style>
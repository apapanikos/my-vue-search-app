<template>
    <div class="tracks">
        <div class="chart-songs-title">
            <h2 v-if="!haSearched">Top 10 US Charts songs</h2>
            <h2 v-else>Search results for <span>{{ searchTitle}}</span></h2>
        </div>
        <div v-if="arrayIsNotEmpty" class="results">
             <track-item v-for="track in tracks" :key="track.track.track_id" :track="track">
             </track-item>
        </div>
        <div v-else>
            <ball-grid-pulse-loader color="#00b894" size="20px"></ball-grid-pulse-loader>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import TrackItem from './TrackItem'
import { EventBus } from '../main.js';

export default {
    name: 'tracks',
    components: {
        TrackItem,
    },
    data() {
        return {
            id:this.$route.params.id,
           tracks:[],
           haSearched: false,
           searchTitle:''
        }
    },
    methods: {

    },
    created() {

    },

    mounted () {

        // Listen for the i-got-searched event and payload:search results
        EventBus.$on('i-got-searched', results => {
        
        this.haSearched = true
        
        //Check if results array is not empty, then replace trakcs array with results tracks
        if(results){
           this.tracks = results[0]
           this.searchTitle = results[1]
           console.log(this.searchTitle)
        }
        });
       axios
      .get('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=12&country=us&f_has_lyrics=1&apikey=4b7f42e95eff356453a45073f87f0954')
      .then(res => {
          this.tracks = res.data.message.body.track_list
        //   console.log(res.data.message.body.track_list)

       })
      .catch(error => console.log(error))
  },
    computed: {
        arrayIsNotEmpty: function(){
            //Check if array of has  been fetched
            if(this.tracks.length > 0){
                return true
            }
        }
    }
}
</script>

<style lang="scss">
   
      .tracks {
          max-width: 1000px;
          margin:0 auto;

        .chart-songs-title {
             padding:2em 0;

             h2{
                 font-size:2.5em;
                 color:#2d3436;
                
                span{
                 color:transparent;
                 background-image:linear-gradient(45deg,#00b894, #55efc4,#55efc4);
                 -webkit-background-clip: text;
                 background-clip :text;
                }

             }
         }

        .results {
            flex-wrap: wrap;
            display: flex;
            list-style: none;
            position: relative;
      }  

      }


</style>
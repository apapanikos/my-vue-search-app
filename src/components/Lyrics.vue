<template>
   <div class="lyrics">
       <div class="track__lyrics">
       <p> {{ lyrics.lyrics_body }}</p>
       </div>
        <!-- <div v-else>
            <ball-grid-pulse-loader color="#55E6C1" size="20px"></ball-grid-pulse-loader>
        </div> -->
   </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'lyrics',
    props: {
        id: {
            type:Number,
            required: true,
        },
    },
    data() {
        return {
           track:[],
           lyrics: [],
        }
    },
    mounted() {
        console.log(this.$route.params.id)
       axios
      .get('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id='+this.$route.params.id+'&apikey=4b7f42e95eff356453a45073f87f0954')
      .then(res => {
          this.lyrics = res.data.message.body.lyrics
          console.log(this.lyrics)

          return axios.get('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id='+this.$route.params.id+'&apikey=4b7f42e95eff356453a45073f87f0954')

       })
       .then(res =>{
           this.track = res.data.message.body.track
           console.log(this.track)
       })
    //   .catch(error => console.log(error))
    }
}
</script>
<style lang="scss" scoped>

</style>

<template>
 <div class="lyrics">
   <div v-if="this.lyrics.lyrics_body" class="hero">
       <div class="lyrics__header">
           <h1>Lyrics</h1>
       </div>
       <router-link to="/">
       <div class="btn-back">
           <button>GO BACK</button>
       </div>
       </router-link>
       <div  class="lyrics__content">
         <h2>{{ track.track_name }}  <span> by {{ track.artist_name }}</span></h2>
         <p> {{ lyrics.lyrics_body }}</p>
         <div class="lyrics__content-album divider">
             <h4>Album Name: <span>  {{ track.album_name}}</span></h4>
         </div>
         <div v-if="track.primary_genres" class="lyrics__content-genre divider">
            <div v-if="track.primary_genres.music_genre_list.length != 0"> 
                <h4>Genre:<span>  {{ track.primary_genres.music_genre_list[0].music_genre.music_genre_name }}</span></h4>
            </div>
            <div v-else>
                <h4>NO GENRE AVAILABLE</h4>
            </div>
         </div>
         <div class="lyrics__content-release divider">
             <h4>Released at:  <span>   {{ track.first_release_date | formatDate}}</span></h4>
         </div>
       </div>
   </div>
    <div v-else>
        <ball-grid-pulse-loader color="#f0eded" size="20px"></ball-grid-pulse-loader>
    </div>
 </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment'
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
           console.log(this.track.primary_genres.music_genre_list)

       })
      .catch(error => console.log(error))
    },
    filters: {
        formatDate: function(value){
            if (value) {
            return moment(String(value)).format('DD/MM/YYYY')
  }
        }
    }
}
</script>
<style lang="scss" scoped>

   .lyrics {
       h1 {
           font-weight: 400;
           font-size: 3.5em;
       }
       .btn-back {
          display: flex;
          padding:2em 0;

          button{
              padding:1em 1.3em;
              border: none;
              background: #f0eded;
              cursor: pointer;
              outline: 0;
              text-decoration: none;
              text-transform: uppercase;
              font-weight: 700;
              color:#202020;
              box-shadow: 0 10px 30px #f0eded, 0 10px 20px rgba(160, 160, 160, 0.05);;
              transition: all .3s ease-in-out;

              &:hover{
                box-shadow: 0 15px 50px rgba(112, 112, 112, 0.4);
              }
          }
       }
       
       &__content{
            position: relative;
            background:#f0eded;
            padding: 1.5em;
            box-shadow: 0 10px 30px #f0eded, 0 10px 20px rgba(160, 160, 160, 0.05);
            h2{
                margin:1em 0;

                span{
                    font-weight: 400;
                    color:#686868;
                }

            }
            p{
                padding:2em;
            }
            h4 {
                margin:1em 0;
                text-align: left;
                span {
                font-weight: 700;
                color:#686868
            }

            }
            .divider{
                position: relative;
                 &:before{
                  content: '';
                  position:absolute;
                  width: 100%;
                  height: 1px;
                  top: 0;
                  margin-top: -10px;
                  left: 0;
                  background:#181818;
                }
            }

           &-album{
                position: relative;
                margin:2em 0;
           }
           &-genre {

                position: relative;
                margin:2em 0;

           }

       }
   }

</style>

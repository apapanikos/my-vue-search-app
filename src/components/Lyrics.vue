<template>
 <div class="lyrics">
   <div v-if="!objectIsEmpty">
       <router-link to="/">
        <div class="btn-back">
           <div class="back"><font-awesome-icon icon="arrow-left" size="lg"/></div> 
        </div>  
       </router-link>
       <div  class="lyrics__content">
         <h1>{{ track.track_name }}</h1>
         <span> by {{ track.artist_name }}</span>
         <h3>Lyrics</h3>
         <p> {{ lyrics.lyrics_body }}</p>
         <div class="lyrics-info">
            <div class="lyrics__content-album divider">
                <h5><span>Album Name:   </span>{{ track.album_name}}</h5>
            </div>
            <div v-if="track.primary_genres" class="lyrics__content-genre divider">
                <div v-if="track.primary_genres.music_genre_list.length != 0"> 
                    <h5><span>Genre:   </span>{{ track.primary_genres.music_genre_list[0].music_genre.music_genre_name }}</h5>
                </div>
                <div v-else>
                    <h5>NO GENRE AVAILABLE</h5>
                </div>
            </div>
            <div class="lyrics__content-release divider">
                <h5><span>Released at:   </span>{{ track.first_release_date | formatDate}}</h5>
            </div>
        </div>
        <div class="share-lyrics">
            <a v-bind:href="share">share</a>
        </div>
       </div>
   </div>
    <div v-else>
        <ball-grid-pulse-loader color="#00b894" size="20px"></ball-grid-pulse-loader>
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
           share:''
        }
    },
    mounted() {
       axios
      .get('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id='+this.$route.params.id+'&apikey=4b7f42e95eff356453a45073f87f0954')
      .then(res => {

          //Store the response results in lyrics array
          this.lyrics = res.data.message.body.lyrics
        //   console.log(this.lyrics)

          return axios.get('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id='+this.$route.params.id+'&apikey=4b7f42e95eff356453a45073f87f0954')

       })
       .then(res =>{

           //Store the track response results in track array
           this.track = res.data.message.body.track
        
           //Store the response share url result in share string
           this.share = res.data.message.body.track.track_share_url

       })
      .catch(error => console.log(error))
    },
    filters: {
        formatDate: function(value){
            if (value) {

            //Format the release date with moment librady
            return moment(String(value)).format('DD/MM/YYYY')
  }
        }
    },
    computed: {
        objectIsEmpty: function(){

            //Check if Object of the lyrics body has not yet fetched by the axios call
            if(Object.keys(this.track).length === 0){
                return true
            }
        }
    }
}
</script>
<style lang="scss" scoped>

   .lyrics {

       max-width: 1000px;
       height:100vh;
       margin:0 auto;

       a{
           color:#fff;
       }

       .btn-back {
          display: flex;
          padding:2em 0;

          .back{
                background:linear-gradient(-45deg,#00b894, #55efc4);
                width:60px;
                height:60px;
                border-radius: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all .2s ease-in-out;

              &:hover{
                transform:scale(1.1);
                transform-origin: center center center;
                box-shadow: 0 10px 30px #f0eded, 0 10px 20px rgba(160, 160, 160, 0.05);
              }
          }
       }
       
       &__content{
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              background:#fff;
              padding:2em;
              border-radius:8px;
              box-shadow: 0 10px 50px rgba(63,63,63,0.1) , 0 10px 20px rgba(121, 121, 121, 0.05);

            h1{
                font-size: 4em;
            }
            span{
                font-weight: 400;
                font-size: 2rem;
                color:transparent;
                 background-image:linear-gradient(45deg,#00b894, #55efc4,#55efc4);
                 -webkit-background-clip: text;
                 background-clip :text;
                }
            h3{
                text-align: center;
                margin-top: 1em;
            }
            p{
                padding:2em 4em;
                color:#686868;
            }

            .lyrics-info{

                margin-top: 1em;

                h5 {
                text-align: left;
                 color:#1f1f1f;
                 font-size: 1em;
                 font-weight: 400;

                    span {
                    font-size: 1em;
                    font-weight: 700;
                    color:#00b894;
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
                    background:#00b894;
                    }
                }

            }

           &-album{

                margin:1.5em 0;
           }
           &-genre {

                margin:1.5em 0;

           }

           .share-lyrics{
              width: 100%;
              display: flex;
              justify-content: flex-end;

              a{
                  cursor:pointer;
                  text-transform: uppercase;
                  padding:.8em 2em;
                  background:#00b894;
                  transform: translateY(100%);
                  transition:all .2s ease-in-out;

                  &:hover{
                    background:#02caa2;
                    box-shadow: 0 10px 30px #f0eded, 0 10px 20px rgba(160, 160, 160, 0.05);
                  }
              }
           }

       }
   }

</style>

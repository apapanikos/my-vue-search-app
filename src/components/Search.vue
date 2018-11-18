<template>
    <div class="search">
        <div class="search-cont">
        <form class="searchForm" >
            <input type="text" v-model="search" placeholder="Song title...">
            <div class="search-icon-cont">
               <div class="search-icon"></div>
            </div>
        </form>
        </div>
        <div class="tracks">
           <div class="chart-songs-title">
                <h2>TOP 10 US TRACKS</h2>
           </div>
               <ul v-if="blogs.length > 0" class="results">
                   <li v-for="blog in blogs" :key="blog.track.track_id">
                       <h4>{{ blog.track.artist_name}}</h4>
                       <p><font-awesome-icon icon="play" /><span> Track:</span> {{ blog.track.track_name }}</p>
                       <p><font-awesome-icon icon="compact-disc" /><span> Album:</span> {{ blog.track.album_name }}</p>
                     <div class="btn-lyrics">
                       <router-link to='/'><font-awesome-icon icon="book-open" /><span> View lyrics</span></router-link>
                    </div>  
                   </li>
               </ul>
                <ball-grid-pulse-loader color="#55E6C1" size="20px"></ball-grid-pulse-loader>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {

    data() {
        return {
           blogs:[],
           search: ''
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
          this.blogs = res.data.message.body.track_list
          console.log(res.data.message.body.track_list)

       })
    //   .catch(error => console.log(error))
  }
}
</script>

<style lang="scss">
   
  .search-cont {
      padding:2em;
      position: relative;
      display: flex;
      align-items:center;
      justify-content: center;
      

      .searchForm { 
          display: flex;
          justify-content: center;
          background:#151c23;
          border-radius: 2000px;
          width:280px;
          box-shadow: inset 0 0 0 2px #2C3A47, 0 10px 30px rgba(44, 58, 71, .5);
         
         input {
             font-size: 16px;
             font-style:italic;
             font-family: 'Montserrat';
             padding:1em;
             background:transparent;
             outline:none;
             border-top: none;
             border-right:none;
             border-left: none;
             border-bottom:none;
         }
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #CAD3C8;
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color:#CAD3C8;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color:#CAD3C8;
        }

        :focus {
            color:#CAD3C8;
        }

        .search-icon-cont{
            margin-left: -40px;

            .search-icon {
            width: 20px;
            height: 20px;
            top:10px;
            border-radius: 20px;
            border: 3px solid #55E6C1;
            display: block;
            position: relative;
            margin-left: 5px;

                &:before {
                    content: '';
                    width: 3px;
                    height: 15px;
                    position: absolute;
                    right: -6px;
                    top: 10px;
                    display: block;
                    background-color: #55E6C1;
                    transform: rotate(-45deg);
                }

            }

        }

      }


  }
         .chart-songs-title {
             padding:2em 0;
         }
        .results {
            flex-wrap: wrap;
            display: flex;
            list-style: none;
            position: relative;

          
          li{
              position: relative;
              flex: 1 0 33%;  //25% for two columns
              background:#151c23;
              margin:1em;
              padding: 1.5em;
              box-shadow: inset 0 0 0 2px #2C3A47, 0 10px 30px rgba(44, 58, 71, .5);
              z-index: 15;
              span{
                  font-weight: 700;
              }
              p{
                  font-size: 16px;
                  text-align: left;
                  margin:1em 0;
              }
             .btn-lyrics{
                 background: #55E6C1;
                 width:100%;
                 padding:1em;
                 margin-top:1em;

                a{
                  
                  text-decoration: none; 
                  color:#fff;
              }
             }

          }
      }
</style>


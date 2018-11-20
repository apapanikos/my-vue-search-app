<template>
    <div class="search">
        <div class="search-cont">
        <form @submit.prevent="handleSubmit" class="searchForm">
            <input type="text" v-model="search" placeholder="Song title...">
            <div class="search-icon-cont">
               <div class="search-icon"></div>
            </div>
        </form>
        </div>
        <div class="search-result">
             <div v-if="results.length > 0">
                 <div v-for="result in results" :key="result.track.track_id">
                   <p>{{ result.track.track_name }}</p>
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import TrackItem from './TrackItem'

export default {

    data() {
        return {
        //    blogs:[],
           search: '',
           results: [],
        //    TrackItem
        }
    },
    methods: {
        handleSubmit: function(){
            console.log(this.search)
            axios.get('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track='+this.search+'&page_size=10&page=1&s_track_rating=desc&apikey=4b7f42e95eff356453a45073f87f0954')
            .then(res =>{
                this.results = res.data.message.body.track_list
                console.log(this.results)
            })
            .catch(error => console.log(error))
    }
    },
    created() {

    },
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
          box-shadow: 0 10px 30px #151c23, 0 10px 20px rgba(37,37,37,.05);
         
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

</style>


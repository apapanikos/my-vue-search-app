<template>
    <div class="search">
        <div class="search-cont">
        <form @submit.prevent="handleSubmit" class="searchForm">
            <input type="text" v-model="search" placeholder="Song title">
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
             <div v-if="empty">
                 <span>Please text a song!</span>
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
           empty: false,
        //    TrackItem
        }
    },
    methods: {
        handleSubmit: function(){

            //Check if input is empty
            if(this.search && !this.search.trim().length == 0){

            //Debugging purposes
            console.log(this.search)

            //Make the call to API with input content
            axios.get('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track='+this.search+'&page_size=10&page=1&s_track_rating=desc&apikey=4b7f42e95eff356453a45073f87f0954')
            .then(res =>{
                this.results = res.data.message.body.track_list
                console.log(this.results)
                this.search = ""
                this.empty = false
            })
            .catch(error => console.log(error))

            } else {
                this.empty = true;
                this.results = []
            }
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
          background:#f0eded;
          border-radius: 2000px;
          width:280px;
          box-shadow: 0 10px 30px #f0eded, 0 10px 20px rgba(95, 95, 95, 0.05);
         
         input {
             font-size: 16px;
             font-style:italic;
             font-family: 'Montserrat';
             padding:1em;
             background:transparent;
             outline:none;
             color: #fff;
             border-top: none;
             border-right:none;
             border-left: none;
             border-bottom:none;
         }
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #5e5e5e;
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color:#5e5e5e;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color:#5e5e5e;
        }

        :focus {
            color:#5e5e5e;
        }

        .search-icon-cont{
            margin-left: -40px;

            .search-icon {
            width: 20px;
            height: 20px;
            top:10px;
            border-radius: 20px;
            border: 3px solid #1f1f1f;
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
                    background-color: #1f1f1f;
                    transform: rotate(-45deg);
                }

            }

        }

      }


  }

</style>


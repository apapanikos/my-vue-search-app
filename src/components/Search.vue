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
             <div v-if="empty">
                 <span>Please fill out this field!</span>
             </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import TrackItem from './TrackItem'
import { EventBus } from '../main.js';


export default {
    components:{
      
    },
    data() {
        return {
           search: '',
           results: [],
           empty: false,

        }
    },
    methods: {
        handleSubmit: function(){

            //Check if input is empty
            if(this.search && !this.search.trim().length == 0){


            //Make the call to API with input content
            axios.get('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track='+this.search+'&page_size=12&page=1&s_track_rating=desc&apikey=4b7f42e95eff356453a45073f87f0954')
            .then(res =>{
                this.results = res.data.message.body.track_list
                
            // Send the event on a channel (someone searched sth) with a payload (the results array and the input word(s))
            EventBus.$emit('i-got-searched', {0:this.results, 1:this.search})

           //Empty input and set the "false input" variable handler to false 
            this.search = ""
            this.empty = false

            })
            .catch(error => console.log(error))


            } else {
                //Show "false input" error message and empty results array
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
          align-items: center;
          background:#fff;
          border-radius: 2000px;
          width:500px;
          box-shadow: 0 30px 25px -19px rgba(63,63,63,0.3) , 0 10px 20px #00b894;
         
         input[type="text"] {
             font-size: 15px;
             font-family : inherit;
             padding:1.2em;
             width:90%;
             background:transparent;
             outline:none;
             color: #2d3436;
             border:none;    
         }
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #b2bec3;
            font-style:italic;
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            font-style:italic;
            color:#b2bec3;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            font-style:italic;
            color:#b2bec3;
        }

        :focus {
            color:#b2bec3;
        }
        .search-icon-cont{
            background:linear-gradient(45deg,#00b894, #55efc4);
            width:45px;
            height:45px;
            border-radius: 45px;
            margin-left:-5px;
            display: flex;
            align-items: center;
            justify-content: center;
                .search-icon {
                    background: none;
                    position: relative;
                    height: 15px;
                    width: 15px;
                    padding: 0;
                    border-radius: 100%;
                    outline: 0;
                    border: 2px solid white;
                    margin-top: -5px;
                    margin-left: -6px;
                    color: inherit;
                    cursor: pointer;
                    // -webkit-transition: 0.2s ease-in-out;
                    // transition: 0.2s ease-in-out;
                    // -webkit-transform: translate(-100%, -50%);
                    // -ms-transform: translate(-100%, -50%);
                    // transform: translate(-100%, -50%);
                    }

                    &:before {
                    content: "";
                    position: absolute;
                    width: 7px;
                    height: 2px;
                    background-color: #fff;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                    margin-top: 5px;
                    margin-left: 5px;
                    }
        }

      }
  }

</style>


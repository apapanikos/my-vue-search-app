<template>
    <div class="search">
        <div class="search-cont">
        <form class="searchForm" >
            <input type="text" v-model="search" placeholder="Search lyrics">
            <div class="search-icon-cont">
               <div class="search-icon"></div>
            </div>
        </form>
        </div>
        <ul  class="results">
           <router-link to="/blog"> <li v-for="blog in filteredBlogs" :key="blog.title">
                <h2>{{ blog.title | uppercase }}</h2>
                <article>{{ blog.body }}</article>
            </li> </router-link>
        </ul>
    </div>
</template>

<script>
// import axios from 'axios';
import Blog from '../views/Blog.vue'
// import { blogBus } from '../main.js';

export default {
    // props: ['$blogs'],
    data() {
        return {
           blogs:[],
           search: '',
           query:"",
             searchUrl: "https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&format=json&callback=?&search=",
             limit: 10,
            noSearch: true
        }
    },
    methods: {
        // blogSelected: function () {
        // // Using the service bus
        // blogBus.$emit('blogSelected', this.$blogs);
        // }
    },
    created() {
         this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
             this.blogs = data.body.slice(0,5);
             console.log(this.blogs);
         })
    },
    computed: {
        filteredBlogs: function(){
            return this.blogs.filter((blog) =>{
                return blog.title.match(this.search);
            })
        }
    },
    filters: {
          uppercase: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.toUpperCase()
  }
    },
//       mounted () {
//        axios
//       .get('http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=2&country=it&f_has_lyrics=1&apikey=4b7f42e95eff356453a45073f87f0954')
//       .then(response => {
//           this.blogs = response.data.message.body.track_list
//           console.log(this.blogs[0])
//        })
//       .catch(error => console.log(error))
//   }
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
        .results {
          display: flex;
          flex-direction: column;
          list-style: none;

          a {
            color: inherit;
            text-decoration: none;
          }
          
          li{
              position: relative;
              cursor:pointer;
              max-width:600px;
              background:#151c23;
              border-radius: 10px;
              margin:1em;
              padding:1em;
              box-shadow: inset 0 0 0 2px #2C3A47, 0 10px 30px rgba(44, 58, 71, .5);
              z-index: 15;
          }
      }
</style>


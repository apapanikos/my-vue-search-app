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
    </div>
</template>

<script>
// import axios from 'axios';

export default {

    data() {
        return {
        //    blogs:[],
           search: ''
        }
    },
    methods: {

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


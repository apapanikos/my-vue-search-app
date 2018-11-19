<template>
    <div  class="track-item">
            <h4>{{ blog.track.artist_name}}</h4>
            <p><font-awesome-icon icon="play" /><span> Track:</span> {{ blog.track.track_name }}</p>
            <p><font-awesome-icon icon="compact-disc" /><span> Album:</span> {{ blog.track.album_name }}</p>
            <div class="btn-lyrics">
                <router-link to='/'><font-awesome-icon icon="book-open" /><span> View lyrics</span></router-link>
            </div>  
    </div>
</template>

<script>
export default {
    name:'track-item',
    props: {
        blog: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
          .track-item{
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

</style>

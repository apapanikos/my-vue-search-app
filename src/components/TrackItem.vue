<template>
    <div  class="track-item">
            <h4>{{ track.track.artist_name}}</h4>
            <p><font-awesome-icon icon="play" /><span> Track:</span> {{ track.track.track_name }}</p>
            <p><font-awesome-icon icon="compact-disc" /><span> Album:</span> {{ track.track.album_name }}</p>
            <router-link :to="{ name: 'lyrics', params: {id: track.track.track_id } }">
            <div class="btn-lyrics">
                <font-awesome-icon icon="book-open" /><span> View lyrics</span>
            </div>  
            </router-link>
    </div>
</template>

<script>
export default {
    name:'track-item',
    props: {
        track: {
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
              box-shadow: 0 10px 30px #151c23, 0 10px 20px rgba(37,37,37,.05);
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

             }
             a{
                  
                  text-decoration: none; 
                  color:#fff;
              }

          }

</style>

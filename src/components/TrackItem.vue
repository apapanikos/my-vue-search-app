<template>
    <div  class="track-item">
            <router-link :to="{ name: 'lyrics', params: {id: track.track.track_id } }">
                <div class="track-header">
                    <font-awesome-icon icon="music" size="4x" color="#ffffffbf"/>
                </div>
                <h4>{{ track.track.artist_name}}</h4>
                <div class="track-body">
                    <p><font-awesome-icon icon="play" color="#00b894"/><span>  Track:</span>  {{ track.track.track_name }}</p>
                    <p><font-awesome-icon icon="compact-disc" color="#00b894" /><span>  Album:</span>  {{ track.track.album_name }}</p>
                </div>
                <div class="track-footer">

                        <div class="btn-lyrics">
                            <font-awesome-icon icon="arrow-right" size="lg"/>
                        </div>  

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
              flex: 1 0 25%;
              background:#fff;
              border-radius:10px;
              margin:1.4em;
              box-shadow: 0 10px 50px rgba(63,63,63,0.1) , 0 10px 20px rgba(121, 121, 121, 0.05);
              transition: all .4s ease-in-out;
                a{
                    
                    text-decoration: none; 
                    color:#fff

                }

              .track-header{
                  background:linear-gradient(45deg,#00b894, #55efc4);
                  height:200px;
                  display: flex;
                  justify-content: center;
                  align-items:center;
                  border-top-right-radius: 10px;
                  border-top-left-radius: 10px;

              }

              h4{
                  padding-top:1em;
                  color:#2d3436;
              }

              .track-body{
                  padding-left:1.2em;
                  padding-right:1.2em;
                  padding-top:1em;
              }
              span{
                  font-weight: 700;
                  color:#2d3436;
              }
              p{
                  font-size: 16px;
                  text-align: left;
                  margin:1em 0;
                  color:#2d3436;
              }

              .track-footer{
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;

                .btn-lyrics{
                    background:linear-gradient(-45deg,#00b894, #55efc4);
                    width:60px;
                    height:60px;
                    border-radius: 60px;
                    transform:translateY(50%);
                    padding:1em;
                    margin-top:1em;
                    display: flex;
                  align-items: center;
                  justify-content: center;
                  transition: all .3s ease-in-out;

                }
        
              }

              &:hover{
                  transform: translateY(-20px);
                  box-shadow: 0 30px 50px rgba(63,63,63,0.1) , 0 30px 20px rgba(121, 121, 121, 0.05);
              }

              &:active{
                  transform: scale(0.9);
              }

          }

</style>

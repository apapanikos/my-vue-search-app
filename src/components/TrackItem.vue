<template>
    <div  class="track-item">
            <router-link :to="{ name: 'lyrics', params: {id: track.track.track_id } }">
                <div class="track-header">
                    <font-awesome-icon icon="music" size="3x" color="#ffffffbf"/>
                    <h4>{{ track.track.track_name}}</h4>
                </div>
                <div class="track-body">
                    <p><font-awesome-icon icon="user" color="#00b894"/><span>  {{ track.track.artist_name }}</span> </p>
                    <p><font-awesome-icon icon="compact-disc" color="#00b894" />  {{ track.track.album_name }}</p>
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
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              background:#fff;
              border-radius:8px;
              margin:1.4em;
              box-shadow: 0 10px 50px rgba(63,63,63,0.1) , 0 10px 20px rgba(121, 121, 121, 0.05);
              transition: all .4s ease-in-out;
                a{
                    
                    text-decoration: none; 
                    color:#fff

                }

              .track-header{
                  background:linear-gradient(45deg,#00b894, #55efc4);
                  height:180px;
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  align-items:center;
                  border-top-right-radius: 8px;
                  border-top-left-radius: 8px;

              }

              h4{
                  padding-top:1em;
                  font-size: 1.1em;
                  font-weight: 400;
                  max-width:310px;
                  color:#f9f9f9;
              }

              .track-body{
                padding-right: 1.2em;
                padding-left: 1.2em;
                padding-top: .6em;
                height:60px;
              }

              p{
                  font-size: 14px;
                  text-align: left;
                  line-height: 1.6;
                  color:#686868;

                  span{
                  font-size: 16px;
                  font-weight: 700;
                  color:#2d3436;
              }
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
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .2s ease-in-out;

                }
        
              }

              &:hover{
                  transform: translateY(-12px);
                  box-shadow: 0 30px 50px rgba(63,63,63,0.1) , 0 30px 20px rgba(121, 121, 121, 0.05);
              }

              &:active{
                  transform: scale(0.9);
              }

          }

</style>

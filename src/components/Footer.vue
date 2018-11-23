<template>
    <div class="footer">
        <h3>View <span> <a v-bind:href="git">github</a> </span> for more...</h3>
    </div>
</template>
<script>
export default {
    data(){
    return {
      git:'https://github.com/apapanikos'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
    width:100%;
    height:10vh;
    background: #00b894;
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items:center;

    h3{
        font-weight: 400;

        span{

         font-weight: 700;

            a{

                color:#fff;
             }

        }
    }
}
</style>

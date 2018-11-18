<template>
    <div class="blog">
        <h1>This is my blog</h1>
        <!-- <div class="blog-cont">
         <p v-if="!$blogs">Error</p>
        <p v-else>success</p>
        </div> -->
    </div>
</template>

<script>
import { blogBus } from '../main.js';
export default {
     data: function () {
    return {
    //    $blogs: null
  }
 },
 created() {
  // Using the service bus
//    blogBus.$on('blogSelected', ($blogs) => {
//    this.$blogs = $blogs;
//    console.log(this.$blogs)
//   });
 }
    
}
</script>


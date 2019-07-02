<template>
  <div id="app" class="h-100">
    <router-view/> 
  </div>
</template>



<style lang="scss">
//scss import
  @import './assets/scss/variables.scss';
  @import './node_modules/bootstrap/scss/bootstrap.scss';
  @import './assets/scss/form.scss';

  html, body {
    height: 100%;
  }

  .page-enter,
  .page-leave-active {
    opacity: 0;
  }

  .page-enter-active,
  .page-leave-active {
    transition: opacity 300ms;
  }
</style>

<script>
  export default {
    data() {
        return {
          authenticated: false
          }
        }
      }
</script>
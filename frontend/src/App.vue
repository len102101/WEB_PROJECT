<template>
  <div id="app" class="h-100">
    <router-view/> 
  </div>
</template>

<style lang="scss">
//scss import
  @import './assets/scss/variables.scss';
  @import './node_modules/bootstrap/scss/bootstrap.scss';
  // @import '/assets/css/bootstrap.min.css';
  @import './assets/scss/form.scss';
  @import './assets/css/register.css';
  @import './assets/css/sb-admin-2.min.css';

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
<template lang="html">
  <section class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col wrapper-box">
        <img class="mx-auto d-block" src="../assets/logo-new-color-site.png" alt="Compacto Records" title="Compacto Records">
        <p class="wrapper-box__title text-center">Welcome</p>

        <div>
            <router-link to="/Register/Student"><input type="button"  class="btn btn-primary btn-block btn-lg btn-std" value="학생으로 가입하기"></router-link>
        </div>

        <div>
            <router-link to="/Register/Teacher"><input type="button"  class="btn btn-primary btn-block btn-lg btn-tea" value="선생님으로 가입하기"></router-link>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 300ms;
  }
</style>

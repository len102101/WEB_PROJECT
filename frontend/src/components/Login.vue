<template lang="html">
  <section class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col wrapper-box">
        <img class="mx-auto d-block" src="../assets/logo-new-color-site.png" alt="Compacto Records" title="Compacto Records">
        <p class="wrapper-box__title text-center">Sign in</p>
        <div>


          <form class="form form-newaccount" id="loginForm">
            <div class="form-group">
              <label for="inputUser">E-mail</label>
              <input v-model="input.mail" @focus="clearError()" id="inputUser" type="text" name="username" class="form-control" placeholder="Username">
            </div>

            <div class="form-group">
              <label for="inputPassword">Password</label>
              <input v-model="input.password" @focus="clearError()" @keyup.enter="login" id="inputPassword" type="password" name="password" class="form-control" placeholder="Password">
            </div>

            <input type="button" v-on:click="login()" class="btn btn-default" id="submitLogin" value="Entrar">
            <transition name="fade">
              <span class="error-block error-message" v-show="error != null">{{ error }}</span>
             </transition>
             <hr>
             <router-link to="/register" class="text-link d-block text-right">No account yet?</router-link>
          </form>


        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Login',
    metaInfo: {
      title: 'Sign in',
      titleTemplate: '%s | Compacto Records'
    },
    data() {
      return {
        input: {
          mail: '',
          password: '',
        },
        error: '',
      }
    },
    methods: {
      login() {
        this.$http.post('/singup/checklogin', {  
        input: this.input
      }).then(
        (response) => {  
          console.log(response)
          console.log(response.status)
          if(response.status == "205"){
            alert("이미 로그이 되어 있다고")
            this.$router.push('/home')
            return
          }
          console.log(response)
          alert('success login: ' + response.data.name)
          this.$router.push('/home')
        },
        (error) => { // error 를 보여줌
          alert(error.response.data.error)
        }
      )
      },
      clearError() {
        this.error = ''
      },
    }
  }
</script>

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

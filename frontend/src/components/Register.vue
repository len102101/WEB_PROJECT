<template lang="html">
  <section class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col wrapper-box">
        <img class="mx-auto d-block" src="../assets/logo-new-color-site.png" alt="Compacto Records" title="Compacto Records">
        <p class="wrapper-box__title text-center">Welcome</p>
        <div>


          <form class="form form-newaccount" id="passwordForm">
            <div class="form-group">
              <label for="">E-mail</label>
              <input type="text" v-model="input.username" @focus="clearError('username')" @blur="username_check" :class="{'orange': error.username !== ''}" name="username" class="form-control" id="username">
            </div>


            <div class="form-group">
              <label for="">Password</label>
              <input type="password" v-model="input.password" class="input-lg form-control" :class="{'green' : passValid === 3, 'yellow' : passValid === 2, 'orange' : passValid === 1}" name="password1" id="password1" autocomplete="off">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-newaccount__bullet-steps d-flex flex-row">
                    <div class="bullet-pass-hor" :class="{'active' : passValid > 0}"><span :class="{'green' : passValid === 3, 'yellow' : passValid === 2, 'orange' : passValid === 1}"></span></div>
                    <div class="bullet-pass-hor" :class="{'active' : passValid > 1}"><span :class="{'green' : passValid === 3, 'yellow' : passValid === 2, 'orange' : passValid === 1}"></span></div>
                    <div class="bullet-pass-hor" :class="{'active' : passValid > 2}"><span :class="{'green' : passValid === 3, 'yellow' : passValid === 2, 'orange' : passValid === 1}"></span></div>
                    {{ passValid.length }}
                  </div>
                </div>


                <div class="col-sm-12">
                  <span class="d-block bullet-pass-rounded"><span class="fa fa-circle" :class="{'active': minLength, 'orange': !minLength && input.password.length > 0}" aria-hidden="true"></span> At least 6 characters</span>
                  <span class="d-block bullet-pass-rounded"><span class="fa fa-circle" :class="{'active': hasNumber, 'orange': !hasNumber && input.password.length > 0}" aria-hidden="true"></span> At least 1 number</span>
                  <span class="d-block bullet-pass-rounded"><span class="fa fa-circle" :class="{'active': hasUpperCase, 'orange': !hasUpperCase && input.password.length > 0}" aria-hidden="true"></span> At least 1 uppercase letter</span>
                </div>
              </div>
            </div>


            <div class="form-group">
              <label for="">Confirm your password</label>
              <input type="password" v-model="input.match_password" @focus="clearError('passwordMatch')" @blur="match_check" @keyup.enter="newUser" class="input-lg form-control" name="password2" id="password2" autocomplete="off">
            </div>


            <input type="button" v-on:click="newUser()" class="btn btn-default" id="submit" data-loading-text="Cadastrando..." value="Cadastrar">
            <transition-group name="fade" class="error-block d-block">
              <span class="error-message" :key="index + 'error'" v-for="(errorName, index) in error" v-show="errorName !== ''">{{ errorName }}</span>
            </transition-group>
            <hr>
            <router-link to="/login" class="text-link d-block text-right">Already have an account?</router-link>
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
      title: 'Welcome',
      titleTemplate: '%s | Compacto Records'
    },
    data() {
      return {
        input: {
          username: '',
          password: '',
          match_password: '',
        },
        error: {
          password: '',
          passwordMatch: '',
          username: '',
        },
      }
    },
    methods: {
      // 비밀번호 두개가 일치하는지 확인
      match_check() {
        this.error.passwordMatch = ''
        if (this.input.password !== this.input.match_password) this.error.passwordMatch = 'Passwords do not match'
        return this.error.passwordMatch !== ''
      },

      //에러 문구 초기화
      clearError(field) {
        this.error[field] = ''
      },
      //비밀번호 조건 3가지 검사
      password_check() {
        this.error.password = ''
        if (!this.hasNumber) this.error.password = 'Password does not contain a number'
        if (!this.hasUpperCase) this.error.password = 'Password does not contain uppercase letter'
        if (!this.minLength) this.error.password = 'Password does not contain 6 characters'

        return this.error.password !== ''
      },

      //이메일 유효성 검사
      username_check() {
        this.error.username = ''
        if (!this.validEmail(this.input.username)) this.error.username = 'Enter a valid e-mail address'
        if (this.input.username === '') this.error.username = 'Enter an e-mail'
        return this.error.username !== ''
      },
      newUser() {
        if (this.username_check()) return
        if (this.password_check()) return
        if (this.match_check()) return
        this.$router.push({ name: 'login' });
        return this.error === ''
      },

      //정규표현식
      validEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
    },
    computed: {
      //비밀번호 숫자 존재 여부
      hasNumber() {
        return /\d/.test(this.input.password)
      },
      //비밀번호 소문자 존재 여부
      hasLowerCase() {
        return /[a-z]/.test(this.input.password)
      },
      //비밀번호 대문자 존재 여부
      hasUpperCase() {
        return /[A-Z]/.test(this.input.password)
      },
      //비밀번호 촤소 길이 확인
      minLength() {
        return this.input.password.length > 5
      },
      // 비밀번호 유효성 검사
      passValid() {
        let value = 0
        if (this.hasNumber) value += 1
        if (this.hasUpperCase) value += 1
        if (this.minLength) value += 1
        return value
      },
    },
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

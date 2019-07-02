<template lang="html">
  <section class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col wrapper-box">
        <img class="mx-auto d-block" src="../assets/logo-new-color-site.png" alt="Compacto Records" title="Compacto Records">
        <p class="wrapper-box__title text-center">Welcome</p>
        <div>

          <form class="form form-newaccount" id="passwordForm">
            <div class="form-group">
              <label for="">Name</label>
              <input type="text" v-model="input.name" name="name" class="form-control" id="name">
            </div>

            <div class="form-group">
              <label for="">E-mail</label>
              <input type="text" v-model="input.mail" @focus="clearError('mail')" @blur="mail_check" :class="{'orange': error.mail !== ''}" name="mail" class="form-control" id="mail">
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

            <div class="form-group">
              <label for="">Student ID</label><br />
              <select v-model="input.Grade">
                <option disabled value="">Grade</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>

              <select v-model="input.Class">
                <option disabled value="">Class</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>

              <select v-model="input.Number">
                <option disabled value="">Number</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
              </select>
            </div>


            <input type="button" v-on:click="singup" class="btn btn-default" id="submit" value="Cadastrar">
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
        //입력값
        input: {
          name: '',
          mail: '',
          password: '',
          match_password: '',
          Grade: '',
          Class: '',
          Number: ''
        },
        
        //에러메세지
        error: {
          password: '',
          passwordMatch: '',
          mail: '',
        },
      };
    },
    methods: {
      singup: function (event) {
        this.$http.post('/singup/student', {  
        input: this.input
      }).then((response) => {
        if (response.data.result === 0) {
          alert('Error, please, try again')
        }
        if (response.data.result === 1) {
          alert('Success')
          this.$router.push('/login') // Login 페이지로 보내줌
        }
      })
      },

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
      mail_check() {
        this.error.mail = ''
        if (!this.validEmail(this.input.mail)) this.error.mail = 'Enter a valid e-mail address'
        if (this.input.mail === '') this.error.mail = 'Enter an e-mail'
        return this.error.mail !== ''
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

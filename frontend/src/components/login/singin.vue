<template>
  <div id="login">
    <div> Login </div>
    <input v-model="user.id" placeholder="ID"> <br/>
    <input v-model="user.password" type="password"  placeholder="password">
    <button v-on:click="login" >login</button>
    <a v-bind:href="url.signUpUrl" > Sign up </a>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: {
        id: '',
        password: ''
      },
      url: {
        signUpUrl: 'signup'
      }
    }
  },
   methods: {
    login: function (event) {
      this.$http.post('/login/checkLogin', {
        user: this.user
      })
      .then(
        (response) => {  //로그인 성공
          alert('success login')
        },
        (error) => { // error 를 보여줌
          alert(error.response.data.error)
        }
      )
      .catch(error => {
        alert(error)
      })
    }
  }
}
</script>
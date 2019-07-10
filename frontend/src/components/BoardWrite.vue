<template lang="html">
  <section class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col wrapper-box">
        <img class="mx-auto d-block" src="../assets/img/sky_logo.png" alt="Compacto Records" title="Compacto Records">
        <p class="wrapper-box__title text-center">Write</p>
        <div>


          <form class="form form-newaccount" id="loginForm">
            <div class="form-group">
              <label for="inputUser">title</label>
              <input v-model="input.title" class="form-control" placeholder="title">
            </div>

            <div class="form-group">
              <label for="inputPassword">content</label>
              <textarea v-model="input.contents" class="form-control" placeholder="content"> </textarea>
            </div>

            <input type="button" v-on:click="submit" class="btn btn-default" value="Wirte!">
          </form>


        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {

    data () {
    return {
      input: {
          title: '',
          contents: ''
        }
    }
  },
methods: {
    submit: function(){
        this.$http.post('/form/board/write', {  
            input: this.input
      }).then((response) => {
        if (response.data.result === 0) {
          alert('Error, please, try again')
        }
        if (response.data.result === 1) {
          alert('Success')
          this.$router.push('/home')
        }
      })
      .catch(function (error) {
        alert('error')
      })
    }
  }
}
</script>

<style lang="scss">

</style>

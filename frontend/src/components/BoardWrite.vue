<template lang="html">
    <form>
        <label for="">title</label>
        <input type="text" v-model="input.title" autocomplete="off" placehoder="제목">

        <label for="">content</label>
        <input type="text" v-model="input.contents" autocomplete="off" placehoder="본문">

        <input type="button" v-on:click="submit" class="btn btn-default" id="submit" value="Submit">
    </form>
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

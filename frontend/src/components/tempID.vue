<template lang="html">
    <div v-for="i in this.user" class=list>
        {{i}}<br>
    </div>
    
</template>

<style lang="css">
.list{
    border: 5px;
}

</style>


<script>
export default {
    data () {
    return {
      user: []
    }
  },created () {
    // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
    this.fetchData()
  },methods: {
    fetchData () {
      this.$http.get('/singup/List')
      .then(response => {
          console.log(response)
      this.user = response.data
    })
    console.log("Loading end")
    console.log(this.user)
    },
  }
}
</script>
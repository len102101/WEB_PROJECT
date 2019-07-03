<template lang="html">  
    <div class="post">
        <div class="loading" v-if="loading">
            Loading...
        </div>

            <div v-if="this.post.length != 0" class="board_contents_div">
                <div v-for="i in post">
                    <p class="board_title">{{i.title}}</p>
                    <p class="board_contents">{{i.contents}}</p>
                </div> 
            </div>

            <div v-if="this.post.length == 0">
                게시물이 없습니다.
            </div>
        </div>
</template>

<script>
export default {
    data () {
    return {
      loading: true,
      post: []
    }
  },created () {
    // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('/form/home')
      .then(response => {
      this.post = response.data.data
      
    })
    console.log("Loading end")
    this.loading = false
    },
  }
}
</script>
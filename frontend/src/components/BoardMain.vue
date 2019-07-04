<template lang="html">  
    <!-- <nav  class="navbar  navbar-expand-md  bg-warning  navbar-dark sticky-top"> 
      <ul  class="navbar-nav"> 
        <li  class="nav-item"> 
          Gsm 지식in
        </li> 
      </ul> 
    </nav>  -->
    
    <div class="board">
      <div class="board_contents_div">
        <div v-for="i in post" class="post_div">
          <router-link :to="{ name: 'post', params: {postId: i._id }}"><p class="post_title">{{i.title}}</p></router-link>
          <p class="post_contents">{{i.contents}}</p>
        </div> 
      </div>
    </div>

</template>

<script>
export default {
    data () {
    return {
      post: [],
      user:''
    }
  },created () {
    // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('/form/home')
      .then(response => {
      this.post = response.data.data;
      this.user = response.data.name;
      
    console.log(this.post.length)
    console.log("Loading end")
    })
    }
  }
}
</script>

<style lang="scss">
  .post_div{
    width: 50vw;
    height: 8vh;
    border: 3px solid;

    .post_title{
      font-size: 15px;
    }

    .post_contents{
      font-size: 10px;
    } 
  }
</style>
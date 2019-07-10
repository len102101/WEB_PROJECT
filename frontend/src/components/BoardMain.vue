<template lang="html">
  <body>
      <header>
        <div id="util">
          <div class="wrap">
            <div class="fl">
              <span>
                자유롭게 소통해보아요
              </span>
            </div>

            <div class="fr">
              <span class="menu" v-if="this.user">
                <router-link to="/write"><i class="fa fa-user"></i>글쓰기</router-link>
                <i class="fa fa-sign-in"></i><span v-on:click="logout">로그아웃</span>
              </span>

              <span class="menu" v-else>
                <router-link to="/login"><i class="fa fa-sign-in"></i>로그인</router-link>
                <router-link to="/register"><i class="fa fa-user"></i>회원가입</router-link>
              </span>
            </div>
          </div>
        </div>

        <nav id="nav">
          <div class="wrap">
            <div class="fl">
              <router-link to="/home"><span class="logo">GSM 지식in</div>
          </div>
        </nav>
      </header>

      <div id="main">
        <div class="wrap">
          <div class="list">
            <h3>등록된 질문</h3><hr>
            <div class="box-wrap">
              <div v-for="i in post" class="post_div">
                <router-link :to="{ name: 'post', params: {postId: i._id }}"><h4 style="color:black">{{i.title}}</h4></router-link>
                <p class="post_contents">{{i.contents}}</p><hr>
              </div>
            </div>
          </div>
        </div>
  </body>
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
    },
    logout(){
      this.$http.get("/singup/logout")
      alert("로그 아웃")
      this.$router.push('/')
    }
  }
}
</script>


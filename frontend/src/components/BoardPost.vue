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
          <div class="list" v-for="i in this.post">
            <h3>{{i.title}}</h3>
            <span v-if="i.board_adoption">채택완료</span>
            <span v-else>미채택</span>
            <hr>
            <div class="box-wrap">
                {{i.contents}}
            </div>
          </div>

          <div class="list" v-if="this.post[0].comments">
              <h3>답변들</h3>
              <div class="box-wrap" style="height: auto" v-for="j in this.post[0].comments">
                {{j.author}}:
                {{j.contents}}
              </div>
          </div>
          <div class="list" v-else>
             <h3>답변들</h3>
             <div class="box-wrap" style="height: auto">
                아직 답변이 없습니다.
              </div><hr>
          </div>
            

          <div class="list">
            <h3>댓글 작성</h3>
            <div class="box-wrap" style="height: auto">
              <textarea v-model="input.comment" class="form-control" placeholder="comment"> </textarea>
              <span class="commentBtn" v-on:click="commentWrite">write!</span>
            </div>
        </div>
      </div>
  </body>
</template>

<script>
export default {
    data() {
    return {
        input: {
          postId: '',
          comment: ''
        },
        post: [],
        user: ''
    }
    },
    created () {
        const id = this.$route.params.postId;
        if (id === undefined) {
            this.$router.go(-1);
        }else{
            this.$http.get('/form/board/load',{params:  {postId:id}})
            .then(response => {
                this.input.postId = response.data.postId
                console.log(this.postId)
                this.post  = response.data.data
                let date = new Date(this.post[0].board_date)
                
                this.post[0].board_date = String(date.getFullYear()) + "-" + String(date.getMonth()) + "-" + String(date.getDate())
                this.user = response.data.name;
            })
        }
    },
    methods: {
        logout(){
      this.$http.get("/singup/logout")
      alert("로그 아웃")
      this.$router.push('/')
    },
    commentWrite(){
        if(this.user){
            console.log(this.input)
            this.$http.post('/form/comment/write', {  
                input: this.input
            }).then(response => {
              if(response.data.data)
                this.$router.push('/home')
            })
        }else
        alert("로그인이 필요합니다.")
    }
    }
}
</script>

<style lang="scss">
    .commentBtn{
        display: block;
	    margin: 20px auto;
	    max-width: 100px;
	    text-decoration: none;
	    border-radius: 4px;
	    padding: 20px 30px;
        color: rgba(30, 22, 54, 0.6);
        box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
        
        &:hover {
	        color: rgba(255, 255, 255, 0.85);
	        box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;
        }
    }
</style>
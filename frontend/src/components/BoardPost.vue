<template lang="html">
    <div class="post" >
        <div class="navbar navbar-light bg-warning">
            <a class="navbar-brand" href="#"><b>Gsm 지식in</b></a>
            <div class="navbar-toggler" v-if="this.user" style="display: flex">
                <div class="navbar-toggler" v-on:click="logout()">로그아웃</div>
                <div class="navbar-toggler">마이페이지</div>
            </div>
        <router-link to="/login" class="navbar-toggler" v-else>로그인</router-link>
        </div>

        <div v-for="i in post">
            <p class="post_title">{{i.title}}</p>
            <p class="post_date">{{i.board_date}}</p>
            <p class="post_contents">{{i.contents}}</p>
            <p class="post_adoption" v-if="i.board_adoption">완료채택</p>
            <p v-else>미채택</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
      post: [],
      user: ''
    }
    },
    computed: {
        param: function () {
            return this.$route.params;
        }
    },
    created () {
        const id = this.$route.params.postId;
        if (id === undefined) {
            this.$router.go(-1);
        }else{
            this.$http.get('/form/board/load',{params:  {postId:id}})
            .then(response => {
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
    }
    },
}
</script>

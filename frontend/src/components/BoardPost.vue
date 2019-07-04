<template lang="html">
    <p>{{postId}}</p>
</template>

<script>
export default {
    data() {
        post: []
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
                console.log(response)
            })
        }
    }
}
</script>

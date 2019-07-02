<template>
  <div id="app">

    <div class="Container">

      <div class="title">
        <p>GSM 지식in</p>
      </div>

      <div class="subtitle">
        <p v-on:click="main">당신의 지식을 나눠주세요</p>
      </div>

    </div>

  </div>
    

</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Archivo+Black&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    
  }
  #app{
    margin: 0;
  }
  .shader {
    width: 100vw;
    height: 100vh;
  }
  .Container{
    background-image: url('../assets/img/index_bg.jpg');
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: black;
  }

  .title {
    font-size: 7em;font-family: 'Open Sans', sans-serif;
    text-shadow: 4px 4px rgba(0,0,0,0.2);
    
  }

  .subtitle {
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 10px;
    font-size:25px;
    -webkit-animation: focus-in-contract-bck 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: focus-in-contract-bck 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

@-webkit-keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
            transform: translateZ(300px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
            transform: translateZ(12px);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
            transform: translateZ(300px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
            transform: translateZ(12px);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}

a{
  color:white;
}
</style>

<script>
export default {
  methods: {
    main: function(){
      this.$router.push('/home')
    }
  },
}
</script>
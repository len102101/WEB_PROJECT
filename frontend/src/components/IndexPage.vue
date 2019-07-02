<template>
  <div id="app">
    <flat-surface-shader class="shader" type="webgl" :light="{ambient: '#22bc9e', diffuse: '#2b7c6b'}">
    </flat-surface-shader>

    <div class="mask">
        <div class="title">
            <p>GSM 지식in</p>
        </div>
        <div class="subtitle">
            <router-link to="/register" class="text-link"><p>당신의 지식을 나눠주세요</p></router-link>
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
  .mask {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: rgba(255, 255, 255,0.9)
  }
  .title {
    font-size: 7em;font-family: 'Open Sans', sans-serif;
    text-shadow: 4px 4px rgba(0,0,0,0.2);

    p{
    padding: 9px;
    border: 10px solid ;
    }
    
  }

  
  .subtitle {
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 30px;
    color: white;
  }

  .text-link{
    color: white;
    text-decoration: none;
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
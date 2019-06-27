<template>
  <div id="app">
    <flat-surface-shader class="shader" type="webgl" :light="{ambient: '#22bc9e', diffuse: '#2b7c6b'}">
    </flat-surface-shader>

    <div class="mask">
        <div class="title">
            GSM knowledge In
        </div>
        <div class="subtitle">
            여기에 부제목을 넣고 근데 배경이 조잡해
        </div>
    </div>
    
  </div>
</template>


<style>

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
    font-size: 7em;
    font-family: Teko, sans-serif;
    text-shadow: 4px 4px rgba(0,0,0,0.2);
  }
  .subtitle {
    font-family: Avenir,Helvetica,Arial,sans-serif;
    font-size: 1.7em;
    margin-bottom: 30px;
  }

  /* devanagari */
@font-face {
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  src: local('Teko Regular'), local('Teko-Regular'), url(https://gstatic.loli.net/s/teko/v8/LYjNdG7kmE0gfaJ9pRtB.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  src: local('Teko Regular'), local('Teko-Regular'), url(https://gstatic.loli.net/s/teko/v8/LYjNdG7kmE0gfa19pRtB.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  src: local('Teko Regular'), local('Teko-Regular'), url(https://gstatic.loli.net/s/teko/v8/LYjNdG7kmE0gfaN9pQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Teko';
  font-style: normal;
  font-weight: 500;
  src: local('Teko Medium'), local('Teko-Medium'), url(https://gstatic.loli.net/s/teko/v8/LYjCdG7kmE0gdVBesCVgqGIu.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Teko';
  font-style: normal;
  font-weight: 500;
  src: local('Teko Medium'), local('Teko-Medium'), url(https://gstatic.loli.net/s/teko/v8/LYjCdG7kmE0gdVBesCpgqGIu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Teko';
  font-style: normal;
  font-weight: 500;
  src: local('Teko Medium'), local('Teko-Medium'), url(https://gstatic.loli.net/s/teko/v8/LYjCdG7kmE0gdVBesCRgqA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
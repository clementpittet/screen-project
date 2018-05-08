<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'
export default {
  name: 'App'
}
</script>

<style>
html,
body,
#app{
  width:100%; height:100%;
}
.loader {
  position:absolute;
  top:39vh; left:calc(50% - 5.5vh);
  border:16px solid transparent;
  border-top:16px solid #3498db;
  border-bottom:16px solid #3498db;
  border-radius:50%;
  width:11vh; height:11vh;
  animation:spin 2s linear infinite;
  z-index:10;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}
@font-face{
  font-family:"Frutiger LT W01 45 Light";
  src:url("assets/fonts/2a004a53-ac5c-43b3-9eeb-9f74ae4c1609.woff") format("woff");
}
@font-face{
  font-family:"Frutiger LT W01 55 Roman";
  src:url("assets/fonts/3fbbd6b1-cfa7-4ff0-97ea-af1b2c489f15.woff") format("woff");
}
@font-face{
  font-family:"Frutiger LT W01 65 Bold";
  src:url("assets/fonts/9aa32a81-1124-4c43-b3db-15bfb1f7aed2.woff") format("woff");
}
.frutiger-light {
  font-family:"Frutiger LT W01 45 Light", sans-serif;
}
.frutiger-roman, .frutiger {
  font-family:"Frutiger LT W01 55 Roman", sans-serif;
}
.frutiger-bold {
  font-family:"Frutiger LT W01 65 Bold", sans-serif;
}
</style>

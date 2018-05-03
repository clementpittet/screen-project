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

<style scope>
html,
body,
#app{
  width:100%; height:100%;
}
body {
  position:relative;
  width:100%; height:100vh;
  color:#fff;
  background:linear-gradient(-45deg, #c8e9f4, #d2b5bc, #f16667);
  background-size:400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
  font-family: 'Roboto', sans-serif;
  overflow:hidden;
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

</style>

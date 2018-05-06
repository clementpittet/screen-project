<template>
  <div>
    <div v-if="loading" class="loader"></div>
    <svg class="pulse" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <circle id="Oval" cx="512" cy="512" r="512"></circle>
      <circle id="Oval" cx="512" cy="512" r="512"></circle>
      <circle id="Oval" cx="512" cy="512" r="512"></circle>
    </svg>
    <transition-group name="flip-list" tag="div" class="container">
      <div v-for="actu in actus" :key="actu.id" class="item">
        <h2>{{actu.title}}</h2>
      </div>
    </transition-group>
  </div>
</template>
<script>
let increment = 0
export default {
  data () {
    return {
      actus: [],
      loading: false
    }
  },
  methods: {
    getData (slice) {
      this.$actus.query().then((response) => {
        this.actus = response.data.slice(slice).reverse()
        if (increment !== 0) {
          this.move(this.actus, 0, 4)
        }
        increment++
      }, (response) => {
        console.log('erreur', response)
      })
    },
    move (array, fromIndex, toIndex) {
      array.splice(toIndex, 0, array.splice(fromIndex, 1)[0])
    }
  },
  mounted () {
    this.$actus = this.$resource('posts', {}, {}, {
      before: () => {
        this.loading = true
      },
      after: () => {
        this.loading = false
      }
    })
    /** Event with Data */
    this.getData(-5)
    setInterval(() => {
      this.move(this.actus, 0, 4)
    }, 6000)
    setInterval(() => {
      this.getData(-5)
    }, 30000)
  }
}
</script>
<style scope>
body {
  position:relative;
  width:100%; height:100vh;
  background:#fff;
  font-family: 'Roboto', sans-serif;
  overflow:hidden;
}
div.container{
  position:absolute;
  padding:3vh 9vh; height:calc(100% - 6vh);
}
div.container .item{
  box-sizing:border-box;
  position:relative;
  display:flex;
  align-items:center;
  padding:0 3vh;
  overflow:hidden;
  z-index:0;
  -webkit-box-shadow:0px 0px 20px 0px rgba(127, 127, 127, .5);
  -moz-box-shadow:0px 0px 20px 0px rgba(127, 127, 127, .5);
  box-shadow:0px 0px 20px 0px rgba(127, 127, 127, .5);
  transition:all 1s;
}
div.container .item:after{
  position:absolute;
  display:block;
  width:50vh; height:50vh; left:calc(50% - 25vh); top:calc(50% - 25vh);
  background-image:url(../assets/img/sapient-logo.png);
  background-size:50vh; background-repeat:no-repeat;
  opacity:.1;
  z-index:-1;
  content:'';
}
div.container .item:first-child{
  float:left;
  width:calc(60% - 2vh); height:56vh;
  margin:0 2vh 2vh 0;
  background:#c8e9f4;
}
div.container .item:nth-child(2){
  float:right;
  height:27vh; width:40%;
  margin-bottom:2vh;
  background: #e4ea8e;
}
div.container .item:nth-child(3){
  float:right;
  width:40%; height:27vh;
  background:#f9bfc0;
}
div.container .item:nth-child(4){
  float:left;
  height:35vh; width:calc(50% - 2vh);
  margin-right:2vh;
  background:#d2b5bc;
}
div.container .item:nth-child(5){
  float:right;
  height:35vh; width:50%;
  background:#f16667;
}
div.container .item h2{
  color:#333;
  line-height:1.2;
}
div.container .item:first-child h2{font-size:10vh;}
div.container .item:nth-child(2) h2{font-size:6vh;}
div.container .item:nth-child(3) h2{font-size:5vh;}
div.container .item:nth-child(4) h2{font-size:8vh;}
div.container .item:nth-child(5) h2{font-size:7vh;}
.flip-list-move{
  transition:all 1s;
}
.pulse {
  position:absolute;
  top:50%; left:50%; width:300vh;
  z-index:-1;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.pulse circle {
  fill:rgba(155, 153, 153, 0.5);
  -webkit-transform: scale(0);
  transform:scale(0);
  opacity:0;
  -webkit-transform-origin:50% 50%;
  transform-origin:50% 50%;
  -webkit-animation:pulse 10s cubic-bezier(0.5, 0.5, 0, 1) infinite;
  animation:pulse 10s cubic-bezier(0.5, 0.5, 0, 1) infinite;
}
.pulse circle:nth-child(2) {
  fill:rgba(200, 200, 200, .5);
  -webkit-animation:pulse 10s 5s cubic-bezier(0.5, 0.5, 0, 1) infinite;
  animation:pulse 10s 5s cubic-bezier(0.5, 0.5, 0, 1) infinite;
}
.pulse circle:nth-child(3) {
  fill:rgba(127, 127, 127, .2);
  -webkit-animation: pulse 10s 7.5s cubic-bezier(0.5, 0.5, 0, 1) infinite;
  animation: pulse 10s 7.5s cubic-bezier(0.5, 0.5, 0, 1) infinite;
}
@-webkit-keyframes pulse {
  25% {
    opacity: 0.4;
  }
  100% {
    -webkit-transform:scale(1);
    transform:scale(1);
  }
}
@keyframes pulse {
  25% {
    opacity: 0.4;
  }
  100% {
    -webkit-transform:scale(1);
    transform:scale(1);
  }
}
</style>

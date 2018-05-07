<template>
  <div class="wrapper-component">
    <div v-if="loading" class="loader"></div>
    <div class="container-item-list">
      <transition-group name="flip-list" tag="ul" class="container">
        <li v-for="actu in actus" :key="actu.id">
          <div>{{actu.title}}</div>
        </li>
      </transition-group>
    </div>
    <footer>
      <div class="wrapper-footer">
        <div class="date">Jeudi 05 Avril 2018</div>
        <div class="hour">15:30</div>
      </div>
    </footer>
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
  color:#fff;
  background:linear-gradient(-45deg, #212129, #353536, #8991a7);
  background-size:400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
  font-family: 'Roboto', sans-serif;
  overflow:hidden;
}
.wrapper-component{
  position:relative;
  height:100%;
  z-index:0;
}
.wrapper-component:after{
  position:absolute;
  display:block;
  width:50vh; height:50vh; left:calc(50% - 25vh); top:calc(50% - 25vh);
  background-image:url(../assets/img/sapient-logo.png);
  background-size:50vh; background-repeat:no-repeat;
  opacity:.2;
  z-index:-1;
  content:'';
  -webkit-animation: animated-logo 15s ease infinite;
  -moz-animation: animated-logo 15s ease infinite;
  animation: animated-logo 15s ease infinite;
}
.container-item-list{
  display:flex;
  align-items:center;
  height:100%;
}
ul{
  margin:0; padding:0 6vh;
  list-style:none;
}
ul li{
  padding:0 0 5vh 1vh;
  font-size:5vh; line-height:1.2; text-transform:capitalize; font-weight:bold;
}
ul li div{
  clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  transform:translate(0);
  transition:clip-path 1s cubic-bezier(.55,0,.1,1), transform 1s cubic-bezier(.55,0,.1,1);
}
ul li:first-child{
  font-size:11vh;
}
ul li:nth-child(2){
  font-size:8vh;
}
ul li:nth-child(3){
  font-size:7vh;
}
ul li:nth-child(4){
  font-size:6vh;
}
ul li:nth-child(5){
  font-size:5vh;
}
.flip-list-move{
  transition:all 1s cubic-bezier(.55,0,.1,1);
}
footer{
  position:absolute;
  bottom:1vh; width:100%; left:0;
  color:#b0deff;
}
footer .wrapper-footer{
  display:flex;
  padding-bottom:1.5vh; padding-left:1%; width:21vh;
  border-bottom:.2vh solid #b0deff;
  -webkit-animation: animated-footer 30s ease infinite;
  -moz-animation: animated-footer 30s ease infinite;
  animation: animated-footer 30s  ease infinite;
}
footer .date{
  margin-right:2vh;
  opacity:.6;
}
@-webkit-keyframes animated-footer {
  0% {
    padding-left:1%;
  }
  100% {
    padding-left:calc(100% - 21vh)
  }
}

@-moz-keyframes animated-footer {
  0% {
    padding-left:1%;
  }
  100% {
    padding-left:calc(100% - 21vh)
  }
}

@keyframes animated-footer {
  0% {
    padding-left:1%;
  }
  100% {
    padding-left:calc(100% - 21vh)
  }
}

@keyframes animated-logo {
  0% {
    transform:scale(1);
  }
  50%{
    transform:scale(1.2);
  }
  100% {
    transform:scale(1);
  }
}
</style>

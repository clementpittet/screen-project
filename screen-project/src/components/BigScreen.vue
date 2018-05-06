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
  background:linear-gradient(-45deg, #c8e9f4, #d2b5bc, #f16667);
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
  border-bottom:.2vh solid rgba(255,255,255,.5);
  padding:4vh 0 1.5vh 1vh;
  font-size:5vh; line-height:1.2; text-transform:capitalize; font-weight:bold;
}
ul li{
  clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  transform:translate(0);
  transition:clip-path 1s cubic-bezier(.55,0,.1,1), transform 1s cubic-bezier(.55,0,.1,1);
}
ul li:first-child{
  padding:0 0 1.5vh 1vh;
  font-size:10vh;
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
  clip-path:polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform:translate(0%, 100%);
  transition:clip-path 1s cubic-bezier(.55,0,.1,1), transform 1s cubic-bezier(.55,0,.1,1);
}
</style>

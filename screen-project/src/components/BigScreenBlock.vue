<template>
  <div>
    <div v-if="loading" class="loader"></div>
      <transition-group name="flip-list" tag="div" class="container">
        <div v-for="actu in actus" :key="actu.id" class="item">
          <div class="mask"></div>
          <h2>{{actu.title}}</h2>
        </div>
      </transition-group>
  </div>
</template>
<script>
let increment = 0
let incrementGetter = 0
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
          // this.move(this.actus, 0, 4)
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
      if (incrementGetter === this.actus.length) {
        incrementGetter = 0
        this.getData(-5)
      }
      this.move(this.actus, 0, 4)
      incrementGetter++
    }, 3000)
  }
}
</script>
<style scope>
body {
  position:relative;
  width:100%; height:100vh;
  background:#fff;
  /* background:linear-gradient(-45deg, rgb(255, 255, 255), rgb(215, 215, 215), rgba(255, 255, 255));
  background-size:400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite; */
  font-family: 'Roboto', sans-serif;
  overflow:hidden;
}
div.container{
  position:absolute;
  padding:3vh; height:calc(100% - 6vh);
}
div.container .item{
  position:relative;
  display:flex;
  align-items:center;
  padding:0 3vh;
  overflow:hidden;
  box-sizing:border-box;
  z-index:0;
}
div.container .mask{
  position:absolute;
  width:100%; height:100%; left:0;
  background-color:rgba(0,0,0,.1);
  z-index:-1;
}
div.container .item:after{
  position:absolute;
  display:block;
  width:10vh; height:10vh; left:calc(50% - 5vh); top:calc(50% - 5vh);
  background-image:url(../assets/img/sapient-logo.png);
  background-size:10vh; background-repeat:no-repeat;
  z-index:-1;
  opacity:.6;
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
  color:#fff;
  line-height:1.2;
}
div.container .item:first-child h2{font-size:10vh;}
div.container .item:nth-child(2) h2{font-size:6vh;}
div.container .item:nth-child(3) h2{font-size:5vh;}
div.container .item:nth-child(4) h2{font-size:8vh;}
div.container .item:nth-child(5) h2{font-size:7vh;}

.flip-list-move{
  transition:all 1s cubic-bezier(.55,0,.1,1);
}
</style>

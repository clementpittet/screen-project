<template>
  <div class="wrapper-component">
    <div v-if="loading" class="loader"></div>
    <slider ref="slider" :pages="pages" :sliderinit="sliderinit" ></slider>
    <div class="container-item-list">
      <transition-group name="flip-list" tag="ul" class="container">
        <li v-for="actu in actus" :key="actu.id">
          <div>{{actu.title}}</div>
        </li>
      </transition-group>
    </div>
    <footer>
      <div class="wrapper-footer">
        <div class="date">{{ date }}</div>
        <div class="hour">{{ hour }}</div>
      </div>
    </footer>
  </div>
</template>
<script>
import slider from 'vue-concise-slider'
// let increment = 0
let jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
let months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
export default {
  components: {
    slider
  },
  data () {
    return {
      actus: [
        {id: 1, title: 'Atelier de conception éditoriale Crédit Agricole le 19 avril, Véronique en déplacement chez le client'},
        {id: 2, title: 'Benjamin, Front/BackEnd nous rejoindra le mardi 3 avril'},
        {id: 3, title: 'EDF Terr@data V2 : atelier de co-création le 10 avril à Paris avec Véronique'},
        {id: 4, title: 'Atelier OGF à la Bastille : Luc en déplacement jeudi 12 avril'},
        {id: 5, title: 'Le chabot EDF Entreprises est en ligne ! Bravo à toute la Team EDF'}
      ],
      date: '',
      hour: '',
      pages: [
        {
          html: '<div class="slide"></div>',
          style: {'background': '#f16667'}
        },
        {
          html: '<div class="slide"></div>',
          style: {'background': '#c8e9f4'}
        },
        {
          html: '<div class="slide"></div>',
          style: {'background': '#e4ea8e'}
        },
        {
          html: '<div class="slide"></div>',
          style: {'background': '#d2b5bc'}
        },
        {
          html: '<div class="slide"></div>',
          style: {'background': '#f9bfc0'}
        }
      ],
      loading: false,
      sliderinit: {
        autoplay: 15000,
        loop: true,
        direction: 'horizontal',
        infinite: 1,
        timingFunction: 'ease',
        duration: 2000
      }
    }
  },
  methods: {
    getData (slice) {
      // this.$actus.query().then((response) => {
      //   this.actus = response.data.slice(slice).reverse()
      //   if (increment !== 0) {
      //     this.move(this.actus, 0, 4)
      //   }
      //   increment++
      // }, (response) => {
      //   console.log('erreur', response)
      // })
    },
    move (array, fromIndex, toIndex) {
      array.splice(toIndex, 0, array.splice(fromIndex, 1)[0])
    },
    getDate () {
      let today = new Date()
      let year = today.getFullYear()
      let month = months[today.getMonth()]
      let day = today.getDate()
      let jour = jours[today.getDay()]
      return `${jour} ${day} ${month} ${year}`
    },
    getHour () {
      let date = new Date()
      let hour = date.getHours()
      hour = ('0' + hour).slice(-2)
      let minutes = date.getMinutes()
      minutes = ('0' + minutes).slice(-2)
      return `${hour}:${minutes}`
    }
  },
  mounted () {
    this.date = this.getDate()
    this.hour = this.getHour()
    setInterval(() => {
      this.hour = this.getHour()
    }, 1000)
    // this.$actus = this.$resource('posts', {}, {}, {
    //   before: () => {
    //     this.loading = true
    //   },
    //   after: () => {
    //     this.loading = false
    //   }
    // })
    /** Event with Data */
    // this.getData(-5)
    setInterval(() => {
      this.move(this.actus, 0, 4)
    }, 15000)
    setInterval(() => {
      // this.getData(-5)
    }, 75000)
  }
}
</script>
<style scope>
html,
body,
#app{
  width:100vw; height:100vh;
}
body {
  position:relative;
  width:100vw; height:100vh;
  color:#353536;
  font-family:"Frutiger LT W01 55 Roman", sans-serif;
  overflow:hidden;
}
.slider-container{
  position:absolute;
  z-index:-2;
}
.slider-pagination-bullets{
  display:none;
}
.wrapper-component{
  position:relative;
  height:100vh;
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
  animation:animated-logo 15s ease infinite;
}
.container-item-list{
  display:flex;
  align-items:center;
  height:100vh;
}
ul{
  margin:0; padding:0 6vh;
  list-style:none;
}
ul li{
  padding:0 0 4vh 1vh;
  font-size:5vh; line-height:1.2;
}
ul li div{
  clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  transform:translate(0);
  transition:clip-path 1s cubic-bezier(.55,0,.1,1), transform 1s cubic-bezier(.55,0,.1,1);
}
ul li:first-child{
  font-size:9vh;
  font-family:"Frutiger LT W01 65 Bold", sans-serif;
}
ul li:nth-child(2){font-size:6vh;}
ul li:nth-child(3){font-size:5vh;}
ul li:nth-child(4){
  font-size:4vh;
  font-family:"Frutiger LT W01 45 Light", sans-serif;
}
ul li:nth-child(5){
  font-size:3.5vh;
  font-family:"Frutiger LT W01 45 Light", sans-serif;
}
.flip-list-move{
  transition:all 1s cubic-bezier(.55,0,.1,1);
}
footer{
  position:absolute;
  bottom:1vh; width:100vw; left:0;
  color:#fff;
}
footer .wrapper-footer{
  display:flex;
  padding-bottom:1.5vh; padding-left:1%; width:15vw;
  border-bottom:.2vh solid #fff;
  font-size:2vh;
  animation:animated-footer 15s ease-out infinite;
}
footer .date{
  margin-right:2vh;
  opacity:.8;
}
@keyframes animated-footer {
  0% {
    padding-left:1%;
  }
  100% {
    padding-left:calc(100vw - 15vw);
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

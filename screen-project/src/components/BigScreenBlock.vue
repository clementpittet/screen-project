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
// let increment = 0
export default {
  data () {
    return {
      actus: [
        {id: 1, title: 'Atelier de conception éditoriale Crédit Agricole le 19 avril, Véronique en déplacement chez le client'},
        {id: 2, title: 'Benjamin, Front/BackEnd nous rejoindra le mardi 3 avril'},
        {id: 3, title: 'EDF Terr@data V2 : atelier de co-création le 10 avril à Paris avec Véronique'},
        {id: 4, title: 'Atelier OGF à la Bastille : Luc en déplacement jeudi 12 avril'},
        {id: 5, title: 'Le chabot EDF Entreprises est en ligne ! Bravo à toute la Team EDF'}
      ],
      loading: false
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
    }
  },
  mounted () {
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
body {
  position:relative;
  width:100%; height:100vh;
  color:#353536;
  font-family:"Frutiger LT W01 55 Roman", sans-serif;
  animation:background-position 150s infinite;
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
  animation:animated-logo 15s ease infinite;
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
  padding:0 0 4vh 1vh;
  font-size:5vh; line-height:1.2;
}
ul li div{
  clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  transform:translate(0);
  transition:clip-path 1s cubic-bezier(.55,0,.1,1), transform 1s cubic-bezier(.55,0,.1,1);
}
ul li:first-child{font-size:9vh;}
ul li:nth-child(2){font-size:6vh;}
ul li:nth-child(3){font-size:5vh;}
ul li:nth-child(4){font-size:4vh;}
ul li:nth-child(5){font-size:3.5vh;}
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
  padding-bottom:1.5vh; padding-left:1%; width:15%;
  border-bottom:.2vh solid #b0deff;
  font-size:2vh;
  animation:animated-footer 30s  ease infinite;
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
    padding-left:calc(100% - 15%);
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
@keyframes background-position {
  0%{
    background-color:#f06667;
  }
  20%{
    background-color:#e5e98d;
  }
  40%{
    background-color:#d1b4bb;
  }
  60%{
    background-color:#da6246;
  }
  80%{
    background-color:#e0b272;
  }
  100%{
    background-color:#f06667;
  }
}
</style>

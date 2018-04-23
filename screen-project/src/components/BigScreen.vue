<template>
  <div>
    <div v-if="loading" class="loader"></div>
      <transition-group name="flip-list" tag="ul" class="container">
        <li v-for="actu in actus" :key="actu.id">
            {{actu.title}}
        </li>
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
          this.shuffle()
        }
        increment++
      }, (response) => {
        console.log('erreur', response)
      })
    },
    shuffle: function () {
      this.actus = this._.shuffle(this.actus)
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
    this.getData(-5)
    setInterval(() => {
      this.getData(-5)
    }, 3000)
  }
}
</script>
<style>
.loader {
  position:absolute;
  top:39vh; left:calc(50% - 5.5vh);
  border:16px solid transparent;
  border-top:16px solid #3498db;
  border-bottom:16px solid #3498db;
  border-radius:50%;
  width:11vh; height:11vh;
  animation:spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
ul{
  margin:0; padding:0 4vh;
  list-style:none;
}
ul li{
  font-size:5vh;
  transition:all 1s cubic-bezier(.55,0,.1,1);
}
ul li:first-child{
  font-size:14vh;
}
ul li:nth-child(2){
  font-size:9vh;
}
ul li:nth-child(3){
  font-size:8vh;
}
ul li:nth-child(4){
  font-size:7vh;
}
ul li:nth-child(5){
  font-size:5vh;
}
.flip-list-move {
  transition:all 1s cubic-bezier(.55,0,.1,1);
}
</style>

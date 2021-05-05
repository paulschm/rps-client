import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client'

const socket = SocketIO('http://localhost:8081', {})

const vueSocket = new VueSocketIO({
  debug: false,
  connection: socket
  // vuex: {
  //   store,
  //   actionPrefix: "socket_"
  // }  
})

Vue.use(vueSocket)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyA357vgYHPFhkHS7Hkqx5hn3JFduIJASDw",
  authDomain: "forum-echange.firebaseapp.com",
  databaseURL: "https://forum-echange.firebaseio.com",
  projectId: "forum-echange",
  storageBucket: "forum-echange.appspot.com",
  messagingSenderId: "986481771918",
  appId: "1:986481771918:web:5da38d652c6eec69b950df",
  measurementId: "G-1G6JNK9T4R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

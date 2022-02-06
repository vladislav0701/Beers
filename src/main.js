import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import { BootstrapVue } from 'bootstrap-vue';
import '@/style/main.scss';

Vue.prototype.axios = axios;
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
 
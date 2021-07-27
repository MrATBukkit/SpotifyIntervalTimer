import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import Timer from "@/components/Timer";
import Callback from "@/components/Callback";

Vue.use(VueCookies)

const routes = [
  { path: '/callback', component: Callback },
  { path: '/', component: Timer }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes,
  mode: 'history',
})

Vue.use(VueRouter);

// set default config
Vue.$cookies.config('30d')

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

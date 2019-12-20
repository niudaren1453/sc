import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css

import axios from 'axios';//引入axios
Vue.prototype.axios=axios;
Vue.use(ElementUI) //使用elementUI

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

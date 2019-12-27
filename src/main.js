import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css

import axios from 'axios';//引入axios
Vue.prototype.axios=axios;
Vue.use(ElementUI) //使用elementUI


//喵喵API宽高过滤器
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})



//滚动组件
import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);
//loading组件
import Loading from '@/components/Loading'
Vue.component('Loading',Loading);


//引入自定义的mock数据  
import Mock from './mock/index.js';
  
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

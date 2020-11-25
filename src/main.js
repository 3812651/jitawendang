import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './router';
import header from './components/header.vue';
import VueParticles from 'vue-particles'
import store from './store'
import '@/icons'
import Qs from 'qs'
import { post, get, del, postStr } from './common/http.js'
import './assets/css/global.less'
import moment from 'moment'

 Vue.prototype.$moment = moment;//格式化时间
// import $ from 'jquery'
// Vue.prototype.$ = $;
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$del = del
Vue.prototype.$postStr = postStr
Vue.prototype.$Qs = Qs
Vue.prototype.$Spin = ViewUI.Spin
Vue.use(VueParticles)
Vue.use(ViewUI);
Vue.prototype.$Message.config({
    top: 70,
    duration: 2
});
Vue.config.productionTip = false

let docWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = docWidth / 1536 * 100 + 'px'
Vue.component('v-header', header)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
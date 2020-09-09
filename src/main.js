import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './router';
import header from './components/header.vue';
import VueParticles from 'vue-particles'
// import $ from 'jquery'
// Vue.prototype.$ = $;
Vue.use(ViewUI);
Vue.use(VueParticles)
Vue.config.productionTip = false

let docWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = docWidth / 1536 * 100 + 'px'
Vue.component('v-header', header)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './router';

Vue.use(ViewUI);
Vue.config.productionTip = false

let docWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = docWidth / 1536 * 100 + 'px'

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
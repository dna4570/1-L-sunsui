import Vue from 'vue'
import Chakra,{ CTemeProvider } from '@chakra-ui/vue'
import App from './App.vue'

Vue.useAttrs(chalra)

new Vue({
  el: '#app',
  render:(h) => h(CThemeProvider, [h(App)])
}).$mount()

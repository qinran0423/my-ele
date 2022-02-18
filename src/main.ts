import { createApp } from 'vue'
import App from './App.vue'
import ElContainer from './components/container'
import ElButton from './components/button';
import ElForm from './components/form';
import ElDialog from './components/dialog'

const app = createApp(App)

app.config.globalProperties.$ELEMENT = {
  size: 'large'
}

app.use(ElContainer)
  .use(ElButton)
  .use(ElForm).mount('#app')

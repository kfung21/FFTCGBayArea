// Components
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

registerPlugins(app)

app.mount('#app')

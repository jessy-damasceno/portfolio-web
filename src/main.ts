import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/main.css'
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Title from '@/components/Title.vue';

const app = createApp(App)

library.add(faInstagram, faLinkedinIn, faGithub)

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.component("title-component", Title)
app.mount('#app')

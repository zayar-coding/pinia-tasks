import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './route';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App);



//Method - 1
// you need to use watch pinia persistence and set localstorage
// if (localStorage.getItem("user")) {
//   pinia.state.value.userStore = JSON.parse(localStorage.getItem("user"))
// }
// pinia.state, this is the whole pinia state but I need to watch only user state so code is pinia.state.value.user
// watch(
//   () => pinia.state.value.userStore,
//   (user) => {
//     localStorage.setItem('user', JSON.stringify(user))
//   },
//   { deep: true }
// );

//Method - 2
//P.S you can use useLocalStorage in useVue library but this is only store one object

//Method - 3
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)
app.mount('#app')
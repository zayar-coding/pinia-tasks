import { createRouter, createWebHistory } from "vue-router";
import PiniaTasks from "../pages/PiniaTasks.vue";
import PiniaPersist from "../pages/PiniaPersist.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/pinia-tasks',
    name: 'PiniaTasks',
    component: PiniaTasks    
  },
    {
      path: '/pinia-persist',
      name: 'PiniaPersist',
      component: PiniaPersist
    }
  ]
}
  
)

export default router;
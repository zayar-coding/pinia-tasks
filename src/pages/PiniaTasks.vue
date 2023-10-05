<template>
    <!-- heading -->
      <header>
        <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" />
        <h1>Pinia Tasks</h1>
      
      </header>
  
      <!-- new Task Form -->
      <div class="new-task-form">
        <TaskForm />
      </div>
      <!-- filter -->
      <nav class="filter">
        <button @click="filter = 'all'">All tasks</button>
        <button @click="filter = 'fav'">Fav tasks</button>
        <button @click="taskStore.$reset">Reset State</button>
      </nav>

      <!-- Loading -->
      <div class="loading" v-if="isLoading">Loading tasks...</div>

      <!-- task-list -->
      <div v-if="filter == 'all'" class="task-list">
        <p>You have {{ totalCount }} tasks left to do.</p>
        <div v-for="task in tasks" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>
      <div v-if="filter == 'fav'" class="task-list">
        <p>You have {{ favCount }} fav tasks left to do.</p>
        <div v-for="task in favs" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>

  
</template>

<script>
  import { ref } from "vue";
import TaskDetails from "../components/TaskDetails.vue";
  import { useTaskStore } from "../store/taskStore";
  import TaskForm from "../components/TaskForm.vue";
  import { storeToRefs } from 'pinia';

  export default {
    components: { TaskDetails, TaskForm },
    setup() {
      const taskStore = useTaskStore();
      const { isLoading, favCount, totalCount, tasks, favs } = storeToRefs(taskStore);//storeToRefs is destructing properties in store like getter properties(fav,isFav)
      taskStore.getAllTasks();
      const filter = ref("all");

      return { taskStore, filter, isLoading, favCount, totalCount, tasks, favs };
    },
  }
</script>

<style>

</style>
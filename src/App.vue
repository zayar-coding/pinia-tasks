<template>
  <main>
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
    </nav>

    <!-- Loading -->
    <div class="loading" v-if="taskStore.isLoading">Loading tasks...</div>

    <!-- task-list -->
    <div v-if="filter == 'all'" class="task-list">
      <p>You have {{ taskStore.totalCount }} tasks left to do.</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div v-if="filter == 'fav'" class="task-list">
      <p>You have {{ taskStore.favCount }} fav tasks left to do.</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>
<script>
import { ref } from "vue";
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./store/taskStore";
import TaskForm from "./components/TaskForm.vue";

export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore();
    taskStore.getAllTasks();
    const filter = ref("all");

    return { taskStore, filter };
  },
};
</script>

<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <span class="material-symbols-outlined"
      @click="taskStore.deleteTask(task.id)"
      >
  delete
  </span>
     <span class="material-symbols-outlined"
     @click="taskStore.toggleFav(task.id)"
     :class="{active:task.isFav}"
     >
  favorite
  </span>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '../store/taskStore'
export default {
  props:['task'],
  setup() {
    const taskStore = useTaskStore();
    return { taskStore }
  }
  
}
</script>

<style>

</style>
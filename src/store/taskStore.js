import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    isLoading: false
  }),
  getters: {
    favs: (state) => {
      return state.tasks.filter((t) => t.isFav)
    },
    favCount: (state) => {
      return state.tasks.reduce((p, c) => c.isFav ? p + 1 : p, 0)
    },

    totalCount: (state) => {
      return state.tasks.length;//becareful -> it doesn't work when you call like this.tasks.length
      //the main point is don't use this keyword
    }
  },
  actions: {
    async getAllTasks() {
      this.isLoading = true;
      const res = await fetch("http://localhost:3000/tasks");
      const data = await res.json();
      this.tasks = data;
      this.isLoading = false;
    },
    async addTask(task) {
      this.tasks.push(task);
      const res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' }
      })
      if (res.error) {
        console.log(res.error);
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE"
      })
      if (res.error) {
        console.log(res.error);
      }
    },
    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id == id);
      task.isFav = !task.isFav;
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { 'Content-Type': 'application/json' }
      })
      if (res.error) {
        console.log(res.error)
      }

    }
  }
})
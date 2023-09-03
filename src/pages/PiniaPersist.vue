<template>
<div class="center">
<h1>User Name is {{ user.name }}</h1>
  <h1>Email is {{ user.email }}</h1>
  <h1>Website is {{ website }}</h1>
  <form @submit.prevent="handleName">
      <input type="text" placeholder="Enter new Name" v-model="newName">
      <button>Change Name</button>    
      <button @click="count++">Count {{ count }}</button>
    </form>
</div>
</template>

<script>
import { storeToRefs } from 'pinia';
import useUserStore from "../store/UserStore"
import { ref } from 'vue';
export default {
  setup() {
    const userStore = useUserStore();
    const {website,count,user } = storeToRefs(userStore);
    const newName = ref("");

    const handleName = () => {
      userStore.changeName(newName.value);
    };
    return {
      handleName,
      newName,
      website,
      count,
      user
    }
}
}
</script>

<style scoped>
.center {
  text-align: center;
}


</style>
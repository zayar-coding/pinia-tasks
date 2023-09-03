import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useUserStore = defineStore("userStore", () => {
  const user = ref({
    name: "zayar",
    email: "zayar@gmail.com",
  })
  const count = ref(0);
  const website = computed(() => {
    user.value.email.substring(user.value.email.lastIndexOf("@") + 1);
  })


  const changeName = (newName) => {
    user.value.name = newName;
  }
  return { user, changeName, website, count }

},
  { persist: true }
)

export default useUserStore;
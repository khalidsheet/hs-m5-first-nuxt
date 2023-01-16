<script setup>
import { useUserStore } from "@/store/userStore";
const router = useRouter();
const auth = ref({
  email: "",
  password: "",
});

const { setUser, getUser } = useUserStore();

const login = (e) => {
  e.preventDefault();
  setUser(auth.value);
  router.push("/auth/profile");
};
</script>
<template>
  <form action="#">
    <div>
      <label for="" class="block">Email</label>
      <input
        type="text"
        class="py-3 px-3 text-gray-900"
        v-model="auth.email"
        placeholder="Enter your email"
      />
    </div>
    <div class="mt-4">
      <label for="" class="block">Password</label>

      <input
        type="password"
        class="py-3 px-3 text-gray-900"
        v-model="auth.password"
        placeholder="Enter your password"
      />
    </div>
    <button
      class="bg-green-400 px-6 py-3 mt-4 rounded-md uppercase"
      @click="login"
    >
      Login
    </button>
  </form>
</template>

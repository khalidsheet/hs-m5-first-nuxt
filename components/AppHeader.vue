<script setup>
import { useUserStore } from "~~/store/userStore";

const { getUser } = useUserStore();
</script>
<template>
  <div class="div">
    <ul class="flex space-x-3">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/projects">Projects</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/user">Users</NuxtLink></li>
      <li>
        <NuxtLink v-if="getUser() == undefined" to="/auth/login"
          >Login</NuxtLink
        >
      </li>
      <li>
        <NuxtLink v-if="getUser() != undefined" to="/auth/logout"
          >logout</NuxtLink
        >
      </li>
      <li>
        <NuxtLink v-if="getUser() != undefined" to="/auth/profile"
          >profile</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
<style scoped>
li a {
  @apply bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-800;
}
</style>

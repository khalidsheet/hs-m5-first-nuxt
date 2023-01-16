<script setup>
import { useUserStore } from "@/store/userStore";
const { getUser } = useUserStore();

definePageMeta({
  middleware: "auth-middleware",
});
</script>
<template>
  <div>
    <h1>Welcome</h1>
    <p>{{ getUser()?.email }}</p>
  </div>
</template>

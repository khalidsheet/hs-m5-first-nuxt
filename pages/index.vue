<script setup>
const { pending, data: counter } = await useLazyFetch("/api/counter");
</script>

<template>
  <NuxtLink to="/about">About</NuxtLink>
  <NuxtLink to="/user">User</NuxtLink>
  <div>
    <h1 class="text-3xl">{{ pending ? 0 : counter.count }}</h1>
    <Alert type="success">This is a success alert</Alert>
    <Alert type="warning">This is a warning alert</Alert>
    <Alert type="error">This is a error alert</Alert>
    <Alert type="info">This is a info alert</Alert>
  </div>
</template>

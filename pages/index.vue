<script setup lang="ts">
import { useUserStore } from "~~/store/userStore";

const { pending, data: counter }: any = await useLazyFetch("/api/counter");
const mouseMove = useMouseMove();
const newCounter = useState("counter", () => 0);

const { setUser, getUser } = useUserStore();

const increment = () => {
  newCounter.value += 1;
};
</script>

<template>
  <div>
    <div>
      {{ getUser() != undefined ? "Logged in " : "Not LoggedIN" }}
      <span v-if="getUser()"> as {{ getUser()?.name }} </span>
    </div>

    <button
      v-if="getUser() == undefined"
      @click="
        setUser({
          email: 'ss',
          name: 'Khalid Sheet',
        })
      "
    >
      Login
    </button>
    <h1 class="text-3xl">{{ pending ? 0 : counter.count }}</h1>
    <h1 class="text-3xl">{{ mouseMove.x }} -- {{ mouseMove.y }}</h1>
    <h1 class="text-3xl">{{ newCounter }}</h1>
    <button @click="increment">Increment</button>
    <Alert type="success">This is a success alert</Alert>
    <Alert type="warning">This is a warning alert</Alert>
    <Alert type="error">This is a error alert</Alert>
    <Alert type="info">This is a info alert</Alert>
  </div>
</template>

<script setup lang="ts">
type AlertType = "success" | "warning" | "info" | "error";

const props = defineProps<{
  type: AlertType;
}>();

const computedType = computed(() => {
  switch (props.type) {
    case "error":
      return "text-red-600";
    case "info":
      return "text-blue-600";
    case "success":
      return "text-green-600";
    case "warning":
      return "text-orange-600";
    default:
      return "blue";
  }
});
</script>

<template>
  <div :class="computedType">
    <slot />
  </div>
</template>

<style scoped>
.green {
  color: green;
}
.red {
  color: red;
}
.orange {
  color: orange;
}
.blue {
  color: blue;
}
</style>

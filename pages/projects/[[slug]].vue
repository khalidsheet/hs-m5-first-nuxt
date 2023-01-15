<script setup lang="ts">
function stringify(slug: string): string {
  return slug.replaceAll(/-/g, " ");
}
</script>
<template>
  <div>
    <Head>
      <title>{{ $route.params.slug }}</title>
      <meta name="description" content="{{ $route.params.slug }}" />
    </Head>

    here's the slug {{ stringify($route.params.slug as string) }}
  </div>
</template>

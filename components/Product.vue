<script setup lang="ts">
import { useFavoriteStore } from "~/hooks/useFavorits";

defineProps<{
  product: {
    id: string;
    name: string;
  };
}>();

const favorites = useFavoriteStore();
</script>

<template>
  <div>
    <h3>{{ product.name }}: {{ product.id }}</h3>

    <button type="button" @click="() => favorites.toggle(product.id)">
      {{ favorites.has(product.id) ? '-' : '+' }}
    </button>

    <div>{{ favorites.ids.value }}</div>
  </div>
</template>

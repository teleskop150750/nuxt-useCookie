<script setup lang="ts">
import { useFavoriteStore } from './hooks/useFavorits';


type Product = {
  id: string
  name: string
}
const products: Product[] = [
  {id: '1', name: '1'},
  {id: '2', name: '2'},
  {id: '3', name: '3'},
]


const favorites = useFavoriteStore();
</script>

<template>
  <div>
      <h1>Count all: {{ favorites.countAll.value }}</h1>

      <div>
        <Product v-for="product in products" :key="product.id" :product="product"/>
      </div>
  </div>
</template>

<template>
  <div>
    productCard
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProductCard extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped></style>

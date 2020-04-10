<template>
  <div>
    <h1>Welcome to VueFood!</h1>
    <h2 style="margin-top:0px">Fresh food to your door!</h2>
    <ProductCard />
  </div>
</template>

<script>
import ProductCard from "./ProductCard";
export default {
  name: "Shop",
  components: { ProductCard },
  data: () => {
    return {
      products: null
    };
  }
};
</script>

<style scoped></style>

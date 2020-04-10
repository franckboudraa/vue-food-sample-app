<template>
  <sui-card>
    <sui-image
      src="https://static.popchef.com/v2/products/6K89qSNYvdZr7qC9UlIIj-6EzyQ_thumb.jpeg"
    />
    <sui-card-content>
      <sui-header>
        Tandoori Chicken
      </sui-header>
      <sui-description>
        Little trip to India with the Tandoori! Chicken marinated in yogurt and
        spices (ginger, cayenne pepper, cumin, and so on) and rice flavored with
        small raisins, we love it.</sui-description
      >
    </sui-card-content>
    <sui-card-content extra style="text-align:left">
      <span slot="right"
        ><sui-icon name="check circle" size="small" /> Available</span
      >
      <sui-icon name="tag" size="small" /> $5.90
    </sui-card-content>
    <sui-card-content extra>
      <sui-button basic fluid><sui-icon name="cart" /> Add to Cart</sui-button>
    </sui-card-content>
  </sui-card>
</template>

<script>
export default {
  name: "ProductCard"
};
</script>

<style scoped>
span .price {
  vertical-align: middle;
}
</style>

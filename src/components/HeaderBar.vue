<template>
  <div>
    <sui-grid :columns="3">
      <sui-grid-row>
        <sui-grid-column>
          <span style="float:left;"
            ><router-link to="/" style="color: #2c3e50;">{{
              this.$appName
            }}</router-link></span
          >
        </sui-grid-column>
        <sui-grid-column>
          <router-link to="/">Home</router-link>&nbsp;|&nbsp;
          <router-link to="/about">About {{ this.$appName }}</router-link>
        </sui-grid-column>
        <sui-grid-column>
          <router-link to="/cart"
            ><sui-icon name="user" />My cart</router-link
          ></sui-grid-column
        >
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
export default {
  name: "HeaderBar"
};
</script>

<style scoped></style>

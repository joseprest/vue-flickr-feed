<template>
  <article class="page" v-bind:class="'route-' + $route.path.replace('/', '')">
    <header>
      <v-container>
        <navbar :transparent="transparentHeader" />
      </v-container>
    </header>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </article>
</template>

<script>
import Navbar from "./Navbar";
export default {
  components: {
    Navbar,
  },
  props: {
    transparentHeader: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
article {
  width: 100%;
  height: 100%;
  // background-image: url("https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/If_Only_We_Could_Turn_Back_Time_Anna_Kwa.jpg");
}
header {
  background: rgba(0, 0, 0, 0.25);
  color: #fff;
}
</style>

<template>
  <v-app>
    <v-expand-transition>
      <template>
        <page-wrapper>
          <transition name="component-fade" mode="out-in" appear>
            <router-view />
          </transition>
        </page-wrapper>
      </template>
    </v-expand-transition>
  </v-app>
</template>

<script>
import PageWrapper from "./components/layout/PageWrapper";

export default {
  name: "App",

  components: {
    PageWrapper,
  },

  data() {
    return {};
  },
};
</script>

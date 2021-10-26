<template>
  <div class="nav">
    <div class="nav__content">
      <div class="logo">
        <router-link to="/">Flickr Feed</router-link>
      </div>
      <nav class="nav__content__container">
        <v-text-field
          v-model="searchStr"
          placeholder="Search for a image"
          clearable
          @keyup.enter="onSearch"
        >
          <template slot="append-outer">
            <v-btn class="primary" small @click="onSearch">Search</v-btn>
          </template>
        </v-text-field>
        <v-autocomplete
          v-if="onHold"
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          hide-details
          hide-no-data
          hide-selected
          full-width
          item-text="title"
          item-value="tags"
          label="Search for a image"
        >
        </v-autocomplete>
      </nav>
    </div>
  </div>
</template>
<script>
import { getPhotos } from "../../utilities/utility";
export default {
  data: () => ({
    searchStr: "",
    isLoading: false,
    items: [],
    model: null,
    search: null,
    tab: null,
    onHold: false,
  }),

  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      this.isLoading = true;

      // Lazily load input items
      getPhotos()
        .then((rsp) => {
          this.items = rsp;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },

  methods: {
    onSearch() {
      return (window.location.href = `/search?tags=?${this.searchStr}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 960px;
  max-width: 100%;
  padding: 10px;
  margin: 0 auto;
}
.nav {
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    &__container {
      width: 500px;
      margin: 0.5em 0 0.5em;
    }
  }
}
</style>

<template>
  <div>
    <span>Search by tags : {{ tags }}</span>
    <v-container fluid grid-list-md>
      <div class="gallery">
        <div
          class="gallery-panel"
          v-for="(image, index) in images"
          :key="index"
        >
          <div class="detail">
            <div class="detail__info">
              <span>{{ image.title }}</span>
              <p>by {{ $getBetweenBy(image.author, "(", ")") }}</p>
            </div>
            <div class="detail__tags">
              <v-chip
                v-for="(tag, index) in image.tags.split(' ').slice(0, 4)"
                :key="index"
                >{{ tag }}</v-chip
              >
            </div>
          </div>
          <div class="img-view">
            <a :href="image.media.m" target="_blank"
              ><v-img :src="image.media.m" height="200px"></v-img
            ></a>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { getPhotos } from "../../../utilities/utility";
import mockData from "./mock.json";
export default {
  data() {
    return {
      images: mockData.items,
      inMouse: false,
      tags: "",
    };
  },
  mounted() {
    let tags = this.$route.query.tags;
    this.tags = tags;
    console.log("Tags Arr :=> ", tags);
    getPhotos(tags).then((rsp) => {
      console.log(rsp);
      this.images = { ...rsp.items };
    });
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
  .gallery-panel {
    position: relative;
    .img-view {
      img {
        width: 100%;
        height: 33vw;
        object-fit: cover;
        border-radius: 0.75rem;
      }
    }
    .detail {
      position: absolute;
      bottom: 0;
      left: 5px;
      color: white;
      z-index: 99;

      &__tags {
        padding: 0.5rem 0;
      }
      &__info {
        span {
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>

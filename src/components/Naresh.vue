<template>
  <div>
    <button @click="toggleFavorite">Toggle Favorite</button>

    <h1>Hi, I'm Naresh from {{ fav ? "MDK" : "ATP" }}</h1>
    <h3>{{ num }}</h3>
    <button @click="count++">Count++</button>
    <h1>{{ count }}</h1>

    <byeComponent v-if="true" />
  </div>
</template>

<script>
import byeComponent from "./byeComponent.vue";

export default {
  name: "NareshComponent",
  data() {
    return {
      count: 10,
    };
  },

  props: {
    fav: Boolean,
    num: Number,
  },
  components: {
    byeComponent,
  },
  methods: {
    toggleFavorite() {
      this.fav = !this.fav;
    },
  },
};
</script>


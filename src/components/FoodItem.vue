<template>
    <div>
      <h3>{{ foodName }}</h3>
      <p>{{ foodDesc }}</p>
      <button @click="toggleFavorite">
        {{ isFavorite ? "Unfavorite" : "Favorite" }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: ["foodName", "foodDesc", "isFavorite"],
    emits: ["toggle-favorite"], // Documenting the emitted event
    methods: {
      toggleFavorite() {
        this.$emit("toggle-favorite", this.foodName); // Send foodName to parent
      },
    },
  };
  </script>
  
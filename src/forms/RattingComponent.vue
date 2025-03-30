<template>
  <div class="rating-container">
    <label v-for="option in ratings" :key="option.value">
      <input
        type="radio"
        :value="option.value"
        v-model="selectedRating"
        @change="updateRating"
      />
      {{ option.label }}
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRating: null,
      ratings: [
        { label: "Poor", value: "poor" },
        { label: "Average", value: "average" },
        { label: "Great", value: "great" },
      ],
    };
  },
  methods: {
    updateRating() {
      this.$emit("update-rating", this.selectedRating);
    },
  },
};
</script>

<style scoped>
.rating-container {
  display: flex;
  gap: 10px;
}
</style>

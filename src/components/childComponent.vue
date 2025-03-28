<template>
    <div class="friend-card">
      <h2>{{ name }}</h2>
      <p>Age: {{ age }}</p>
      <p>Email: {{ email }}</p>
      <p>Location: {{ favourite ? "Hyderabad" : "Anantapuram" }}</p>
      <button @click="toggleFavorite">{{ favourite ? "Unfavorite" : "Favorite" }}</button>
      <button class="delete-btn" @click="$emit('delete', name)">Delete</button>
      <InjectorComponent></InjectorComponent>
    </div>
  </template>
  
  <script>
  import InjectorComponent from './Provider_injector/InjectorComponent.vue';
  export default {
    props: {
      name: String,
      age: Number,
      favourite: Boolean,
      email: String,
    },
    emits: ["update-favorite", "delete"],
    methods: {
      toggleFavorite() {
        this.$emit("update-favorite", this.name);
      },
    },
    components: {
      InjectorComponent,
    },
  };
  </script>
  
  <style>
  .friend-card {
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 200px;
    text-align: center;
  }
  .friend-card button {
    margin-top: 10px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
  }
  .friend-card .delete-btn {
    background: red;
    color: white;
    margin-left: 5px;
  }
  .friend-card button:not(.delete-btn) {
    background: #007bff;
    color: white;
  }
  </style>
  
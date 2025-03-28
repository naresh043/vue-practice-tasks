<template>
    <h2>Different Kinds of Food</h2>
    <p><mark>The food data is provided in "App.vue" and injected here:</mark></p>
    <div v-for="x in foods" :key="x.name">
      <img :src="x.imgUrl">
      <p class="pName">{{ x.name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InjectorComponent',
    inject: ['foods']
  };
  </script>
  
  <style scoped>
  div {
    margin: 10px;
    padding: 10px;
    display: inline-block;
    width: 80px;
    background-color: #28e49f47;
    border-radius: 10px;
  }
  .pName {
    text-align: center;
  }
  img {
    width: 100%;
  }
  </style>
  
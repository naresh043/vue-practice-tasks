<template>
  <div class="hello">
    <NareshComponent 
      v-for="friend in friends" 
      :key="friend.id" 
      :num="10"
      :id="friend.id"
      :name="friend.name"
      :age="friend.age"
      :fav="friend.fav"
    />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import NareshComponent from "./Naresh.vue"; // Fixed typo in import

export default {
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Naresh",
          age: 25,
          fav: true,
        },
        {
          id: 2,
          name: "Suresh",
          age: 25,
          fav: false,
        },
      ],
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    NareshComponent, // Fixed typo in component registration
  },
};
</script>



<template>
  <div id="app">
    <h1>Hello, I'm the Parent Component</h1>
    <!-- <new-contact @add-contact="addContact"></new-contact> -->
    <div class="friends-list">
      <!-- <child-component
        v-for="friend in friends"
        :key="friend.name"
        :name="friend.name"
        :age="friend.age"
        :email="friend.email"
        :favourite="friend.favourite"
        @update-favorite="updateFavorite"
        @delete="deleteContact"
      /> -->
    </div>
  </div>
  <TheForm/>
</template>

<script>
// import childComponent from "./components/childComponent.vue";
// import newContact from "./components/friendContact.vue";
import TheForm from "./forms/TheForm.vue";

export default {
  name: "App",
  data() {
    return {
      friends: [
        { name: "Naresh", age: 25, email: "naresh@gmail.com", favourite: true },
        { name: "Naveen", age: 21, email: "naveen@gmail.com", favourite: false },
      ],
      foods: [
        { name: 'Pizza', imgUrl: '/img_pizza.svg' },
        { name: 'Apple', imgUrl: '/img_apple.svg' },
        { name: 'Cake', imgUrl: '/img_cake.svg' },
        { name: 'Fish', imgUrl: '/img_fish.svg' },
        { name: 'Rice', imgUrl: '/img_rice.svg' }
      ]
    };
  },
  components: {
    // childComponent,
    // newContact,
    TheForm
  },
  provide() {
    return {
      foods: this.foods
    };
  },
  methods: {
    updateFavorite(friendName) {
      console.log("Parent Function is clicked");
      const friend = this.friends.find((item) => item.name === friendName);
      if (friend) friend.favourite = !friend.favourite;
    },
    addContact({ name, contact, email }) {
      this.friends.push({
        name: name,
        age: contact,
        email: email,
        favourite: false,
      });
    },
    deleteContact(friendName) {
      this.friends = this.friends.filter((friend) => friend.name !== friendName);
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
  margin-top: 30px;
}
.friends-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>

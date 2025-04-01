<!-- working on provider/injector  -->
<!-- <template>
  <div id="app">
    <h1>Hello, I'm the Parent Component</h1>
    <new-contact @add-contact="addContact"></new-contact>
    <div class="friends-list">
      <child-component
        v-for="friend in friends"
        :key="friend.name"
        :name="friend.name"
        :age="friend.age"
        :email="friend.email"
        :favourite="friend.favourite"
        @update-favorite="updateFavorite"
        @delete="deleteContact"
      />
    </div>
  </div>
  <TheForm/>
</template>

<script>
import childComponent from "./components/childComponent.vue";
import newContact from "./components/friendContact.vue";

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
    childComponent,
    newContact,
   
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
</style> -->

<!-- working on Forms  -->
<!-- <template>
  <div id="app">
    <h1>Hello, I'm the Parent Component</h1>
    <div class="friends-list">
    </div>
  </div>
  <TheForm/>
</template>

<script>
import TheForm from "./forms/TheForm.vue";

export default {
  name: "App",
 data(){
  return{

  }
 },
  components: {
    TheForm
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
</style> -->

<!-- working on router  -->
<!-- <template>
  <div id="app">
    <h1>Hello, I'm the Parent Component</h1>
    <router-view></router-view>
  </div>
</template>
<script></script>
<style></style> -->
<!-- 
<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
    <router-link to="/contact" class="nav-link">Contact</router-link>
    <router-link to="/dihiybd" class="nav-link">NotFround</router-link>
    <router-link to="/login" class="nav-link">Login</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
}

/* .nav-link:hover,.nav-link:active {
  color: #f4a261;
} */
a:hover{
  color: #f4a261;
}
a:active,a.router-link-active{
  color: #f4a261;
  border: 2px solid red;
  border-radius: 10px;
  padding: 0px 5px;
}


</style>
 -->


 <!-- Dynamic Routing  -->

 <template>
  <div class="app">
    <nav class="navbar">
      <router-link to="/" class="logo">VueRouterDemo</router-link>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/post/1">Featured Post</router-link>
        <router-link to="/user/123/vue_lover">Example Profile</router-link>
      </div>
    </nav>
    
    <main class="main-content">
      <router-view />
    </main>
    
    <footer class="footer">
      <p>© 2023 Vue Router Demo. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Global Styles */
:root {
  --primary-color: #42b983;
  --secondary-color: #35495e;
  --light-color: #f8f9fa;
  --dark-color: #343a40;
  --border-radius: 8px;
  --box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--dark-color);
  background-color: #f5f5f5;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navigation Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--secondary-color);
  color: white;
  box-shadow: var(--box-shadow);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-links a.router-link-exact-active {
  background-color: var(--primary-color);
  color: white;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Footer Styles */
.footer {
  text-align: center;
  padding: 1.5rem;
  background-color: var(--secondary-color);
  color: white;
  margin-top: auto;
}
</style>
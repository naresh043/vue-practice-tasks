import { createApp } from 'vue';
import App from './App.vue';
import Contact from './components/friendContact.vue';
// import router from './router'; 
import routersDynamicRouting from './routersDynamicRouting'

const app = createApp(App); // Create Vue app instance
app.component('new-contact', Contact); // Register the component
// app.use(router); // Use the router
app.use(routersDynamicRouting)
app.mount('#app'); // Mount the app

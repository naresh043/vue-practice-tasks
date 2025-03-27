import { createApp } from 'vue';
import App from './App.vue';
import Contact from './components/friendContact.vue';

const app = createApp(App); // Create Vue app instance
app.component('new-contact', Contact); // Register the component
app.mount('#app'); // Mount the app

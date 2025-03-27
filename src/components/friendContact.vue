<template>
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div>
        <label>Name:</label>
        <input type="text" v-model="newName" required />
      </div>
      <div>
        <label>Contact:</label>
        <input type="number" v-model="newContact" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newEmail" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newName: "",
        newContact: "",
        newEmail: "",
      };
    },
    emits: ["add-contact"],
    methods: {
      handleSubmit() {
        this.$emit("add-contact", {
          name: this.newName,
          contact: this.newContact,
          email: this.newEmail,
        });
        this.newName = "";
        this.newContact = "";
        this.newEmail = "";
      },
    },
  };
  </script>
  
  <style>
  .contact-form {
    background: #f8f8f8;
    padding: 15px;
    border-radius: 8px;
    max-width: 300px;
    margin: auto;
  }
  .contact-form div {
    margin-bottom: 10px;
  }
  .contact-form label {
    font-weight: bold;
    display: block;
  }
  .contact-form input {
    width: 100%;
    padding: 5px;
  }
  .contact-form button {
    background: #28a745;
    color: white;
    border: none;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 5px;
  }
  </style>
<template>
    <div class="form-container">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" @blur="validateField('name')" />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" @blur="validateField('email')" />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" @blur="validateField('message')"></textarea>
          <span v-if="errors.message" class="error">{{ errors.message }}</span>
        </div>
        <div class="form-group">
          <label for="country">Country:</label>
          <select id="country" v-model="formData.country" @blur="validateField('country')">
            <option value="" disabled>Select your country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
          <span v-if="errors.country" class="error">{{ errors.country }}</span>
        </div>
        <div class="form-group">
          <label for="rating">Rating:</label>
          <RattingControl @update-rating="updateRating" />
          <span v-if="errors.rating" class="error">{{ errors.rating }}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
import RattingControl from './RattingComponent.vue';
  
  export default {
    name: "TheForm",
    components: {
        RattingControl,
    },
    data() {
      return {
        formData: {
          name: "",
          email: "",
          message: "",
          country: "",
          rating: null,
        },
        errors: {
          name: "",
          email: "",
          message: "",
          country: "",
          rating: "",
        },
      };
    },
    methods: {
      validateField(field) {
        if (!this.formData[field] || !this.formData[field].trim()) {
          this.errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
        } else {
          this.errors[field] = "";
        }
      },
      updateRating(value) {
        this.formData.rating = value;
      },
      onSubmit() {
        Object.keys(this.formData).forEach(this.validateField);
        if (Object.values(this.errors).some((error) => error)) return;
        console.log("Form submitted:", this.formData);
      },
    },
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input,
  textarea,
  select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  .error {
    color:red;
    font-size: 0.8em;
  }
  
  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
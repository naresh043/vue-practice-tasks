<template>
    <div class="post-container">
      <div v-if="loading" class="loading-spinner">
        <div class="spinner"></div>
      </div>
      
      <div v-else-if="post" class="post-content">
        <div class="post-header">
          <h1 class="post-title">{{ post.title }}</h1>
          <div class="post-meta">
            <span class="author">By {{ post.author }}</span>
            <span class="date">{{ formattedDate }}</span>
          </div>
        </div>
        
        <div class="post-body">
          <p class="post-excerpt">{{ post.excerpt }}</p>
          <div class="post-text">{{ post.content }}</div>
        </div>
        
        <div class="post-footer">
          <router-link 
            v-if="nextPostId"
            :to="{ name: 'post', params: { postId: nextPostId } }"
            class="next-post-btn"
          >
            Read Next: {{ nextPostTitle }}
            <span class="arrow">→</span>
          </router-link>
        </div>
      </div>
      
      <div v-else class="error-message">
        <h2>Post not found</h2>
        <p>The requested post could not be loaded.</p>
        <router-link to="/" class="home-link">Back to Home</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: null,
        nextPostId: null,
        nextPostTitle: '',
        loading: true
      }
    },
    computed: {
      currentPostId() {
        return this.$route.params.postId
      },
      formattedDate() {
        if (!this.post?.date) return ''
        return new Date(this.post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }
    },
    methods: {
      async fetchPost(postId) {
        this.loading = true
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const mockPosts = {
          '1': { 
            title: 'Getting Started with Vue Router', 
            author: 'Jane Doe', 
            date: '2023-05-15', 
            excerpt: 'Learn how to implement dynamic routing in your Vue applications',
            content: 'Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. Dynamic routing allows you to create routes that respond to changing data in your application...'
          },
          '2': { 
            title: 'Advanced Vue Router Techniques', 
            author: 'John Smith', 
            date: '2023-06-20', 
            excerpt: 'Master navigation guards and route transitions',
            content: 'Navigation guards are an essential part of any Vue Router implementation. They allow you to guard navigations either by redirecting it or canceling it. You can hook into the navigation process globally, per-route, or in-component...'
          }
        }
        
        this.post = mockPosts[postId] || null
        
        // Set next post (just for demo)
        if (postId === '1') {
          this.nextPostId = '2'
          this.nextPostTitle = mockPosts['2'].title
        } else if (postId === '2') {
          this.nextPostId = '1'
          this.nextPostTitle = mockPosts['1'].title
        }
        
        this.loading = false
      }
    },
    created() {
      this.fetchPost(this.currentPostId)
    },
    watch: {
      currentPostId(newId) {
        this.fetchPost(newId)
      }
    }
  }
  </script>
  
  <style scoped>
  .post-container {
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    overflow: hidden;
    margin-bottom: 2rem;
  }
  
  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: var(--primary-color);
    animation: spin 1s ease-in-out infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  .post-header {
    padding: 2rem;
    border-bottom: 1px solid #eee;
  }
  
  .post-title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: var(--secondary-color);
  }
  
  .post-meta {
    display: flex;
    gap: 1rem;
    color: #666;
    font-size: 0.9rem;
  }
  
  .post-body {
    padding: 2rem;
  }
  
  .post-excerpt {
    font-size: 1.1rem;
    font-style: italic;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #eee;
  }
  
  .post-text {
    line-height: 1.8;
  }
  
  .post-footer {
    padding: 1.5rem 2rem;
    background-color: #f9f9f9;
    border-top: 1px solid #eee;
  }
  
  .next-post-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .next-post-btn:hover {
    color: var(--secondary-color);
  }
  
  .arrow {
    transition: transform 0.3s ease;
  }
  
  .next-post-btn:hover .arrow {
    transform: translateX(3px);
  }
  
  .error-message {
    text-align: center;
    padding: 3rem;
  }
  
  .error-message h2 {
    color: #dc3545;
    margin-bottom: 1rem;
  }
  
  .home-link {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: var(--border-radius);
    transition: background-color 0.3s ease;
  }
  
  .home-link:hover {
    background-color: #3aa876;
  }
  </style>
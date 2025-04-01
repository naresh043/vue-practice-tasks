<template>
    <div class="home-page">
      <section class="hero">
        <h1>Welcome to Vue Router Demo</h1>
        <p class="subtitle">Learn how dynamic routing works in Vue.js</p>
        <router-link to="/post/1" class="hero-btn">View Featured Post</router-link>
      </section>
      
      <section class="featured-section">
        <h2 class="section-title">Featured Posts</h2>
        <div class="posts-grid">
          <router-link 
            v-for="post in featuredPosts" 
            :key="post.id"
            :to="{ name: 'post', params: { postId: post.id } }"
            class="post-card"
          >
            <div class="post-card-content">
              <h3>{{ post.title }}</h3>
              <p class="post-excerpt">{{ post.excerpt }}</p>
              <div class="post-meta">
                <span class="author">{{ post.author }}</span>
                <span class="date">{{ post.date }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </section>
      
      <section class="authors-section">
        <h2 class="section-title">Popular Authors</h2>
        <div class="authors-grid">
          <router-link 
            v-for="author in popularAuthors" 
            :key="author.id"
            :to="`/user/${author.id}/${author.username}`"
            class="author-card"
          >
            <div class="author-avatar">{{ author.initials }}</div>
            <div class="author-info">
              <h3>{{ author.username }}</h3>
              <p class="author-bio">{{ author.bioShort }}</p>
            </div>
          </router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        featuredPosts: [
          { 
            id: '1', 
            title: 'Getting Started with Vue Router', 
            excerpt: 'Learn the basics of implementing dynamic routes in your Vue applications',
            author: 'Jane Doe',
            date: 'May 15, 2023'
          },
          { 
            id: '2', 
            title: 'Advanced Vue Router Techniques', 
            excerpt: 'Master navigation guards and route transitions for better UX',
            author: 'John Smith',
            date: 'June 20, 2023'
          }
        ],
        popularAuthors: [
          { 
            id: '123', 
            username: 'vue_lover',
            bioShort: 'Vue.js enthusiast',
            initials: 'VL'
          },
          { 
            id: '456', 
            username: 'router_expert',
            bioShort: 'Routing specialist',
            initials: 'RE'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .home-page {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  
  .hero {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border-radius: var(--border-radius);
  }
  
  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 2rem;
  }
  
  .hero-btn {
    display: inline-block;
    padding: 0.75rem 1.75rem;
    background-color: white;
    color: var(--primary-color);
    text-decoration: none;
    border-radius: var(--border-radius);
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .hero-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .section-title {
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
  }
  
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .post-card {
    background-color: white;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--box-shadow);
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  .post-card-content {
    padding: 1.5rem;
  }
  
  .post-card h3 {
    color: var(--secondary-color);
    margin-bottom: 0.75rem;
  }
  
  .post-excerpt {
    color: #666;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }
  
  .post-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    color: #888;
  }
  
  .authors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .author-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease;
  }
  
  .author-card:hover {
    transform: translateY(-3px);
  }
  
  .author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
  }
  
  .author-info h3 {
    margin-bottom: 0.25rem;
    color: var(--secondary-color);
  }
  
  .author-bio {
    font-size: 0.85rem;
    color: #666;
  }
  </style>
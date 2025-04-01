<template>
    <div class="profile-container">
      <div v-if="loading" class="loading-spinner">
        <div class="spinner"></div>
      </div>
      
      <div v-else-if="userData" class="profile-content">
        <div class="profile-header">
          <div class="avatar">
            {{ userInitials }}
          </div>
          <div class="profile-info">
            <h1 class="username">{{ displayName }}</h1>
            <p class="member-since">Member since {{ joinDate }}</p>
          </div>
        </div>
        
        <div class="profile-details">
          <div class="detail-card">
            <h3>About</h3>
            <p>{{ userData.bio || 'No bio provided' }}</p>
          </div>
          
          <div class="detail-card stats">
            <h3>Stats</h3>
            <div class="stat-grid">
              <div class="stat-item">
                <span class="stat-number">{{ userData.stats.posts || 0 }}</span>
                <span class="stat-label">Posts</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">{{ userData.stats.comments || 0 }}</span>
                <span class="stat-label">Comments</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">{{ userData.stats.likes || 0 }}</span>
                <span class="stat-label">Likes</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="activity-section">
          <h2>Recent Activity</h2>
          <div v-if="userData.activity.length > 0" class="activity-list">
            <div 
              v-for="activity in userData.activity" 
              :key="activity.id"
              class="activity-item"
            >
              <div class="activity-icon" :class="activity.type">
                <span v-if="activity.type === 'post'">📝</span>
                <span v-else-if="activity.type === 'comment'">💬</span>
                <span v-else>👍</span>
              </div>
              <div class="activity-content">
                <p class="activity-text">{{ activity.text }}</p>
                <p class="activity-date">{{ formatActivityDate(activity.date) }}</p>
              </div>
            </div>
          </div>
          <p v-else class="no-activity">No recent activity</p>
        </div>
        
        <div class="profile-actions">
          <button @click="viewPosts" class="action-btn primary">
            View Posts
          </button>
          <button @click="sendMessage" class="action-btn secondary">
            Send Message
          </button>
        </div>
      </div>
      
      <div v-else class="error-message">
        <h2>User not found</h2>
        <p>The requested user profile could not be loaded.</p>
        <router-link to="/" class="home-link">Back to Home</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userData: null,
        loading: true
      }
    },
    computed: {
      userId() {
        return this.$route.params.userId
      },
      username() {
        return this.$route.params.username
      },
      displayName() {
        return this.username || `User ${this.userId}`
      },
      userInitials() {
        const name = this.displayName
        const parts = name.split(' ')
        return parts.map(part => part[0]).join('').toUpperCase()
      },
      joinDate() {
        if (!this.userData?.joinDate) return ''
        return new Date(this.userData.joinDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long'
        })
      }
    },
    methods: {
      async fetchUserData() {
        this.loading = true
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 600))
        
        const mockUsers = {
          '123': {
            username: 'vue_lover',
            bio: 'Passionate about Vue.js and frontend development',
            joinDate: '2022-03-15',
            stats: {
              posts: 24,
              comments: 56,
              likes: 128
            },
            activity: [
              { id: 1, type: 'post', text: 'Published "Vue 3 Composition API Guide"', date: '2023-07-10' },
              { id: 2, type: 'comment', text: 'Commented on "State Management Solutions"', date: '2023-07-08' },
              { id: 3, type: 'like', text: 'Liked "Vue Router Advanced Patterns"', date: '2023-07-05' }
            ]
          },
          '456': {
            username: 'router_expert',
            bio: 'Vue Router specialist and web performance enthusiast',
            joinDate: '2021-11-20',
            stats: {
              posts: 42,
              comments: 89,
              likes: 256
            },
            activity: [
              { id: 1, type: 'post', text: 'Published "Dynamic Routing Patterns"', date: '2023-07-12' },
              { id: 2, type: 'post', text: 'Published "Navigation Guards Deep Dive"', date: '2023-07-01' }
            ]
          }
        }
        
        this.userData = mockUsers[this.userId] || null
        this.loading = false
      },
      formatActivityDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      },
      viewPosts() {
        this.$router.push({
          path: '/posts',
          query: { author: this.userId }
        })
      },
      sendMessage() {
        alert(`Message would be sent to user ${this.userId}`)
      }
    },
    created() {
      this.fetchUserData()
    },
    watch: {
      userId() {
        this.fetchUserData()
      }
    }
  }
  </script>
  
  <style scoped>
  .profile-container {
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    overflow: hidden;
  }
  
  .profile-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
  }
  
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
  }
  
  .profile-info {
    flex: 1;
  }
  
  .username {
    font-size: 1.8rem;
    margin-bottom: 0.25rem;
  }
  
  .member-since {
    opacity: 0.8;
    font-size: 0.9rem;
  }
  
  .profile-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    .profile-details {
      grid-template-columns: 1fr;
    }
  }
  
  .detail-card {
    background-color: #f9f9f9;
    border-radius: var(--border-radius);
    padding: 1.5rem;
  }
  
  .detail-card h3 {
    margin-bottom: 1rem;
    color: var(--secondary-color);
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
  }
  
  .stats {
    display: flex;
    flex-direction: column;
  }
  
  .stat-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: auto;
  }
  
  .stat-item {
    text-align: center;
  }
  
  .stat-number {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
  }
  
  .stat-label {
    font-size: 0.8rem;
    color: #666;
  }
  
  .activity-section {
    padding: 1.5rem;
    border-top: 1px solid #eee;
  }
  
  .activity-section h2 {
    margin-bottom: 1rem;
    color: var(--secondary-color);
  }
  
  .activity-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .activity-item {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-radius: var(--border-radius);
    background-color: #f9f9f9;
    transition: transform 0.2s ease;
  }
  
  .activity-item:hover {
    transform: translateX(5px);
  }
  
  .activity-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(66, 185, 131, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
  
  .activity-icon.post {
    background-color: rgba(41, 121, 255, 0.1);
  }
  
  .activity-icon.comment {
    background-color: rgba(253, 126, 20, 0.1);
  }
  
  .activity-content {
    flex: 1;
  }
  
  .activity-text {
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  
  .activity-date {
    font-size: 0.8rem;
    color: #666;
  }
  
  .no-activity {
    color: #666;
    font-style: italic;
    text-align: center;
    padding: 1rem;
  }
  
  .profile-actions {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    border-top: 1px solid #eee;
    justify-content: center;
  }
  
  .action-btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: var(--border-radius);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .action-btn.primary {
    background-color: var(--primary-color);
    color: white;
  }
  
  .action-btn.primary:hover {
    background-color: #3aa876;
  }
  
  .action-btn.secondary {
    background-color: white;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
  
  .action-btn.secondary:hover {
    background-color: #f0f9f5;
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
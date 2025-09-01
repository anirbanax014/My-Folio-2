'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag, Eye, Heart } from 'lucide-react'

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  }).format(new Date(iso))

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable AI Applications with Next.js and TensorFlow",
    excerpt: "Learn how to integrate machine learning models into modern web applications using Next.js, TensorFlow.js, and serverless architecture for optimal performance.",
    content: `
# Building Scalable AI Applications with Next.js and TensorFlow

In today's rapidly evolving tech landscape, integrating AI capabilities into web applications has become essential for creating competitive, intelligent user experiences. This comprehensive guide will walk you through building scalable AI applications using Next.js and TensorFlow.

## Why Next.js for AI Applications?

Next.js provides several advantages for AI-powered applications:
- **Server-side rendering** for better SEO and performance
- **API routes** for handling ML model inference
- **Edge functions** for low-latency AI responses
- **Built-in optimization** for images and assets

## Setting Up Your Environment

First, let's set up a new Next.js project with the necessary dependencies:

\`\`\`bash
npx create-next-app@latest ai-app --typescript --tailwind --eslint
cd ai-app
npm install @tensorflow/tfjs @tensorflow/tfjs-node
\`\`\`

## Implementing the ML Model

Here's how to integrate a pre-trained model:

\`\`\`javascript
import * as tf from '@tensorflow/tfjs';

export async function loadModel() {
  const model = await tf.loadLayersModel('/models/my-model.json');
  return model;
}
\`\`\`

This approach ensures your AI applications are both performant and scalable.
    `,
    coverImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    category: "AI/ML",
    tags: ["Next.js", "TensorFlow", "AI", "JavaScript"],
    publishDate: "2024-03-15",
    readTime: "8 min read",
    views: 2847,
    likes: 156,
    featured: true
  },
  {
    id: 2,
    title: "The Future of Cloud Architecture: Serverless vs Containers",
    excerpt: "A deep dive into modern cloud architecture patterns, comparing serverless functions with containerized applications and when to use each approach.",
    content: `
# The Future of Cloud Architecture: Serverless vs Containers

Cloud architecture is evolving rapidly, with serverless and containerized solutions leading the charge. Understanding when and how to use each approach is crucial for modern developers.

## Serverless Architecture

Serverless computing allows you to run code without managing servers:

### Advantages:
- **Zero server management**
- **Automatic scaling**
- **Pay-per-execution pricing**
- **Built-in high availability**

### Use Cases:
- Event-driven applications
- Microservices
- API backends
- Data processing pipelines

## Container Architecture

Containers provide consistent environments across different stages:

### Advantages:
- **Environment consistency**
- **Resource efficiency**
- **Scalability control**
- **Technology flexibility**

## Making the Right Choice

The decision between serverless and containers depends on your specific requirements, team expertise, and long-term goals.
    `,
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    category: "Cloud",
    tags: ["Cloud", "Serverless", "Containers", "Architecture"],
    publishDate: "2024-03-10",
    readTime: "12 min read",
    views: 1923,
    likes: 89,
    featured: true
  },
  {
    id: 3,
    title: "Advanced React Patterns: Compound Components and Render Props",
    excerpt: "Master advanced React patterns to build more flexible and reusable components. Learn about compound components, render props, and custom hooks.",
    content: `
# Advanced React Patterns: Compound Components and Render Props

React's flexibility allows for powerful patterns that can make your components more reusable and maintainable. Let's explore some advanced patterns.

## Compound Components

Compound components allow you to create components that work together:

\`\`\`jsx
function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <div className="tabs">
      {React.Children.map(children, child =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
}

function TabList({ children, activeTab, setActiveTab }) {
  return (
    <div className="tab-list">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { 
          isActive: activeTab === index,
          onClick: () => setActiveTab(index)
        })
      )}
    </div>
  );
}
\`\`\`

## Render Props Pattern

Render props provide a way to share code between components:

\`\`\`jsx
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  
  return render({ data, loading });
}
\`\`\`

These patterns help create more maintainable and flexible React applications.
    `,
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    category: "Frontend",
    tags: ["React", "JavaScript", "Patterns", "Components"],
    publishDate: "2024-03-05",
    readTime: "10 min read",
    views: 3156,
    likes: 234,
    featured: false
  },
  {
    id: 4,
    title: "Optimizing Database Performance: Indexing Strategies",
    excerpt: "Learn essential database optimization techniques, focusing on indexing strategies that can dramatically improve query performance in production applications.",
    content: `
# Optimizing Database Performance: Indexing Strategies

Database performance is crucial for application success. Proper indexing can make the difference between a fast, responsive app and a slow, frustrating user experience.

## Understanding Indexes

Indexes are data structures that improve query performance:

### Types of Indexes:
- **B-tree indexes** - Most common, good for equality and range queries
- **Hash indexes** - Excellent for equality lookups
- **Bitmap indexes** - Efficient for low-cardinality data
- **Partial indexes** - Index only rows meeting certain conditions

## Index Design Principles

1. **Index frequently queried columns**
2. **Consider composite indexes for multi-column queries**
3. **Monitor index usage and remove unused indexes**
4. **Balance read performance with write overhead**

## Example: Optimizing a User Query

\`\`\`sql
-- Before: Slow query
SELECT * FROM users WHERE email = 'user@example.com' AND status = 'active';

-- Create composite index
CREATE INDEX idx_users_email_status ON users(email, status);

-- After: Fast query with index
\`\`\`

Proper indexing strategies can improve query performance by orders of magnitude.
    `,
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    category: "Backend",
    tags: ["Database", "Performance", "SQL", "Optimization"],
    publishDate: "2024-02-28",
    readTime: "15 min read",
    views: 1456,
    likes: 78,
    featured: false
  },
  {
    id: 5,
    title: "DevOps Best Practices: CI/CD Pipeline Automation",
    excerpt: "Implement robust CI/CD pipelines using GitHub Actions, Docker, and Kubernetes. Learn how to automate testing, building, and deployment processes.",
    content: `
# DevOps Best Practices: CI/CD Pipeline Automation

Continuous Integration and Continuous Deployment (CI/CD) are essential practices for modern software development. Let's build a robust pipeline.

## Pipeline Components

A complete CI/CD pipeline includes:

1. **Source Control Integration**
2. **Automated Testing**
3. **Build Automation**
4. **Security Scanning**
5. **Deployment Automation**
6. **Monitoring and Rollback**

## GitHub Actions Workflow

\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Run security audit
        run: npm audit

  build-and-deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Build Docker image
        run: docker build -t myapp:latest .
      - name: Deploy to Kubernetes
        run: kubectl apply -f k8s/
\`\`\`

## Best Practices

- **Fail fast** - Run quick tests first
- **Parallel execution** - Speed up pipelines
- **Environment parity** - Keep environments consistent
- **Automated rollbacks** - Quick recovery from issues

Automation reduces errors and increases deployment frequency.
    `,
    coverImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Docker", "Kubernetes"],
    publishDate: "2024-02-20",
    readTime: "11 min read",
    views: 2134,
    likes: 145,
    featured: false
  },
  {
    id: 6,
    title: "Web Security Fundamentals: Protecting Your Applications",
    excerpt: "Essential security practices every developer should know. Learn about common vulnerabilities and how to implement robust security measures in your web applications.",
    content: `
# Web Security Fundamentals: Protecting Your Applications

Web security is not optional in today's threat landscape. Every developer must understand and implement security best practices.

## Common Security Vulnerabilities

### OWASP Top 10:
1. **Injection attacks** (SQL, NoSQL, LDAP)
2. **Broken authentication**
3. **Sensitive data exposure**
4. **XML external entities (XXE)**
5. **Broken access control**

## Security Implementation

### Input Validation
\`\`\`javascript
// Bad: Direct database query
const query = \`SELECT * FROM users WHERE id = \${userId}\`;

// Good: Parameterized query
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
\`\`\`

### Authentication & Authorization
\`\`\`javascript
// JWT implementation
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
\`\`\`

## Security Headers

Always implement security headers:
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Strict-Transport-Security

Security should be built into every layer of your application.
    `,
    coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    category: "Security",
    tags: ["Security", "Web Development", "Authentication", "Best Practices"],
    publishDate: "2024-02-15",
    readTime: "13 min read",
    views: 1789,
    likes: 112,
    featured: false
  }
]

const categories = ["All", "AI/ML", "Cloud", "Frontend", "Backend", "DevOps", "Security"]

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPost, setSelectedPost] = useState<any>(null)

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-shimmer">Articles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern web development and technology trends
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.category === 'AI/ML' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                      post.category === 'Cloud' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      post.category === 'Frontend' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded-full border border-neon-blue/30">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{post.views.toLocaleString('en-US')}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 flex items-center gap-1"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Heart size={14} />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-neon-blue group-hover:text-neon-purple transition-colors">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                  : 'glass border border-white/20 text-gray-300 hover:text-white hover:border-white/40'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* All Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    post.category === 'AI/ML' ? 'bg-purple-500/20 text-purple-400' :
                    post.category === 'Cloud' ? 'bg-blue-500/20 text-blue-400' :
                    post.category === 'Frontend' ? 'bg-green-500/20 text-green-400' :
                    post.category === 'Backend' ? 'bg-red-500/20 text-red-400' :
                    post.category === 'DevOps' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-bold mb-2 group-hover:text-neon-blue transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Eye size={12} />
                      <span>{post.views.toLocaleString('en-US')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={12} />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  
                  <ArrowRight size={14} className="text-neon-blue group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { number: blogPosts.length.toString(), label: "Articles Published", description: "Technical content" },
            { number: "15K+", label: "Total Views", description: "Monthly readers" },
            { number: "800+", label: "Total Likes", description: "Community engagement" },
            { number: "6", label: "Categories", description: "Topics covered" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-shimmer mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
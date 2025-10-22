# Dragoon News

**Dragoon News** is a responsive front-end web application built with **React** that delivers **real-time news articles** on various topics.  
It includes **user authentication** for personalized access and ensures a **smooth, secure experience** across all devices using **Firebase Authentication**.  
Let’s build the project together. 😎

---

## 🌐 Live Demo

👉 [https://nazmul-b30b0.web.app/](https://nazmul-b30b0.web.app/)

---

## 🧠 Overview

Dragoon News connects to the **Programming Hero Open API** to fetch and display categorized news dynamically.  
It allows users to:
- Browse news by category  
- View detailed news information  
- Register or log in using Firebase Authentication  

---

## 🚀 Features

- 📰 Real-time news fetched from an external API  
- 🧭 Dynamic routing for categories and article details  
- 🔐 Firebase authentication (Login & Register)  
- 💡 Clean, modern, and responsive UI  
- ⚛️ Developed with React & React Router  
- 🌈 Hosted on Firebase  

---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React, React Router |
| **Styling** | CSS / Bootstrap / Tailwind (optional) |
| **Authentication** | Firebase Authentication |
| **Deployment** | Firebase Hosting |
| **API Source** | [Programming Hero Open API](https://openapi.programming-hero.com/api) |

---

## 🔗 API Reference

### Base URL
https://openapi.programming-hero.com/api
### Endpoints

#### 1. Get All News Categories
- **URL**: `/news/categories`  
- **Full URL**: [https://openapi.programming-hero.com/api/news/categories](https://openapi.programming-hero.com/api/news/categories)  
- **Method**: `GET`  
- **Description**: Retrieves a list of all available news categories.

#### 2. Get All News in a Category
- **URL Format**: `/news/category/{category_id}`  
- **Full URL Example**: [https://openapi.programming-hero.com/api/news/category/01](https://openapi.programming-hero.com/api/news/category/01)  
- **Method**: `GET`  
- **Description**: Retrieves all news articles within a specific category.  
- **Path Parameter**:  
  - `category_id` (string): Unique ID of the category.

#### 3. Get News Detail by ID
- **URL Format**: `/news/{news_id}`  
- **Full URL Example**: [https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a](https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a)  
- **Method**: `GET`  
- **Description**: Retrieves detailed information about a specific news article.  
- **Path Parameter**:  
  - `news_id` (string): Unique ID of the news article.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/Dragon-News-pr-000.git

# Navigate into the project folder
cd Dragon-News-pr-000

# Install dependencies
npm install

# Create a Firebase project and add your Firebase config in a .env file

# Start the development server
npm start

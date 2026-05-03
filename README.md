# 🎓 CampusHub (StudentHub)

![Netlify](https://img.shields.io/badge/Frontend-Netlify-blue?logo=netlify)
![Render](https://img.shields.io/badge/Backend-Render-purple?logo=render)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Status](https://img.shields.io/badge/Status-Active-success)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen)

![Repo Size](https://img.shields.io/github/repo-size/prabhsingh-cyber/StudentHub)
![Stars](https://img.shields.io/github/stars/prabhsingh-cyber/StudentHub?style=social)
![Forks](https://img.shields.io/github/forks/prabhsingh-cyber/StudentHub?style=social)

---

A modern full-stack web platform designed for San José State University (SJSU) students to discover campus events, resources, and exclusive deals — all in one place.

🔗 Live Site: https://hub4campus.netlify.app/

---

## 👥 Team

- Arvin Andiappan  
- Prabhjot Singh  
- Rafael Caculba  
- Ved Dabhi  

Course: CMPE 131 — Software Engineering I  
Professor: Ishie Eswar  
University: San José State University  

---

## 📌 Overview

CampusHub simplifies student life by centralizing:

- 📅 Campus events (student + official SJSU events)  
- 🎓 Academic and wellness resources  
- 💸 Student deals and discounts  
- 🗺️ Location-based event navigation  
- ⭐ Reviews and feedback system  

The platform integrates both user-generated content and official SJSU event feeds into a unified experience.

---

## ✨ Key Features

### 🔍 Event Discovery
- Browse events with date, time, and location  
- Integration with official SJSU Events API  
- Only approved events are publicly visible  

### 📍 Smart Location + Maps
- Structured input (Building + Room)  
- Google Maps iframe integration  
- Automatic map rendering  

### 👤 Authentication
- Google OAuth (SJSU emails only)  
- JWT-based session handling  
- Protected routes  

### 🛠️ Admin Panel
- Approve / reject events  
- Manage event lifecycle:
  - Pending
  - Approved
  - Rejected  

### ⭐ Reviews System
- Users can submit reviews  
- Real-time updates  

### 🧠 Smart Search
- Dynamic suggestions  
- Ranked results based on title, keywords, and type  

---

## 🏗️ Architecture

CampusHub follows a 3-tier architecture:

User → Frontend → Backend → Database

---

## 🧰 Tech Stack

Frontend: HTML, CSS, JavaScript  
Backend: Node.js, Express  
Database: PostgreSQL (Neon)  
Auth: Google OAuth 2.0  
Media: Cloudinary  
Hosting: Netlify (Frontend), Render (Backend)  

---

## 📁 Project Structure

<img width="231" height="422" alt="image" src="https://github.com/user-attachments/assets/76258799-55da-4b45-ab37-4670b7225be9" />


---

## 🔌 API Overview

Auth:
POST /auth/google → Google login  

Items:
GET /items → Get approved items  
GET /items/:id → Get single item  
POST /items → Create item  
PATCH /items/:id → Update item  
PATCH /items/:id/approval → Approve / reject  
DELETE /items/:id → Delete item  

Reviews:
GET /items/:id/reviews → Get reviews  
POST /reviews → Add review  

---

## 🚀 Deployment

Frontend → Netlify  
Backend → Render  
Database → Neon  
Media → Cloudinary  

---

## 🗺️ Development Setup

1. Clone repo  
git clone https://github.com/prabhsingh-cyber/StudentHub.git  
cd StudentHub  

2. Backend  
cd backend  
npm install  
npm run dev  

3. Environment Variables (backend/.env)  
PORT=5001  
DATABASE_URL=your_db_url  
JWT_SECRET=your_secret  
GOOGLE_CLIENT_ID=your_client_id  
CLOUDINARY_CLOUD_NAME=...  
CLOUDINARY_API_KEY=...  
CLOUDINARY_API_SECRET=...  

4. Frontend  
Open frontend/index.html with Live Server  

---

## 🔐 Security

- Google OAuth restricted to @sjsu.edu   
- JWT authentication for protected routes  
- Backend input validation  
- .env protected via .gitignore  

---

## 🎯 Final Note

CampusHub demonstrates a complete full-stack system including authentication, CRUD operations, API integration, cloud storage, and deployment.

---

## ❤️ Built With

HTML + CSS + JavaScript + Node.js + PostgreSQL

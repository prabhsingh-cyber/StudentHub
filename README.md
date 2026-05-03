🎓 CampusHub (StudentHub)

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

A modern, full-stack web platform designed for San José State University (SJSU) students to discover campus events, resources, and exclusive deals — all in one place.

🔗 Live Site: https://hub4campus.netlify.app/

👥 Team
Arvin Andiappan
Prabhjot Singh
Rafael Caculba
Ved Dabhi

Course: CMPE 131 — Software Engineering I
Professor: Ishie Eswar
University: San José State University

📌 Overview

CampusHub is built to simplify student life by centralizing:

📅 Campus events (student + official SJSU events)
🎓 Academic and wellness resources
💸 Student deals and discounts
🗺️ Location-based event navigation
⭐ Reviews and feedback system

The platform integrates both user-generated content and official SJSU event feeds, providing a unified experience.

✨ Key Features
🔍 Event Discovery
View campus events with date, time, and location
Integration with official SJSU Events API
Only approved events are visible publicly
📍 Smart Location + Maps
Structured location input (Building + Room)
Google Maps iframe integration
Automatic map rendering based on selected building
👤 Authentication
Google OAuth (SJSU-only emails)
JWT-based session handling
Protected routes for actions like adding events and reviews
🛠️ Admin Panel
Approve / reject user-submitted events
Manage all event statuses:
Pending
Approved
Rejected
⭐ Reviews System
Users can leave reviews on events
Real-time updates and display
🧠 Smart Search
Dynamic search suggestions
Ranked results based on:
Title match
Keywords
Type (Event / Resource / Deal)
🏗️ Architecture

CampusHub follows a 3-tier architecture:

Client (Frontend)
      ↓
Server (Node.js + Express)
      ↓
Database (PostgreSQL)
Tech Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript
Backend	Node.js, Express
Database	PostgreSQL (Neon)
Auth	Google OAuth 2.0
Media	Cloudinary
Hosting	Netlify (Frontend), Render (Backend)
📁 Project Structure
StudentHub/
├── frontend/
│   ├── HTML/
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   ├── images/
│   │   └── icons/
│   └── data/
│
├── backend/
│   └── src/
│       ├── controllers/
│       ├── routes/
│       ├── middleware/
│       ├── config/
│       ├── utils/
│       ├── app.js
│       └── server.js
│
├── database/
└── README.md
🔌 API Overview
🔐 Auth
Method	Endpoint	Description
POST	/auth/google	Google login
📦 Items (Events / Resources / Deals)
Method	Endpoint	Description
GET	/items	Get approved items
GET	/items/:id	Get single item
POST	/items	Create item (auth required)
PATCH	/items/:id	Update item
PATCH	/items/:id/approval	Approve / reject item
DELETE	/items/:id	Delete item
⭐ Reviews
Method	Endpoint	Description
GET	/items/:id/reviews	Get reviews for item
POST	/reviews	Add review
🚀 Deployment
Service	Platform
Frontend	Netlify
Backend	Render
Database	Neon (PostgreSQL)
Media	Cloudinary
🗺️ Development Setup
1. Clone repo
git clone https://github.com/prabhsingh-cyber/StudentHub.git
cd StudentHub
2. Backend setup
cd backend
npm install
npm run dev
3. Environment variables (backend/.env)
PORT=5001
DATABASE_URL=your_db_url
JWT_SECRET=your_secret
GOOGLE_CLIENT_ID=your_client_id
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
4. Frontend

Open with Live Server:

frontend/index.html
🔐 Security
Google OAuth restricted to @sjsu.edu
JWT authentication for protected routes
Input validation on backend APIs
Environment variables secured via .env (not committed)
📈 Future Improvements
🔎 Real-time search with backend integration
📅 Advanced filtering (date, building, category)
📊 Analytics dashboard for admins
🔔 Notifications for event updates
📱 Mobile-first UI enhancements
🎯 Final Note

CampusHub demonstrates a complete end-to-end full-stack application, integrating:

Authentication
CRUD operations
External APIs
Cloud storage
Deployment pipelines
❤️ Built With
HTML + CSS + JavaScript + Node.js + PostgreSQL

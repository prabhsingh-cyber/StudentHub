CampusHub 🎓
A web-based platform for San Jose State University students to discover events, academic resources, and deals in one place.
👥 Team

Arvin Andiappan
Prabhjot Singh
Rafael Caculba
Ved Jigneshkumar Dabhi

Course: CMPE 131 - Software Engineering I
Professor: Ishie Eswar
University: San Jose State University

📋 About the Project
CampusHub allows SJSU students to:

Browse current campus events
Discover local deals and discounts
Access academic resources
View item locations on an interactive map
Leave reviews and ratings
Sign up and log in securely with their SJSU Google account


🏗️ Architecture
CampusHub follows a 3-Tier Client-Server Architecture:
User → Frontend (HTML/CSS/JS) → Backend (Node.js/Express) → Database (PostgreSQL)

Frontend — HTML, CSS, JavaScript (hosted on Netlify)
Backend — Node.js with Express (hosted on Render)
Database — PostgreSQL (hosted on NeonDB)


🚀 Getting Started
CampusHub is live and accessible at: https://hub4campus.netlify.app/
No installation required — just visit the link and sign in with your SJSU Google account!

📁 Project Structure
SJSU-Software-Engineering-Project/
├── frontend/
│   ├── HTML/          # All HTML pages
│   ├── assets/
│   │   ├── css/       # Stylesheets
│   │   ├── js/        # JavaScript files
│   │   ├── icons/     # Icon assets
│   │   └── images/    # Image assets
│   ├── data/          # JSON data files
│   └── guidelines/    # Project guidelines
├── backend/
│   └── src/
│       ├── controllers/   # Route logic (auth, items, reviews)
│       ├── routes/        # API route definitions
│       ├── middleware/     # Error handling
│       ├── config/        # Database config
│       ├── utils/         # Helper functions
│       ├── app.js         # Express app setup
│       └── server.js      # Server entry point
└── README.md

🔌 API Endpoints
Auth
MethodEndpointDescriptionPOST/auth/googleAuthenticate via Google OAuth
Items
MethodEndpointDescriptionGET/itemsGet all itemsPOST/itemsAdd a new item (auth required)DELETE/items/:idRemove an item (auth required)
Reviews
MethodEndpointDescriptionGET/items/:id/reviewsGet reviews for an itemPOST/reviewsSubmit a review (auth required)DELETE/reviews/:idDelete a review (auth required)

🗺️ Features by Sprint
SprintFocusKey FeaturesSprint 1Core FoundationDatabase setup, backend API, navbar, item cardsSprint 2Map & InterfaceGoogle Maps integration, sorting, filteringSprint 3AuthenticationGoogle OAuth login, JWT route protectionSprint 4Reviews & LaunchReview system, testing, deployment, UI polish

🔐 Security

Authentication is handled entirely through Google OAuth 2.0, restricted to @sjsu.edu email addresses
Protected routes require a valid JWT token
Input validation on all API endpoints

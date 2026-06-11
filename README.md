# 🚗 CarMatch AI

## Overview

CarMatch AI is a full-stack AI-inspired car recommendation platform that helps users discover suitable cars using natural language instead of traditional filters.

Instead of forcing users to manually select budget, fuel type, body type, and other filters, users can simply describe their requirements in plain English.

Example:

> "I have a family of 4. My budget is 15 lakh. Safety and mileage are my top priorities."

The application analyzes the user's requirements, generates a buyer personality, calculates match scores, recommends the top 3 cars, explains why each car was selected, highlights trade-offs, and explains why other cars were not recommended.

The goal was to help confused car buyers move from uncertainty to a confident shortlist quickly.

---

## What I Built and Why

I built a full-stack recommendation platform consisting of:

### Frontend

* React + Vite application
* Tailwind CSS UI
* Natural language input interface
* Buyer personality display
* Recommendation cards
* Trade-off explanations
* "Why Not Other Cars?" section

### Backend

* Express.js REST API
* MongoDB Atlas database
* Custom recommendation engine
* Keyword-based preference extraction
* Match score calculation logic

### Core User Flow

User Requirement
↓
Preference Extraction
↓
Recommendation Engine
↓
Buyer Personality Generation
↓
Top 3 Recommendations
↓
Trade-Off Analysis
↓
Why Not Others

I chose this approach because most car buyers think in terms of lifestyle and priorities rather than technical filters.

---

## What I Deliberately Cut

The assignment was intentionally time-boxed to 2–3 hours, so I focused on delivering a complete working product instead of adding every possible feature.

I intentionally excluded:

* Authentication
* User accounts
* Saved searches
* Chat history
* Admin dashboard
* Real LLM integrations
* Review sentiment analysis
* Car comparison mode
* Advanced NLP processing
* Recommendation persistence

These features would improve the product but were not essential for demonstrating the core recommendation experience.

---

## Tech Stack and Why

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

Why:

* React provides fast component-based development.
* Vite offers a lightweight development experience.
* Tailwind CSS allows rapid UI iteration.
* Axios simplifies API communication.

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

Why:

* Express enables rapid API development.
* MongoDB fits well for flexible car datasets.
* Mongoose provides schema validation and cleaner database operations.

---

## Recommendation Engine

The recommendation engine is intentionally implemented without external AI services.

It uses:

* Keyword extraction
* Preference detection
* Scoring rules
* Weighted recommendation logic

Supported categories:

* Budget
* Family requirements
* Safety preference
* Mileage preference
* Comfort preference
* City driving
* Highway driving

The engine calculates match scores and ranks vehicles based on how closely they align with user priorities.

---

## AI Tool Usage

### AI Tools Used

* ChatGPT

### Delegated to AI

* Project planning assistance
* Component scaffolding
* Tailwind UI suggestions
* Recommendation engine brainstorming
* Debugging assistance

### Implemented and Reviewed Manually

* Architecture decisions
* Folder structure
* Database schema
* API integration
* Logic validation
* Testing
* Debugging
* Feature prioritization

### Where AI Helped Most

* Accelerating boilerplate generation
* UI iteration
* Debugging support
* Breaking down implementation steps

### Where AI Got in the Way

* Some generated code required correction
* Certain recommendations needed manual verification
* Debugging still required understanding application flow and validating outputs

AI significantly improved development speed but all outputs were reviewed and tested before use.

---

## Project Structure

```text
CarMatchAI
│
├── backend
│   ├── config
│   ├── data
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── .env
│
└── README.md
```

---

## API Endpoints

### Get Cars

```http
GET /api/cars
```

Returns all available cars.

### Get Recommendations

```http
POST /api/recommend
```

Request:

```json
{
  "query": "I need a safe family car under 15 lakh with good mileage"
}
```

Returns:

* Buyer personality
* Top recommendations
* Match scores
* Reasons
* Trade-offs
* Why-not explanations

---

## Environment Variables

### Backend

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### Frontend

```env
VITE_API_URL=https://your-backend-url/api
```

---

## Local Setup

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## If I Had Another 4 Hours

I would add:

* Advanced natural language parsing
* Car comparison mode
* User preference memory
* Review sentiment analysis
* Recommendation explanations powered by LLMs
* Better recommendation weighting
* Improved mobile UX
* Recommendation history

---

## Deliverables

### Screen Recording

https://drive.google.com/file/d/1C2ADe2gh7fNdhXkbAApQAFXW8c18VoWE/view?usp=sharing

Note: The recording is a full development session (~2h 35m). If Google Drive is still processing the video preview, the recording can be downloaded directly from the same link.

### GitHub Repository

https://github.com/Aarthi1720/CarMatchAI

### Live Application

Frontend:
https://car-match-ai-brown.vercel.app/

Backend:
https://carmatchai-mlrg.onrender.com/

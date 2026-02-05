# Profile Search Platform

A full-stack web application to manage and search my professional profile using a REST API and MySQL database.

---

## Tech Stack

### Backend
- FastAPI (Python)
- MySQL
- SQLAlchemy
- PyMySQL

### Frontend
- React (Create React App)

---

## Features

- View profile details  
- Search projects by keyword  
- Search skills by keyword  
- Global search across profile, projects, and skills  
- REST API with CRUD operations  
- Health check endpoint  

---

## Architecture

React Frontend  →  FastAPI Backend  →  MySQL Database

---

## Database Schema

### profile
| Field | Type |
|------|------|
| id | INT (PK) |
| name | VARCHAR |
| email | VARCHAR |
| education | TEXT |
| github | VARCHAR |
| linkedin | VARCHAR |

### projects
| Field | Type |
|------|------|
| id | INT (PK) |
| title | VARCHAR |
| description | TEXT |
| link | VARCHAR |

### skills
| Field | Type |
|------|------|
| id | INT (PK) |
| name | VARCHAR |

---

## API Endpoints

### Health
GET /health

### Profile
GET /profile  
POST /profile  
PUT /profile/{id}

### Projects
GET /projects  
GET /projects?q=react

### Skills
GET /skills  
GET /skills?q=python

### Global Search
GET /search?q=quantum

---

## Sample cURL

curl http://127.0.0.1:8000/profile  

curl http://127.0.0.1:8000/search?q=react  

---

## Local Setup

### Backend

cd backend  
pip install fastapi sqlalchemy pymysql cryptography uvicorn  
uvicorn main:app --reload  

### Frontend

cd frontend  
npm install  
npm start  

Open in browser:  
http://localhost:3000  

---

## Live Projects

ONLYUS – Private Chat App  
https://onlyus-sepia.vercel.app/

Local Service Provider Website  
https://neemrana-local-services.netlify.app/

Gym Management Platform  
https://hardrock-3fa9c.web.app/

---

## Resume

Mohit Kumar  
B.Tech Engineering Physics, IIT Mandi  
GitHub: https://github.com/Mohit2705-1982  
LinkedIn: https://linkedin.com/in/mohit-kumar-309906285  

---

## Known Limitations

- No authentication  
- No pagination  
- Single-user system  
- Not yet deployed to cloud  

---

## Purpose of this Project

This project demonstrates:
- Real database usage (not in-memory)
- Backend API design
- Frontend-backend integration
- SQL queries and search
- Full-stack system architecture

---

## Final Note

This is a real full-stack system built from scratch using production technologies.  
All data shown is based on my actual resume and live deployed projects.

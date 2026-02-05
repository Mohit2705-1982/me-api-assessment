# Full Stack Profile App

A simple full-stack web application that displays and searches a personal profile using a React frontend and a FastAPI backend connected to a database.

---

## 🚀 Features

* View profile information
* Search projects and skills
* REST API backend
* React frontend UI
* Database integration
* Deployable to cloud platforms

---

## 🧱 Tech Stack

### Frontend

* React
* JavaScript
* HTML/CSS

### Backend

* FastAPI
* SQLAlchemy

### Database

* PostgreSQL / MySQL

### Deployment

* Vercel (frontend)
* Render (backend + database)

---

## 📂 Project Structure

```
me-api-assessment
│
├── backend
│   ├── main.py
│   ├── database.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Local Setup

### Backend

```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

### Frontend

```
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

### Health check

```
GET /health
```

### Profile

```
GET /profile
```

### Search

```
GET /search?q=keyword
```

---

## 🌐 Deployment

Frontend can be deployed to **Vercel**:

```
vercel deploy
```

Backend + database can be deployed to **Render**.

---

## 🧠 Purpose

This project demonstrates:

* Full-stack architecture
* REST API communication
* Database integration
* Cloud deployment workflow

---

## 👨‍💻 Author

**Mohit Kumar**

B.Tech Engineering Physics — IIT Mandi

GitHub:
[https://github.com/Mohit2705-1982](https://github.com/Mohit2705-1982)

LinkedIn:
[https://linkedin.com/in/mohit-kumar-309906285](https://linkedin.com/in/mohit-kumar-309906285)

---

## 📌 Notes

* Backend must allow CORS for frontend communication
* Database tables must be created before API queries
* Replace API URLs when deploying frontend

---

## ✅ Status

✔ Backend working
✔ Frontend working
✔ Deployment ready

---

## 🎯 Future Improvements

* Authentication
* UI styling
* Pagination
* Advanced search
* Cloud database automation

---

**Built for learning full-stack web development.**

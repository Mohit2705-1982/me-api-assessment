from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import SessionLocal
from sqlalchemy import text

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3001"
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- BASIC ----------------

@app.get("/")
def home():
    return {"message": "Backend running", "docs": "/docs"}

@app.get("/health")
def health():
    return {"status": "ok"}

# ---------------- PROFILE CRUD ----------------

@app.get("/profile")
def get_profile():
    db = SessionLocal()
    try:
        result = db.execute(text("SELECT * FROM profile LIMIT 1"))
        row = result.fetchone()
        if row is None:
            return {"error": "No profile data"}
        return dict(row._mapping)
    except Exception as e:
        return {"error": str(e)}
    finally:
        db.close()


@app.post("/profile")
def create_profile(p: dict):
    db = SessionLocal()
    try:
        db.execute(
            text("""
            INSERT INTO profile (name,email,education,github,linkedin)
            VALUES (:name,:email,:education,:github,:linkedin)
            """),
            p
        )
        db.commit()
        return {"status": "created"}
    except Exception as e:
        return {"error": str(e)}
    finally:
        db.close()


@app.put("/profile/{id}")
def update_profile(id: int, p: dict):
    db = SessionLocal()
    try:
        db.execute(
            text("""
            UPDATE profile
            SET name=:name,
                email=:email,
                education=:education,
                github=:github,
                linkedin=:linkedin
            WHERE id=:id
            """),
            {**p, "id": id}
        )
        db.commit()
        return {"status": "updated"}
    except Exception as e:
        return {"error": str(e)}
    finally:
        db.close()

# ---------------- PROJECT SEARCH ----------------

@app.get("/projects")
def get_projects(q: str = None):
    db = SessionLocal()
    try:
        if q:
            result = db.execute(
                text("SELECT * FROM projects WHERE title LIKE :q"),
                {"q": f"%{q}%"}
            )
        else:
            result = db.execute(text("SELECT * FROM projects"))
        return [dict(r._mapping) for r in result]
    except Exception as e:
        return {"error": str(e)}
    finally:
        db.close()

# ---------------- SKILLS SEARCH ----------------

@app.get("/skills")
def get_skills(q: str = None):
    db = SessionLocal()
    try:
        if q:
            result = db.execute(
                text("SELECT * FROM skills WHERE name LIKE :q"),
                {"q": f"%{q}%"}
            )
        else:
            result = db.execute(text("SELECT * FROM skills"))
        return [dict(r._mapping) for r in result]
    except Exception as e:
        return {"error": str(e)}
    finally:
        db.close()

# ---------------- GLOBAL SEARCH ----------------

@app.get("/search")
def global_search(q: str):
    db = SessionLocal()
    try:
        profiles = db.execute(
            text("SELECT * FROM profile WHERE name LIKE :q"),
            {"q": f"%{q}%"}
        )

        projects = db.execute(
            text("SELECT * FROM projects WHERE title LIKE :q"),
            {"q": f"%{q}%"}
        )

        skills = db.execute(
            text("SELECT * FROM skills WHERE name LIKE :q"),
            {"q": f"%{q}%"}
        )

        return {
            "profiles": [dict(r._mapping) for r in profiles],
            "projects": [dict(r._mapping) for r in projects],
            "skills": [dict(r._mapping) for r in skills]
        }
    except Exception as e:
        return {"error": str(e)}
    finally:
        db.close()

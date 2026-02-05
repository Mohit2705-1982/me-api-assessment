from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# IMPORTANT: replace with your real password
# If password is @Mohit2705 → use %40Mohit2705
DATABASE_URL = "mysql+pymysql://root:%40Mohit2705@localhost/profile_db"

engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(bind=engine)

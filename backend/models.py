from sqlalchemy import Column, Integer, String
from .database import Base


class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    numero = Column(String(50))
    email = Column(String(100))
    course = Column(String(100))

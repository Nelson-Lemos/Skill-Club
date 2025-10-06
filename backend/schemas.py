from pydantic import BaseModel, EmailStr

class ContactCreate(BaseModel):
    name: str
    numero:str
    email: EmailStr
    course: str
  

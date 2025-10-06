from sqlalchemy.orm import Session
from . import database, models, schemas, crud

def create_contact(db: Session, contact: schemas.ContactCreate):
    db_contact = models.Contact(
        name=contact.name,
        numero=contact.numero,
        email=contact.email,
        course=contact.course
    )
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact


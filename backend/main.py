from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from backend import database, models, schemas, crud
import smtplib
from email.mime.text import MIMEText
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
print("Chave secreta carregada:", SECRET_KEY)

app = FastAPI(title="SkillClub API")

# permitir origens específicas (ex: frontend rodando em Vite)
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Criar tabelas
models.Base.metadata.create_all(bind=database.engine)

# Dependência para pegar sessão do banco
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Função para enviar e-mail
def send_email(contact: schemas.ContactCreate):
    sender = os.getenv("EMAIL_USER")
    password = os.getenv("EMAIL_PASSWORD")
    receiver = os.getenv("EMAIL_RECEIVER")

    msg = MIMEText(
        f"Novo contato recebido:\n\n"
        f"Nome: {contact.name}\n"
        f"E-mail: {contact.email}\n"
        f"Telefone: {contact.numero}\n"
        f"Curso: {contact.course}\n"
    )
    msg["Subject"] = "Novo Contato - Centro de Formação"
    msg["From"] = sender
    msg["To"] = receiver

    with smtplib.SMTP_SSL("smtp.gmail.com", 465, timeout=10) as server:
        server.login(sender, password)
        server.sendmail(sender, receiver, msg.as_string())

# ------------------------
# ROTAS
# ------------------------

@app.post("/contacts/", response_model=schemas.ContactCreate)
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    """Cria um novo contato e envia e-mail de notificação."""
    try:
        new_contact = crud.create_contact(db=db, contact=contact)
        send_email(contact)  # envia o e-mail após salvar
        return new_contact
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao criar contato: {e}")


@app.get("/contacts/")
def list_contacts(db: Session = Depends(get_db)):
    """Lista todos os contatos cadastrados."""
    return db.query(models.Contact).all()


@app.get("/contacts/{contact_id}")
def get_contact(contact_id: int, db: Session = Depends(get_db)):
    """Busca um contato pelo ID."""
    contact = db.query(models.Contact).filter(models.Contact.id == contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contato não encontrado")
    return contact


@app.delete("/contacts/{contact_id}")
def delete_contact(contact_id: int, db: Session = Depends(get_db)):
    """Apaga um contato pelo ID."""
    contact = db.query(models.Contact).filter(models.Contact.id == contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contato não encontrado")
    db.delete(contact)
    db.commit()
    return {"detail": "Contato apagado com sucesso"}

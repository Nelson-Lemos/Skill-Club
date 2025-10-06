import React from "react";
import "./cursos_formadores.css";

interface CursoCardProps {
  nomeCurso: string;
  formador: string;
  experiencia: string;
  tecnologias: string;
  duracao: string;
  modalidade: string;
  imagem: string;
}

const CursoCard: React.FC<CursoCardProps> = ({
  nomeCurso,
  formador,
  experiencia,
  tecnologias,
  duracao,
  modalidade,
  imagem,
}) => {
  return (
    <div className="card">
      <img src={imagem} alt={formador} className="formador-img" />
      <div className="info">
        <h3>{nomeCurso}</h3>
        <p>
          <strong>Formador:</strong> {formador} - {experiencia}<br />
          <strong>Tecnologias:</strong> {tecnologias}<br />
          <strong>Duração:</strong> {duracao} | <strong>Modalidade:</strong> {modalidade}
        </p>
      </div>
    </div>
  );
};

export default CursoCard;

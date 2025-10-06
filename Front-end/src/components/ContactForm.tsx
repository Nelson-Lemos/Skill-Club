import React, { useState } from "react";
import api from "../services/api";
import "../components/contactsForm.css";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    numero: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [modal, setModal] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "O nome é obrigatório.";
    else if (form.name.trim().length < 2) newErrors.name = "O nome deve ter pelo menos 2 caracteres.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) newErrors.email = "O e-mail é obrigatório.";
    else if (!emailRegex.test(form.email.trim())) newErrors.email = "E-mail inválido.";

    const phoneRegex = /^[0-9]{9,15}$/;
    if (!form.numero.trim()) newErrors.numero = "O telefone é obrigatório.";
    else if (!phoneRegex.test(form.numero.trim())) newErrors.numero = "Telefone inválido (apenas números, mínimo 9 dígitos).";

    if (!form.course.trim()) newErrors.course = "Selecione um curso.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await api.post("/contacts/", form);
      if (res.status === 200) {
        setForm({ name: "", email: "", numero: "", course: "" });
        setModal({
          type: "success",
          message: "✅ Inscrição realizada com sucesso! Dentro em breve o centro entrará em contacto consigo.",
        });
      }
    } catch (err) {
      console.error(err);
      setModal({
        type: "error",
        message: "❌ Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.",
      });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => setModal(null);

  return (
    <section id="inscrever" className="section">
      <h2 className="fade-in">Se inscreva num dos nossos cursos</h2>
      <div className="form-container fade-in">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome Completo</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Telefone</label>
            <input
              type="tel"
              name="numero"
              value={form.numero}
              onChange={handleChange}
              placeholder="Digite seu telefone"
            />
            {errors.numero && <span className="error">{errors.numero}</span>}
          </div>

          <div className="form-group">
            <label>Curso de Interesse</label>
            <select name="course" value={form.course} onChange={handleChange}>
              <option value="">Selecione uma opção</option>
              <option value="Desenvolvimento Full Stack">Desenvolvimento Full Stack</option>
              <option value="Data Science & Machine Learning">Data Science & Machine Learning</option>
              <option value="DevOps e Cloud">DevOps e Cloud</option>
              <option value="Mobile Development">Mobile Development</option>
            </select>
            {errors.course && <span className="error">{errors.course}</span>}
          </div>

          <button type="submit" className={`submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
            {loading ? <div className="spinner"></div> : "Inscrever-se"}
          </button>
        </form>
      </div>

      {modal && (
        <div className={`modal ${modal.type}`}>
          <p>{modal.message}</p>
          <button onClick={closeModal}>Fechar</button>
        </div>
      )}
    </section>
  );
};

export default ContactForm;

import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Skill Club</h3>
          <p>
            Transformando o futuro através da tecnologia e educação. Desenvolva suas habilidades com os melhores cursos e soluções tecnológicas do mercado.
          </p>
        </div>

        <div className="footer-section">
          <h3>Links Rápidos</h3>
               <li><a href="#inicio">Início</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#cursos">Cursos</a></li>
                <li><a href="#parceiros">Parceiros</a></li>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <p>📞 (+244) 953 654 261</p>
          <p>📞 (+244) 975 326 253</p>
          <p>📞 (+244) 952 580 868</p>
          <p>📧 skillclub07@gmail.com</p>
          <p>📍 Luanda, Angola</p>
        </div>

        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61580267159912" target="_blank" rel="noreferrer">
              <FaFacebook size={20} /> Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size={20} /> Instagram
            </a>
            <a href="https://wa.me/244999999999" target="_blank" rel="noreferrer">
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="allrights">
        <p>&copy; 2025 Skill Club . Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

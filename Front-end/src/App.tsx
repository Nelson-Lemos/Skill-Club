import React, { useState } from "react";
import logo from "./assets/img/logotipo.jpg";
import "./index.css";
import Footer from "./components/footer";
import Carrossel from "./components/FormadoresCrousel";
import skilltech from "./assets/img/LogoTipoMain.jpg";
import ContactForm from "./components/ContactForm";
import dayotech from "./assets/img/dayotech.jpg";
import idiomaia from "./assets/img/idiomaia.png";
import sotech from "./assets/img/sotech.jpg";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // 👈 estado do menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // 👈 função para abrir/fechar menu
  };

  return (
    <div className="Div_Body">

      <header className="header">
        <nav className="nav">
          <div className="div_logo">
          <img className="logo_img" src={logo} alt="" />
          <a href="#" className="logo">Skill Club</a>
          </div>

          <div>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a className="a" href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#parceiros">Parceiros</a></li>
          </ul>
          </div>

          <div className="auth-buttons">
            <a href="#inscrever" className="btn btn-primary">Inscrever-se</a>
          </div>

          {/* Botão hamburger */}
          <div className={`hamburger ${menuOpen ? "toggle" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

        <section id="inicio" className="hero">
        <Carrossel />
        </section>
        
     <section id="servicos" className="section">
        <h2 className="fade-in">Nossos Serviços</h2>
        <div className="grid">
            <div className="card fade-in">
                <h3>Desenvolvimento Web</h3>
                <p>Criamos sites e aplicações web modernas, responsivas e otimizadas para performance e SEO.</p>
                <a href="#" className="btn btn-primary">Saiba Mais</a>
            </div>
            <div className="card fade-in">
                <h3>Consultoria em TI</h3>
                <p>Orientação especializada para transformação digital e otimização de processos tecnológicos.</p>
                <a href="#" className="btn btn-primary">Saiba Mais</a>
            </div>
            <div className="card fade-in">
                <h3>Suporte Técnico</h3>
                <p>Suporte 24/7 para manutenção e resolução de problemas em sistemas e infraestrutura.</p>
                <a href="#" className="btn btn-primary">Saiba Mais</a>
            </div>
          
        </div>
    </section>

<section id="cursos" className="section">
  <h2 className="fade-in">Cursos Disponíveis</h2>
  <div className="grid">
    
    {/* 🧩 Curso 1 - Lógica de Programação */}
    <div className="card fade-in">
      <h3>Lógica de Programação</h3>
      <p>
        <strong>O que vai aprender:</strong><br />
        Estruturas de decisão, laços de repetição, variáveis, funções e raciocínio computacional.<br /><br />
        <strong>Tecnologias:</strong> JavaScript básico, fluxogramas e algoritmos visuais.<br />
        <strong>Formador:</strong> Ana Silva - Engenheira de Software<br />
        <strong>Duração:</strong> 2 meses<br />
        <strong>Local:</strong> Online<br />
        <strong>Preço:</strong> 15.000 Kz
      </p>
      <a href="#inscrever" className="btn btn-course">Inscrever-se agora</a>
    </div>

    {/* 💻 Curso 2 - Desenvolvimento Web (Front-End) */}
    <div className="card fade-in">
      <h3>Desenvolvimento Web (Front-End)</h3>
      <p>
        <strong>O que vai aprender:</strong><br />
        Criação de sites modernos e responsivos, design interativo e boas práticas de UX/UI.<br /><br />
        <strong>Tecnologias:</strong> HTML, CSS, JavaScript, Git e Bootstrap.<br />
        <strong>Formador:</strong> João Silva - 8 anos de experiência<br />
        <strong>Duração:</strong> 3 meses<br />
        <strong>Local:</strong> Presencial e Online<br />
        <strong>Preço:</strong> 25.000 Kz
      </p>
      <a href="#inscrever" className="btn btn-course">Inscrever-se agora</a>
    </div>

    {/* 🐍 Curso 3 - Desenvolvimento Web com Python */}
    <div className="card fade-in">
      <h3>Desenvolvimento Web com Python</h3>
      <p>
        <strong>O que vai aprender:</strong><br />
        Desenvolvimento de aplicações dinâmicas com backend em Python e integração com front-end.<br /><br />
        <strong>Tecnologias:</strong> HTML, CSS, JavaScript, Python (Flask/Django), SQLite.<br />
        <strong>Formador:</strong> Carlos Mendes - Engenheiro Full Stack<br />
        <strong>Duração:</strong> 4 meses<br />
        <strong>Local:</strong> Online e Presencial<br />
        <strong>Preço:</strong> 35.000 Kz
      </p>
      <a href="#inscrever" className="btn btn-course">Inscrever-se agora</a>
    </div>

    {/* ⚛️ Curso 4 - Desenvolvimento Web com React */}
    <div className="card fade-in">
      <h3>Desenvolvimento Web com React</h3>
      <p>
        <strong>O que vai aprender:</strong><br />
        Criação de interfaces modernas e dinâmicas com React, integração com APIs e deploy profissional.<br /><br />
        <strong>Tecnologias:</strong> HTML, CSS, JavaScript (ES6+), React, Vite, API REST.<br />
        <strong>Formador:</strong> Nelson Wonder 😉<br />
        <strong>Duração:</strong> 5 meses<br />
        <strong>Local:</strong> Online<br />
        <strong>Preço:</strong> 45.000 Kz
      </p>
      <a href="#inscrever" className="btn btn-course">Inscrever-se agora</a>
    </div>

  </div>
</section>

  <section id="about" className="section about">
  <h2 className="section-title">Sobre a Skill Club</h2>
  <div className="about-content">
    
    <div className="about-text">
      <h3>Formando Mentes que Criam o Futuro 🚀</h3>
      <p>
        A <strong>Skill Club</strong> foi fundada em <strong>2025</strong> por <strong>Nelson Lemos Martins Cariamba</strong>, 
        um apaixonado por <em>programação, tecnologia e finanças digitais</em>. 
        Nasceu com a missão de transformar o modo como os jovens aprendem e se conectam com a economia digital.
      </p>

      <p>
        A iniciativa surgiu da visão de criar um espaço onde o aprendizado fosse dinâmico, 
        colaborativo e prático — conectando estudantes, programadores e inovadores em torno 
        de um objetivo comum: <strong>usar a tecnologia para mudar o mundo</strong>.
      </p>

      <h4>🎯 Nossa Missão</h4>
      <ul className="ul_professores">
        <li>Capacitar jovens africanos com competências digitais globais.</li>
        <li>Promover a inclusão tecnológica e a educação acessível.</li>
        <li>Estimular o empreendedorismo e a criação de startups sustentáveis.</li>
        <li>Conectar talentos a oportunidades reais no mercado digital.</li>
      </ul>

      <p>
        Hoje, a <strong>Skill Club</strong> é mais que um centro de formação — 
        é um <em>ecossistema de inovação</em> onde ideias ganham forma, 
        projetos se tornam realidade e cada aluno é inspirado a construir seu próprio caminho.
      </p>

      <p>
        <strong>Fundador:</strong> Nelson Lemos Martins Cariamba<br/>
        <strong>Fundada em:</strong> 2025<br/>
        <strong>Sede:</strong> Angola<br/>
      </p>
    </div>

    <div className="about-image">
      <img src={logo} className="about_img" alt="Logo Skill Club" />
    </div>
  </div>
</section>

<section id="parceiros" className="section parceiros-section">
  <h2 className="fade-in">Nossos Parceiros</h2>
  <p className="parceiros-subtitle fade-in">
    Orgulhosamente conectados com empresas que transformam o futuro da inovação.
  </p>

  <div className="parceiros-grid">
    <div className="parceiro-card fade-in">
      <img src={skilltech} alt="Skill Tech" />
      <h3>Skill Tech</h3>
      <p>Inovação e tecnologia em cada código.</p>
    </div>

    <div className="parceiro-card fade-in">
      <img src={idiomaia} alt="Idiomaia" />
      <h3>Idiomaia</h3>
      <p>Conectando talentos e ideias que mudam o mundo.</p>
    </div>

    <div className="parceiro-card fade-in">
      <img src={dayotech} alt="Dayotech Technologies" />
      <h3>Dayotech Technologies</h3>
      <p>Tecnologia sustentável para um futuro melhor.</p>
    </div>

    <div className="parceiro-card fade-in">
      <img src={sotech} alt="Innovation Labs" />
      <h3>Nova Sotech</h3>
      <p>Explorando, criando e inspirando novas soluções.</p>
    </div>
  </div>
</section>


    <section>
      <ContactForm />
    </section>

   <Footer/>

    </div>
  );
  
};

  export default App;
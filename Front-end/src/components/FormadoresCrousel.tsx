import React, { useState, useEffect } from "react";
import "./Carrosseql.css"
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/fundo abstrato conceito digital escudo de segurança cibernética anti vírus malware proteção contra espionagem segurança de roubo cibernético em um fundo azul e preto.jpeg";
import img3 from "../assets/img/img3.jpg";
import img6 from "../assets/img/22036d02-09fd-4bf5-acc9-62d4aa252734.jpeg";
import img7 from "../assets/img/3414b348-bb18-4f87-92f0-3d9d91c57798.jpeg";  
import img8 from "../assets/img/AI in Healthcare_ No, the Robots Are Not Taking Over.jpeg";
import img9 from "../assets/img/CEREBRO MZHUB.jpeg";
import img10 from "../assets/img/Creating a Successful AI-Powered Business_ Strategies.jpeg";
import img11 from "../assets/img/Cybersecurity Shield Protecting Digital Innovation Background Wallpaper Image For Free Download - Pngtree.jpeg";
import img12 from "../assets/img/🔒 Embrace the future of cyber security with AI….jpeg"


const imagens = [img1, img2, img3,img6,img7,img8,img9,img10,img11,img12];

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 3000); // troca a cada 3 segundos
    return () => clearInterval(intervalo);
  }, []);

  const prevSlide = () => setIndex((index - 1 + imagens.length) % imagens.length);
  const nextSlide = () => setIndex((index + 1) % imagens.length);

  return (
    <div className="carousel">
      {imagens.map((img, i) => (
        <div key={i} className={`slide ${i === index ? "active" : ""}`}>
          <img src={img} alt={`Slide ${i}`} />
          <div className="slide-text">
            <h2>Bem-vindo à SkillClub</h2>
            <p>Transformando o futuro com tecnologia e educação.</p>
            <a  className="btn btn-primary" href="#inscrever">Inscrever-se Agora</a>
          </div>
        </div>
      ))}

      <button className="prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="next" onClick={nextSlide}>
        ›
      </button>

      <div className="indicators">
        {imagens.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

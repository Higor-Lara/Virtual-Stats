import React, { FormEvent, useEffect, useState } from 'react';
import './style.css';
import { MdEmail } from 'react-icons/md';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { useRef } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Partiners from '../../components/Partiners';
import minLogo from '../../assets/images/logo1.svg';
import logoFull from '../../assets/images/Logo4.png';
import logoGooglePlay from '../../assets/images/google-play.png';
import miniLogo from '../../assets/images/miniLogo.png';
import logoWhite from '../../assets/images/logoFullWhite.png';
import api from '../../services/api';
import { idText } from 'typescript';

interface Hospital {
  id: number;
  name: string;
  locale: string;
}

const Landing: React.FC = () => {
  const [hospitaisList, setHospitaisList] = useState<Hospital[]>([]);

  const [open, setOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const inicioRef = useRef<HTMLDivElement>(null);
  const hospitaisRef = useRef<HTMLDivElement>(null);
  const contatoRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerMobileRef = useRef<HTMLDivElement>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    //async function LoadData() {
    //const response = await api.get('/hospitals');

    //const hospitalArray = response.data.map(
    //(hospital: { id: number; nome: string; endereco: string }) => {
    //const { id, nome, endereco } = hospital;
    //return {
    //id,
    //name: nome,
    // locale: endereco,
    //};
    // },
    // );
    const hospitalArray: Hospital[] = [
      {
        id: 1,
        name: 'Samaritano',
        locale: 'Av. Brasil, 1110 - Santo Antonio, Americana, 13465-000',
      },
      {
        id: 2,
        name: 'Beneficência Portuguesa',
        locale: 'R. Onze de Agosto, 557 - Centro, Campinas - SP, 13013-101',
      },
      {
        id: 3,
        name: 'Unimed',
        locale: 'R. do Rosário, 1870 - Centro, Piracicaba - SP, 13400-186',
      },
      {
        id: 4,
        name: 'Santa Isabel',
        locale: 'Av. Independência, 953 - Alto, Piracicaba - SP',
      },
      {
        id: 5,
        name: 'Irmandade da Santa Casa',
        locale: 'Av Barão de Serra Negra Nova, Piracicaba - SP, 13405-121',
      },
      {
        id: 5,
        name: 'São Francisco saúde',
        locale:
          'Av. Conde do Pinhal - Vila Rezende, Piracicaba - SP, 13414-042',
      },
    ];

    setHospitaisList(hospitalArray);
    //}

    //LoadData();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (!headerRef.current) {
      return;
    }
    if (window.scrollY > window.innerHeight - 110) {
      headerRef.current.className = 'page-header page-header-blue';
    } else {
      headerRef.current.className = 'page-header ';
    }
  };

  const buttonInicio = () => {
    inicioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const buttonAbout = () => {
    if (!aboutRef.current) {
      return;
    }
    const offset = 95;
    window.scroll({
      top: aboutRef.current.offsetTop - offset,
      behavior: 'smooth',
    });
  };
  const buttonHospitais = () => {
    if (!hospitaisRef.current) {
      return;
    }
    const offset = 105;
    window.scroll({
      top: hospitaisRef.current.offsetTop - offset,
      behavior: 'smooth',
    });
  };
  const buttonContato = () => {
    if (!contatoRef.current) {
      return;
    }
    const offset = 35;
    window.scroll({
      top: contatoRef.current.offsetTop - offset,
      behavior: 'smooth',
    });
  };
  const buttonDownload = () => {
    if (!downloadRef.current) {
      return;
    }
    const offset = 100;
    window.scroll({
      top: downloadRef.current.offsetTop - offset,
      behavior: 'smooth',
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const subject = subjectRef.current?.value;
    const message = messageRef.current?.value;

    const url = `mailto:virtualstatsapp@gmail.com?subject=${subject}&body=Nome: ${name}. Mensagem: ${message}`;

    window.open(url, '_blank');
  };

  return (
    <div id="page-landing">
      <div className="bar" ref={headerMobileRef}>
        <button type="button" onClick={() => setOpen(!open)}>
          <FaBars size={40} />
        </button>
        <img src={minLogo} alt="logo" />
      </div>
      <div className="home-landing" ref={inicioRef}>
        <header className={`page-header ${open && 'open'}`} ref={headerRef}>
          <div className="header">
            <div className="image-button">
              <button type="button">
                <img src={minLogo} alt="logo" />
              </button>
            </div>
            <div className="left-header">
              <button
                type="button"
                className="button-header"
                onClick={buttonInicio}
              >
                <p>Início</p>
              </button>
              <button
                type="button"
                className="button-header"
                onClick={buttonAbout}
              >
                <p>Sobre</p>
              </button>
              <button
                type="button"
                className="button-header"
                onClick={buttonHospitais}
              >
                <p>Hospitais</p>
              </button>
              <button
                type="button"
                className="button-header"
                onClick={buttonContato}
              >
                <p>Contato</p>
              </button>
              <button
                type="button"
                className="button-header"
                onClick={buttonDownload}
              >
                <p>Download</p>
              </button>
            </div>
          </div>
          <div className="right-header">
            <a
              href="https://app.virtualstats.online"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
          </div>
        </header>

        <div className="center-landing">
          <div className="first-img-home">
            <img src={logoWhite} alt="logoWhite" />
          </div>
          <div className="second-text-home">
            <p className="text-center">Hospitais e Responsáveis</p>
            <p className="second-text-center">
              Sua comunicação de um jeito fácil e rápido
            </p>
          </div>
          <div className="button-home">
            <button type="button" onClick={buttonAbout}>
              Vamos começar
            </button>
            <div className="space-ref" />
          </div>
        </div>
      </div>

      <div id="about" ref={aboutRef}>
        <div className="about-icon">
          <p>Sobre</p>
        </div>
        <div className="title-about">
          <p>Entenda Mais</p> <p>Sobre Nós</p>
        </div>
        <div className="text-about">
          <p>
            Este é um site sobre o aplicativo Virtual Stats. Um aplicativo
            montado em conjunto com um grupo de amigos feito para ajudar a
            comunicação e distribuição de informação entre hospitais e
            responsáveis.
          </p>
          <p>
            Para facilitar que todos estejam cientes das informações necessárias
            de acompanhamento, o Virtual Stats proporciona uma visibilidade de
            fichas de pacientes que contém as informações permitidas de serem
            divulgadas para os responsáveis pelos próprios médicos. Reduzindo
            assim o trabalho e tempo gasto em ligações para com os hospitais.
          </p>
          <p>
            Tudo isso com uma interface propositalmente simples e intuitiva para
            facilitar o amplo uso de quaisquer pessoas que queiram saber o
            estado de seu parente, amigo etc.
          </p>
        </div>
        <div className="line-about" />
      </div>

      <div id="hospital" ref={hospitaisRef}>
        <div className="hospital-icon">
          <p>Hospitais</p>
        </div>
        <div className="title-hospital">
          <p>Hospitais</p>
          <p>Parceiros</p>
        </div>
        <div className="partners-hospitals">
          <ScrollMenu
            data={hospitaisList.map(hospital => {
              return (
                <Partiners
                  key={hospital.id}
                  name={hospital.name}
                  locale={hospital.locale}
                />
              );
            })}
            arrowLeft={<FaChevronCircleLeft size={40} color="#0096c7" />}
            arrowRight={<FaChevronCircleRight size={40} color="#0096c7" />}
            itemStyle={{ marginLeft: 30, height: 355 }}
            dragging
            wheel={false}
          />
        </div>
        <div className="proposal-hospitals">
          <div className="question-img-hospital">
            <p>Possui um Hospital?</p>
          </div>
          <div className="afirmation-img-hospital">
            <p>Faça uma parceria conosco!</p>
          </div>
          <div className="button-img-hospital">
            <button type="button" onClick={buttonContato}>
              Vamos lá
            </button>
          </div>
        </div>
        <div className="line-about" />
      </div>

      <div id="contact" ref={contatoRef}>
        <div className="contact-icon">Contato</div>
        <div className="title-contact">
          <p>Entre em </p>
          <p>Contato</p>
          <p>Conosco</p>
        </div>
        <div className="email-and-input">
          <div className="contact-email">
            <div className="img-email">
              <MdEmail color="#0B74BC" size={45} />
            </div>
            <div className="text-email">
              <p>Email:</p>
              <p>virtualstatsapp@gmail.com</p>
            </div>
          </div>
          <div className="input-contact">
            <form className="form-contact" onSubmit={handleSubmit}>
              <div className="name-email">
                <input
                  type="text"
                  className="name-and-email-input"
                  name="Name"
                  placeholder="Nome"
                  ref={nameRef}
                />
              </div>
              <input
                type="text"
                className="subject-input"
                name="Subject"
                placeholder="Assunto"
                ref={subjectRef}
              />
              <textarea
                className="message-input"
                name="Message"
                placeholder="Mensagem"
                ref={messageRef}
              />
              <button type="submit" className="button-contact">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="line-about" />
      <div id="download" ref={downloadRef}>
        <div className="logo-email">
          <img src={logoFull} alt="logoInteira" />
          <div className="email-ash">
            <p>Email:</p>
            <p>virtualstatsapp@gmail.com</p>
          </div>
        </div>
        <div className="links">
          <p> Links Úteis:</p>
          <button type="button" onClick={buttonInicio}>
            {' '}
            <p>{'>'}</p> Início
          </button>
          <button type="button" onClick={buttonAbout}>
            {' '}
            <p>{'>'}</p> Sobre
          </button>
          <button type="button" onClick={buttonHospitais}>
            {' '}
            <p>{'>'}</p> Hospitais
          </button>
          <button type="button" onClick={buttonContato}>
            {' '}
            <p>{'>'}</p> Contato
          </button>
        </div>
        <div className="google-play">
          <div className="google-play-container">
            <div className="text-google-play">
              <p>{window.innerWidth < 930 ? ' ' : 'Faça o '}</p>
              <p> Download</p>
              <p>do aplicativo:</p>
            </div>
            <div className="logo-google-play">
              <a
                href="https://play.google.com/store/apps/details?id=com.virtualstats"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logoGooglePlay} alt="google-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="rodape">
        <div className="text-rodape">
          <p>© Copyright</p>
          <p>Virtual Stats</p>
          <p> Todos Direitos Reservados</p>
        </div>
        <div className="img-rodape">
          <img src={miniLogo} alt="img-rodape" />
        </div>
      </div>
    </div>
  );
};

export default Landing;

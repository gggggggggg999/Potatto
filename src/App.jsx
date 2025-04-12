import React from "react";
import photo from "./assets/Krash.jpg";

const ExperienceItem = ({ title, period, description }) => (
  <div className="experience-item">
    <h3 className="experience-title">{title}</h3>
    <p className="experience-period">{period}</p>
    <p className="experience-description">{description}</p>
  </div>
);

const ProgressBar = ({ skill, level }) => (
  <div className="progress-bar">
    <p className="progress-skill">{skill}</p>
    <div className="progress-container">
      <div className="progress-fill" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

const Resume = () => {
  return (
    <main className="resume-main">
      <div className="resume-container">
        <img className="photo" src={photo} alt="" />
        <header className="resume-header">
          <h1 className="resume-title">Мырза Доктурбеков</h1>
          <p className="resume-subtitle">
            Junior Frontend Developer — опыт учебы 1 год
          </p>
        </header>
        <section className="resume-section">
          <h2 className="section-title">Контакты</h2>
          <ul className="contact-list">
            <li>
              Email:{" "}
              <a href="mailto:mmg9999999@gmail.com">mmg9999999@gmail.com</a>
            </li>
            <li>Телефон: +996 999 003 992</li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/mmg9999999">github.com/mmg9999999</a>
            </li>
          </ul>
        </section>
        <section className="resume-section">
          <h2 className="section-title">Опыт работы</h2>
          <div>
            <ExperienceItem
              title="Frontend Developer"
              period="2024 — наст. время"
              description="Разработка масштабируемых SPA, архитектура фронтенда, менторство команды из 10 разработчиков."
            />
            <ExperienceItem
              title="Frontend Developer"
              period="2024-2025"
              description="Создание интерфейсов, оптимизация производительности, работа с клиентами по UX/UI."
            />
          </div>
        </section>
        <section className="resume-section">
          <h2 className="section-title">Образование</h2>
          <p className="education">
            PLIT99 - лицей информационных технологий, 2024-2026
          </p>
        </section>
        <section className="resume-section">
          <h2 className="section-title">Навыки</h2>
          <div>
            <ProgressBar skill="React" level={20} />
            <ProgressBar skill="HTML" level={200} />
            <ProgressBar skill="CSS" level={200} />
            <ProgressBar skill="Tailwind CSS" level={50} />
            <ProgressBar skill="JavaScript" level={80} />
            <ProgressBar skill="Vite" level={20} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Resume;

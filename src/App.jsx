import React from "react";

const ExperienceItem = ({ title, period, description }) => (
  <div style={{ marginBottom: "1rem" }}>
    <h3 style={{ color: "#1f2937", fontWeight: "600", textAlign: "center" }}>
      {title}
    </h3>
    <p style={{ fontSize: "0.875rem", color: "#6b7280", textAlign: "center" }}>
      {period}
    </p>
    <p style={{ fontSize: "0.875rem", color: "#4b5563", textAlign: "center" }}>
      {description}
    </p>
  </div>
);

const Resume = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "768px",
          width: "100%",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "1rem",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <header>
          <h1
            style={{
              fontSize: "1.875rem",
              fontWeight: "700",
              color: "#1f2937",
              marginBottom: "0.5rem",
            }}
          >
            Мырза Доктурбеков
          </h1>
          <p style={{ color: "#6b7280", marginBottom: "1rem" }}>
            Junior Frontend Developer — опыт учебы 1 год
          </p>
        </header>
        <section>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "0.5rem",
            }}
          >
            Контакты
          </h2>
          <ul
            style={{
              color: "#4b5563",
              listStyle: "none",
              padding: 0,
              marginBottom: "1rem",
            }}
          >
            <li>
              Email:{" "}
              <a href="http://mailto:mmg9999999@gmail.com">
                mailto:mmg9999999@gmail.com
              </a>
            </li>
            <li>Телефон: +996 999 003 992</li>
            <li>GitHub: github.com/mmg9999999</li>
          </ul>
        </section>
        <section>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "0.5rem",
            }}
          >
            Опыт работы
          </h2>
          <div>
            <ExperienceItem
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
        <section>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "0.5rem",
            }}
          >
            Образование
          </h2>
          <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
            PLIT99 - лицей информационных технологий, 2024-2026
          </p>
        </section>
        <section>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "0.5rem",
            }}
          >
            Навыки
          </h2>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.5rem",
              color: "#4b5563",
              listStyle: "none",
              padding: 0,
              marginBottom: "1rem",
            }}
          >
            <li>React</li>
            <li>html</li>
            <li>css</li>
            <li>Tailwind CSS</li>
            <li>js</li>
            <li>Vite</li>
          </ul>
        </section>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <button
            style={{
              backgroundColor: "#3b82f6",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              borderRadius: "0.375rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Кнопка 1
          </button>
          <button
            style={{
              backgroundColor: "#6b7280",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              borderRadius: "0.375rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Кнопка 2
          </button>
        </div>
      </div>
    </main>
  );
};

export default Resume;

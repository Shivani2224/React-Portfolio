import React from "react";

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "80px 0",
        backgroundColor: "#f0fdfa",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "20px",
            color: "#0f766e",
          }}
        >
          About Me
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 2fr" : "1fr",
            gap: "40px",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              SP
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "20px",
                color: "#0f766e",
              }}
            >
              Hello! I'm Shivani
            </h3>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#475569",
                marginBottom: "20px",
              }}
            >
              I'm a passionate Front-End Developer and UX/UI enthusiast based in
              Ontario, Canada. I enjoy turning creative ideas into interactive,
              user-friendly experiences using HTML, CSS, JavaScript, React, and
              Tailwind CSS.
            </p>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#475569",
                marginBottom: "20px",
              }}
            >
              With a background in healthcare and tech support, I bring a unique
              blend of problem-solving, precision, and empathy into every
              project I work on. I love crafting clean, responsive interfaces
              and designing intuitive user journeys that prioritize both
              functionality and aesthetics.
            </p>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#475569",
                marginBottom: "20px",
              }}
            >
              I'm always excited to take on new challenges and opportunities to
              learn, grow, and contribute meaningfully as a developer.
            </p>

            <div
              style={{
                marginTop: "30px",
              }}
            >
              <h4
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "15px",
                  color: "#0f766e",
                }}
              >
                Quick Facts:
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                }}
              >
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "1rem",
                    color: "#475569",
                  }}
                >
                  📍 Location: Ontario, Canada
                </li>
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "1rem",
                    color: "#475569",
                  }}
                >
                  🎓 Education: BCA (Bachelor of Computer Applications)
                </li>
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "1rem",
                    color: "#475569",
                  }}
                >
                  💼 Background: Healthcare & Tech Support
                </li>
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "1rem",
                    color: "#475569",
                  }}
                >
                  ⚡ Passion: Always excited to learn, grow, and contribute
                  meaningfully
                </li>
              </ul>
            </div>

            <button
              style={{
                marginTop: "30px",
                padding: "12px 30px",
                fontSize: "1rem",
                backgroundColor: "#0d9488",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0f766e")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#0d9488")}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

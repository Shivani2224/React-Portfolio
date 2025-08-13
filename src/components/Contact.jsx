import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "20px",
              color: "#0f766e",
              fontWeight: "bold",
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#475569",
              marginBottom: "48px",
              fontSize: "1.125rem",
              maxWidth: "600px",
              margin: "0 auto 48px",
            }}
          >
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you!
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth >= 1024 ? "1fr 1fr" : "1fr",
              gap: "48px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div style={{ marginBottom: "32px" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    color: "#0f766e",
                  }}
                >
                  Let's Connect
                </h3>
                <p
                  style={{
                    color: "#475569",
                    marginBottom: "24px",
                    lineHeight: "1.6",
                  }}
                >
                  I'm always excited to work on new projects and collaborate
                  with passionate individuals and teams. Whether you have a
                  specific project in mind or just want to explore
                  possibilities, don't hesitate to reach out.
                </p>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                    padding: "16px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <FaEnvelope
                    style={{
                      color: "#0d9488",
                      fontSize: "1.5rem",
                      marginRight: "16px",
                      marginTop: "4px",
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontWeight: "600",
                        color: "#0f766e",
                        marginBottom: "4px",
                      }}
                    >
                      Email
                    </h4>
                    <a
                      href="mailto:harshhvani13108@gmail.com"
                      style={{
                        color: "#0d9488",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.textDecoration = "none")
                      }
                    >
                      patelshivani1410@gmail.com
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                    padding: "16px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <FaMapMarkerAlt
                    style={{
                      color: "#0d9488",
                      fontSize: "1.5rem",
                      marginRight: "16px",
                      marginTop: "4px",
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontWeight: "600",
                        color: "#0f766e",
                        marginBottom: "4px",
                      }}
                    >
                      Location
                    </h4>
                    <p style={{ color: "#475569" }}>Ontario, Canada</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                    padding: "16px",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <FaPhone
                    style={{
                      color: "#0d9488",
                      fontSize: "1.5rem",
                      marginRight: "16px",
                      marginTop: "4px",
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontWeight: "600",
                        color: "#0f766e",
                        marginBottom: "4px",
                      }}
                    >
                      Availability
                    </h4>
                    <p style={{ color: "#475569" }}>Mon-Fri, 9 AM - 6 PM EST</p>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <h4
                  style={{
                    fontWeight: "600",
                    marginBottom: "12px",
                    color: "#0f766e",
                  }}
                >
                  Follow Me
                </h4>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    justifyContent: "center",
                  }}
                >
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "#0d9488",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.25rem",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#0f766e")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#0d9488")
                    }
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "#0d9488",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.25rem",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#0f766e")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#0d9488")
                    }
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "#0d9488",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.25rem",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#0f766e")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#0d9488")
                    }
                  >
                    <FaTwitter />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "white",
                  padding: "32px",
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "24px",
                    color: "#0f766e",
                  }}
                >
                  Send Message
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      window.innerWidth >= 768 ? "1fr 1fr" : "1fr",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "12px 16px",
                      border: "2px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#0d9488")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="your@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "12px 16px",
                      border: "2px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#0d9488")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    marginBottom: "16px",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#0d9488")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />

                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    marginBottom: "24px",
                    resize: "vertical",
                    minHeight: "150px",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#0d9488")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: "100%",
                    padding: "14px 24px",
                    background: "#0d9488",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#0f766e")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#0d9488")
                  }
                >
                  Send Message
                  <span style={{ marginLeft: "8px" }}>→</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

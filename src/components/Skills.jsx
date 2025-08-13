import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaGitAlt, FaFigma, FaNodeJs, FaNpm 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, 
  SiRedux, SiMongodb, SiExpress 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      icon: <FaHtml5 />,
      description: 'Semantic markup & accessibility',
      color: '#e34c26'
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt />,
      description: 'Responsive design & animations',
      color: '#1572b6'
    },
    {
      name: 'JavaScript',
      icon: <FaJs />,
      description: 'ES6+ & DOM manipulation',
      color: '#f7df1e'
    },
    {
      name: 'React',
      icon: <FaReact />,
      description: 'Component-based UI development',
      color: '#61dafb'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      description: 'Utility-first CSS framework',
      color: '#06b6d4'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      description: 'Type-safe JavaScript',
      color: '#3178c6'
    },
    {
      name: 'Git',
      icon: <FaGitAlt />,
      description: 'Version control',
      color: '#f05032'
    },
    {
      name: 'Figma',
      icon: <FaFigma />,
      description: 'UI/UX design & prototyping',
      color: '#f24e1e'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      description: 'Backend JavaScript runtime',
      color: '#339933'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" style={{
      padding: '80px 0',
      backgroundColor: '#f0fdfa'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#0f766e',
            fontWeight: 'bold'
          }}>Skills & Tools</h2>
          <p style={{
            textAlign: 'center',
            color: '#475569',
            marginBottom: '48px',
            fontSize: '1.125rem'
          }}>
            Technologies I work with to bring ideas to life
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(3, 1fr)',
              gap: '24px'
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '28px 20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  border: '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '2px solid #0d9488';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(13, 148, 136, 0.15)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '2px solid transparent';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.background = 'white';
                }}
              >
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  style={{
                    fontSize: '3rem',
                    marginBottom: '12px',
                    color: skill.color,
                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                  }}
                >
                  {skill.icon}
                </motion.div>
                <h3 style={{
                  fontWeight: '600',
                  color: '#0f766e',
                  marginBottom: '4px',
                  fontSize: '1.125rem'
                }}>{skill.name}</h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#64748b'
                }}>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
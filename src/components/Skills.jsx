const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["C++", "Python", "JavaScript", "TypeScript"]
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TailwindCSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Django", "FastAPI"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "Postman", "Linux"]
    },
    {
      title: "Concepts",
      skills: ["DSA", "System Design", "Machine Learning", "Deep Learning", "RBAC"]
    }
  ]

  return (
    <section id="skills" className="section">
      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .skill-category {
          padding: 2rem;
        }

        .category-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .category-title i {
          color: var(--primary);
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-item {
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 500;
          transition: var(--transition);
        }

        .skill-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--primary);
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="card skill-category">
              <h3 className="category-title">
                <i className="fas fa-star"></i>
                {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
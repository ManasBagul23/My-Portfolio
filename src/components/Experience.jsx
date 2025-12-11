const Experience = () => {
  const experiences = [
    {
      role: "AI Developer Intern",
      company: "Passion Infotech Pvt Ltd",
      duration: "Jan 2025 – Jul 2025",
      highlights: [
        "Developed AI simulation modules using LLaMA3, FastAPI, ChromaDB",
        "Implemented embeddings, vector search and scoring workflows",
        "Built ML pipelines for automated evaluation"
      ],
      icon: "🤖",
      tech: ["LLaMA3", "FastAPI", "ChromaDB", "ML Pipelines"]
    }
  ]

  const positions = [
    {
      title: "ICON Club — Project Unit Secretary",
      description: "Coordinated industry–academia projects and technical reviews"
    },
    {
      title: "Student Developer Program Club — Event Coordinator",
      description: "Organized ML bootcamps, hackathons, and workshops"
    },
    {
      title: "GDSC VIT Pune — AI/ML Team Member",
      description: "Mentored students in ML/DL fundamentals"
    }
  ]

  return (
    <section id="experience" className="section">
      <style jsx>{`
        .section {
          padding: 5rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 3rem;
          text-align: left;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 2px;
        }

        /* Experience Box - Smaller with Fading Effect */
        .experience-box {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          margin-bottom: 3rem;
        }

        .experience-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(var(--primary-rgb, 66, 153, 225), 0.3), transparent);
        }

        .experience-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
          border-color: rgba(var(--primary-rgb, 66, 153, 225), 0.2);
        }

        /* Header Section */
        .experience-header {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .experience-role {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          line-height: 1.3;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .role-icon {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .company-duration-container {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .experience-company {
          font-size: 1rem;
          color: var(--primary);
          font-weight: 600;
          margin: 0;
        }

        .experience-duration {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .duration-icon {
          opacity: 0.7;
        }

        /* Highlights Section */
        .experience-highlights {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .experience-highlight {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          padding-left: 0.5rem;
          position: relative;
        }

        .experience-highlight:last-child {
          margin-bottom: 0;
        }

        .highlight-icon {
          color: var(--primary);
          font-size: 0.75rem;
          margin-top: 0.375rem;
          flex-shrink: 0;
          opacity: 0.8;
        }

        .highlight-text {
          color: var(--text-tertiary);
          line-height: 1.5;
          font-size: 0.95rem;
          flex: 1;
        }

        /* Tech Tags - Smaller */
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tech-tag {
          background: rgba(var(--primary-rgb, 66, 153, 225), 0.08);
          color: var(--primary);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid rgba(var(--primary-rgb, 66, 153, 225), 0.15);
          transition: all 0.2s ease;
        }

        .tech-tag:hover {
          background: rgba(var(--primary-rgb, 66, 153, 225), 0.12);
          transform: translateY(-1px);
        }

        /* Positions Section */
        .positions-section {
          margin-top: 3rem;
        }

        .positions-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2rem;
          position: relative;
          display: inline-block;
        }

        .positions-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 50px;
          height: 2px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 2px;
        }

        .positions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        .position-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(10px);
          border-radius: 10px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .position-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(var(--primary-rgb, 66, 153, 225), 0.3), transparent);
        }

        .position-card:hover {
          border-color: rgba(var(--primary-rgb, 66, 153, 225), 0.2);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }

        .position-icon {
          color: var(--primary);
          font-size: 1.25rem;
          margin-bottom: 1rem;
          opacity: 0.8;
        }

        .position-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .position-description {
          color: var(--text-tertiary);
          line-height: 1.5;
          font-size: 0.9rem;
          margin: 0;
          flex-grow: 1;
        }

        /* Divider between sections */
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          margin: 3rem 0;
          border: none;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .section-title {
            font-size: 2.25rem;
          }
          
          .positions-title {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1.5rem;
          }

          .section {
            padding: 3rem 0;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          .experience-box {
            padding: 1.5rem;
          }

          .company-duration-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .positions-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .position-card {
            padding: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .experience-box {
            padding: 1.25rem;
          }

          .experience-role {
            font-size: 1.375rem;
          }

          .experience-company {
            font-size: 0.95rem;
          }

          .highlight-text,
          .position-description {
            font-size: 0.875rem;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        {/* AI Developer Intern Box - Smaller with Fading */}
        <div className="experience-box">
          <div className="experience-header">
            <h3 className="experience-role">
              <span className="role-icon">🤖</span>
              AI Developer Intern
            </h3>
            
            <div className="company-duration-container">
              <div className="experience-company">Passion Infotech Pvt Ltd</div>
              <div className="experience-duration">
                <i className="fas fa-calendar-alt duration-icon"></i>
                <span>Jan 2025 – Jul 2025</span>
              </div>
            </div>
          </div>
          
          <ul className="experience-highlights">
            {experiences[0].highlights.map((highlight, i) => (
              <li key={i} className="experience-highlight">
                <i className="fas fa-chevron-right highlight-icon"></i>
                <span className="highlight-text">{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack Tags */}
          <div className="tech-tags">
            {experiences[0].tech.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Section Divider */}
        <hr className="section-divider" />

        {/* Positions of Responsibility Section */}
        <div className="positions-section">
          <h3 className="positions-title">Positions of Responsibility</h3>
          <div className="positions-grid">
            {positions.map((position, index) => (
              <div key={index} className="position-card">
                <div className="position-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4 className="position-title">{position.title}</h4>
                <p className="position-description">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
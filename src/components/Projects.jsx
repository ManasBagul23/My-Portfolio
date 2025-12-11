const Projects = () => {
  const projects = [
    {
      title: "UrbanFlow — Smart Traffic Management",
      github: "https://github.com/ManasBagul23/Urban-Flow",
      description: "Full-stack system to optimize traffic signal timing and monitor flows. Published at IEEE ASIANCON 2025.",
      tech: ["Next.js", "GraphQL", "MongoDB", "Realtime"],
      live: null,
      hasDetails: true
    },
    {
      title: "AI-based Inventory Management System",
      github: "https://github.com/ManasBagul23/Inventory-Management-System",
      description: "B2B inventory platform with expiry alerts, quotation engine, analytics dashboard, and multi-role management.",
      tech: ["Django", "REST", "RBAC", "Celery"],
      live: null,
      hasDetails: true
    },
    {
      title: "Cultural Bridge Game — AI Industry Project",
      github: "https://github.com/ManasBagul23/Cultural-Bridge-Game",
      description: "AI-powered simulation system generating dynamic cultural learning scenarios with KALKI-based evaluation.",
      tech: ["FastAPI", "LLaMA3", "RAG", "ChromaDB"],
      live: null,
      hasDetails: true
    },
    {
      title: "Gradient Descent Visualizer",
      github: "https://github.com/ManasBagul23",
      description: "Interactive tool showing loss surfaces, learning rate comparison and optimization paths.",
      tech: ["Python", "Matplotlib", "NumPy"],
      live: null,
      hasDetails: true
    },
    {
      title: "AI Court Evidence Analyzer",
      github: "https://github.com/ManasBagul23/AI-Court-Evidence-Analyzer",
      description: "AI tool for violence detection, weapon detection and frame-level timestamp extraction from CCTV footage.",
      tech: ["Deep Learning", "Django", "CNN", "Video Processing"],
      live: "https://optimizer-lens-frontend.vercel.app/",
      hasDetails: false
    }
  ]

  return (
    <section id="projects" className="section">
      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--primary), var(--primary-purple));
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .project-icon i {
          font-size: 1.25rem;
          color: white;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .project-description {
          color: var(--text-tertiary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .project-actions {
          display: flex;
          gap: 0.75rem;
        }

        .project-actions .btn {
          flex: 1;
          justify-content: center;
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.5rem;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: var(--radius-sm);
          color: #22c55e;
          font-size: 0.75rem;
          font-weight: 600;
          text-decoration: none;
        }

        .live-badge:hover {
          background: rgba(34, 197, 94, 0.15);
          border-color: rgba(34, 197, 94, 0.3);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-subtitle">
          Hands-on full-stack and ML projects — code and demos on GitHub / live when available.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="card project-card">
              <div className="project-icon">
                <i className="fas fa-code"></i>
              </div>

              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-badge">
                    <i className="fas fa-external-link-alt"></i>
                    Live
                  </a>
                )}
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
                {project.hasDetails ? (
                  <button className="btn btn-secondary">
                    <i className="fas fa-eye"></i>
                    View Details
                  </button>
                ) : (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
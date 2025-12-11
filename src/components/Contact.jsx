const Contact = () => {
  return (
    <section id="contact" className="section">
      <style jsx>{`
        .contact-container {
          max-width: 36rem;
          margin: 0 auto;
          text-align: center;
        }

        .contact-card {
          padding: 3rem 2rem;
        }

        .contact-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .contact-subtitle {
          color: var(--text-tertiary);
          font-size: 1.125rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .contact-footer {
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        @media (max-width: 640px) {
          .contact-title {
            font-size: 2rem;
          }

          .contact-actions {
            flex-direction: column;
          }

          .contact-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="container">
        <div className="contact-container">
          <div className="card contact-card">
            <h2 className="contact-title">
              Let's build something <span className="text-gradient">great</span> together.
            </h2>
            
            <p className="contact-subtitle">
              Have a project in mind or want to discuss opportunities? 
              I'm always open to interesting conversations.
            </p>

            <div className="contact-actions">
              <a href="mailto:bagulmanas23@gmail.com" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                Email
              </a>
              <a href="https://github.com/ManasBagul23" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/manas-bagul-5b46152a5/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <i className="fab fa-linkedin-in"></i>
                LinkedIn
              </a>
            </div>

            <div className="contact-footer">
              <p>© {new Date().getFullYear()} Manas Bagul. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
const Hero = () => {
  const ratings = [
    { label: 'LeetCode', value: '1687', link: 'https://leetcode.com/ManasBagul/', icon: '⚡' },
    { label: 'CodeChef', value: '3★', link: 'https://www.codechef.com/users/bagulmanas23', icon: '⭐' },
    { label: 'CodeForces', value: 'Pupil', link: 'https://codeforces.com/profile/bagulmanas', icon: '🚀' },
  ]

  return (
    <section id="hero" className="section">
      <style jsx>{`
        :root {
  --primary: #7c3aed;
  --secondary: #3b82f6;
  --primary-rgb: 124,58,237;
  --text-primary: #ffffff;
  --text-secondary: #cbd5e1;   /* subtitle / small labels */
  --text-tertiary: #94a3b8;    /* paragraph / muted text */
  --border-color: rgba(255,255,255,0.06);
  --surface: rgba(255,255,255,0.03);
}

        .hero {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: start;
        }

        .hero-left {
          animation: fadeIn 0.6s ease-out 0.1s forwards;
          opacity: 0;
        }

        .hero-right {
          animation: fadeIn 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }

        /* Availability Badge */
        .availability {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 20px;
          color: #22c55e;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 2rem;
        }

        .availability-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        /* Name */
        .name {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Main Title */
        .title {
          font-size: 3.25rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
        }

        .title-gradient {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Subtitle */
        .subtitle {
          font-size: 1.375rem;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
          line-height: 1.4;
        }

        .subtitle-gradient {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: inline-block;
            font-weight: 700;
          }

        /* Bio */
        .bio {
          font-size: 1.125rem;
          color: var(--text-tertiary);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 90%;
        }

        /* Buttons */
        .button-group {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(var(--primary-rgb, 66, 153, 225), 0.3);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        /* Ratings */
        .ratings {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .rating-item {
          text-decoration: none;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .rating-item:hover .badge {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .badge-icon {
          font-size: 1.25rem;
        }

        .badge-content {
          display: flex;
          flex-direction: column;
        }

        .badge-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 0.125rem;
        }

        .badge-value {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* Profile Card */
        .profile-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid var(--border-color);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .profile-avatar {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
          color: white;
          position: relative;
          flex-shrink: 0;
        }

        .profile-status {
          position: absolute;
          bottom: -3px;
          right: -3px;
          width: 14px;
          height: 14px;
          background: #22c55e;
          border: 3px solid var(--surface);
          border-radius: 50%;
        }

        .profile-info h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .profile-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .profile-summary {
          color: var(--text-tertiary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--primary);
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        /* Animations */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-right {
            max-width: 400px;
          }

          .bio {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 6rem;
            padding-bottom: 3rem;
          }

          .container {
            padding: 0 1.5rem;
          }

          .title {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1.25rem;
          }

          .bio {
            font-size: 1rem;
          }

          .button-group {
            flex-direction: column;
          }

          .button-group .btn {
            width: 100%;
            justify-content: center;
          }

          .ratings {
            justify-content: center;
          }

          .profile-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding-top: 4rem;
            padding-bottom: 2rem;
          }

          .container {
            padding: 0 1rem;
          }

          .title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.125rem;
          }

          .profile-avatar {
            width: 50px;
            height: 50px;
            font-size: 1rem;
          }

          .profile-info h3 {
            font-size: 1.125rem;
          }

          .badge {
            padding: 0.5rem 0.75rem;
          }

        }
      `}</style>

      <div className="container">
        <div className="hero">
          <div className="hero-content">
            {/* Left Column */}
            <div className="hero-left">
              <div className="availability">
                <div className="availability-dot"></div>
                Available for opportunities
              </div>

              <div className="name">Manas Bagul</div>
              <h1 className="title">Hi — I'm Manas.</h1>
              <h2 className="subtitle">
                I build <span className="subtitle-gradient">web & AI</span> systems.
              </h2>
              
              <p className="bio">
                Full-stack developer & ML engineer. I build scalable backends, modern frontends
                and production-ready ML pipelines. Open to SDE & ML roles.
              </p>

              <div className="button-group">
                <a href="#contact" className="btn btn-primary">
                  <i className="fas fa-envelope"></i>
                  Contact Me
                </a>
                <a href="https://drive.google.com/file/d/1Mb8THGi0RooAZShmJ1L750EACzXTk6u9/view?usp=sharing" className="btn btn-secondary">
                  <i className="fas fa-download"></i>
                  Download DS CV
                </a>
                <a href="https://drive.google.com/file/d/1huZifFYDx1gxY4ZpEGinqjBFTeSkJ_7r/view?usp=sharing" className="btn btn-secondary">
                  <i className="fas fa-download"></i>
                  Download SDE CV
                </a>
              </div>

              <div className="ratings">
                {ratings.map((rating) => (
                  <a 
                    key={rating.label} 
                    href={rating.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rating-item"
                  >
                    <div className="badge">
                      <span className="badge-icon">{rating.icon}</span>
                      <div className="badge-content">
                        <div className="badge-label">{rating.label}</div>
                        <div className="badge-value">{rating.value}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Profile Card */}
            <div className="hero-right">
              <div className="profile-card">
                <div className="profile-header">
                  <div className="profile-avatar">
                    MB
                    <div className="profile-status"></div>
                  </div>
                  <div className="profile-info">
                    <h3>Full-Stack & ML Engineer</h3>
                    <div className="profile-location">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Pune, India</span>
                    </div>
                  </div>
                </div>

                <p className="profile-summary">
                  Full-stack + ML engineer with experience building Django & FastAPI backends, 
                  React/Next frontends and CV/DL models.
                </p>

                <div className="social-links">
                  <a href="https://github.com/ManasBagul23" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/manas-bagul-5b46152a5/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
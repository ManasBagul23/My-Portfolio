import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition);
          background: transparent;
          backdrop-filter: blur(20px);
        }

        .navbar.scrolled {
          background: rgba(10, 17, 36, 0.9);
          border-bottom: 1px solid var(--border);
          padding: 1rem 0;
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 700;
          font-size: 1.25rem;
        }

        .logo-badge {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--primary), var(--primary-purple));
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.125rem;
        }

        .nav-items {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.875rem;
          transition: var(--transition);
          position: relative;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--primary-purple));
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 1.5rem;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 1rem;
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-nav-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          transition: var(--transition);
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .nav-items {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .btn-download {
            display: none;
          }
        }
      `}</style>

      <div className="container navbar-content">
        <a href="#" className="logo">
          <div className="logo-badge">MB</div>
          <span>Manas Bagul</span>
        </a>

        <div className="nav-items">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a href="https://drive.google.com/file/d/1-your-cv-link" className="btn btn-primary btn-download">
            <i className="fas fa-download"></i>
            Download CV
          </a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <div className="mobile-nav-items">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://drive.google.com/file/d/1-your-cv-link" 
              className="btn btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-download"></i>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
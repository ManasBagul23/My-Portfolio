const Achievements = () => {
  const achievements = [
    {
      title: "Winner — InnoHack 2.0",
      description: "National Level Hackathon",
      icon: "🏆"
    },
    {
      title: "Bajaj Finserv HackRx 2025",
      description: "AIR 130",
      icon: "🥈"
    },
    {
      title: "LeetCode Rating",
      description: "1687",
      icon: "⚡"
    },
    {
      title: "CodeChef Rating",
      description: "1452 (3★)",
      icon: "⭐"
    },
    {
      title: "CodeForces Rating",
      description: "1274 (Pupil)",
      icon: "🚀"
    }
  ]

  return (
    <section id="achievements" className="section">
      <style jsx>{`
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .achievement-card {
          padding: 1.5rem;
          text-align: center;
        }

        .achievement-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .achievement-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .achievement-description {
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }
      `}</style>

      <div className="container">
        <h2 className="section-title">Awards & Achievements</h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="card achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Online Meeting Scheduler</h1>
        <nav style={styles.nav}>
          <Link to="/schedule" style={styles.navLink}>Schedule a Meeting</Link>
          <Link to="/my-meetings" style={styles.navLink}>My Meetings</Link>
          <Link to="/profile" style={styles.navLink}>Profile</Link>
        </nav>
      </header>
      <main style={styles.main}>
        <section style={styles.section}>
          <h2>Welcome to Our Meeting Scheduler</h2>
          <p>Easily schedule and manage your meetings all in one place.</p>
          <Link to="/schedule" style={styles.button}>Get Started</Link>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Online Meeting Scheduler</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
  },
  nav: {
    margin: '20px 0',
  },
  navLink: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#61dafb',
    fontSize: '18px',
  },
  main: {
    padding: '20px',
  },
  section: {
    margin: '40px 0',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#61dafb',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  },
  footer: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '10px',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
};

export default HomePage;

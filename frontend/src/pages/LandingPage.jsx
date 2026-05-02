import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function LandingPage() {
  const { user, loginWithGoogle } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="landing-page">
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="Universal AI Translator Logo" className="hero-logo" />
          <h1 className="hero-title">Translate & Understand <br/><span className="text-gradient">Anything. Anywhere.</span></h1>
          <p className="hero-subtitle">
            Upload any file and get a clear, source-backed translation in seconds. 
            Summarize findings, cross-check sources, and ask questions in any language.
          </p>
          <button onClick={loginWithGoogle} className="btn-hero">
            Get Started for Free
          </button>
          <p className="trusted-text">Trusted by 2M+ researchers & teams</p>
        </motion.div>
      </section>

      <section className="features-grid">
        <motion.div className="feature-card" whileHover={{ y: -5 }}>
          <h3>Multi-Format Support</h3>
          <p>We support PDF, PPTX, TXT, MP3, MP4, WEBM, and direct YouTube URLs. Just drop it in.</p>
        </motion.div>
        <motion.div className="feature-card" whileHover={{ y: -5 }}>
          <h3>Global Language Matrix</h3>
          <p>Hierarchical selection mapping every prominent language worldwide. If it exists, we can translate it.</p>
        </motion.div>
        <motion.div className="feature-card" whileHover={{ y: -5 }}>
          <h3>100% Local & Secure</h3>
          <p>All translations are powered securely on your hardware. Your data never leaves your environment.</p>
        </motion.div>
      </section>
    </div>
  );
}

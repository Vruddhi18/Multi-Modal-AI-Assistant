import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

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
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-eyebrow">Documents · Audio · Video · Web</span>
          <h1 className="hero-title">Understand anything,<br/><span className="text-gradient">in any language.</span></h1>
          <p className="hero-subtitle">
            Drop in a file, a recording, or a link. Get a clear translation back,
            then ask follow-up questions until it actually makes sense.
          </p>
          <button onClick={loginWithGoogle} className="btn-hero">
            Get Started — Free
          </button>
          <p className="trusted-text">No credit card · Sign in with Google</p>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ghost-card gc-1">
            <span className="gc-lang">EN → 日本語</span>
            <p>「四半期の売上報告書をお送りします...」</p>
          </div>
          <div className="ghost-card gc-2">
            <span className="gc-lang">EN → Español</span>
            <p>"Adjunto encontrará el informe de resultados..."</p>
          </div>
          <div className="ghost-card gc-3">
            <span className="gc-lang">EN → हिन्दी</span>
            <p>"त्रैमासिक रिपोर्ट संलग्न है..."</p>
          </div>
        </motion.div>
      </section>

      <section className="features-grid">
        <motion.div className="feature-card" whileHover={{ x: 4 }}>
          <h3>Any format, dropped in</h3>
          <p>PDF, PPTX, TXT, MP3, MP4, WEBM, or a YouTube link — bring whatever you're working with.</p>
        </motion.div>
        <motion.div className="feature-card" whileHover={{ x: 4 }}>
          <h3>Every major language</h3>
          <p>A full language matrix covering the world's most spoken languages, mapped down to regional dialects.</p>
        </motion.div>
        <motion.div className="feature-card" whileHover={{ x: 4 }}>
          <h3>Ask, don't just read</h3>
          <p>Chat with what you uploaded. Clarify a phrase, get context, or ask for a shorter summary — in the language you want.</p>
        </motion.div>
      </section>
    </div>
  );
}

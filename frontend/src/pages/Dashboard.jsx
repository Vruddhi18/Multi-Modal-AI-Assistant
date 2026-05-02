import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { FileText, Clock, Settings, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="dashboard page-container">
      <header className="dashboard-header">
        <div>
          <h2>Welcome back, {user?.name.split(' ')[0]}</h2>
          <p className="subtitle">Here's an overview of your recent activity.</p>
        </div>
        <Link to="/translate" className="btn-primary">
          <Plus size={18} /> New Translation
        </Link>
      </header>

      <div className="dashboard-stats">
        <div className="stat-card">
          <FileText size={24} className="stat-icon" />
          <div className="stat-info">
            <h4>Documents Processed</h4>
            <p>12 this week</p>
          </div>
        </div>
        <div className="stat-card">
          <Clock size={24} className="stat-icon" />
          <div className="stat-info">
            <h4>Hours Saved</h4>
            <p>4.5 hours</p>
          </div>
        </div>
        <div className="stat-card">
          <Settings size={24} className="stat-icon" />
          <div className="stat-info">
            <h4>Active Workspaces</h4>
            <p>3 projects</p>
          </div>
        </div>
      </div>

      <div className="dashboard-recent">
        <h3>Recent Translations</h3>
        <div className="recent-list">
          {[
            { name: "Clinical_Trial_Phase_III.pdf", lang: "French", date: "2 hours ago" },
            { name: "YT_Podcast_Transcription", lang: "Spanish", date: "Yesterday" },
            { name: "Meeting_Notes_Q3.txt", lang: "Japanese", date: "3 days ago" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="recent-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <FileText size={20} className="item-icon" />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>Translated to {item.lang}</p>
              </div>
              <span className="item-date">{item.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

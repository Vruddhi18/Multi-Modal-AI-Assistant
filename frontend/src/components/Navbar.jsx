import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User } from 'lucide-react';

export default function Navbar() {
  const { user, loginWithGoogle, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="logo-link">
          <div className="logo-mark">U</div>
          <span className="logo-text">Universal AI</span>
        </Link>
      </div>

      <div className="nav-links">
        {user ? (
          <>
            <Link to="/dashboard" className="nav-item">Dashboard</Link>
            <Link to="/translate" className="nav-item">Workspace</Link>
            <div className="user-profile">
              <img src={user.avatar} alt="Avatar" className="avatar" />
              <button onClick={handleLogout} className="btn-icon" title="Sign Out">
                <LogOut size={18} />
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to="/" className="nav-item">Features</Link>
            <button onClick={loginWithGoogle} className="btn-primary">
              <User size={18} /> Sign in with Google
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

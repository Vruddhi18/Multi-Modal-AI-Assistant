import React, { useState } from 'react';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export default function Uploader({ onUploadSuccess, targetLang }) {
  const [file, setFile] = useState(null);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('target_lang', targetLang);

    try {
      const res = await axios.post(`${API_BASE}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      onUploadSuccess(res.data);
    } catch (err) {
      console.error(err);
      setError('Upload failed. Please try again in a moment.');
    } finally {
      setLoading(false);
    }
  };

  const handleYouTube = async (e) => {
    e.preventDefault();
    if (!youtubeUrl.trim()) return;

    setLoading(true);
    setError('');

    try {
      const res = await axios.post(`${API_BASE}/youtube`, {
        url: youtubeUrl,
        target_lang: targetLang
      });
      onUploadSuccess(res.data);
    } catch (err) {
      console.error(err);
      setError('YouTube processing failed. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="panel">
      <div className="panel-header">Upload Content</div>

      <form onSubmit={handleFileUpload}>
        <input
          type="file"
          accept=".pdf,.pptx,.txt,.mp3,.wav,.m4a,.mp4,.mkv,.webm,.mov"
          onChange={e => setFile(e.target.files[0])}
          disabled={loading}
        />
        <button type="submit" disabled={!file || loading}>
          {loading ? 'Uploading...' : 'Upload & Translate'}
        </button>
      </form>

      <div style={{ margin: '1rem 0', textAlign: 'center' }}>— or —</div>

      <form onSubmit={handleYouTube}>
        <input
          type="text"
          value={youtubeUrl}
          onChange={e => setYoutubeUrl(e.target.value)}
          placeholder="Paste a YouTube URL..."
          disabled={loading}
        />
        <button type="submit" disabled={!youtubeUrl.trim() || loading}>
          {loading ? 'Processing...' : 'Transcribe YouTube'}
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
    </div>
  );
}
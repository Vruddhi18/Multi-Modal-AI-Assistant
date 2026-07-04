import React, { useState } from 'react';
import Uploader from '../components/Uploader';
import TranslationView from '../components/TranslationView';
import ChatBox from '../components/ChatBox';

export default function TranslatorPage() {
  const [sessionData, setSessionData] = useState(null);
  const [targetLang, setTargetLang] = useState('English');

  return (
    <div className="page-container fade-in">
      <header className="page-header">
        <h2>Workspace</h2>
        <p className="subtitle">Upload a document or media file, then translate and ask questions about it</p>
      </header>
      
      <main className="main-content">
        <section className="left-panel">
          <Uploader 
            onUploadSuccess={setSessionData} 
            targetLang={targetLang} 
            setTargetLang={setTargetLang} 
          />
          {sessionData && (
            <TranslationView sessionData={sessionData} />
          )}
        </section>
        
        <section className="right-panel">
          <ChatBox sessionData={sessionData} targetLang={targetLang} />
        </section>
      </main>
    </div>
  );
}

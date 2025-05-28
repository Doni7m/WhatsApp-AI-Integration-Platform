import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Dashboard from './pages/Dashboard';
import WhatsAppConnect from './pages/WhatsAppConnect';
import AIConfiguration from './pages/AIConfiguration';
import TrainingData from './pages/TrainingData';
import ChatMonitoring from './pages/ChatMonitoring';
import Settings from './pages/Settings';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  // Protected Route wrapper
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return <Layout activePage={activePage} setActivePage={setActivePage}>{children}</Layout>;
  };

  return (
    <Routes>
      <Route path="/login" element={
        isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login setIsAuthenticated={setIsAuthenticated} />
      } />
      <Route path="/create-account" element={<CreateAccount />} />
      
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/whatsapp" element={
        <ProtectedRoute>
          <WhatsAppConnect />
        </ProtectedRoute>
      } />
      
      <Route path="/ai-config" element={
        <ProtectedRoute>
          <AIConfiguration />
        </ProtectedRoute>
      } />
      
      <Route path="/training" element={
        <ProtectedRoute>
          <TrainingData />
        </ProtectedRoute>
      } />
      
      <Route path="/monitoring" element={
        <ProtectedRoute>
          <ChatMonitoring />
        </ProtectedRoute>
      } />
      
      <Route path="/settings" element={
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      } />
      
      {/* Redirect root to login or dashboard based on auth state */}
      <Route path="/" element={
        <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
      } />
    </Routes>
  );
}

export default App;

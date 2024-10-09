import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import AuthPage from './components/AuthPage';
import Home from './components/Home';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import EmergencyContacts from './components/EmergencyContacts';
import EmergencyGuide from './components/EmergencyGuide';
import ReportIncident from './components/ReportIncident';
import CommunitySupport from './components/CommunitySupport';
import SafeLocations from './components/SafeLocations';
import FirstAidTips from './components/FirstAidTips';

const HeaderWrapper = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const isAdminDashboard = location.pathname === '/admin';

  if (isAdminDashboard || isAuthenticated) {
    return null;
  }

  return <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />;
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <HeaderWrapper isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          <Route path="/emergency-guide" element={<EmergencyGuide />} />
          <Route path="/report-incident" element={<ReportIncident />} />
          <Route path="/community-support" element={<CommunitySupport />} />
          <Route path="/safe-locations" element={<SafeLocations />} />
          <Route path="/first-aid-tips" element={<FirstAidTips />} />
          <Route 
            path="/auth" 
            element={
              isAuthenticated ? 
              <AdminDashboard setIsAuthenticated={setIsAuthenticated} /> : 
              <AuthPage setIsAuthenticated={setIsAuthenticated} />
            } 
          />
          <Route 
            path="/admin" 
            element={
              isAuthenticated ? 
              <AdminDashboard setIsAuthenticated={setIsAuthenticated} /> : 
              <AuthPage setIsAuthenticated={setIsAuthenticated} />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
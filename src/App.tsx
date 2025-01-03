import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/navbar';
import { HomePage } from './components/home/home-page';
import { SchedulePage } from './components/schedule/schedule-page';
import { TicketsPage } from './components/tickets/tickets-page';
import { ContactPage } from './components/contact/contact-page';
import { TeamPage } from './components/team/team-page';
import { GOOGLE_FORMS } from './lib/utils/constants';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route 
            path="/register" 
            element={
              <RedirectToForm url={GOOGLE_FORMS.REGISTRATION} />
            } 
          />
        </Routes>
      </div>
      <Toaster position="top-right" />
    </Router>
  );
}

function RedirectToForm({ url }: { url: string }) {
  window.location.href = url;
  return null;
}
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Programs from './components/Programs';
import DealRoom from './pages/DealRoom';
import EventsInstitute from './pages/EventsInstitute';
import ArtsInstitute from './pages/ArtsInstitute';
import Digital from './pages/Digital';
import Shops from './pages/Shops';
import CSR from './pages/CSR';
import BooksResources from './pages/BooksResources';
import About from './pages/About'; // Assuming you have an About page
import Hero from './components/Hero'; // Import the Hero component
import Footer from './pages/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="content" style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Programs />
            </>
          } />
          <Route path="/deal-room" element={<DealRoom />} />
          <Route path="/events" element={<EventsInstitute />} />
          <Route path="/arts" element={<ArtsInstitute />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/resources" element={<BooksResources />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
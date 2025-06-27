import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './styles/Pages.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import Admissionpage from './pages/Admissionpage';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';
import { useState } from 'react';
const App=()=>{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return(
    <div>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sanket Mahavir Bhosale"
          studentPhotoUrl="/images/Sanket.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
           <Route path="/contact" element={<ContactPage/>}/>
           <Route path="/admission" element={<Admissionpage/>}/>

        </Routes>
        <ChatbotComponent/>
      </Router>
  </div>
  )
  
}
export default App;
import './App.css'
import { AuthProvider } from './contexts/AuthContext';
import Authentication from './pages/authentication';
import LandingPage from './pages/landing'; 
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import VideoMeeting from './pages/VideoMeeting.jsx';
import History from './pages/history.jsx';
import HomeComponent from './pages/home';
function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path='/auth' element={<Authentication/>}/>
            <Route path='/home's element={<HomeComponent />} />
            <Route path='/history' element={<History/>}/>
            <Route path='/:url' element={<VideoMeeting/>}/>
          </Routes>
        </AuthProvider>
      </Router>
        
    </>
  );
}

export default App

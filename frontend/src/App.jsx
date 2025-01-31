import './App.css'
import LandingPage from './pages/landing'; 
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App

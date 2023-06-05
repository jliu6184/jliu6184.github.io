import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Project from './components/Project/Project';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="NavBar">
          <NavBar/>
       </div>

        <Routes>
          <Route exact path = "/" element={<About reference="home"/>}/>
          <Route path = "/contact" element={<About reference="contact"/>}/>
          <Route path = "/projects" element={<Project/>}/>
          <Route path = "/experience" element={<Experience/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
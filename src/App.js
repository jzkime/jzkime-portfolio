import './App.css';
import './resetStyles.css'
import SideBar from './components/SideBar';
import ProjectContainer from './components/spotlight-projects/ProjectContainer';
import { Routes, Route } from 'react-router-dom'
import Contact from './components/sidePages/Contact';

function App() {
  return (
    <div className="App">
      <SideBar />

    <Routes>
      <Route path='/' element={<ProjectContainer />} />
      <Route path='/contact-me' element={ <Contact />}/>
    </Routes>
    </div>
  );
}

export default App;

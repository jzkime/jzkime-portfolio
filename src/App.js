import './App.css';
import './resetStyles.css'
import SideBar from './components/SideBar';
import ProjectContainer from './components/spotlight-projects/ProjectContainer';

function App() {
  return (
    <div className="App">
      <SideBar />
      <ProjectContainer />
    </div>
  );
}

export default App;

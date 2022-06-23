import './App.css'
import './bootstrap.css'
import { useState } from 'react';
import Readme from './components/Readme';
import ReadmeOutput from './components/ReadmeOutput';


function App() {
  const [projects, updateProject] = useState([]);

  const addProject = (projectInfo) => {
    updateProject([...projects, projectInfo]);
  }
  //console.log(projects);
    return (
      <div>
        <Readme addProject={addProject} />
        <ReadmeOutput projects={projects} />
      </div>
        
    );
}

export default App;
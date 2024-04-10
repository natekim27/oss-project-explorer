import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectForm from './components/ProjectFormPage/ProjectForm';
import ProjectExplorer from './components/ProjectExplorerPage/ProjectExplorer';

function App() {
  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<ProjectExplorer />}/>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <ProjectExplorer/>
  );
}

export default App;

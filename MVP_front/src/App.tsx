import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Login from './pages/loginMain';
import FindId from './pages/findIdMain';
import FindPassword from './pages/findPasswordMain';
import WorkConditions from './pages/CaregiverMain/WorkSetting';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lonin" element={<Login />} />
        <Route path="/find-id" element={<FindId />} /> 
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/work-settings" element={<WorkConditions/>}/>
      </Routes>
    </div>
  );
}

export default App;
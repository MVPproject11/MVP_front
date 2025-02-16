import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Login from './pages/loginMain';
import FindId from './pages/findIdMain';
import FindPassword from './pages/findPasswordMain';
import WorkConditions from './pages/CaregiverMain/WorkSetting';
import MemberInfoForm from './pages/CaregiverMain/MemberInfo';
import Matching from './pages/CaregiverMain/Matching';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lonin" element={<Login />} />
        <Route path="/find-id" element={<FindId />} /> 
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/work-settings" element={<WorkConditions/>}/>
        <Route path="/matching" element={<Matching/>}/>
        <Route path="/setting" element={<MemberInfoForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
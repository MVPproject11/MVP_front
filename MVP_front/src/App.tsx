import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Login from './routes/loginMain';
import FindPassword from './routes/findPasswordMain';
import SignupCommon from './routes/signup/signupCommon'; 
import SignupMain from './routes/signup/signupMain';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signupMain' element={<SignupMain/>}/>
        <Route path="/find-password" element={<FindPassword/>}/>
        <Route path="/signupMain" element={<SignupMain/>}/>
      </Routes>
    </div>
  );
}

export default App;
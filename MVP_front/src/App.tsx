import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Login from './routes/loginMain';
import FindId from './routes/findIdMain';
import FindPassword from './routes/findPasswordMain';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lonin" element={<Login />} />
        <Route path="/find-id" element={<FindId />} /> {/* 아이디 찾기 페이지 */}
        <Route path="/find-password" element={<FindPassword />} /> {/* 아이디 찾기 페이지 */}
      </Routes>
    </div>
  );
}

export default App;
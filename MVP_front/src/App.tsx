import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Login from './pages/loginMain';
import FindId from './pages/findIdMain';
import FindPassword from './pages/findPasswordMain';
import WorkConditions from './pages/CaregiverMain/WorkSetting';
import MemberInfoForm from './pages/CaregiverMain/MemberInfo';
import Matching from './pages/CaregiverMain/Matching';
import AddDetail from "./pages/Admin/AddDetail";
import SeniorRegistration from './pages/Admin/SeniorRegistraion';
import MatchingDetail from "./pages/Admin/matchingDetail";
import MatchRequest from './pages/Admin/MatchRequest';
import ManageDetail from './pages/Admin/ManageDetail';
import MyProfile from './pages/Admin/myProfileManagement';

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
        <Route path="/settings" element={<MemberInfoForm/>}/>
        <Route path="/AddDetail" element={<AddDetail/>}/>
        <Route path="/SeniorRegistration" element={<SeniorRegistration/>}/>
        <Route path="/MatchingDetail" element={<MatchingDetail/>}/>
        <Route path="/matchrequest" element={<MatchRequest/>}/>
        <Route path="/manageDetail" element={<ManageDetail/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
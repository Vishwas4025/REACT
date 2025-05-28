import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EmployeeForm from "./components/EmployeeForm";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import HRPage from "./components/HRPage";
import { useState } from "react";
import './App.css';



function App() {

    const [employees, setEmployees] = useState([
        {
            fullname : "vishwas",
            email : "vishu@gmail.com",
            mobno : "190875",
            dob : "2025-03-04",
            aadhaar : "1647389",
            pan : "fn72kd",
            address : "hyd",
            status : "accepted",
            id : "2025-05-15",
        },
        {
            fullname : "surya",
            email : "surya@gmail.com",
            mobno : "190875",
            dob : "2025-03-04",
            aadhaar : "1647389",
            pan : "fn72kd",
            address : "hyd",
            status : "rejected",
            id : "2025-05-14",
        }
    ]);



    return (
        <Router>
            <Navbar />
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<EmployeeForm employees={employees} setEmployees={setEmployees}/>} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin" element={<AdminPage employees={employees} setEmployees={setEmployees}/>} />
                    <Route path="/hr" element={<HRPage employees={employees} setEmployees={setEmployees}/>} />
                    
                </Routes>
            </div>
            
        </Router>
    );
}

export default App;

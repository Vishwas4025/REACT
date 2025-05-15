import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EmployeeForm from "./components/EmployeeForm";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import HRPage from "./components/HRPage";



function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<EmployeeForm />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/hr" element={<HRPage />} />
                
            </Routes>
        </Router>
    );
}

export default App;

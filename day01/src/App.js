import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Greetings from "./components/Greetings";
import Counter from "./components/Counter";
import UserInfo from "./components/UserInfo";
import ConditionalRender from "./components/ConditionalRender";
import Calculator from "./components/Calculator";
import UserForm from "./components/UserForm";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/greeting" element={<Greetings name="NGIT" />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/conditionalrender" element={<ConditionalRender />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/userform" element={<UserForm />} />
            </Routes>
        </Router>
    );
}

export default App;

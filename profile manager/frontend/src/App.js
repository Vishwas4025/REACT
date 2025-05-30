import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewProfile from './pages/NewProfile';
import AllProfiles from './pages/AllProfiles';
import ProfileDetail from './pages/ProfileDetail';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<NewProfile />} />
          <Route path="/profiles" element={<AllProfiles />} />
          <Route path="/profile/:id" element={<ProfileDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

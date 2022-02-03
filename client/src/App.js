import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NotFound, Home, Login, Register } from './components/';
function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;

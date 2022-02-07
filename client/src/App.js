import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import {
    Navbar,
    NotFound,
    Home,
    Login,
    Register,
    Alert,
    Profile,
    ProfileForm,
    Profiles,
    ProfileById,
    Forum,
} from './components/';

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Alert />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profiles" element={<Profiles />} />
                <Route path="/profiles/:id" element={<ProfileById />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/update-profile" element={<ProfileForm />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;

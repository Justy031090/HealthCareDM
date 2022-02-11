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
    Posts,
    Post,
    BolusWizzard,
    BMI,
    BMR,
    Article,
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
                <Route path="/forum/posts" element={<Posts />} />
                <Route path="/forum/posts/:id" element={<Post />} />
                <Route path="/update-profile" element={<ProfileForm />} />
                <Route path="/calculators/bolus" element={<BolusWizzard />} />
                <Route path="/calculators/bmi" element={<BMI />} />
                <Route path="/calculators/bmr" element={<BMR />} />
                <Route path="/articles/:id" element={<Article />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;

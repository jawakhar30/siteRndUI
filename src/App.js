import './App.css';
import Login from './pages/login'
import Signup from './pages/signup';
import Movie from './pages/movie';
import Review from './pages/review';
import Navbar from './components/navbar';
import Userlist from './pages/userlist';
import TopList from './pages/topreview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">

     <Navbar>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />} />
          <Route path="movie" element={<Movie />} />
          <Route path="review" element={<Review />} />
          <Route path="userlist" element={<Userlist />} />
          <Route path="topreview"element={<TopList/>}/>
      </Routes>

    </BrowserRouter>  
    </Navbar>
    </div>
  );
}

export default App;

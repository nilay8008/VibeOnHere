import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import NewsFeedPage from './pages/NewsFeedPage';
import MessagesPage from './pages/MessagesPage';
import CreatePostPage from './pages/CreatePostPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
       <Navbar />  
       
      <Routes>
        <Route path="/" element={<NewsFeedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
      
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

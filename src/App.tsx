// import { useState } from 'react'

import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import './index.css';
import Workout from './pages/Workout';
import LoginPage from './pages/LoginPage';
import UserPage from './components/UserPage';
import AuthProvider from './contexts/AuthProvider';
import Logout from './components/Logout';
import AllPosts from './components/AllPosts';

export default function App() {
  return (
    <AuthProvider>
      <Container fluid className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllPosts />} />
            <Route path="/postpage" element={<AllPosts />} />
            <Route path="/workouts" element={<Workout />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/user/:username" element={<UserPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </AuthProvider>
  );
}

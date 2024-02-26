import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import News from './pages/News.jsx';
import Footer from './components/Footer.jsx';

/* import './user.css' */
export default function App() {
return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="news" element={<News />} />
    </Route>
  </Routes>

  <Footer />
  </BrowserRouter>
)
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

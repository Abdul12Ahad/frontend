import './App.css';
import { Navbar } from './components/nav/Navbar';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { cardsData } from './data/cardsData';
import { Preview } from './components/Preview/Preview';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='card-container'>
        {cardsData.map((card, index) => (
          <Features
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
      <Preview />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
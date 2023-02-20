import { Routes, Route } from 'react-router-dom';

// import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Map from './components/Map';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/map' element={<Map />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

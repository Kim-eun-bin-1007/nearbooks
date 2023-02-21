import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Map from './components/Map';
import BoroughLayout from 'components/borough/BoroughLayout';
import Borough from "./components/borough/Borough";
import BoroughList from "./components/borough/BoroughList";
import BoroughView from "./components/borough/BoroughView";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/borough" element={<BoroughLayout />}>
            <Route index element={<Borough />} />
            <Route path=":GuCode" element={<BoroughList />} />
            <Route path=':GuCode/:id' element={<BoroughView />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;

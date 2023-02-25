import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Map from './components/map/Map';
import BoroughLayout from 'components/borough/BoroughLayout';
import Borough from "./components/borough/Borough";
import BoroughList from "./components/borough/BoroughList";
import BoroughView from "./components/borough/BoroughView";
import { CommonMain } from './style/Common';

function App() {
  return (
    <CommonMain>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/borough" element={<BoroughLayout />}>
            <Route index element={<Borough />} />
            <Route path=":GuCode" element={<BoroughList />} />
          </Route>
          <Route path='/borough/:GuCode/:id' element={<BoroughView />} />
        </Routes>
      </main>
    </CommonMain>
  );
}

export default App;

import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Error from './components/Error';
import MapWrapper from './components/map/MapWrapper';
import BoroughLayout from 'components/borough/BoroughLayout';
import Borough from "./components/borough/Borough";
import BoroughWrapper from "./components/borough/Wrapper";
import { CommonMain } from './style/Common';

function App() {
  return (
    <CommonMain>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapWrapper />} />
          <Route path="/borough" element={<BoroughLayout />}>
            <Route index element={<Borough />} />
            <Route
              path=":GuCode"
              element={<BoroughWrapper component="list" />}
            />
          </Route>
          <Route
            path="/borough/:GuCode/:id"
            element={<BoroughWrapper component="view" />}
          />
          <Route path='/error' element={<Error />} />
          <Route path="/*" element={<Navigate to='/error' />} />
        </Routes>
      </main>
    </CommonMain>
  );
}

export default App;

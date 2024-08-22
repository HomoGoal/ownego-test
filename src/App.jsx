import './styles/main.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StoreDashboard from './pages/StoreDashboard';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/:id?" element={<StoreDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

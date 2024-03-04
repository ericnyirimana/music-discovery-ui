import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './modules/Login';
import Dashboard from './modules/Dashboard';
import GoogleCallback from './helpers/GoogleCallback';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/google/callback" element={<GoogleCallback />} ></Route>
              <Route path="/dashboard" element={<Dashboard />} ></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

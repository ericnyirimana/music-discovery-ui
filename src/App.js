import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './modules/Login';
import Dashboard from './modules/Dashboard';
import GoogleCallback from './helpers/GoogleCallback';
import Profile from './modules/Profile';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/google/callback" element={<GoogleCallback />} ></Route>
              <Route path="/dashboard" element={<Dashboard />} ></Route>
              <Route path="/profile" element={<Profile />} ></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

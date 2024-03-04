import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './modules/Login';
import Dashboard from './modules/Dashboard';
import GoogleCallback from './helpers/GoogleCallback';
import Profile from './modules/Profile';
import { PrivateRoutes } from './helpers/PrivateRoutes';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/google/callback" element={<GoogleCallback />} ></Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} ></Route>
                <Route path="/profile" element={<Profile />} ></Route>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

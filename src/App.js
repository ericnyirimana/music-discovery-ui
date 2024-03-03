import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './modules/SignIn';
import Dashboard from './modules/Dashboard';
import GoogleCallback from './helpers/GoogleCallback';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SignIn />}></Route>
              <Route path="/google/callback" element={<GoogleCallback />} ></Route>
              <Route path="/dashboard" element={<Dashboard />} ></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

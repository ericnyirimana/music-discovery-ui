import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './modules/SignIn';
import GoogleCallback from './helpers/GoogleCallback';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SignIn />}></Route>
              <Route path="/google/callback" element={<GoogleCallback />} ></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

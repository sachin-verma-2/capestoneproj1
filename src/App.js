
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import SignupPage from './Pages/SignupPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        
        
        </Routes></BrowserRouter>
      

    </div>
  );
}

export default App;

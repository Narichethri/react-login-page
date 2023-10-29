import './App.css';
import Login from './login';
import Header from './Header';
import Logged from './Logged';
import Register from './Register';
import Registered from './Registered';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path="/" element={<><Header /> <Login /></>}/>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/logged" element={<Logged />} />
          <Route path="/register" element={<Register/>}/>
          <Route path='/registered' element={<Registered/>} />


        </Routes>

      </Router>


    </div>
  );
}

export default App;

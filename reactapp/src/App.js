import Applicationform from './components/user/Applicationform';


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Applicationform/>} />
         
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


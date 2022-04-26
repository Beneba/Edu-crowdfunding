import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./component/Layout";
import Homepage from "./pages/Homepage";
import EduDetails from "./pages/EduDetails";
import './stylesheet/Layout.css';
import './stylesheet/EduDetails.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="EduDetails" exact element={<EduDetails />} />
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;

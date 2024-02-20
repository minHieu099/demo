// App.js
import "./App.css";
import ShowReport from "./pages/Report/showReport";
import { BrowserRouter as Router, Route, Routes , Navigate } from "react-router-dom";
import Login from "./pages/Login/index";
import PrivateRoute from "./router/PrivateRouter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} /> {/* Chuyển hướng từ gốc đến Login */}
        <Route path="/report" element={<PrivateRoute element={ShowReport} />} />
      </Routes>
    </Router>
  );
}

export default App;

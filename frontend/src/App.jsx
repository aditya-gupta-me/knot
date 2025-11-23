import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// component imports
import Homepage from "./assets/pages/Homepage";
import RegistrationPage from "./assets/pages/Auth/RegistrationPage";
import LoginPage from "./assets/pages/Auth/LoginPage";

// stylesheets
import "./App.css";
import NoMatch from "./assets/components/NoMatch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;

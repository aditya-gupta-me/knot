import { useState } from "react";
import "./App.css";
import RegistrationPage from "./assets/pages/Auth/RegistrationPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RegistrationPage />
    </>
  );
}

export default App;

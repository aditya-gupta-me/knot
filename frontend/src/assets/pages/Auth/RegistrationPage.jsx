import { useEffect, useState } from "react";
import axios from "axios";

function RegistrationPage() {
  const [data, setData] = useState("");
  const BACKEND_API_URL = `${import.meta.env.VITE_BACKEND_URL}/register`;

  useEffect(() => {
    const testConnection = async () => {
      const res = await axios.get(`${BACKEND_API_URL}`);
      setData(res.data);
    };
    testConnection();
  }, [BACKEND_API_URL]);

  return (
    <>
      <div className="container">
        <h1>Registration Page</h1>
        <span>Data from backend is: {data?.message}</span>
      </div>
    </>
  );
}

export default RegistrationPage;

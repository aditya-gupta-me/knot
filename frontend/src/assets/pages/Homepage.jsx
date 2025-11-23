import React from "react";

import TextButton from "../components/Buttons/TextButton";

function Homepage() {
  return (
    <>
      <h1>Welcome to knot 👋🏻</h1>
      <TextButton buttonText={"Login"} buttonURLPath={"/login"} />
      <TextButton buttonText={"Register"} buttonURLPath={"/register"} />
    </>
  );
}

export default Homepage;

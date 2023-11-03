import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <NavLink to="/login" />;

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

export default Home;

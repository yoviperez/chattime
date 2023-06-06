import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="container mt-4 container-login">
      <div className="logo">
        <img src="logo.png" alt="" />
        <p>CHATTIME</p>
      </div>
      <form method="post" className="form-login">
        <div className="form-group">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nombre usuario"
            required
            className="form-control form-input"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => setRoom(e.target.value)}
            type="text"
            placeholder="Sala"
            required
            className="form-control form-input"
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <input type="submit" className="form-submit" value="login" />
        </Link>
      </form>
    </div>
  );
};

export default Login;

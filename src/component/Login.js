import React from "react";
import "./login.css";

export const Login = () => {
  return (
    <div className="Wrap">
      <div className="Login">
          <form action="http://localhost:3000/api/v1/data">
        <input required type="text" placeholder="Ismingizni kiriting" />
        <input required  type="text" placeholder="Familiyangizni kiriting" />
        <input required type="number" placeholder="Yoshingizni kiriting" />
        <input required type="number" placeholder="Telefon nomeringizni Kiriting" />
        <input required type="email" placeholder="Emailingizni kiriting"/>
        <button className="bu">Jo`natish</button>
        </form>
      </div>
    </div>
  );
};

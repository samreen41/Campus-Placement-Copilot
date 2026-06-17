import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../common/Logo";
import Input from "../common/Input";
import Button from "../common/Button";

function LoginCard() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter Email and Password");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid Email");
      return;
    }

   localStorage.setItem("isLoggedIn", "true");
localStorage.setItem("isLoggedIn", "true");

localStorage.setItem("isLoggedIn", "true");

navigate("/dashboard");

  };

  return (

    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

      <Logo />

      <div className="space-y-5">

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

      </div>

      <div className="mt-6">

        <Button
          text="Login"
          onClick={handleLogin}
        />

      </div>

      <p className="text-center mt-6 text-gray-500">

        Don't have an account?

        <Link
          to="/signup"
          className="text-blue-600 ml-2 font-semibold"
        >
          Sign Up
        </Link>

      </p>

    </div>

  );

}

export default LoginCard;
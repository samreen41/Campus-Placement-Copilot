import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../common/Logo";
import Input from "../common/Input";
import Button from "../common/Button";

function SignupCard() {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {

    if (
      fullName.trim() === "" ||
      email.trim() === "" ||
      college.trim() === "" ||
      branch.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Success
    navigate("/dashboard");
  };

  return (

    <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10">

      <Logo />

      <div className="space-y-4">

        <Input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="text"
          placeholder="College Name"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

      </div>

      <div className="mt-6">

        <Button
          text="Create Account"
          onClick={handleSignup}
        />

      </div>

      <p className="text-center mt-6 text-gray-500">

        Already have an account?

        <Link
          to="/"
          className="text-blue-600 ml-2 font-semibold hover:underline"
        >
          Login
        </Link>

      </p>

    </div>

  );

}

export default SignupCard;
import Logo from "../../components/common/Logo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

function ForgotPassword() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">

        <Logo />

        <Input
          type="email"
          placeholder="Enter your email"
        />

        <div className="mt-6">

          <Button text="Send Reset Link" />

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;
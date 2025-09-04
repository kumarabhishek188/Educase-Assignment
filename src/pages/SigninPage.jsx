import React, { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const SigninPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setLoginData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (u) => (u?.email || "").toLowerCase() === loginData.email.toLowerCase()
      );
      const isValid = !!user && (user.password || "") === loginData.password;

      if (isValid) {
        localStorage.setItem("currentUserEmail", user.email);
        navigate("/account-settings", { state: user });
      } else {
        // Ensure no current user is set, navigate to 4th page with defaults
        localStorage.removeItem("currentUserEmail");
        navigate("/account-settings");
      }
    } catch {
      localStorage.removeItem("currentUserEmail");
      navigate("/account-settings");
    }
  }

  const isFormValid =
    loginData.email.trim() !== "" && loginData.password.trim() !== "";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between px-4"
      style={{ backgroundColor: "#F7F8F9" }}
    >
      <section className="w-full max-w-sm bg-white shadow-sm rounded border border-gray-200 p-6 mt-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 leading-9">
            <h1 className="text-[28px] font-medium">Signin to your</h1>
            <h1 className="text-[28px] font-medium">PopX account</h1>
          </div>
          <div className="mb-8">
            <p className="text-[17px] text-gray-500">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-[17px] text-gray-500">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="mb-3 flex flex-col gap-6">
            <Input
              type={"email"}
              placeholder={"Enter email address"}
              label={"Email Address"}
              id={"email"}
              value={loginData.email}
              onchange={handleChange}
            />
            <Input
              type={"password"}
              placeholder={"Enter password"}
              label={"Password"}
              id={"password"}
              value={loginData.password}
              onchange={handleChange}
            />
          </div>
          <div>
            <button
              disabled={!isFormValid}
              className={` w-full rounded-md px-2 py-3 text-center text-white ${
                isFormValid ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              style={{
                backgroundColor: isFormValid ? "#6C25FF" : "#CBCBCB",
              }}
            >
              Login
            </button>
          </div>
        </form>
      </section>

      <div className="w-full max-w-sm bg-white/80 backdrop-blur rounded border border-gray-200 mb-3">
        <BottomNav
          currentStep={3}
          totalSteps={4}
          onHome={() => navigate("/")}
          onPrev={() => navigate("/signup")}
          onNext={() => navigate("/account-settings")}
        />
      </div>
    </div>
  );
};

export default SigninPage;

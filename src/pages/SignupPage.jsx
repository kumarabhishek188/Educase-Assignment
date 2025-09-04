import React, { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const SignupPage = () => {
  const [signupData, setSignupData] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { id, name, type, value, checked } = e.target;
    const key = name || id;
    let val = type === "checkbox" ? checked : value;
    if (key === "phoneNumber") {
      // Keep only digits and cap at 10
      val = (val || "").replace(/\D/g, "").slice(0, 10);
    }
    setSignupData((prev) => ({ ...prev, [key]: val }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Extra guard: ensure phone has exactly 10 digits
    if (signupData.phoneNumber.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    // Persist/Upsert user in localStorage
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const idx = users.findIndex(
        (u) => (u?.email || "").toLowerCase() === signupData.email.toLowerCase()
      );
      const toSave = { ...signupData };
      if (idx >= 0) {
        users[idx] = { ...users[idx], ...toSave };
      } else {
        users.push(toSave);
      }
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUserEmail", signupData.email);
    } catch {
      // ignore storage errors
    }

    navigate("/account-settings", { state: signupData });
  }
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between px-4"
      style={{ backgroundColor: "#F7F8F9" }}
    >
      <section className="w-full max-w-sm bg-white shadow-sm rounded border border-gray-200 p-6 flex flex-col flex-grow mt-6">
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
          <div className="flex flex-col flex-grow ">
            <div className="mb-6 leading-10">
              <h1 className="text-[28px] font-medium">Create your</h1>
              <h1 className="text-[28px] font-medium">PopX account</h1>
            </div>
            <div className="flex flex-col gap-6">
              <Input
                label={"Full Name"}
                placeholder={"Enter full name"}
                type={"text"}
                id={"fullname"}
                value={signupData.fullname}
                onchange={handleChange}
                isRequired={true}
              />
              <Input
                label={"Phone number"}
                placeholder={"Enter Phone number"}
                type={"tel"}
                id={"phoneNumber"}
                value={signupData.phoneNumber}
                onchange={handleChange}
                isRequired={true}
                maxLength={10}
                pattern={"^[0-9]{10}$"}
                inputMode={"numeric"}
              />
              <Input
                label={"Email Address"}
                placeholder={"Enter email address"}
                type={"email"}
                id={"email"}
                value={signupData.email}
                onchange={handleChange}
                isRequired={true}
              />
              <Input
                label={"Password"}
                placeholder={"Enter password"}
                type={"password"}
                id={"password"}
                value={signupData.password}
                onchange={handleChange}
                isRequired={true}
              />
              <Input
                label={"Company Name"}
                placeholder={"Enter company name"}
                type={"text"}
                id={"companyName"}
                value={signupData.companyName}
                onchange={handleChange}
              />
            </div>
            <div className="mt-4 ">
              <h1 className="text-sm text-gray-600">
                Are you an Agency?<span className="text-red-600">*</span>
              </h1>
              <div className="flex gap-12 mt-2 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <input
                    type="radio"
                    id="yes"
                    name="agency"
                    value={"yes"}
                    checked={signupData.agency === "yes"}
                    onChange={handleChange}
                    className="mr-2 w-5 h-5 accent-purple-600"
                  />
                  <label htmlFor="yes">Yes</label>
                </div>
                <div className="flex items-center justify-center">
                  <input
                    type="radio"
                    id="no"
                    name="agency"
                    value={"no"}
                    checked={signupData.agency === "no"}
                    onChange={handleChange}
                    className=" w-5 h-5 mr-2 accent-purple-600 "
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#6C25FF" }}
              className="px-2 py-3 rounded-md mt-auto mb-4"
            >
              <button className="text-center w-full text-white font-medium ">
                Create Account
              </button>
            </div>
          </div>
        </form>
      </section>

      <div className="w-full max-w-sm bg-white/80 backdrop-blur rounded border border-gray-200 mb-3">
        <BottomNav
          currentStep={2}
          totalSteps={4}
          onHome={() => navigate("/")}
          onPrev={() => navigate("/")}
          onNext={() => navigate("/login")}
        />
      </div>
    </div>
  );
};
export default SignupPage;

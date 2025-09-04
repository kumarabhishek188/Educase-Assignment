import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between px-4"
      style={{ backgroundColor: "#F7F8F9" }}
    >
      <section className="w-full max-w-sm bg-white shadow-sm rounded border border-gray-200 p-6 flex flex-col mt-6 min-h-[560px]">
        <div className="flex-1" />
        <div className="mb-6">
          <h1 className="text-[28px] font-semibold mb-2 text-gray-900">
            Welcome to PopX
          </h1>
          <p className="text-[17px] text-gray-500">
            Lorem ipsum dolor sit amet,
          </p>
          <p className="text-[17px] text-gray-500">
            consectetur adipiscing elit,
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to={"/signup"}
            className="px-2 py-3 rounded-md text-white font-medium text-center"
            style={{ backgroundColor: "#6C25FF" }}
          >
            Create Account
          </Link>
          <Link
            to={"/login"}
            className="px-2 py-3 rounded-md font-medium text-center"
            style={{ backgroundColor: "#CEBAFC" }}
          >
            Already Registered? Login
          </Link>
        </div>
      </section>

      <div className="w-full max-w-sm bg-white/80 backdrop-blur rounded border border-gray-200 mb-3">
        <BottomNav
          currentStep={1}
          totalSteps={4}
          onHome={() => navigate("/")}
          onPrev={undefined}
          onNext={() => navigate("/signup")}
        />
      </div>
    </div>
  );
};

export default LandingPage;




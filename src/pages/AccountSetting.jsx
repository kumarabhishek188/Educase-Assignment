import React from "react";
import { Camera } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const AccountSetting = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let data = location.state || null;

  if (!data) {
    try {
      const currentEmail = localStorage.getItem("currentUserEmail");
      if (currentEmail) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const found = users.find(
          (u) => (u?.email || "").toLowerCase() === currentEmail.toLowerCase()
        );
        if (found) data = found;
      }
    } catch {
      // ignore
    }
  }

  const fullName = data?.fullname || "Marry Doe";
  const email = data?.email || "Marry@Gmail.com";

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-4" style={{ backgroundColor: "#F7F8F9" }}>
      <section className="w-full max-w-sm bg-white shadow-sm rounded border border-gray-200 pt-5 pb-6">
        <header className="bg-white px-3 text-xl ">
          <h1>Account Settings</h1>
        </header>
        <div className="flex flex-col" style={{ backgroundColor: "#F7F8F9" }}>
          <div className="flex ml-4 gap-6 p-2 mt-4">
            <div className="relative ">
              <div className="w-18 h-18 rounded-full overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <input type="file" className="hidden" id="imageupload" />
              <div
                className="rounded-full flex items-center justify-center p-[4px] absolute right-[-5px] bottom-1 "
                style={{ backgroundColor: "#6C25FF" }}
              >
                <Camera fill="white" size={18} />
              </div>
            </div>
            <div className="text-[15px]">
              <h1 className="font-bold ">{fullName}</h1>
              <h1>{email}</h1>
            </div>
          </div>
          <div className="px-6 mt-6 text-gray-600 pb-3 text-[15px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            corporis veniam impedit! Possimus velit corrupti aut nobis .
          </div>
          <div className="mt-2 mb-2 border-y border-dashed border-gray-300 "></div>
        </div>
      </section>

      <div className="w-full max-w-sm bg-white/80 backdrop-blur rounded border border-gray-200 mb-3">
        <BottomNav
          currentStep={4}
          totalSteps={4}
          onHome={() => navigate("/")}
          onPrev={() => navigate("/login")}
          onNext={undefined}
        />
      </div>
    </div>
  );
};

export default AccountSetting;

import React from "react";
import CovidAPI from "./Components/CovidAPI";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <>
      <div className="bg-[#F1F2F3] dark:bg-[#22272C] min-h-screen">
        <div className="container mx-auto py-[20px]">
          <p className="py-[50px] text-2xl font-bold font-mono text-center  dark:text-[#F1F2F3]">
            Jumlah Kasus di Indonesia Saat Ini
          </p>
          <CovidAPI />
        </div>
      </div>
    </>
  );
}

export default App;

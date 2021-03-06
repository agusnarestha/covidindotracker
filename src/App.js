import React from "react";
import CovidAPI from "./Components/CovidAPI";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <>
      <div className="container mx-auto py-5">
        <p className="text-2xl font-bold font-mono text-center py-5">
          Jumlah Kasus di Indonesia Saat Ini
        </p>
        <CovidAPI />
      </div>
    </>
  );
}

export default App;

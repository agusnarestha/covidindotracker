import React from "react";
import CovidAPI from "./Components/CovidAPI";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <>
      <p className="text-2xl font-mono text-center py-5">
        Jumlah Kasus di Indonesia Saat Ini
      </p>
      <CovidAPI />
    </>
  );
}

export default App;

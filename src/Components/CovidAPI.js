import React, { useEffect, useState } from "react";

const CovidAPI = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch(
        "http://api-covid19-indonesia-v2-fa3x7vvjn-reynadi531.vercel.app/api/indonesia"
      );
      const actualdata = await res.json();
      console.log(actualdata);
      setData(actualdata);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div>
      <section>
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-6/12 px-4 pb-6">
              <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <p className="text-5xl font-mono">{data.meninggal}</p>
                <p className="text-lg font-sans">meninggal</p>
              </div>
            </div>
            <div className="w-6/12 px-4 pb-6">
              <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <p className="text-5xl font-mono">{data.positif}</p>
                <p className="text-lg font-sans">positif</p>
              </div>
            </div>
            <div className="w-6/12 px-4 pb-6">
              <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <p className="text-5xl font-mono">{data.dirawat}</p>
                <p className="text-lg font-sans">dirawat</p>
              </div>
            </div>
            <div className="w-6/12 px-4 pb-6">
              <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <p className="text-5xl font-mono">{data.sembuh}</p>
                <p className="text-lg font-sans">sembuh</p>
              </div>
            </div>
          </div>
          <section>
            <p className="text-sm font-sans pl-3">* Pembaharuan Terakhir </p>
            <p className="text-base font-mono pl-3">{data.lastUpdate}</p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CovidAPI;

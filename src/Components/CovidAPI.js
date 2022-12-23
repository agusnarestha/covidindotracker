import React, { useEffect, useState } from "react";
import Card from "./Card";
import moment from "moment";
import "moment/locale/id";

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
        <div className="flex flex-wrap">
          <Card value= {data.positif} cardTitle= {"Terkonfirmasi"} textColor= {"text-yellow-400"}/>
          <Card value= {data.dirawat} cardTitle= {"Dalam Perawatan"} textColor= {"text-orange-400"}/>
          <Card value= {data.sembuh} cardTitle= {"Sembuh"} textColor= {"text-green-700"}/>
          <Card value= {data.meninggal} cardTitle= {"Meninggal"} textColor= {"text-red-600"}/>
        </div>
        <section>
          <p className="text-sm font-sans pl-3">* Pembaharuan Terakhir </p>
          <p className="text-base font-mono pl-3">
            {moment(data.lastUpdate).locale("id").format("LLL")} +07:00
          </p>
        </section>
      </section>
    </div>
  );
};

export default CovidAPI;

import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/id";
import CountUp from "react-countup";

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
          <div className="w-6/12 px-4 pb-6">
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-5xl font-mono text-yellow-400">
                <CountUp
                  start={0}
                  end={data.positif}
                  duration={2}
                  separator="."
                />
              </p>
              <p className="text-lg font-sans">Terkonfirmasi</p>
            </div>
          </div>
          <div className="w-6/12 px-4 pb-6">
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-5xl font-mono text-orange-400">
                <CountUp
                  start={0}
                  end={data.dirawat}
                  duration={2}
                  separator="."
                />
              </p>
              <p className="text-lg font-sans">Dalam Perawatan</p>
            </div>
          </div>
          <div className="w-6/12 px-4 pb-6">
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-5xl font-mono text-green-700">
                <CountUp
                  start={0}
                  end={data.sembuh}
                  duration={2}
                  separator="."
                />
              </p>
              <p className="text-lg font-sans">sembuh</p>
            </div>
          </div>
          <div className="w-6/12 px-4 pb-6">
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-5xl font-mono text-red-600">
                <CountUp
                  start={0}
                  end={data.meninggal}
                  duration={2}
                  separator="."
                />
              </p>
              <p className="text-lg font-sans">meninggal</p>
            </div>
          </div>
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

import "moment/locale/id";
import CountUp from "react-countup";

const Card = (props) => {
  return (
    <div className="sm:w-6/12 px-4 pb-6">
      <div className="bg-white rounded-lg p-8 text-center">
        <p className={`text-5xl font-mono ${props.textColor}`}>
          <CountUp start={0} end={props.value} duration={2} separator="." />
        </p>
        <p className="text-lg font-sans">{props.cardTitle}</p>
      </div>
    </div>
  );
};

export default Card;

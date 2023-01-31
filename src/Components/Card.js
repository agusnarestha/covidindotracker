import "moment/locale/id";
import CountUp from "react-countup";

const Card = (props) => {
  return (
    <div className="sm:w-6/12 px-4 pb-6">
      <div className="bg-white rounded-lg p-8 text-center dark:bg-[#2E343B]">
        <p className={`text-5xl font-mono ${props.textColor}`}>
          <CountUp start={0} end={props.value} duration={2} separator="." />
        </p>
        <p className="text-lg font-sans dark:text-[#F1F2F3]">
          {props.cardTitle}
        </p>
      </div>
    </div>
  );
};

export default Card;

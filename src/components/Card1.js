import { useMemo } from "react";
import "./Card1.css";

const Card1 = ({
  img,
  faster,
  researchProgress,
  streamlinedProcessesAndAI,
  propPadding,
}) => {
  const card2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="card-2" style={card2Style}>
      <div className="text5">
        <img className="img-icon2" loading="lazy" alt="" src={img} />
        <h1 className="faster-research-progress-container">
          <p className="faster">{faster}</p>
          <p className="research-progress">{researchProgress}</p>
        </h1>
        <div className="streamlined-processes-and">
          {streamlinedProcessesAndAI}
        </div>
      </div>
      <div className="bttn1">
        <div className="text6">More Information</div>
        <img
          className="iconarrow1"
          loading="lazy"
          alt=""
          src="/iconarrow.svg"
        />
      </div>
    </div>
  );
};

export default Card1;

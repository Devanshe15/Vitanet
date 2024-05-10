import { useMemo } from "react";
import "./Card.css";

const Card = ({
  researchAnd,
  analysis,
  anonymousDataContribution,
  aggregateInsightsProvideA,
  propAlignSelf,
  propPadding,
  propFlex,
  propPadding1,
}) => {
  const card1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      flex: propFlex,
    };
  }, [propAlignSelf, propPadding, propFlex]);

  const researchTitleStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className="card-13" style={card1Style}>
      <div className="research-title" style={researchTitleStyle}>
        <div className="research-and-analysis-container1">
          <p className="research-and1">{researchAnd}</p>
          <p className="analysis1">{analysis}</p>
        </div>
      </div>
      <div className="anonymous-data-contribution-container1">
        <ul className="anonymous-data-contribution-a1">
          <li className="anonymous-data-contribution1">
            {anonymousDataContribution}
          </li>
          <li>{aggregateInsightsProvideA}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;

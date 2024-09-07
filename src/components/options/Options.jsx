import s from "./Options.module.css";

const Options = ({
  feedback,
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) => {
  return (
    <div className={s.feedback}>
      <button className={s.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={s.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;

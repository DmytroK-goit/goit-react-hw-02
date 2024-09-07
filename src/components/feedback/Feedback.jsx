import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.wrap}>
      <h2 className={s.header}>Feedback Statistics</h2>
      <p className={s.item}>Good: {feedback.good}</p>
      <p className={s.item}>Neutral: {feedback.neutral}</p>
      <p className={s.item}>Bad: {feedback.bad}</p>
      <p className={s.item}>Total: {totalFeedback}</p>
      <p
        className={s.res}
        style={{
          color:
            positiveFeedback() < 50
              ? "red"
              : positiveFeedback() < 80
              ? " rgb(231, 231, 13)"
              : "green",
        }}
      >
        Positive feedback: {positiveFeedback()}%
      </p>
    </div>
  );
};

export default Feedback;

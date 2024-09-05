import s from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  if (totalFeedback === 0) {
    return <Notification message="No feedback given yet" />;
  }

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
            Math.round((feedback.good / totalFeedback) * 100) < 50
              ? "red"
              : Math.round((feedback.good / totalFeedback) * 100) < 80
              ? " rgb(231, 231, 13)"
              : "green",
        }}
      >
        Positive feedback: {Math.round((feedback.good / totalFeedback) * 100)}%
      </p>
    </div>
  );
};

const Notification = ({ message }) => <p>{message}</p>;

export default Feedback;

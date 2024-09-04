const Feedback = ({ feedback }) => {
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    if (totalFeedback === 0) {
        return <Notification message="No feedback given yet" />;
    }

    return (
        <div>
            <h2>Feedback Statistics</h2>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive feedback: {Math.round((feedback.good / totalFeedback) * 100)}%</p>
        </div>
    );
};

const Notification = ({ message }) => <p>{message}</p>;

export default Feedback;

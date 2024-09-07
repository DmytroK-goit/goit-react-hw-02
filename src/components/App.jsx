import React, { useState, useEffect } from "react";
import Description from "./description/Description";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";
import Notification from "./Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = () => {
    if (totalFeedback === 0) return 0;
    return Math.round((feedback.good / totalFeedback) * 100);
  };

  return (
    <div>
      <Description />
      <Options
        feedback={feedback}
        setFeedback={setFeedback}
        resetFeedback={resetFeedback}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback !== 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;

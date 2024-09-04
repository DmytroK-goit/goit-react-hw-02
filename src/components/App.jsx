import React, { useState, useEffect } from 'react';
import Feedback from './feedback/Feedback';
import Options from './options/Options';


const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    useEffect(() => {
        const savedFeedback = localStorage.getItem('feedback');
        if (savedFeedback) {
            setFeedback(JSON.parse(savedFeedback));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    return (
        <div>
            <h1>Sip Happens Café</h1>
            <p>Please leave your feedback about our service by selecting one of the options below.</p>
            <Options feedback={feedback} setFeedback={setFeedback} />
            <Feedback feedback={feedback} />
        </div>
    );
};

export default App;

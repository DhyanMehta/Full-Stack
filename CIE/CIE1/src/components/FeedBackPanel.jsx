import React, { useState, useEffect } from 'react';

function FeedbackPanel() {
    const [excellent, setExcellent] = useState(0);
    const [good, setGood] = useState(0);
    const [average, setAverage] = useState(0);
    const [poor, setPoor] = useState(0);
    const [participantCount, setParticipantCount] = useState(0);

    function handleFeedbackClick(type) {
        if (type === 'Excellent') setExcellent(excellent + 1);
        else if (type === 'Good') setGood(good + 1);
        else if (type === 'Average') setAverage(average + 1);
        else if (type === 'Poor') setPoor(poor + 1);

        setParticipantCount(participantCount + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const categories = ['Excellent', 'Good', 'Average', 'Poor'];
            const randomIndex = Math.floor(Math.random() * categories.length);
            const randomType = categories[randomIndex];

            if (randomType === 'Excellent') setExcellent(prev => prev + 1);
            else if (randomType === 'Good') setGood(prev => prev + 1);
            else if (randomType === 'Average') setAverage(prev => prev + 1);
            else if (randomType === 'Poor') setPoor(prev => prev + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, []);


    function handleCounter(action) {
        if (action === 'increment') {
            setParticipantCount(participantCount + 1);
        } else if (action === 'decrement') {
            if (participantCount > 0) {
                setParticipantCount(participantCount - 1);
            }
        } else if (action === 'reset') {
            setParticipantCount(0);
        } else if (action === 'increment5') {
            setParticipantCount(participantCount + 5);
        }
    }

    return (
        <div style={{ padding: '20px' }}>
            <h3>Feedback Submission Panel</h3>

            <div style={{ marginBottom: '10px' }}>
                <button onClick={() => handleFeedbackClick('Excellent')}>Excellent</button>
                <span> Total: {excellent}</span>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <button onClick={() => handleFeedbackClick('Good')}>Good</button>
                <span> Total: {good}</span>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <button onClick={() => handleFeedbackClick('Average')}>Average</button>
                <span> Total: {average}</span>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <button onClick={() => handleFeedbackClick('Poor')}>Poor</button>
                <span> Total: {poor}</span>
            </div>

            <hr />

            <h3>Participant Feedback Counter</h3>
            <p>My Feedback Count: {participantCount}</p>

            <div>
                <button onClick={() => handleCounter('increment')}>+1</button>
                <button onClick={() => handleCounter('decrement')}>-1</button>
                <button onClick={() => handleCounter('reset')}>Reset</button>
                <button onClick={() => handleCounter('increment5')}>+5</button>
            </div>
        </div>
    );
}

export default FeedbackPanel;

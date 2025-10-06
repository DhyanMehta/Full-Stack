import React, { useState, useEffect } from 'react'

const DateTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div>
            <div className="text-center bg-white p-5">
                <h2 className="mb-3">Current Date & Time</h2>
                <p className="mb-1">{currentTime.toLocaleDateString()}</p>
                <p>{currentTime.toLocaleTimeString()}</p>
            </div>
        </div>
    );
}

export default DateTime;

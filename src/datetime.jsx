import React, { useState, useEffect } from 'react';

export const DateTime = () => {
    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='datetime-container'>
            <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', }}>
            <div style={{ fontSize: '2.5em', fontWeight: 'bold' }}>
                {date.toLocaleDateString(undefined, { day: 'numeric' })}
            </div>
            <div style={{ fontSize: '2em', marginTop: '-5px' }}>
                {date.toLocaleDateString(undefined, { month: 'short' })}
            </div>
        </div>
        </div>
        
    );
}

export default DateTime;
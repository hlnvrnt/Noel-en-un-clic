import React from 'react';

const CalendarNumber = ({id, picture, handleFlip}) => {

    return (
        <div onClick={handleFlip} className="calendarNumber">
            <div className="id">{id}</div>
            <div img-container>
<img src={picture}/>
            </div>
             
            {console.log(id)}
        </div>
       
    );
};

export default CalendarNumber;
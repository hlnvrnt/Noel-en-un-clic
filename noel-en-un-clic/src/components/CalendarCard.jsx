import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CalendarNumber from "./CalendarNumber";
import CalendarMovie from "./CalendarMovie";

function CalendarCard ( { image, picture, id }) {

    const [isFlipped, setIsFlipped] = useState(false); 

    const handleFlip = () => {
        setIsFlipped((current) => !current)
    }
    
    return (
<div className="calendarCard">
<ReactCardFlip isFlipped={isFlipped}
        flipDirection="horizontal">
    <CalendarNumber id={id} picture={picture} handleFlip={handleFlip}/> 
    <CalendarMovie image={image} handleFlip={handleFlip}/>
</ReactCardFlip>
</div>
    )
}

export default CalendarCard
const CalendarMovie = ({image, handleFlip}) => {
    return (
        <div onClick={handleFlip} className='calendarMovie'>
            <div className='image-container'>
<img src={image} />
            </div>
        </div>
    );
};

export default CalendarMovie;
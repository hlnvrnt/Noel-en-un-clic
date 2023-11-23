import MoviesData from "./MoviesData";
import CalendarCard from "../components/CalendarCard";

function MovieCalendar() {
  return (
    <div className="movieCalendar">
      <h1>Calendrier de l'Avent</h1>
      <div className="calendar-container">
        {MoviesData.map((movie) => (
          <CalendarCard
            key={movie.id}
            image={movie.image}
            picture={movie.picture}
            id={movie.id}
          />
        ))}
      </div>
      <div className="penguin">
  <img src="https://nervin.net/img/ping.gif" />
</div>
    </div>
  );
}

export default MovieCalendar;

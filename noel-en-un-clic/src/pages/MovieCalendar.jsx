import MoviesData from "./MoviesData";
import { NavLink } from "react-router-dom";
import CalendarCard from "../components/CalendarCard";

function MovieCalendar() {
  return (
    <div className="movieCalendar">
        <NavLink to="/">
        <div className="renne">
        <img src="/images/reindeer.png" alt="rennes" />
        </div>
        </NavLink>
        <div className="main-contenu">
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
      
    </div>
  );
}

export default MovieCalendar;
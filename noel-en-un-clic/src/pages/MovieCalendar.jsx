import MoviesData from "./MoviesData";
import { NavLink } from "react-router-dom";
import CalendarCard from "../components/CalendarCard";
import { useState } from "react";

function HoveringReturnHome() {
	return (
		<div className="reindeer-text">
		<p>Retour au Menu</p>
	</div>
	);
  }

function MovieCalendar() {
  const [isHovering, setIsHovering] = useState(false);

	const mouseOverHome = () => {
		setIsHovering(true);
	  };
	
	  const mouseOutHome = () => {
		setIsHovering(false);
	  };

  return (
    <div className="movieCalendar">
      <ul className="lightrope">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
        <NavLink to="/">
        <div className="renne" onMouseOver={mouseOverHome}
              onMouseOut={mouseOutHome}>
        <img src="/images/reindeer.png" alt="rennes" />
        </div>
        {isHovering && <HoveringReturnHome />}
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
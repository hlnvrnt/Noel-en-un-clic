import { NavLink } from "react-router-dom";
import { useState } from "react";

function HoveringWhishlist() {
  return (
    <div className="bubble">
      <h2>Ma liste au Père Noël</h2>
    </div>
  );
}
function HoveringMovieCalendar() {
  return (
    <div className="bubble-calendar">
      <h2>Mon calendrier de {`l'Avent`}</h2>
    </div>
  );
}
function HoveringRecipes() {
  return (
    <div className="bubble-recipe">
      <h2>Mes idées de recettes</h2>
    </div>
  );
}
const Home = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringMovie, setIsHoveringMovie] = useState(false);
  const [isHoveringRecipe, setIsHoveringRecipe] = useState(false);

  const mouseOverWish = () => {
    setIsHovering(true);
  };

  const mouseOutWish = () => {
    setIsHovering(false);
  };
  const mouseOverMovie = () => {
    setIsHoveringMovie(true);
  };

  const mouseOutMovie = () => {
    setIsHoveringMovie(false);
  };
  const mouseOverRecipe = () => {
    setIsHoveringRecipe(true);
  };

  const mouseOutRecipe = () => {
    setIsHoveringRecipe(false);
  };

  return (
    <div className="homepage">
      <h1>Noël en un clic</h1>
      <div className="icones">
        <div className="icones-firstline">
          <NavLink to="Whishlist">
            <div
              className="liste"
              onMouseOver={mouseOverWish}
              onMouseOut={mouseOutWish}
            >
              <img src="/images/Enveloppe.png" alt="enveloppe" />
            </div>
            {isHovering && <HoveringWhishlist />}
          </NavLink>

          <NavLink to="MovieCalendar">
            <div
              className="calendar"
              onMouseOver={mouseOverMovie}
              onMouseOut={mouseOutMovie}
            >
              <img src="/images/Epice.png" alt="calendar" />
            </div>
            {isHoveringMovie && <HoveringMovieCalendar />}
          </NavLink>
        </div>
        <div className="lutin">
          <img src="/images/Lutin.png" alt="lutin" />
        </div>
        <NavLink to="">
          <div
            className="menus"
            onMouseOver={mouseOverRecipe}
            onMouseOut={mouseOutRecipe}
          >
            <img src="/images/Dnde.png" alt="dinde" />
          </div>
          {isHoveringRecipe && <HoveringRecipes />}
        </NavLink>
      </div>
    </div>
  );
};

export default Home;

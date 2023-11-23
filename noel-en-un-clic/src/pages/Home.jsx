// import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
	return (
		<div className="homepage">
			<h1>Noël en un clic</h1>
			<div className="icones">
				<div className="icones-firstline">
					<NavLink to="Whishlist">
						<div className="liste">
							<img src="/images/Enveloppe.png" alt="enveloppe" />
							<h2>Ma liste au père noël</h2>
						</div>
					</NavLink>
					<NavLink to="MovieCalendar">
						<div className="calendar">
							<img src="/images/Epice.png" alt="calendar" />
							<h2>Mon calendrier de {`l'avant`}</h2>
						</div>
					</NavLink>
				</div>
				<div className="lutin">
					<img src="/images/Lutin.png" alt="lutin" />
				</div>
				<NavLink to="">
					<div className="menus">
						<img src="/images/Dnde.png" alt="dinde" />
						<h2>Mes idées de recettes</h2>
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default Home;

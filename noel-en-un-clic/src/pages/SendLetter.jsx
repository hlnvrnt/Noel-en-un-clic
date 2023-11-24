import { NavLink } from "react-router-dom";
import { useState } from "react";

function HoveringReturnHome() {
	return (
		<div className="reindeer-text">
		<p>Retour au Menu</p>
	</div>
	);
  }

export default function SendLetter() {
	const [isHovering, setIsHovering] = useState(false);

	const mouseOverHome = () => {
		setIsHovering(true);
	  };
	
	  const mouseOutHome = () => {
		setIsHovering(false);
	  };

	return (
		<>
			
				
				<NavLink to="/">
				<div className="reindeer" onMouseOver={mouseOverHome}
              onMouseOut={mouseOutHome} >
					<img src="/images/reindeer.png" alt="rennes" />
				</div>
				{isHovering && <HoveringReturnHome />}
				</NavLink>
				{/* <div className="reindeer-text">
					<p>Retour au Menu</p>
				</div>
				 */}
			
			<div className="confirmation-wrapper">
				<img src="/images/Boite.png" alt="boite" />
				<div className="confirmation-text">
					<p>
						Merci pour cette merveilleuse liste !<br></br>
						Le Père Noël se fera un plaisir de la lire.
						<br></br>
						Il ne te reste plus qu’à patienter jusqu’au Jour J.
					</p>
				</div>
			</div>
		</>
	);
}

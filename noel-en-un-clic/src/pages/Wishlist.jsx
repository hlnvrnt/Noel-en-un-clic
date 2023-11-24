import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Wishlist() {
	// État pour stocker la valeur de l'input
	const [wishlistItem, setWishlistItem] = useState("");
	// État pour stocker la liste des éléments soumis
	const [submittedItems, setSubmittedItems] = useState([]);

	// Fonction appelée lors de la soumission du formulaire
	const handleSubmit = (e) => {
		e.preventDefault();

		// Mettre à jour la liste des éléments soumis avec la nouvelle valeur
		setSubmittedItems([...submittedItems, wishlistItem]);

		// Réinitialiser la valeur de l'input
		setWishlistItem("");
	};

	let audio = new Audio("/Ho Ho Ho Merry Christmas - QuickSounds.com.mp3")

	const start = () => {
	  audio.play()
	}
  
  
	
	return (
		<>
			<div className="background-wishlist">
				<div className="lutin-text">
					<p>Que vas-tu commander au Père Noël cette année ?</p>
				
				<div className="lutin-wrapper">
					<img src="/images/Lutin.png"/>
				</div>
				</div>
				<div className="Letter-wrapper">
					<div className="header-wrapper">
						<h1>Ma liste au Père Noël</h1>
					</div>

					<form className="form-wrapper" onSubmit={handleSubmit}>
						<input
							id="liste"
							className="input"
							type="text"
							placeholder="Écris ici ce que tu souhaites commander"
							value={wishlistItem}
							onChange={(e) => setWishlistItem(e.target.value)}
						/>
						<button className="submit" type="submit">
							<svg className="gift"
								viewBox="0 0 1024 1024"
								fill="currentColor"
								height="1em"
								width="1em"
							>
								<path d="M160 894c0 17.7 14.3 32 32 32h286V550H160v344zm386 32h286c17.7 0 32-14.3 32-32V550H546v376zm334-616H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v140h366V310h68v172h366V342c0-17.7-14.3-32-32-32zm-402-4h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70 70 31.4 70 70v70zm138 0h-70v-70c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70z" />
							</svg>
						</button>
					</form>

					{submittedItems.length > 0 && (
						<div className="submitted-items">
							<ul>
								{submittedItems.map((item, index) => (
									<li key={index}>⭐ {item}</li>
								))}
							</ul>
						</div>
					)}

					<button className="send" type="submit">
						<NavLink to="/sendletter">
							<p>
								
								<strong onClick={start}>Envoyer 🎅🏻</strong>
							</p>
						</NavLink>
					</button>
				</div>
			</div>
		</>
	);
}

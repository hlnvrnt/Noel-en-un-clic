export default function Wishlist() {
	return (
		<>
			<div className="background-wishlist">
				<div className="Letter-wrapper">
					<div className="header-wrapper">
						<h1>Ma liste au Père Noël</h1>
					</div>
					<form className="form-wrapper">
						<input
							id="liste"
							className="input"
							type="text"
							placeholder="Écris ici ce que tu souhaites commander"
						/>
						<button type="submit">
							<strong>+</strong>
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

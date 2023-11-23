import { NavLink } from 'react-router-dom';


function Menu(){

    return(
        <>
        <NavLink to="/">
        <div className="renne">
        <img src="/images/reindeer.png" alt="rennes" />
        </div>
        </NavLink>
        <div className="menu-container">
            <div className="lutin-container">
                <img src="../../public/page_menu/before.png" className="menu-card-icon" alt="icon-before" />
                <p>Miam !Qu’il y aura t’il au menu ?</p>

            </div>
            <div className="menu-card-container">
                <h1>Recettes de noël</h1>
                <img src="../../public/page_menu/before.png" className="menu-card-icon" alt="icon-before" />
                <div className="repas-card-container">
                    <div className="repas-category">
                        <img src="../../public/page_menu/dinde.jpeg" className="menu-card-icon" alt="recette-image" />
                        <p>Plat</p>
                    </div>
                    <h2>Nom de repas</h2>
                    <button>Ajouter au menu</button>
                </div>
                <img src="../../public/page_menu/next.png" className="menu-card-icon" alt="icon-next" />
            </div>
            <div className="chosen-menu-container">
                <img src="../../public/page_menu/pin.png" className="menu-card-icon" alt="icon-pin" />
                <h3>menu</h3>
                <img src="../../public/page_menu/couvertatable.png" className="menu-card-icon" alt="menu-couvert" />
                <div className="menu-category">
                    Plat
                </div>
                <p>Dinde de Noel</p>
                <img src="../../public/page_menu/delete.png" className="menu-card-icon" alt="icon-delete" />

            </div>
        </div>
        </>
    );
}

export default Menu;
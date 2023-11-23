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
                </div>
                <div className="chosen-menu-container">
                    <div className="pin-container">
                        <img src="../../public/page_menu/pin.png" className="pin" alt="icon-pin" />
                    </div>
                    <div className="menu-title">
                        <h3>menu</h3>
                    </div>
                    <div className="menu-name-container">
                        <div className="left-block">
                            <div className="couvert-icon-container">
                                <img src="../../public/page_menu/couvertatable.png" className="menu-card-icon" alt="menu-couvert" />
                            </div>
                            <div className="menu-category">
                                Plat
                            </div>
                            <div className="chosen-menu-name">
                                <p>Dinde de Noel</p>
                            </div>
                        </div>
                        <div className="delete-icon-container">
                            <img src="../../public/page_menu/delete.png" className="menu-card-icon" alt="icon-delete" />
                        </div>
                    </div>
                </div>
                <div className="lutin-text-container">
                    <div className="image-lutin-container">
                        <img src="../../public/page_menu/lutin_white.png" className="image-lutin" alt="image-lutin" />
                    </div>
                    <div className="text-container">
                        <p>Miam !Qu’il y aura t’il au menu ?</p>
                    </div>
                </div>
            </div>
        </body>
        </>
    );
}

export default Menu;
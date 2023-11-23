function Menu(){

    return(
        <>
        <body>
            <div className="menu-container">
                <div className="menu-card-container">
                    <h1>Recettes de noël</h1>
                    <div className="arrow-repas-container">
                        <div className="arrow-container">
                            <img src="../../public/page_menu/before.png" className="arrow" alt="icon-before" />
                        </div>
                        <div className="repas-card-container">
                            <div className="repas-image-category-container">
                                <img src="../../public/page_menu/dinde.jpeg" className="menu-card-icon" alt="recette-image" />
                                    <p>Plat</p>
                            </div>
                            <div className="repasname-button-container">
                                <h2>Nom de repas</h2>
                                <button>Ajouter au menu</button>
                            </div>
                        </div>
                        <div className="arrow-container">
                            <img src="../../public/page_menu/next.png" className="arrow" alt="icon-next" />
                        </div>
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
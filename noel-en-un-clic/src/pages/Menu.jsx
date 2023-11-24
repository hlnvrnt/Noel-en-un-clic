import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import  menuItemsData  from "./MenuItempsData";

import GenericPdfdownloader from "./GenericPdfdownLoader";

function HoveringReturnHome() {
	return (
		<div className="reindeer-text">
		<p>Retour au Menu</p>
	</div>
	);
  }

function Menu(){
    const [menus, setMenus] = useState([]);
    const [recetteIndex, setRecetteIndex] = useState(0);
    const [doubledMenu, setDoubledMenu] = useState("hide-warning");
   
    const [isHovering, setIsHovering] = useState(false);

	const mouseOverHome = () => {
		setIsHovering(true);
	  };
	
	  const mouseOutHome = () => {
		setIsHovering(false);
	  };

    const handleClick = () => {
        let stateMenu = [...menus];
        function checkId(element){
            return element.id == menuItemsData[recetteIndex].id;
        }
        if(stateMenu.some(checkId)){
            setDoubledMenu("warning");
        } else{
            setMenus([...menus, menuItemsData[recetteIndex]]);
            setDoubledMenu("hide-warning")
        }
        //console.log(stateMenu.some(checkId));
    }

    const handleDelete = (index) => {
        let stateMenu = [...menus];
        let reducedMenu = stateMenu.filter((menu, menuIndex) => {
            return menuIndex !== index;
        })
        setMenus(reducedMenu); 
    }

   

    return(
        <>
        <body>
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
            <div className="menu-container">
                <div className="menu-card-container">
                    <h1>Recettes de Noël</h1>
                    <div className="arrow-repas-container">
                        <div className="arrow-container">
                            <button type="submit" onClick={()=> setRecetteIndex(recetteIndex-1)}>
                                <FaArrowCircleLeft className="arrow"/>
                            {/*<img src="../../public/page_menu/before.png" className="arrow" alt="icon-before" />*/}
                            </button>
                        </div>
                        <div className="repas-card-container">
                            <div className="repas-image-category-container">
                                <img src={menuItemsData[recetteIndex].picture} className="menu-card-icon" alt="recette-image" />
                                    <p>{menuItemsData[recetteIndex].category}</p>
                            </div>
                            <div className="repasname-button-container">
                                <p>{menuItemsData[recetteIndex].name}</p>
                                <button type="submit" onClick={handleClick} >Ajouter au menu</button>
                            </div>
                            <div className={doubledMenu}>
                                <p>Tu l'as déjà choisi 😉</p>
                            </div>
                        </div>
                        <div className="arrow-container">
                            <button type="submit" onClick={() => setRecetteIndex(recetteIndex+1)}>
                                <FaArrowCircleRight className="arrow"/>
                            </button>
                            {/*<img src="../../public/page_menu/next.png" className="arrow" alt="icon-next" /> */}
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
                <div className="chosen-menu-container" id="testId">
                    <div className="pin-container">
                        <img src="../../public/page_menu/pin.png" className="pin" alt="icon-pin" />
                    </div>
                    <div className="menu-title">
                        <img src="../../public/page_menu/couvertatable.png" alt="couvert-icon" />
                        <h3>Menu</h3>
                        <div className="button-pdf">
                        <GenericPdfdownloader 
                            downloadFileName="menu de noël " 
                            rootElementId="testId"
                        />  
                    </div>
                    </div>

                    {menus.map((menu, index)=> {
                        return(
                        // eslint-disable-next-line react/jsx-key
                        <div className="menu-name-container">
                            <div className="left-block">
                                <div className="chosen-category-name-container">
                                    <div className={`menu-category  ${menu.category}`}>
                                        {menu.category}
                                    </div>
                                    <div className="chosen-menu-name">
                                            <p>{menu.name}</p>
                                    </div>
                                </div>                                    
                                <div className="chosen-menu-image">
                                    <img src={menu.picture} className="menu-card-icon" alt="recette-image" />
                                </div>
                            </div>
                        <div className="delete-icon-container">
                            <button onClick={()=> handleDelete(index)}>
                            <FaTrash className="icon-delete"/>
                            </button>
                            {/*<img src="../../public/page_menu/delete.png" className="menu-card-icon" alt="icon-delete" />*/}
                        </div>
                    </div>)
                    })}
                    </div>
                    </div>
                    
        </body>
        </>
    );
}

export default Menu;
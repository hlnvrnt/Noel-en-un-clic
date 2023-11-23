import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import  menuItemsData  from "./MenuItempsData";

function Menu(){
    const [menus, setMenus] = useState([]);
    const [recetteIndex, setRecetteIndex] = useState(0);
    const [categoryClass, setCategoryClass] = useState("");
    

    const handleClick = () => {
        //setMenus([...setMenus, recetteIndex]);
        setMenus([...menus, menuItemsData[recetteIndex]]);
        console.log(menus)
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
            <NavLink to="/">
            <div className="renne">
            <img src="/images/reindeer.png" alt="rennes" />
            </div>
            </NavLink>
            <div className="menu-container">
                <div className="menu-card-container">
                    <h1>Recettes de noël</h1>
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
                <div className="chosen-menu-container">
                    <div className="pin-container">
                        <img src="../../public/page_menu/pin.png" className="pin" alt="icon-pin" />
                    </div>
                    <div className="menu-title">
                        <img src="../../public/page_menu/couvertatable.png" alt="couvert-icon" />
                        <h3>menu</h3>
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
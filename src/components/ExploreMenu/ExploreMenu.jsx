import React from 'react'
import '../ExploreMenu/ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const  ExploreMenu= ({category , Setcategory})=> {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes.Our mission
             is to satidfy your cravings and elevate your dining experience, one deliciousmeal at a time. </p>
             <div className="explore-menu-list">
                {menu_list.map((item ,index)=>{
                    return (
                        <div key={index} className="explore-menu-list-item">
                         <img src={item.menu_image} alt="" />
                         <p>{item.menu_name}</p>
                        </div>
                    )
                })}
             </div>
             <hr />
    </div>
  )
}
export default ExploreMenu;
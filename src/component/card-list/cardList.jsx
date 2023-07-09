import { Component } from "react";
import "./cardlist.styles.css";
import Card from "./card.jsx"


const CardList=({monsters}) =>{  
    return (
        <div className="card-list">
            {
               monsters.map((singleUser)=>{
                 return <Card singleUser = {singleUser} />
                 
                })   
            }
        </div>
        )  
}

export default CardList 
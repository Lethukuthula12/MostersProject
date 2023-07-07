import { Component } from "react";
import "./cardlist.styles.css";
import Card from "./card.jsx"


class CardList extends Component{


    render(){
        const {monsters} = this.props
      
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
}

export default CardList 
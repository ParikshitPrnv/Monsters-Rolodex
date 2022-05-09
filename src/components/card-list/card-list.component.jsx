import { Component } from "react";
import './card-list.styles.css';
import Card from '../card/card.component';

class CardList extends Component{


    render(){
        const monsters = this.props.monsters
        return(

        <div className="card-list">
            
        {monsters.map(monster=>{
            
          return (
    
            <Card monster = {monster}/>
            
          )
          
        })}
        </div>
            // Don't add below this
            //  Only one top level element is possible
        )
    }

}

export default CardList;
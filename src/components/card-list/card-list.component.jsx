import { Component } from "react";
import './card-list.styles.css';
class CardList extends Component{


    render(){

        const {monsters} = this.props

        return(

        <div className="container">
        {monsters.map(monster=>{
          return (
            <div key={monster.id}>
                <h1>{monster.name}</h1>
            </div>
          )
          
        })}
        </div>
            // Don't add below this
            //  Only one top level element is possible
        )
    }

}

export default CardList;
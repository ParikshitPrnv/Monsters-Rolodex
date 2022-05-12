import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = (props) => {
  const monsters = props.monsters;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
    // Don't add below this
    //  Only one top level element is possible
  );
};

export default CardList;

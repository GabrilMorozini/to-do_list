import React from "react";
import Card from "./Card"

function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/on.png" alt="Done"></img>;
  } else {
    return <img src="./assets/off.png" alt="Undone"></img>;
  }
}

function ListItem(props) {
  return (
        <li id={props.item.id}>
          <Card className={props.item.done ? "done item" : "item"}>
          <p className="textItem">
          {props.item.text}
          </p>
          <div className="controls">
            <button
              onClick={() => {
                props.onDone(props.item);
              }}
            >
              <DoneImg done={props.item.done}></DoneImg>
            </button>
            <button
              onClick={() => {
                props.onItemDeleted(props.item);
              }}
            >
              <img src="./assets/icon_lixo.png" alt="Delete"></img>
            </button>
          </div>
          </Card>
        </li>
      );
}

export default ListItem;

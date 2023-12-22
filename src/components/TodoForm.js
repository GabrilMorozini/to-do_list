import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      //   setItems([...items, text]);
      props.onAddItem(text);
      setText("");
    }
  }

  return (
    <div>
      <h3 className="titleModal">Digite sua tarefa</h3>
        <form className="formContainer">
          <textarea
            className="textAreaModal"
            onChange={handleChange}
            type="text"
            value={text}
          ></textarea>
          <button className="buttonModal" onClick={addItem}>
            ADICIONAR
          </button>
        </form>
      </div>
  );
}

export default TodoForm;

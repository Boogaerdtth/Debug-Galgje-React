import React from "react";
// required toevoegen aan de input werkt niet, dus die oplossing is niet goed
const TextInput = props => (
  <form onSubmit={props.submit}>
    <input
      type="text"
      maxLength="1"
      value={props.currentChosenLetter}
      disabled={props.gameIsOver ? "disabled" : ""}
      onChange={props.change}
    />
    <input
      type="submit"
      value="guess"
      disabled={props.gameIsOver ? "disabled" : ""}
    />
  </form>
);

export default TextInput;

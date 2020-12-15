import React from "react";

// even console.loggen en het hele document wordt rood.
// er waren geen curly brackets en geen return statement aanwezig

const TextInput = props => {
  // console.log(props.submit)
  return (
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
  )
};

export default TextInput;

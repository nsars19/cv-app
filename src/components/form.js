import React from "react";
import uniqid from "uniqid";

const Form = (props) => {
  const buildInput = (input) => {
    return (
      <input
        key={uniqid()}
        type={input.type}
        placeholder={input.text}
        data-state-key={input.stateKey}
        className="input"
        defaultValue={props.userInfo[input.stateKey] || ""}
      ></input>
    );
  }

  const formArray = Object.entries(props.formInfo);
  const formInfo = formArray.map((item) => item[1]);

  return (
    <form
      onSubmit={(event) => {
        props.toggleActiveStatus();
        props.onSubmit(event);
      }}
    >
      {formInfo.map((input) => buildInput(input))}
      <input type="submit" />
    </form>
  );
}

export default Form;

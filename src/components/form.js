import React from "react";
import uniqid from "uniqid";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.buildInput = this.buildInput.bind(this);
  }

  buildInput(input) {
    return (
      <input
        key={uniqid()}
        type={input.type}
        placeholder={input.text}
        data-state-key={input.stateKey}
        className="input"
        defaultValue={this.props.userInfo[input.stateKey] || ""}
      ></input>
    );
  }

  render() {
    const formArray = Object.entries(this.props.formInfo);
    const formInfo = formArray.map((item) => item[1]);

    return (
      <form
        onSubmit={(event) => {
          this.props.toggleActiveStatus();
          this.props.onSubmit(event);
        }}
      >
        {formInfo.map((input) => this.buildInput(input))}
        <input type="submit" />
      </form>
    );
  }
}

export default Form;

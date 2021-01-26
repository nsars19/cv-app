import React from "react";
import Form from "./form";
import uniqid from "uniqid";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      userInfo: this.setUserInfo(),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleActiveStatus = this.toggleActiveStatus.bind(this);
    this.buildElement = this.buildElement.bind(this);
  }

  setUserInfo() {
    const keys = Object.keys(this.props.inputs);
    const userInfo = {};

    keys.forEach((key) => (userInfo[key] = ""));
    return userInfo;
  }

  toggleActiveStatus() {
    this.setState({
      active: !this.state.active,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = [...event.target.children];

    formData.forEach((val) => {
      if (val.type === "submit") return;

      const stateVal = val.dataset.stateKey;
      const userState = this.state.userInfo;
      userState[stateVal] = val.value;

      this.setState({ userState });
    });
  }

  buildElement(item) {
    const input = this.props.inputs;
    const text = input[item[0]].text;

    return <p key={uniqid()}>{item[1] || text}</p>;
  }

  render() {
    const inputs = this.props.inputs;
    const formActive = this.state.active;

    if (formActive) {
      return (
        <div className={this.props.sectionClass}>
          <Form
            userInfo={this.state.userInfo}
            formInfo={inputs}
            toggleActiveStatus={this.toggleActiveStatus.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
          />
        </div>
      );
    } else {
      const info = Object.entries(this.state.userInfo);

      return (
        <div
          className={this.props.sectionClass}
          onClick={this.toggleActiveStatus}
        >
          {info.map((item) => this.buildElement(item))}
        </div>
      );
    }
  }
}

export default Category;

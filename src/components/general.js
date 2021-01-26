import React from "react";
import Form from "./form";

class General extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      userInfo: {
        name: "",
        email: "",
        address: "",
        phoneNum: "",
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleActiveStatus = this.toggleActiveStatus.bind(this);
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

    console.log(this.state.userInfo);
  }

  formFilledOut() {}

  render() {
    const inputs = {
      name: {
        stateKey: "name",
        text: "Name",
        type: "text",
      },
      phoneNum: {
        stateKey: "phoneNum",
        text: "Phone Number",
        type: "text",
      },
      email: {
        stateKey: "email",
        text: "Email",
        type: "email",
      },
      address: {
        stateKey: "address",
        text: "Address",
        type: "text",
      },
    };

    const formActive = this.state.active;

    if (formActive) {
      return (
        <div className="info-general">
          <Form
            userInfo={this.state.userInfo}
            formInfo={inputs}
            toggleActiveStatus={this.toggleActiveStatus.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
          />
        </div>
      );
    } else {
      const { name, email, address, phoneNum } = this.state.userInfo;

      return (
        <div className="inactive" onClick={this.toggleActiveStatus}>
          <p>{name || "Name"}</p>
          <p>{email || "Email"}</p>
          <p>{address || "Address"}</p>
          <p>{phoneNum || "Phone Number"}</p>
        </div>
      );
    }
  }
}

export default General;

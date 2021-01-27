import React, { useState } from "react";
import Form from "./form";
import uniqid from "uniqid";

const Category = (props) => {
  const [active, setActive] = useState(props.active || false);
  const [userInfo, setUserInfo] = useState(getUserInfo());

  function getUserInfo() {
    const keys = Object.keys(props.inputs);
    const userInfo = {};

    keys.forEach((key) => (userInfo[key] = ""));
    return userInfo;
  }

  const toggleActiveStatus = () => setActive(!active);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = [...event.target.children];

    formData.forEach((val) => {
      if (val.type === "submit") return;

      const stateVal = val.dataset.stateKey;
      const userState = userInfo;
      userState[stateVal] = val.value;

      setUserInfo(userState);
    });
  };

  const buildElement = (item) => {
    const input = props.inputs;
    const text = input[item[0]].text;

    return <p key={uniqid()}>{item[1] || text}</p>;
  };

  const inputs = props.inputs;

  if (active) {
    return (
      <div className={props.sectionClass}>
        <Form
          userInfo={userInfo}
          formInfo={inputs}
          toggleActiveStatus={toggleActiveStatus}
          onSubmit={handleSubmit}
        />
      </div>
    );
  } else {
    const info = Object.entries(userInfo);

    return (
      <div className={props.sectionClass} onClick={toggleActiveStatus}>
        {info.map((item) => buildElement(item))}
      </div>
    );
  }
};

export default Category;

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const styles = {
  root: {
    paddingTop: "1em",
    paddingRight: "2em",
    paddingLeft: "2em",
    color: "red"
  }
};

class Form-Main extends React.Component {
  render() {
    return <h1 style={styles}>Yes</h1>;
  }
}

ReactDOM.render(Form-Main, document.getElementById("root"));

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(element, document.getElementById("root"));

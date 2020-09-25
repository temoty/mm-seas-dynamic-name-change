import React from "react";
import "/src/styles.css";

const styles = {
  root: {
    paddingTop: "1em",
    paddingRight: "2em",
    paddingLeft: "2em",
    color: "red"
  }
};

class Greeting extends React.Component {
  render() {
    const greetings = "Greeting Component const";
    return <h1>{greetings}</h1>;
  }
}

class Greetingtwo extends React.Component {
  render() {
    return <h1>{this.props.greetings}</h1>;
  }
}
export default Greeting;

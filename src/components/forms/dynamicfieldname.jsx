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

class DynamicFieldName extends React.Component {
  render() {
    return <h1 style={styles}>Dynamic Field Name Component</h1>;
  }
}

export default DynamicFieldName;

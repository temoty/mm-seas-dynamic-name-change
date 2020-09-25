import React from "react";
import FormSelect from "./components/forms/formselect/formselect.jsx";
import DynamicFieldName from "./components/forms/dynamicfieldname.jsx";
import Greeting from "./components/greeting/greeting.jsx";
import Greetingtwo from "./components/greeting/greeting.jsx";

import "./styles.css";

function getTitle(title) {
  return title;
}

// let handleSubmit = (e) => {
//   console.log(e.target.value);
// }

export default function App() {
  return (
    <div className="App">
      <h1>{getTitle("Dynamic Name Change")}</h1>

      <FormSelect />

      <DynamicFieldName name="dynamicfieldname" />
      <Greeting name="greeting" />
      <Greetingtwo name="greetingtwo" />
    </div>
  );
}

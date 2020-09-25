import React from "react";
import "/src/styles.css";
import "./formselect.css";

class FormSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "ocean" };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
    let selected = event.target.value;
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div className="formwrapper">
        <form>
          <div className="selectwrapper">
            <label htmlFor="select">
              Choose Water Type:
              <select
                value={this.state.value}
                onChange={this.handleChange}
                id="select"
                className="inputselect"
                name="select"
              >
                <option value="ocean">Ocean</option>
                <option value="lake">Lake</option>
                <option value="river">River</option>
                <option value="stream">Stream</option>
              </select>
            </label>
          </div>
          <div className="textboxwrapper">
            <label htmlFor="textbox">
              <input type="text" name={this.state.value}></input>
            </label>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default FormSelect;

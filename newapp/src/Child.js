import { React, PureComponent } from "react";
export default class Child extends PureComponent {
  render() {
    console.warn("Child Render")
    return (
      <div className="App">
        <h4>From Child Count: {this.props.count}</h4>
      </div>
    );
  }
}
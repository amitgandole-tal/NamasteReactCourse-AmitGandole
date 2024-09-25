import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the About Us page.</p>
        <UserClass
          data={{ name: "Amit Gandole", loc: "Pune", contact: "01010101" }}
        />
      </div>
    );
  }
}

export default About;

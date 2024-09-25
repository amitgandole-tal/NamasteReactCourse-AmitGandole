import React, { useEffect } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://dummy.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/amitgandole");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="avatar" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Username: {login}</h2>
        {/* <h2>Contact : {contact}</h2> */}
      </div>
    );
  }
}

export default UserClass;

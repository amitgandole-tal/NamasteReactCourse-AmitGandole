import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: Pune</h2>
      <h2>Contact : 0101010101</h2>
    </div>
  );
};

export default User;

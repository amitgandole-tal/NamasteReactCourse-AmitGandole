import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error Page</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
    </div>
  );
};

export default Error;

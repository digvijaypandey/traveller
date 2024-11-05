import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>page not found</h1>
      <h6>{error.error.message}</h6>
      <h6>{error.status}</h6>
          <h3>{error && error.statusText}</h3>
          <NavLink to={'/'}>Home</NavLink>
    </>
  );
};

import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1 className="pt-2 ps-3">Oops</h1>
      <h5 className="ps-3">
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "An unexpected error occured"}
      </h5>
    </>
  );
};

export default ErrorPage;

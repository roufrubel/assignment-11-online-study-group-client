import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="text-center mt-28 mb-20 space-y-6 min-h-screen">
            <h1 className="font-bold text-4xl text-orange-800">404! Oops!</h1>
            <h1 className="font-bold text-2xl text-red-300">Page not found !</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'><button className="btn btn-warning font-bold mt-6">Go Back Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;
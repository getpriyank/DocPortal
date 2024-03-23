import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <>
        <h1 className="text-3xl font-bold mb-2">
          Uh Oh! Something went wrong!{" "}
        </h1>
        <h1 className="text-xl font-semibold">
          The page you are looking for does not exist
        </h1>
        <Link to="/" className="mt-4 border border-black p-2 rounded-lg">
          <button className="font-bold">Go to Home</button>
        </Link>
      </>
    </div>
  );
};

export default ErrorElement;

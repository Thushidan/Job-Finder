import { Link } from "react-router-dom";

const UnAuthorizedPage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600">403</h1>
      <h2 className="text-2xl mt-4 text-gray-800 font-semibold">Unauthorized Access</h2>
      <p className="mt-2 text-gray-600">
        You do not have permission to view this page.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );

}

export default UnAuthorizedPage;
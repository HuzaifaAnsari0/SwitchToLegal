import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <div className="pb-16 pt-28 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="flex flex-col items-center">
        <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
        <h1 className="text-5xl font-bold text-blue-700 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.<br />
          Please check the URL or return to the homepage.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Go to Homepage
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
};
export default NotFoundPage;
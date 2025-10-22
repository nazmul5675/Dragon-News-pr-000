import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
            <div className="text-center">
                <h1 className="text-[120px] font-extrabold text-gray-800">404</h1>
                <p className="text-2xl font-semibold text-gray-700 mb-4">
                    Oops! Page Not Found 😕
                </p>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    The page you’re looking for doesn’t exist or has been moved.
                    Please check the URL or return to the homepage.
                </p>

                <Link to="/">
                    <button className="btn btn-primary px-8 py-3 text-lg rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
                        ⬅ Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
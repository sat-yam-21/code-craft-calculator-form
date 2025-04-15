
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl font-bold mb-4 text-purple-900">Code Craft Calculator & Form</h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore interactive web components built with React, TypeScript, and Tailwind CSS
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Link to="/calculator" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
              <h2 className="text-2xl font-semibold mb-3 text-purple-800 group-hover:text-purple-600">Calculator</h2>
              <p className="text-gray-600 mb-4 flex-grow">
                A fully functional calculator with support for basic operations, percentages, and square functions.
              </p>
              <span className="text-purple-600 inline-flex items-center font-medium">
                Try it out
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </Link>
          
          <Link to="/" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
              <h2 className="text-2xl font-semibold mb-3 text-purple-800 group-hover:text-purple-600">Form Validation</h2>
              <p className="text-gray-600 mb-4 flex-grow">
                A responsive registration form with real-time validation for all input fields.
              </p>
              <span className="text-purple-600 inline-flex items-center font-medium">
                Check it out
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
      
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>Built with React, TypeScript, and Tailwind CSS</p>
        <p className="mt-1">Ready for deployment on GitHub and Netlify</p>
      </footer>
    </div>
  );
};

export default Index;

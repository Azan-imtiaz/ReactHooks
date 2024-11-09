import { Link, Route, Routes, useLocation } from "react-router-dom";
import UseMemo from "./comp/useMemo";
import UseRef from "./comp/useRef";
import UseCallback from "./comp/useCallback";
import UseReducer from "./comp/useReducer";
export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-6 shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-yellow-500 mb-2">
            Practise and Learn React!
          </h1>
          <p className="text-xl font-semibold text-red-300">
            Prepared By Azan Imtiaz
          </p>
        </div>
      </header>

      <nav className="bg-white p-4 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-center space-x-6">
          {/* Home Link with active styling */}
          <Link
            to="/"
            className={`text-lg font-medium py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-100 ${
              location.pathname === "/" ? "text-blue-600" : "text-gray-800"
            }`}
          >
            useRef
          </Link>

          {/* About Us Link with active styling */}
          <Link
            to="/UseMemo"
            className={`text-lg font-medium py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-100 ${
              location.pathname === "/UseMemo" ? "text-blue-600" : "text-gray-800"
            }`}
          >
            useMemo
          </Link>
          <Link
            to="/UseReducer"
            className={`text-lg font-medium py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-100 ${
              location.pathname === "/UseReducer" ? "text-blue-600" : "text-gray-800"
            }`}
          >
            useReducer
          </Link>
          <Link
            to="/UseCallback"
            className={`text-lg font-medium py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-100 ${
              location.pathname === "/UseCallback" ? "text-blue-600" : "text-gray-800"
            }`}
          >
          useCallback
           </Link>

          
        </div>
      </nav>

      <main className="py-10">
        <Routes>
          <Route path="/" element={<UseRef />} />
          <Route path="/UseMemo" element={<UseMemo />} />
          <Route path="/UseReducer" element={<UseReducer />} />
          <Route path="/UseCallback" element={<UseCallback />} />
        </Routes>
      </main>
    </div>
  );
}

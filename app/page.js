import Link from "next/link";
import { FaUser, FaFileAlt } from "react-icons/fa"; // Importing icons for a modern look

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 via-gray-600 to-pink-500">

      <div className="text-center p-10 max-w-lg w-full bg-white shadow-xl rounded-3xl border-4 border-pink-600 transform hover:scale-105 transition-all duration-300">

        {/* Profile Image */}
        <img
          src="/POOH1.jpg"
          alt="Profile Picture"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-pink-600 shadow-xl"
        />

        {/* Title and Description */}
        <h1 className="text-4xl font-extrabold text-pink-600 mb-4">
          <FaUser className="inline-block mr-2 text-pink-600" />
          Welcome To My Resume
        </h1>

        <p className="text-gray-800 text-lg mb-4">
          Hi, this is my resume. My name is Aphiphu Thammetha.
        </p>

        <p className="text-pink-500 font-semibold text-lg mb-6">
          Click the button below to view my resume.
        </p>

        {/* View Resume Button */}
        <Link
          href="/resume"
          className="bg-pink-600 text-white px-8 py-4 rounded-lg shadow-xl hover:bg-pink-800 transition duration-300 transform hover:scale-105"
        >
          <FaFileAlt className="inline-block mr-2" />
          View My Resume
        </Link>
      </div>
    </div>
  );
}

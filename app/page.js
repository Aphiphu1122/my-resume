import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-900 via-pink-600 to-pink-200">

      <div className="text-center p-10 max-w-lg w-full bg-white shadow-lg rounded-lg border-4 border-pink-500">

        <img
          src="/POOH1.jpg"
          alt="Profile Picture"
          className="w-32 h-34 rounded-full mx-auto mb-4 border-4 border-pink-500"
        />

        <h1 className="text-3xl font-extrabold text-pink-600 mb-4">
          Welcome To My Resume
        </h1>

        <p className="text-gray-700 mb-4">
          Hi, this is my resume. My name is Aphiphu Thammetha.
        </p>
        <p className="text-pink-500 font-semibold mb-6">
          Click the button to view my resume.
        </p>

        <Link
          href="/resume"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-900 transition duration-300"
        >
          View My Resume
        </Link>
      </div>
    </div>
  );
}

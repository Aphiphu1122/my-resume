import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-gray-600 mb-6">
          Click the button below to view my resume.
        </p>
        <Link
          href="/resume"
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          View My Resume
        </Link>
      </div>
    </div>
  );
}

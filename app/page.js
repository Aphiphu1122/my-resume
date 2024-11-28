import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {/* รูปภาพทรงวงกลม */}
        <img
          src="/POOH1.jpg"
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />
        <h1 className="text-3xl font-bold mb-4">Welcome to My Webpage Resume</h1>
        <p className="text-gray-600 mb-6">
          Hi this is my resume. My name is Aphiphu Thammetha.
        </p>
        <p className="text-gray-600 mb-6">
          Click the button to view my resume.
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

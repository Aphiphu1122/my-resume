export default function Resume() {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <header className="bg-blue-500 text-white text-center py-4">
            <h1 className="text-2xl font-bold">Your Name</h1>
            <p className="text-sm">Web Developer | Designer | Problem Solver</p>
          </header>
          <div className="p-6">
            <section className="mb-6">
              <h2 className="text-xl font-bold border-b pb-2 mb-4">About Me</h2>
              <p className="text-gray-700">
                I am a passionate web developer with experience in building
                high-quality websites using modern technologies.
              </p>
            </section>
            <section className="mb-6">
              <h2 className="text-xl font-bold border-b pb-2 mb-4">Experience</h2>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Company A</strong> - Frontend Developer (2020-2022)
                  <p className="text-gray-600 text-sm">
                    Developed responsive user interfaces and improved performance.
                  </p>
                </li>
                <li>
                  <strong>Company B</strong> - Backend Developer (2018-2020)
                  <p className="text-gray-600 text-sm">
                    Built and maintained REST APIs for internal systems.
                  </p>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-bold border-b pb-2 mb-4">Skills</h2>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
                  HTML
                </li>
                <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
                  CSS
                </li>
                <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
                  JavaScript
                </li>
                <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
                  React
                </li>
                <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
                  Node.js
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
  
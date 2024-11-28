export default function Resume() {
    return (
      <div className="min-h-screen bg-black-200 p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <header className="bg-blue-500 text-white text-center py-4">
            <h1 className="text-2xl font-bold">Aphiphu Thammetha</h1>
            <p className="text-sm">Web My Resume | SE | 66023029</p>
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
          </div>
        </div>
      </div>
    );
  }
  
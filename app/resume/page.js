export default function Resume() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-700 via-pink-500 to-pink-300">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
        
        <header className="bg-pink-600 text-white text-center py-8">
          <img
            src="/POOH1.jpg"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white mb-6 shadow-lg"
          />
          <h1 className="text-4xl font-extrabold">Aphiphu Thammetha</h1>
          <p className="text-xl font-medium mt-2">Web Developer | SE | 66023029</p>
        </header>

        <div className="p-10 space-y-8">
          {/* Personal Information */}
          <section className="mb-6">
            <h2 className="text-3xl font-bold text-pink-600 border-b-4 pb-2 mb-4">ข้อมูลส่วนตัว</h2>
            <p className="text-gray-800 leading-relaxed text-lg">
              <strong>ชื่อ:</strong> Aphiphu Thammetha <br />
              <strong>ตำแหน่งงาน:</strong> Web Developer <br />
              <strong>รหัสนักศึกษา:</strong> 66023029 <br />
              <strong>อีเมล:</strong> 66023029@up.ac.th
            </p>
          </section>

          {/* Education & Experience */}
          <section className="mb-6">
            <h2 className="text-3xl font-bold text-pink-600 border-b-4 pb-2 mb-4">ประวัติการศึกษาและประสบการณ์</h2>
            <div className="space-y-6">
              <div>
                <strong className="text-xl text-pink-700">ปริญญาตรี: Software Engineering</strong> - มหาวิทยาลัยพะเยา (2023 - 2024)
                <p className="text-gray-800 mt-2">ศึกษาด้านการพัฒนาซอฟต์แวร์และการออกแบบระบบ</p>
              </div>
              <div>
                <strong className="text-xl text-pink-700">Frontend Developer</strong> - Company A (2020-2022)
                <p className="text-gray-800 mt-2">พัฒนาและปรับปรุง UI/UX</p>
              </div>
              <div>
                <strong className="text-xl text-pink-700">Backend Developer</strong> - Company B (2020-2022)
                <p className="text-gray-800 mt-2">สร้างและดูแลระบบ API</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-3xl font-bold text-pink-600 border-b-4 pb-2 mb-4">ทักษะและความสามารถ</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
              <li>React.js, Node.js, Express.js</li>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Tailwind CSS</li>
              <li>REST APIs</li>
              <li>MySQL, MariaDB</li>
            </ul>
          </section>

          {/* Achievements */}
          <section className="mb-6">
            <h2 className="text-3xl font-bold text-pink-600 border-b-4 pb-2 mb-4">ผลงานหรือความสำเร็จ</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
              <li>พัฒนาเว็บไซต์ร้านอาหาร</li>
              <li>พัฒนาเว็บไซต์ร้านเสื้อผ้า</li>
              <li>พัฒนาเว็บไซต์ร้านขายเกม</li>
            </ul>
          </section>

          {/* Special Traits */}
          <section>
            <h2 className="text-3xl font-bold text-pink-600 border-b-4 pb-2 mb-4">คุณสมบัติเฉพาะ</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              - มีความสามารถในการทำงานเป็นทีมและแก้ไขปัญหาได้ดี <br />
              - มีความรับผิดชอบสูง และสามารถทำงานภายใต้ความกดดันได้ <br />
              - มีทักษะในการสื่อสารและนำเสนออย่างมีประสิทธิภาพ
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

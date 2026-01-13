import { FaEnvelope, FaGraduationCap, FaBriefcase, FaCogs, FaTrophy } from 'react-icons/fa'; // Importing icons from FontAwesome

export default function Resume() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-200 via-white to-gray-200">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        
        <header className="bg-black text-white text-center py-10">
          <img
            src="/POOH1.jpg"
            alt="Profile Picture"
            className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
          />
          <h1 className="text-4xl font-bold">Aphiphu Thammetha</h1>
          <p className="text-xl font-light mt-2">Web Developer | SE | 66023029</p>
        </header>

        <div className="px-10 py-8 space-y-8">
          
          {/* Personal Information */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black border-b-4 pb-2 mb-4">
              <FaEnvelope className="inline-block mr-3 text-pink-500" />
              ข้อมูลส่วนตัว
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              <strong>ชื่อ:</strong> Aphiphu Thammetha <br />
              <strong>ตำแหน่งงาน:</strong> Web Developer <br />
              <strong>รหัสนักศึกษา:</strong> 66023029 <br />
              <strong>อีเมล:</strong> 66023029@up.ac.th
            </p>
          </section>

          {/* Education & Experience */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black border-b-4 pb-2 mb-4">
              <FaGraduationCap className="inline-block mr-3 text-pink-500" />
              ประวัติการศึกษาและประสบการณ์
            </h2>
            <div className="space-y-6">
              <div>
                <strong className="text-xl text-gray-900">ปริญญาตรี: Software Engineering</strong> - มหาวิทยาลัยพะเยา (2023 - 2024)
                <p className="text-gray-700 mt-2">ศึกษาด้านการพัฒนาซอฟต์แวร์และการออกแบบระบบ</p>
              </div>
              <div>
                <strong className="text-xl text-gray-900">Frontend Developer</strong> - Company A (2020-2022)
                <p className="text-gray-700 mt-2">พัฒนาและปรับปรุง UI/UX</p>
              </div>
              <div>
                <strong className="text-xl text-gray-900">Backend Developer</strong> - Company B (2020-2022)
                <p className="text-gray-700 mt-2">สร้างและดูแลระบบ API</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black border-b-4 pb-2 mb-4">
              <FaCogs className="inline-block mr-3 text-pink-500" />
              ทักษะและความสามารถ
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
              <li>React.js, Node.js, Express.js</li>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Tailwind CSS</li>
              <li>REST APIs</li>
              <li>MySQL, MariaDB</li>
            </ul>
          </section>

          {/* Achievements */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold text-black border-b-4 pb-2 mb-4">
              <FaTrophy className="inline-block mr-3 text-pink-500" />
              ผลงานหรือความสำเร็จ
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
              <li>พัฒนาเว็บไซต์ร้านอาหาร</li>
              <li>พัฒนาเว็บไซต์ร้านเสื้อผ้า</li>
              <li>พัฒนาเว็บไซต์ร้านขายเกม</li>
            </ul>
          </section>

          {/* Special Traits */}
          <section>
            <h2 className="text-3xl font-semibold text-black border-b-4 pb-2 mb-4">
              <FaBriefcase className="inline-block mr-3 text-pink-500" />
              คุณสมบัติเฉพาะ
            </h2>
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

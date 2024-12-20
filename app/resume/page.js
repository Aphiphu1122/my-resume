export default function Resume() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-900 via-pink-600 to-pink-200">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        
        <header className="bg-pink-600 text-white text-center py-2">
          <img
            src="/POOH1.jpg"
            alt="Profile Picture"
            className="w-23 h-24 rounded-full mx-auto border-4 border-white mb-4"
          />
          <h1 className="text-3xl font-bold">Aphiphu Thammetha</h1>
          <p className="text-lg font-medium mt-2">Web Developer | SE | 66023029</p>
        </header>

        <div className="p-8">
                    <section className="mb-8">
            <h2 className="text-2xl font-bold text-pink-600 border-b-4 pb-2 mb-4">ข้อมูลส่วนตัว</h2>
            <p className="text-gray-800 leading-relaxed">
              ชื่อ: Aphiphu Thammetha <br />
              ตำแหน่งงาน: Web Developer <br />
              รหัสนักศึกษา: 66023029 <br />
              อีเมล: 66023029@up.ac.th
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-pink-600 border-b-2 pb-2 mb-4">ประวัติการศึกษาและประสบการณ์</h2>
            <div className="space-y-4">
              <div>
                <strong className="text-lg text-pink-700">ปริญญาตรี: Solfware Engineer</strong > - มหาวิทยาลัยพะเยา (2023 - 2024)
                <p className="text-gray-800 mt-1">ศึกษาด้านการพัฒนาซอฟต์แวร์และการออกแบบระบบ</p>
              </div>
              <div>
                <strong className="text-lg text-pink-700">Frontend Developer</strong> - Company A (2020-2022)
                <p className="text-gray-800 mt-1">
                  พัฒนาและปรับปรุง UI/UX
                </p>
              </div>
              <div>
                <strong className="text-lg text-pink-700">Backend Developer</strong> - Company B (2020-2022)
                <p className="text-gray-800 mt-1">
                  สร้างและดูแลระบบ API
                </p>
              </div>
            </div>
          </section>

          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-pink-600 border-b-2 pb-2 mb-4">ทักษะและความสามารถ</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>React.js, Node.js, Express.js</li>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Tailwind CSS</li>
              <li>REST APIs</li>
              <li>MySQL,MariaDB</li>
            </ul>
          </section>

          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-pink-600 border-b-2 pb-2 mb-4">ผลงานหรือความสำเร็จ</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>พัฒนาเว็บไซต์ร้านอาหาร</li>
              <li>พัฒนาเว็บไซต์ร้านเสื้อผ้า</li>
              <li>พัฒนาเว็บไซต์ร้านขายเกม</li>
            </ul>
          </section>

          
          <section>
            <h2 className="text-2xl font-bold text-pink-600 border-b-2 pb-2 mb-4">คุณสมบัติเฉพาะ</h2>
            <p className="text-gray-700 leading-relaxed">
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
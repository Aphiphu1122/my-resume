export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Header Section */}
        <header className="bg-indigo-600 text-white text-center py-8">
          <h1 className="text-3xl font-semibold">Aphiphu Thammetha</h1>
          <p className="text-lg font-medium mt-2">Web Developer | SE | 66023029</p>
        </header>

        {/* Content Section */}
        <div className="p-8">

          {/* ข้อมูลส่วนตัว */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-600 border-b-2 pb-2 mb-4">ข้อมูลส่วนตัว</h2>
            <p className="text-gray-700 leading-relaxed">
              ชื่อ: Aphiphu Thammetha <br />
              ตำแหน่งงาน: Web Developer <br />
              รหัสนักศึกษา: 66023029 <br />
              อีเมล: yourname@example.com
            </p>
          </section>

          {/* ประวัติการศึกษาและประสบการณ์ */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-600 border-b-2 pb-2 mb-4">ประวัติการศึกษาและประสบการณ์</h2>
            <div className="space-y-4">
              <div>
                <strong className="text-lg text-indigo-600">ปริญญาตรี: วิศวกรรมซอฟต์แวร์</strong> - มหาวิทยาลัย ABC (2015 - 2019)
                <p className="text-gray-600 mt-1">ศึกษาด้านการพัฒนาซอฟต์แวร์และการออกแบบระบบ</p>
              </div>
              <div>
                <strong className="text-lg text-indigo-600">Frontend Developer</strong> - Company A (2020-2022)
                <p className="text-gray-600 mt-1">
                  พัฒนาและปรับปรุง UI/UX ของเว็บไซต์ที่ตอบสนองกับอุปกรณ์ทุกประเภท
                </p>
              </div>
              <div>
                <strong className="text-lg text-indigo-600">Backend Developer</strong> - Company B (2018-2020)
                <p className="text-gray-600 mt-1">
                  สร้างและดูแลระบบ API สำหรับการใช้งานภายในบริษัท
                </p>
              </div>
            </div>
          </section>

          {/* ทักษะและความสามารถ */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-600 border-b-2 pb-2 mb-4">ทักษะและความสามารถ</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>React.js, Node.js, Express.js</li>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Tailwind CSS, Bootstrap</li>
              <li>REST APIs, GraphQL</li>
              <li>MySQL, MongoDB</li>
            </ul>
          </section>

          {/* ผลงานหรือความสำเร็จ */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-600 border-b-2 pb-2 mb-4">ผลงานหรือความสำเร็จ</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>พัฒนาเว็บไซต์อีคอมเมิร์ซให้กับธุรกิจในท้องถิ่น</li>
              <li>สร้างระบบจัดการเนื้อหาที่ใช้สำหรับการปรับปรุงเว็บไซต์ที่มีผู้เข้าชมจำนวนมาก</li>
              <li>ได้รับรางวัลนักพัฒนายอดเยี่ยมจากบริษัท A</li>
            </ul>
          </section>

          {/* คุณสมบัติเฉพาะ */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-600 border-b-2 pb-2 mb-4">คุณสมบัติเฉพาะ</h2>
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

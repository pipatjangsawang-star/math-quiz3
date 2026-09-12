// ==========================================
// 1. โจทย์ปรนัยปกติ (18 ข้อ)
// ==========================================
const mcqQuestions = [
  {
    id: 301,
    question: "จงหาค่าของ $\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$",
    options: ["0", "4", "8", "หาค่าไม่ได้"],
    correctIndex: 2,
    explanation: "แยกตัวประกอบเศษได้ $(x-4)(x+4)$ ตัดกับส่วน $(x-4)$ เหลือ $\\lim_{x \\to 4}(x+4) = 8$"
  },
  {
    id: 302,
    question: "จงหาค่าของ $\\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x}$",
    options: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "1", "0"],
    correctIndex: 0,
    explanation: "คูณสังยุค $\\frac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2}$ ได้เศษ $x$ ตัดกับส่วน เหลือ $\\lim_{x \\to 0}\\frac{1}{\\sqrt{x+4}+2} = \\frac{1}{4}$"
  },
  {
    id: 303,
    question: "กำหนด $f(x) = \\begin{cases} 2x + 1 & ; x < 2 \\\\ x^2 + 1 & ; x \\ge 2 \\end{cases}$ ข้อใดถูกต้องเกี่ยวกับความต่อเนื่องที่ $x = 2$",
    options: ["ต่อเนื่อง เพราะ $\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x) = f(2) = 5$", "ไม่ต่อเนื่อง เพราะลิมิตไม่เท่ากัน", "ไม่ต่อเนื่อง เพราะ $f(2)$ หาค่าไม่ได้", "ต่อเนื่อง เพราะเป็นฟังก์ชันพหุนาม"],
    correctIndex: 0,
    explanation: "ลิมิตซ้าย = $2(2)+1 = 5$, ลิมิตขวา = $2^2+1 = 5$, และ $f(2) = 5$ ดังนั้น ฟังก์ชันต่อเนื่อง"
  },
  {
    id: 304,
    question: "ถ้า $f(x) = \\begin{cases} ax - 3 & ; x \\le 3 \\\\ x^2 - 6 & ; x > 3 \\end{cases}$ ต่อเนื่องที่ $x = 3$ แล้ว $a$ มีค่าเท่าใด",
    options: ["1", "2", "3", "4"],
    correctIndex: 1,
    explanation: "จับลิมิตซ้ายเท่ากับขวา: $a(3) - 3 = 3^2 - 6 \\Rightarrow 3a - 3 = 3 \\Rightarrow 3a = 6 \\Rightarrow a = 2$"
  },
  {
    id: 305,
    question: "อนุพันธ์ของ $f(x) = 3x^5 - 2x^3 + 7x - 4$ เท่ากับข้อใด",
    options: ["$15x^4 - 6x^2 + 7$", "$15x^4 - 6x^2$", "$3x^4 - 2x^2 + 7$", "$15x^5 - 6x^3 + 7x$"],
    correctIndex: 0,
    explanation: "ดิฟทีละพจน์: $f'(x) = 15x^4 - 6x^2 + 7$"
  },
  {
    id: 306,
    question: "อนุพันธ์ของ $f(x) = (x^2 + 3)(2x - 1)$ เท่ากับข้อใด",
    options: ["$6x^2 - 2x + 6$", "$6x^2 + 2x + 6$", "$4x^2 + 6x - 1$", "$6x^2 - 2x$"],
    correctIndex: 0,
    explanation: "หน้าดิฟหลัง + หลังดิฟหน้า: $(x^2+3)(2) + (2x-1)(2x) = 2x^2 + 6 + 4x^2 - 2x = 6x^2 - 2x + 6$"
  },
  {
    id: 307,
    question: "อนุพันธ์ของ $f(x) = \\frac{2x + 1}{x - 3}$ เท่ากับข้อใด",
    options: ["$-\\frac{7}{(x-3)^2}$", "$\\frac{7}{(x-3)^2}$", "$-\\frac{5}{(x-3)^2}$", "$\\frac{2}{(x-3)^2}$"],
    correctIndex: 0,
    explanation: "ใช้สูตร $\\frac{ad-bc}{(cx+d)^2} = \\frac{(2)(-3) - (1)(1)}{(x-3)^2} = -\\frac{7}{(x-3)^2}$"
  },
  {
    id: 308,
    question: "อนุพันธ์ของ $f(x) = (3x^2 - 2)^4$ โดยใช้กฎลูกโซ่ เท่ากับข้อใด",
    options: ["$24x(3x^2 - 2)^3$", "$12x(3x^2 - 2)^3$", "$4(3x^2 - 2)^3$", "$24x^2(3x^2 - 2)^3$"],
    correctIndex: 0,
    explanation: "$f'(x) = 4(3x^2 - 2)^3 \\cdot (6x) = 24x(3x^2 - 2)^3$"
  },
  {
    id: 309,
    question: "กำหนด $f(x) = 2x^4 - 5x^3 + x^2$ จงหาอนุพันธ์อันดับสอง $f''(x)$",
    options: ["$24x^2 - 30x + 2$", "$8x^3 - 15x^2 + 2x$", "$24x^2 - 15x + 2$", "$48x - 30$"],
    correctIndex: 0,
    explanation: "$f'(x) = 8x^3 - 15x^2 + 2x \\Rightarrow f''(x) = 24x^2 - 30x + 2$"
  },
  {
    id: 310,
    question: "ความชันของเส้นสัมผัสโค้ง $y = x^3 - 3x + 5$ ที่จุด $(2, 7)$ มีค่าเท่าใด",
    options: ["9", "12", "6", "3"],
    correctIndex: 0,
    explanation: "ความชัน $m = y'(x) = 3x^2 - 3$ แทน $x = 2$ ได้ $m = 3(2)^2 - 3 = 9$"
  },
  {
    id: 311,
    question: "ความชันของเส้นตรงที่ตั้งฉากกับเส้นสัมผัสโค้ง $y = 2x^2 + 1$ ที่จุด $(1, 3)$ เท่ากับเท่าใด",
    options: ["$-\\frac{1}{4}$", "4", "-4", "$\\frac{1}{4}$"],
    correctIndex: 0,
    explanation: "$y' = 4x \\Rightarrow m_{สัมผัส} = 4(1) = 4$ ความชันเส้นตั้งฉาก $m_{\\perp} = -\\frac{1}{4}$"
  },
  {
    id: 312,
    question: "ฟังก์ชัน $f(x) = 2x^3 - 6x$ เป็นฟังก์ชันลด บนช่วงใด",
    options: ["$(-1, 1)$", "$(-\\infty, -1)$", "$(1, \\infty)$", "$(-3, 3)$"],
    correctIndex: 0,
    explanation: "$f'(x) = 6x^2 - 6 = 6(x-1)(x+1) < 0$ เมื่อ $x \\in (-1, 1)$"
  },
  {
    id: 313,
    question: "จุดวิกฤตของ $f(x) = x^3 - 6x^2 + 9x$ เกิดขึ้นที่ค่า $x$ ใดบ้าง",
    options: ["$x = 1, 3$", "$x = 0, 3$", "$x = -1, 3$", "$x = 2, 4$"],
    correctIndex: 0,
    explanation: "$f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3) = 0 \\Rightarrow x = 1, 3$"
  },
  {
    id: 314,
    question: "วัตถุเคลื่อนที่ตามสมการ $s(t) = t^3 - 6t^2 + 9t$ จงหาความเร็ว $v(t)$ เมื่อเวลา $t = 3$ วินาที",
    options: ["0 m/s", "3 m/s", "-3 m/s", "9 m/s"],
    correctIndex: 0,
    explanation: "$v(t) = s'(t) = 3t^2 - 12t + 9$ แทน $t = 3$ ได้ $v(3) = 3(9) - 12(3) + 9 = 0$ m/s"
  },
  {
    id: 315,
    question: "จงหาค่าอินทิเกรตไม่จำกัดเขต $\\int (12x^3 - 6x^2 + 2x) \\, dx$",
    options: ["$3x^4 - 2x^3 + x^2 + C$", "$4x^4 - 3x^3 + x^2 + C$", "$3x^4 - 6x^3 + 2x^2 + C$", "$12x^4 - 6x^3 + C$"],
    correctIndex: 0,
    explanation: "$\\int (12x^3 - 6x^2 + 2x) dx = \\frac{12x^4}{4} - \\frac{6x^3}{3} + \\frac{2x^2}{2} + C = 3x^4 - 2x^3 + x^2 + C$"
  },
  {
    id: 316,
    question: "จงหาค่าอินทิเกรตจำกัดเขต $\\int_{1}^{3} (3x^2) \\, dx$",
    options: ["26", "27", "18", "24"],
    correctIndex: 0,
    explanation: "$\\int_{1}^{3} 3x^2 dx = [x^3]_1^3 = 3^3 - 1^3 = 27 - 1 = 26$"
  },
  {
    id: 317,
    question: "วัตถุเคลื่อนที่ด้วยความเร่ง $a(t) = 6t + 2$ ถ้าความเร็วเริ่มต้น $v(0) = 4$ m/s สมการความเร็ว $v(t)$ คือข้อใด",
    options: ["$v(t) = 3t^2 + 2t + 4$", "$v(t) = 6t^2 + 2t + 4$", "$v(t) = 3t^2 + 4$", "$v(t) = 3t^2 + 2t$"],
    correctIndex: 0,
    explanation: "$v(t) = \\int (6t+2) dt = 3t^2 + 2t + C$ แทน $v(0) = 4 \\Rightarrow C = 4$"
  },
  {
    id: 318,
    question: "พื้นที่ปิดล้อมด้วยเส้นโค้ง $y = 4x^3$ จาก $x = 0$ ถึง $x = 2$ บนแกน X เท่ากับกี่ตารางหน่วย",
    options: ["16", "8", "32", "12"],
    correctIndex: 0,
    explanation: "Area $= \\int_0^2 4x^3 dx = [x^4]_0^2 = 2^4 - 0 = 16$"
  }
];

// ==========================================
// 2. โจทย์ปรนัยแนว PISA (3 ข้อ)
// ==========================================
const pisaQuestions = [
  {
    id: 319,
    question: "<b>[PISA 1]</b> จรวดทดลองถูกยิงขึ้นฟ้ามีความเร็ว $v(t) = 60 - 10t$ m/s จรวดจะขึ้นถึงจุดสูงสุด (ความเร็วเป็น 0) ในกี่วินาที และขึ้นไปได้สูงกี่เมตร",
    options: ["หยุดใน 6 วินาที, ความสูง 180 เมตร", "หยุดใน 6 วินาที, ความสูง 360 เมตร", "หยุดใน 10 วินาที, ความสูง 200 เมตร", "หยุดใน 4 วินาที, ความสูง 120 เมตร"],
    correctIndex: 0,
    explanation: "หยุดเมื่อ $v(t) = 0 \\Rightarrow 60 - 10t = 0 \\Rightarrow t = 6$ วินาที ระยะทาง $s(6) = \\int_0^6 (60-10t)dt = [60t-5t^2]_0^6 = 360 - 180 = 180$ เมตร"
  },
  {
    id: 320,
    question: "<b>[PISA 2]</b> รางรถไฟไฟฟ้ายกระดับมีโค้งความปลอดภัยตามสมการ $y = x^2 - 6x + 12$ เมื่อ $x$ คือระยะทางตามแนวราบ (กิโลเมตร) จุดที่รางมีความสูงต่ำที่สุดอยู่สูงกว่าแนวอ้างอิงกี่กิโลเมตร",
    options: ["3 กิโลเมตร", "6 กิโลเมตร", "12 กิโลเมตร", "4 กิโลเมตร"],
    correctIndex: 0,
    explanation: "หาจุดต่ำสุด $y' = 2x - 6 = 0 \\Rightarrow x = 3$ ความสูงต่ำสุด $y(3) = 3^2 - 6(3) + 12 = 9 - 18 + 12 = 3$ กิโลเมตร"
  },
  {
    id: 321,
    question: "<b>[PISA 3]</b> บริษัทผลิตสินค้ามีรายรับรวม $R(x) = 200x - x^2$ และต้นทุนรวม $C(x) = 40x + 500$ บาท บริษัทต้องผลิตและขายสินค้ากี่ชิ้นเพื่อให้ได้กำไรสูงสุด",
    options: ["80 ชิ้น", "100 ชิ้น", "160 ชิ้น", "200 ชิ้น"],
    correctIndex: 0,
    explanation: "กำไร $P(x) = R(x) - C(x) = 160x - x^2 - 500$ หาจุดสูงสุด $P'(x) = 160 - 2x = 0 \\Rightarrow x = 80$ ชิ้น"
  }
];

// ==========================================
// 3. โจทย์อัตนัยแสดงวิธีทำ (6 ข้อ)
// ==========================================
const subjectiveQuestions = [
  {
    id: 301,
    question: "<b>[อัตนัย ข้อ 1]</b> จงตรวจสอบความต่อเนื่องของฟังก์ชัน $f(x) = \\begin{cases} \\frac{x^2 - 9}{x - 3} & ; x \\ne 3 \\\\ 7 & ; x = 3 \\end{cases}$ ที่จุด $x = 3$",
    solution: `
      <p class="font-bold text-slate-800">วิธีทำ:</p>
      <p>1. หาค่าลิมิต $\\lim_{x \\to 3} f(x) = \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3}(x+3) = 6$</p>
      <p>2. หาค่าฟังก์ชัน $f(3) = 7$</p>
      <p>3. ตรวจสอบเงื่อนไข: จะเห็นว่า $\\lim_{x \\to 3} f(x) = 6 \\ne f(3) = 7$</p>
      <p class="font-bold text-rose-600 mt-2">สรุป: ฟังก์ชัน $f(x)$ ไม่ต่อเนื่องที่ $x = 3$</p>
    `
  },
  {
    id: 302,
    question: "<b>[อัตนัย ข้อ 2]</b> กำหนด $f(x) = \\begin{cases} ax^2 + 1 & ; x < 2 \\\\ 3x + b & ; x \\ge 2 \\end{cases}$ ถ้า $f$ ต่อเนื่องที่ $x = 2$ และ $f(3) = 11$ จงหาค่า $a$ และ $b$",
    solution: `
      <p class="font-bold text-slate-800">วิธีทำ:</p>
      <p>1. จาก $f(3) = 11$ (ใช้กรณี $x \\ge 2$): $3(3) + b = 11 \\Rightarrow 9 + b = 11 \\Rightarrow b = 2$</p>
      <p>2. ความต่อเนื่องที่ $x = 2$: ลิมิตซ้าย = ลิมิตขวา</p>
      <p>$$\\lim_{x \\to 2^-}(ax^2 + 1) = \\lim_{x \\to 2^+}(3x + b)$$</p>
      <p>$$a(2)^2 + 1 = 3(2) + 2 \\Rightarrow 4a + 1 = 8 \\Rightarrow 4a = 7 \\Rightarrow a = \\frac{7}{4}$$</p>
      <p class="font-bold text-emerald-700 mt-2">ตอบ: $a = \\frac{7}{4}$ และ $b = 2$</p>
    `
  },
  {
    id: 303,
    question: "<b>[อัตนัย ข้อ 3]</b> จงหาจุดสัมผัสและสมการเส้นสัมผัสโค้ง $y = 2x^2 - 4x + 3$ ที่มีความชันของเส้นสัมผัสเท่ากับ $4$",
    solution: `
      <p class="font-bold text-slate-800">วิธีทำ:</p>
      <p>1. หาอนุพันธ์ความชัน: $y' = 4x - 4$</p>
      <p>2. ให้ความชัน $m = 4 \\Rightarrow 4x - 4 = 4 \\Rightarrow 4x = 8 \\Rightarrow x = 2$</p>
      <p>3. หาค่า $y$: แทน $x=2$ ในสมการโค้ง $y = 2(2)^2 - 4(2) + 3 = 8 - 8 + 3 = 3$ ได้จุดสัมผัส $(2, 3)$</p>
      <p>4. สมการเส้นสัมผัส: $y - 3 = 4(x - 2) \\Rightarrow y = 4x - 5$</p>
      <p class="font-bold text-emerald-700 mt-2">ตอบ: จุดสัมผัสคือ $(2, 3)$ และสมการเส้นสัมผัสคือ $y = 4x - 5$</p>
    `
  },
  {
    id: 304,
    question: "<b>[อัตนัย ข้อ 4]</b> จงหาค่าสูงสุดสัมบูรณ์และต่ำสุดสัมบูรณ์ของ $f(x) = x^3 - 3x^2$ บนช่วงปิด $[-1, 3]$",
    solution: `
      <p class="font-bold text-slate-800">วิธีทำ:</p>
      <p>1. หาจุดวิกฤต: $f'(x) = 3x^2 - 6x = 3x(x - 2) = 0 \\Rightarrow x = 0, 2$</p>
      <p>2. ทดสอบค่า $f(x)$ ที่จุดวิกฤตและจุดขอบช่วง $[-1, 3]$:</p>
      <ul class="list-disc ml-5 space-y-1">
        <li>$f(-1) = (-1)^3 - 3(-1)^2 = -4$</li>
        <li>$f(0) = 0^3 - 3(0)^2 = 0$</li>
        <li>$f(2) = 2^3 - 3(2)^2 = -4$</li>
        <li>$f(3) = 3^3 - 3(3)^2 = 0$</li>
      </ul>
      <p class="font-bold text-emerald-700 mt-2">ตอบ: ค่าสูงสุดสัมบูรณ์เท่ากับ 0 (ที่ $x=0, 3$) และ ค่าต่ำสุดสัมบูรณ์เท่ากับ -4 (ที่ $x=-1, 2$)</p>
    `
  },
  {
    id: 305,
    question: "<b>[อัตนัย ข้อ 5]</b> วัตถุเคลื่อนที่แนวตรงมีความเร่ง $a(t) = 6t - 2$ m/s² ความเร็วเริ่มต้น $v(0) = 3$ m/s และระยะทางเริ่มต้น $s(0) = 1$ เมตร จงหาสมการระยะทาง $s(t)$",
    solution: `
      <p class="font-bold text-slate-800">วิธีทำ:</p>
      <p>1. หาความเร็ว $v(t) = \\int (6t - 2) dt = 3t^2 - 2t + C_1$</p>
      <p>แทน $v(0) = 3 \\Rightarrow C_1 = 3 \\Rightarrow v(t) = 3t^2 - 2t + 3$</p>
      <p>2. หาระยะทาง $s(t) = \\int (3t^2 - 2t + 3) dt = t^3 - t^2 + 3t + C_2$</p>
      <p>แทน $s(0) = 1 \\Rightarrow C_2 = 1$</p>
      <p class="font-bold text-emerald-700 mt-2">ตอบ: สมการระยะทางคือ $s(t) = t^3 - t^2 + 3t + 1$</p>
    `
  },
  {
    id: 306,
    question: "<b>[อัตนัย ข้อ 6]</b> จงหาพื้นที่ของบริเวณที่ปิดล้อมด้วยเส้นโค้ง $y = x^2$ และเส้นตรง $y = 2x$",
    solution: `
      <p class="font-bold text-slate-800">วิธีทำ:</p>
      <p>1. หาจุดตัด: $x^2 = 2x \\Rightarrow x^2 - 2x = 0 \\Rightarrow x(x - 2) = 0 \\Rightarrow x = 0, 2$</p>
      <p>2. ตั้งสมการหาพื้นที่ช่วง $[0, 2]$ (เส้นตรง $y=2x$ อยู่บนเส้นโค้ง $y=x^2$):</p>
      <p>$$\\text{Area} = \\int_{0}^{2} (2x - x^2) \\, dx$$</p>
      <p>3. คำนวณค่าอินทิเกรต:</p>
      <p>$$= \\left[ x^2 - \\frac{x^3}{3} \\right]_{0}^{2} = \\left( 4 - \\frac{8}{3} \\right) - 0 = \\frac{4}{3}$$</p>
      <p class="font-bold text-emerald-700 mt-2">ตอบ: พื้นที่ปิดล้อมเท่ากับ $\\frac{4}{3}$ ตารางหน่วย</p>
    `
  }
];

// ==========================================
// 4. ฟังก์ชันจัดการระบบและแสดงผล
// ==========================================
function renderMCQ() {
  const container = document.getElementById('mcq-container');
  const allMCQ = [...mcqQuestions, ...pisaQuestions];
  
  container.innerHTML = allMCQ.map((q, index) => `
    <div class="p-5 border border-slate-200 rounded-xl bg-slate-50/50">
      <p class="font-semibold text-slate-800 text-lg mb-3">${index + 1}. ${q.question}</p>
      <div class="space-y-2 mb-4">
        ${q.options.map((opt, i) => `
          <label class="flex items-center p-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 cursor-pointer transition">
            <input type="radio" name="mcq-${q.id}" value="${i}" class="w-4 h-4 text-indigo-600 focus:ring-indigo-500">
            <span class="ml-3 text-slate-700">${opt}</span>
          </label>
        `).join('')}
      </div>
      <button onclick="checkMCQAnswer(${q.id})" class="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition">
        ตรวจคำตอบ
      </button>
      <div id="result-${q.id}" class="hidden mt-4 p-4 rounded-lg text-sm"></div>
    </div>
  `).join('');
}

function checkMCQAnswer(qId) {
  const allMCQ = [...mcqQuestions, ...pisaQuestions];
  const q = allMCQ.find(item => item.id === qId);
  const selectedOption = document.querySelector(`input[name="mcq-${qId}"]:checked`);
  const resultDiv = document.getElementById(`result-${qId}`);

  if (!selectedOption) {
    alert("กรุณาเลือกคำตอบก่อนตรวจครับ");
    return;
  }

  const selectedIndex = parseInt(selectedOption.value);
  resultDiv.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-900', 'bg-rose-50', 'text-rose-900', 'border-emerald-200', 'border-rose-200');

  if (selectedIndex === q.correctIndex) {
    resultDiv.classList.add('bg-emerald-50', 'text-emerald-900', 'border', 'border-emerald-200');
    resultDiv.innerHTML = `
      <p class="font-bold text-emerald-800">✓ ถูกต้อง!</p>
      <p class="mt-1">${q.explanation}</p>
    `;
  } else {
    resultDiv.classList.add('bg-rose-50', 'text-rose-900', 'border', 'border-rose-200');
    resultDiv.innerHTML = `
      <p class="font-bold text-rose-800">✕ คำตอบยังไม่ถูกต้อง</p>
      <p class="mt-1">ลองคำนวณทบทวนดูอีกครั้งครับ</p>
    `;
  }

  if (window.MathJax) {
    MathJax.typesetPromise([resultDiv]);
  }
}

function renderSubjective() {
  const container = document.getElementById('subjective-container');
  container.innerHTML = subjectiveQuestions.map((q) => `
    <div class="p-5 border border-slate-200 rounded-xl bg-slate-50/50">
      <p class="font-semibold text-slate-800 text-lg mb-3">${q.question}</p>
      <button onclick="toggleSolution(${q.id})" class="px-4 py-2 bg-slate-700 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition">
        แสดงเฉลยและวิธีทำ
      </button>
      <div id="sol-${q.id}" class="hidden mt-4 p-4 bg-emerald-50/60 border-l-4 border-emerald-500 rounded-r-lg text-slate-700 text-sm">
        ${q.solution}
      </div>
    </div>
  `).join('');
}

function toggleSolution(qId) {
  const solDiv = document.getElementById(`sol-${qId}`);
  solDiv.classList.toggle('hidden');
}

window.onload = function() {
  renderMCQ();
  renderSubjective();
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
};

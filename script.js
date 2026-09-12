// ==========================================
// 1. คลังข้อมูลโจทย์ปรนัยปกติ ชุดใหม่ (18 ข้อ)
// ==========================================
const mcqQuestions = [
  {
    id: 101,
    question: "จงหาค่าของ $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$",
    options: ["0", "5", "10", "หาค่าไม่ได้"],
    correctIndex: 2,
    explanation: "แยกตัวประกอบเศษได้ $(x-5)(x+5)$ ตัดกับส่วน $(x-5)$ จะเหลือ $\\lim_{x \\to 5}(x+5) = 10$"
  },
  {
    id: 102,
    question: "จงหาค่าของ $\\lim_{x \\to 1} \\frac{\\sqrt{x+3} - 2}{x - 1}$ โดยใช้การทำสังยุค (Conjugate)",
    options: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "1", "0"],
    correctIndex: 0,
    explanation: "คูณด้วย $\\frac{\\sqrt{x+3}+2}{\\sqrt{x+3}+2}$ ได้เศษเป็น $x-1$ ตัดกับส่วน เหลือ $\\lim_{x \\to 1}\\frac{1}{\\sqrt{x+3}+2} = \\frac{1}{4}$"
  },
  {
    id: 103,
    question: "กำหนดให้ $f(x) = \\begin{cases} 3x - 1 & ; x < 1 \\\\ x^2 + 1 & ; x \\ge 1 \\end{cases}$ ข้อใดถูกต้องเกี่ยวกับความต่อเนื่องที่ $x = 1$",
    options: ["ต่อเนื่อง เพราะ $\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^+} f(x) = f(1) = 2$", "ไม่ต่อเนื่อง เพราะ $\\lim_{x \\to 1^-} f(x) \\ne \\lim_{x \\to 1^+} f(x)$", "ไม่ต่อเนื่อง เพราะหาค่า $f(1)$ ไม่ได้", "ต่อเนื่อง เพราะลิมิตขวาเท่ากับ 3"],
    correctIndex: 0,
    explanation: "ลิมิตซ้าย = $3(1)-1 = 2$, ลิมิตขวา = $1^2+1 = 2$, และ $f(1) = 2$ ดังนั้น ฟังก์ชันต่อเนื่องที่ $x=1$"
  },
  {
    id: 104,
    question: "ถ้า $f(x) = \\begin{cases} kx + 2 & ; x \\le 2 \\\\ 2x^2 - 4 & ; x > 2 \\end{cases}$ เป็นฟังก์ชันต่อเนื่องที่ $x = 2$ แล้ว $k$ มีค่าเท่าใด",
    options: ["1", "2", "3", "4"],
    correctIndex: 0,
    explanation: "จับลิมิตซ้ายเท่ากับลิมิตขวา: $k(2) + 2 = 2(2)^2 - 4 \\Rightarrow 2k + 2 = 4 \\Rightarrow 2k = 2 \\Rightarrow k = 1$"
  },
  {
    id: 105,
    question: "อนุพันธ์ของ $f(x) = 2x^6 - 4x^4 + 5x^2 - 9$ เท่ากับข้อใด",
    options: ["$12x^5 - 16x^3 + 10x$", "$12x^5 - 16x^3 + 10$", "$2x^5 - 4x^3 + 5x$", "$12x^6 - 16x^4 + 10x$"],
    correctIndex: 0,
    explanation: "ดิฟทีละพจน์: $f'(x) = 6(2)x^5 - 4(4)x^3 + 2(5)x - 0 = 12x^5 - 16x^3 + 10x$"
  },
  {
    id: 106,
    question: "กำหนด $f(x) = (2x^2 - 1)(x + 4)$ จงหาค่าของ $f'(x)$ โดยใช้สูตรดิฟผลคูณ",
    options: ["$6x^2 + 16x - 1$", "$6x^2 + 8x - 1$", "$4x^2 + 16x$", "$6x^2 - 16x + 1$"],
    correctIndex: 0,
    explanation: "หน้าดิฟหลัง + หลังดิฟหน้า: $(2x^2-1)(1) + (x+4)(4x) = 2x^2 - 1 + 4x^2 + 16x = 6x^2 + 16x - 1$"
  },
  {
    id: 107,
    question: "อนุพันธ์ของ $f(x) = \\frac{3x - 2}{x + 1}$ เท่ากับข้อใด",
    options: ["$\\frac{5}{(x+1)^2}$", "$\\frac{1}{(x+1)^2}$", "$\\frac{-5}{(x+1)^2}$", "$\\frac{5}{x+1}$"],
    correctIndex: 0,
    explanation: "ใช้สูตรลัด linear fraction $\\frac{ad-bc}{(cx+d)^2} = \\frac{(3)(1) - (-2)(1)}{(x+1)^2} = \\frac{5}{(x+1)^2}$"
  },
  {
    id: 108,
    question: "อนุพันธ์ของ $f(x) = (2x^3 + 1)^5$ โดยใช้กฎลูกโซ่ มีค่าเท่าใด",
    options: ["$30x^2(2x^3 + 1)^4$", "$10x^2(2x^3 + 1)^4$", "$30x(2x^3 + 1)^4$", "$5(2x^3 + 1)^4$"],
    correctIndex: 0,
    explanation: "ดิฟนอกตามด้วยดิฟไส้: $5(2x^3+1)^4 \\cdot \\frac{d}{dx}(2x^3+1) = 5(2x^3+1)^4 (6x^2) = 30x^2(2x^3+1)^4$"
  },
  {
    id: 109,
    question: "กำหนดให้ $f(x) = x^4 - 2x^3 + 4x^2$ จงหาอนุพันธ์อันดับสอง $f''(x)$",
    options: ["$12x^2 - 12x + 8$", "$4x^3 - 6x^2 + 8x$", "$12x^2 - 6x + 8$", "$24x - 12$"],
    correctIndex: 0,
    explanation: "$f'(x) = 4x^3 - 6x^2 + 8x$ ดิฟต่อครั้งที่สองได้ $f''(x) = 12x^2 - 12x + 8$"
  },
  {
    id: 110,
    question: "ความชันของเส้นสัมผัสโค้ง $y = 2x^3 - 5x + 3$ ที่จุด $(1, 0)$ มีค่าเท่าใด",
    options: ["1", "6", "-5", "3"],
    correctIndex: 0,
    explanation: "ความชัน $m = y'(x) = 6x^2 - 5$ แทนค่า $x = 1$ ได้ $m = 6(1)^2 - 5 = 1$"
  },
  {
    id: 111,
    question: "เส้นตรงที่ตั้งฉากกับเส้นสัมผัสโค้ง $y = 3x^2 - 1$ ที่จุด $(1, 2)$ มีความชันเท่าใด",
    options: ["$-\\frac{1}{6}$", "6", "-6", "$\\frac{1}{6}$"],
    correctIndex: 0,
    explanation: "$y' = 6x \\Rightarrow m_{สัมผัส} = 6(1) = 6$ ดังนั้น เส้นตั้งฉากมีความชัน $m_{\\perp} = -\\frac{1}{6}$"
  },
  {
    id: 112,
    question: "ฟังก์ชัน $f(x) = x^3 - 12x$ เป็นฟังก์ชันลด บนช่วงใด",
    options: ["$(-2, 2)$", "$(-\\infty, -2)$", "$(2, \\infty)$", "$(-12, 12)$"],
    correctIndex: 0,
    explanation: "$f'(x) = 3x^2 - 12 = 3(x-2)(x+2) < 0$ เมื่อ $x$ อยู่ในช่วง $(-2, 2)$"
  },
  {
    id: 113,
    question: "จุดวิกฤตของฟังก์ชัน $f(x) = 2x^3 - 9x^2 + 12x$ เกิดขึ้นที่ค่า $x$ ใดบ้าง",
    options: ["$x = 1, 2$", "$x = 0, 3$", "$x = -1, 2$", "$x = 2, 3$"],
    correctIndex: 0,
    explanation: "หาจุดวิกฤตจาก $f'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x-1)(x-2) = 0 \\Rightarrow x = 1, 2$"
  },
  {
    id: 114,
    question: "สมการการเคลื่อนที่แนวตรง $s(t) = 2t^3 - 9t^2 + 12t$ จงหาความเร็ว $v(t)$ ขณะเวลา $t = 1$ วินาที",
    options: ["0 m/s", "3 m/s", "5 m/s", "-3 m/s"],
    correctIndex: 0,
    explanation: "ความเร็ว $v(t) = s'(t) = 6t^2 - 18t + 12$ แทน $t = 1$ ได้ $v(1) = 6(1) - 18(1) + 12 = 0$ m/s"
  },
  {
    id: 115,
    question: "จงหาค่าอินทิเกรตไม่จำกัดเขต $\\int (9x^2 + 2x - 4) \\, dx$",
    options: ["$3x^3 + x^2 - 4x + C$", "$9x^3 + 2x^2 - 4x + C$", "$3x^3 + 2x^2 - 4x + C$", "$3x^3 + x^2 + C$"],
    correctIndex: 0,
    explanation: "ใช้นิพจน์ $\\int x^n dx = \\frac{x^{n+1}}{n+1}+C$ ได้ $\\frac{9x^3}{3} + \\frac{2x^2}{2} - 4x + C = 3x^3 + x^2 - 4x + C$"
  },
  {
    id: 116,
    question: "จงหาค่าอินทิเกรตจำกัดเขต $\\int_{0}^{2} (4x^3) \\, dx$",
    options: ["16", "8", "32", "12"],
    correctIndex: 0,
    explanation: "$\\int_{0}^{2} 4x^3 dx = [x^4]_0^2 = 2^4 - 0^4 = 16$"
  },
  {
    id: 117,
    question: "วัตถุเคลื่อนที่ด้วยความเร่ง $a(t) = 12t$ ถ้าความเร็วเริ่มต้น $v(0) = 5$ m/s แล้ว สมการความเร็ว $v(t)$ คือข้อใด",
    options: ["$v(t) = 6t^2 + 5$", "$v(t) = 12t^2 + 5$", "$v(t) = 6t^2$", "$v(t) = 12t + 5$"],
    correctIndex: 0,
    explanation: "$v(t) = \\int a(t) dt = 6t^2 + C$ โดยที่ $v(0) = 5 \\Rightarrow C = 5$ ดังนั้น $v(t) = 6t^2 + 5$"
  },
  {
    id: 118,
    question: "พื้นที่ที่ปิดล้อมด้วยเส้นโค้ง $y = 3x^2$ จาก $x = 0$ ถึง $x = 2$ บนแกน X มีค่ากี่ตารางหน่วย",
    options: ["8", "12", "6", "24"],
    correctIndex: 0,
    explanation: "Area $= \\int_0^2 3x^2 dx = [x^3]_0^2 = 2^3 - 0 = 8$"
  }
];

// ==========================================
// 2. คลังข้อมูลโจทย์ปรนัย PISA ชุดใหม่ (3 ข้อ)
// ==========================================
const pisaQuestions = [
  {
    id: 119,
    question: "<b>[PISA 1]</b> โดรนสำรวจลำหนึ่งเคลื่อนที่ลงในแนวตรงด้วยความเร็ว $v(t) = 40 - 10t$ m/s โดรนลำนี้จะหยุดเคลื่อนที่ ($v=0$) เมื่อเวลาผ่านไปกี่วินาที และระยะทางรวมที่โดรนเคลื่อนที่ได้ก่อนหยุดเป็นกี่เมตร",
    options: ["หยุดใน 4 วินาที, ระยะทาง 80 เมตร", "หยุดใน 4 วินาที, ระยะทาง 160 เมตร", "หยุดใน 5 วินาที, ระยะทาง 100 เมตร", "หยุดใน 2 วินาที, ระยะทาง 40 เมตร"],
    correctIndex: 0,
    explanation: "หยุดเมื่อ $v(t)=0 \\Rightarrow 40-10t=0 \\Rightarrow t=4$ วินาที ระยะทาง $s(4) = \\int_0^4 (40-10t)dt = [40t-5t^2]_0^4 = 160 - 80 = 80$ เมตร"
  },
  {
    id: 120,
    question: "<b>[PISA 2]</b> สะพานแขวนแห่งหนึ่งมีสายเคเบิลหลักโค้งเป็นรูปร่างตามสมการ $y = 0.5x^2 - 4x + 10$ เมื่อ $x$ คือระยะทางจากแนวจุดเริ่มต้น (เมตร) จุดที่สายเคเบิลอยู่ต่ำที่สุดจากแนวอ้างอิงอยู่ที่ความสูงกี่เมตร",
    options: ["2 เมตร", "4 เมตร", "10 เมตร", "1.5 เมตร"],
    correctIndex: 0,
    explanation: "หาจุดต่ำสุดจาก $y' = x - 4 = 0 \\Rightarrow x = 4$ ความสูงต่ำสุด $y(4) = 0.5(4)^2 - 4(4) + 10 = 8 - 16 + 10 = 2$ เมตร"
  },
  {
    id: 121,
    question: "<b>[PISA 3]</b> โรงงานผลิตอุปกรณ์ไอทีมีฟังก์ชันรายรับรวม $R(x) = 150x - 2x^2$ และฟังก์ชันต้นทุนรวม $C(x) = 30x + 200$ บาท ผู้จัดการต้องผลิตสินค้ากี่ชิ้นจึงจะได้ 'กำไรสูงสุด'",
    options: ["30 ชิ้น", "40 ชิ้น", "60 ชิ้น", "75 ชิ้น"],
    correctIndex: 0,
    explanation: "กำไร $P(x) = R(x) - C(x) = 120x - 2x^2 - 200$ หาจุดสูงสุดดิฟกำไร $P'(x) = 120 - 4x = 0 \\Rightarrow x = 30$ ชิ้น"
  }
];

// ==========================================
// 3. คลังข้อมูลโจทย์อัตนัยแสดงวิธีทำ ชุดใหม่ (6 ข้อ)
// ==========================================
const subjectiveQuestions = [
  {
    id: 101,
    question: "<b>[อัตนัย ข้อ 1]</b> จงตรวจสอบความต่อเนื่องของฟังก์ชัน $f(x) = \\begin{cases} \\frac{x^2 - 4}{x - 2} & ; x \\ne 2 \\\\ 5 & ; x = 2 \\end{cases}$ ที่จุด $x = 2$",
    solution: `
      <p class="font-bold text-slate-800">วิธีทำ:</p>
      <p>1. หาค่าลิมิต $\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2}(x+2) = 4$</p>
      <p>2. หาค่าฟังก์ชันที่จุดนั้น $f(2) = 5$</p>
      <p>3. ตรวจสอบเงื่อนไข: จะเห็นว่า $\\lim_{x \\to 2} f(x) = 4 \\ne f(2) = 5$</p>
      <p class="font-bold text-rose-600 mt-2">สรุป: ฟังก์ชัน $f(x)$ ไม่ต่อเนื่องที่ $x = 2$</p>
    `
  },
  {
    id: 102,
    question: "<b>[อัตนัย ข้อ 2]</b> กำหนด $f(x) = \\begin{cases} mx^2 + 2 & ; x < 1 \\\\ 4x + n & ; x \\ge 1 \\end{cases}$ ถ้า $f$ ต่อเนื่องที่ $x = 1$ และ $f(2) = 10$ จงหาค่า $m$ และ $n$",
    solution: `
      <p class="font-bold text-slate-800">วิธีทำ:</p>
      <p>1. จาก $f(2) = 10$ (ใช้กรณี $x \\ge 1$): $4(2) + n = 10 \\Rightarrow 8 + n = 10 \\Rightarrow n = 2$</p>
      <p>2. ความต่อเนื่องที่ $x = 1$: ลิมิตซ้าย = ลิมิตขวา</p>
      <p>$$\\lim_{x \\to 1^-}(mx^2 + 2) = \\lim_{x \\to 1^+}(4x + n)$$</p>
      <p>$$m(1)^2 + 2 = 4(1) + 2 \\Rightarrow m + 2 = 6 \\Rightarrow m = 4$$</p>
      <p class="font-bold text-emerald-700 mt-2">ตอบ: $m = 4$ และ $n = 2$</p>
    `
  },
  {
    id: 103,
    question: "<b>[อัตนัย ข้อ 3]</b> จงหาจุดสัมผัสและสมการเส้นสัมผัสโค้ง $y = 3x^2 - 6x + 2$ ที่มีความชันของเส้นสัมผัสเท่ากับ $6$",
    solution: `
      <p class="font-bold text-slate-800">วิธีทำ:</p>
      <p>1. หาความชันจากการดิฟ: $y' = 6x - 6$</p>
      <p>2. โจทย์กำหนดความชัน $m = 6 \\Rightarrow 6x - 6 = 6 \\Rightarrow 6x = 12 \\Rightarrow x = 2$</p>
      <p>3. หาพิกัด $y$: แทน $x=2$ ในสมการโค้ง $y = 3(2)^2 - 6(2) + 2 = 12 - 12 + 2 = 2$ ได้จุดสัมผัสคือ $(2, 2)$</p>
      <p>4. หาสมการเส้นตรง: $y - y_1 = m(x - x_1) \\Rightarrow y - 2 = 6(x - 2) \\Rightarrow y = 6x - 10$</p>
      <p class="font-bold text-emerald-700 mt-2">ตอบ: จุดสัมผัสคือ $(2, 2)$ และสมการเส้นสัมผัสคือ $y = 6x - 10$</p>
    `
  },
  {
    id: 104,
    question: "<b>[อัตนัย ข้อ 4]</b> จงหาจุดสูงสุดสัมพัทธ์ จุดต่ำสุดสัมพัทธ์ และค่าสูงสุด-ต่ำสุดสัมบูรณ์ของ $f(x) = 2x^3 - 3x^2$ บนช่วงปิด $[-1, 2]$",
    solution: `
      <p class="font-bold text-slate-800">วิธีทำ:</p>
      <p>1. หาจุดวิกฤต: $f'(x) = 6x^2 - 6x = 6x(x - 1) = 0 \\Rightarrow x = 0, 1$ (อยู่ในช่วง $[-1, 2]$)</p>
      <p>2. คำนวณค่า $f(x)$ ที่จุดวิกฤตและจุดขอบช่วง:</p>
      <ul class="list-disc ml-5 space-y-1">
        <li>$f(-1) = 2(-1)^3 - 3(-1)^2 = -5$</li>
        <li>$f(0) = 2(0)^3 - 3(0)^2 = 0$ (สูงสุดสัมพัทธ์)</li>
        <li>$f(1) = 2(1)^3 - 3(1)^2 = -1$ (ต่ำสุดสัมพัทธ์)</li>
        <li>$f(2) = 2(2)^3 - 3(2)^2 = 4$</li>
      </ul>
      <p class="font-bold text-emerald-700 mt-2">ตอบ: ค่าสูงสุดสัมบูรณ์ = 4 (ที่ $x=2$) และ ค่าต่ำสุดสัมบูรณ์ = -5 (ที่ $x=-1$)</p>
    `
  },
  {
    id: 105,
    question: "<b>[อัตนัย ข้อ 5]</b> วัตถุชิ้นหนึ่งเคลื่อนที่ตามแนวตรงด้วยความเร่ง $a(t) = 12t - 4$ m/s² ขณะเวลา $t = 0$ วัตถุมีความเร็ว $v(0) = 2$ m/s และระยะทาง $s(0) = 5$ เมตร จงหาสมการระยะทาง $s(t)$",
    solution: `
      <p class="font-bold text-slate-800">วิธีทำ:</p>
      <p>1. อินทิเกรตหาความเร็ว $v(t) = \\int (12t - 4) dt = 6t^2 - 4t + C_1$</p>
      <p>แทน $v(0) = 2 \\Rightarrow C_1 = 2 \\Rightarrow v(t) = 6t^2 - 4t + 2$</p>
      <p>2. อินทิเกรตหาตำแหน่ง/ระยะทาง $s(t) = \\int (6t^2 - 4t + 2) dt = 2t^3 - 2t^2 + 2t + C_2$</p>
      <p>แทน $s(0) = 5 \\Rightarrow C_2 = 5$</p>
      <p class="font-bold text-emerald-700 mt-2">ตอบ: สมการระยะทางคือ $s(t) = 2t^3 - 2t^2 + 2t + 5$ (ห้ามลืมบวกค่าคงตัว C ระหว่างขั้นตอนการคิด)</p>
    `
  },
  {
    id: 106,
    question: "<b>[อัตนัย ข้อ 6]</b> จงเขียนแสดงการตั้งขอบเขตอินทิเกรต พร้อมคำนวณหาพื้นที่ของบริเวณที่ปิดล้อมด้วยเส้นโค้ง $y = x^2$ และเส้นตรง $y = x + 2$",
    solution: `
      <p class="font-bold text-slate-800">วิธีทำ:</p>
      <p>1. หาจุดตัดของกราฟทั้งสอง: $x^2 = x + 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1) = 0 \\Rightarrow x = -1, 2$</p>
      <p>2. ตั้งสมการหาพื้นที่ (เส้นบน - เส้นล่างในช่วง $[-1, 2]$ โดยเส้นตรงอยู่บนเส้นโค้ง):</p>
      <p>$$\\text{Area} = \\int_{-1}^{2} [(x + 2) - x^2] \\, dx$$</p>
      <p>3. อินทิเกรตคำนวณค่า:</p>
      <p>$$= \\left[ \\frac{x^2}{2} + 2x - \\frac{x^3}{3} \\right]_{-1}^{2}$$</p>
      <p>$$= \\left( 2 + 4 - \\frac{8}{3} \\right) - \\left( \\frac{1}{2} - 2 + \\frac{1}{3} \\right) = \\frac{10}{3} - \\left( -\\frac{7}{6} \\right) = \\frac{9}{2} = 4.5$$</p>
      <p class="font-bold text-emerald-700 mt-2">ตอบ: พื้นที่ปิดล้อมเท่ากับ $\\frac{9}{2}$ หรือ $4.5$ ตารางหน่วย</p>
    `
  }
];

// ==========================================
// 4. ระบบแสดงผลและประมวลผล (Render Logic)
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
  container.innerHTML = subjectiveQuestions.map((q, index) => `
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
import { TiStarburst } from 'react-icons/ti';

const skill = [
  {
    id: 1,
    skillname : "PEMROGRAMAN WEB",
    desc: 'Menguasai HTML, CSS, JavaScript, dan berbagai framework seperti Bootstrap, serta memiliki pengalaman dalam menggunakan pustaka dan framework JavaScript',
  },
  {
    id: 2,
    skillname : "UX RESEARCHER",
    desc: 'Melalui berbagai proyek akademik dan praktis, saya telah mengembangkan kompetensi yang diperlukan untuk mengidentifikasi kebutuhan pengguna dan mengembangkan solusi desain yang berpusat pada pengguna.',
  },{
    id: 3,
    skillname : "TEKNOLOGI INTERNET",
    desc: 'Memahami konsep jaringan komputer, protokol komunikasi, serta keamanan web dan teknik enkripsi untuk melindungi data pengguna.',
  },{
    id: 4,
    skillname : "DATABASE MANAGEMENT",
    desc: 'Berpengalaman dalam merancang, mengimplementasikan, dan mengelola database menggunakan MySQL, dan MongoDB.',
  },
];


export default function Experience() {
  return (
    <>
      <div id="skill" className="pb-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center pb-8">
          SKILL
        </h1>
        {skill.map((w) => (
          <div
            className="flex flex-col gap-4 md:gap:0 md:flex-row justify-between py-16 border-b-2 border-[#A6A6A6]"
            key={w.id}
          >
            <div className="flex flex-row gap-2">
              <TiStarburst className="text-lg md:text-xl"/>
              <div className="flex flex-row text-2xl md:text-4xl playfair">
                <h1>{w.skillname}</h1>
              </div>
            </div>
            <div className="flex flex-col md:w-1/2 gap-8">
              <h3 className="font-medium">{w.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

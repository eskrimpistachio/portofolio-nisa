'use client';

const texts =
  'Saya adalah seorang mahasiswa aktif pada Program Studi Pendidikan Teknologi Informasi, Fakultas Ilmu Komputer, Universitas Brawijaya, angkatan 2022. Selama menempuh studi di Universitas ini, saya telah memperoleh berbagai pengetahuan dan keterampilan yang mendalam di bidang teknologi informasi dan pemrograman. \n Saya telah mengikuti berbagai mata kuliah yang relevan, termasuk Pemrograman Web dan Teknologi Internet. Dalam mata kuliah ini, saya telah mempelajari dasar-dasar dan teknik lanjutan dalam pengembangan aplikasi web, serta memahami berbagai teknologi internet yang mendukung proses pengembangan tersebut.';

const text = texts.split('\n');

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-16 md:w-3/4 satoshi">
        <div className="flex flex-col gap-4 text-justify">
          {text.map((t) => (
            <p key={t.id}>{t}</p>
          ))}
        </div>
      </div>
    </>
  );
}

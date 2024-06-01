import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <div className="py-8">
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <h1 className="font-bold text-7xl">
            <span className="playfair font-normal">PROJECTS</span>
          </h1>
        </div>
        <div className="my-16 flex flex-col gap-24">
          <div className="flex flex-col md:flex-row gap-8">
            <Image
              src={'/synapse1.png'}
              width={600}
              height={400}
              alt="missing img"
              className="rounded-2xl"
            />
            <div className="flex flex-col gap-10 satoshi">
              <div>
                <h1 className="text-6xl font-bold">SYNAPSE</h1>
              </div>
              <div className="flex flex-col gap-4 w-3/4">
                <p>
                  Synapse adalah sebuah website yang akan menampilkan informasi
                  tentang berbagai pilihan karir dalam bidang teknologi
                  informasi, tips memasuki dunia kerja, serta tren industri
                  terkini yang dapat membantu siswa membuat keputusan yang lebih
                  informasi.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse  gap-8">
            <Image
              src={'/synapse2.png'}
              width={600}
              height={400}
              alt="missing img"
              className="rounded-2xl"
            />
            <div className="flex flex-col gap-10 satoshi">
              <div>
                <h1 className="text-6xl font-bold">SYNAPSE</h1>
              </div>
              <div className="flex flex-col gap-4 w-3/4">
                <p>
                  Synapse adalah memiliki beberapa macam fitur yang dapat
                  digunakan yaitu pilihan karir, pilihan jurusan, dan terdapat
                  beberapa tes yang dapat dicoba. Selain itu, juga terdapat
                  berbagai macam informasi mengenai prospek pilihan karir
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <Image
              src={'/synapse3.png'}
              width={600}
              height={400}
              alt="missing img"
              className="rounded-2xl"
            />
            <div className="flex flex-col gap-10 satoshi">
              <div>
                <h1 className="text-6xl font-bold">SYNAPSE</h1>
              </div>
              <div className="flex flex-col gap-4 w-3/4">
                <div class="flex flex-col">
                  Terdapat beberapa tes yang disediakan, yaitu:
                  <ol className='my-8 flex flex-col ml-8 list-disc gap-8'>
                    <li>
                      <span className='font-bold'>Tes Minat Bakat</span> : Tes ini tujuannya buat bantuin kamu
                      nentuin jalur karir yang paling cocok, berdasarkan apa
                      yang kamu suka. Jadi, nanti kamu bisa milih karir yang
                      lebih matang dan pas, yang bakalan bikin kamu lebih puas
                      dan sukses di dunia kerja. Gak cuma asal pilih, tapi
                      pilihan berdasarkan minat dan bakatmu sendiri!
                    </li>
                    <li>
                      <span className='font-bold'>Tes Gaya Belajar :</span> Tes gaya belajar itu seperti panduan
                      buat kamu ngerti gimana cara kamu paling jago menyerap
                      ilmu.Jadi, gak semua orang belajarnya sama, kan? Ada yang
                      lebih mudah paham kalo lihat gambar atau video, ada juga
                      yang lebih suka dengerin instruksi atau baca
                      teks.Pokoknya, tes ini keren banget buat bikin kamu jadi
                      lebih tahu cara belajar yang buat kamu lebih nyaman dan
                      produktif!
                    </li>
                    <li>
                      <span className='font-bold'>Tes MBTI :</span> Tes MBTI seperti temen ngobrol yang bisa kasih
                      tau kamu lebih dalam tentang diri sendiri. Jadi, tes ini
                      mengelompokkan orang berdasarkan 16 tipe kepribadian yang
                      berbeda-beda, dan masing-masing punya ciri khas sendiri
                      dalam cara berpikir, bersosialisasi, dan mengambil
                      keputusan. Dengan ngerti tipe kepribadianmu, kamu bisa
                      lebih gampang ngerti kenapa kamu bertingkah atau merasa
                      tertentu di situasi tertentu.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('./components/About'), {
  ssr: false,
});

const Skill = dynamic(() => import('./components/Skill'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row py-4 gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Image
              className="hidden md:flex"
              src="/fotodiri.png"
              width={250}
              height={250}
              alt="Foto Diri"
            />
            {/* <h6 className="satoshi w-4/5">
              More of my experience and abilities in the summary of the work I
              have done
            </h6> */}
            {/* <a
              href="https://drive.google.com/file/d/1RlJ22mPFDR2_4bCpmoWVesHfRS4MnQnP/view?usp=sharing"
              className="flex flex-row gap-2 playfair hover:font-bold"
            >
              <h6>DOWNLOAD CV</h6>
              <FaArrowRight className="text-lg mt-1" />
            </a> */}
          </div>
          <h6 className="playfair">&quot;NICE TO MEET YOU &quot;</h6>
        </div>
        <div className="playfair text-7xl md:text-8xl flex flex-col gap-2">
          <h1 className="md:w-3/4">HELLO, MY NAME IS</h1>
          <div className="bg-[#FF7A00] p-1 font-normal w-1/2 md:w-1/3 playfair">
            <h1>NISA</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Image
          className="animate-bounce"
          src={'/scrolldown.png'}
          width={80}
          height={80}
          alt="missing img"
        />
      </div>
      <div
        id="about"
        className="flex flex-col gap-8 md:gap-0 md:flex-row py-16 mb-16"
      >
        <div className="text-6xl md:w-[35%]">
          <h1 className="font-bold">ABOUT MY</h1>
          <h1 className="playfair">SELF</h1>
        </div>
        <About id="about"/>
      </div>
      <Skill id="skill"/>
    </div>
  );
}

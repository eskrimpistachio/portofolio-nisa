import { FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Footer() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col md:flex-row justify-between satoshi pt-32 pb-8 gap-16 md:gap-0"
      >
        <div className="flex text-center md:text-left flex-col gap-8">
          <div className="text-4xl">
            <h1 className="font-bold">CONTACT</h1>
            <h1 className="playfair">ME</h1>
          </div>

          <p className="text-[#A6A6A6]">
            © Design by Fatih. All rights reserved
          </p>
        </div>
        <div className="flex text-center md:text-normal flex-col gap-4">
          <div className="flex flex-row gap-8 text-4xl">
            <FaInstagram />
            <a
              className="text-2xl"
              href="https://www.instagram.com/choirulnissaa/"
            >
              @choirulnissa
            </a>
          </div>
          <div className="flex flex-row md:flex-row gap-8 text-4xl">
            <SiGmail />
            <a className="text-2xl" href="mailto:nhartanto26@gmail.com">
              nhartanto26@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

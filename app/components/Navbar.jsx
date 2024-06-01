'use client';
import { usePathname } from 'next/navigation';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { React, useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

export default function ComplexNavbar() {
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious();

    if (latest > prev) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35 }}
        className="z-5 top-0 pt-4 pb-4 duration-500 fixed w-full bg-[#60073C]"
      >
        <nav className="flex flex-row justify-between py-2">
          <div className="flex flex-row gap-16  text-white">
            <div className="flex">
              <Link href="/">
                <h1 className="playfair text-2xl">NISA</h1>
              </Link>
            </div>

            <div className="hidden lg:flex font-regular py-1">
              <ul className="flex flex-row justify-evenly gap-10">
                <li className="hover:border-b-2 border-white ">
                  <Link href="/#about">About</Link>
                </li>
                <li className="hover:border-b-2 border-white ">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="hover:border-b-2 border-white ">
                  <Link href="/#skill">Skill</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:flex flex-row gap-8 mr-32 text-2xl font-regular py-2">
            <a className="hover:scale-110" href="https://www.linkedin.com/">
              <FaLinkedin />
            </a>
            <a className="hover:scale-110" href="https://www.instagram.com/">
              <FaInstagram />
            </a>
            <a className="hover:scale-110" href="https://twitter.com/">
              <FaTwitter />
            </a>
          </div>

          {/* For Mobile Responsive */}
          <div
            className="flex lg:hidden text-2xl py-1 mr-24"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <IoMdClose /> : <GiHamburgerMenu />}
          </div>
          <div
            className={`w-full z-[-1] rounded-lg py-4 bg-[#60073C] absolute flex flex-col gap-4 lg:hidden font-semibold ${
              open ? 'top-18' : 'top-[-490px]'
            }`}
          >
            <div className="lg:hidden flex flex-col font-normal mt-10">
              <ul className="flex flex-col justify-evenly gap-10">
                <li>
                  <Link
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className={pathname == '/#about' ? 'font-bold' : ''}
                    href="/#about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className={pathname == '/#projects' ? 'font-bold' : ''}
                    href="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className={pathname == '/#skill' ? 'font-bold' : ''}
                    href="/#skill"
                  >
                    Skill
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:hidden flex flex-row gap-8 mr-32 text-2xl font-regular py-2">
              <a
                className="hover:scale-110"
                href="https://www.linkedin.com/in/"
              >
                <FaLinkedin />
              </a>
              <a className="hover:scale-110" href="https://www.instagram.com/">
                <FaInstagram />
              </a>
              <a className="hover:scale-110" href="https://twitter.com/">
                <FaTwitter />
              </a>
            </div>
          </div>
          {/* For Mobile Responsive */}
        </nav>
      </motion.nav>
    </>
  );
}

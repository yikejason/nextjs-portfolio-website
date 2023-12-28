'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const downloadUrl = '/person/resume.pdf';

const HeadSection = () => {
  const downLoadResume = (url) => {
    const fileName = url.split('/').pop();
    const tagA = document.createElement('a');
    tagA.href = url;
    tagA.setAttribute('download', fileName);
    tagA.click();
    tagA.remove();
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left just-self-start mb-8 sm:mb-0"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {"Hello I'm"}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Jason',
                1000,
                'Front-end Developer',
                1000,
                'Back-end Developer',
                1000,
                'Full-stack Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            This is my portfolio
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-primary-500 to-secondary-500 lg:mt-0 bg-white hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-primary-500 to-secondary-500 bg-transparent hover:bg-slate-800 text-white mt-3"
              onClick={() => downLoadResume(downloadUrl)}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/head-image.png"
              alt="head image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={600}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeadSection;


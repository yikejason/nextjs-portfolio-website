'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers');
  },
  {
    ssr: false,
  },
);

const achievementsList = [
  {
    title: 'Projects',
    value: '100',
    postfix: '+',
  },
  {
    prefix: '~',
    title: 'Users',
    value: '100,00',
  },
  {
    title: 'Awards',
    value: '6',
  },
  {
    title: 'Years',
    value: '5',
  },
];
const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center just-content mx-4"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {item.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(item.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                    };
                  }}
                />
                {item.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;


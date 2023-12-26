import React from 'react';

const achievementsList = [
  {
    title: 'Projects',
    value: '100+',
  },
  {
    title: 'Users',
    value: '1M+',
  },
  {
    title: 'Awards',
    value: '6+',
  },
  {
    title: 'Years',
    value: '5+',
  },
];
const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between">
        {achievementsList.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center just-content mx-4"
            >
              <h2 className="text-white text-4xl font-bold">{item.value}</h2>
              <p className="text-[#ADB7BE] text-base">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;


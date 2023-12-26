import React from 'react';
import { motion } from 'framer-motion';

const btnVariants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem)' },
};

const TabBtn = ({ active, selectTab, children }) => {
  const btnClasses = active ? 'text-white' : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${btnClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={btnVariants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabBtn;


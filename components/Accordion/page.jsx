'use client';


import React, { useState } from 'react';

const Accordion = ({ fields }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full ">
      {fields.map((field, index) => (
        <div key={field.id} className="w-full border rounded-lg overflow-hidden shadow-md">
          <button
            className="w-full text-left bg-gray-200 p-4 text-xl font-semibold flex items-center justify-between dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors duration-200 dark:hover:text-gray-200 dark:focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
            onClick={() => toggleAccordion(index)}
          >
            {field.name}
            <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
              <i className="fa fa-chevron-down"></i>
            </span>
          </button>
          {activeIndex === index && (
            <div className="bg-gray-100 p-4 space-y-2">
              {field.seasons.map((season, i) => (
                <div key={i} className="text-gray-700">{season}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

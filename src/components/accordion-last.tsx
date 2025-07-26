'use client';
import React, { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionIconProps {
  isOpen: boolean;
}

interface AccordionItemProps {
  item: AccordionItem;
  isOpen: boolean;
  onClick: () => void;
}

const accordionData: AccordionItem[] = [
  // ... (unchanged)
  {
    question: 'What is the best time to visit Araku Valley?',
    answer:
      'The best time to visit Araku Valley is from October to March when the weather is pleasant, the valleys are lush, and the coffee plantations are in full bloom.',
  },
  {
    question: 'How can I reach Araku??',
    answer:
      'You can reach Araku by train or bus. The Araku Express from Visakhapatnam offers a scenic train journey, and APSRTC operates regular buses. Pickup and drop services from Visakhapatnam can also be arranged for your convenience.',
  },
  {
   question: 'Do you offer custom tour packages?',
   answer: 'Yes, we offer customizable tour packages tailored to your preferences. You can choose the number of people, duration of the trip, places to visit, and type of stays. We handle transport, sightseeing, and local experiences to match your budget and interests.',

  },
  {
     question: 'Is accommodation included in the tour packages?',
     answer: 'Accommodation is not included by default, but it can be arranged on request based on your preferences and budget. We offer options ranging from budget stays to premium resorts.',

  },
  {
     question: 'Are meals included in the tour packages?',
     answer: 'Meals are not included in the tour packages, but we can take you to some of the best local spots to enjoy delicious and authentic meals during your trip.',

  },
];

const AccordionIcon: React.FC<AccordionIconProps> = ({ isOpen }) => (
  <svg
    className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-green-600 dark:text-green-400' : 'text-zinc-400'}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-green-200 dark:border-zinc-700 last:border-b-0">
      <button
        className="
          w-full flex justify-between items-center text-left py-4 px-5
          focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300
          hover:bg-green-50 dark:hover:bg-zinc-800
          transition-colors duration-200
        "
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-black dark:text-white">{item.question}</span>
        <AccordionIcon isOpen={isOpen} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="p-5 pt-0 text-zinc-700 dark:text-zinc-300">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const AccordionLast: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center p-6 min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-white transition-colors">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-green-300 dark:border-zinc-700 overflow-hidden mb-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center text-green-700 dark:text-green-400 mb-1">Frequently Asked Questions</h1>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-6">Here are some of our most asked questions.</p>
        </div>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionLast;

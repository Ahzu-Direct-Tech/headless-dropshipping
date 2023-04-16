import React, { useState } from 'react';

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and Apple Pay.',
  },
  {
    question: 'Do you offer free shipping?',
    answer:
      'Yes, we offer free shipping on all orders over $50 within the United States.',
  },
  {
    question: 'How long does it take to receive my order?',
    answer:
      'Most orders are processed and shipped within 2-3 business days. Delivery times vary depending on your location.',
  },
  {
    question: 'Can I return or exchange a product?',
    answer:
      'Yes, we have a 30-day return policy. Please contact us if you would like to return or exchange a product.',
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-md bg-white shadow-md overflow-hidden">
            <button
              className="w-full flex justify-between items-center px-4 py-4 text-sm font-medium text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              <svg
                className={`${activeIndex === index ? 'transform rotate-180' : ''} w-5 h-5 text-gray-400`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2 text-sm">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;

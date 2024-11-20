import React, { useState } from "react";

const Resources: React.FC = () => {
  
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to link all my bank accounts and cards to use FinTrack?",
      answer:
        "No, you can start with just one account or card. Linking additional accounts allows for a more comprehensive financial overview and greater flexibility in transactions.",
    },
    {
      question: "How long does it take to set up my FinTrack account?",
      answer: "Setting up a FinTrack account typically takes just a few minutes.",
    },
    {
      question: "Can FinTrack handle transactions in multiple currencies?",
      answer: "Yes, FinTrack supports transactions in multiple currencies.",
    },
    {
      question: "How does FinTrack help optimize my financial management?",
      answer:
        "FinTrack provides tools and insights to help you track expenses, set budgets, and optimize your financial management.",
    },
    {
      question: "Does FinTrack utilize AI for any of its features?",
      answer:
        "Yes, ZenPay uses AI for personalized financial recommendations and fraud detection.",
    },
  ];

  // Toggle the active question
  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="bg-white p-6 md:p-12">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Need Help?</h1>
        <button className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100">
          Contact Support
        </button>
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h2 className="text-gray-800 font-medium">{faq.question}</h2>
              <button className="text-2xl text-gray-600">
                {activeQuestion === index ? "-" : "+"}
              </button>
            </div>
            {activeQuestion === index && (
              <p className="text-gray-600 mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;

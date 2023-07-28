import React, { useState } from "react";
import "./FaqStyles.css";

function FaqMain() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "How do I apply for an education loan?",
      info:
        "You can apply for an education loan by filling out the online application form on our portal and submitting the required documents.",
    },
    {
        id: 2,
        title: 'What are the eligibility criteria for obtaining an education loan?',
        info:
          'The eligibility criteria generally include factors such as the course you are pursuing, the educational institution, your academic performance, and your co-borrowers financial stability.',
      },
      {
        id: 3,
        title: 'What documents are required for the education loan application?',
        info:
          'Commonly required documents include proof of identity, proof of address, academic records, admission letter, cost of education, income proof, and bank statements.',
      },
      {
        id: 4,
        title: 'What is the maximum loan amount that I can avail of?',
        info:
          'The maximum loan amount varies depending on factors such as the course, institution, and financial assessment.',
      },
      {
        id: 5,
        title: 'What is the interest rate on education loans?',
        info:
          'The interest rate can vary depending on the lender and loan scheme. Our portal provides competitive interest rates, and you can find the specific details on our website.',
      },
      {
        id: 6,
        title: 'What happens if I am unable to repay the loan on time?',
        info:
          'If you are unable to repay the loan on time, it may result in penalties or affect your credit score. It is essential to communicate with our customer support team to explore possible solutions or restructuring options.',
      },
      {
        id: 7,
        title: 'Is there any provision for a moratorium period or grace period?',
        info:
          'Yes, typically, a moratorium period is provided during the course duration. This means you do not have to start repaying the loan immediately. However, interest might accrue during this period.',
      },
      {
        id: 8,
        title: 'How long does it take for the loan application to be processed?',
        info:
          'The loan application processing time can vary depending on factors such as document verification, approval processes, and the workload of the lender. We strive to process applications as quickly as possible and will keep you updated on the progress.',
      },
      {
        id: 9,
        title: ' How can I track the status of my loan application?',
        info:
          'You can track the status of your loan application by logging into your account on our portal. There, you will find updates on the progress of your application.',
      },
      {
        id: 10,
        title: 'What happens if my course duration is extended?',
        info:
          'If your course duration is extended, you should inform us about the change. Depending on the circumstances, we will evaluate and provide guidance on how it may impact your loan repayment terms.',
      },
  ]);

  const toggleQuestion = (id) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === id) {
          return { ...question, showInfo: !question.showInfo };
        }
        return question;
      });
    });
  };

  return (
    <main className="faq-main">
      <div className="faq-container">
        <h3>Frequently Asked Questions</h3>
        <section className="faq-section">
          {questions.map((question) => (
            <article
              key={question.id}
              className={`faq-question ${
                question.showInfo ? "faq-show-info" : ""
              }`}
            >
              <header className="faq-header">
                <h4>{question.title}</h4>
                <button
                  className="faq-toggle-button"
                  onClick={() => toggleQuestion(question.id)}
                >
                  {question.showInfo ? "-" : "+"}
                </button>
              </header>
              {question.showInfo && <p>{question.info}</p>}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default FaqMain;

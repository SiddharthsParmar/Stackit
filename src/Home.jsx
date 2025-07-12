import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(process.env.QUESTIONS_API_URL);
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };

  const toggleQuestion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-10 px-4 lg:px-20 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">welcome to <span className="font-bold text-blue-700">Stackit</span></h1>
          <p className="text-gray-600 text-lg max-w-xl">
            Have questions? Here you’ll find the answers most valued by our community, along with access to step-by-step instructions and support.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://www.shutterstock.com/image-vector/africanamerican-man-illustration-black-greeting-600nw-2000406215.jpg" // Add image to public folder or use placeholder
            alt="FAQ illustration"
            className="max-w-sm w-full"
          />
        </div>
      </section>

      {/* Question Section */}
      <section className="bg-white shadow-md max-w-5xl mx-auto my-10 rounded-md px-4 lg:px-8 py-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Popular Questions</h2>

        {questions.length === 0 ? (
          <p className="text-gray-500">Loading questions...</p>
        ) : (
          <div className="space-y-4">
            {questions.map((q, index) => (
              <div
                key={q._id}
                className="border-b pb-4"
              >
                <button
                  className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-700 hover:text-purple-600"
                  onClick={() => toggleQuestion(index)}
                >
                  {q.title}
                  <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="mt-2 text-gray-600">
                    <p>{q.body}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      Tags: {q.tags.join(", ")} | Author: {q.author}
                    </div>
                    <Link
                      to={`/question/${q._id}`}
                      className="text-blue-500 underline mt-2 inline-block"
                    >
                      View full question
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
    </>
  );
};

export default Home;

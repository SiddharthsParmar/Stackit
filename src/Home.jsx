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
      const response = await fetch("https://cf3c7d6b7ed8.ngrok-free.app/user/home", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true", // Important for ngrok!
        },
      });

      const data = await response.json();

      const entries = Object.entries(data.map || {});
      const parsedQuestions = entries.map(([key, solutions], index) => {
        const titleMatch = key.match(/title='([^']+)'/);
        const descriptionMatch = key.match(/description='([^']+)'/);

        return {
          id: index + 1,
          title: titleMatch ? titleMatch[1] : "Untitled",
          body: descriptionMatch ? descriptionMatch[1] : "No description",
          tags: [], // Placeholder since no tags info
          author: data.username || "Anonymous",
        };
      });

      setQuestions(parsedQuestions);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };

  const toggleQuestion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section className="bg-white py-10 px-4 lg:px-20 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Welcome to <span className="font-bold text-blue-700">Stackit</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">
              Have questions? Here you’ll find the answers most valued by our community, along with access to step-by-step instructions and support.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://www.shutterstock.com/image-vector/africanamerican-man-illustration-black-greeting-600nw-2000406215.jpg"
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
                <div key={q.id} className="border-b pb-4">
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
                        Tags: {q.tags?.join(", ") || "None"} | Author: {q.author || "Anonymous"}
                      </div>
                      <Link
                        to={`/question/${q.id}`}
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

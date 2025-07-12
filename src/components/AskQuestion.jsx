import React, { useState } from "react";
import RichTextEditor from "../components/RichTextEditor";

export default function AskQuestion() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const data = {
      title,
      description,
    };

    fetch("http://localhost:5000/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Question submitted successfully");
        console.log(result);
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="p-4 bg-gray-600 min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-4">Ask a Question</h2>

      <input
        type="text"
        placeholder="Enter title"
        className="p-2 w-full mb-4 rounded text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="mb-2 block">Description:</label>
      <RichTextEditor value={description} onChange={setDescription} />


      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
}

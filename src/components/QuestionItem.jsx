import React, { useState } from 'react'
import AnswerEditor from './AnswerEditor'
import Tiptap from '../TipTap'

const QuestionItem = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false)
  const [answerHTML, setAnswerHTML] = useState('')

  const handleSubmit = () => {
    console.log('Answer HTML:', answerHTML)
    // Send to backend here
    alert('Submitted!')
  }

  return (
    <>
     <button className="bg-white px-2 py-1 rounded border text-sm m-5 ">Question ➕</button>
    <div className="border rounded mb-4 shadow-sm">
      <div
        className="flex items-center justify-between bg-cyan-100 px-4 py-2 cursor-pointer"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-lg font-semibold">{question.text}</p>
        </div>
        
        
        <button className="bg-white px-2 py-1 rounded border text-sm">Answer ➕</button>
      </div>

      {showAnswer && (
        <div className="p-4">
          <h3 className="font-medium mb-2">Give Answer:</h3>
          <Tiptap onChange={setAnswerHTML} />
          <button
            className="bg-sky-200 hover:bg-sky-300 px-4 py-1 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
    </>
  )
}

export default QuestionItem

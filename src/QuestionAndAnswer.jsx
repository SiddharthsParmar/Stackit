import React from 'react'
import Tiptap from './TipTap'
import QuestionItem from './components/QuestionItem'
import Navbar from './components/Navbar'

const QuestionAndAnswer = () => {
     const questions = [
  {
    id: 1,
    text: 'Kattappa ne Bahubali ko kyu maara??',
  },
  {
    id: 2,
    text: 'What is useContext in React?',
  },
]
  return (
   <>
<div className="card">
      {/* <Tiptap /> */}
      {/* <QuestionItem/> */}
      <Navbar/>
       <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Q&A Forum</h1>
      {questions.map((q) => (
        <QuestionItem key={q.id} question={q} />
      ))}
    </div>
    </div>




   </>
  )
}

export default QuestionAndAnswer
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import LoginPage from './LoginPage.jsx'
import AskQuestion from './components/AskQuestion.jsx'
import QuestionAndAnswer from './QuestionAndAnswer.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Ask a Question Page */}
        <Route path="/ask" element={<QuestionAndAnswer />} />

        {/* Show Q&A Page */}
        <Route path="/questions" element={<QuestionAndAnswer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

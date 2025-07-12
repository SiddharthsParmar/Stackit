// src/Tiptap.tsx
import React, { useState } from "react"
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import TextAlign from "@tiptap/extension-text-align"
import Link from "@tiptap/extension-link"

const extensions = [
  StarterKit,
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  Link.configure({ openOnClick: false }),
]

const Tiptap = () => {
  const [submitted, setSubmitted] = useState(false)

  const editor = useEditor({
    extensions,
    content: `<p>Hello <strong>World</strong>!</p>`,
  })

  const handleSubmit = async () => {
    if (!editor) return

    const answerHTML = editor.getHTML()

    const payload = {
      questionId: "123456", // Replace with actual question ID
      answer: answerHTML,
    }

    try {
      const res = await fetch("http://localhost:5000/api/answers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      setSubmitted(true)
      alert("Answer submitted successfully!")
      console.log(data)
    } catch (error) {
      console.error("Error submitting answer:", error)
    }
  }

  if (!editor) return null

  return (
    <div className="p-4 bg-[#f0fcfc] rounded border border-slate-300">
      <FloatingMenu editor={editor}>
        <div className="bg-white p-2 rounded shadow text-black">
          Floating Tools
        </div>
      </FloatingMenu>

      <BubbleMenu editor={editor}>
        <div className="bg-white p-2 rounded shadow text-black">
          Bubble Tools
        </div>
      </BubbleMenu>

      <div className="flex gap-2 mb-4 flex-wrap">
        {/* Toolbar Buttons */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "bg-blue-600 text-white px-2 py-1 rounded" : "bg-gray-200 px-2 py-1 rounded"}
        >
          Bold
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "bg-blue-600 text-white px-2 py-1 rounded" : "bg-gray-200 px-2 py-1 rounded"}
        >
          Italic
        </button>

        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "bg-blue-600 text-white px-2 py-1 rounded" : "bg-gray-200 px-2 py-1 rounded"}
        >
          Strike
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "bg-blue-600 text-white px-2 py-1 rounded" : "bg-gray-200 px-2 py-1 rounded"}
        >
          • List
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "bg-blue-600 text-white px-2 py-1 rounded" : "bg-gray-200 px-2 py-1 rounded"}
        >
          1. List
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "bg-blue-600 text-white px-2 py-1 rounded" : "bg-gray-200 px-2 py-1 rounded"}
        >
          Left
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={editor.isActive({ textAlign: "center" }) ? "bg-blue-600 text-white px-2 py-1 rounded" : "bg-gray-200 px-2 py-1 rounded"}
        >
          Center
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "bg-blue-600 text-white px-2 py-1 rounded" : "bg-gray-200 px-2 py-1 rounded"}
        >
          Right
        </button>

        <button
          onClick={() => {
            const url = prompt("Enter URL")
            if (url) {
              editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
            }
          }}
          className="bg-gray-200 px-2 py-1 rounded"
        >
          Link
        </button>
      </div>

      {/* Answer Editor */}
      <EditorContent editor={editor} className="border p-4 bg-white text-black rounded" />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-sky-300 hover:bg-sky-500 text-black px-4 py-2 rounded"
      >
        Submit Answer
      </button>

      {submitted && <p className="text-green-600 mt-2">Answer submitted successfully ✅</p>}
    </div>
  )
}

export default Tiptap

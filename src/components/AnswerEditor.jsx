import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const AnswerEditor = ({ onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  return (
    <div className="border p-2 rounded bg-white text-black mb-2">
      <EditorContent editor={editor} />
    </div>
  )
}

export default AnswerEditor

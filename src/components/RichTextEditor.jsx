import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
// import Link from "@tiptap/extension-link";
// import Image from "@tiptap/extension-image";
// import TextAlign from "@tiptap/extension-text-align";

export default function RichTextEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
    //   Link.configure({ openOnClick: false }),
      Image,
    //   TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border p-2 rounded bg-white text-black">
      <EditorContent editor={editor} />
    </div>
  );
}

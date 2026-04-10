"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import { JSX } from "react";

export default function TipTapEditor(): JSX.Element {
  const editor: Editor | null = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "Write description...",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "",
    immediatelyRender: false,
    onUpdate: () => { },
  });

  if (!editor) return <></>;

  return (
    <div className="w-full">
      <div className="border border-gray-300 rounded-md overflow-hidden hover:border-black">

        {/* Toolbar */}
        <div className="flex flex-wrap gap-2 p-2 text-sm justify-space-evenly">
          <div className="size-5 text-center bg-white">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`font-bold`}
            >
              B
            </button>
          </div>
          <div className="size-5 text-center bg-white">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`italic`}
            >
              I
            </button>
          </div>
          <div className="size-5 text-center bg-white">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={`underline`}
            >
              U
            </button>
          </div>
          <div className="size-5 text-center bg-white">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`bullet-list`}
            >
              •
            </button>
          </div>
          <div className="size-5 text-center bg-white">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`ordered-list`}
            >
              1.
            </button>
          </div>
          <div className="size-5 text-center bg-white">
            <button
              type="button"
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              className={`text-left`}
            >
              L
            </button>
          </div>
          <div className="size-5 text-center bg-white">
            <button
              type="button"
              onClick={() => editor.chain().focus().setTextAlign("center").run()}
              className={`text-center`}
            >
              C
            </button>
          </div>
          <div className="size-5 text-center bg-white">
            <button
              type="button"
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={`text-right`}
            >
              R
            </button>
          </div>
        </div>

        {/* Editor */}
        <EditorContent
          editor={editor}
          className="px-4 py-2 h-40 text-xs focus:outline-none text-black hover:border-black"
          required
        />
      </div>
    </div>
  );
}
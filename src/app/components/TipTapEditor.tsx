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
    onUpdate: () => {},
  });

  if (!editor) return <></>;

  // Button style helper
  const btn = (active: boolean) =>
    `px-2 py-1 rounded border transition ${
      active
        ? "bg-black text-white border-black"
        : "bg-white text-black border-gray-300 hover:bg-gray-100"
    }`;

  return (
    <div className="w-full">
      <div className="border border-gray-300 rounded-md overflow-hidden bg-white">
        
        {/* Toolbar */}
        <div className="flex flex-wrap gap-2 border-b p-2 bg-gray-100 text-sm">

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={btn(editor.isActive("bold"))}
          >
            B
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={btn(editor.isActive("italic"))}
          >
            I
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={btn(editor.isActive("underline"))}
          >
            U
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={btn(editor.isActive("bulletList"))}
          >
            •
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={btn(editor.isActive("orderedList"))}
          >
            1.
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={btn(editor.isActive({ textAlign: "left" }))}
          >
            L
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={btn(editor.isActive({ textAlign: "center" }))}
          >
            C
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={btn(editor.isActive({ textAlign: "right" }))}
          >
            R
          </button>

        </div>

        {/* Editor */}
        <EditorContent
          editor={editor}
          className="px-4 py-2 h-40 text-xs focus:outline-none"
        />
      </div>
    </div>
  );
}
'use client';

import { useEffect } from 'react';

import { EditorContent, useEditor } from '@tiptap/react';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import StarterKit from '@tiptap/starter-kit';

type RichTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

const toolbarButtonClasses =
  'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 transition hover:border-blue-400 hover:text-blue-500 disabled:opacity-40 disabled:cursor-not-allowed';

const clampContent = (value: string) => (value && value.trim().length > 0 ? value : '<p></p>');

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3, 4],
        },
      }),
      Link.configure({
        autolink: true,
        openOnClick: true,
      }),
      Image.configure({ inline: false }),
    ],
    content: clampContent(value),
    editorProps: {
      attributes: {
        class: 'prose prose-slate max-w-none min-h-[240px] focus:outline-none',
      },
    },
    onUpdate({ editor: tiptapEditor }) {
      onChange(tiptapEditor.getHTML());
    },
    immediatelyRender: false,
  });

  useEffect(() => {
    if (!editor) {
      return;
    }

    const current = editor.getHTML();
    if (value !== current) {
      editor.commands.setContent(clampContent(value), { emitUpdate: false });
    }
  }, [editor, value]);

  if (!editor) {
    return null;
  }

  const toggleLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter the URL', previousUrl || 'https://');
    if (url === null) {
      return;
    }
    if (url === '') {
      editor.chain().focus().unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const addImage = () => {
    const url = window.prompt('Paste image URL');
    if (!url) {
      return;
    }
    editor.chain().focus().setImage({ src: url }).run();
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <button
          type="button"
          className={toolbarButtonClasses}
          onClick={() => editor.chain().focus().toggleBold().run()}
          aria-label="Bold"
        >
          <span className="font-semibold">B</span>
        </button>
        <button
          type="button"
          className={toolbarButtonClasses}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          aria-label="Italic"
        >
          <span className="italic">I</span>
        </button>
        <button
          type="button"
          className={toolbarButtonClasses}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          aria-label="Bullet list"
        >
          •
        </button>
        <button
          type="button"
          className={toolbarButtonClasses}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          aria-label="Numbered list"
        >
          1.
        </button>
        <button type="button" className={toolbarButtonClasses} onClick={toggleLink} aria-label="Add link">
          ↗
        </button>
        <button type="button" className={toolbarButtonClasses} onClick={addImage} aria-label="Embed image">
          🖼
        </button>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

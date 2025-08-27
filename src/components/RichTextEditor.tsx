'use client';

import { useEditor, EditorContent, Node, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import React, { useCallback } from 'react';

// Custom Video Node
const VideoNode = Node.create({
  name: 'video',
  group: 'block',
  atom: true,

  addAttributes() {
    return {
      src: { default: null },
    };
  },

  parseHTML() {
    return [{ tag: 'iframe[src*="youtube.com"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { style: 'position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;' },
      ['iframe', {
        ...HTMLAttributes,
        style: 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;',
        frameborder: 0,
        allowfullscreen: 'true',
      }]
    ];
  },
});

const Toolbar = ({ editor }: { editor: Editor | null }) => {
  const addImage = useCallback(() => {
    if (!editor) return;
    const url = window.prompt('Enter image URL');
    if (url) editor.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  const setLink = useCallback(() => {
    if (!editor) return;
    const url = window.prompt('Enter URL', editor.getAttributes('link').href);
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
    } else {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  }, [editor]);

  if (!editor) return null;

  const addYoutubeVideo = () => {
    const url = prompt('Enter YouTube URL');
    if (url) {
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/;
        const match = url.match(youtubeRegex);
        if (match && match[1]) {
            editor.chain().focus().setNode('video', { src: `https://www.youtube.com/embed/${match[1]}` }).run();
        } else {
            alert('Please enter a valid YouTube URL.');
        }
    }
  };

  const buttonStyle = (isActive: boolean) => ({ background: isActive ? '#333' : '#fff', color: isActive ? '#fff' : '#333', border: '1px solid #ccc', padding: '0.25rem 0.5rem', marginRight: '0.25rem', marginBottom: '0.25rem', borderRadius: '4px', cursor: 'pointer' });

  return (
    <div style={{ border: '1px solid #ccc', padding: '0.5rem', borderRadius: '4px 4px 0 0', display: 'flex', flexWrap: 'wrap' }}>
      <button onClick={() => editor.chain().focus().toggleBold().run()} style={buttonStyle(editor.isActive('bold'))}>Bold</button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} style={buttonStyle(editor.isActive('italic'))}>Italic</button>
      <button onClick={setLink} style={buttonStyle(editor.isActive('link'))}>Link</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} style={buttonStyle(editor.isActive('heading', { level: 1 }))}>H1</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} style={buttonStyle(editor.isActive('heading', { level: 2 }))}>H2</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} style={buttonStyle(editor.isActive('heading', { level: 3 }))}>H3</button>
      <button onClick={() => editor.chain().focus().setParagraph().run()} style={buttonStyle(editor.isActive('paragraph'))}>Paragraph</button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} style={buttonStyle(editor.isActive('bulletList'))}>List</button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()} style={buttonStyle(editor.isActive('orderedList'))}>Numbered List</button>
      <button onClick={() => editor.chain().focus().toggleBlockquote().run()} style={buttonStyle(editor.isActive('blockquote'))}>Quote</button>
      <button onClick={addImage}>Image</button>
      <button onClick={addYoutubeVideo}>Video</button>
    </div>
  );
};

const TiptapEditor = ({ content, onChange }: { content: string, onChange: (newContent: string) => void }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({ openOnClick: false, autolink: true }),
      VideoNode,
    ],
    content: content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-hidden',
      },
    },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '4px' }} onClick={() => editor?.commands.focus()}>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} style={{ padding: '0.5rem', minHeight: '300px' }} />
    </div>
  );
};

export default TiptapEditor;

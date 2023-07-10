<template>
  <div
    class="w-2/3 border-2 border-blue-200 [&>div]:p-2 [&>div]:pt-0 [&_.button-box]:px-0 rounded-lg bg-slate-50"
  >
    <div
      v-if="editor"
      class="button-box flex flex-wrap border-gray-700 rounded-sm border-[1px] !pb-0 overflow-hidden"
    >
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'bg-slate-300 border-gray-900': editor.isActive('bold') }"
      >
        <p class="font-bold">B</p>
      </button>
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'bg-slate-300 border-gray-900': editor.isActive('italic') }"
      >
        <p class="italic underline">I</p>
      </button>
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'bg-slate-300 border-gray-900': editor.isActive('strike') }"
      >
        <p class="line-through">S</p>
      </button>
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'bg-slate-300 border-gray-900': editor.isActive('code') }"
      >
        {{ `<>` }}
      </button>
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().unsetAllMarks().run()"
      >
        clear marks
      </button>
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{
          'bg-slate-300 border-gray-900': editor.isActive('heading', {
            level: 1,
          }),
        }"
      >
        h1
      </button>
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{
          'bg-slate-300 border-gray-900': editor.isActive('heading', {
            level: 2,
          }),
        }"
      >
        h2
      </button>
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{
          'bg-slate-300 border-gray-900': editor.isActive('heading', {
            level: 3,
          }),
        }"
      >
        h3
      </button>
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{
          'bg-slate-300 border-gray-900': editor.isActive('bulletList'),
        }"
      >
        bullet list
      </button>
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{
          'bg-slate-300 border-gray-900': editor.isActive('orderedList'),
        }"
      >
        ordered list
      </button>
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{
          'bg-slate-300 border-gray-900': editor.isActive('codeBlock'),
        }"
      >
        code block
      </button>
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{
          'bg-slate-300 border-gray-900': editor.isActive('blockquote'),
        }"
      >
        blockquote
      </button>
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().setHorizontalRule().run()"
      >
        horizontal rule
      </button>
      <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().setHardBreak().run()"
      >
        hard break
      </button>
    </div>

    <editor-content
      :editor="editor"
      :v-model="content"
      class="[&_.ProseMirror-focused]:border-none [&_.ProseMirror-focused]:p-0 [&_.ProseMirror-focused]:outline-0"
    />
  </div>

  <button class="bg-black text-white" @click="handleClick">clicky</button>

  <div
    v-html="content"
    class="[&>p]:mt-[1em] [&>h1]:text-3xl [&>h1]:font-bold [&>ul]:list-disc [&>ul]:p-4 [&>ol]:list-decimal [&>ol]:p-4 [&_code]:bg-blue-600"
  ></div>
</template>

<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const pre = ref("");
const content = ref("");

const editor = useEditor({
  content: "",
  extensions: [StarterKit],
  onUpdate: ({ editor }) => {
    pre.value = editor.getHTML();
  },
});

const handleClick = () => {
  console.log(pre.value);
  content.value = pre.value;
};
</script>

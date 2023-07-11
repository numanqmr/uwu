<template>
  <div
    class="border-2 border-blue-200 [&>div]:p-2 [&>div]:pt-0 [&_.button-box]:px-0 rounded-lg bg-slate-50 dark:bg-gray-800"
  >
    <div
      v-if="editor"
      class="button-box flex flex-wrap !pb-0 overflow-hidden mb-2"
    >
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="[
          `rounded-tl-md`,
          genericBtnClass,
          { [`${genericBtnActive}`]: editor.isActive('bold') },
        ]"
      >
        <p class="font-bold">B</p>
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="[
          genericBtnClass,
          { [`${genericBtnActive}`]: editor.isActive('italic') },
        ]"
      >
        <p class="italic underline">I</p>
      </button>
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="[
          genericBtnClass,
          { [`${genericBtnActive}`]: editor.isActive('strike') },
        ]"
      >
        <p class="line-through">S</p>
      </button>
      <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="[
          genericBtnClass,
          { [`${genericBtnActive}`]: editor.isActive('code') },
        ]"
      >
        {{ `<>` }}
      </button>
      <button
        @click="editor.chain().focus().unsetAllMarks().run()"
        :class="[genericBtnClass]"
      >
        clear marks
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="[
          genericBtnClass,
          {
            [`${genericBtnActive}`]: editor.isActive('heading', {
              level: 1,
            }),
          },
        ]"
      >
        h1
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="[
          genericBtnClass,
          {
            [`${genericBtnActive}`]: editor.isActive('heading', {
              level: 2,
            }),
          },
        ]"
      >
        h2
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="[
          genericBtnClass,
          {
            [`${genericBtnActive}`]: editor.isActive('heading', {
              level: 3,
            }),
          },
        ]"
      >
        h3
      </button>
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="[
          genericBtnClass,
          { [`${genericBtnActive}`]: editor.isActive('bulletList') },
        ]"
      >
        ul
      </button>
      <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="[
          genericBtnClass,
          { [`${genericBtnActive}`]: editor.isActive('orderedList') },
        ]"
      >
        ol
      </button>
      <!-- Commenting this cause no use but cool _WALEED -->
      <!-- <button
        class="bg-slate-50 px-2 py-1 m-0 border-[1px] border-gray-700 min-w-[30px] flex-grow"
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="[
          genericBtnClass,
          { [`${genericBtnActive}`]: editor.isActive('codeBlock') },
        ]"
      >
        code block
      </button> -->
      <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="[
          genericBtnClass,
          { [`${genericBtnActive}`]: editor.isActive('blockquote') },
        ]"
      >
        quote
      </button>
      <button
        :class="[genericBtnClass]"
        @click="editor.chain().focus().setHorizontalRule().run()"
      >
        line
      </button>
      <button
        :class="[`rounded-tr-md`, genericBtnClass]"
        @click="editor.chain().focus().setHardBreak().run()"
      >
        hard break
      </button>
    </div>

    <editor-content
      :editor="editor"
      class="[&>div]:min-h-[80px] [&>div]:min-w-full [&>div]:prose [&>div]:dark:prose-invert [&_.ProseMirror-focused]:border-none [&_.ProseMirror-focused]:p-0 [&_.ProseMirror-focused]:outline-0 focus-visible:[&>div]:outline-none"
    />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const emit = defineEmits(["someEvent"]);

const genericBtnClass =
  "bg-slate-50 px-2 py-1 m-0 border-[1px] border-r-[0.25px] text-[12px] border-l-[0.25px] border-gray-300 min-w-[30px] flex-grow hover:bg-slate-200 dark:bg-gray-600 dark:text-white dark:border-gray-400 dark:hover:bg-gray-500";

const genericBtnActive = "!bg-slate-300 dark:!bg-gray-900 border-gray-900";

const editor = useEditor({
  content: "",
  extensions: [StarterKit],
  onUpdate: ({ editor }) => {
    // Use below condition if you want this required field
    // const isEmpty =
    //   editor.state.doc.textContent.replace(/\s+/g, "").length === 0;

    emit("someEvent", editor.getHTML());
  },
});
</script>

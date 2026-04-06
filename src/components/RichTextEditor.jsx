import React, { useRef, useEffect } from "react";

const buttons = [
  { command: "bold", label: "B" },
  { command: "italic", label: "I" },
  { command: "underline", label: "U" },
  { command: "insertUnorderedList", label: "• List" },
  { command: "insertOrderedList", label: "1. List" },
  { command: "createLink", label: "Link" },
];

export default function RichTextEditor({ value, onChange, placeholder }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value || "";
    }
  }, [value]);

  const exec = (command) => {
    if (command === "createLink") {
      const url = window.prompt("Enter URL", "https://");
      if (!url) return;
      document.execCommand("createLink", false, url);
      return;
    }
    document.execCommand(command, false, null);
    editorRef.current.focus();
  };

  return (
    <div className="rounded-lg bg-white">
      <div className="flex flex-wrap gap-1 p-2 bg-gray-100">
        {buttons.map((btn) => (
          <button
            key={btn.command}
            type="button"
            onClick={() => exec(btn.command)}
            className="px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:bg-[#EFF6FF] hover:text-[#0F57A2] transition-colors"
          >
            {btn.label}
          </button>
        ))}
      </div>
      <div
        ref={editorRef}
        contentEditable
        className="min-h-[200px] p-3 outline-none"
        onInput={(e) => onChange(e.currentTarget.innerHTML)}
        onBlur={(e) => onChange(e.currentTarget.innerHTML)}
        data-placeholder={placeholder}
        style={{ whiteSpace: "pre-wrap" }}
      />
    </div>
  );
}

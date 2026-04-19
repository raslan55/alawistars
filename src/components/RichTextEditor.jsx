import React, { useState, useRef, useMemo } from "react";
import ReactQuill, { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { FiPlus } from "react-icons/fi";

const BlockEmbed = Quill.import("blots/block/embed");

class CtaBlot extends BlockEmbed {
  static create(value) {
    const node = super.create();
    node.setAttribute("href", value.href || "#");
    node.setAttribute("target", "_blank");
    node.textContent = value.text || "Click Here";

    // Add custom styling
    const borderRadius = value.shape === "rounded" ? "9999px" : "8px";
    const bgColor = value.color || "#1A3C6E";

    let styleStr = `display: inline-block; padding: 12px 24px; background-color: ${bgColor}; color: white; text-decoration: none; font-weight: bold; border-radius: ${borderRadius}; text-align: center; margin: 10px 0; font-family: 'Cairo', sans-serif; cursor: pointer;`;

    node.setAttribute("style", styleStr);

    node.className = "cta-button";
    return node;
  }

  static value(node) {
    return {
      href: node.getAttribute("href"),
      text: node.textContent,
      color: node.style?.backgroundColor || "#1A3C6E",
      shape: node.style?.borderRadius === "9999px" ? "rounded" : "square",
    };
  }
}
CtaBlot.blotName = "cta";
CtaBlot.tagName = "a";
Quill.register(CtaBlot);

export default function RichTextEditor({ value, onChange, placeholder }) {
  const quillRef = useRef(null);
  const [showCtaModal, setShowCtaModal] = useState(false);
  const [ctaForm, setCtaForm] = useState({
    text: "",
    href: "",
    color: "#1A3C6E",
    shape: "square",
  });

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          [{ font: [] }],
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          [{ script: "sub" }, { script: "super" }],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
          ["link", "image", "video"],
          ["clean"],
        ],
      },
    }),
    []
  );

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "align",
    "script",
    "blockquote",
    "list",
    "indent",
    "link",
    "image",
    "video",
    "cta",
  ];

  const insertCta = () => {
    if (!ctaForm.text || !ctaForm.href) {
      alert("Please enter text and link");
      return;
    }

    const editor = quillRef.current.getEditor();
    const range = editor.getSelection(true);
    editor.insertEmbed(range.index, "cta", ctaForm);
    editor.insertText(range.index + 1, " ", "user"); // Add space after button
    editor.setSelection(range.index + 2);
    setShowCtaModal(false);
    setCtaForm({ text: "", href: "", color: "#1A3C6E", shape: "square" });
  };

  return (
    <div className="relative bg-white rounded-lg border border-gray-200">
      <style>{`
        .ql-container.ql-snow {
          border: none;
          min-height: 250px;
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
          font-family: inherit;
          font-size: 16px;
        }
        .ql-toolbar.ql-snow {
          border: none;
          border-bottom: 1px solid #e5e7eb;
          background: #f9fafb;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
        }
        .cta-button { user-select: none; }
        .ql-editor { min-height: 250px; }
      `}</style>
      
      <div className="bg-gray-50 border-b border-gray-200 p-2 flex justify-end gap-2 rounded-t-lg shadow-sm">
        <button
          type="button"
          onClick={() => setShowCtaModal(true)}
          className="bg-Main-color text-white px-3 py-1.5 text-sm rounded-md hover:bg-text-color transition-colors flex items-center gap-1 shadow-sm"
        >
          <FiPlus /> CTA
        </button>
      </div>

      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value || ""}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />

      {showCtaModal && (
        <div className="absolute inset-0 bg-white/95 z-20 flex items-center justify-center p-4 rounded-lg backdrop-blur-sm">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-sm border border-gray-100 transform transition-all">
            <h3 className="font-bold text-[#1A3C6E] mb-5 text-xl">
              Add Action Button
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Button Text
                </label>
                <input
                  type="text"
                  value={ctaForm.text}
                  onChange={(e) =>
                    setCtaForm((s) => ({ ...s, text: e.target.value }))
                  }
                  className="w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-[#0099CC] transition-colors"
                  placeholder="e.g. Subscribe Now"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Link URL
                </label>
                <input
                  type="url"
                  value={ctaForm.href}
                  onChange={(e) =>
                    setCtaForm((s) => ({ ...s, href: e.target.value }))
                  }
                  className="w-full border-2 border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-[#0099CC] transition-colors"
                  placeholder="https://..."
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Color
                  </label>
                  <input
                    type="color"
                    value={ctaForm.color}
                    onChange={(e) =>
                      setCtaForm((s) => ({ ...s, color: e.target.value }))
                    }
                    className="w-full h-12 border-2 border-gray-200 rounded-lg cursor-pointer p-1 focus:border-[#0099CC] transition-colors"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Shape
                  </label>
                  <select
                    value={ctaForm.shape}
                    onChange={(e) =>
                      setCtaForm((s) => ({ ...s, shape: e.target.value }))
                    }
                    className="w-full h-12 border-2 border-gray-200 rounded-lg focus:outline-none px-3 
focus:border-[#0099CC] transition-colors"
                  >
                    <option value="square">Square</option>
                    <option value="rounded">Rounded</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                type="button"
                onClick={insertCta}
                className="flex-1 bg-[#1A3C6E] text-white py-2.5 rounded-lg hover:bg-[#152e55] font-semibold transition-colors shadow-md"
              >
                Insert
              </button>
              <button
                type="button"
                onClick={() => setShowCtaModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg hover:bg-gray-200 font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

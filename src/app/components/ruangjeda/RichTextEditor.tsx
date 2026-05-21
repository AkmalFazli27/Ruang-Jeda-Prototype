import { useState, useRef, useEffect } from "react";
import { Bold, Italic, Underline, List, ListOrdered, Heading1, Heading2, Type } from "lucide-react";
import { GlassCard } from "./GlassCard";

interface RichTextEditorProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  bgColor?: string;
  textColor?: string;
}

type FormatCommand = "bold" | "italic" | "underline" | "insertUnorderedList" | "insertOrderedList";

export function RichTextEditor({ value, onChange, placeholder, bgColor, textColor }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [showToolbar, setShowToolbar] = useState(false);
  const [activeFormats, setActiveFormats] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (editorRef.current && !editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value;
    }
  }, []);

  const handleInput = () => {
    if (editorRef.current) {
      const text = editorRef.current.innerHTML;
      onChange(text);
      updateActiveFormats();
    }
  };

  const handleFocus = () => {
    setShowToolbar(true);
  };

  const updateActiveFormats = () => {
    const formats = new Set<string>();

    if (document.queryCommandState("bold")) formats.add("bold");
    if (document.queryCommandState("italic")) formats.add("italic");
    if (document.queryCommandState("underline")) formats.add("underline");
    if (document.queryCommandState("insertUnorderedList")) formats.add("insertUnorderedList");
    if (document.queryCommandState("insertOrderedList")) formats.add("insertOrderedList");

    setActiveFormats(formats);
  };

  const applyFormat = (command: FormatCommand) => {
    document.execCommand(command, false);
    editorRef.current?.focus();
    updateActiveFormats();
    handleInput();
  };

  const applyHeading = (level: 1 | 2) => {
    document.execCommand("formatBlock", false, `h${level}`);
    editorRef.current?.focus();
    handleInput();
  };

  const applyParagraph = () => {
    document.execCommand("formatBlock", false, "p");
    editorRef.current?.focus();
    handleInput();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Cmd/Ctrl + B for bold
    if ((e.metaKey || e.ctrlKey) && e.key === "b") {
      e.preventDefault();
      applyFormat("bold");
    }
    // Cmd/Ctrl + I for italic
    if ((e.metaKey || e.ctrlKey) && e.key === "i") {
      e.preventDefault();
      applyFormat("italic");
    }
    // Cmd/Ctrl + U for underline
    if ((e.metaKey || e.ctrlKey) && e.key === "u") {
      e.preventDefault();
      applyFormat("underline");
    }
  };

  const toolbarButtons = [
    { icon: Heading1, action: () => applyHeading(1), tooltip: "Judul Besar", key: "h1" },
    { icon: Heading2, action: () => applyHeading(2), tooltip: "Judul Kecil", key: "h2" },
    { icon: Type, action: applyParagraph, tooltip: "Normal Text", key: "p" },
    { icon: Bold, action: () => applyFormat("bold"), tooltip: "Bold (⌘B)", key: "bold" },
    { icon: Italic, action: () => applyFormat("italic"), tooltip: "Italic (⌘I)", key: "italic" },
    { icon: Underline, action: () => applyFormat("underline"), tooltip: "Underline (⌘U)", key: "underline" },
    { icon: List, action: () => applyFormat("insertUnorderedList"), tooltip: "Bullet List", key: "insertUnorderedList" },
    { icon: ListOrdered, action: () => applyFormat("insertOrderedList"), tooltip: "Numbered List", key: "insertOrderedList" }
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Toolbar - iPhone Notes style */}
      {showToolbar && (
        <div className="mb-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-1 flex-wrap">
            {toolbarButtons.map((btn, index) => {
              const Icon = btn.icon;
              const isActive = activeFormats.has(btn.key);

              return (
                <button
                  key={index}
                  onClick={btn.action}
                  onMouseDown={(e) => e.preventDefault()} // Prevent losing focus
                  className={`p-2.5 rounded-lg transition-all flex-shrink-0 ${
                    isActive
                      ? "bg-[#B983FF]/30 text-[#B983FF]"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                  title={btn.tooltip}
                >
                  <Icon className="w-4 h-4" />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Rich Text Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onMouseUp={updateActiveFormats}
        onKeyUp={updateActiveFormats}
        className="flex-1 outline-none resize-none text-base leading-relaxed rich-text-editor overflow-y-auto"
        style={{
          backgroundColor: bgColor || "transparent",
          color: textColor || "white",
        }}
        data-placeholder={placeholder}
        suppressContentEditableWarning
      />

      <style>{`
        .rich-text-editor[contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: rgba(100, 116, 139, 0.78);
          pointer-events: none;
        }

        .rich-text-editor h1 {
          font-size: 1.875rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.5rem;
          color: #FFD5BA;
        }

        .rich-text-editor h2 {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 0.5rem;
          color: #B983FF;
        }

        .rich-text-editor p {
          margin-bottom: 0.75rem;
        }

        .rich-text-editor strong,
        .rich-text-editor b {
          font-weight: 700;
          color: #FFD5BA;
        }

        .rich-text-editor em,
        .rich-text-editor i {
          font-style: italic;
          color: #B983FF;
        }

        .rich-text-editor u {
          text-decoration: underline;
          text-decoration-color: #B983FF;
          text-underline-offset: 2px;
        }

        .rich-text-editor ul,
        .rich-text-editor ol {
          margin-left: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .rich-text-editor ul {
          list-style-type: disc;
        }

        .rich-text-editor ol {
          list-style-type: decimal;
        }

        .rich-text-editor li {
          margin-bottom: 0.25rem;
          padding-left: 0.5rem;
        }

        .rich-text-editor li::marker {
          color: #B983FF;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

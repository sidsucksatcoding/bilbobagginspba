import React, { useState, useEffect, useRef } from "react";
import { useContent } from "@/context/ContentContext";

/**
 * EditableText
 * - When not editing, renders the value as a styled element.
 * - When editing-mode is on, clicking turns it into an inline textarea/input.
 *
 * Props:
 *   path: array of keys to update in content (e.g. ["home", "title"])
 *   value: current string
 *   as: html tag for display ("h1", "h2", "p", "span", "blockquote") - default "p"
 *   className
 *   multiline: boolean (textarea vs input)
 *   placeholder
 *   testId
 */
export default function EditableText({
  path,
  value,
  as = "p",
  className = "",
  multiline = true,
  placeholder = "Click to edit…",
  testId,
}) {
  const { isEditing, updateField } = useContent();
  const [active, setActive] = useState(false);
  const [draft, setDraft] = useState(value || "");
  const ref = useRef(null);

  useEffect(() => {
    setDraft(value || "");
  }, [value]);

  useEffect(() => {
    if (active && ref.current) {
      ref.current.focus();
      // place cursor at end
      const len = ref.current.value.length;
      ref.current.setSelectionRange(len, len);
    }
  }, [active]);

  const commit = () => {
    if (draft !== value) updateField(path, draft);
    setActive(false);
  };

  const handleKey = (e) => {
    if (!multiline && e.key === "Enter") {
      e.preventDefault();
      commit();
    }
    if (e.key === "Escape") {
      setDraft(value || "");
      setActive(false);
    }
  };

  if (!isEditing) {
    const Tag = as;
    return (
      <Tag className={className} data-testid={testId}>
        {value && value.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < value.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </Tag>
    );
  }

  if (!active) {
    const Tag = as;
    return (
      <Tag
        className={`${className} editable-text`}
        onClick={() => setActive(true)}
        data-testid={testId}
        title="Click to edit"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(true)}
      >
        {value ? (
          value.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < value.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))
        ) : (
          <span className="opacity-50 italic">{placeholder}</span>
        )}
      </Tag>
    );
  }

  if (multiline) {
    return (
      <textarea
        ref={ref}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={handleKey}
        rows={Math.max(3, draft.split("\n").length + 1)}
        placeholder={placeholder}
        className={`${className} w-full bg-white/60 border-2 border-dashed border-ember outline-none p-2 resize-y rounded-sm`}
        data-testid={testId ? `${testId}-input` : undefined}
      />
    );
  }
  return (
    <input
      ref={ref}
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={commit}
      onKeyDown={handleKey}
      placeholder={placeholder}
      className={`${className} w-full bg-white/60 border-2 border-dashed border-ember outline-none p-2 rounded-sm`}
      data-testid={testId ? `${testId}-input` : undefined}
    />
  );
}

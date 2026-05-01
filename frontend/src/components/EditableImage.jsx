import React from "react";
import { useContent } from "@/context/ContentContext";
import { ImageIcon, Pencil } from "lucide-react";

/**
 * EditableImage
 * Click in edit mode prompts for a new image URL.
 * Props:
 *   path: array of keys for the URL field, e.g. ["home", "heroImage"]
 *   altPath: array of keys for the alt text (optional)
 *   src, alt
 *   className: applied to <img>
 *   wrapperClassName: applied to outer wrapper
 *   testId
 */
export default function EditableImage({
  path,
  altPath,
  src,
  alt = "",
  className = "",
  wrapperClassName = "",
  testId,
}) {
  const { isEditing, updateField } = useContent();

  const handleClick = () => {
    if (!isEditing) return;
    const next = window.prompt("Paste a new image URL (leave blank to keep the current one):", src || "");
    if (next === null) return;
    if (next.trim() === "") return;
    updateField(path, next.trim());
    if (altPath) {
      const a = window.prompt("Optional: alt text for accessibility (leave blank to skip):", alt || "");
      if (a !== null && a.trim() !== "") updateField(altPath, a.trim());
    }
  };

  return (
    <div
      className={`relative ${wrapperClassName} ${isEditing ? "editable-image-shell" : ""}`}
      onClick={handleClick}
      role={isEditing ? "button" : undefined}
      tabIndex={isEditing ? 0 : -1}
      onKeyDown={(e) => isEditing && (e.key === "Enter" || e.key === " ") && handleClick()}
      data-testid={testId}
      title={isEditing ? "Click to replace image" : undefined}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${className} sepia-soft`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.opacity = "0.4";
          }}
        />
      ) : (
        <div className={`${className} flex items-center justify-center bg-parchment-dark text-ink-light`}>
          <ImageIcon className="h-10 w-10 opacity-50" />
        </div>
      )}
      {isEditing && (
        <span className="absolute top-2 right-2 inline-flex items-center gap-1 bg-ember text-parchment text-[10px] font-ui tracking-widest uppercase px-2 py-1 rounded-sm shadow">
          <Pencil className="h-3 w-3" /> Edit
        </span>
      )}
    </div>
  );
}

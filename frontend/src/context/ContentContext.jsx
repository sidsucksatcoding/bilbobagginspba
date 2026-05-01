import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { defaultContent } from "@/data/defaultContent";

const STORAGE_KEY = "hobbit-site-content-v1";
const EDIT_KEY = "hobbit-site-edit-v1";
export const EDIT_PIN = "264185";

const ContentContext = createContext(null);

function deepMerge(base, override) {
  if (Array.isArray(base)) return Array.isArray(override) ? override : base;
  if (typeof base === "object" && base !== null) {
    if (typeof override !== "object" || override === null) return base;
    const out = { ...base };
    for (const k of Object.keys(override)) {
      out[k] = deepMerge(base[k], override[k]);
    }
    return out;
  }
  return override !== undefined ? override : base;
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultContent;
      const parsed = JSON.parse(raw);
      return deepMerge(defaultContent, parsed);
    } catch {
      return defaultContent;
    }
  });

  const [isEditing, setIsEditing] = useState(() => {
    return localStorage.getItem(EDIT_KEY) === "1";
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch {
      // localStorage may be full or disabled; silently ignore
    }
  }, [content]);

  useEffect(() => {
    localStorage.setItem(EDIT_KEY, isEditing ? "1" : "0");
  }, [isEditing]);

  // Update a value at a path: e.g. updateField(["home", "title"], "New Title")
  const updateField = useCallback((path, value) => {
    setContent((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      let cur = next;
      for (let i = 0; i < path.length - 1; i++) {
        cur = cur[path[i]];
      }
      cur[path[path.length - 1]] = value;
      return next;
    });
  }, []);

  const resetContent = useCallback(() => {
    if (window.confirm("Reset all content to the original placeholders? This cannot be undone.")) {
      setContent(defaultContent);
    }
  }, []);

  const exportContent = useCallback(() => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "hobbit-site-content.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [content]);

  const value = {
    content,
    updateField,
    isEditing,
    setIsEditing,
    resetContent,
    exportContent,
  };

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used inside ContentProvider");
  return ctx;
}

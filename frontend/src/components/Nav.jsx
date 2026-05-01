import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Lock, Unlock, RotateCcw, Download, Mountain } from "lucide-react";
import { useContent } from "@/context/ContentContext";
import PinDialog from "@/components/PinDialog";
import { toast } from "sonner";

const links = [
  { to: "/", label: "Home", end: true, testId: "nav-home" },
  { to: "/motivations", label: "Motivations", testId: "nav-motivations" },
  { to: "/philosophy", label: "Philosophy", testId: "nav-philosophy" },
  { to: "/traits", label: "Big Five", testId: "nav-traits" },
  { to: "/events", label: "Events", testId: "nav-events" },
];

export default function Nav({ sectionKey = "home" }) {
  const { content, updateField, isEditing, setIsEditing, resetContent, exportContent } = useContent();
  const [pinOpen, setPinOpen] = useState(false);

  const handleLockClick = () => {
    if (isEditing) {
      setIsEditing(false);
      toast.success("Edit mode locked.");
    } else {
      setPinOpen(true);
    }
  };

  const handleBackdropEdit = () => {
    const current = content[sectionKey]?.pageBackdrop || "";
    const next = window.prompt(
      "Paste a new background image URL for this page (mountains, forests, anything):",
      current
    );
    if (next === null) return;
    if (next.trim() === "") return;
    updateField([sectionKey, "pageBackdrop"], next.trim());
    toast.success("Page backdrop updated.");
  };

  return (
    <header
      className="sticky top-0 z-40 border-b border-divider"
      style={{ background: "rgba(244,235,217,0.88)", backdropFilter: "blur(10px)" }}
      data-testid="site-nav"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between gap-4">
        <NavLink
          to="/"
          className="font-heading text-xl sm:text-2xl font-semibold text-ink-dark tracking-tight whitespace-nowrap hover:text-ember transition-colors"
          data-testid="nav-brand"
        >
          The Hobbit
          <span className="hidden sm:inline ml-2 font-ui text-[10px] tracking-[0.3em] uppercase text-forest">
            · Bilbo Baggins
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              data-testid={l.testId}
              className={({ isActive }) =>
                [
                  "font-ui text-[11px] tracking-[0.25em] uppercase transition-all hover:text-ember hover:-translate-y-0.5",
                  isActive
                    ? "text-ember underline decoration-gold decoration-2 underline-offset-[6px]"
                    : "text-ink-brown",
                ].join(" ")
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {isEditing && (
            <>
              <button
                onClick={handleBackdropEdit}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-ui tracking-widest uppercase text-forest hover:text-ember px-2 py-1 transition-colors"
                title="Change this page's background image"
                data-testid="nav-backdrop"
              >
                <Mountain className="h-3.5 w-3.5" /> Backdrop
              </button>
              <button
                onClick={exportContent}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-ui tracking-widest uppercase text-forest hover:text-ember px-2 py-1 transition-colors"
                title="Export your content as JSON backup"
                data-testid="nav-export"
              >
                <Download className="h-3.5 w-3.5" /> Export
              </button>
              <button
                onClick={resetContent}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-ui tracking-widest uppercase text-ember hover:text-ink-dark px-2 py-1 transition-colors"
                title="Reset everything to placeholders"
                data-testid="nav-reset"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Reset
              </button>
            </>
          )}
          <button
            onClick={handleLockClick}
            className={[
              "inline-flex items-center gap-2 px-3 py-2 border-2 transition-all font-ui text-[10px] tracking-[0.25em] uppercase rounded-sm",
              isEditing
                ? "border-ember bg-ember text-parchment hover:bg-ink-dark hover:border-ink-dark"
                : "border-forest text-forest hover:bg-forest hover:text-parchment",
            ].join(" ")}
            data-testid="edit-toggle"
            aria-label={isEditing ? "Lock editing" : "Unlock editing"}
          >
            {isEditing ? <Unlock className="h-3.5 w-3.5" /> : <Lock className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline">{isEditing ? "Editing" : "Edit"}</span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="md:hidden flex items-center justify-center gap-4 px-4 pb-3 overflow-x-auto">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            data-testid={`${l.testId}-mobile`}
            className={({ isActive }) =>
              [
                "font-ui text-[10px] tracking-[0.2em] uppercase whitespace-nowrap",
                isActive ? "text-ember underline decoration-gold underline-offset-4" : "text-ink-brown",
              ].join(" ")
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      <PinDialog open={pinOpen} onOpenChange={setPinOpen} />
    </header>
  );
}

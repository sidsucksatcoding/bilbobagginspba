import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import EditableText from "@/components/EditableText";
import EditableImage from "@/components/EditableImage";
import { useContent } from "@/context/ContentContext";
import { Plus, Trash2 } from "lucide-react";

/**
 * Generic section page rendering a header (title, subtitle, optional image, intro)
 * and a list of accordion items each with a title, image and body text.
 *
 * Props:
 *   sectionKey: top-level key into content (e.g. "motivations")
 */
export default function SectionPage({ sectionKey }) {
  const { content, updateField, isEditing } = useContent();
  const data = content[sectionKey];

  const addItem = () => {
    const newItem = {
      id: `${sectionKey[0]}${Date.now()}`,
      title: "New section",
      image: "",
      text: "Add your text here.",
    };
    updateField([sectionKey, "items"], [...data.items, newItem]);
  };

  const removeItem = (idx) => {
    if (!window.confirm("Remove this section? This cannot be undone.")) return;
    const next = data.items.filter((_, i) => i !== idx);
    updateField([sectionKey, "items"], next);
  };

  return (
    <div className="relative" data-testid={`page-${sectionKey}`}>
      {/* Header */}
      <section className="relative">
        <div className="relative h-[42vh] sm:h-[52vh] overflow-hidden border-b-2 border-divider">
          <EditableImage
            path={[sectionKey, "headerImage"]}
            altPath={[sectionKey, "headerImageAlt"]}
            src={data.headerImage}
            alt={data.headerImageAlt}
            wrapperClassName="absolute inset-0"
            className="absolute inset-0 w-full h-full object-cover"
            testId={`${sectionKey}-header-image`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-parchment" />
        </div>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 -mt-24 relative z-10">
          <div className="paper-card p-8 sm:p-12 shadow-xl">
            <p className="font-ui text-xs tracking-[0.4em] uppercase text-forest mb-3">
              {sectionKey === "events" ? "Chronicles" : "A Study"}
            </p>
            <EditableText
              path={[sectionKey, "pageTitle"]}
              value={data.pageTitle}
              as="h1"
              multiline={false}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-ink-dark font-bold tracking-tight leading-[1.05]"
              testId={`${sectionKey}-title`}
            />
            <EditableText
              path={[sectionKey, "pageSubtitle"]}
              value={data.pageSubtitle}
              as="p"
              multiline={false}
              className="mt-3 font-heading italic text-xl sm:text-2xl text-ember"
              testId={`${sectionKey}-subtitle`}
            />
            <div className="ornament-divider my-6">
              <span className="font-ui text-xs tracking-[0.4em] text-forest">✦</span>
            </div>
            <EditableText
              path={[sectionKey, "intro"]}
              value={data.intro}
              as="p"
              className="font-body text-base sm:text-lg leading-relaxed text-ink-brown"
              testId={`${sectionKey}-intro`}
            />
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <Accordion type="multiple" className="space-y-5" data-testid={`${sectionKey}-accordion`}>
          {data.items.map((item, idx) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="paper-card !border-b-0 px-6 sm:px-8 py-1 shadow-sm hover:shadow-md transition-shadow"
              data-testid={`${sectionKey}-item-${idx}`}
            >
              <AccordionTrigger className="hover:no-underline group py-5">
                <div className="flex items-baseline gap-4 text-left flex-1">
                  <span className="font-ui text-xs tracking-[0.3em] text-gold mt-1 shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-2xl sm:text-3xl font-semibold text-ink-dark group-hover:text-ember transition-colors">
                    {isEditing ? (
                      <EditableText
                        path={[sectionKey, "items", idx, "title"]}
                        value={item.title}
                        as="span"
                        multiline={false}
                        className=""
                        testId={`${sectionKey}-item-${idx}-title`}
                      />
                    ) : (
                      item.title
                    )}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <div className="grid md:grid-cols-5 gap-8 pt-2">
                  <EditableImage
                    path={[sectionKey, "items", idx, "image"]}
                    src={item.image}
                    alt={item.title}
                    wrapperClassName="md:col-span-2 aspect-[4/3] overflow-hidden border-4 border-divider rounded-sm shadow-md bg-parchment-dark"
                    className="w-full h-full object-cover"
                    testId={`${sectionKey}-item-${idx}-image`}
                  />
                  <div className="md:col-span-3">
                    <EditableText
                      path={[sectionKey, "items", idx, "text"]}
                      value={item.text}
                      as="div"
                      className="font-body text-base sm:text-lg leading-relaxed text-ink-brown whitespace-pre-line"
                      testId={`${sectionKey}-item-${idx}-text`}
                    />
                    {isEditing && (
                      <button
                        onClick={() => removeItem(idx)}
                        className="mt-6 inline-flex items-center gap-2 text-xs font-ui tracking-widest uppercase text-ember hover:text-ink-dark"
                        data-testid={`${sectionKey}-item-${idx}-remove`}
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Remove section
                      </button>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {isEditing && (
          <button
            onClick={addItem}
            className="mt-8 w-full inline-flex items-center justify-center gap-2 border-2 border-dashed border-forest text-forest hover:bg-forest hover:text-parchment py-5 font-ui text-xs tracking-[0.3em] uppercase rounded-sm transition-colors"
            data-testid={`${sectionKey}-add-item`}
          >
            <Plus className="h-4 w-4" /> Add a new section
          </button>
        )}
      </section>
    </div>
  );
}

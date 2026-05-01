import React from "react";
import { Link } from "react-router-dom";
import EditableText from "@/components/EditableText";
import EditableImage from "@/components/EditableImage";
import { useContent } from "@/context/ContentContext";
import { ArrowRight } from "lucide-react";

const sections = [
  { to: "/motivations", title: "Motivations & Behaviors", caption: "What stirred the hobbit?" },
  { to: "/philosophy", title: "Philosophy & Kohlberg", caption: "A moral ascent." },
  { to: "/traits", title: "Big Five Traits", caption: "OCEAN through Bilbo." },
  { to: "/events", title: "Events", caption: "There and back again." },
];

export default function Home() {
  const { content } = useContent();
  const { home } = content;

  return (
    <div data-testid="page-home">
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[78vh] sm:h-[88vh] overflow-hidden">
          <EditableImage
            path={["home", "heroImage"]}
            altPath={["home", "heroImageAlt"]}
            src={home.heroImage}
            alt={home.heroImageAlt}
            wrapperClassName="absolute inset-0"
            className="absolute inset-0 w-full h-full object-cover"
            testId="home-hero-image"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-dark/30 via-transparent to-parchment" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div
              className="paper-card relative max-w-2xl w-full p-10 sm:p-14 text-center shadow-2xl"
              style={{ borderTop: "2px solid #D4AF37", borderBottom: "2px solid #D4AF37", borderLeft: "1px solid #D3C4A9", borderRight: "1px solid #D3C4A9" }}
            >
              <p className="font-ui text-xs tracking-[0.45em] uppercase text-forest mb-5">
                A Study of Bilbo Baggins
              </p>
              <EditableText
                path={["home", "title"]}
                value={home.title}
                as="h1"
                multiline={false}
                className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-ink-dark tracking-tight leading-[0.95]"
                testId="home-title"
              />
              <EditableText
                path={["home", "subtitle"]}
                value={home.subtitle}
                as="p"
                multiline={false}
                className="mt-5 font-heading italic text-xl sm:text-2xl text-ember"
                testId="home-subtitle"
              />
              <div className="ornament-divider mt-8 mb-2">
                <span className="font-ui text-xs tracking-[0.4em] text-forest">✦ ✦ ✦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <p className="font-ui text-xs tracking-[0.4em] uppercase text-forest mb-4">Prologue</p>
        <EditableText
          path={["home", "intro"]}
          value={home.intro}
          as="p"
          className="drop-cap font-body text-lg sm:text-xl leading-[1.8] text-ink-brown"
          testId="home-intro"
        />
        <div className="ornament-divider my-12">
          <span className="font-ui text-xs tracking-[0.4em] text-forest">✦</span>
        </div>
        <EditableText
          path={["home", "body"]}
          value={home.body}
          as="div"
          className="font-body text-base sm:text-lg leading-[1.85] text-ink-brown whitespace-pre-line"
          testId="home-body"
        />
      </section>

      {/* Quote */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 pb-20">
        <div className="paper-card p-10 sm:p-14 text-center" style={{ borderLeft: "4px solid #8B3A2B" }}>
          <EditableText
            path={["home", "quote"]}
            value={home.quote}
            as="blockquote"
            className="font-heading italic text-2xl sm:text-3xl text-ink-dark leading-relaxed"
            testId="home-quote"
          />
          <EditableText
            path={["home", "quoteAttr"]}
            value={home.quoteAttr}
            as="p"
            multiline={false}
            className="mt-5 font-ui text-xs tracking-[0.35em] uppercase text-forest"
            testId="home-quote-attr"
          />
        </div>
      </section>

      {/* Section nav cards */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pb-24">
        <p className="font-ui text-xs tracking-[0.4em] uppercase text-forest text-center mb-3">
          The Chapters
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl text-ink-dark text-center mb-12 font-semibold">
          Choose your road
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {sections.map((s, i) => (
            <Link
              key={s.to}
              to={s.to}
              data-testid={`home-card-${s.to.slice(1) || "home"}`}
              className="paper-card p-8 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <span className="font-ui text-xs tracking-[0.3em] text-gold">
                  CHAPTER {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowRight className="h-5 w-5 text-forest group-hover:text-ember group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl text-ink-dark mt-3 font-semibold group-hover:text-ember transition-colors">
                {s.title}
              </h3>
              <p className="font-heading italic text-ink-light mt-2 text-lg">{s.caption}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

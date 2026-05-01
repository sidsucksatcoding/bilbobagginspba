import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "@/components/Nav";
import { useContent } from "@/context/ContentContext";

const ROUTE_TO_KEY = {
  "/": "home",
  "/motivations": "motivations",
  "/philosophy": "philosophy",
  "/traits": "traits",
  "/events": "events",
};

export default function Layout() {
  const location = useLocation();
  const { content } = useContent();
  const sectionKey = ROUTE_TO_KEY[location.pathname] || "home";
  const backdrop = content[sectionKey]?.pageBackdrop || "";

  return (
    <div className="min-h-screen relative">
      {/* Full-page route backdrop image (mountains/greenery) */}
      <div
        className="page-backdrop"
        key={location.pathname}
        style={backdrop ? { backgroundImage: `url("${backdrop}")` } : undefined}
        aria-hidden="true"
        data-testid={`page-backdrop-${sectionKey}`}
      />

      {/* Layered overlays */}
      <div className="shire-ambient" aria-hidden="true" />
      <div className="parchment-grain" aria-hidden="true" />
      <div className="shire-moss" aria-hidden="true" />
      <div className="shire-leaves" aria-hidden="true" />
      <div className="parchment-vignette" aria-hidden="true" />

      {/* Floating drifting leaves for life and motion */}
      <div className="floating-leaves" aria-hidden="true">
        <span className="leaf" style={{ top: "-5%", left: "5%", animationDuration: "55s", animationDelay: "0s" }} />
        <span className="leaf maple" style={{ top: "-5%", left: "30%", animationDuration: "70s", animationDelay: "8s" }} />
        <span className="leaf gold" style={{ top: "-5%", left: "55%", animationDuration: "62s", animationDelay: "15s" }} />
        <span className="leaf" style={{ top: "-5%", left: "78%", animationDuration: "85s", animationDelay: "4s" }} />
        <span className="leaf maple" style={{ top: "-5%", left: "92%", animationDuration: "75s", animationDelay: "22s" }} />
        <span className="leaf gold" style={{ top: "-5%", left: "15%", animationDuration: "90s", animationDelay: "30s" }} />
      </div>

      <Nav sectionKey={sectionKey} />
      <main key={location.pathname} className="page-enter relative z-[2]" data-testid="page-main">
        <Outlet />
      </main>
      <footer className="relative z-[2] border-t border-divider mt-24 py-10 text-center font-ui text-xs tracking-[0.3em] uppercase text-ink-light bg-parchment/70 backdrop-blur-sm">
        <span data-testid="footer-text">A school project · Crafted in the spirit of Middle-earth</span>
      </footer>
    </div>
  );
}

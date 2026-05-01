import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "@/components/Nav";

export default function Layout() {
  const location = useLocation();
  return (
    <div className="min-h-screen relative">
      <div className="shire-ambient" aria-hidden="true" />
      <div className="parchment-grain" aria-hidden="true" />
      <div className="shire-moss" aria-hidden="true" />
      <div className="shire-leaves" aria-hidden="true" />
      <div className="parchment-vignette" aria-hidden="true" />
      <Nav />
      <main key={location.pathname} className="page-enter relative z-[2]" data-testid="page-main">
        <Outlet />
      </main>
      <footer className="relative z-[2] border-t border-divider mt-24 py-10 text-center font-ui text-xs tracking-[0.3em] uppercase text-ink-light">
        <span data-testid="footer-text">A school project · Crafted in the spirit of Middle-earth</span>
      </footer>
    </div>
  );
}

# The Hobbit — A Study of Bilbo Baggins (School Project Site)

## Original Problem Statement
> "i am making a website about The Hobbit and its for a school project. The website should have 5 seperate sections, named Motivations and Behaviors, Philosophy and Kohlberg, Big 5 Personality Traits, and Events (5th = Home/Intro). I will add in the text and stuff later. it should have room for text and images. it doesnt have to be complicated, just make it creative. Make an editing mode where only someone with the pin (264185) can edit the website. split the sections into multiple pages since there will be a lot of text on each thing — each section is one long page with collapsible parts."

## User Choices (verbatim)
- Visual style: Epic / adventurous (Hobbit-themed)
- Character focus: Bilbo Baggins
- 5th section: Home / Intro
- Edit interface needed (user does not code)
- PIN-protected edit mode, PIN: **264185**
- Each section = one long page with collapsible parts
- Image input: paste URLs only (no uploads)
- Use placeholder Middle-earth themed images
- "no need for a backend, all edits saved by the code itself" → interpreted as **frontend-only with localStorage** persistence

## Architecture
- React 19 frontend (CRA + craco), Tailwind CSS, Shadcn UI components.
- React Router v7 — 5 client-side routes.
- React Context (`ContentContext`) for content + edit mode state, synced to `localStorage`.
- No backend usage. FastAPI/MongoDB containers exist but are untouched.

## User Personas
- **The Author (project owner)** — knows the PIN, edits the site in their browser, will paste real text and image URLs over the placeholders before submission.
- **The Reader (teacher / classmates)** — visits site read-only; navigates the 5 chapter pages.

## Core Requirements (static)
1. Five pages: `/`, `/motivations`, `/philosophy`, `/traits`, `/events`.
2. PIN-gated inline editing (text + image URLs).
3. Persistence across reloads (localStorage).
4. Accordion-based collapsible parts on each section page.
5. Creative, distinctive Hobbit / parchment aesthetic — no AI-slop visuals.

## What's Been Implemented (Feb 2026 — initial build)
- Parchment + grain-texture global theme; Cormorant Garamond, Merriweather, Cinzel typography; gold/forest/ember accents.
- Sticky top nav (with mobile sub-row), brand mark, lock toggle.
- PIN dialog (Shadcn Dialog) with error state.
- `EditableText` (click-to-edit inline textarea/input) + `EditableImage` (click triggers URL prompt).
- `SectionPage` generic accordion renderer; supports add/remove items in edit mode.
- Home page: hero + drop-cap intro + quote + 4 chapter cards.
- Default placeholder content for all 5 sections (Bilbo-themed).
- Export-to-JSON backup button + Reset-to-defaults button (edit mode only).
- Tested end-to-end: 18/18 frontend tests passed (testing_agent_v3 iteration 1).

## Prioritized Backlog
- **P1** — Possibly upgrade some Unsplash placeholders that fail to load on slow connections.
- **P2** — Add a "drag to reorder" affordance for accordion items in edit mode.
- **P2** — Allow nested sub-items inside an accordion entry.
- **P2** — Print-friendly stylesheet (so it can be turned in as a PDF).
- **P3** — Cloud-sync option (optional MongoDB backend) so edits persist across devices.

## Next Tasks
- Wait for user to add real content + final images.
- Offer print stylesheet or PDF export if desired.

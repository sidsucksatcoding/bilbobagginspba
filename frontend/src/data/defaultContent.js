// Default placeholder content for the Hobbit project site.
// Replace any text/image via the in-app edit mode (PIN-gated). All edits persist in localStorage.

const placeholder = (paragraphs = 2) =>
  Array(paragraphs)
    .fill(
      "Add your text here. Click the lock icon at the top right and enter the PIN to enable edit mode, then click any paragraph or image to update it."
    )
    .join("\n\n");

export const defaultContent = {
  meta: {
    siteTitle: "The Hobbit",
    siteSubtitle: "A Study of Bilbo Baggins",
  },
  home: {
    pageBackdrop:
      "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?auto=format&fit=crop&q=80&w=2400",
    heroImage:
      "https://images.unsplash.com/photo-1691359065595-7c74aad7ab20?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800",
    heroImageAlt: "Rolling green hills of the Shire",
    title: "There and Back Again",
    subtitle: "A Hobbit's Tale — As Told Through Bilbo Baggins",
    intro:
      "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.",
    body: placeholder(3),
    quote:
      "“It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.”",
    quoteAttr: "— Bilbo Baggins",
  },
  motivations: {
    pageTitle: "Motivations & Behaviors",
    pageSubtitle: "What drove the hobbit out of his hole?",
    pageBackdrop:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=2400",
    headerImage:
      "https://images.unsplash.com/photo-1697353260232-a43bf8371b81?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800",
    headerImageAlt: "A winding forest path",
    intro:
      "Bilbo's journey is built atop a tension between comfort and curiosity. Beneath his quiet, well-fed routines lay an unspoken longing for something more.",
    items: [
      {
        id: "m1",
        title: "The Tookish Stirring",
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "m2",
        title: "The Comfort of the Shire",
        image:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "m3",
        title: "Loyalty to the Company",
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "m4",
        title: "The Lure of the Ring",
        image:
          "https://images.unsplash.com/photo-1518684079-3c830dcef090?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
    ],
  },
  philosophy: {
    pageTitle: "Philosophy & Kohlberg",
    pageSubtitle: "Stages of moral reasoning in a reluctant burglar",
    pageBackdrop:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=2400",
    headerImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800",
    headerImageAlt: "Mountain peaks under a starry sky",
    intro:
      "Kohlberg's six stages of moral development trace a path from obedience to universal ethical principles. Bilbo's choices map a winding ascent through these stages.",
    items: [
      {
        id: "p1",
        title: "Stage 1 — Obedience and Punishment",
        image:
          "https://images.unsplash.com/photo-1448375240586-882707db888b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "p2",
        title: "Stage 2 — Self-Interest",
        image:
          "https://images.unsplash.com/photo-1455218873509-8097305ee378?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "p3",
        title: "Stage 3 — Interpersonal Accord",
        image:
          "https://images.unsplash.com/photo-1542908031-22c1d52a9aaf?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "p4",
        title: "Stage 4 — Authority & Social Order",
        image:
          "https://images.unsplash.com/photo-1502082553048-f009c37129b9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "p5",
        title: "Stage 5 — Social Contract",
        image:
          "https://images.unsplash.com/photo-1473773508845-188df298d2d1?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "p6",
        title: "Stage 6 — Universal Ethical Principles",
        image:
          "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
    ],
  },
  traits: {
    pageTitle: "Big Five Personality Traits",
    pageSubtitle: "Bilbo through the lens of OCEAN",
    pageBackdrop:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2400",
    headerImage:
      "https://images.unsplash.com/photo-1770410152354-cbd4836e87d3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800",
    headerImageAlt: "Misty mountains stacked in soft tones",
    intro:
      "The Five Factor Model — Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism — provides a useful sketch of Bilbo's evolving character.",
    items: [
      {
        id: "t1",
        title: "Openness to Experience",
        image:
          "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "t2",
        title: "Conscientiousness",
        image:
          "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "t3",
        title: "Extraversion",
        image:
          "https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "t4",
        title: "Agreeableness",
        image:
          "https://images.unsplash.com/photo-1552083375-1447ce886485?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "t5",
        title: "Neuroticism",
        image:
          "https://images.unsplash.com/photo-1500964757637-c85e8a162699?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
    ],
  },
  events: {
    pageTitle: "Events",
    pageSubtitle: "Milestones along the road there and back again",
    pageBackdrop:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=2400",
    headerImage:
      "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800",
    headerImageAlt: "Ancient stone bridge through mountains",
    intro:
      "Each event below marks a turning point in Bilbo's quest, from the unexpected party in Bag End to the long road home.",
    items: [
      {
        id: "e1",
        title: "An Unexpected Party",
        image:
          "https://images.unsplash.com/photo-1502082553048-f009c37129b9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "e2",
        title: "Trolls in the Wild",
        image:
          "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "e3",
        title: "Riddles in the Dark",
        image:
          "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "e4",
        title: "Out of the Frying-Pan",
        image:
          "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "e5",
        title: "Flies and Spiders",
        image:
          "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "e6",
        title: "Inside Information",
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "e7",
        title: "The Battle of Five Armies",
        image:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
      {
        id: "e8",
        title: "The Return Journey",
        image:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        text: placeholder(2),
      },
    ],
  },
};

const avatars = [
  {
    id: "elder",
    name: "The Elder",
    subtitle: "First Gen",
    look: "Ao dai or worn military jacket",
    description:
      "You carry memory in your body. Survival feels practical, sacred, and unfinished.",
    stats: ["Resilience +3", "English Fluency -2"],
    traits: ["Endures loss", "Protects family story", "Navigates bureaucracy carefully"],
    modifiers: { social: -4, culture: 10, agency: 2 },
  },
  {
    id: "broker",
    name: "The Broker",
    subtitle: "1.5 / 2nd Gen",
    look: "90s streetwear",
    description:
      "You translate between worlds. Every room asks you to soften one part of yourself.",
    stats: ["Cultural Fluency +3", "Stress +3"],
    traits: ["Interprets for family", "Feels pressure to succeed", "Balances shame and pride"],
    modifiers: { social: 6, culture: 4, agency: 0 },
  },
  {
    id: "creator",
    name: "The Creator",
    subtitle: "3rd Gen",
    look: "Modern professional attire",
    description:
      "You have language for self-definition, but inherited distance from the history beneath it.",
    stats: ["Agency +3", "Heritage Connection -2"],
    traits: ["Questions inherited narratives", "Builds public voice", "Reaches back for roots"],
    modifiers: { social: 4, culture: -6, agency: 10 },
  },
];

const eras = [
  {
    id: "crossing",
    className: "era-crossing",
    image: "./assets/crossing-harbor.svg",
    kicker: "Phase 1",
    title: "The Crossing",
    generation: "1st Generation",
    boss: "Obstacle: The Refugee Act of 1980 and bureaucracy",
    intro:
      "Sepia streets give way to crowded processing rooms and uncertain resettlement forms. Survival is not abstract here; it is made of signatures, ration lines, and who still answers your name.",
    scenes: [
      {
        title: "Departure",
        image: "./assets/scenes/scene-01-escape.jpg",
        setting: "Saigon, April 1975",
        caption: "Heat sits over the street as departure becomes a decision made in whispers.",
        quote: "\"You cannot carry a homeland whole, only the pieces you refuse to drop.\"",
        details: ["humid alleys", "rushed packing", "broken sleep"],
        text:
          "A cousin whispers that the last boats may leave before dawn. Your household can only carry what fits in two bags and what memory can hold.",
        prompt: "What do you protect first?",
        choices: [
          {
            title: "Carry family photographs and documents",
            impact: "Political Agency +8, Cultural Soul +4, Social Capital -3",
            effects: { social: -3, culture: 4, agency: 8 },
          },
          {
            title: "Carry medicine, gold, and practical supplies",
            impact: "Social Capital +5, Cultural Soul -2, Political Agency +1",
            effects: { social: 5, culture: -2, agency: 1 },
          },
          {
            title: "Refuse to leave until every relative is accounted for",
            impact: "Cultural Soul +8, Social Capital -5, Political Agency -2",
            effects: { social: -5, culture: 8, agency: -2 },
          },
        ],
      },
      {
        title: "At Sea",
        image: "./assets/scenes/scene-02-sea.jpg",
        setting: "South China Sea, night crossing",
        caption: "Salt, engine noise, and uncertainty turn every minute into a test of trust.",
        quote: "\"The water is dark enough to hide fear, but not the sound of children crying.\"",
        details: ["crowded deck", "quiet prayers", "storm horizon"],
        text:
          "The boat is overloaded, and rumors spread that pirates or patrols may be nearby. Someone asks whether to conserve fuel, water, or hope.",
        prompt: "How do you steady the people around you?",
        choices: [
          {
            title: "Share scarce supplies and calm the youngest passengers",
            impact: "Cultural Soul +6, Political Agency +2, Social Capital -2",
            effects: { social: -2, culture: 6, agency: 2 },
          },
          {
            title: "Push the captain to move faster, whatever the risk",
            impact: "Social Capital +4, Cultural Soul -2, Political Agency +2",
            effects: { social: 4, culture: -2, agency: 2 },
          },
          {
            title: "Lead a whispered prayer and keep everyone together",
            impact: "Cultural Soul +7, Political Agency +1",
            effects: { social: 0, culture: 7, agency: 1 },
          },
        ],
      },
      {
        title: "The Camp",
        image: "./assets/scenes/scene-03-camp.jpg",
        setting: "U.S. processing center, 1975",
        caption: "Rows of white tents turn survival into paperwork, waiting lines, and numbered uncertainty.",
        quote: "\"In the camp, your body is finally safe, but your future is still being sorted into files.\"",
        details: ["white tents", "numbered queues", "processing tables"],
        text:
          "You arrive at a refugee processing camp where each line leads to another form, another screening, another official deciding what happens next.",
        prompt: "How do you move through the bureaucracy?",
        choices: [
          {
            title: "Keep your full name and insist on its pronunciation",
            impact: "Political Agency +7, Cultural Soul +5, Social Capital -5",
            effects: { social: -5, culture: 5, agency: 7 },
          },
          {
            title: "Accept a simpler nickname to move things along",
            impact: "Social Capital +7, Cultural Soul -4",
            effects: { social: 7, culture: -4, agency: 0 },
          },
          {
            title: "Use both names depending on the room",
            impact: "Social Capital +3, Cultural Soul +2, Political Agency +2",
            effects: { social: 3, culture: 2, agency: 2 },
          },
        ],
      },
      {
        title: "The Sponsor",
        image: "./assets/scenes/scene-04-sponsor.jpg",
        setting: "Church basement welcome table",
        caption: "A handshake across folding tables may decide your first American home.",
        quote: "\"Resettlement begins with strangers trying to become trustworthy before either side knows how.\"",
        details: ["sponsor handshake", "donation boxes", "borrowed chairs"],
        text:
          "In a church basement, a sponsor family offers practical help, rules, and their version of welcome. You can already feel the imbalance in who gets to define gratitude.",
        prompt: "How do you enter this new relationship?",
        choices: [
          {
            title: "Accept their help warmly and adapt to their expectations",
            impact: "Cultural Soul +7, Political Agency +4, Social Capital -2",
            effects: { social: -2, culture: 7, agency: 4 },
          },
          {
            title: "Ask direct questions about work, housing, and independence",
            impact: "Social Capital +8, Cultural Soul -5",
            effects: { social: 8, culture: -5, agency: 0 },
          },
          {
            title: "Find other Vietnamese families and build support alongside sponsorship",
            impact: "Cultural Soul +7, Political Agency +4, Social Capital -2",
            effects: { social: -2, culture: 7, agency: 4 },
          },
        ],
      },
      {
        title: "The Arrival",
        image: "./assets/scenes/scene-05-arrival.jpg",
        setting: "First winter in America",
        caption: "A cold city beyond the window makes distance from home feel suddenly physical.",
        quote: "\"Safety can still feel lonely when the weather, language, and silence are all unfamiliar.\"",
        details: ["snowy street", "steam on glass", "small apartment"],
        text:
          "From a cramped apartment window, you watch snow fall for the first time. The city is quiet, beautiful, and indifferent, and your family must decide what survival will look like here.",
        prompt: "What do you focus on first in this new country?",
        choices: [
          {
            title: "Learn the systems fast: buses, jobs, school, paperwork",
            impact: "Cultural Soul +6, Political Agency +4, Social Capital -1",
            effects: { social: -1, culture: 6, agency: 4 },
          },
          {
            title: "Protect family closeness and recreate home indoors",
            impact: "Social Capital +3, Cultural Soul -1, Political Agency +1",
            effects: { social: 3, culture: -1, agency: 1 },
          },
          {
            title: "Promise yourself you will endure first and process grief later",
            impact: "Social Capital +2, Cultural Soul -5, Political Agency -1",
            effects: { social: 2, culture: -5, agency: -1 },
          },
        ],
      },
    ],
  },
  {
    id: "bridge",
    className: "era-bridge",
    image: "./assets/bridge-market.svg",
    kicker: "Phase 2",
    title: "The Bridge",
    generation: "1.5 / 2nd Generation",
    boss: "Obstacle: The Model Minority Myth",
    intro:
      "The palette shifts to neon storefronts, fluorescent classrooms, and checkout counters where children become interpreters. Belonging now depends on code-switching, performance, and exhaustion.",
    scenes: [
      {
        title: "The School",
        image: "./assets/scenes/scene-06-school.jpg",
        setting: "ESL classroom, late 1980s",
        caption: "You sit between languages, learning English while watching classmates learn how America ranks them.",
        quote: "\"In ESL class, every new word promises access, but every mistake risks shame.\"",
        details: ["chalkboard lessons", "winter coats", "language worksheets"],
        text:
          "A teacher asks you to introduce your family in English. You know the room hears your accent before it hears your ideas.",
        prompt: "How do you present yourself at school?",
        choices: [
          {
            title: "Speak carefully and correctly, even if it means sounding smaller",
            impact: "Cultural Soul +8, Political Agency +4, Social Capital -4",
            effects: { social: -4, culture: 8, agency: 4 },
          },
          {
            title: "Share proudly about your family, even if your English falters",
            impact: "Social Capital +6, Cultural Soul -6",
            effects: { social: 6, culture: -6, agency: 0 },
          },
          {
            title: "Watch first, speak later, and learn the room before risking much",
            impact: "Social Capital +4, Cultural Soul +2, Political Agency +1",
            effects: { social: 4, culture: 2, agency: 1 },
          },
        ],
      },
      {
        title: "The Shop",
        image: "./assets/scenes/scene-07-shop.jpg",
        setting: "Neighborhood nail salon",
        caption: "Fluorescent lights, acetone, and neon signs turn service work into family survival.",
        quote: "\"The shop is both livelihood and classroom: how to smile, endure, and keep the family afloat.\"",
        details: ["open signs", "salon stations", "waiting customers"],
        text:
          "After school, you help at a crowded nail salon where every customer interaction becomes a lesson in class, race, and patience.",
        prompt: "How do you move through the shop?",
        choices: [
          {
            title: "Charm customers and learn the rules of service work quickly",
            impact: "Social Capital +7, Cultural Soul -2, Political Agency -1",
            effects: { social: 7, culture: -2, agency: -1 },
          },
          {
            title: "Stay close to family and protect workers from disrespect",
            impact: "Cultural Soul +7, Political Agency +3, Social Capital -3",
            effects: { social: -3, culture: 7, agency: 3 },
          },
          {
            title: "Study the business itself so the family gains more control later",
            impact: "Political Agency +5, Social Capital +2, Cultural Soul +1",
            effects: { social: 2, culture: 1, agency: 5 },
          },
        ],
      },
      {
        title: "The Broker",
        image: "./assets/scenes/scene-08-broker.jpg",
        setting: "Family apartment, kitchen table",
        caption: "Bills, school forms, and medical notices pile up beside your homework.",
        quote: "\"You become fluent in adult fear before you become fluent in yourself.\"",
        details: ["utility bills", "school forms", "late-night translating"],
        text:
          "Your family needs help translating a hospital letter the same night your own exam is due. No one says you must choose, but the choice arrives anyway.",
        prompt: "Where do you place your energy tonight?",
        choices: [
          {
            title: "Translate everything first and stay up to finish your own work",
            impact: "Cultural Soul +6, Social Capital -2, Political Agency +2",
            effects: { social: -2, culture: 6, agency: 2 },
          },
          {
            title: "Protect your academic future and ask them to wait",
            impact: "Social Capital +6, Cultural Soul -5",
            effects: { social: 6, culture: -5, agency: 0 },
          },
          {
            title: "Call a community elder and build shared support",
            impact: "Political Agency +5, Cultural Soul +4, Social Capital +1",
            effects: { social: 1, culture: 4, agency: 5 },
          },
        ],
      },
      {
        title: "The Enclave",
        image: "./assets/scenes/scene-09-enclave.jpg",
        setting: "Little Saigon, 1990s",
        caption: "Vietnamese signage, crowded storefronts, and familiar sounds turn the street into a parallel world.",
        quote: "\"The enclave is refuge and pressure at once: a place to belong, and a place where everyone knows your family.\"",
        details: ["busy street", "Vietnamese storefronts", "night traffic"],
        text:
          "Walking through Little Saigon, you feel the pull of community and the scrutiny that comes with it. Here, language returns, but so do obligations.",
        prompt: "What role do you take in the enclave?",
        choices: [
          {
            title: "Immerse yourself in the neighborhood and deepen community ties",
            impact: "Cultural Soul +8, Social Capital -2, Political Agency +2",
            effects: { social: -2, culture: 8, agency: 2 },
          },
          {
            title: "Use the enclave when needed, but keep your real ambitions elsewhere",
            impact: "Social Capital +6, Cultural Soul -4, Political Agency +2",
            effects: { social: 6, culture: -4, agency: 2 },
          },
          {
            title: "Bridge the enclave to outside institutions and opportunities",
            impact: "Political Agency +5, Cultural Soul +3, Social Capital +3",
            effects: { social: 3, culture: 3, agency: 5 },
          },
        ],
      },
      {
        title: "The Pressure",
        image: "./assets/scenes/scene-10-pressure.jpg",
        setting: "High school graduation",
        caption: "Applause lands heavy when success is framed as proof of a stereotype, not a life.",
        quote: "\"Sometimes the diploma feels less like freedom and more like a demand to keep performing gratitude.\"",
        details: ["graduation robes", "family pride", "model minority banner"],
        text:
          "At graduation, adults celebrate you as a symbol of immigrant success. Beneath the praise is a clear message: do not fail, do not complain, and do not embarrass the story they prefer.",
        prompt: "How do you carry those expectations forward?",
        choices: [
          {
            title: "Challenge the claim and name who gets erased by it",
            impact: "Political Agency +8, Cultural Soul +3, Social Capital -5",
            effects: { social: -5, culture: 3, agency: 8 },
          },
          {
            title: "Smile, accept the praise, and protect your grades",
            impact: "Social Capital +7, Cultural Soul -2, Political Agency -2",
            effects: { social: 7, culture: -2, agency: -2 },
          },
          {
            title: "Redirect attention to your family’s refugee history",
            impact: "Political Agency +4, Cultural Soul +4, Social Capital +1",
            effects: { social: 1, culture: 4, agency: 4 },
          },
        ],
      },
    ],
  },
  {
    id: "reclamation",
    className: "era-reclamation",
    image: "./assets/reclamation-studio.svg",
    kicker: "Phase 3",
    title: "The Reclamation",
    generation: "3rd / 4th Generation",
    boss: "Obstacle: Orientalism and media misrepresentation",
    intro:
      "Now the world is a studio, a seminar, a microphone, and a search for what was never fully passed down. Reclamation means deciding who gets to narrate the past and what language the future inherits.",
    scenes: [
      {
        title: "The Altar",
        image: "./assets/scenes/scene-11-altar.jpg",
        setting: "Modern apartment, family altar",
        caption: "An ancestor altar glows inside a sleek contemporary home, proving memory can survive even in redesigned space.",
        quote: "\"Some inherit fluency. Others inherit a room where the dead are still greeted every morning.\"",
        details: ["ancestor portraits", "offerings", "city skyline"],
        text:
          "You stand before a family altar that feels both intimate and slightly unfamiliar. It is one of the clearest surviving rituals connecting your life to people you never fully knew.",
        prompt: "How do you relate to inherited ritual?",
        choices: [
          {
            title: "Learn the altar's meanings and make the ritual your own",
            impact: "Cultural Soul +8, Political Agency +5, Social Capital -2",
            effects: { social: -2, culture: 8, agency: 5 },
          },
          {
            title: "Respect it quietly, even if you do not fully understand it",
            impact: "Social Capital +7, Political Agency +1, Cultural Soul -5",
            effects: { social: 7, culture: -5, agency: 1 },
          },
          {
            title: "Use the altar as a starting point for deeper family research",
            impact: "Cultural Soul +4, Political Agency +2, Social Capital +1",
            effects: { social: 1, culture: 4, agency: 2 },
          },
        ],
      },
      {
        title: "The Critique",
        image: "./assets/scenes/scene-12-critique.jpg",
        setting: "Film set consultation",
        caption: "A war movie set waits behind you while a script in your hands makes the old distortions impossible to ignore.",
        quote: "\"Critique is not ingratitude. Sometimes it is the first honest form of care.\"",
        details: ["film lights", "rewritten script", "director standoff"],
        text:
          "A production wants your cultural expertise but resists your edits. You can already tell they hoped for decoration, not intervention.",
        prompt: "How do you challenge the set's narrative?",
        choices: [
          {
            title: "Push hard for structural rewrites, even if it costs you the job",
            impact: "Political Agency +8, Cultural Soul +4, Social Capital -3",
            effects: { social: -3, culture: 4, agency: 8 },
          },
          {
            title: "Make only the edits the director will actually accept",
            impact: "Social Capital +7, Political Agency -4, Cultural Soul -3",
            effects: { social: 7, culture: -3, agency: -4 },
          },
          {
            title: "Use the production conflict to build leverage for future projects",
            impact: "Social Capital +3, Cultural Soul +3, Political Agency +4",
            effects: { social: 3, culture: 3, agency: 4 },
          },
        ],
      },
      {
        title: "The Voice",
        image: "./assets/scenes/scene-13-voice.jpg",
        setting: "Live podcast studio",
        caption: "The microphone turns private memory into public narrative on your terms.",
        quote: "\"A voice becomes power when it stops asking permission to sound like itself.\"",
        details: ["live broadcast", "studio audience", "public storytelling"],
        text:
          "Your platform has grown. Listeners are ready, but sponsors and audiences still reward the cleanest, safest version of your story.",
        prompt: "What voice do you bring on air?",
        choices: [
          {
            title: "Speak with full complexity, even if some listeners leave",
            impact: "Political Agency +8, Cultural Soul +4, Social Capital -3",
            effects: { social: -3, culture: 4, agency: 8 },
          },
          {
            title: "Package the story accessibly so it reaches the broadest audience",
            impact: "Social Capital +7, Political Agency -3, Cultural Soul -2",
            effects: { social: 7, culture: -2, agency: -3 },
          },
          {
            title: "Balance clarity with critique and teach listeners how to stay",
            impact: "Social Capital +3, Cultural Soul +3, Political Agency +4",
            effects: { social: 3, culture: 3, agency: 4 },
          },
        ],
      },
      {
        title: "The Classroom",
        image: "./assets/scenes/scene-14-classroom.jpg",
        setting: "University classroom",
        caption: "You are no longer just studying the diaspora. You are helping define how it is taught.",
        quote: "\"To teach the history is to refuse letting other people summarize your existence for you.\"",
        details: ["diaspora lecture", "student audience", "history slide"],
        text:
          "Students watch as you present the history of the Vietnamese diaspora. The room is attentive, but you must decide whether to stay legible or demand deeper reckoning.",
        prompt: "How do you frame the lesson?",
        choices: [
          {
            title: "Center rupture, war, and displacement without softening it",
            impact: "Political Agency +8, Cultural Soul +3, Social Capital -4",
            effects: { social: -4, culture: 3, agency: 8 },
          },
          {
            title: "Make the history accessible first, trusting nuance can follow",
            impact: "Social Capital +6, Political Agency +1, Cultural Soul -1",
            effects: { social: 6, culture: -1, agency: 1 },
          },
          {
            title: "Invite multiple generations into the lesson so memory stays collective",
            impact: "Political Agency +5, Cultural Soul +5, Social Capital +1",
            effects: { social: 1, culture: 5, agency: 5 },
          },
        ],
      },
      {
        title: "The Return",
        image: "./assets/scenes/scene-15-return.jpg",
        setting: "Ho Chi Minh City, present day",
        caption: "The city is vibrant, unfamiliar, and intimately linked to the stories that shaped you from afar.",
        quote: "\"Return does not restore a lost past. It reveals what distance changed in both you and the place itself.\"",
        details: ["city panorama", "return journey", "layered belonging"],
        text:
          "Standing above Ho Chi Minh City, you feel the pull of recognition and estrangement at once. Returning does not resolve identity; it makes it more honest.",
        prompt: "What does return mean to you now?",
        choices: [
          {
            title: "Treat return as a beginning and rebuild your ties intentionally",
            impact: "Cultural Soul +9, Political Agency +2",
            effects: { social: 0, culture: 9, agency: 2 },
          },
          {
            title: "Accept that belonging can stay partial and still be real",
            impact: "Social Capital +3, Political Agency +4, Cultural Soul -2",
            effects: { social: 3, culture: -2, agency: 4 },
          },
          {
            title: "Carry lessons from both homes into a new diasporic identity",
            impact: "Cultural Soul +4, Political Agency +5, Social Capital +1",
            effects: { social: 1, culture: 4, agency: 5 },
          },
        ],
      },
    ],
  },
];

const scriptOptions = [
  {
    text: "The refugee mother exists only to cry silently while American soldiers explain the war.",
    harmful: true,
  },
  {
    text: "A consultant suggests adding Vietnamese dialogue and family perspective to the scene.",
    harmful: false,
  },
  {
    text: "The village appears as scenery with no named Vietnamese characters or motives.",
    harmful: true,
  },
  {
    text: "A producer wants the script to show that memory is contested inside the diaspora itself.",
    harmful: false,
  },
  {
    text: "A character is described as mystical, loyal, and grateful to be rescued by America.",
    harmful: true,
  },
];

const state = {
  selectedAvatarId: "elder",
  social: 50,
  culture: 50,
  agency: 50,
  eraIndex: -1,
  sceneIndex: 0,
  history: [],
  bias: { social: 0, culture: 0, agency: 0 },
  scriptSelections: new Set(),
};

const introContent = {
  kicker: "Classroom Narrative RPG",
  title: "Carry a family story across generations.",
  description:
    "Move through three eras of the Vietnamese diaspora, making choices that shape survival, belonging, memory, and voice.",
  image: "./assets/intro-journey.svg",
  caption:
    "From departure to resettlement to reclamation, each chapter shifts the world around you as much as the choices within it.",
};

const elements = {
  app: document.getElementById("app"),
  avatarGrid: document.getElementById("avatar-grid"),
  startButton: document.getElementById("start-button"),
  resetButton: document.getElementById("reset-button"),
  playAgainButton: document.getElementById("play-again-button"),
  heroPanel: document.getElementById("hero-panel"),
  gamePanel: document.getElementById("game-panel"),
  miniPanel: document.getElementById("mini-panel"),
  reportPanel: document.getElementById("report-panel"),
  chapterTag: document.getElementById("chapter-tag"),
  heroTitle: document.getElementById("hero-title"),
  heroDescription: document.getElementById("hero-description"),
  heroImage: document.getElementById("hero-image"),
  heroVisualCaption: document.getElementById("hero-visual-caption"),
  eraKicker: document.getElementById("era-kicker"),
  eraTitle: document.getElementById("era-title"),
  eraGeneration: document.getElementById("era-generation"),
  eraBoss: document.getElementById("era-boss"),
  socialValue: document.getElementById("social-value"),
  cultureValue: document.getElementById("culture-value"),
  agencyValue: document.getElementById("agency-value"),
  socialBar: document.getElementById("social-bar"),
  cultureBar: document.getElementById("culture-bar"),
  agencyBar: document.getElementById("agency-bar"),
  sceneImage: document.getElementById("scene-image"),
  sceneLabel: document.getElementById("scene-label"),
  sceneSetting: document.getElementById("scene-setting"),
  sceneCaption: document.getElementById("scene-caption"),
  memoryStrip: document.getElementById("memory-strip"),
  sceneQuote: document.getElementById("scene-quote"),
  sceneTitle: document.getElementById("scene-title"),
  sceneText: document.getElementById("scene-text"),
  choicePrompt: document.getElementById("choice-prompt"),
  choiceLens: document.getElementById("choice-lens"),
  choicesContainer: document.getElementById("choices-container"),
  avatarEvolution: document.getElementById("avatar-evolution"),
  selectedAvatarSummary: document.getElementById("selected-avatar-summary"),
  traitList: document.getElementById("trait-list"),
  instinctText: document.getElementById("instinct-text"),
  instinctTags: document.getElementById("instinct-tags"),
  scriptLines: document.getElementById("script-lines"),
  resolveMiniGame: document.getElementById("resolve-mini-game"),
  reportTitle: document.getElementById("report-title"),
  reportSummary: document.getElementById("report-summary"),
  reportDetails: document.getElementById("report-details"),
};

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function getSelectedAvatar() {
  return avatars.find((avatar) => avatar.id === state.selectedAvatarId) ?? avatars[0];
}

function getResourceEntries() {
  return [
    ["social", state.social],
    ["culture", state.culture],
    ["agency", state.agency],
  ].sort((a, b) => b[1] - a[1]);
}

function getDominantLean() {
  const sorted = [
    ["social", state.bias.social + state.social * 0.08],
    ["culture", state.bias.culture + state.culture * 0.08],
    ["agency", state.bias.agency + state.agency * 0.08],
  ].sort((a, b) => b[1] - a[1]);

  const [first, second] = sorted;
  if (Math.abs(first[1] - second[1]) < 1.2) {
    return "hybrid";
  }

  return first[0];
}

function getLeanLabel(lean) {
  return {
    social: "Social Capital",
    culture: "Cultural Soul",
    agency: "Political Agency",
    hybrid: "Hybrid Instinct",
  }[lean];
}

function describeAvatarState(lean) {
  const phrases = {
    social: {
      look: "Your posture, styling, and instincts now lean toward institutional access and strategic assimilation.",
      lens: "You increasingly scan rooms for safety, optics, and the cost of standing out.",
      token: "SC",
    },
    culture: {
      look: "Your appearance now carries more ritual, memory, and visible connection to family and heritage.",
      lens: "You increasingly make decisions by asking what protects language, elders, and communal memory.",
      token: "CS",
    },
    agency: {
      look: "Your look sharpens into public voice and self-definition, signaling a readiness to intervene and speak back.",
      lens: "You increasingly evaluate choices by who controls the story and who gets erased.",
      token: "PA",
    },
    hybrid: {
      look: "Your appearance reflects a layered identity, carrying access, memory, and voice at the same time.",
      lens: "You are learning to balance survival, heritage, and authorship without letting one erase the others.",
      token: "HY",
    },
  };

  return phrases[lean];
}

function getChoiceLean(choice) {
  const entries = Object.entries(choice.effects).sort((a, b) => b[1] - a[1]);
  return entries[0]?.[0] ?? "agency";
}

function getInstinctBonus(choice) {
  const lean = getChoiceLean(choice);
  const dominant = getDominantLean();
  if (dominant === "hybrid" || dominant !== lean) {
    return null;
  }

  return { lean, amount: 2 };
}

function renderAvatarCards() {
  elements.avatarGrid.innerHTML = "";

  avatars.forEach((avatar) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `avatar-card ${avatar.id === state.selectedAvatarId ? "selected" : ""}`;
    button.innerHTML = `
      <div class="avatar-title-row">
        <h3>${avatar.name}</h3>
        <span class="avatar-subtitle">${avatar.subtitle}</span>
      </div>
      <p><strong>Look:</strong> ${avatar.look}</p>
      <p>${avatar.description}</p>
      <div class="stats-row">
        ${avatar.stats.map((stat) => `<span class="stat-pill">${stat}</span>`).join("")}
      </div>
    `;
    button.addEventListener("click", () => {
      state.selectedAvatarId = avatar.id;
      renderAvatarCards();
      renderAvatarSummary();
    });
    elements.avatarGrid.appendChild(button);
  });
}

function renderAvatarSummary() {
  const avatar = getSelectedAvatar();
  const dominantLean = getDominantLean();
  const avatarState = describeAvatarState(dominantLean);
  elements.selectedAvatarSummary.innerHTML = `
    <p><strong>${avatar.name}</strong> enters this journey carrying ${avatar.look.toLowerCase()}.</p>
    <p>${avatar.description}</p>
    <p>${avatarState.look}</p>
  `;

  elements.traitList.innerHTML = "";
  const topResources = getResourceEntries()
    .slice(0, 2)
    .map(([resource, value]) => `${getLeanLabel(resource)} ${value}`);

  [...avatar.traits, ...topResources].forEach((trait) => {
    const pill = document.createElement("span");
    pill.className = "trait-pill";
    pill.textContent = trait;
    elements.traitList.appendChild(pill);
  });

  elements.avatarEvolution.innerHTML = `
    <div class="avatar-portrait ${dominantLean}">
      <div class="avatar-figure">
        <div class="avatar-head"></div>
        <div class="avatar-accent"></div>
        <div class="avatar-body"></div>
      </div>
      <div class="avatar-token">${avatarState.token}</div>
    </div>
    <div class="avatar-summary">
      <p><strong>Current Evolution:</strong> ${getLeanLabel(dominantLean)}</p>
      <p>${avatarState.lens}</p>
    </div>
  `;

  elements.instinctText.textContent = avatarState.lens;
  elements.instinctTags.innerHTML = "";
  [
    `Social ${state.bias.social}`,
    `Culture ${state.bias.culture}`,
    `Agency ${state.bias.agency}`,
  ].forEach((tag) => {
    const pill = document.createElement("span");
    pill.className = "trait-pill";
    pill.textContent = tag;
    elements.instinctTags.appendChild(pill);
  });
}

function applyAvatarBaseModifiers() {
  const avatar = getSelectedAvatar();
  state.social = clamp(50 + avatar.modifiers.social);
  state.culture = clamp(50 + avatar.modifiers.culture);
  state.agency = clamp(50 + avatar.modifiers.agency);
}

function updateMeters() {
  elements.socialValue.textContent = state.social;
  elements.cultureValue.textContent = state.culture;
  elements.agencyValue.textContent = state.agency;
  elements.socialBar.style.width = `${state.social}%`;
  elements.cultureBar.style.width = `${state.culture}%`;
  elements.agencyBar.style.width = `${state.agency}%`;
}

function setEraClass(className) {
  elements.app.className = `app ${className}`;
}

function showPanel(panelName) {
  elements.heroPanel.classList.add("hidden");
  elements.gamePanel.classList.add("hidden");
  elements.miniPanel.classList.add("hidden");
  elements.reportPanel.classList.add("hidden");
  elements[panelName].classList.remove("hidden");
}

function beginGame() {
  state.eraIndex = 0;
  state.sceneIndex = 0;
  state.history = [];
  state.scriptSelections = new Set();
  applyAvatarBaseModifiers();
  updateMeters();
  showPanel("gamePanel");
  renderEra();
}

function renderEra() {
  const era = eras[state.eraIndex];
  const scene = era.scenes[state.sceneIndex];
  setEraClass(era.className);
  elements.chapterTag.textContent = era.kicker;
  elements.heroTitle.textContent = era.title;
  elements.heroDescription.textContent = era.intro;
  elements.heroImage.src = era.image;
  elements.heroImage.alt = `${era.title} illustration`;
  elements.heroVisualCaption.textContent = era.intro;
  elements.eraKicker.textContent = era.kicker;
  elements.eraTitle.textContent = era.title;
  elements.eraGeneration.textContent = era.generation;
  elements.eraBoss.textContent = era.boss;
  elements.sceneLabel.textContent = `Scene ${state.sceneIndex + 1} of ${era.scenes.length}`;
  elements.sceneImage.src = scene.image ?? era.image;
  elements.sceneImage.alt = `${scene.title} scene art for ${era.title}`;
  elements.sceneSetting.textContent = scene.setting;
  elements.sceneCaption.textContent = scene.caption;
  elements.sceneQuote.textContent = scene.quote;
  elements.memoryStrip.innerHTML = "";
  scene.details.forEach((detail) => {
    const pill = document.createElement("span");
    pill.className = "memory-pill";
    pill.textContent = detail;
    elements.memoryStrip.appendChild(pill);
  });
  elements.sceneTitle.textContent = scene.title;
  elements.sceneText.textContent = scene.text;
  elements.choicePrompt.textContent = scene.prompt;
  renderChoices(scene.choices);
  renderAvatarSummary();
}

function renderChoices(choices) {
  elements.choicesContainer.innerHTML = "";
  const dominantLean = getDominantLean();
  elements.choiceLens.textContent =
    dominantLean === "hybrid"
      ? "Your avatar is balancing multiple instincts right now, so no single choice gets a strong pull."
      : `Your avatar currently leans toward ${getLeanLabel(dominantLean)}. Matching choices will slightly reinforce that instinct.`;

  choices.forEach((choice) => {
    const instinctBonus = getInstinctBonus(choice);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `choice-button ${instinctBonus ? "instinct-match" : ""}`;
    button.innerHTML = `
      <span class="choice-title">${choice.title}</span>
      <span class="choice-impact">${choice.impact}</span>
      ${instinctBonus ? `<span class="choice-badge">Instinct bonus: +${instinctBonus.amount} ${getLeanLabel(instinctBonus.lean)}</span>` : ""}
    `;
    button.addEventListener("click", () => chooseOption(choice));
    elements.choicesContainer.appendChild(button);
  });
}

function chooseOption(choice) {
  const instinctBonus = getInstinctBonus(choice);
  state.social = clamp(state.social + choice.effects.social + (instinctBonus?.lean === "social" ? instinctBonus.amount : 0));
  state.culture = clamp(state.culture + choice.effects.culture + (instinctBonus?.lean === "culture" ? instinctBonus.amount : 0));
  state.agency = clamp(state.agency + choice.effects.agency + (instinctBonus?.lean === "agency" ? instinctBonus.amount : 0));
  const lean = getChoiceLean(choice);
  state.bias[lean] += 1;
  updateMeters();

  const era = eras[state.eraIndex];
  const scene = era.scenes[state.sceneIndex];
  state.history.push({
    era: era.title,
    scene: scene.title,
    choice: instinctBonus ? `${choice.title} (instinct reinforced)` : choice.title,
  });

  state.sceneIndex += 1;

  const finishedEra = state.sceneIndex >= era.scenes.length;
  if (!finishedEra) {
    renderEra();
    return;
  }

  if (era.id === "bridge") {
    renderMiniGame();
    return;
  }

  state.eraIndex += 1;
  state.sceneIndex = 0;

  if (state.eraIndex >= eras.length) {
    renderReport();
    return;
  }

  renderEra();
}

function renderMiniGame() {
  showPanel("miniPanel");
  setEraClass("era-bridge");
  elements.scriptLines.innerHTML = "";

  scriptOptions.forEach((line, index) => {
    const card = document.createElement("div");
    card.className = "script-line";
    card.dataset.index = String(index);
    card.innerHTML = `
      <p class="line-text">${line.text}</p>
      <button type="button" class="toggle-button">Mark in Red Ink</button>
    `;

    const toggle = card.querySelector(".toggle-button");
    toggle.addEventListener("click", () => {
      if (state.scriptSelections.has(index)) {
        state.scriptSelections.delete(index);
      } else {
        state.scriptSelections.add(index);
      }
      card.classList.toggle("crossed", state.scriptSelections.has(index));
      toggle.textContent = state.scriptSelections.has(index) ? "Restore Line" : "Mark in Red Ink";
    });

    elements.scriptLines.appendChild(card);
  });
}

function resolveMiniGame() {
  let authenticEdits = 0;
  let harmfulUntouched = 0;
  let safeLinesCut = 0;

  scriptOptions.forEach((line, index) => {
    const selected = state.scriptSelections.has(index);
    if (line.harmful && selected) authenticEdits += 1;
    if (line.harmful && !selected) harmfulUntouched += 1;
    if (!line.harmful && selected) safeLinesCut += 1;
  });

  state.agency = clamp(state.agency + authenticEdits * 6 - safeLinesCut * 2);
  state.culture = clamp(state.culture + authenticEdits * 5 - harmfulUntouched * 5);
  state.social = clamp(state.social - authenticEdits * 2 - safeLinesCut * 4 + 4);
  state.bias.agency += authenticEdits;
  state.bias.culture += authenticEdits;
  state.bias.social += safeLinesCut;
  updateMeters();

  state.history.push({
    era: "The Sympathizer Edit Room",
    scene: "Media Event",
    choice: `Edited ${authenticEdits} harmful trope(s), left ${harmfulUntouched} untouched, removed ${safeLinesCut} useful line(s).`,
  });

  state.eraIndex += 1;
  state.sceneIndex = 0;
  showPanel("gamePanel");
  renderEra();
}

function buildReportText() {
  const reportParts = [];

  if (state.social >= 70) {
    reportParts.push("Your lineage learned how to move through mainstream American institutions with visible credibility.");
  } else if (state.social <= 35) {
    reportParts.push("Your lineage remained guarded at the edges of mainstream acceptance, often paying a price for refusing easy assimilation.");
  } else {
    reportParts.push("Your lineage moved in and out of acceptance, never fully trusting what belonging required in return.");
  }

  if (state.culture >= 70) {
    reportParts.push("Family memory, ritual, and language stayed alive enough to be passed forward with intention.");
  } else if (state.culture <= 35) {
    reportParts.push("Important pieces of heritage thinned out across generations, leaving gaps that later descendants now feel compelled to recover.");
  } else {
    reportParts.push("Heritage survived in fragments: recipes, tones of voice, half-told stories, and occasional returns.");
  }

  if (state.agency >= 70) {
    reportParts.push("By the end, your family did more than endure representation. You helped author it.");
  } else if (state.agency <= 35) {
    reportParts.push("Other people often narrated your family’s history first, shaping how the story was understood in public.");
  } else {
    reportParts.push("Your family found moments of self-definition, though institutional power still framed much of the story.");
  }

  return reportParts.join(" ");
}

function renderReport() {
  showPanel("reportPanel");
  setEraClass("era-report");

  const avatar = getSelectedAvatar();
  elements.reportTitle.textContent = `${avatar.name}: Heritage Report`;
  elements.reportSummary.textContent = buildReportText();
  elements.reportDetails.innerHTML = "";

  const endingCards = [
    {
      label: "Final Balance",
      body: `Social Capital ${state.social}, Cultural Soul ${state.culture}, Political Agency ${state.agency}.`,
    },
    {
      label: "Legacy Snapshot",
      body:
        state.culture > state.social
          ? "You protected family memory even when it complicated belonging."
          : "You secured access and stability, but some intimacy with heritage became harder to keep.",
    },
    {
      label: "Avatar Evolution",
      body: `${getSelectedAvatar().name} finished the journey leaning toward ${getLeanLabel(getDominantLean())}.`,
    },
    {
      label: "Debrief Prompt",
      body:
        "Which choice felt most unfair? Which generation carried the heaviest translating burden? What would repair look like now?",
    },
  ];

  endingCards.forEach((card) => {
    const div = document.createElement("div");
    div.className = "detail-card";
    div.innerHTML = `<strong>${card.label}</strong><p>${card.body}</p>`;
    elements.reportDetails.appendChild(div);
  });

  state.history.slice(-4).forEach((entry) => {
    const div = document.createElement("div");
    div.className = "detail-card";
    div.innerHTML = `<strong>${entry.era} · ${entry.scene}</strong><p>${entry.choice}</p>`;
    elements.reportDetails.appendChild(div);
  });
}

function resetGame() {
  state.eraIndex = -1;
  state.sceneIndex = 0;
  state.history = [];
  state.bias = { social: 0, culture: 0, agency: 0 };
  state.scriptSelections = new Set();
  applyAvatarBaseModifiers();
  updateMeters();
  setEraClass("era-intro");
  showPanel("heroPanel");
  elements.chapterTag.textContent = introContent.kicker;
  elements.heroTitle.textContent = introContent.title;
  elements.heroDescription.textContent = introContent.description;
  elements.heroImage.src = introContent.image;
  elements.heroImage.alt = "Stylized collage of sea, city lights, and a recording studio";
  elements.heroVisualCaption.textContent = introContent.caption;
  renderAvatarCards();
  renderAvatarSummary();
}

elements.startButton.addEventListener("click", beginGame);
elements.resetButton.addEventListener("click", resetGame);
elements.playAgainButton.addEventListener("click", resetGame);
elements.resolveMiniGame.addEventListener("click", resolveMiniGame);

renderAvatarCards();
resetGame();

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
        image: "./assets/scene-01-escape.svg",
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
        image: "./assets/scene-02-sea.svg",
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
        title: "Resettlement Desk",
        image: "./assets/scene-03-camp.svg",
        setting: "Camp processing office",
        caption: "A metal chair, a paper form, and the first official version of your future.",
        quote: "\"In one column they ask who you are. In another they ask what name America can tolerate.\"",
        details: ["paper forms", "sponsor smiles", "translated names"],
        text:
          "An intake officer asks you to shorten your name because it will be easier in America. A sponsor family waits nearby, smiling politely.",
        prompt: "How do you answer?",
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
        title: "Little Saigon Begins",
        image: "./assets/scene-04-sponsor.svg",
        setting: "Church basement, early resettlement years",
        caption: "Folded chairs and styrofoam cups become the first architecture of community.",
        quote: "\"A neighborhood can begin with one pot of soup and a table where grief is finally spoken aloud.\"",
        details: ["mutual aid", "community flyers", "borrowed rooms"],
        text:
          "A church basement hosts the first gathering of displaced families. Someone asks whether rebuilding community matters more than blending in quickly.",
        prompt: "Where do you spend your energy?",
        choices: [
          {
            title: "Help build mutual aid networks and language schools",
            impact: "Cultural Soul +7, Political Agency +4, Social Capital -2",
            effects: { social: -2, culture: 7, agency: 4 },
          },
          {
            title: "Focus on work, silence grief, and adapt fast",
            impact: "Social Capital +8, Cultural Soul -5",
            effects: { social: 8, culture: -5, agency: 0 },
          },
          {
            title: "Tell younger refugees your story so it is not erased",
            impact: "Political Agency +8, Cultural Soul +3",
            effects: { social: 0, culture: 3, agency: 8 },
          },
        ],
      },
      {
        title: "Letter Home",
        image: "./assets/scene-05-arrival.svg",
        setting: "California apartment, late evening",
        caption: "The new world is thin-walled, fluorescent, and full of untranslatable ache.",
        quote: "\"Even in safety, there are nights when survival sounds like homesickness.\"",
        details: ["shared apartment", "money orders", "unanswered letters"],
        text:
          "A relative asks whether you will write back to those left behind, even if the letter may be censored or never arrive.",
        prompt: "How do you carry responsibility across distance?",
        choices: [
          {
            title: "Write honestly and send money when you can",
            impact: "Cultural Soul +6, Political Agency +4, Social Capital -1",
            effects: { social: -1, culture: 6, agency: 4 },
          },
          {
            title: "Keep letters brief and focused on survival",
            impact: "Social Capital +3, Cultural Soul -1, Political Agency +1",
            effects: { social: 3, culture: -1, agency: 1 },
          },
          {
            title: "Avoid writing to protect everyone from risk",
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
        title: "Checkout Counter",
        image: "./assets/scene-06-school.svg",
        setting: "Little Saigon grocery, after school",
        caption: "You are still carrying a backpack, but the room expects you to be an interpreter.",
        quote: "\"Some children learn algebra at the register and adulthood in aisle six.\"",
        details: ["cash register", "accent mockery", "waiting line"],
        text:
          "At a grocery store, a cashier mocks your parent’s accented English while the line behind you grows impatient.",
        prompt: "What do you do?",
        choices: [
          {
            title: "Defend your parent publicly and translate on their terms",
            impact: "Cultural Soul +8, Political Agency +4, Social Capital -4",
            effects: { social: -4, culture: 8, agency: 4 },
          },
          {
            title: "Stay quiet to get through the moment faster",
            impact: "Social Capital +6, Cultural Soul -6",
            effects: { social: 6, culture: -6, agency: 0 },
          },
          {
            title: "Make a joke to diffuse tension and then explain",
            impact: "Social Capital +4, Cultural Soul +2, Political Agency +1",
            effects: { social: 4, culture: 2, agency: 1 },
          },
        ],
      },
      {
        title: "Living Room Translation",
        image: "./assets/scene-08-broker.svg",
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
        title: "Honor Roll Hallway",
        image: "./assets/scene-10-pressure.svg",
        setting: "Suburban high school, award day",
        caption: "Recognition arrives wrapped in assumptions about race, obedience, and gratitude.",
        quote: "\"Praise can still be a cage if it only loves the version of you that never complains.\"",
        details: ["award certificates", "polite stereotypes", "hallway applause"],
        text:
          "A teacher praises you as proof that hard work solves racism for everyone. Classmates turn to you as if you should agree.",
        prompt: "How do you respond to the model minority script?",
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
      {
        title: "College Essay",
        image: "./assets/scene-09-enclave.svg",
        setting: "Computer lab, application season",
        caption: "The cursor blinks like a dare: be legible, but not too sharp.",
        quote: "\"Admissions wants your pain translated into inspiration and your politics trimmed into resilience.\"",
        details: ["application draft", "scholarship pressure", "quiet rage"],
        text:
          "An admissions counselor hints that your story will be more appealing if it sounds grateful, tidy, and apolitical.",
        prompt: "Which version of yourself goes on the page?",
        choices: [
          {
            title: "Write the painful truth, including rage and contradiction",
            impact: "Political Agency +9, Cultural Soul +4, Social Capital -4",
            effects: { social: -4, culture: 4, agency: 9 },
          },
          {
            title: "Deliver an inspiring immigrant success narrative",
            impact: "Social Capital +8, Political Agency -4, Cultural Soul -1",
            effects: { social: 8, culture: -1, agency: -4 },
          },
          {
            title: "Blend both, slipping critique between safe lines",
            impact: "Social Capital +3, Cultural Soul +2, Political Agency +3",
            effects: { social: 3, culture: 2, agency: 3 },
          },
        ],
      },
      {
        title: "Family Wedding",
        image: "./assets/scene-07-shop.svg",
        setting: "Banquet hall, weekend celebration",
        caption: "Laughter and karaoke fill the room, but so do expectations about who you must become.",
        quote: "\"Joy can also be a stage where the family rehearses its hopes on your body.\"",
        details: ["karaoke echoes", "formal photos", "auntie questions"],
        text:
          "Relatives ask when you will choose a stable profession, marry properly, and stop speaking back to elders about politics.",
        prompt: "How do you navigate love wrapped in pressure?",
        choices: [
          {
            title: "Smile, defer, and keep your future plans private",
            impact: "Social Capital +5, Cultural Soul -2, Political Agency -2",
            effects: { social: 5, culture: -2, agency: -2 },
          },
          {
            title: "Answer honestly, even if it creates tension at the table",
            impact: "Political Agency +7, Cultural Soul +3, Social Capital -4",
            effects: { social: -4, culture: 3, agency: 7 },
          },
          {
            title: "Reframe success to include care, art, and memory",
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
        title: "Archive Box",
        image: "./assets/scene-11-altar.svg",
        setting: "Family garage archive",
        caption: "Dust, cassette hiss, and handwritten margins begin speaking across decades.",
        quote: "\"History returns first as fragments, asking whether you will sit with what was never neatly passed down.\"",
        details: ["cassette tapes", "photo negatives", "translated scraps"],
        text:
          "You find letters, cassette tapes, and an untranslated interview from 1978. The materials are incomplete, but they ask something of you.",
        prompt: "How do you begin?",
        choices: [
          {
            title: "Interview elders and build a community oral history project",
            impact: "Cultural Soul +8, Political Agency +5, Social Capital -2",
            effects: { social: -2, culture: 8, agency: 5 },
          },
          {
            title: "Turn the archive into a polished personal brand story",
            impact: "Social Capital +7, Political Agency +1, Cultural Soul -5",
            effects: { social: 7, culture: -5, agency: 1 },
          },
          {
            title: "Study quietly before speaking publicly",
            impact: "Cultural Soul +4, Political Agency +2, Social Capital +1",
            effects: { social: 1, culture: 4, agency: 2 },
          },
        ],
      },
      {
        title: "Language Class",
        image: "./assets/scene-15-return.svg",
        setting: "Community center, evening session",
        caption: "Adult learners stumble toward syllables that feel both intimate and newly earned.",
        quote: "\"Relearning a language can feel like meeting your ancestors with an accent.\"",
        details: ["tone marks", "shared embarrassment", "small breakthroughs"],
        text:
          "You join a Vietnamese class and realize heritage is not waiting for perfect fluency. It is waiting for persistence.",
        prompt: "What kind of learner are you willing to be?",
        choices: [
          {
            title: "Practice publicly and accept being imperfect",
            impact: "Cultural Soul +7, Political Agency +2, Social Capital -1",
            effects: { social: -1, culture: 7, agency: 2 },
          },
          {
            title: "Study privately until you can perform confidence",
            impact: "Social Capital +3, Cultural Soul +2",
            effects: { social: 3, culture: 2, agency: 0 },
          },
          {
            title: "Turn the class into a community storytelling space",
            impact: "Political Agency +5, Cultural Soul +5",
            effects: { social: 0, culture: 5, agency: 5 },
          },
        ],
      },
      {
        title: "Campus Panel",
        image: "./assets/scene-14-classroom.svg",
        setting: "University auditorium",
        caption: "The microphone is clean, but the framing is not.",
        quote: "\"Institutions often invite your voice only after deciding what kind of healing they are comfortable hearing.\"",
        details: ["panel lights", "soft moderation", "public memory"],
        text:
          "You are invited to speak about Vietnam War memory, but the moderator introduces you as a voice of healing rather than complexity.",
        prompt: "What tone do you take on stage?",
        choices: [
          {
            title: "Refuse simplification and name the violence of erasure",
            impact: "Political Agency +8, Cultural Soul +3, Social Capital -4",
            effects: { social: -4, culture: 3, agency: 8 },
          },
          {
            title: "Offer a softer version to keep the room with you",
            impact: "Social Capital +6, Political Agency -3, Cultural Soul -1",
            effects: { social: 6, culture: -1, agency: -3 },
          },
          {
            title: "Invite intergenerational voices into the conversation",
            impact: "Political Agency +5, Cultural Soul +5, Social Capital +1",
            effects: { social: 1, culture: 5, agency: 5 },
          },
        ],
      },
      {
        title: "Language of the Future",
        image: "./assets/scene-13-voice.svg",
        setting: "Cafe after a family gathering",
        caption: "The next generation asks for guidance, but what they really need is permission to build a livable inheritance.",
        quote: "\"Not every descendant receives fluency, but every descendant receives a relationship to loss.\"",
        details: ["younger cousins", "mixed identities", "future rituals"],
        text:
          "A younger cousin asks whether learning Vietnamese still matters if they already feel American. Your answer may become a family turning point.",
        prompt: "What do you tell them?",
        choices: [
          {
            title: "Language is a bridge home, even when spoken imperfectly",
            impact: "Cultural Soul +9, Political Agency +2",
            effects: { social: 0, culture: 9, agency: 2 },
          },
          {
            title: "Identity can survive without language if care survives",
            impact: "Social Capital +3, Political Agency +4, Cultural Soul -2",
            effects: { social: 3, culture: -2, agency: 4 },
          },
          {
            title: "Build new rituals if old fluency is out of reach",
            impact: "Cultural Soul +4, Political Agency +5, Social Capital +1",
            effects: { social: 1, culture: 4, agency: 5 },
          },
        ],
      },
      {
        title: "Podcast Recording",
        image: "./assets/scene-12-critique.svg",
        setting: "Independent studio, present day",
        caption: "The red light turns on. You can flatten the story for listeners, or let contradiction remain audible.",
        quote: "\"To speak publicly is to decide whether your family becomes a lesson, a spectacle, or a living archive.\"",
        details: ["soundproof room", "editing timeline", "public storytelling"],
        text:
          "You are producing an episode about the Vietnamese diaspora. Sponsors want a clean inspirational arc, but your interviews insist on grief, politics, and unfinished memory.",
        prompt: "What kind of story do you release?",
        choices: [
          {
            title: "Publish the fuller, messier episode and trust the audience",
            impact: "Political Agency +8, Cultural Soul +4, Social Capital -3",
            effects: { social: -3, culture: 4, agency: 8 },
          },
          {
            title: "Cut the difficult parts to maximize reach",
            impact: "Social Capital +7, Political Agency -4, Cultural Soul -3",
            effects: { social: 7, culture: -3, agency: -4 },
          },
          {
            title: "Release two cuts: one accessible, one archival",
            impact: "Social Capital +3, Cultural Soul +3, Political Agency +4",
            effects: { social: 3, culture: 3, agency: 4 },
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
  choicesContainer: document.getElementById("choices-container"),
  selectedAvatarSummary: document.getElementById("selected-avatar-summary"),
  traitList: document.getElementById("trait-list"),
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
  elements.selectedAvatarSummary.innerHTML = `
    <p><strong>${avatar.name}</strong> enters this journey carrying ${avatar.look.toLowerCase()}.</p>
    <p>${avatar.description}</p>
  `;

  elements.traitList.innerHTML = "";
  avatar.traits.forEach((trait) => {
    const pill = document.createElement("span");
    pill.className = "trait-pill";
    pill.textContent = trait;
    elements.traitList.appendChild(pill);
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
  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.innerHTML = `
      <span class="choice-title">${choice.title}</span>
      <span class="choice-impact">${choice.impact}</span>
    `;
    button.addEventListener("click", () => chooseOption(choice));
    elements.choicesContainer.appendChild(button);
  });
}

function chooseOption(choice) {
  state.social = clamp(state.social + choice.effects.social);
  state.culture = clamp(state.culture + choice.effects.culture);
  state.agency = clamp(state.agency + choice.effects.agency);
  updateMeters();

  const era = eras[state.eraIndex];
  const scene = era.scenes[state.sceneIndex];
  state.history.push({
    era: era.title,
    scene: scene.title,
    choice: choice.title,
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

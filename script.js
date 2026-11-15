// =========================================================
// 1. CURATED AFRICAN LITERATURE DATASET (FROM YOUR SKETCHBOOK)
// =========================================================
const BOOKS = [
  {
    id: "middle-daughter",
    title: "The Middle Daughter",
    author: "Chika Unigwe",
    region: "west",
    location: "LAGOS & ENUGU, NIGERIA",
    tribe: "IGBO / NIGERIAN",
    coverColor: "linear-gradient(145deg, #1E3A5F, #102138)",
    syllables: "CHEE-kah oo-NEE-gway",
    tones: "Tone Guide: High – Low | Low – High – Mid (Igbo)",
    meaning: "“Chika” (Chukwuka) means “God is supreme” in Igbo.",
    synopsis:
      "A poignant modern retelling of the Hades and Persephone myth set in Enugu and Lagos, exploring sisterhood, grief, and resilience across Nigerian family life.",
  },
  {
    id: "yellow-sun",
    title: "Half of a Yellow Sun",
    author: "Chimamanda Ngozi Adichie",
    region: "west",
    location: "NSUKKA & LAGOS, NIGERIA",
    tribe: "IGBO / NIGERIAN",
    coverColor: "linear-gradient(145deg, #B85D3B, #7A381F)",
    syllables: "chee-mah-MAHN-dah en-GOH-zee ah-DEE-chay",
    tones: "Tone Guide: Low-High-High-Low | Mid-High | Low-High-Mid (Igbo)",
    meaning:
      "“Chimamanda” means “My God will not fail”; “Ngozi” means “Blessing.”",
    synopsis:
      "Set during the Nigerian-Biafran War, intertwining the lives of twin sisters Olanna and Kainene, a university professor, and a village houseboy.",
  },
  {
    id: "love-in-colour",
    title: "Love in Colour",
    author: "Bolu Babalola",
    region: "west",
    location: "LAGOS & IBADAN, NIGERIA",
    tribe: "YORÙBÁ / NIGERIAN",
    coverColor: "linear-gradient(145deg, #6B2D5C, #3A1632)",
    syllables: "BOH-loo bah-BAH-loh-lah",
    tones: "Tone Guide: High – Mid | Low – High – Mid – High (Yorùbá)",
    meaning: "“Babalọlá” means “Father of wealth and honor” in Yorùbá.",
    synopsis:
      "Mythical folktales from West Africa and around the world reimagined as vibrant, joyful modern love stories.",
  },
  {
    id: "homegoing",
    title: "Homegoing",
    author: "Yaa Gyasi",
    region: "west",
    location: "CAPE COAST, GHANA",
    tribe: "AKAN / TWI",
    coverColor: "linear-gradient(145deg, #2D4F3E, #182C22)",
    syllables: "YAH JAH-see",
    tones: "Tone Guide: High | Mid – Low (Akan / Twi)",
    meaning: "“Yaa” is the Akan day-name given to a girl born on Thursday.",
    synopsis:
      "Follows two half-sisters born in 18th-century Ghana and eight generations of their descendants across the Gold Coast and America.",
  },
  {
    id: "nervous-conditions",
    title: "Nervous Conditions",
    author: "Tsitsi Dangarembga",
    region: "south",
    location: "MUTARE, ZIMBABWE",
    tribe: "SHONA / ZIMBABWEAN",
    coverColor: "linear-gradient(145deg, #8A5A2B, #4E3115)",
    syllables: "TSEE-tsee dah-ngah-REM-bgwah",
    tones: "Tone Guide: High – Low | Low – Low – High – Low (Shona)",
    meaning: "“Tsitsi” means “Mercy” or “Compassion” in Shona.",
    synopsis:
      "Tambu’s fierce determination to gain an education in 1960s Rhodesia illuminates family, colonialism, and womanhood.",
  },
  {
    id: "memory-of-love",
    title: "The Memory of Love",
    author: "Aminatta Forna",
    region: "east",
    location: "FREETOWN & EAST AFRICA",
    tribe: "TEMNE / SIERRA LEONEAN",
    coverColor: "linear-gradient(145deg, #3B5266, #1F2D3A)",
    syllables: "ah-mee-NAH-tah FOR-nah",
    tones: "Tone Guide: Low – Mid – High – Low | High – Low",
    meaning:
      "“Aminatta” is a West African variant meaning “Trustworthy and faithful.”",
    synopsis:
      "Three intertwined lives converge in a Freetown hospital as secrets of love, friendship, and survival surface.",
  },
  {
    id: "his-only-wife",
    title: "His Only Wife",
    author: "Peace Adzo Medie",
    region: "west",
    location: "ACCRA, GHANA",
    tribe: "AKAN",
    coverColor: "linear-gradient(145deg, #1E3A5F, #0F1E33)",
    syllables: "pee-ce add-zoh med-ee",
    tones: "Tone Guide: Low – Mid – High – Low | High – Low",
    meaning:
      "“Adzo is a traditional female given name from the Ewe people of Ghana and Togo that translates to 'one born on a Friday,'.",
    synopsis:
      "Afi Tekple, a young, modest seamstress from a small town who enters an arranged marriage with Elikem Ganyo, a wealthy businessman.",
  },
];

// =========================================================
// 2. INDIGENOUS NATIVE WORDS & COMMUNITY ANNOTATIONS
// =========================================================
const NATIVE_WORDS = {
  asoebi: {
    origin: "YORÙBÁ WORD",
    title: "Aṣọ-ẹbí",
    phonetic: '/ah-SHAW eh-BEE/ • Literal: "Family Cloth"',
    definition:
      "A traditional Nigerian practice where family members and friends wear matching fabrics at celebrations and memorials to show solidarity and shared identity.",
    comments: [
      {
        user: "@amaka_reads",
        text: "In my family, picking the aṣọ-ẹbí lace months before a wedding is an entire event on its own!",
      },
      {
        user: "@tunde_lagos",
        text: "Love that the tonal marks (ṣ and ẹ) are printed properly here—most Western e-readers turn them into boxes.",
      },
    ],
  },
  oyinbo: {
    origin: "YORÙBÁ & PIDGIN",
    title: "Òyìnbó",
    phonetic: "/oh-yeen-BOH/ • Cultural Term",
    definition:
      "Used playfully across Nigeria to describe a foreigner, Westernized habits, or someone acting like a guest in their own family home.",
    comments: [
      {
        user: "@kofi_accra",
        text: "In Ghana we say ‘Obroni’ in Twi for the exact same playful teasing!",
      },
    ],
  },
  nnoo: {
    origin: "ÌGBÒ GREETING",
    title: "Nnọ́ọ̀",
    phonetic: "/en-NAW/ • Warm Welcome",
    definition:
      "A deeply affectionate Igbo greeting meaning 'Welcome'—often spoken when someone returns home after a journey or hard day.",
    comments: [
      {
        user: "@chidi_enugu",
        text: "Hearing my grandmother say 'Nnọ́ọ̀' immediately feels like home.",
      },
    ],
  },
  ubuntu: {
    origin: "ISIZULU / NDEBELE",
    title: "Ubuntu",
    phonetic: "/oo-BOON-too/ • Philosophy",
    definition:
      "Southern African humanist philosophy: 'I am because we are'—the belief in a universal bond of sharing that connects all humanity.",
    comments: [
      {
        user: "@zola_joburg",
        text: "Shows how West African highlife community spirit connects directly with Southern African Ubuntu.",
      },
    ],
  },
};

// =========================================================
// 3. UI TRANSLATIONS (ENGLISH, YORÙBÁ, IGBO, HAUSA, TWI)
// =========================================================
const UI_TRANSLATIONS = {
  en: {
    navExplore: "Explore Map",
    navReader: "Community Reader",
    navProfile: "Your Story",
    whereToGo: "WHERE DO YOU WANT TO GO?",
    mapHint: "Select a literary region on the map to explore stories.",
    browseHeading: "BROWSE AUTHENTIC AFRICAN STORIES",
    pronounceBtn: "Pronounce Name",
    readNowBtn: "READ IN COMMUNITY MODE →",
    yourStoryHeading: "YOUR STORY",
    booksReadLabel: "BOOKS READ",
    wantToReadLabel: "WANT TO READ",
    readsMostlyLabel: "READS MOSTLY FROM...",
  },
  yo: {
    navExplore: "Ṣàwárí Máàpù",
    navReader: "Ìkàwé Àwùjọ",
    navProfile: "Ìtàn Rẹ",
    whereToGo: "NÍBO NI O FẸ́ LỌ?",
    mapHint: "Tẹ agbègbè kan lórí máàpù láti ka àwọn ìtàn Áfíríkà.",
    browseHeading: "ÀWỌN ÌTÀN ÁFÍRÍKÀ ÒDODO",
    pronounceBtn: "Pe Orúkọ Òǹkọ̀wé",
    readNowBtn: "KÀ NÍNÚ ÀWÙJỌ →",
    yourStoryHeading: "ÌTÀN RẸ",
    booksReadLabel: "ÌWÉ TÍ O TI KÀ",
    wantToReadLabel: "ÌWÉ TÍ O FẸ́ KÀ",
    readsMostlyLabel: "AGBÈGBÈ TÍ O Ń KÀ JÙ...",
  },
  ig: {
    navExplore: "Chọgharịa Maapụ",
    navReader: "Ọgụgụ Obodo",
    navProfile: "Akụkọ Gị",
    whereToGo: "EBEE KA Ị CHỌRỌ ỊGA?",
    mapHint: "Pịa mpaghara dị na maapụ iji hụ akụkọ ndị si ebe ahụ.",
    browseHeading: "CHỌGHAỊA AKỤKỌ AFRIKA",
    pronounceBtn: "Kpọọ Aha Odee",
    readNowBtn: "GỤỌ N'ỌGBAKỌ →",
    yourStoryHeading: "AKỤKỌ GỊ",
    booksReadLabel: "AKWỤKWỌ A GỤRỤ",
    wantToReadLabel: "CHỌRỌ ỊGỤ",
    readsMostlyLabel: "EBEE I SI AGỤ KARỊA...",
  },
  ha: {
    navExplore: "Bincika Taswira",
    navReader: "Karatun Al'umma",
    navProfile: "Labarinka",
    whereToGo: "INA KAKE SON ZUWA?",
    mapHint: "Danna wani yanki a taswira don ganin labaran Afirka.",
    browseHeading: "LABARAN AFIRKA NA ASALI",
    pronounceBtn: "Fadi Sunan Marubuci",
    readNowBtn: "KARANTA A TARAYYA →",
    yourStoryHeading: "LABARINKA",
    booksReadLabel: "LITTATTAFAN DA AKA KARANTA",
    wantToReadLabel: "WADANDA AKE SON KARANTAWA",
    readsMostlyLabel: "YANKIN DA AKA FI KARATU...",
  },
  tw: {
    navExplore: "Hwehwɛ Asase Mfonini",
    navReader: "Kuo Akenkan",
    navProfile: "Wo Abakɔsɛm",
    whereToGo: "ƐHE NA WOPƐ SƐ WOKƆ?",
    mapHint: "Mia beae bi wɔ asase mfonini no so na kenkan nsɛm.",
    browseHeading: "ABIBIRIM ABAKƆSƐM PA",
    pronounceBtn: "Bɔ Ɔkyerɛwfo Din",
    readNowBtn: "KENKAN WƆ KUO MU →",
    yourStoryHeading: "WO ABAKƆSƐM",
    booksReadLabel: "NHOMA A WOKENKANEE",
    wantToReadLabel: "NEA WOPƐ SƐ WOKENKAN",
    readsMostlyLabel: "BEAE A WOKENKAN FI...",
  },
};

let currentBook = BOOKS[0];
let currentWordKey = "asoebi";
let wantToReadCount = 15;

// =========================================================
// 4. INITIALIZE APP & RENDER BOOKS
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  renderBookGrid("all");
  selectBook(BOOKS[0]);
});

function switchView(viewName) {
  document
    .querySelectorAll(".view")
    .forEach((v) => v.classList.remove("active"));
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.remove("active"));

  document.getElementById(`view-${viewName}`).classList.add("active");
  document
    .querySelector(`.nav-btn[data-view="${viewName}"]`)
    .classList.add("active");
}

function renderBookGrid(regionFilter) {
  const grid = document.getElementById("book-grid");
  grid.innerHTML = "";

  const filtered =
    regionFilter === "all"
      ? BOOKS
      : BOOKS.filter((book) => book.region === regionFilter);

  filtered.forEach((book) => {
    const card = document.createElement("div");
    card.className = `book-card ${
      book.id === currentBook.id ? "selected" : ""
    }`;
    card.onclick = () => selectBook(book);

    card.innerHTML = `
        <div class="mini-cover" style="background: ${book.coverColor}">
          <span style="font-size:0.65rem; opacity:0.85;">${book.tribe}</span>
          <strong>${book.title}</strong>
        </div>
        <h4>${book.title}</h4>
        <p>${book.author}</p>
      `;
    grid.appendChild(card);
  });
}

function selectRegion(region) {
  // Update map SVG highlight
  document
    .querySelectorAll(".map-region")
    .forEach((r) => r.classList.remove("active-region"));
  if (region !== "all") {
    const targetRegion = document.getElementById(`region-${region}`);
    if (targetRegion) targetRegion.classList.add("active-region");
  }

  // Update pills
  document
    .querySelectorAll(".pill")
    .forEach((p) => p.classList.remove("active"));
  event.target.classList.add("active");

  // Update location badge
  const labels = {
    all: "ALL AFRICAN REGIONS",
    west: "WEST AFRICA (NIGERIA, GHANA, TOGO)",
    east: "EAST AFRICA (KENYA, ETHIOPIA, SIERRA LEONE)",
    south: "SOUTHERN AFRICA (ZIMBABWE, SOUTH AFRICA)",
    north: "NORTH AFRICA",
  };
  document.getElementById("active-location-badge").textContent =
    labels[region] || "AFRICA";

  renderBookGrid(region);
  const firstMatch =
    region === "all" ? BOOKS[0] : BOOKS.find((b) => b.region === region);
  if (firstMatch) selectBook(firstMatch);
}

function selectBook(book) {
  currentBook = book;
  document.getElementById("spot-cover").style.background = book.coverColor;
  document.getElementById("spot-tribe").textContent = book.tribe;
  document.getElementById("spot-cover-title").textContent =
    book.title.toUpperCase();
  document.getElementById("spot-cover-author").textContent = book.author;

  document.getElementById(
    "spot-location"
  ).textContent = `${book.location} • ${book.tribe}`;
  document.getElementById("spot-title").textContent = book.title;
  document.getElementById("spot-author").textContent = book.author;
  document.getElementById("phonetic-syllables").textContent = book.syllables;
  document.getElementById("phonetic-tones").textContent = book.tones;
  document.getElementById(
    "phonetic-meaning"
  ).innerHTML = `<strong>Meaning:</strong> ${book.meaning}`;
  document.getElementById("spot-synopsis").textContent = book.synopsis;

  document
    .querySelectorAll(".book-card")
    .forEach((c) => c.classList.remove("selected"));
}

// =========================================================
// 5. AUTHOR PHONETIC SPEECH & UI LANGUAGE SWITCHING
// =========================================================
function togglePhoneticCard() {
  const card = document.getElementById("phonetic-card");
  card.style.display = card.style.display === "none" ? "block" : "block";
  speakAuthorName();
}

function speakAuthorName() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentBook.author);
    utterance.rate = 0.85; // Slightly slower for clear phonetic clarity
    window.speechSynthesis.speak(utterance);
  }
}

function speakNativeWord() {
  const wordObj = NATIVE_WORDS[currentWordKey];
  if ("speechSynthesis" in window && wordObj) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(wordObj.title);
    utterance.rate = 0.82;
    window.speechSynthesis.speak(utterance);
  }
}

function changeUILanguage(langCode) {
  const dict = UI_TRANSLATIONS[langCode] || UI_TRANSLATIONS.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

function openBookInReader() {
  document.getElementById(
    "reader-book-title"
  ).textContent = `${currentBook.title} — ${currentBook.author}`;
  switchView("reader");
}

function addToWantToRead() {
  wantToReadCount++;
  document.getElementById("stat-want").textContent = wantToReadCount;
  alert(`Added "${currentBook.title}" to Your Story reading list!`);
}

// =========================================================
// 6. COMMUNITY READER: WORD TRANSLATION + LIVE COMMENTS
// =========================================================
function selectNativeWord(key) {
  currentWordKey = key;
  const data = NATIVE_WORDS[key];
  if (!data) return;

  document
    .querySelectorAll(".native-word")
    .forEach((w) => w.classList.remove("active-word"));
  document
    .querySelector(`.native-word[data-word="${key}"]`)
    .classList.add("active-word");

  document.getElementById("word-origin").textContent = data.origin;
  document.getElementById("word-title").textContent = data.title;
  document.getElementById("word-phonetic").textContent = data.phonetic;
  document.getElementById("word-definition").textContent = data.definition;

  renderComments(data.comments);
}

function renderComments(comments) {
  const list = document.getElementById("comment-list");
  document.getElementById("comment-count").textContent = `(${comments.length})`;
  list.innerHTML = comments
    .map(
      (c) => `
      <div class="comment-item">
        <strong>${c.user}</strong>
        <p>${c.text}</p>
      </div>
    `
    )
    .join("");
}

function postCommunityComment(e) {
  e.preventDefault();
  const input = document.getElementById("new-comment-input");
  const text = input.value.trim();
  if (!text) return;

  NATIVE_WORDS[currentWordKey].comments.push({
    user: "@diaspora_reader",
    text: text,
  });

  renderComments(NATIVE_WORDS[currentWordKey].comments);
  input.value = "";
}

function toggleCommunityHighlights() {
  const prose = document.getElementById("prose-body");
  const btn = document.getElementById("toggle-community-btn");
  prose.classList.toggle("highlights-off");
  const isOff = prose.classList.contains("highlights-off");
  btn.textContent = isOff
    ? "💬 Community Highlights: OFF"
    : "💬 Community Highlights: ON";
}

function toggleBilingualMode() {
  document.querySelectorAll(".bilingual-translation").forEach((p) => {
    p.classList.toggle("hidden");
  });
}

// =========================================================
// 7. AMBIENT BACKGROUND SOUNDSCAPE SYNTHESIZER (WEB AUDIO API)
// =========================================================
let audioCtx = null;
let activeSoundNode = null;

function changeSoundscape(mode) {
  if (activeSoundNode) {
    try {
      activeSoundNode.stop();
    } catch (e) {}
    activeSoundNode = null;
  }
  if (mode === "off") return;

  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  // Generate gentle organic background atmosphere using Web Audio API
  const bufferSize = 2 * audioCtx.sampleRate;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  const whiteNoise = audioCtx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;

  const filter = audioCtx.createBiquadFilter();
  const gainNode = audioCtx.createGain();

  if (mode === "rain") {
    filter.type = "lowpass";
    filter.frequency.value = 650; // Soft Lagos evening rain
    gainNode.gain.value = 0.06;
  } else if (mode === "market") {
    filter.type = "bandpass";
    filter.frequency.value = 420; // Warm distant market murmur
    gainNode.gain.value = 0.05;
  } else if (mode === "drums") {
    filter.type = "lowpass";
    filter.frequency.value = 240; // Deep resonant drum pulse
    gainNode.gain.value = 0.08;
  }

  whiteNoise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  whiteNoise.start(0);
  activeSoundNode = whiteNoise;
}

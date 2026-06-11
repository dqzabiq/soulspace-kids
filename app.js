const emotions = {
  sedih: {
    label: "Sedih",
    color: "#5367a6",
  },
  marah: {
    label: "Marah",
    color: "#c65b6d",
  },
  gelisah: {
    label: "Gelisah",
    color: "#d9911f",
  },
  tenang: {
    label: "Tenang",
    color: "#167c78",
  },
  fokus: {
    label: "Fokus",
    color: "#4d8f5f",
  },
};

const interventions = {
  islam: {
    sedih: {
      title: "Syukur perlahan",
      prompt: "Bina rasa selamat melalui syukur kecil dan sokongan guru.",
      steps: [
        "Tarik nafas selama empat kiraan, kemudian hembus perlahan.",
        "Sebut Alhamdulillah dengan suara rendah sebanyak tiga kali.",
        "Pilih satu perkara baik yang murid mahu simpan hari ini.",
        "Guru beri ayat sokongan ringkas dan tenang.",
      ],
    },
    marah: {
      title: "Sabar dan jeda",
      prompt: "Alihkan tenaga marah kepada jeda badan dan kata yang lembut.",
      steps: [
        "Letakkan kedua-dua tapak tangan di meja atau riba.",
        "Tarik nafas, tahan dua kiraan, hembus sambil menyebut Astaghfirullah.",
        "Namakan satu perkara yang membuat badan rasa panas.",
        "Pilih tindakan selamat: duduk, minum air, atau minta ruang.",
      ],
    },
    gelisah: {
      title: "Amanah nafas",
      prompt: "Stabilkan gelisah melalui zikir pendek dan orientasi ruang.",
      steps: [
        "Lihat tiga objek di hadapan dan sebut namanya.",
        "Tarik nafas empat kiraan, hembus enam kiraan.",
        "Sebut Hasbunallah wa ni'mal wakil secara perlahan.",
        "Guru minta murid pilih aktiviti menenangkan seterusnya.",
      ],
    },
    tenang: {
      title: "Kukuhkan tenang",
      prompt: "Kekalkan keadaan tenang dengan penghargaan diri.",
      steps: [
        "Senyum kecil dan duduk selesa.",
        "Sebut Subhanallah, Alhamdulillah, Allahu Akbar sekali pusingan.",
        "Catat satu kejayaan kecil murid.",
        "Sambung kepada tugasan mudah yang murid kuasai.",
      ],
    },
    fokus: {
      title: "Niat belajar",
      prompt: "Kaitkan fokus dengan niat baik dan tugasan kecil.",
      steps: [
        "Pilih satu tugasan pendek sahaja.",
        "Baca Bismillah secara perlahan.",
        "Tetapkan masa fokus dua minit.",
        "Guru beri pujian khusus selepas tugasan selesai.",
      ],
    },
  },
  moral: {
    sedih: {
      title: "Rasa disokong",
      prompt: "Pulihkan emosi melalui pernafasan dan satu perkara yang dihargai.",
      steps: [
        "Tarik nafas selama empat kiraan dan hembus perlahan.",
        "Letakkan tangan di dada atau riba.",
        "Sebut Saya selamat dan saya disayangi sebanyak tiga kali.",
        "Pilih satu perkara baik yang berlaku hari ini.",
      ],
    },
    marah: {
      title: "Jeda selamat",
      prompt: "Tukar reaksi marah kepada tindakan selamat.",
      steps: [
        "Berhenti bercakap selama lima kiraan.",
        "Hembus nafas panjang sambil melepaskan bahu.",
        "Namakan emosi: Saya sedang marah.",
        "Pilih satu tindakan: minum air, duduk, atau minta bantuan.",
      ],
    },
    gelisah: {
      title: "Bumi dan nafas",
      prompt: "Kurangkan gelisah dengan orientasi deria.",
      steps: [
        "Tekan kaki ke lantai dan rasa sokongannya.",
        "Cari tiga warna di sekeliling.",
        "Tarik nafas empat kiraan dan hembus enam kiraan.",
        "Sebut Saya boleh hadapi satu langkah sahaja.",
      ],
    },
    tenang: {
      title: "Simpan tenang",
      prompt: "Kuatkan emosi stabil dengan penghargaan ringkas.",
      steps: [
        "Duduk tegak dan lembutkan bahu.",
        "Ambil tiga nafas perlahan.",
        "Sebut satu perkara yang murid berjaya buat.",
        "Pilih tugasan mudah untuk teruskan momentum.",
      ],
    },
    fokus: {
      title: "Langkah kecil",
      prompt: "Salurkan fokus kepada satu tugasan yang jelas.",
      steps: [
        "Pilih satu tugasan pendek.",
        "Tetapkan masa fokus dua minit.",
        "Alihkan bahan yang mengganggu.",
        "Raikan satu kemajuan selepas selesai.",
      ],
    },
  },
};

const zikr = {
  islam: ["Subhanallah", "Alhamdulillah", "Allahu Akbar", "La ilaha illallah"],
  moral: ["Saya selamat", "Saya tenang", "Saya mampu", "Saya disokong"],
};

const paletteColors = [
  "#4e60a4",
  "#9a7da7",
  "#d799a7",
  "#f3ae9c",
  "#fcd4b8",
  "#fcf5e3",
  "#94d4a5",
  "#5b6d91",
  "#f7f6d7",
  "#c0f3db",
  "#8ecadc",
  "#b8cdda",
  "#a98fa6",
  "#9bb9bb",
  "#dfe9dd",
  "#cbd7b8",
];

const coloringPages = {
  moonMandala: { label: "Moon Mandala", hint: "calming bedtime vibe" },
  mosqueWindow: { label: "Mosque Window", hint: "islamic window patterns" },
  floralHarmony: { label: "Floral Harmony", hint: "soft floral elements" },
  starBurst: { label: "Star Burst", hint: "modern star patterns" },
  bubbleCalm: { label: "Bubble Calm", hint: "sensory-friendly shapes" },
  oceanWaves: { label: "Ocean Waves", hint: "relaxing flow patterns" },
  cloudDreams: { label: "Cloud Dreams", hint: "minimal calming shapes" },
  leafSerenity: { label: "Leaf Serenity", hint: "calming nature design" },
  focusShapes: { label: "Focus Shapes", hint: "focus & sensory support" },
  lotusPeace: { label: "Lotus Peace", hint: "large floral mandala" },
};

const storageKey = "soulspace-kids-records";
const legacyStorageKey = "ruang-tenang-records";
const defaultAiModelUrl = "https://teachablemachine.withgoogle.com/models/4jBk5tQuGT/";
const teacherPin = "1234";
const teacherOnlyTabs = new Set(["observe", "report"]);

const state = {
  accessRole: null,
  mode: "islam",
  emotion: null,
  color: paletteColors[0],
  coloringPage: "moonMandala",
  coloringDifficulty: "simple",
  sessions: loadRecords(),
  cameraStream: null,
  breathTimer: null,
  breathStartedAt: 0,
  breathDurationMs: 3 * 60 * 1000,
  phaseIndex: 0,
  phaseElapsed: 0,
  calmAudio: null,
  calmTimer: null,
  humanAudioObjectUrl: null,
  tmModel: null,
  maxPredictions: 0,
  aiActive: false,
  aiFrame: null,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function init() {
  bindAccessScreen();
  renderEmotionButtons();
  renderInterventionCards();
  renderColoringLibrary();
  renderPalette();
  renderMandala();
  bindNavigation();
  bindModeToggle();
  bindCamera();
  bindAiControls();
  bindSessionActions();
  bindArtActions();
  bindSoundActions();
  bindReportActions();
  restoreSavedAiModelUrl();
  selectEmotion("gelisah");
  renderReport();
}

function bindAccessScreen() {
  $("#studentAccess").addEventListener("click", () => enterAccessMode("student"));
  $("#teacherAccessForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const pinInput = $("#teacherPin");
    const error = $("#pinError");
    const pin = pinInput.value.trim();

    if (pin === teacherPin) {
      error.textContent = "";
      enterAccessMode("teacher");
      return;
    }

    error.textContent = "Incorrect PIN. Please try again.";
    pinInput.select();
  });
  $("#lockAccess").addEventListener("click", lockAccessScreen);
}

function enterAccessMode(role) {
  state.accessRole = role;
  document.body.classList.remove("access-locked", "access-student", "access-teacher");
  document.body.classList.add(`access-${role}`);
  $("#accessModeChip").textContent = role === "teacher" ? "Teacher access" : "Student session";
  $("#teacherPin").value = "";
  $("#pinError").textContent = "";
  showTab(role === "teacher" ? "observe" : "intervention");
  showToast(role === "teacher" ? "Teacher access opened." : "Student calm session opened.");
}

function lockAccessScreen() {
  stopCamera();
  stopCalmAudio(false);
  state.accessRole = null;
  document.body.classList.remove("access-student", "access-teacher");
  document.body.classList.add("access-locked");
  $("#teacherPin").value = "";
  $("#pinError").textContent = "";
  window.setTimeout(() => $("#studentAccess").focus(), 80);
}

function bindNavigation() {
  $$(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.dataset.tab;
      if (state.accessRole === "student" && teacherOnlyTabs.has(tab)) {
        showToast("Teacher access required for records and reports.");
        return;
      }
      $$(".nav-item").forEach((item) => item.classList.toggle("active", item === button));
      $$(".module").forEach((module) => module.classList.toggle("active", module.id === tab));
    });
  });
}

function bindModeToggle() {
  $$(".segmented").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      $$(".segmented").forEach((item) => item.classList.toggle("active", item.dataset.mode === state.mode));
      updateRecommendation();
      renderInterventionCards();
      $("#zikrLine").textContent = zikr[state.mode][0];
    });
  });
}

function bindCamera() {
  $("#startCamera").addEventListener("click", startCamera);
  $("#stopCamera").addEventListener("click", stopCamera);
}

function bindAiControls() {
  $("#loadAiModel").addEventListener("click", loadAiModel);
  $("#startAi").addEventListener("click", startAiDetection);
  $("#stopAi").addEventListener("click", () => stopAiDetection());
}

async function startCamera() {
  const consent = $("#consentCheck").checked;
  if (!consent) {
    showToast("Sahkan persetujuan sebelum mengaktifkan kamera.");
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    showToast("Kamera tidak tersedia pada pelayar ini.");
    return;
  }

  try {
    stopCamera();
    state.cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });
    const video = $("#cameraPreview");
    video.srcObject = state.cameraStream;
    video.classList.add("active");
    $("#cameraEmpty").classList.add("hidden");
    showToast("Kamera aktif secara tempatan.");
  } catch (error) {
    showToast("Kamera tidak dapat diaktifkan.");
  }
}

function stopCamera() {
  stopAiDetection(false);
  if (state.cameraStream) {
    state.cameraStream.getTracks().forEach((track) => track.stop());
    state.cameraStream = null;
  }
  const video = $("#cameraPreview");
  video.srcObject = null;
  video.classList.remove("active");
  $("#cameraEmpty").classList.remove("hidden");
}

async function loadAiModel() {
  const input = $("#aiModelUrl");
  const baseUrl = normalizeModelUrl(input.value.trim());

  if (!baseUrl) {
    showToast("Tampal URL model Teachable Machine dahulu.");
    return;
  }

  if (!window.tmImage) {
    $("#aiStatus").textContent = "Pustaka AI belum dimuatkan. Semak sambungan internet.";
    showToast("AI perlukan internet untuk pustaka Teachable Machine.");
    return;
  }

  try {
    $("#aiStatus").textContent = "Sedang memuatkan model AI...";
    state.tmModel = await window.tmImage.load(`${baseUrl}model.json`, `${baseUrl}metadata.json`);
    state.maxPredictions = state.tmModel.getTotalClasses();
    localStorage.setItem("soulspace-kids-ai-model-url", baseUrl);
    $("#aiStatus").textContent = `Model dimuatkan dengan ${state.maxPredictions} label.`;
    renderPredictions([]);
    showToast("Model AI sedia digunakan.");
  } catch (error) {
    state.tmModel = null;
    $("#aiStatus").textContent = "Model gagal dimuatkan. Pastikan URL model betul.";
    showToast("Model AI gagal dimuatkan.");
  }
}

async function startAiDetection() {
  if (!state.tmModel) {
    await loadAiModel();
    if (!state.tmModel) return;
  }

  if (!state.cameraStream) {
    await startCamera();
    if (!state.cameraStream) return;
  }

  state.aiActive = true;
  $("#aiStatus").textContent = "AI sedang membaca reaksi wajah secara langsung.";
  predictEmotionLoop();
}

function stopAiDetection(show = true) {
  state.aiActive = false;
  if (state.aiFrame) {
    cancelAnimationFrame(state.aiFrame);
    state.aiFrame = null;
  }
  if (show) {
    $("#aiStatus").textContent = state.tmModel ? "AI dihentikan. Model masih dimuatkan." : "Model belum dimuatkan.";
    showToast("AI dihentikan.");
  }
}

async function predictEmotionLoop() {
  if (!state.aiActive || !state.tmModel) return;

  const video = $("#cameraPreview");
  if (video.readyState >= 2) {
    try {
      const predictions = await state.tmModel.predict(video);
      const sorted = predictions.slice().sort((a, b) => b.probability - a.probability);
      const top = sorted[0];
      renderPredictions(sorted);

      const mapped = mapPredictionToEmotion(top?.className || "");
      if (mapped && top.probability >= 0.55) {
        selectEmotion(mapped);
        $("#aiStatus").textContent = `AI cadang: ${emotions[mapped].label} (${Math.round(top.probability * 100)}%).`;
      } else if (top) {
        $("#aiStatus").textContent = `AI membaca: ${top.className} (${Math.round(top.probability * 100)}%).`;
      }
    } catch (error) {
      $("#aiStatus").textContent = "AI terganggu. Cuba mula semula.";
      stopAiDetection(false);
      return;
    }
  }

  state.aiFrame = requestAnimationFrame(predictEmotionLoop);
}

function renderPredictions(predictions) {
  const wrap = $("#aiPredictions");
  if (!predictions.length) {
    wrap.innerHTML = "";
    return;
  }

  wrap.innerHTML = predictions
    .slice(0, 5)
    .map((prediction) => {
      const percent = Math.round(prediction.probability * 100);
      const mapped = mapPredictionToEmotion(prediction.className);
      const color = mapped ? emotions[mapped].color : "#8ecadc";
      return `
        <div class="prediction-row">
          <span>${escapeHtml(prediction.className)}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${percent}%; background:${color}"></div></div>
          <strong>${percent}%</strong>
        </div>
      `;
    })
    .join("");
}

function normalizeModelUrl(url) {
  if (!url) return "";
  const modelJsonIndex = url.indexOf("model.json");
  const cleaned = modelJsonIndex >= 0 ? url.slice(0, modelJsonIndex) : url;
  return cleaned.endsWith("/") ? cleaned : `${cleaned}/`;
}

function mapPredictionToEmotion(label) {
  const text = label.toLowerCase();
  if (text.includes("marah") || text.includes("angry")) return "marah";
  if (text.includes("sedih") || text.includes("sad")) return "sedih";
  if (text.includes("gelisah") || text.includes("cemas") || text.includes("anxious") || text.includes("nervous")) return "gelisah";
  if (text.includes("tenang") || text.includes("calm") || text.includes("relax")) return "tenang";
  if (text.includes("fokus") || text.includes("focus")) return "fokus";
  return null;
}

function restoreSavedAiModelUrl() {
  const saved = localStorage.getItem("soulspace-kids-ai-model-url");
  $("#aiModelUrl").value = saved || defaultAiModelUrl;
}

function renderEmotionButtons() {
  const grid = $("#emotionGrid");
  grid.innerHTML = Object.entries(emotions)
    .map(
      ([key, emotion]) => `
        <button class="emotion-button" type="button" data-emotion="${key}">
          <span style="background:${emotion.color}"></span>
          <strong>${emotion.label}</strong>
        </button>
      `,
    )
    .join("");

  $$(".emotion-button").forEach((button) => {
    button.addEventListener("click", () => selectEmotion(button.dataset.emotion));
  });
}

function selectEmotion(key) {
  state.emotion = key;
  $$(".emotion-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.emotion === key);
  });
  updateRecommendation();
  renderInterventionCards();
}

function updateRecommendation() {
  if (!state.emotion) return;

  const emotion = emotions[state.emotion];
  const plan = interventions[state.mode][state.emotion];
  $("#emotionBadge").textContent = `Disahkan: ${emotion.label}`;
  $("#emotionBadge").style.color = emotion.color;
  $("#recommendTitle").textContent = plan.title;
  $("#recommendText").textContent = plan.prompt;
  $("#focusEmotion").textContent = emotion.label;
  $("#focusTitle").textContent = plan.title;
  $("#focusPrompt").textContent = plan.prompt;
  $("#focusSteps").innerHTML = plan.steps.map((step) => `<li>${step}</li>`).join("");
}

function renderInterventionCards() {
  const wrap = $("#interventionCards");
  wrap.innerHTML = Object.entries(interventions[state.mode])
    .map(([key, plan]) => {
      const emotion = emotions[key];
      return `
        <article class="activity-card ${key === state.emotion ? "active" : ""}" data-emotion="${key}">
          <p class="eyebrow" style="color:${emotion.color}">${emotion.label}</p>
          <h3>${plan.title}</h3>
          <p>${plan.prompt}</p>
        </article>
      `;
    })
    .join("");

  $$(".activity-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectEmotion(card.dataset.emotion);
      showTab("intervention");
    });
  });
}

function showTab(tab) {
  if (state.accessRole === "student" && teacherOnlyTabs.has(tab)) {
    showToast("Teacher access required for records and reports.");
    return;
  }
  const nav = $(`.nav-item[data-tab="${tab}"]`);
  if (nav) nav.click();
}

function bindSessionActions() {
  $("#startRecommended").addEventListener("click", () => showTab("intervention"));
  $("#saveSession").addEventListener("click", () => saveSession("Emotion Check-In"));
  $("#completeIntervention").addEventListener("click", () => saveSession("Comfort Support"));
}

function saveSession(source) {
  if (state.accessRole === "student") {
    showToast("Student calm session complete.");
    return;
  }

  const consent = $("#consentCheck").checked;
  if (!consent) {
    showToast("Sahkan persetujuan sebelum merekod sesi.");
    return;
  }

  if (!state.emotion) {
    showToast("Pilih emosi dahulu.");
    return;
  }

  const plan = interventions[state.mode][state.emotion];
  const record = {
    id: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : String(Date.now()),
    at: new Date().toISOString(),
    student: $("#studentName").value.trim() || "Tanpa nama",
    className: $("#studentClass").value.trim(),
    emotion: state.emotion,
    mode: state.mode,
    activity: plan.title,
    source,
    note: $("#teacherNote").value.trim(),
    artSegments: countPaintedSegments(),
  };

  state.sessions.unshift(record);
  persistRecords();
  renderReport();
  showToast("Rekod sesi telah disimpan.");
}

function renderColoringLibrary() {
  const library = $("#coloringLibrary");
  library.innerHTML = Object.entries(coloringPages)
    .map(
      ([key, page]) => `
        <button class="coloring-card ${key === state.coloringPage ? "active" : ""}" type="button" data-page="${key}">
          <strong>${page.label}</strong>
          <span>${page.hint}</span>
        </button>
      `,
    )
    .join("");

  $$(".coloring-card").forEach((button) => {
    button.addEventListener("click", () => {
      state.coloringPage = button.dataset.page;
      $$(".coloring-card").forEach((item) => item.classList.toggle("active", item === button));
      renderMandala();
      showToast(`${coloringPages[state.coloringPage].label} dipilih.`);
    });
  });
}

function renderPalette() {
  const palette = $("#palette");
  palette.innerHTML = paletteColors
    .map(
      (color, index) => `
        <button class="palette-swatch ${index === 0 ? "active" : ""}" type="button"
          data-color="${color}" style="background:${color}" aria-label="Warna ${index + 1}"></button>
      `,
    )
    .join("");

  $$(".palette-swatch").forEach((button) => {
    button.addEventListener("click", () => {
      state.color = button.dataset.color;
      $$(".palette-swatch").forEach((item) => item.classList.toggle("active", item === button));
    });
  });
}

function bindArtActions() {
  $("#clearMandala").addEventListener("click", clearMandala);
  $("#patternButton").addEventListener("click", fillPattern);
  $("#downloadMandala").addEventListener("click", downloadMandala);
  $$(".detail-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.coloringDifficulty = button.dataset.detail;
      $$(".detail-button").forEach((item) => item.classList.toggle("active", item === button));
      renderMandala();
      showToast(`${button.textContent} mode dipilih.`);
    });
  });
  $("#strokeSlider").addEventListener("input", (event) => {
    document.documentElement.style.setProperty("--mandala-stroke", event.target.value);
    $$(".mandala-cell").forEach((cell) => cell.setAttribute("stroke-width", event.target.value));
  });
}

function renderMandala() {
  const svg = $("#mandalaCanvas");
  const makers = {
    moonMandala: createMoonMandalaPattern,
    mosqueWindow: createMosqueWindowPattern,
    floralHarmony: createFloralHarmonyPattern,
    starBurst: createStarBurstPattern,
    bubbleCalm: createBubbleCalmPattern,
    oceanWaves: createOceanWavesPattern,
    cloudDreams: createCloudDreamsPattern,
    leafSerenity: createLeafSerenityPattern,
    focusShapes: createFocusShapesPattern,
    lotusPeace: createLotusPeacePattern,
  };
  const maker = makers[state.coloringPage] || createMoonMandalaPattern;

  svg.innerHTML = `
    <rect x="10" y="10" width="500" height="500" rx="8" fill="#fdfbf4" stroke="#dce5de" />
    <g>${maker()}</g>
  `;

  bindColoringCells();
}

function coloringDetail() {
  const settings = {
    simple: { segments: 6, rings: 1, density: 1 },
    medium: { segments: 10, rings: 2, density: 2 },
    detailed: { segments: 16, rings: 3, density: 3 },
  };
  return settings[state.coloringDifficulty] || settings.simple;
}

function createMoonMandalaPattern() {
  const detail = coloringDetail();
  const cells = [
    coloringCell("circle", `cx="260" cy="260" r="64"`, "#ffffff"),
    coloringCell("path", `d="M 300 105 C 238 130 210 205 234 272 C 258 339 324 378 390 346 C 326 332 296 278 306 220 C 314 174 344 135 388 115 C 360 101 329 96 300 105 Z"`, "#f6f8f4"),
  ];

  for (let ring = 0; ring < detail.rings; ring += 1) {
    const inner = 74 + ring * 52;
    const outer = inner + 42;
    for (let index = 0; index < detail.segments; index += 1) {
      const start = (index / detail.segments) * 360 - 90;
      const end = ((index + 1) / detail.segments) * 360 - 90;
      cells.push(wedgeCell(260, 260, inner, outer, start + 2, end - 2, ring % 2 ? "#ffffff" : "#f6f8f4"));
    }
  }

  const starCount = detail.density * 5;
  for (let index = 0; index < starCount; index += 1) {
    const angle = index * (360 / starCount) - 90;
    const point = polar(260, 260, 212 + (index % 2) * 24, angle);
    cells.push(coloringCell("polygon", `points="${starPoints(point.x, point.y, 18, 7, 4, -90)}"`, index % 2 ? "#ffffff" : "#f6f8f4"));
  }

  return cells.join("");
}

function createMosqueWindowPattern() {
  const detail = coloringDetail();
  const cells = [
    coloringCell("path", `d="${archPath(86, 56, 348, 400)}"`, "#ffffff"),
    coloringCell("path", `d="${archPath(128, 104, 264, 330)}"`, "#f6f8f4"),
    coloringCell("path", `d="${archPath(180, 166, 160, 248)}"`, "#ffffff"),
  ];

  const columns = detail.density + 2;
  const rows = detail.density + 2;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < columns; col += 1) {
      const x = 136 + col * (248 / columns);
      const y = 276 + row * 38;
      cells.push(coloringCell("rect", `x="${x}" y="${y}" width="${Math.max(26, 180 / columns)}" height="26" rx="5"`, (row + col) % 2 ? "#ffffff" : "#f6f8f4"));
    }
  }

  for (let index = 0; index < detail.segments; index += 1) {
    const point = polar(260, 260, 190, index * (360 / detail.segments) - 90);
    cells.push(coloringCell("circle", `cx="${point.x}" cy="${point.y}" r="10"`));
  }

  return cells.join("");
}

function createFloralHarmonyPattern() {
  const detail = coloringDetail();
  const cells = [
    coloringCell("circle", `cx="260" cy="260" r="42"`, "#f6f8f4"),
  ];
  const petalCount = detail.segments + 2;

  for (let ring = 0; ring < detail.rings + 1; ring += 1) {
    const radius = 88 + ring * 58;
    for (let index = 0; index < petalCount; index += 1) {
      const angle = index * (360 / petalCount);
      const point = polar(260, 260, radius, angle - 90);
      cells.push(coloringCell("ellipse", `cx="${point.x}" cy="${point.y}" rx="${24 - ring * 2}" ry="${48 - ring * 4}" transform="rotate(${angle} ${point.x} ${point.y})"`, (index + ring) % 2 ? "#ffffff" : "#f6f8f4"));
    }
  }

  return cells.join("");
}

function createStarBurstPattern() {
  const detail = coloringDetail();
  const cells = [
    coloringCell("polygon", `points="${starPoints(260, 260, 214, 88, detail.segments, -90)}"`, "#ffffff"),
    coloringCell("polygon", `points="${starPoints(260, 260, 154, 62, detail.segments, -90 + 180 / detail.segments)}"`, "#f6f8f4"),
    coloringCell("circle", `cx="260" cy="260" r="44"`),
  ];

  for (let index = 0; index < detail.segments; index += 1) {
    const start = index * (360 / detail.segments) - 90;
    const p1 = polar(260, 260, 58, start + 5);
    const p2 = polar(260, 260, 226, start + 180 / detail.segments);
    const p3 = polar(260, 260, 58, start + (360 / detail.segments) - 5);
    cells.push(coloringCell("polygon", `points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}"`, index % 2 ? "#ffffff" : "#f6f8f4"));
  }

  return cells.join("");
}

function createBubbleCalmPattern() {
  const detail = coloringDetail();
  const cells = [];
  const rows = detail.density + 3;
  const cols = detail.density + 3;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const cx = 88 + col * (344 / (cols - 1));
      const cy = 96 + row * (328 / (rows - 1));
      const radius = 22 + ((row + col) % 3) * 9;
      cells.push(coloringCell("circle", `cx="${cx}" cy="${cy}" r="${radius}"`, (row + col) % 2 ? "#ffffff" : "#f6f8f4"));
    }
  }

  cells.push(`<path d="M 64 458 C 150 430 224 470 312 442 C 380 421 430 432 456 454" fill="none" stroke="#6e9288" stroke-width="${currentStrokeWidth()}" stroke-linecap="round" />`);
  return cells.join("");
}

function createOceanWavesPattern() {
  const detail = coloringDetail();
  const cells = [];
  const bands = detail.density + 4;

  for (let index = 0; index < bands; index += 1) {
    const y = 78 + index * 62;
    const next = y + 50;
    cells.push(coloringCell("path", `d="M 54 ${y} C 112 ${y - 28} 156 ${y + 28} 214 ${y} C 272 ${y - 28} 316 ${y + 28} 374 ${y} C 420 ${y - 22} 454 ${y} 466 ${y + 16} L 466 ${next} C 408 ${next + 24} 356 ${next - 24} 298 ${next} C 240 ${next + 24} 188 ${next - 24} 130 ${next} C 94 ${next + 14} 68 ${next + 8} 54 ${next} Z"`, index % 2 ? "#ffffff" : "#f6f8f4"));
  }

  for (let index = 0; index < detail.density * 4; index += 1) {
    const point = polar(260, 260, 190 + (index % 2) * 30, index * 38 - 90);
    cells.push(coloringCell("circle", `cx="${point.x}" cy="${point.y}" r="12"`));
  }

  return cells.join("");
}

function createCloudDreamsPattern() {
  const detail = coloringDetail();
  const cells = [
    coloringCell("circle", `cx="206" cy="170" r="46"`, "#ffffff"),
    coloringCell("circle", `cx="258" cy="154" r="58"`, "#f6f8f4"),
    coloringCell("circle", `cx="322" cy="176" r="44"`, "#ffffff"),
    coloringCell("rect", `x="170" y="176" width="190" height="54" rx="27"`, "#ffffff"),
    coloringCell("path", `d="M 150 330 C 198 292 246 368 296 330 C 340 298 382 336 404 364 L 116 364 C 122 350 132 340 150 330 Z"`, "#f6f8f4"),
  ];

  const drops = detail.density * 4;
  for (let index = 0; index < drops; index += 1) {
    const x = 130 + index * (260 / Math.max(1, drops - 1));
    const y = 270 + (index % 2) * 34;
    cells.push(coloringCell("path", `d="M ${x} ${y} C ${x + 18} ${y + 24} ${x + 18} ${y + 48} ${x} ${y + 58} C ${x - 18} ${y + 48} ${x - 18} ${y + 24} ${x} ${y} Z"`));
  }

  return cells.join("");
}

function createLeafSerenityPattern() {
  const detail = coloringDetail();
  const cells = [];
  const leaves = detail.segments + 2;
  cells.push(`<path d="M 260 454 C 248 360 248 236 260 76" fill="none" stroke="#6e9288" stroke-width="${currentStrokeWidth()}" stroke-linecap="round" />`);

  for (let index = 0; index < leaves; index += 1) {
    const y = 110 + index * (300 / Math.max(1, leaves - 1));
    const side = index % 2 === 0 ? -1 : 1;
    const cx = 260 + side * (56 + (index % 3) * 8);
    const angle = side < 0 ? -52 : 52;
    cells.push(coloringCell("ellipse", `cx="${cx}" cy="${y}" rx="28" ry="58" transform="rotate(${angle} ${cx} ${y})"`, index % 2 ? "#ffffff" : "#f6f8f4"));
  }

  if (detail.density > 1) {
    for (let index = 0; index < leaves - 2; index += 1) {
      const y = 144 + index * (250 / Math.max(1, leaves - 3));
      cells.push(coloringCell("circle", `cx="${260 + (index % 2 ? 118 : -118)}" cy="${y}" r="14"`));
    }
  }

  return cells.join("");
}

function createFocusShapesPattern() {
  const detail = coloringDetail();
  const cells = [];
  const shapes = detail.density + 3;

  for (let row = 0; row < shapes; row += 1) {
    for (let col = 0; col < shapes; col += 1) {
      const x = 70 + col * (380 / Math.max(1, shapes - 1));
      const y = 76 + row * (360 / Math.max(1, shapes - 1));
      const type = (row + col) % 3;
      if (type === 0) cells.push(coloringCell("rect", `x="${x - 22}" y="${y - 22}" width="44" height="44" rx="8"`, "#ffffff"));
      if (type === 1) cells.push(coloringCell("circle", `cx="${x}" cy="${y}" r="24"`, "#f6f8f4"));
      if (type === 2) cells.push(coloringCell("polygon", `points="${x},${y - 28} ${x + 28},${y + 22} ${x - 28},${y + 22}"`, "#ffffff"));
    }
  }

  return cells.join("");
}

function createLotusPeacePattern() {
  const detail = coloringDetail();
  const cells = [
    coloringCell("circle", `cx="260" cy="300" r="38"`, "#f6f8f4"),
  ];
  const layers = detail.rings + 1;

  for (let layer = 0; layer < layers; layer += 1) {
    const count = detail.segments + layer * 2;
    const radius = 58 + layer * 48;
    for (let index = 0; index < count; index += 1) {
      const angle = index * (360 / count);
      const point = polar(260, 300, radius, angle - 90);
      cells.push(coloringCell("ellipse", `cx="${point.x}" cy="${point.y}" rx="${22 + layer * 3}" ry="${60 - layer * 4}" transform="rotate(${angle} ${point.x} ${point.y})"`, (index + layer) % 2 ? "#ffffff" : "#f6f8f4"));
    }
  }

  cells.push(coloringCell("rect", `x="168" y="414" width="184" height="32" rx="16"`, "#ffffff"));
  return cells.join("");
}

function createMandalaPattern() {
  const center = 260;
  const segments = 16;
  const rings = [
    [34, 92],
    [92, 158],
    [158, 222],
  ];

  const cells = [];
  cells.push(coloringCell("circle", `cx="${center}" cy="${center}" r="32"`));

  rings.forEach(([inner, outer], ringIndex) => {
    for (let index = 0; index < segments; index += 1) {
      const start = (index / segments) * 360 - 90;
      const end = ((index + 1) / segments) * 360 - 90;
      const p1 = polar(center, center, inner, start);
      const p2 = polar(center, center, outer, start + 1.5);
      const p3 = polar(center, center, outer, end - 1.5);
      const p4 = polar(center, center, inner, end);
      const fill = ringIndex % 2 === 0 ? "#ffffff" : "#f6f8f4";
      cells.push(coloringCell("path", `d="M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} L ${p4.x} ${p4.y} Z"`, fill));
    }
  });

  for (let index = 0; index < segments; index += 1) {
    const start = (index / segments) * 360 - 90;
    const end = ((index + 0.5) / segments) * 360 - 90;
    const p1 = polar(center, center, 226, start + 4);
    const p2 = polar(center, center, 250, end);
    const p3 = polar(center, center, 226, start + 18);
    cells.push(coloringCell("path", `d="M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} Z"`));
  }

  return cells.join("");
}

function createStarPattern() {
  const cells = [];
  cells.push(coloringCell("polygon", `points="${starPoints(260, 260, 212, 92, 8, -90)}"`, "#ffffff"));
  cells.push(coloringCell("polygon", `points="${starPoints(260, 260, 160, 70, 8, -67.5)}"`, "#f6f8f4"));
  cells.push(coloringCell("circle", `cx="260" cy="260" r="58"`));

  for (let index = 0; index < 8; index += 1) {
    const start = index * 45 - 90;
    const p1 = polar(260, 260, 68, start + 8);
    const p2 = polar(260, 260, 202, start + 22.5);
    const p3 = polar(260, 260, 68, start + 37);
    cells.push(coloringCell("polygon", `points="${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}"`, index % 2 ? "#ffffff" : "#f6f8f4"));
  }

  for (let index = 0; index < 8; index += 1) {
    const point = polar(260, 260, 238, index * 45 - 90);
    cells.push(coloringCell("circle", `cx="${point.x}" cy="${point.y}" r="19"`));
  }

  return cells.join("");
}

function createMosquePattern() {
  const cells = [
    coloringCell("rect", `x="80" y="286" width="360" height="138" rx="8"`, "#ffffff"),
    coloringCell("path", `d="M 150 286 C 150 210 206 166 260 166 C 314 166 370 210 370 286 Z"`, "#f6f8f4"),
    coloringCell("path", `d="M 198 286 C 198 246 226 220 260 220 C 294 220 322 246 322 286 Z"`, "#ffffff"),
    coloringCell("rect", `x="105" y="210" width="54" height="214" rx="8"`, "#ffffff"),
    coloringCell("rect", `x="361" y="210" width="54" height="214" rx="8"`, "#ffffff"),
    coloringCell("path", `d="M 102 210 L 132 166 L 162 210 Z"`, "#f6f8f4"),
    coloringCell("path", `d="M 358 210 L 388 166 L 418 210 Z"`, "#f6f8f4"),
    coloringCell("path", `d="M 220 424 V 360 C 220 334 240 314 260 314 C 280 314 300 334 300 360 V 424 Z"`, "#f6f8f4"),
    coloringCell("circle", `cx="132" cy="254" r="18"`),
    coloringCell("circle", `cx="388" cy="254" r="18"`),
    coloringCell("circle", `cx="260" cy="142" r="22"`, "#ffffff"),
  ];

  for (let index = 0; index < 7; index += 1) {
    const x = 115 + index * 48;
    cells.push(coloringCell("rect", `x="${x}" y="306" width="28" height="42" rx="14"`, index % 2 ? "#ffffff" : "#f6f8f4"));
  }

  return cells.join("");
}

function createGardenPattern() {
  const cells = [];
  cells.push(coloringCell("circle", `cx="260" cy="260" r="78"`, "#ffffff"));
  cells.push(coloringCell("circle", `cx="260" cy="260" r="38"`, "#f6f8f4"));

  for (let index = 0; index < 12; index += 1) {
    const angle = index * 30;
    const point = polar(260, 260, 146, angle - 90);
    cells.push(coloringCell("ellipse", `cx="${point.x}" cy="${point.y}" rx="25" ry="52" transform="rotate(${angle} ${point.x} ${point.y})"`, index % 2 ? "#ffffff" : "#f6f8f4"));
  }

  for (let index = 0; index < 10; index += 1) {
    const angle = index * 36 + 18;
    const point = polar(260, 260, 218, angle - 90);
    cells.push(coloringCell("ellipse", `cx="${point.x}" cy="${point.y}" rx="20" ry="42" transform="rotate(${angle + 18} ${point.x} ${point.y})"`));
  }

  for (let index = 0; index < 8; index += 1) {
    const point = polar(260, 260, 235, index * 45 - 90);
    cells.push(coloringCell("circle", `cx="${point.x}" cy="${point.y}" r="17"`, index % 2 ? "#ffffff" : "#f6f8f4"));
  }

  cells.push(`<circle cx="260" cy="260" r="235" fill="none" stroke="#8aa39a" stroke-width="${currentStrokeWidth()}" />`);
  return cells.join("");
}

function createMihrabPattern() {
  const cells = [
    coloringCell("path", `d="${archPath(92, 70, 336, 374)}"`, "#ffffff"),
    coloringCell("path", `d="${archPath(132, 112, 256, 314)}"`, "#f6f8f4"),
    coloringCell("path", `d="${archPath(174, 164, 172, 242)}"`, "#ffffff"),
    coloringCell("path", `d="M 225 406 V 326 C 225 306 242 288 260 288 C 278 288 295 306 295 326 V 406 Z"`, "#f6f8f4"),
    coloringCell("circle", `cx="260" cy="230" r="36"`),
    coloringCell("path", `d="M 260 154 L 278 190 L 318 196 L 289 224 L 296 264 L 260 245 L 224 264 L 231 224 L 202 196 L 242 190 Z"`, "#ffffff"),
  ];

  for (let index = 0; index < 10; index += 1) {
    const x = 100 + index * 32;
    cells.push(coloringCell("rect", `x="${x}" y="430" width="22" height="22" rx="4"`, index % 2 ? "#ffffff" : "#f6f8f4"));
  }

  for (let index = 0; index < 6; index += 1) {
    const y = 164 + index * 36;
    cells.push(coloringCell("circle", `cx="116" cy="${y}" r="12"`));
    cells.push(coloringCell("circle", `cx="404" cy="${y}" r="12"`));
  }

  return cells.join("");
}

function bindColoringCells() {
  $$(".mandala-cell").forEach((cell) => {
    cell.setAttribute("stroke-width", currentStrokeWidth());
    cell.addEventListener("click", () => {
      cell.setAttribute("fill", state.color);
      cell.dataset.painted = "true";
    });
  });
}

function coloringCell(tag, attributes, fill = "#ffffff") {
  return `<${tag} class="mandala-cell" ${attributes} fill="${fill}" stroke="#6e9288" stroke-width="${currentStrokeWidth()}" data-painted="false" data-base-fill="${fill}" />`;
}

function currentStrokeWidth() {
  return $("#strokeSlider")?.value || "2";
}

function wedgeCell(cx, cy, inner, outer, start, end, fill = "#ffffff") {
  const p1 = polar(cx, cy, inner, start);
  const p2 = polar(cx, cy, outer, start);
  const p3 = polar(cx, cy, outer, end);
  const p4 = polar(cx, cy, inner, end);
  return coloringCell("path", `d="M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} L ${p4.x} ${p4.y} Z"`, fill);
}

function polar(cx, cy, radius, degrees) {
  const radians = (degrees * Math.PI) / 180;
  return {
    x: Number((cx + radius * Math.cos(radians)).toFixed(2)),
    y: Number((cy + radius * Math.sin(radians)).toFixed(2)),
  };
}

function starPoints(cx, cy, outer, inner, pointCount, offset) {
  const points = [];
  for (let index = 0; index < pointCount * 2; index += 1) {
    const radius = index % 2 === 0 ? outer : inner;
    const point = polar(cx, cy, radius, offset + (index * 180) / pointCount);
    points.push(`${point.x},${point.y}`);
  }
  return points.join(" ");
}

function archPath(x, y, width, height) {
  const mid = x + width / 2;
  const right = x + width;
  const bottom = y + height;
  const curve = y + height * 0.46;
  return `M ${mid} ${y} C ${right} ${y} ${right} ${curve} ${right} ${bottom} L ${x} ${bottom} C ${x} ${curve} ${x} ${y} ${mid} ${y} Z`;
}

function clearMandala() {
  $$(".mandala-cell").forEach((cell) => {
    cell.setAttribute("fill", cell.dataset.baseFill || "#ffffff");
    cell.dataset.painted = "false";
  });
  showToast("Bahan mewarna dikosongkan.");
}

function fillPattern() {
  $$(".mandala-cell").forEach((cell, index) => {
    const color = paletteColors[(index + state.coloringPage.length) % paletteColors.length];
    cell.setAttribute("fill", color);
    cell.dataset.painted = "true";
  });
  showToast("Warna ceria telah digunakan.");
}

function countPaintedSegments() {
  return $$(".mandala-cell").filter((cell) => cell.dataset.painted === "true").length;
}

function downloadMandala() {
  const svg = $("#mandalaCanvas").cloneNode(true);
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const blob = new Blob([svg.outerHTML], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `soulspace-kids-${state.coloringPage}-${new Date().toISOString().slice(0, 10)}.svg`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("Fail SVG telah disediakan.");
}

function bindSoundActions() {
  $("#startBreath").addEventListener("click", startBreathing);
  $("#stopBreath").addEventListener("click", stopBreathing);
  $("#stopCalmAudio").addEventListener("click", () => stopCalmAudio());
  $("#humanAudioFile").addEventListener("change", handleHumanAudioFile);
  $("#loadYoutube").addEventListener("click", loadYoutubeAudio);
  $("#clearHumanAudio").addEventListener("click", clearHumanAudio);
  $$(".track-card").forEach((button) => {
    button.addEventListener("click", () => startCalmAudio(button.dataset.track));
  });
  $("#durationSlider").addEventListener("input", (event) => {
    state.breathDurationMs = Number(event.target.value) * 60 * 1000;
    $("#durationOut").textContent = event.target.value;
  });
}

function startCalmAudio(track) {
  stopCalmAudio(false);

  if (track === "zikr") {
    $$(".track-card").forEach((button) => button.classList.toggle("active", button.dataset.track === track));
    const player = $("#humanAudioPlayer");

    if (player.src) {
      player.play().then(() => {
        $("#zikrLine").textContent = "Zikir / Quran";
        showToast("Audio manusia dimainkan.");
      }).catch(() => showToast("Tekan butang main pada pemain audio."));
      return;
    }

    if ($("#youtubeEmbed").classList.contains("active")) {
      $("#zikrLine").textContent = "Zikir / Quran";
      showToast("Tekan play pada pemain YouTube.");
      return;
    }

    showToast("Pilih fail audio atau letak pautan YouTube dahulu.");
    return;
  }

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    state.calmAudio = {
      context,
      nodes: [],
      track,
      phraseIndex: 0,
      noteIndex: 0,
    };

    $$(".track-card").forEach((button) => button.classList.toggle("active", button.dataset.track === track));

    startDrone(context, 92, 0.022);
    state.calmTimer = window.setInterval(playLullabyNote, 900);
    playLullabyNote();
    showToast("Lagu lembut dimainkan.");
  } catch (error) {
    stopCalmAudio(false);
    showToast("Audio tidak dapat dimulakan.");
  }
}

function stopCalmAudio(show = true) {
  if (state.calmTimer) {
    window.clearInterval(state.calmTimer);
    state.calmTimer = null;
  }

  const player = $("#humanAudioPlayer");
  if (player) {
    player.pause();
    player.currentTime = 0;
  }

  const youtubeFrame = $("#youtubeEmbed iframe");
  if (youtubeFrame?.src) {
    youtubeFrame.src = youtubeFrame.src;
  }

  if (state.calmAudio?.context) {
    state.calmAudio.nodes.forEach((node) => {
      if (node.gain) node.gain.setTargetAtTime(0, state.calmAudio.context.currentTime, 0.05);
    });
    const context = state.calmAudio.context;
    window.setTimeout(() => context.close(), 160);
  }

  state.calmAudio = null;
  $$(".track-card").forEach((button) => button.classList.remove("active"));
  if (show) showToast("Audio tenang dihentikan.");
}

function handleHumanAudioFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (state.humanAudioObjectUrl) {
    URL.revokeObjectURL(state.humanAudioObjectUrl);
  }

  clearYoutubeEmbed();
  state.humanAudioObjectUrl = URL.createObjectURL(file);
  const player = $("#humanAudioPlayer");
  player.src = state.humanAudioObjectUrl;
  player.load();
  showToast("Fail audio manusia sudah dipilih.");
}

function loadYoutubeAudio() {
  const url = $("#youtubeUrl").value.trim();
  const videoId = getYoutubeVideoId(url);

  if (!videoId) {
    showToast("Pautan YouTube tidak sah.");
    return;
  }

  const player = $("#humanAudioPlayer");
  player.pause();
  player.removeAttribute("src");
  player.load();
  if (state.humanAudioObjectUrl) {
    URL.revokeObjectURL(state.humanAudioObjectUrl);
    state.humanAudioObjectUrl = null;
  }

  const embed = $("#youtubeEmbed");
  embed.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${videoId}?rel=0"
      title="Pemain YouTube zikir atau Quran"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
  `;
  embed.classList.add("active");
  showToast("Pemain YouTube sudah dimasukkan.");
}

function clearHumanAudio() {
  stopCalmAudio(false);
  const player = $("#humanAudioPlayer");
  player.pause();
  player.removeAttribute("src");
  player.load();
  $("#humanAudioFile").value = "";
  $("#youtubeUrl").value = "";
  clearYoutubeEmbed();

  if (state.humanAudioObjectUrl) {
    URL.revokeObjectURL(state.humanAudioObjectUrl);
    state.humanAudioObjectUrl = null;
  }

  showToast("Audio manusia dikosongkan.");
}

function clearYoutubeEmbed() {
  const embed = $("#youtubeEmbed");
  embed.innerHTML = "";
  embed.classList.remove("active");
}

function getYoutubeVideoId(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1).split("/")[0];
    }
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname.startsWith("/watch")) return parsed.searchParams.get("v");
      if (parsed.pathname.startsWith("/embed/")) return parsed.pathname.split("/")[2];
      if (parsed.pathname.startsWith("/shorts/")) return parsed.pathname.split("/")[2];
    }
  } catch (error) {
    return "";
  }
  return "";
}

function startDrone(context, frequency, volume) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();

  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  filter.type = "lowpass";
  filter.frequency.value = 560;
  gain.gain.value = 0;

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  gain.gain.setTargetAtTime(volume, context.currentTime, 0.8);
  state.calmAudio.nodes.push(gain);
}

function playBell(context, frequency, duration, volume) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.value = 0;
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  gain.gain.setValueAtTime(0, context.currentTime);
  gain.gain.linearRampToValueAtTime(volume, context.currentTime + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
  oscillator.stop(context.currentTime + duration + 0.05);
}

function playLullabyNote() {
  if (!state.calmAudio?.context) return;
  const notes = [261.63, 329.63, 392, 329.63, 293.66, 349.23, 440, 349.23];
  const note = notes[state.calmAudio.noteIndex % notes.length];
  state.calmAudio.noteIndex += 1;
  playBell(state.calmAudio.context, note, 1.3, 0.045);
}

function startBreathing() {
  stopBreathing(false);
  state.breathStartedAt = Date.now();
  state.phaseIndex = 0;
  state.phaseElapsed = 0;
  updateBreathing();
  state.breathTimer = window.setInterval(updateBreathing, 1000);
  showToast("Sesi pernafasan bermula.");
}

function stopBreathing(show = true) {
  if (state.breathTimer) {
    window.clearInterval(state.breathTimer);
    state.breathTimer = null;
  }
  $("#breathPhase").textContent = "Sedia";
  $("#breathCount").textContent = "0";
  $("#breathMeter").style.width = "0%";
  $("#breathOrb").style.transform = "scale(1)";
  if (show) showToast("Sesi pernafasan dihentikan.");
}

function updateBreathing() {
  const phases = [
    { name: "Tarik nafas", seconds: 4, scale: 1.12 },
    { name: "Tahan", seconds: 2, scale: 1.12 },
    { name: "Hembus", seconds: 6, scale: 0.9 },
  ];

  const elapsedTotal = Date.now() - state.breathStartedAt;
  if (elapsedTotal >= state.breathDurationMs) {
    stopBreathing(false);
    saveSession("Calm Recitation");
    showToast("Sesi pernafasan selesai.");
    return;
  }

  const cycleSeconds = phases.reduce((sum, phase) => sum + phase.seconds, 0);
  const elapsedSeconds = Math.floor(elapsedTotal / 1000);
  const cyclePosition = elapsedSeconds % cycleSeconds;
  let cursor = 0;
  let activePhase = phases[0];

  for (const phase of phases) {
    if (cyclePosition < cursor + phase.seconds) {
      activePhase = phase;
      break;
    }
    cursor += phase.seconds;
  }

  const remaining = activePhase.seconds - (cyclePosition - cursor);
  const zikrIndex = Math.floor(elapsedSeconds / cycleSeconds) % zikr[state.mode].length;
  const progress = Math.min(100, (elapsedTotal / state.breathDurationMs) * 100);

  $("#breathPhase").textContent = activePhase.name;
  $("#breathCount").textContent = remaining;
  $("#breathOrb").style.transform = `scale(${activePhase.scale})`;
  $("#zikrLine").textContent = zikr[state.mode][zikrIndex];
  $("#breathMeter").style.width = `${progress}%`;
}

function bindReportActions() {
  $("#exportCsv").addEventListener("click", exportCsv);
  $("#printReport").addEventListener("click", () => window.print());
  $("#printReportTop").addEventListener("click", () => {
    showTab("report");
    window.setTimeout(() => window.print(), 120);
  });
  $("#clearRecords").addEventListener("click", () => {
    const confirmed = window.confirm("Padam semua rekod pada peranti ini?");
    if (!confirmed) return;
    state.sessions = [];
    persistRecords();
    renderReport();
    showToast("Semua rekod telah dipadam.");
  });
}

function renderReport() {
  const counts = Object.fromEntries(Object.keys(emotions).map((key) => [key, 0]));
  state.sessions.forEach((session) => {
    counts[session.emotion] = (counts[session.emotion] || 0) + 1;
  });

  const total = state.sessions.length;
  const main = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  const artSessions = state.sessions.filter((session) => session.artSegments > 0).length;

  $("#totalSessions").textContent = total;
  $("#mainEmotion").textContent = total ? emotions[main[0]].label : "-";
  $("#artSessions").textContent = artSessions;

  $("#emotionChart").innerHTML = Object.entries(emotions)
    .map(([key, emotion]) => {
      const count = counts[key] || 0;
      const width = total ? Math.max(5, (count / total) * 100) : 0;
      return `
        <div class="bar-row">
          <span>${emotion.label}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${width}%; background:${emotion.color}"></div></div>
          <strong>${count}</strong>
        </div>
      `;
    })
    .join("");

  $("#reportRows").innerHTML =
    state.sessions
      .slice(0, 30)
      .map((session) => {
        const date = new Intl.DateTimeFormat("ms-MY", {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(new Date(session.at));
        return `
          <tr>
            <td>${escapeHtml(date)}</td>
            <td>${escapeHtml(session.student)}${session.className ? `<br><small>${escapeHtml(session.className)}</small>` : ""}</td>
            <td>${escapeHtml(emotions[session.emotion]?.label || session.emotion)}</td>
            <td>${escapeHtml(session.activity)}</td>
            <td>${escapeHtml(session.note || "-")}</td>
          </tr>
        `;
      })
      .join("") || `<tr><td colspan="5">Belum ada rekod.</td></tr>`;
}

function exportCsv() {
  if (!state.sessions.length) {
    showToast("Tiada rekod untuk dieksport.");
    return;
  }

  const headers = ["Tarikh", "Murid", "Kelas", "Emosi", "Mod", "Aktiviti", "Catatan"];
  const rows = state.sessions.map((session) => [
    session.at,
    session.student,
    session.className,
    emotions[session.emotion]?.label || session.emotion,
    session.mode,
    session.activity,
    session.note,
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `laporan-ruang-tenang-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("CSV telah disediakan.");
}

function loadRecords() {
  try {
    const saved = localStorage.getItem(storageKey) || localStorage.getItem(legacyStorageKey) || "[]";
    return JSON.parse(saved);
  } catch (error) {
    return [];
  }
}

function persistRecords() {
  localStorage.setItem(storageKey, JSON.stringify(state.sessions));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

window.addEventListener("beforeunload", () => {
  stopCamera();
  stopCalmAudio(false);
});

init();

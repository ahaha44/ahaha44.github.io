const timelineEvents = [
  {
    year: "1678",
    title: "胤禛出生",
    desc: "康熙十七年，胤禛出生。後來的政治風格與皇子教育、內廷經驗密切相關。",
    tags: ["生平", "皇位繼承"]
  },
  {
    year: "1722",
    title: "雍正即位",
    desc: "康熙崩逝後，胤禛即皇帝位。繼位敘事成為雍正朝政治正當性的核心問題之一。",
    tags: ["生平", "政治", "皇位繼承"]
  },
  {
    year: "1723",
    title: "整飭吏治與密摺政治",
    desc: "新朝強化奏摺渠道、考核官僚操守，田文鏡、李衛等地方大員進入政治視野。",
    tags: ["政治", "吏治", "硃批諭旨"]
  },
  {
    year: "1724",
    title: "養廉銀與地方行政成本",
    desc: "配合耗羨歸公與吏治整飭，養廉銀使地方官員薪給、行政支出與財政監督逐步制度化。",
    tags: ["財政", "吏治"]
  },
  {
    year: "1724",
    title: "年羹堯功高受忌",
    desc: "西北軍功與權力膨脹交織，年羹堯案成為君臣關係與軍事權力的標誌事件。",
    tags: ["軍事", "政治", "吏治"]
  },
  {
    year: "1726",
    title: "耗羨歸公推行",
    desc: "財政制度改革試圖將地方灰色收入制度化，牽動地方治理與官僚薪給。",
    tags: ["財政", "吏治"]
  },
  {
    year: "1727",
    title: "攤丁入畝逐步推廣",
    desc: "丁銀併入田賦，減弱人丁編審對賦役的束縛，財政徵收與基層戶籍治理隨之調整。",
    tags: ["財政", "政治"]
  },
  {
    year: "1727",
    title: "西藏與青海治理調整",
    desc: "邊疆軍政、宗教權威與清廷治理術交疊，章嘉國師等宗教人物亦可納入觀察。",
    tags: ["軍事", "宗教", "政治"]
  },
  {
    year: "1728",
    title: "曾靜案發",
    desc: "曾靜、張熙受呂留良思想影響，試圖策動岳鍾琪；案件導向一場公開的政治教化。",
    tags: ["政治", "皇位繼承"]
  },
  {
    year: "1729",
    title: "《大義覺迷錄》成書刊行",
    desc: "雍正以問答、供詞與諭旨重構正統論，將案件轉化為面向士人的政治文本。",
    tags: ["政治", "皇位繼承"]
  },
  {
    year: "1729",
    title: "軍機處制度成形",
    desc: "因西北軍務需要而設軍機房，機務處理由臨時軍務逐步轉為中樞日常決策機制。",
    tags: ["政治", "軍事", "吏治"]
  },
  {
    year: "1730",
    title: "改土歸流深入推行",
    desc: "鄂爾泰在雲貴等地推動改土歸流，地方空間、族群治理與軍政權力相互扣連。",
    tags: ["政治", "吏治", "軍事"]
  },
  {
    year: "1732",
    title: "佛教修證與御選語錄",
    desc: "雍正以圓明居士等身份介入佛教語錄整理，建構帝王修證與辨正異端的話語。",
    tags: ["宗教", "佛教修證", "御製詩文"]
  },
  {
    year: "1735",
    title: "雍正崩逝，乾隆即位",
    desc: "雍正十三年八月，雍正崩逝。乾隆即位後對若干文本與政治記憶重新處理。",
    tags: ["生平", "政治", "皇位繼承"]
  }
];

const textCategories = [
  {
    id: "political",
    name: "政治與教化文獻",
    intro: "以國家正統、君臣秩序與教化語言為核心。",
    items: ["《大義覺迷錄》", "《聖諭廣訓》", "《世宗憲皇帝硃批諭旨》", "《上諭內閣》", "《清世宗實錄》"]
  },
  {
    id: "memorials",
    name: "硃批諭旨",
    intro: "以皇帝硃批、諭旨與臣工奏報之間的語氣、權力關係為特色。",
    items: ["《世宗憲皇帝硃批諭旨》", "戴鐸奏折", "田文鏡奏摺", "李衛奏摺", "鄂爾泰奏摺", "年羹堯相關奏摺", "錢糧、鹽政、軍務、邊疆奏摺"]
  },
  {
    id: "buddhist",
    name: "佛教與禪宗文獻",
    intro: "呈現雍正作為政治君主與修行者之間的互文關係。",
    items: ["《圓明居士語錄》", "《御選語錄》", "《揀魔辨異錄》", "章嘉國師相關材料"]
  },
  {
    id: "poetry",
    name: "御製詩文",
    intro: "從雍邸到即位後的御製詩文，觀察文學身份與帝王自我書寫。",
    items: ["《世宗憲皇帝御製文集》", "《清世宗御製文集》", "《雍邸集》", "御製詩", "序跋與碑記"]
  }
];

const tones = [
  { tone: "嘉許", text: "朕覽奏甚慰，爾能實心辦理，仍須勉之慎之。", note: "肯定官員能力，同時保留督責。" },
  { tone: "斥責", text: "此事甚屬糊塗，地方利弊豈可如此含混。", note: "以強烈評語建立責任邊界。" },
  { tone: "追問", text: "所奏未明，銀數若干、牽涉何人，逐一查明再奏。", note: "要求補足事實鏈與行政證據。" },
  { tone: "指示", text: "即照此辦理，不可張皇，亦不可姑息。", note: "給出操作原則與治理尺度。" },
  { tone: "警告", text: "若仍因循，必從重治罪，毋謂朕言之不早。", note: "將硃批轉化為預先責任告知。" },
  { tone: "安撫", text: "此非爾一人之過，但當據實料理，朕自有權衡。", note: "穩定臣工心理，鼓勵真實奏報。" },
  { tone: "政治表態", text: "朕治天下，惟以公正實心為本，非為一己之私。", note: "把個案提升為君主政治宣示。" }
];

const peopleGroups = [
  {
    group: "皇室",
    names: ["康熙", "雍正", "乾隆", "胤祥", "胤禵", "胤禩", "胤禟", "胤祉"],
    hint: "繼位敘事、宗室關係與政治正統問題。"
  },
  {
    group: "政治臣僚",
    names: ["張廷玉", "田文鏡", "李衛", "鄂爾泰", "隆科多", "年羹堯", "馬齊", "朱軾"],
    hint: "密摺政治、地方治理、軍功與權力邊界。"
  },
  {
    group: "思想與案件人物",
    names: ["曾靜", "張熙", "呂留良", "嚴鴻逵", "沈在寬"],
    hint: "《大義覺迷錄》的案情、供詞與思想背景。"
  },
  {
    group: "宗教人物",
    names: ["章嘉國師", "玉琳通琇", "天童密雲一系", "雍正評論過的禪僧"],
    hint: "佛教修證、禪宗辨異與帝王宗教書寫。"
  }
];

const places = {
  "北京紫禁城": {
    event: "即位、內廷政務、上諭與核心決策。",
    people: "雍正、張廷玉、隆科多、年羹堯。",
    texts: "《清世宗實錄》《上諭內閣》《硃批諭旨》。"
  },
  "圓明園": {
    event: "雍正長期駐蹕與書寫空間，亦連到詩文與佛教文本。",
    people: "雍正、內廷詞臣、宮廷畫師。",
    texts: "御製詩文、圓明居士相關材料。"
  },
  "青海": {
    event: "西北軍務、邊疆治理與年羹堯政治命運。",
    people: "年羹堯、岳鍾琪、雍正。",
    texts: "軍務奏摺、西北相關上諭。"
  },
  "西藏": {
    event: "宗教權威、邊疆秩序與清廷制度安排。",
    people: "章嘉國師、雍正、駐藏官員。",
    texts: "宗教政策與邊疆奏摺。"
  },
  "雲貴": {
    event: "改土歸流與地方治理重組。",
    people: "鄂爾泰、地方土司、雍正。",
    texts: "改土歸流奏摺與上諭。"
  },
  "湖南永興": {
    event: "曾靜相關線索的重要地點。",
    people: "曾靜、張熙、岳鍾琪。",
    texts: "《大義覺迷錄》、曾靜供詞。"
  },
  "浙江石門": {
    event: "呂留良思想流傳與清廷追究。",
    people: "呂留良、嚴鴻逵、沈在寬。",
    texts: "思想案相關諭旨與士人文本流傳材料。"
  },
  "江南": {
    event: "士人輿論、地方財政與文化網絡。",
    people: "地方督撫、士人群體。",
    texts: "財政奏摺、教化文獻、御製詩文。"
  }
};

const gallery = [
  {
    title: "雍正讀書像",
    type: "帝王肖像",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/df/Emperor_Yongzheng.JPG",
    note: "可作為首頁之外的身份圖像入口，連到生平與御製文集。"
  },
  {
    title: "雍正朝硃批奏摺",
    type: "檔案影像",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/52/%E6%B8%85%E6%9C%9D%E7%9A%87%E5%B8%9D%E7%A1%83%E6%89%B9%E5%A5%8F%E6%91%BA_-_Yongzheng_Emperor_01.jpg",
    note: "適合建立「臣工奏摺 / 皇帝硃批」並讀介面。"
  },
  {
    title: "十二美人圖：桐蔭品茗",
    type: "清宮圖像",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Yongzheng_twelve_beauties_women_11.jpg",
    note: "可放入「圖像中的雍正」專題，辨析題跋、觀看與誤讀。"
  },
  {
    title: "十二美人圖：博古幽思",
    type: "清宮圖像",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Yongzheng_twelve_beauties_women_01.jpg",
    note: "連接雍親王時期的園居空間與宮廷繪畫材料。"
  },
  {
    title: "養心殿內景",
    type: "政治空間",
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Beijing%202006%202-59.jpg?width=900",
    note: "作為政務、內廷與檔案生成空間的展示節點。"
  },
  {
    title: "雍正朝漢文硃批奏摺匯編",
    type: "版本書影",
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/SSID-10004924%20%E9%9B%8D%E6%AD%A3%E6%9C%9D%E6%BC%A2%E6%96%87%E7%A1%83%E6%89%B9%E5%A5%8F%E6%91%BA%E5%8C%AF%E7%B7%A8%20%E5%85%83%E5%B9%B4%E6%AD%A3%E6%9C%88%E5%88%9D%E4%BA%8C%E6%97%A5%E8%87%B3%E4%B9%9D%E6%9C%88%E4%BA%8C%E5%8D%81%E6%97%A5.pdf?width=700",
    note: "可用於版本、冊次、頁碼與題名資料建置。"
  },
  {
    title: "雍正十二月行樂圖：正月觀燈",
    type: "清宮圖像",
    src: "assets/yongzheng-month-01.jpg",
    note: "可作公共史學入口與圖像專題，連接歲時、儀式與宮廷觀看。"
  },
  {
    title: "雍正十二月行樂圖：十一月參禪",
    type: "清宮圖像",
    src: "assets/yongzheng-month-11.jpg",
    note: "適合連到佛教修證、圓明居士與帝王宗教書寫。"
  },
  {
    title: "雍正十二月行樂圖：臘月賞雪",
    type: "清宮圖像",
    src: "assets/yongzheng-month-12.jpg",
    note: "可作園居、季節、清宮圖像與文學想像的材料。"
  }
];

const searchable = [
  ...timelineEvents.map((item) => ({ type: "年表", title: item.title, body: `${item.year} ${item.desc} ${item.tags.join(" ")}` })),
  ...textCategories.flatMap((cat) => cat.items.map((item) => ({ type: cat.name, title: item, body: cat.intro }))),
  ...peopleGroups.flatMap((group) => group.names.map((name) => ({ type: group.group, title: name, body: group.hint }))),
  ...Object.entries(places).map(([name, detail]) => ({ type: "地點", title: name, body: `${detail.event} ${detail.people} ${detail.texts}` }))
];

const keywords = {
  "正統": ["《大義覺迷錄》：華夷、君臣與皇位合法性。", "《聖諭廣訓》：教化秩序與臣民倫理。", "《清世宗實錄》：即位敘事與官方編年。"],
  "硃批": ["硃批諭旨：語氣分類、追問結構、行政責任。", "戴鐸、田文鏡、李衛、鄂爾泰奏摺可作首批樣本。"],
  "佛教": ["《圓明居士語錄》：帝王修證與禪宗話語。", "《揀魔辨異錄》：辨異與宗教權威。"],
  "曾靜": ["《大義覺迷錄》：供詞、諭旨、問答與政治教化。", "湖南永興、岳鍾琪、呂留良思想流傳。"],
  "財政": ["耗羨歸公：地方財政制度化。", "錢糧奏摺：地方治理、官吏操守與民生。"]
};

const viewIds = ["timeline", "texts", "people", "places", "images", "tools"];

function getViewFromHash() {
  const hash = window.location.hash.replace("#", "");
  return viewIds.includes(hash) ? hash : "home";
}

function setActiveLinks(view) {
  document.querySelectorAll("[data-view-link]").forEach((link) => {
    const active = link.dataset.viewLink === view;
    link.classList.toggle("active", active);
    if (active && view !== "home") {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function closeBookReader() {
  const reader = document.querySelector(".book-reader");
  if (reader) reader.hidden = true;
}

function showView(view = "home", options = {}) {
  const { updateHash = true, scroll = true } = options;
  const nextView = viewIds.includes(view) ? view : "home";
  document.body.dataset.view = nextView;

  document.querySelectorAll("main > .section").forEach((section) => {
    section.hidden = section.id !== nextView;
  });

  if (nextView !== "texts") closeBookReader();
  setActiveLinks(nextView);

  if (updateHash) {
    const nextHash = nextView === "home" ? "#top" : `#${nextView}`;
    if (window.location.hash !== nextHash) {
      history.pushState(null, "", nextHash);
    }
  }

  if (scroll) {
    const target = nextView === "home" ? document.querySelector(".hero") : document.getElementById(nextView);
    target?.scrollIntoView({ block: "start" });
  }
}

function openBookReader() {
  showView("texts", { updateHash: true, scroll: false });
  const reader = document.querySelector(".book-reader");
  reader.hidden = false;
  reader.scrollIntoView({ block: "start", behavior: "smooth" });
}

function renderTimeline(activeTag = "全部") {
  const list = document.querySelector(".timeline-list");
  const events = activeTag === "全部" ? timelineEvents : timelineEvents.filter((event) => event.tags.includes(activeTag));
  list.innerHTML = events.map((event) => `
    <li>
      <div class="timeline-year">${event.year}</div>
      <div>
        <h3>${event.title}</h3>
        <p>${event.desc}</p>
        <div class="tag-row">${event.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    </li>
  `).join("");
}

function renderFilters() {
  const tags = ["全部", ...new Set(timelineEvents.flatMap((event) => event.tags))];
  const filters = document.querySelector(".filters");
  filters.innerHTML = tags.map((tag, index) => `<button class="filter-button" aria-pressed="${index === 0}" data-tag="${tag}">${tag}</button>`).join("");
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    document.querySelectorAll(".filter-button").forEach((item) => item.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    renderTimeline(button.dataset.tag);
  });
}

function renderTextTabs(activeId = "political") {
  const tabs = document.querySelector(".text-tabs");
  const library = document.querySelector(".text-library");
  tabs.innerHTML = textCategories.map((cat) => `<button class="tab-button" role="tab" aria-selected="${cat.id === activeId}" data-id="${cat.id}">${cat.name}</button>`).join("");
  const current = textCategories.find((cat) => cat.id === activeId);
  library.innerHTML = current.items.map((item) => {
    const isBook = item === "《世宗憲皇帝御製文集》";
    const element = isBook ? "button" : "article";
    const attributes = isBook ? ` type="button" data-document="imperial-anthology" aria-label="開啟《世宗憲皇帝御製文集》"` : "";
    return `
    <${element} class="text-card${isBook ? " text-card-button" : ""}"${attributes}>
      <small>${current.name}</small>
      <h3>${item}</h3>
      <p>${current.intro}</p>
      <ul>
        <li>原文</li>
        <li>標點</li>
        <li>注釋</li>
        <li>導讀</li>
      </ul>
    </${element}>
  `;
  }).join("");
}

function renderToneList(activeTone = "all") {
  const list = document.querySelector(".tone-list");
  const items = activeTone === "all" ? tones : tones.filter((item) => item.tone === activeTone);
  list.innerHTML = items.map((item) => `
    <div class="tone-item">
      <strong>${item.tone}</strong>
      <p>${item.text}</p>
      <small>${item.note}</small>
    </div>
  `).join("");
}

function renderPeople() {
  document.querySelector(".people-grid").innerHTML = peopleGroups.map((group) => `
    <article class="people-card">
      <span class="group">${group.group}</span>
      <h3>${group.names.slice(0, 3).join(" · ")} 等</h3>
      <p>${group.hint}</p>
      <ul>${group.names.map((name) => `<li>${name}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderPlace(name = "北京紫禁城") {
  const detail = places[name];
  document.querySelector(".place-detail").innerHTML = `
    <span>${name}</span>
    <h3>${detail.event}</h3>
    <p><b>人物：</b>${detail.people}</p>
    <p><b>文獻：</b>${detail.texts}</p>
  `;
  document.querySelectorAll(".map-point").forEach((point) => point.classList.toggle("active", point.dataset.place === name));
}

function renderGallery() {
  document.querySelector(".image-gallery").innerHTML = gallery.map((item) => `
    <article class="gallery-card">
      <img src="${item.src}" alt="${item.title}" loading="lazy">
      <div>
        <small>${item.type}</small>
        <h3>${item.title}</h3>
        <p>${item.note}</p>
      </div>
    </article>
  `).join("");
}

function renderSearch(query = "") {
  const box = document.querySelector(".search-results");
  const normalized = query.trim().toLowerCase();
  const results = normalized ? searchable.filter((item) => `${item.title} ${item.body}`.toLowerCase().includes(normalized)).slice(0, 8) : searchable.slice(0, 4);
  box.innerHTML = results.length ? results.map((item) => `
    <div class="result-item">
      <strong>${item.title}</strong>
      <span class="tag">${item.type}</span>
      <p>${item.body}</p>
    </div>
  `).join("") : `<p>暫無結果。可試試「正統」「曾靜」「硃批」「佛教」。</p>`;
}

function renderKeywords(active = "正統") {
  document.querySelector(".keyword-buttons").innerHTML = Object.keys(keywords).map((key) => `<button class="${key === active ? "active" : ""}" data-keyword="${key}">${key}</button>`).join("");
  document.querySelector(".keyword-result").innerHTML = keywords[active].map((item) => `<div class="result-item">${item}</div>`).join("");
}

function bindEvents() {
  document.querySelectorAll("[data-view-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showView(link.dataset.viewLink);
    });
  });

  document.querySelector(".text-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    renderTextTabs(button.dataset.id);
    closeBookReader();
  });

  document.querySelector(".text-library").addEventListener("click", (event) => {
    const button = event.target.closest("[data-document='imperial-anthology']");
    if (!button) return;
    openBookReader();
  });

  document.querySelector("[data-close-book]").addEventListener("click", () => {
    closeBookReader();
    document.querySelector(".text-library").scrollIntoView({ block: "start", behavior: "smooth" });
  });

  document.querySelector("#tone-select").addEventListener("change", (event) => {
    renderToneList(event.target.value);
  });

  document.querySelector(".archive-map").addEventListener("click", (event) => {
    const button = event.target.closest(".map-point");
    if (!button) return;
    renderPlace(button.dataset.place);
  });

  document.querySelector("#site-search").addEventListener("input", (event) => {
    renderSearch(event.target.value);
  });

  document.querySelector(".keyword-buttons").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    renderKeywords(button.dataset.keyword);
  });

  window.addEventListener("hashchange", () => {
    showView(getViewFromHash(), { updateHash: false, scroll: true });
  });
}

renderFilters();
renderTimeline();
renderTextTabs();
renderToneList();
renderPeople();
renderPlace();
renderGallery();
renderSearch();
renderKeywords();
bindEvents();
showView(getViewFromHash(), { updateHash: false, scroll: false });

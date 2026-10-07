/* Renders a round hub page (dsa.html, lld.html, ...) from data.js. The hub key comes from <body data-hub="...">. */
const HUBS = {
  dsa: {
    title: "DSA", kind: "Round guide", rounds: ["dsa"],
    lede: "Data structures and algorithms rounds still appear in almost every loop. Here is how they run in 2025–26, the patterns to learn in order, the problems people reported, and how to tell you're ready.",
    format: [
      "Most companies start with an online assessment: 2–3 problems in 60–90 minutes on HackerRank, CodeSignal or Codility (Amazon, Uber, Microsoft, Salesforce, Razorpay, Paytm).",
      "Then 1–2 live rounds of 45–60 minutes, usually two mediums or a medium with a harder follow-up. Google runs two back-to-back in-person DSA rounds for L4.",
      "Indian product companies often have a single DSA round alongside machine coding.",
      "Follow-ups change one constraint: streaming input, a circular array, O(1) extra space, or thread safety."
    ],
    graded: ["Recognising the pattern within about 5 minutes", "Explaining the approach before coding", "Clean code that compiles and runs", "Stating and justifying time and space complexity", "Testing edge cases by hand"],
    ready: ["Name the pattern for an unseen medium within 5 minutes", "Solve a medium in 25 minutes while talking through it", "Write BFS, union-find, binary search on the answer and a monotonic stack from memory", "Give time and space complexity without hesitating", "Handle a follow-up that changes one constraint"]
  },
  lld: {
    title: "LLD / machine coding", kind: "Round guide", rounds: ["lld"],
    lede: "Machine coding decides most offers at Indian product companies. You build a working in-memory system in 90–120 minutes, then defend it in a code review.",
    format: [
      "90–120 minutes to build a working in-memory system such as a booking service, rate limiter, scheduler or Splitwise, often after a 30-minute briefing (Flipkart, PhonePe, Swiggy, Groww, Navi, Meesho).",
      "A code-review viva on your own code follows: OOP, design patterns, concurrency and how a new requirement would fit.",
      "PhonePe sometimes sends it as a take-home, then adds features live on a call.",
      "2026 variant: agentic machine coding with an AI assistant (Razorpay, Flipkart, Slice, Nykaa), graded on your plan, prompts, diffs and tests.",
      "Big Tech runs a shorter LLD or code-design round of 45–60 minutes: classes plus a few working methods (Amazon, Microsoft, Atlassian with JUnit)."
    ],
    graded: ["Code that runs the demo flow end to end", "Clear separation of models, services and strategies", "Thread safety wherever state is shared", "Extensibility: a new requirement fits without a rewrite", "Tests or a driver that proves it works"],
    ready: ["Finish a booking system with concurrency in 90 minutes", "Explain why you chose each pattern", "Make shared state thread-safe and name the race you prevented", "Add a new requirement in 15 minutes without breaking tests", "Defend your design in a code-review viva"]
  },
  hld: {
    title: "System design", kind: "Round guide", rounds: ["hld"],
    lede: "System design separates SDE-2 from Senior. A weak round here is the most common reason people get downleveled.",
    format: [
      "45–90 minutes on one open-ended problem; Dream11 ran 2 hours 15 minutes. Usually one round, sometimes two for Senior.",
      "Some companies outsource it (Zepto; BarRaiser at Swiggy and Kotak).",
      "The hiring manager round often turns into a design deep-dive on your own project.",
      "Weak HLD is the main cause of downleveling: Amazon SDE2→SDE1, Atlassian P50→P40, JPMC VP→SE3."
    ],
    graded: ["Clarifying scope and numbers before drawing", "A clear API and data model", "A working end-to-end architecture", "Depth on the hardest 2–3 parts", "Raising trade-offs, failure handling and scaling without being asked"],
    ready: ["Run the full framework in 45 minutes", "Do capacity estimates without a calculator", "Justify idempotency, sharding and caching choices for any prompt", "Answer 'what breaks at 10×' for your own design", "Draw your own production system and scale it 100×"]
  },
  ai: {
    title: "AI engineering", kind: "Track guide", rounds: ["ai", "aicode"],
    lede: "AI engineering roles test backend depth plus RAG, agents, evals and production LLM concerns. AI-assisted coding rounds are now common even in regular SDE loops.",
    format: [
      "AI system design: RAG over internal documents, a multi-tenant chat platform or an agent runtime (Teradata, Adobe, Tekion, Microsoft).",
      "GenAI deep dive: 30 minutes or more on RAG, chunking, evals, MCP and agents (Mastercard, EPAM, Avaamo).",
      "AI-assisted coding: build or extend a feature with an AI agent in 60–90 minutes (Flipkart, Razorpay, LinkedIn, Postman).",
      "'How do you use and validate AI tools?' is now asked at Amazon, Microsoft, Salesforce, Oracle, Uber and CRED.",
      "DSA still appears in almost every loop, except research labs such as Sarvam."
    ],
    graded: ["A design covering ingestion, retrieval, generation, evals and cost", "Knowing how RAG fails and how you'd measure it", "Production thinking: latency, cost per request, caching, failover, guardrails", "Precise prompting and careful diff review in AI-assisted rounds"],
    ready: ["Design enterprise document Q&A in 45 minutes, evals included", "Explain attention, embeddings and temperature simply", "Debug 'right document, wrong answer' step by step", "Show a shipped capstone with eval results and cost per query", "Build a small feature with an AI agent while keeping tests green"]
  },
  backend: {
    title: "Java & backend", kind: "Round guide", rounds: ["java"],
    lede: "Java, Spring, databases and Kafka questions show up as rapid-fire inside other rounds, and as dedicated rounds at some companies. Interviewers want internals and production stories.",
    format: [
      "At Big Tech it's rarely a separate round; questions come up inside DSA, LLD and hiring-manager rounds.",
      "Some companies run a dedicated round: Dream11 (databases), Paytm and Swiggy (Java and Spring), Goldman Sachs (engineering practices).",
      "Walmart and Booking.com include a Spring Boot task in the online assessment; PayPal's hiring manager had a candidate build Spring Boot endpoints live.",
      "Expect questions about your own incidents: a deadlock you hit, Kafka lag you fixed, a 504 you debugged."
    ],
    graded: ["Internals, not just API usage", "Real production debugging stories", "Correct reasoning about concurrency", "Trade-offs: isolation levels, delivery guarantees, locking strategies"],
    ready: ["Explain HashMap and ConcurrentHashMap internals", "Write a thread-safe class and point out its happens-before edges", "Choose an isolation level and locking strategy for seat booking", "Fix Kafka consumer lag and explain the delivery guarantees", "Explain @Transactional pitfalls with an example"]
  },
  career: {
    title: "Career", kind: "Track guide", rounds: ["beh"],
    lede: "The hiring-manager round, behavioural questions and the offer negotiation decide your level and your pay as much as the technical rounds do.",
    format: [
      "Hiring manager round: a deep-dive on your project plus behavioural questions. It was a frequent rejection point at Blinkit, CRED, Slice and Freshworks.",
      "Amazon asks Leadership Principle questions in every round; Google has a separate Googlyness round; Atlassian has a values round.",
      "Recruiter screens ask for your current CTC, expected CTC and notice period.",
      "Offers combine base pay, bonus, joining and retention bonuses, and ESOPs or RSUs with a vesting schedule."
    ],
    graded: ["Your own contribution, kept separate from the team's", "The reason behind each technical decision", "Ownership, handling conflict, learning from failure", "Clear, quantified results"],
    ready: ["Tell 6 STAR stories in under 3 minutes each", "Whiteboard your system in 10 minutes, then scale it", "Answer the CTC question without anchoring low", "Compare offers on base pay and vesting schedule", "Explain how you use and validate AI tools"]
  }
};

const key = document.body.dataset.hub, H = HUBS[key];
let st = loadState();
let readyState = {};
try { readyState = JSON.parse(localStorage.getItem("ssp-ready") || "{}"); } catch (e) {}

// Pages in this hub, ordered by the week they first appear in the plan; unplanned pages go last.
const firstWeek = {};
WEEKS.forEach((w, wi) => w.items.forEach(it => { if (it.g && firstWeek[it.g] === undefined) firstWeek[it.g] = wi + 1; }));
const hubPages = Object.keys(PAGES).filter(s => HUB_OF(s) === key)
  .sort((a, b) => (firstWeek[a] || 99) - (firstWeek[b] || 99));
const planItemsFor = slug => WEEKS.flatMap(w => w.items.filter(it => it.g === slug));

const qs = QUESTIONS.filter(q => H.rounds.includes(q.r)).sort((a, b) => b.n - a.n);

// Companies named in this round's reports, counted once per question.
const counts = {};
qs.forEach(q => q.c.split("—")[0].split(",").forEach(raw => {
  const name = raw.replace(/\(.*?\)/g, "").replace(/\b(OA|SDE-?\d|SSE|Lead|AI Engineer|L\d)\b/g, "").trim();
  if (name && name.length < 26 && !/common|reports|frequent/i.test(name)) counts[name] = (counts[name] || 0) + 1;
}));
const topCos = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 12);

// Practice links gathered from the plan items that point at this hub's pages.
const practice = hubPages.map(s => [s, [...new Set(planItemsFor(s).flatMap(it => (it.p || []).filter(p => typeof p === "string")))]]).filter(([, ps]) => ps.length);

const sections = [
  ["format", "How the round works"],
  ["path", "Study path"],
  ["asked", "Most asked in recent interviews"],
  ...(practice.length ? [["practice", "Practice problems"]] : []),
  ["companies", "Who tests this most"],
  ["ready", "You're ready when you can…"]
];
const num = id => String(sections.findIndex(s => s[0] === id) + 1).padStart(2, "0");
const h2 = id => `<h2 id="${id}"><span class="n">${num(id)}</span>${esc(sections.find(s => s[0] === id)[1])}</h2>`;

function render() {
  const practisedCount = qs.filter(q => st.practiced[q.id]).length;
  const doneItems = hubPages.flatMap(planItemsFor), doneCount = doneItems.filter(it => st.done[it.id]).length;
  document.getElementById("hub").innerHTML = `
    <div class="crumb"><a href="index.html">← Senior Switch Playbook</a><span>/</span><span class="kind">${esc(H.kind)}</span></div>
    <h1>${esc(H.title)}</h1>
    <p class="lede">${esc(H.lede)}</p>
    <div class="facts">
      <span class="fact"><b>${hubPages.length}</b> lessons and guides</span>
      <span class="fact"><b>${qs.length}</b> reported questions</span>
      <span class="fact"><b>${practisedCount}/${qs.length}</b> practised</span>
      ${doneItems.length ? `<span class="fact"><b>${doneCount}/${doneItems.length}</b> plan tasks done</span>` : ""}
    </div>
    <nav class="toc"><b>On this page</b><ol>${sections.map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join("")}</ol></nav>

    ${h2("format")}
    <ul>${H.format.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
    <div class="callout info"><b>What the interviewer is grading</b><ul>${H.graded.map(g => `<li>${esc(g)}</li>`).join("")}</ul></div>

    ${h2("path")}
    <p>Work through these in order. The week shows where each one sits in the 12-week plan.</p>
    <div class="pathlist">${hubPages.map((s, i) => {
      const items = planItemsFor(s), wk = firstWeek[s];
      const done = items.length && items.every(it => st.done[it.id]);
      const study = items.flatMap(it => it.s || []).slice(0, 3);
      return `<a class="pcard ${done ? "done" : ""}" href="guides/${s}.html">
        <span class="pnum">${i + 1}</span>
        <span class="pbody"><b>${esc(PAGES[s][0])}</b>
          <small>${wk ? "Week " + wk : "Extra practice"}${done ? " · done" : ""}</small>
          ${study.length ? `<span class="pstudy">${study.map(esc).join(" · ")}</span>` : ""}</span>
      </a>`;
    }).join("")}</div>

    ${h2("asked")}
    <p>From interview reports posted between late 2024 and October 2026. Tick a question once you can answer it well; this syncs with the question bank on the home page in the same browser.</p>
    <div class="qlist">${qs.map(q => `
      <div class="qrow ${st.practiced[q.id] ? "done" : ""}">
        <input type="checkbox" data-q="${q.id}" aria-label="Mark practised" ${st.practiced[q.id] ? "checked" : ""}>
        <div class="qbody">
          <div class="qtext">${esc(q.q)}</div>
          <div class="qmeta"><span class="chip ${q.n >= 5 ? "hot" : ""}">seen ${q.n}×</span><span>${esc(q.c)}</span></div>
          <div class="qmeta">${q.g ? `<a href="guides/${q.g}.html">Study: ${esc(PAGES[q.g][0])} →</a>` : ""}${q.s.length ? `<span class="mono">${srcLinks(q.s)}</span>` : ""}</div>
        </div>
      </div>`).join("")}</div>

    ${practice.length ? `${h2("practice")}
    ${practice.map(([s, ps]) => `<h3>${esc(PAGES[s][0])} <a class="small" href="guides/${s}.html">lesson →</a></h3><div class="plinks">${ps.map(plink).join("")}</div>`).join("")}` : ""}

    ${h2("companies")}
    <p>How many of this round's reported questions each company appears in.</p>
    <div class="bars">${topCos.map(([n, c]) => `<div class="bar"><span class="bname">${esc(n)}</span><span class="btrack"><i style="width:${Math.round(100 * c / topCos[0][1])}%"></i></span><span class="bval">${c}</span></div>`).join("")}</div>

    ${h2("ready")}
    <div class="readylist">${H.ready.map((r, i) => {
      const id = key + i;
      return `<label class="ready"><input type="checkbox" data-ready="${id}" ${readyState[id] ? "checked" : ""}> <span>${esc(r)}</span></label>`;
    }).join("")}</div>

    <div class="foot"><a href="index.html">← Back to the playbook</a><span>${HUB_NAV.filter(([k]) => k !== key).map(([k, t]) => `<a href="${k}.html">${esc(t)}</a>`).join(" · ")}</span></div>`;
}

document.getElementById("hub").addEventListener("change", e => {
  const q = e.target.dataset.q, r = e.target.dataset.ready;
  if (q) { if (e.target.checked) st.practiced[q] = 1; else delete st.practiced[q]; saveLocal(st); render(); }
  if (r) { readyState[r] = e.target.checked; try { localStorage.setItem("ssp-ready", JSON.stringify(readyState)); } catch (err) {} }
});
render();

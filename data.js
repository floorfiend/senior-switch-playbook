/* Shared data for Senior Switch Playbook: plan, questions, companies, page catalog. */
const LC = id => `https://leetcode.com/discuss/post/${id}/`;
const href = s => typeof s === "number" ? LC(s) : s;
const lbl = s => typeof s === "number" ? "LC " + s : (s.includes("roundz") ? "Roundz" : s.includes("jointaro") ? "Taro" : s.includes("teamblind") ? "Blind" : s.includes("github") ? "GitHub" : "link");

const ROUNDS = {
  dsa: "DSA", lld: "Machine coding / LLD", hld: "System design", java: "Java · Spring · backend",
  ai: "AI engineering", aicode: "AI-assisted coding", beh: "Hiring manager / behavioral"
};

// q: question, c: companies, n: approx. times seen across reports, s: sources
const QUESTIONS = [
  // DSA
  ["dsa","Binary search on the answer: Koko Eating Bananas / Capacity to Ship Packages / Book Allocation / Painter's Partition","Amazon, Flipkart, InMobi, Angel One, Paytm, Dream11, Agoda, Nutanix",8,[8535545,6302451,8292628]],
  ["dsa","LRU cache → LFU → LRU with TTL (thread-safe follow-up)","Microsoft, Confluent, Walmart, Goldman Sachs, Freshworks, Atlassian, Tekion, Razorpay OA",9,[6974811,7107261,6889780]],
  ["dsa","Graph BFS/DFS: Number of Islands (+II with DSU), Rotting Oranges, Keys and Rooms, Detonate the Maximum Bombs","Walmart, Uber, Paytm, CoinDCX, PhonePe, Kotak",8,[8310700,8533282,8098742]],
  ["dsa","Sliding Window Maximum (monotonic deque)","Uber, PhonePe, Booking.com, Amazon, Twilio, Flipkart",6,[6229138,7133934]],
  ["dsa","Merge Intervals / Meeting Rooms II–III / My Calendar / Car Pooling (difference array)","Amazon, Walmart, Google, Uber, Freshworks, Adobe",7,[8315111,7225569]],
  ["dsa","Median from Data Stream (two heaps)","Amazon, Uber, Walmart, Intuit",5,[8522985]],
  ["dsa","Course Schedule I/II, topological sort with cycles and disconnected parts","Flipkart, Amazon, LinkedIn, Okta, Dream11, Groww",6,[7240231,6683943]],
  ["dsa","Monotonic stack: Largest Rectangle in Histogram, Next Greater Element","Tekion, Amazon, Kotak, Goldman Sachs, ServiceNow",5,[8533315,8525726]],
  ["dsa","Max Consecutive Ones III (LC 1004) + circular follow-up","Groww, Paytm, LinkedIn",3,[7046387,8475477]],
  ["dsa","Longest Subarray with Absolute Diff ≤ Limit (LC 1438)","Uber, Oracle",3,[8476675]],
  ["dsa","Minimum Window Substring","LinkedIn, Goldman Sachs, Salesforce, Teradata",4,[7704844]],
  ["dsa","Maximum Profit in Job Scheduling (LC 1235)","Google, Salesforce",3,[8525084]],
  ["dsa","Dijkstra / multi-source BFS + binary search (Find the Safest Path in a Grid, Cheapest Flights within K Stops)","Google, Amazon, Goldman Sachs, Atlassian",6,[8522064,8499681]],
  ["dsa","Insert Delete GetRandom O(1)","Blinkit, Amazon, Goldman Sachs",3,[8359730]],
  ["dsa","DP set: House Robber I/II/IV, Coin Change, Decode Ways, Palindrome Partitioning II","PhonePe, Amazon, Walmart, Zeta, Kotak, Angel One, Flipkart",9,[8533282,8525726,7384474]],
  ["dsa","Container With Most Water → Trapping Rain Water","Flipkart, Amazon, eBay, ServiceNow, Razorpay OA",5,[6229138]],
  ["dsa","Trees: LCA, All Nodes Distance K, Binary Tree Max Path Sum, zigzag level order","Swiggy, ShareChat, Microsoft, Goldman Sachs, Walmart",8,[6421018,7770532]],
  ["dsa","Longest Consecutive Sequence","Amazon, Media.net, Walmart",3,[7526792]],
  ["dsa","Task Scheduler / Reorganize String / Rearrange String k Distance Apart","Sprinklr, Teradata, Groww, Amazon, DE Shaw",5,[6846218,7046387]],
  ["dsa","Find Minimum in Rotated Sorted Array","Swiggy",2,[7069404]],
  ["dsa","Evaluate Division (LC 399) and union-find for connected components","InMobi, Cohesity, Google",3,[7422653]],
  // LLD / machine coding
  ["lld","Booking with no double-booking under concurrency: meeting rooms, movies, trains (waitlist), flights (seat lock), hotels, fitness slots","Flipkart, Swiggy, InMobi, CRED, Udaan, Postman, Salesforce, Expedia",15,[6168500,7422653,7103567,8353903]],
  ["lld","Rate limiter: token bucket + sliding window, per-client, algorithm swappable (Strategy), thread-safe","Razorpay, Media.net, Swiggy, Atlassian, Apple, Salesforce, Microsoft",12,[8382736,7526792,7069404]],
  ["lld","Splitwise: equal/exact/percent splits, user balances, simplify debts","Swiggy, Groww, Navi, Walmart, Salesforce, Uber, Rippling",7,[7046387,8549192]],
  ["lld","In-process job scheduler: priorities, dependencies, leases/visibility timeout, retry with backoff, DLQ, state machine","Razorpay, Media.net, Uber, Walmart, Rubrik, Kotak",6,[8382736,7346375]],
  ["lld","Notification service: Email/SMS/Push, multiple providers per channel, failover, URGENT goes to all","PhonePe, Amazon, Microsoft, Jupiter, Adobe",6,[6592633,8317558]],
  ["lld","Wallet / Buy-Now-Pay-Later: credit, debit, transfer, credit limit, dues, blacklist after defaults","Slice, Flipkart",4,[8501747,6229138]],
  ["lld","Cache library with pluggable eviction (LRU/LFU/FIFO) and TTL; race conditions on expiry","Groww, Tekion, Microsoft",4,[6683943,8533315]],
  ["lld","Parking lot (multi-level, vehicle types, pricing strategies)","Swiggy, Cashfree, Angel One, Uber, PayPal, Amazon",6,[7383296,7316892]],
  ["lld","In-memory message queue: topics, partitions, consumer groups, ordering within a partition, thread-safe","Flipkart SDE-3",1,[7240231]],
  ["lld","Stock exchange order book with price-time priority matching","Meesho SDE-3",1,[7496727]],
  ["lld","In-memory SQL database: tables, CRUD, indexes, transactions, concurrency","Razorpay (reported as frequent)",1,[6967775]],
  ["lld","Git-like version control: commit, branch, rollback","Razorpay SSE",1,[6229095]],
  ["lld","App version rollout manager: upload, patches, beta and percentage rollouts, checkForUpdates","PhonePe",1,[7211822]],
  ["lld","Circuit breaker with CLOSED / OPEN / HALF-OPEN states","Uber",2,[8476675]],
  ["lld","File system / file search with AND/OR filters (Specification + Composite patterns)","Amazon, Uber, Rubrik",5,[8522985]],
  ["lld","Bounded blocking queue → your own thread pool with submit, shutdown, shutdownNow","Rubrik, LinkedIn, Goldman Sachs",4,[7629615]],
  ["lld","Google Calendar with recurring meetings, reminders and free-slot search","Cashfree, Media.net, Zepto, Eightfold",4,[7157080,7353272]],
  ["lld","Flash-sale inventory (Instamart): reservations, race conditions, inventory locks","Swiggy, Walmart, Amazon",3,[8314817]],
  ["lld","Build Spring Boot REST endpoints live, with validation, exception handling, idempotency and correct status codes","PayPal, Booking.com OA, Walmart OA, Postman",4,[7133934,8353903]],
  // HLD
  ["hld","Distributed rate limiter: Redis + Lua, fail-open vs fail-closed, multi-region","Amazon, Salesforce, Oracle, Apple, Microsoft, Agoda",7,[]],
  ["hld","Booking platform (BookMyShow / hotel / flights / Airbnb): double booking, payment succeeds but booking fails, idempotency","PhonePe, Slice, Expedia, Agoda, FanCode, Walmart",8,[8533282,8543221]],
  ["hld","Feed (Instagram / Quora / ShareChat): fan-out on write vs read, celebrity problem, cursor pagination","Flipkart, PhonePe, ShareChat, Goldman Sachs, Intuit",6,[6229138,6592633]],
  ["hld","Notification system for a payments platform: priority, multi-channel, retries, deduplication","Razorpay, Postman, Microsoft, Salesforce, Visa, Adobe",6,[6352264,8353903]],
  ["hld","Distributed job scheduler: at-least-once delivery, DLQ, retries, sharding the scheduler","Razorpay, InMobi, Postman, Goldman Sachs",5,[7360702,7422653]],
  ["hld","Stock price change alert system","Uber (5 separate reports)",5,[8476675]],
  ["hld","Chat / messaging (WhatsApp, Teams, ChatGPT-style): ordering, sequence numbers vs timestamps, presence","Uber, Microsoft, Amazon, Freshworks, Goldman Sachs",6,[]],
  ["hld","Top-K / trending over 5 min, 1 h and 24 h windows with limited memory","LinkedIn, eBay, Oracle, Uber, Amazon",6,[8475477]],
  ["hld","Quick commerce / food delivery: inventory, ETA, restaurant goes offline mid-order","Flipkart, Swiggy, Tekion, Amazon, Paytm",5,[7240231,8533315]],
  ["hld","Payment service: partner-bank failures, Kafka, retries, reconciliation","Angel One, Paytm, Razorpay",3,[8535545]],
  ["hld","Google Docs collaborative editing (OT vs CRDT) with access control","Microsoft, Amazon, Razorpay",4,[7360702]],
  ["hld","Monitoring system like Prometheus/Grafana: time-series storage, pull vs push, sharding","Dream11, Uber, Amazon",3,[6583413]],
  ["hld","Stock order system (buy, sell, stop-loss) with a 10 ms SLA","Groww, Upstox",2,[6683943]],
  ["hld","Large video/file upload (YouTube, 100 GB file): chunking, resumable uploads, presigned URLs, CDN","Amazon, Oracle, Apple, Cohesity",5,[]],
  ["hld","URL shortener with 3–5 year retention","Razorpay, Goldman Sachs, Oracle, Adobe",4,[6229095]],
  ["hld","Web crawler / news aggregator with checkpointing","Freshworks, Atlassian, PayPal, Rippling",4,[7225569]],
  ["hld","Tagging service shared across products (Jira/Confluence/Bitbucket)","Atlassian (asked 3 times)",3,["https://roundz.substack.com/p/interview-experience-180-atlassian-sde2"]],
  ["hld","Redesign your current project for 100× scale","Visa, Adobe, Uniphore",3,[8286961]],
  // Java / backend
  ["java","@Transactional: proxy-based AOP, why self-invocation skips it, propagation, rollback rules for checked exceptions","Common in Java rounds (Paytm, Swiggy, Apple)",4,[7179026]],
  ["java","Constructor vs field injection, the IoC container, fixing circular dependencies, what auto-configuration does","Swiggy, Apple, Truemeds",4,[6836296]],
  ["java","HashMap internals and resizing, the equals/hashCode contract, ConcurrentHashMap","Walmart, JPMC, Intuit, LinkedIn, Apple",6,[8462953]],
  ["java","volatile vs synchronized, double-checked-locking Singleton, the Java memory model","Media.net, Nykaa, Goldman Sachs, Walmart, Microsoft",6,[7555944,7773726]],
  ["java","Two threads printing odd/even in order; allow at most 2 threads to run at once","Goldman Sachs, CleverTap",2,[7239858,7164795]],
  ["java","Kinds of locks in Java; a deadlock you hit in production and how you found it","Freshworks, Walmart, Rubrik",3,[7107261]],
  ["java","CompletableFuture composition (implement one yourself at L5); Java 21 virtual threads","Google L5, Apple",2,[8323418]],
  ["java","Kafka: raising consumer throughput, consumer lag, partitions vs ordering, retries/DLQ, duplicates","Zomato, CleverTap, Incred, Apple, Goldman Sachs",6,[7573378,7164795]],
  ["java","Redis: why it's fast while single-threaded, how to scale it, Redis vs RabbitMQ as a queue","Zomato, BrowserStack, Apple",3,[7573378]],
  ["java","Isolation levels, row locks, optimistic vs pessimistic locking (seat booking)","Dream11, InMobi, Walmart",4,[6583413,7422653]],
  ["java","SQL: latest state per order in the last hour excluding delivered orders, and which indexes you'd add","Zomato",1,[7573378]],
  ["java","B-tree index vs LSM tree / SSTables; when each wins","Freshworks, CRED",2,[7463243]],
  ["java","Saga vs 2PC, outbox pattern, CQRS, circuit breaker, distributed tracing","Visa, Flipkart, Apple, Zepto",5,[8286961]],
  ["java","Idempotency keys for payments and orders; avoiding double charges","Kotak, PhonePe",3,[8525726]],
  ["java","CAP in practice: network partition, strong vs eventual consistency, picking CP or AP","Kotak, JPMC",2,[8525726]],
  ["java","Sharding vs partitioning, choosing a shard key, the celebrity problem","Freshworks, Sprinklr, JPMC",3,[7225569]],
  ["java","Debugging: a 504 in production, a service that's slow at low traffic, memory leaks and heap dumps","Freshworks, Apple",2,[7225569]],
  ["java","Immutable class holding a mutable field (deep copy); Streams groupingBy and comparators","JPMC, Paytm",3,[8462953,7179026]],
  // AI
  ["ai","Design RAG over a company's internal data with access control, then scale each component and discuss trade-offs","Teradata (twice), Adobe, Equinix",4,[8559932,7704844]],
  ["ai","Chunking strategies and how chunk size and overlap affect retrieval","Avaamo, Adobe, Mastercard",3,[6879712,8317558]],
  ["ai","Bi-encoder vs cross-encoder; where reranking fits; hybrid BM25 + dense search","Avaamo",2,[6879712]],
  ["ai","Evaluating RAG in production: recall@k, MRR, faithfulness, LLM-as-judge, golden datasets","EPAM, Adobe, Tekion, Google",4,[7876633,8317558,7936329]],
  ["ai","Hallucination even though the right document was retrieved; questions that need 5 documents (multi-hop, Graph RAG)","Adobe, EPAM",2,[8317558,7876633]],
  ["ai","MCP architecture: host, client, server; tools vs resources","Mastercard",1,[8539984]],
  ["ai","Agent vs chain; preventing infinite loops; human-in-the-loop approval","Adobe, EPAM, Deloitte",3,[8317558,7876633]],
  ["ai","Cutting LLM cost and latency: semantic caching, smaller rerankers, HNSW tuning; LLM observability","Microsoft, Avaamo, Adobe",3,[7494384,6879712]],
  ["ai","Design a multi-tenant ChatGPT-style platform: streaming, conversation history, search, tenant isolation","Tekion",1,[8542635]],
  ["ai","Design a durable agent runtime: long-running tool calls, human approval mid-run, sandboxing, crash recovery","Tekion",1,[8542635]],
  ["ai","Explain attention, and why it matters for your RAG design","LinkedIn, Adobe, CRED",3,[7421217,8317558]],
  ["ai","Temperature, top-k, top-p; RAG vs fine-tuning; what LoRA does","Avaamo, Amazon, Mastercard",3,[6879712,8539984]],
  ["ai","pgvector vs Pinecone vs Qdrant; how HNSW works","Adobe, Avaamo",2,[8317558]],
  ["ai","Multi-provider LLM router with circuit breaker: shift traffic when error rate > 5%","Emergent Labs",1,[7923477]],
  // AI-assisted coding
  ["aicode","Agentic machine coding (90 min): write a PLAN.md, commit in steps, keep tests green, handle a new requirement at minute 70","Razorpay, Flipkart AI Engineer",3,[8349883,8355108,8382736]],
  ["aicode","Fix failing tests in an unfamiliar controller/service/repository codebase using an AI helper","Amazon OA (2026)",2,[8522985]],
  ["aicode","Build an LRU cache with an AI assistant, then keep extending it as the interviewer adds features","LinkedIn",1,[7421217]],
  ["aicode","CLI over multiple LLM providers with token tracking (Strategy pattern)","Postman",1,[8534724]],
  ["aicode","24-hour working prototype with a database, Redis and Kafka, AI allowed","CRED",1,[7463243]],
  // Behavioral
  ["beh","Deep-dive one project: what you did versus your team, why each technology, what you'd change","Blinkit, Swiggy, Slice, CRED, Freshworks — a frequent rejection point",6,[8359730,7463243]],
  ["beh","How do you use AI tools day to day, and how do you validate AI-generated code?","Amazon, CRED, Microsoft, Salesforce, Oracle, Uber, Apple, Intuit",8,[7463243,8522985]],
  ["beh","Disagreement with a senior or your manager where you turned out to be right","Amazon, Google, InMobi",4,[7422653]],
  ["beh","Critical feedback you gave or received","Google, Uber, Amazon",4,[8525084]],
  ["beh","Tight deadline: did you compromise quality? What did you cut, and why?","Amazon, Microsoft, PhonePe",3,[]],
  ["beh","A production incident you owned end to end","Uber, Freshworks",3,[7225569]],
  ["beh","What do you check in a code review? How have you mentored someone who was behind?","Zeta, Microsoft",3,[7384474]],
  ["beh","An ambiguous project with no clear requirements","Kotak",2,[8525726]]
].map(([r,q,c,n,s],i)=>({id:"q"+i,r,q,c,n,s}));

// Plan items: t = task, s = what to study, p = [label, url] practice/reading links ("lc:slug" = LeetCode problem, "lc:slug*" = Premium)
const L = {
  lld: ["LLD practice repo (problems + Java solutions)", "https://github.com/ashishps1/awesome-low-level-design"],
  primer: ["System Design Primer", "https://github.com/donnemartin/system-design-primer"],
  jcc: ["Oracle Java concurrency tutorial", "https://docs.oracle.com/javase/tutorial/essential/concurrency/"],
  chm: ["ConcurrentHashMap Javadoc (Java 21)", "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"],
  pgiso: ["PostgreSQL: transaction isolation", "https://www.postgresql.org/docs/current/transaction-iso.html"],
  pgexplain: ["PostgreSQL: using EXPLAIN", "https://www.postgresql.org/docs/current/using-explain.html"],
  kafka: ["Apache Kafka documentation", "https://kafka.apache.org/documentation/"],
  saga: ["microservices.io: Saga", "https://microservices.io/patterns/data/saga.html"],
  outbox: ["microservices.io: Transactional outbox", "https://microservices.io/patterns/data/transactional-outbox.html"],
  r4j: ["Resilience4j docs", "https://resilience4j.readme.io/"],
  springtx: ["Spring: transaction management", "https://docs.spring.io/spring-framework/reference/data-access/transaction.html"],
  springai: ["Spring AI reference", "https://docs.spring.io/spring-ai/reference/"],
  anthropic: ["Anthropic courses (GitHub)", "https://github.com/anthropics/courses"],
  adocs: ["Claude API docs", "https://docs.anthropic.com/"],
  py: ["Python tutorial", "https://docs.python.org/3/tutorial/"],
  fastapi: ["FastAPI tutorial", "https://fastapi.tiangolo.com/tutorial/"],
  hfllm: ["Hugging Face LLM course", "https://huggingface.co/learn/llm-course"],
  hfagents: ["Hugging Face Agents course", "https://huggingface.co/learn/agents-course"],
  dlai: ["DeepLearning.AI short courses", "https://www.deeplearning.ai/short-courses/"],
  ctx: ["Anthropic: Contextual Retrieval", "https://www.anthropic.com/news/contextual-retrieval"],
  pgvector: ["pgvector (GitHub)", "https://github.com/pgvector/pgvector"],
  agents: ["Anthropic: Building effective agents", "https://www.anthropic.com/engineering/building-effective-agents"],
  mcp: ["Model Context Protocol docs", "https://modelcontextprotocol.io/"],
  zoomcamp: ["LLM Zoomcamp", "https://github.com/DataTalksClub/llm-zoomcamp"],
  evals: ["Hamel Husain: Your AI product needs evals", "https://hamel.dev/blog/posts/evals/"],
  ragas: ["Ragas docs", "https://docs.ragas.io/"],
  cc: ["Claude Code docs", "https://docs.anthropic.com/en/docs/claude-code/overview"],
  aiq: ["AI engineering interview questions", "https://github.com/amitshekhariitbhu/ai-engineering-interview-questions"]
};

// Lesson or guide page for each plan item, in order: interview-prep items, then AI items
const G = [
  ["dsa-mixed-set","dsa-sliding-window","java-collections-internals","career-resume","learn-python-for-java-devs","learn-prompt-engineering","learn-first-llm-calls"],
  ["dsa-binary-search-on-answer","dsa-graphs","java-concurrency","lld-rate-limiter","learn-llm-fundamentals","learn-tool-use"],
  ["dsa-heaps-intervals","lld-booking-system","db-isolation-locking-indexes","learn-rag-fundamentals","learn-pgvector"],
  ["dsa-monotonic-stack","dsa-dynamic-programming","lld-job-scheduler","lld-splitwise","learn-better-retrieval","learn-spring-rag-endpoint"],
  ["hld-toolkit","hld-distributed-rate-limiter","hld-notification-system","kafka-deep-dive","learn-agents","learn-agents"],
  ["hld-booking-platform","hld-news-feed","distributed-transactions","learn-mcp","learn-spring-ai-tools"],
  ["lld-message-queue","lld-cache-library","dsa-mixed-set","learn-evals","learn-evals"],
  ["hld-stock-price-alerts","hld-top-k-trending","career-star-stories","learn-production-ai","learn-capstone"],
  ["career-applying-referrals","career-whiteboard-your-system","career-ai-assisted-round","ai-multi-tenant-chat-platform","learn-capstone"],
  ["hld-payment-service","hld-chat-messaging","spring-rapid-fire","ai-durable-agent-runtime","learn-ai-interview-drills"],
  ["career-mock-interviews","career-mock-interviews","ai-rag-enterprise-qa","learn-capstone"],
  ["career-negotiation","career-negotiation","career-negotiation","career-star-stories"]
];

const WEEKS = [
  {t:"Foundations and a baseline", prep:[
    {t:"Baseline mock: 2 mediums in 60 minutes", s:["Timebox 30 min per problem and talk through your thinking out loud.","Write down any pattern you couldn't spot within 5 minutes. That list becomes your weak areas."],
     p:["lc:product-of-array-except-self","lc:longest-consecutive-sequence"]},
    {t:"Sliding window and two pointers", s:["Fixed vs variable windows: grow the right edge, shrink the left while the window is invalid.","Monotonic deque for window max/min in O(n).","Counting map for 'at most K' problems. Exactly K = atMost(K) − atMost(K−1)."],
     p:["lc:longest-substring-without-repeating-characters","lc:max-consecutive-ones-iii","lc:minimum-window-substring","lc:sliding-window-maximum","lc:longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit","lc:container-with-most-water","lc:trapping-rain-water"]},
    {t:"Java collections internals", s:["HashMap: bucket array, hash spreading, buckets turn into trees at 8 entries, resize at load factor 0.75.","The equals/hashCode contract, and the bug you get with mutable keys.","ConcurrentHashMap: CAS plus per-bin locking (Java 8+), no null keys, compute/merge are atomic.","LinkedHashMap in access order is a ready-made LRU cache."],
     p:["lc:design-hashmap", L.chm]},
    {t:"Rewrite your resume", s:["One bullet per service you own: what it does, its scale (RPS, tenants, data volume) and the decisions you made.","Add numbers: latency cut, cost saved, incidents reduced.","Keep it to one page. Add the AI project as its own line once it's built."], p:[]}
  ], ai:[
    {t:"Python for a Java engineer", s:["Type hints, dataclasses and Pydantic models.","async/await compared with CompletableFuture.","uv or venv, httpx, and FastAPI basics."], p:[L.py, L.fastapi]},
    {t:"Prompt engineering fundamentals", s:["System vs user prompts, few-shot examples, structuring prompts with XML tags.","Asking for JSON output and validating it before use.","How temperature affects determinism."], p:[L.anthropic]},
    {t:"Your first LLM calls", s:["Call the Messages API with streaming from Python.","Same call from Spring AI's ChatClient with a prompt template.","Log input/output tokens and latency for every call."], p:[L.adocs, L.springai]}
  ]},
  {t:"Binary search, graphs and concurrency", prep:[
    {t:"Binary search on the answer", s:["Recognise it: 'minimise the maximum' or 'smallest capacity such that…'.","Write a monotonic feasible(x), search lo..hi, return the first value that passes.","Avoid overflow: use lo + (hi − lo) / 2 and long sums."],
     p:["lc:koko-eating-bananas","lc:capacity-to-ship-packages-within-d-days","lc:split-array-largest-sum","lc:magnetic-force-between-two-balls","lc:heaters","lc:find-minimum-in-rotated-sorted-array","lc:search-in-rotated-sorted-array"]},
    {t:"Graphs: BFS, DFS, topological sort, union-find", s:["Grid BFS with a visited set; multi-source BFS (Rotting Oranges).","Kahn's algorithm for topological order and cycle detection.","Union-find with path compression and union by rank.","Weighted ratio graphs via DFS (Evaluate Division)."],
     p:["lc:number-of-islands","lc:rotting-oranges","lc:keys-and-rooms","lc:course-schedule","lc:course-schedule-ii","lc:number-of-provinces","lc:redundant-connection","lc:evaluate-division","lc:detonate-the-maximum-bombs"]},
    {t:"Java concurrency", s:["The Java memory model: happens-before, visibility, volatile vs synchronized.","ReentrantLock, ReadWriteLock, Condition; tryLock to avoid deadlocks.","ExecutorService, CompletableFuture (thenCompose vs thenApply), virtual threads in Java 21.","Classic drills: odd/even printer, bounded blocking queue."],
     p:["lc:print-foobar-alternately","lc:print-zero-even-odd","lc:building-h2o","lc:the-dining-philosophers", L.jcc]},
    {t:"Machine coding: rate limiter in 90 minutes", s:["Requirements: limits per client, a swappable algorithm, thread safety.","Token bucket (refill lazily from timestamps) vs sliding-window log vs sliding-window counter.","Classes: RateLimiter interface, TokenBucketLimiter, SlidingWindowLimiter, and a registry built on ConcurrentHashMap<clientId, limiter>.","Unit tests with an injectable clock."],
     p:["lc:logger-rate-limiter*","lc:design-hit-counter*", L.lld]}
  ], ai:[
    {t:"How LLMs work, for engineers", s:["Tokens, context windows, cost per token.","Embeddings and cosine similarity.","Temperature, top-p and top-k.","Why models hallucinate."], p:[L.hfllm]},
    {t:"Tool use", s:["Tool definitions as JSON Schema; the tool_use → tool_result loop.","Validate tool inputs and make tools idempotent.","When a plain function call is better than a tool."], p:[L.anthropic, L.adocs]}
  ]},
  {t:"Heaps, intervals and booking systems", prep:[
    {t:"Heaps and intervals", s:["Sort by start and sweep; a min-heap of end times counts rooms.","Two heaps give a running median.","Difference arrays for capacity problems.","Weighted interval scheduling = sort + DP + binary search (LC 1235)."],
     p:["lc:merge-intervals","lc:meeting-rooms-ii*","lc:meeting-rooms-iii","lc:car-pooling","lc:my-calendar-i","lc:find-median-from-data-stream","lc:maximum-profit-in-job-scheduling","lc:top-k-frequent-elements"]},
    {t:"Machine coding: booking with no double-booking", s:["Entities: Show or Room, Seat or Slot, Booking, User. Booking states: HELD → CONFIRMED → EXPIRED or CANCELLED.","Concurrency: a lock per seat, or an optimistic version check; holds expire after a TTL.","An idempotent request id on every booking.","A FIFO waitlist; a cancellation promotes the next person."], p:[L.lld]},
    {t:"Database isolation, locking and indexes", s:["Dirty reads, non-repeatable reads, phantoms, and which isolation level prevents each.","SELECT … FOR UPDATE vs optimistic locking with @Version in JPA.","Composite index column order, covering indexes, reading EXPLAIN output."], p:[L.pgiso, L.pgexplain]}
  ], ai:[
    {t:"RAG fundamentals", s:["The pipeline: load → chunk → embed → store → retrieve → build context → generate.","Chunk size and overlap trade-offs.","Cosine vs dot product; choosing top-k."], p:[L.dlai, L.ctx]},
    {t:"Hands-on: pgvector", s:["CREATE EXTENSION vector; HNSW vs IVFFlat indexes.","Embed 100 PDFs and store chunk text with metadata.","Nearest-neighbour queries filtered by metadata."], p:[L.pgvector]}
  ]},
  {t:"Monotonic stack, DP and schedulers", prep:[
    {t:"Monotonic stack", s:["Next greater or smaller element in O(n).","Histogram: keep a stack of increasing heights and compute the area when popping."],
     p:["lc:next-greater-element-i","lc:daily-temperatures","lc:largest-rectangle-in-histogram","lc:remove-k-digits"]},
    {t:"Dynamic programming core", s:["Define the state, the transition and the base case, then convert to a table.","1D: House Robber, Decode Ways. Unbounded knapsack: Coin Change.","Partition DP: Palindrome Partitioning II.","Subsequence DP: LPS, LIS (with the O(n log n) follow-up)."],
     p:["lc:house-robber","lc:house-robber-ii","lc:coin-change","lc:decode-ways","lc:palindrome-partitioning-ii","lc:longest-palindromic-subsequence","lc:longest-increasing-subsequence"]},
    {t:"Machine coding: job scheduler", s:["Job states: PENDING → CLAIMED → SUCCEEDED, FAILED or RETRY_SCHEDULED.","DelayQueue or PriorityBlockingQueue for scheduled retries; exponential backoff with jitter.","A lease or visibility timeout so jobs from crashed workers are picked up again.","Dependencies as a DAG run in topological order; a DLQ after the maximum number of attempts."],
     p:["lc:task-scheduler","lc:course-schedule-ii", L.lld]},
    {t:"Machine coding: Splitwise", s:["Split types (equal, exact, percent) with the Strategy pattern.","A balance sheet as map<user, map<user, amount>>, using BigDecimal rather than double.","Simplify debts greedily, matching the largest creditor with the largest debtor."],
     p:["lc:optimal-account-balancing*", L.lld]}
  ], ai:[
    {t:"Better retrieval", s:["Hybrid search: BM25 plus vectors, merged with reciprocal rank fusion.","Reranking with a cross-encoder.","Metadata and access-control filters per tenant."], p:[L.ctx]},
    {t:"Build: Spring Boot RAG endpoint with citations", s:["Ingest contracts into chunks that keep page numbers.","Return the answer with citations (document and page).","Decline to answer when retrieval scores are low."], p:[L.springai]}
  ]},
  {t:"System design fundamentals", prep:[
    {t:"HLD toolkit", s:["Back-of-envelope estimates: QPS, storage, bandwidth.","Caching: cache-aside, write-through, write-back, write-around.","Sharding, replication, consistent hashing.","CAP and PACELC; using queues to decouple services."], p:[L.primer]},
    {t:"HLD: distributed rate limiter", s:["Where it runs: API gateway, sidecar or inside the service.","Redis with a Lua script for an atomic token bucket, one key per client.","Fail-open vs fail-closed; multi-region with local limits and async sync.","Return 429 with a Retry-After header."], p:[L.primer]},
    {t:"HLD: notification system for payments", s:["API → Kafka topics by priority → channel workers → provider adapters.","Provider failover with a circuit breaker; retries ending in a DLQ.","Deduplication with an idempotency key; user preferences and quiet hours.","Delivery status tracking and webhooks."], p:[L.primer]},
    {t:"Kafka deep-dive", s:["A partition is the unit of ordering and parallelism; you can't have more active consumers than partitions.","Consumer lag: causes and fixes (more partitions, batching, async processing).","At-least-once delivery with idempotent consumers; exactly-once with transactions.","Retry topics, DLQs, and rebalancing pitfalls."], p:[L.kafka]}
  ], ai:[
    {t:"Agent fundamentals", s:["The agent loop: reason → call a tool → observe the result.","Workflows vs agents: when a fixed chain is the better choice.","Stop conditions: maximum steps and cost caps."], p:[L.hfagents]},
    {t:"Agent design patterns", s:["Prompt chaining, routing, parallelisation, orchestrator-workers, evaluator-optimiser.","Start with the simplest pattern that works."], p:[L.agents]}
  ]},
  {t:"Booking and feeds at scale", prep:[
    {t:"HLD: BookMyShow / hotel booking", s:["Model inventory per seat or per room-night.","Hold, then confirm with a TTL; a payment saga with compensation.","Idempotency keys on bookings and on payment callbacks.","When payment succeeds but booking fails: refund automatically or retry."], p:[L.primer]},
    {t:"HLD: Instagram / Quora feed", s:["Hybrid fan-out: on write for most users, on read for celebrities.","Timeline cache in Redis; cursor pagination on (timestamp, id).","Ranking as a service separate from storage."], p:[L.primer]},
    {t:"Distributed transaction patterns", s:["Saga: choreography vs orchestration.","Transactional outbox with change data capture (Debezium).","Circuit breakers, retries with jitter and bulkheads (Resilience4j)."], p:[L.saga, L.outbox, L.r4j]}
  ], ai:[
    {t:"MCP (Model Context Protocol)", s:["Host, client and server roles; tools, resources and prompts.","Build a server with two tools: search contracts, fetch a clause.","Authentication and least privilege for tools."], p:[L.mcp]},
    {t:"Spring AI tool calling", s:["@Tool methods and tool context.","Advisors for chat memory and RAG."], p:[L.springai]}
  ]},
  {t:"Harder machine coding", prep:[
    {t:"Machine coding: in-memory message queue", s:["Topics split into partitions; partition chosen by key hash.","Consumer groups track an offset per partition.","Thread safety: a lock per partition; blocking poll using Condition."], p:["lc:design-bounded-blocking-queue*", L.lld]},
    {t:"Machine coding: cache library", s:["An eviction-policy interface: LRU (LinkedHashMap, or doubly linked list + map) and LFU (frequency buckets).","TTL with lazy expiry plus a periodic sweeper.","Concurrency with a ReadWriteLock or lock striping."], p:["lc:lru-cache","lc:lfu-cache","lc:insert-delete-getrandom-o1"]},
    {t:"Timed mixed DSA set", s:["6 problems at 25 minutes each, explained out loud.","State the complexity before you start coding."],
     p:["lc:binary-tree-maximum-path-sum","lc:lowest-common-ancestor-of-a-binary-tree","lc:all-nodes-distance-k-in-binary-tree","lc:cheapest-flights-within-k-stops","lc:find-the-safest-path-in-a-grid","lc:reorganize-string"]}
  ], ai:[
    {t:"Evals", s:["A golden set of 30 questions with expected answers and sources.","Retrieval metrics: recall@k and MRR.","Generation metrics: faithfulness and groundedness.","Run evals in CI on every prompt change."], p:[L.zoomcamp, L.evals, L.ragas]},
    {t:"LLM-as-judge", s:["A binary pass/fail rubric beats 1–10 scores.","Calibrate against 10–20 human labels.","Watch for position and verbosity bias."], p:[L.evals]}
  ]},
  {t:"Production AI and streaming design", prep:[
    {t:"HLD: stock price alert system (asked 5 times at Uber)", s:["Ingest price ticks through Kafka, partitioned by symbol.","Index alert rules by symbol and threshold in a sorted structure per symbol.","Evaluate on each tick, deduplicate, then push through the notification service.","Scale to millions of rules and a few very hot symbols."], p:[L.primer]},
    {t:"HLD: top-K trending over time windows", s:["Count-min sketch plus a heap for approximate top-K.","Tumbling vs sliding windows (Flink or Kafka Streams).","Pre-aggregate per minute, then merge into 1 h and 24 h views."], p:["lc:top-k-frequent-elements","lc:design-hit-counter*", L.primer]},
    {t:"Write your STAR stories", s:["Six stories: project deep-dive, conflict, incident, deadline trade-off, mentoring, using AI tools.","For each: the situation in 2 lines, your actions in detail, a measurable result.","Keep what you did ('I') separate from what the team did ('we')."], p:[]}
  ], ai:[
    {t:"Production concerns", s:["A semantic cache keyed on embedding similarity.","Token and cost metrics per request; a latency budget for each stage.","Prompt-injection defences; PII redaction (India's DPDP Act).","A fallback provider behind a circuit breaker."], p:[L.aiq]},
    {t:"Capstone build", s:["Contract Q&A with citations, plus a risky-clause flagger.","An eval suite and a cost/latency dashboard.","A README with an architecture diagram and the eval results."], p:[L.springai, L.pgvector]}
  ]},
  {t:"Start applying", prep:[
    {t:"Shortlist companies and ask for referrals", s:["25 companies from the Companies tab, sorted into tiers. Zomato hires through referrals only.","Referral message: 3 lines, your resume, the role you're targeting.","Apply to about 5 a week and track every application."], p:[]},
    {t:"Whiteboard your own system", s:["A 10-minute walkthrough of your Leegality services: APIs, data model, async flows.","Then at 100× scale: what breaks first, and how you'd fix it.","Know your numbers: RPS, data size, p99 latency."], p:[]},
    {t:"Practise an AI-assisted round", s:["Write PLAN.md first: requirements, classes, a list of tests.","Commit in small steps and review every diff.","Keep the tests green, and handle a new requirement at minute 70."], p:[L.cc]}
  ], ai:[
    {t:"AI system design: multi-tenant chat platform", s:["Streaming over SSE, a conversation store, search across history.","Tenant isolation, per-tenant rate limits, cost attribution."], p:[L.aiq]},
    {t:"Publish the capstone", s:["A GitHub repo with a README covering architecture, eval results and cost per query.","A 2-minute demo GIF or video."], p:[]}
  ]},
  {t:"Breadth pass", prep:[
    {t:"HLD: payment service", s:["A payment state machine with an idempotency key on create.","Bank timeouts: poll for status and run a reconciliation job.","A double-entry ledger."], p:[L.primer]},
    {t:"HLD: chat / messaging", s:["WebSocket gateways; per-conversation ordering with sequence numbers.","Delivery and read receipts; storage for offline users; presence via heartbeats."], p:[L.primer]},
    {t:"Spring rapid-fire", s:["@Transactional: proxies, self-invocation, REQUIRES_NEW, rollback on checked exceptions.","Constructor injection; fixing circular dependencies.","Auto-configuration and @Conditional.","The JPA N+1 problem and fetch joins."], p:[L.springtx]}
  ], ai:[
    {t:"AI system design: durable agent runtime", s:["Checkpointing each step so a crashed run can resume.","Human approval in the middle of a run; sandboxed tool execution.","Per-tenant compute quotas."], p:[L.agents]},
    {t:"Explain-it drills", s:["Explain attention in 2 minutes.","Debug: the right document was retrieved but the answer is wrong."], p:[L.aiq]}
  ]},
  {t:"Mock interviews", prep:[
    {t:"Two full mock interviews", s:["One DSA round and one machine-coding round, each with a peer or the Mock interviewer tab.","Afterwards, write down the 3 things you'd do differently."], p:["lc:median-of-two-sorted-arrays","lc:word-ladder"]},
    {t:"Revisit your weak questions", s:["Filter the Question bank by round and hide practised questions.","Redo every 'Lean no' answer from the mock interviewer."], p:[]}
  ], ai:[
    {t:"Mock: design enterprise document Q&A in 45 minutes", s:["Clarify requirements first. A published account of a failed attempt traced it to skipping this.","Cover ingestion, retrieval, access control, evals, cost and monitoring."], p:[L.aiq]},
    {t:"Add an agentic feature to the capstone", s:["Tool calls with a loop limit and human approval.","Log every step of the agent's run."], p:[L.agents]}
  ]},
  {t:"Negotiate", prep:[
    {t:"Bring offers into the same week", s:["Compare base pay first and ESOPs last.","Ask every company for the full breakdown: base, bonus, joining bonus, stock and vesting schedule."], p:[]},
    {t:"Resist downleveling", s:["Point to the services you own end to end and their scale.","Ask what would have been needed for the higher level."], p:[]},
    {t:"Anchor high", s:["Ask for ₹38–40L base for SDE-2/Senior at product companies.","Use a competing offer to raise the base, not the stock."], p:[]}
  ], ai:[
    {t:"Tell the hybrid story", s:["A backend engineer who has shipped LLM features to production: RAG with evals, cost and latency metrics."], p:[]}
  ]}
].map((w,wi)=>({...w, id:"w"+(wi+1), items:[...w.prep.map((it,i)=>({...it,id:`w${wi+1}p${i}`,trk:"prep",g:G[wi][i]})), ...w.ai.map((it,i)=>({...it,id:`w${wi+1}a${i}`,trk:"ai",g:G[wi][w.prep.length+i]}))]}));

const COMPANIES = [
  ["PhonePe","SSE (6 YOE)","₹60L","₹88L (Y1, + ₹80L ESOP)","Machine coding take-home → code review → DSA → HLD → HM",[7357253,6592633]],
  ["Atlassian","P40 (SDE-2)","₹47–56L","₹85–87L Y1","Karat → DSA → Code design (JUnit) → System design → Values → HM",[7069410,7292801]],
  ["Uber","SDE-2 (L4)","₹43–54L","₹79–82L Y1","OA → screen → DSA → machine coding (concurrency) → HLD → HM",[7638674,7225049]],
  ["Cloudflare","SSE","₹60L","≈ ₹79L Y1","Coding → LLM batch design → debugging → GenAI discussion",[7901539]],
  ["Salesforce","SMTS","₹53L","≈ ₹78L Y1","HackerRank → DSA → LLD+HLD → HM",[7766903]],
  ["Blinkit","SDE-3","₹58L","₹82L","Project grilling → DSA → design → HM",[7357371]],
  ["CRED","SDE-3 (4.3 YOE)","₹70L","₹80L (+ ₹1Cr ESOP)","AI-tools screen → LLD+HLD onsite → 24h prototype → HM deep-dive",[7390578,7463243]],
  ["Razorpay","Lead / SSE","₹60L (Lead)","₹77L (Lead)","Machine coding (often agentic) → HLD → HM",[7357386,8382736]],
  ["Meesho","SDE-3","₹61L","₹75L","Machine coding (2h) → HLD → HM",[7496220,7496727]],
  ["Microsoft","L62 (SDE-2)","₹42L","+ bonus, ₹12L JB/RB, $110k RSU","OA → DSA → LLD (sometimes with AI) → HLD → AA",[7770540]],
  ["Amazon","SDE-2 (L5)","₹42–46L","₹57–66L Y1","OA (incl. AI repo task) → screen → 4 rounds incl. Bar Raiser, LPs in every round",[8551252,8522985]],
  ["Intuit","SSE","₹48L","≈ ₹68L Y1","Screen → Craft demo (90 min) → Technical → AI assessment → HM",[7165974]],
  ["Flipkart","SDE-3 (6 YOE)","₹47–48L","≈ ₹61–62L","Machine coding (90 min + review) → DSA → HLD → HM",[7240265,7240231]],
  ["Dream11","SDE-2 (4.5 YOE)","₹48–55L","+ ₹10–11L sign-on","DSA → DB deep-dive round → HLD (2h) → HM",[6434666,6583413]],
  ["Zomato","SDE-2","₹33–38L","₹41–46L","Referral only → DSA/backend (Redis, Kafka, SQL) → LLD",[8394189,7573378]],
  ["Swiggy","SDE-2","₹38L","₹43L (+ ₹20L ESOP)","BarRaiser → LLD/machine coding → DSA → HM",[8314799,7069404]],
  ["InMobi","SDE-2 (4.2 YOE)","₹38L","₹44–46L","DSA ×2 → HLD scheduler → LLD IRCTC → HM ×2",[7422653]],
  ["Upstox","SDE-2 (4 YOE)","₹35L","₹44.5L","DSA → LLD+HLD trading → HM",[7296989]],
  ["MongoDB","SWE-3","₹46L","+ ₹8L JB, $67.5k RSU","—",[7772007]],
  ["Groww","SDE-2","₹41L","+ 10% + ESOP","DSA → machine coding (Splitwise) → HLD → HM",[6359444,7046387]],
  ["Slice","SDE-2","₹38L","+ ₹12L ESOP","Machine coding (AI allowed) → LLD+HLD wallet → HM",[7546275]],
  ["ServiceNow","IC3 SSE","₹35–40L","≈ ₹49–54L","DSA → DB/API design → HM",[6660684,6683950]],
  ["Walmart Global Tech","IN4 SSE","₹40L","≈ ₹50L Y1","OA (Spring Boot task) → DSA → LLD → HLD → HM",[8299587,8310700]],
  ["Tekion","SDE-2 (Chennai)","₹31L","₹45L Y1","DSA → LLD (TTL cache) → HLD",[8533315]],
  ["Sprinklr","Senior SDE","₹45L","+ ₹3L","DSA → design (sharding) → HM",[7748592]],
  ["Teradata / Adobe / EPAM","AI engineer roles","varies","AI band at 5–8 YOE: ₹40–60L (guide)","DSA → system design → RAG/agent design → HM",[7704844,8317558,"https://www.recrew.ai/salary-guides/applied-ai-engineer-in-india"]]
];

const SRC_INTERVIEW = [
  ["LeetCode Discuss — Interview Experience","https://leetcode.com/discuss/interview-experience/","The largest and most recent source in India. Posts list each round's questions and often the offer. Most of this site's data comes from here."],
  ["LeetCode Discuss — Compensation","https://leetcode.com/discuss/compensation/","Offer breakdowns (base, bonus, ESOP/RSU) posted by candidates. Search by company and year."],
  ["Roundz (Substack)","https://roundz.substack.com/","Curated, numbered interview write-ups for Indian product companies and Big Tech, with round-by-round detail."],
  ["Taro — interview experiences","https://www.jointaro.com/interviews/","Structured reports with outcome and sentiment; good for Big Tech and GCCs."],
  ["Glassdoor India — Interviews","https://www.glassdoor.co.in/Interview/index.htm","Short reports for almost every company. Useful for round structure, light on detail."],
  ["AmbitionBox","https://www.ambitionbox.com/interviews","India-focused interview reviews and salary reports, including mid-size companies."],
  ["GeeksforGeeks — Interview Experiences","https://www.geeksforgeeks.org/interview-experiences/","Lots of SDE-2 machine-coding write-ups (PhonePe, Flipkart, Swiggy). Check the date; many are older."],
  ["Blind","https://www.teamblind.com/","Verified-employee discussion of offers, team match and hiring freezes."],
  ["levels.fyi (India)","https://www.levels.fyi/","Most reliable pay comparisons by level. Use it before negotiating."],
  ["EngineBogie","https://enginebogie.com/","Indian startup and product-company interview write-ups (PhonePe and others)."],
  ["interviewexperiences.in","https://interviewexperiences.in/","An aggregator that mirrors and organizes recent LeetCode posts by company."],
  ["r/developersIndia","https://www.reddit.com/r/developersIndia/","Market sentiment, switch stories and referral threads."]
];
const SRC_LEARN = [
  ["roadmap.sh — AI Engineer","https://roadmap.sh/ai-engineer","Checklist roadmap with progress tracking. Skip the ML-math nodes."],
  ["Anthropic courses (GitHub)","https://github.com/anthropics/courses","Free notebooks on prompt engineering and tool use."],
  ["Hugging Face LLM + Agents courses","https://huggingface.co/learn","Free, self-paced, with certificates."],
  ["DataTalksClub LLM Zoomcamp","https://github.com/DataTalksClub/llm-zoomcamp","The most complete free course on production LLM systems: RAG, evals, monitoring, capstone."],
  ["DeepLearning.AI short courses","https://www.deeplearning.ai/short-courses/","1–2 hour topic courses on RAG, agents and evals."],
  ["Spring AI reference","https://docs.spring.io/spring-ai/reference/","Stay in Java: ChatClient, RAG advisors, tool calling, MCP."],
  ["AI engineering interview questions","https://github.com/amitshekhariitbhu/ai-engineering-interview-questions","Curated question list covering RAG, MCP, LLM-as-judge, red-teaming."],
  ["System Design Primer","https://github.com/donnemartin/system-design-primer","Free HLD fundamentals and practice prompts."],
  ["NeetCode roadmap","https://neetcode.io/roadmap","Pattern-ordered DSA list; matches the patterns in the Question bank."]
];

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const srcLinks = arr => arr.map(s => `<a href="${href(s)}" target="_blank" rel="noopener">${lbl(s)}</a>`).join(" · ");

/* ---------- site pages ---------- */
const PAGES = {
  "dsa-sliding-window":["Sliding window & two pointers","DSA lessons"],
  "dsa-binary-search-on-answer":["Binary search on the answer","DSA lessons"],
  "dsa-graphs":["Graphs: BFS, DFS, topo sort, union-find","DSA lessons"],
  "dsa-heaps-intervals":["Heaps & intervals","DSA lessons"],
  "dsa-monotonic-stack":["Monotonic stack","DSA lessons"],
  "dsa-dynamic-programming":["Dynamic programming core","DSA lessons"],
  "dsa-mixed-set":["Timed mixed problem set","DSA lessons"],
  "java-collections-internals":["Java collections internals","Java & backend"],
  "java-concurrency":["Java concurrency","Java & backend"],
  "spring-rapid-fire":["Spring Boot rapid-fire","Java & backend"],
  "db-isolation-locking-indexes":["Databases: isolation, locking, indexes","Java & backend"],
  "kafka-deep-dive":["Kafka deep-dive","Java & backend"],
  "hld-toolkit":["System design toolkit","System design (HLD)"],
  "distributed-transactions":["Sagas, outbox & resilience","Java & backend"],
  "lld-rate-limiter":["Rate limiter","Machine coding (LLD)"],
  "lld-booking-system":["Booking system, no double-booking","Machine coding (LLD)"],
  "lld-job-scheduler":["Job scheduler","Machine coding (LLD)"],
  "lld-splitwise":["Splitwise","Machine coding (LLD)"],
  "lld-message-queue":["In-memory message queue","Machine coding (LLD)"],
  "lld-cache-library":["Cache library (eviction + TTL)","Machine coding (LLD)"],
  "lld-notification-service":["Notification service","Machine coding (LLD)"],
  "lld-parking-lot":["Parking lot","Machine coding (LLD)"],
  "hld-distributed-rate-limiter":["Distributed rate limiter","System design (HLD)"],
  "hld-notification-system":["Notification system","System design (HLD)"],
  "hld-booking-platform":["Booking platform","System design (HLD)"],
  "hld-news-feed":["News feed","System design (HLD)"],
  "hld-stock-price-alerts":["Stock price alerts","System design (HLD)"],
  "hld-top-k-trending":["Top-K trending","System design (HLD)"],
  "hld-payment-service":["Payment service","System design (HLD)"],
  "hld-chat-messaging":["Chat / messaging","System design (HLD)"],
  "hld-distributed-job-scheduler":["Distributed job scheduler","System design (HLD)"],
  "ai-rag-enterprise-qa":["RAG over enterprise documents","AI system design"],
  "ai-multi-tenant-chat-platform":["Multi-tenant chat platform","AI system design"],
  "ai-durable-agent-runtime":["Durable agent runtime","AI system design"],
  "learn-python-for-java-devs":["Python for Java engineers","AI engineering lessons"],
  "learn-prompt-engineering":["Prompt engineering","AI engineering lessons"],
  "learn-first-llm-calls":["Your first LLM calls","AI engineering lessons"],
  "learn-llm-fundamentals":["How LLMs work","AI engineering lessons"],
  "learn-tool-use":["Tool use","AI engineering lessons"],
  "learn-rag-fundamentals":["RAG fundamentals","AI engineering lessons"],
  "learn-pgvector":["pgvector hands-on","AI engineering lessons"],
  "learn-better-retrieval":["Better retrieval","AI engineering lessons"],
  "learn-spring-rag-endpoint":["Spring Boot RAG endpoint","AI engineering lessons"],
  "learn-agents":["Agents and agent patterns","AI engineering lessons"],
  "learn-mcp":["Model Context Protocol","AI engineering lessons"],
  "learn-spring-ai-tools":["Spring AI tool calling","AI engineering lessons"],
  "learn-evals":["Evals and LLM-as-judge","AI engineering lessons"],
  "learn-production-ai":["Production AI concerns","AI engineering lessons"],
  "learn-capstone":["Capstone build guide","AI engineering lessons"],
  "learn-ai-interview-drills":["AI interview drills","AI engineering lessons"],
  "career-resume":["Resume","Career"],
  "career-star-stories":["STAR stories","Career"],
  "career-applying-referrals":["Applying and referrals","Career"],
  "career-whiteboard-your-system":["Whiteboard your own system","Career"],
  "career-ai-assisted-round":["AI-assisted coding rounds","Career"],
  "career-mock-interviews":["Mock interviews","Career"],
  "career-negotiation":["Negotiation","Career"]
};
function plink(p) {
  if (typeof p === "string" && p.startsWith("lc:")) {
    const prem = p.endsWith("*"), slug = p.slice(3).replace("*", "");
    const name = slug.split("-").map(w => /^(i|ii|iii|iv|o1|k|h2o)$/.test(w) ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)).join(" ");
    return `<a class="plink" href="https://leetcode.com/problems/${slug}/" target="_blank" rel="noopener"><span class="k">LC</span>${esc(name)}${prem ? `<span class="pm">Premium</span>` : ""}</a>`;
  }
  return `<a class="plink" href="${p[1]}" target="_blank" rel="noopener">${esc(p[0])} ↗</a>`;
}
const QRULES = {
  dsa: [[/binary search on the answer|Rotated Sorted/i,"dsa-binary-search-on-answer"],[/^LRU|GetRandom/i,"java-collections-internals"],[/Graph BFS|Course Schedule|Dijkstra|Evaluate Division/i,"dsa-graphs"],[/Sliding Window Max|Max Consecutive|Longest Subarray|Minimum Window|Container With/i,"dsa-sliding-window"],[/Merge Intervals|Median from|Job Scheduling|Task Scheduler/i,"dsa-heaps-intervals"],[/Monotonic/i,"dsa-monotonic-stack"],[/^DP set/i,"dsa-dynamic-programming"],[/./,"dsa-mixed-set"]],
  lld: [[/^Booking|Calendar/i,"lld-booking-system"],[/^Rate limiter/i,"lld-rate-limiter"],[/^Splitwise/i,"lld-splitwise"],[/job scheduler/i,"lld-job-scheduler"],[/^Notification/i,"lld-notification-service"],[/^Cache library/i,"lld-cache-library"],[/^Parking/i,"lld-parking-lot"],[/message queue/i,"lld-message-queue"],[/Circuit breaker/i,"distributed-transactions"],[/blocking queue/i,"java-concurrency"],[/Flash-sale/i,"hld-booking-platform"],[/Spring Boot REST/i,"spring-rapid-fire"],[/Wallet/i,"hld-payment-service"]],
  hld: [[/rate limiter/i,"hld-distributed-rate-limiter"],[/^Booking/i,"hld-booking-platform"],[/^Feed/i,"hld-news-feed"],[/^Notification/i,"hld-notification-system"],[/job scheduler/i,"hld-distributed-job-scheduler"],[/^Stock/i,"hld-stock-price-alerts"],[/^Chat/i,"hld-chat-messaging"],[/^Top-K/i,"hld-top-k-trending"],[/^Payment/i,"hld-payment-service"],[/./,"hld-toolkit"]],
  java: [[/@Transactional|injection/i,"spring-rapid-fire"],[/HashMap|Immutable/i,"java-collections-internals"],[/volatile|threads|locks|CompletableFuture/i,"java-concurrency"],[/^Kafka/i,"kafka-deep-dive"],[/Isolation|^SQL|B-tree/i,"db-isolation-locking-indexes"],[/Saga|Idempotency/i,"distributed-transactions"],[/./,"hld-toolkit"]],
  ai: [[/^Design RAG|Hallucination/i,"ai-rag-enterprise-qa"],[/^Chunking/i,"learn-rag-fundamentals"],[/Bi-encoder/i,"learn-better-retrieval"],[/^Evaluating/i,"learn-evals"],[/^MCP/i,"learn-mcp"],[/^Agent vs/i,"learn-agents"],[/cost|router/i,"learn-production-ai"],[/multi-tenant ChatGPT/i,"ai-multi-tenant-chat-platform"],[/durable agent/i,"ai-durable-agent-runtime"],[/attention|Temperature/i,"learn-llm-fundamentals"],[/pgvector/i,"learn-pgvector"]],
  aicode: [[/./,"career-ai-assisted-round"]],
  beh: [[/^Deep-dive/i,"career-whiteboard-your-system"],[/./,"career-star-stories"]]
};
QUESTIONS.forEach(q => { const r = (QRULES[q.r] || []).find(([re]) => re.test(q.q)); q.g = r ? r[1] : null; });

// Which round hub each page belongs to
const HUB_OF = slug => slug.startsWith("dsa-") ? "dsa" : slug.startsWith("lld-") ? "lld" : slug.startsWith("hld-") ? "hld"
  : (slug.startsWith("ai-") || slug.startsWith("learn-")) ? "ai" : slug.startsWith("career-") ? "career" : "backend";
const HUB_NAV = [["dsa","DSA"],["lld","LLD / machine coding"],["hld","System design"],["ai","AI engineering"],["backend","Java & backend"],["career","Career"]];
// Progress shared by every page on this site (same browser)
function loadState() {
  try { const s = JSON.parse(localStorage.getItem("ssp-state") || "null"); if (s && s.done) return { done: s.done || {}, practiced: s.practiced || {} }; } catch (e) {}
  return { done: {}, practiced: {} };
}
function saveLocal(st) { try { localStorage.setItem("ssp-state", JSON.stringify(st)); } catch (e) {} }


/* Step-through visualisers and quizzes for lesson pages. No dependencies. */
document.querySelectorAll(".stepper").forEach(st => {
  const frames = [...st.querySelectorAll(".frame")];
  if (!frames.length) return;
  let i = 0;
  const ctrl = document.createElement("div");
  ctrl.className = "ctrl";
  ctrl.innerHTML = `<button type="button" data-a="prev">← Back</button><button type="button" data-a="next">Next →</button><span class="dots">${frames.map(() => "<i></i>").join("")}</span><span class="count"></span>`;
  st.appendChild(ctrl);
  const dots = [...ctrl.querySelectorAll(".dots i")];
  const show = () => {
    frames.forEach((f, k) => f.hidden = k !== i);
    dots.forEach((d, k) => d.classList.toggle("on", k <= i));
    ctrl.querySelector("[data-a=prev]").disabled = i === 0;
    ctrl.querySelector("[data-a=next]").disabled = i === frames.length - 1;
    ctrl.querySelector(".count").textContent = `Step ${i + 1} of ${frames.length}`;
  };
  ctrl.addEventListener("click", e => {
    const a = e.target.dataset && e.target.dataset.a;
    if (a === "prev" && i > 0) i--;
    if (a === "next" && i < frames.length - 1) i++;
    show();
  });
  st.tabIndex = 0;
  st.addEventListener("keydown", e => {
    if (e.key === "ArrowRight" && i < frames.length - 1) { i++; show(); }
    if (e.key === "ArrowLeft" && i > 0) { i--; show(); }
  });
  show();
});
document.querySelectorAll(".quiz").forEach(qz => {
  const ans = Number(qz.dataset.answer), opts = [...qz.querySelectorAll(".opt")], why = qz.querySelector(".why");
  if (why) why.hidden = true;
  opts.forEach((o, k) => o.addEventListener("click", () => {
    opts.forEach(x => x.classList.remove("right", "wrong"));
    o.classList.add(k === ans ? "right" : "wrong");
    if (k !== ans) opts[ans].classList.add("right");
    if (why) why.hidden = false;
  }));
});

import { useState } from "react";

// ─── Mock University Database ───────────────────────────────────────────────
const UNIVERSITIES = [
  {
    id: 1,
    name: "Harvard University",
    country: "US",
    location: "Cambridge, MA",
    emoji: "🎓",
    accentColor: "#7c3aed",
    tracks: ["STEM & Robotics", "International Business & Economics", "Humanities & Research"],
    minGPA: 3.9,
    minSAT: 1500,
    minIELTS: 7.5,
    cost: 65000,
    visaStatus: "High legal financial proof required",
    visaRisk: "high",
  },
  {
    id: 2,
    name: "Technical University of Munich",
    country: "Germany",
    location: "Munich",
    emoji: "🏛️",
    accentColor: "#0891b2",
    tracks: ["STEM & Robotics"],
    minGPA: 3.4,
    minSAT: 0,
    minIELTS: 6.5,
    cost: 6000,
    visaStatus: "Highly favorable postgrad stay-back options",
    visaRisk: "low",
  },
  {
    id: 3,
    name: "National University of Singapore",
    country: "Singapore",
    location: "Singapore",
    emoji: "🌏",
    accentColor: "#ea580c",
    tracks: ["International Business & Economics", "STEM & Robotics"],
    minGPA: 3.8,
    minSAT: 1450,
    minIELTS: 7.0,
    cost: 35000,
    visaStatus: "Strict localized enrollment quotas",
    visaRisk: "medium",
  },
  {
    id: 4,
    name: "Erasmus University Rotterdam",
    country: "Netherlands",
    location: "Rotterdam",
    emoji: "🌷",
    accentColor: "#0d9488",
    tracks: ["International Business & Economics"],
    minGPA: 3.5,
    minSAT: 1300,
    minIELTS: 7.0,
    cost: 22000,
    visaStatus: "Standard EU student path",
    visaRisk: "low",
  },
  {
    id: 5,
    name: "University of Oxford",
    country: "UK",
    location: "Oxford",
    emoji: "📜",
    accentColor: "#1d4ed8",
    tracks: ["Humanities & Research", "STEM & Robotics"],
    minGPA: 3.9,
    minSAT: 1500,
    minIELTS: 7.5,
    cost: 52000,
    visaStatus: "Premium visa application checks",
    visaRisk: "medium",
  },
  {
    id: 6,
    name: "KAIST",
    country: "South Korea",
    location: "Daejeon",
    emoji: "🤖",
    accentColor: "#db2777",
    tracks: ["STEM & Robotics"],
    minGPA: 3.5,
    minSAT: 1350,
    minIELTS: 6.5,
    cost: 15000,
    visaStatus: "Competitive regional tech incentives",
    visaRisk: "low",
  },
];
export default function Dashboard() {
  // ─── Student Profile State ────────────────────────────────────────
  const [gpa, setGpa] = useState(3.85);
  const [sat, setSat] = useState(1480);
  const [ielts, setIelts] = useState(7.5);
  const [budget, setBudget] = useState(30000);
  const [region, setRegion] = useState("All");
  const [track, setTrack] = useState("STEM & Robotics");
  const [essay, setEssay] = useState("");

  // ─── Engine State ────────────────────────────────────────────────
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState<(typeof UNIVERSITIES[0] & { prob: number })[]>([]);
  const [hasRun, setHasRun] = useState(false);

  // ─── Human Oversight State ──────────────────────────────────────
  const [offset, setOffset] = useState(0);
  const [overrideTier, setOverrideTier] = useState("Maintain System Evaluation");
  const [advisorNotes, setAdvisorNotes] = useState("");
  const [showModal, setShowModal] = useState(false);

  // ─── Region filter ───────────────────────────────────────────────
  const REGION_MAP: Record<string, string[]> = {
    "All": ["US", "Germany", "Singapore", "Netherlands", "UK", "South Korea"],
    "North America": ["US"],
    "European Union": ["Germany", "Netherlands"],
    "United Kingdom": ["UK"],
    "Asia": ["Singapore", "South Korea"],
  };

  const allowedCountries = REGION_MAP[region] || [];

  function calcProbability(u: typeof UNIVERSITIES[0]) {
    let score = 0;
    const satScore = sat > 0 ? sat : 0;
    if (gpa >= u.minGPA) score += 40;
    else if (gpa >= u.minGPA - 0.2) score += 20;
    if (u.minSAT === 0 || satScore >= u.minSAT) score += 40;
    else if (satScore >= u.minSAT - 100) score += 15;
    if (ielts >= u.minIELTS) score += 20;
    else if (ielts >= u.minIELTS - 0.5) score += 8;
    return Math.min(95, score);
  }

  function getTier(prob: number) {
    if (prob >= 75) return { label: "Target", color: "#22c55e", bg: "#22c55e15", badge: "bg-green-100 text-green-700" };
    if (prob >= 45) return { label: "Reach", color: "#f59e0b", bg: "#f59e0b15", badge: "bg-amber-100 text-amber-700" };
    return { label: "Challenging", color: "#ef4444", bg: "#ef444415", badge: "bg-red-100 text-red-700" };
  }

  function runEngine() {
    setRunning(true);
    setTimeout(() => {
      const filtered = UNIVERSITIES
        .filter(u => allowedCountries.includes(u.country))
        .filter(u => u.tracks.includes(track))
        .map(u => ({ ...u, prob: calcProbability(u) }))
        .sort((a, b) => {
          const aMatch = a.tracks.includes(track) ? 1 : 0;
          const bMatch = b.tracks.includes(track) ? 1 : 0;
          if (bMatch !== aMatch) return bMatch - aMatch;
          return b.prob - a.prob;
        });
      setResults(filtered);
      setHasRun(true);
      setRunning(false);
      setOffset(0);
      setOverrideTier("Maintain System Evaluation");
    }, 1000);
  }

  function effectiveProb(u: (typeof UNIVERSITIES[0] & { prob: number })) {
    const base = u.prob + offset;
    return Math.max(5, Math.min(95, base));
  }

  function handleDownload() {
    setShowModal(true);
  }

  function getOverrideColor(u: (typeof UNIVERSITIES[0] & { prob: number })) {
    const eff = effectiveProb(u);
    if (overrideTier === "Manually Elevate Status") return "#22c55e";
    if (overrideTier === "Manually Downgrade Status") return "#ef4444";
    if (eff >= 75) return "#22c55e";
    if (eff >= 45) return "#f59e0b";
    return "#ef4444";
  }

  function getOverrideBadge(u: (typeof UNIVERSITIES[0] & { prob: number })) {
    if (overrideTier === "Manually Elevate Status") return { label: "Elevated", color: "#22c55e" };
    if (overrideTier === "Manually Downgrade Status") return { label: "Downgraded", color: "#ef4444" };
    return getTier(effectiveProb(u));
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* ─── TOP NAV ─────────────────────────────────────────────── */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-teal-500 rounded-lg flex items-center justify-center text-slate-900 font-extrabold text-lg">E</div>
          <div>
            <div className="font-bold text-white text-lg leading-none">EduCompass AI</div>
            <div className="text-xs text-teal-400">Predictive Global University Matchmaker</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
          Multi-Agent Engine Active
        </div>
      </header>

      {/* ─── 3-COLUMN DASHBOARD ───────────────────────────────────── */}
      <div className="flex h-screen calc" style={{height: "calc(100vh - 65px)"}}>

        {/* ── COLUMN 1: Student Profile Data Entry ─────────────── */}
        <div className="w-2/5 border-r border-slate-700 overflow-y-auto bg-slate-900" style={{minWidth:320}}>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold bg-teal-500 text-slate-900 px-2 py-0.5 rounded">1</span>
              <h2 className="text-base font-bold text-white">Student Profile Data Entry</h2>
            </div>

            {/* Quantitative Inputs */}
            <div className="bg-slate-800 rounded-xl p-4 mb-4 border border-slate-700">
              <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">Quantitative Metrics</p>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Cumulative GPA</label>
                  <input type="number" min="0" max="4" step="0.01" value={gpa} onChange={e => setGpa(parseFloat(e.target.value))} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-teal-500" />
                  <div className="flex justify-between text-xs text-slate-500 mt-1"><span>0.0</span><span>4.0</span></div>
                </div>
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">SAT / ACT Score</label>
                  <input type="number" min="0" max="1600" value={sat} onChange={e => setSat(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-teal-500" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">IELTS / TOEFL Score</label>
                  <input type="number" min="0" max="9" step="0.5" value={ielts} onChange={e => setIelts(parseFloat(e.target.value))} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-teal-500" />
                </div>
              </div>
            </div>

            {/* Financial & Geographic */}
            <div className="bg-slate-800 rounded-xl p-4 mb-4 border border-slate-700">
              <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">Financial & Geographic Parameters</p>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Maximum Annual Tuition Budget (USD)</label>
                  <input type="number" value={budget} onChange={e => setBudget(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-teal-500" />
                </div>
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Preferred Destination Region</label>
                  <select value={region} onChange={e => setRegion(e.target.value)} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-teal-500">
                    <option>All</option>
                    <option>North America</option>
                    <option>European Union</option>
                    <option>United Kingdom</option>
                    <option>Asia</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Qualitative */}
            <div className="bg-slate-800 rounded-xl p-4 mb-4 border border-slate-700">
              <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">Qualitative Core Focus</p>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Primary Academic Track / Skill Focus</label>
                  <select value={track} onChange={e => setTrack(e.target.value)} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-teal-500">
                    <option>STEM & Robotics</option>
                    <option>International Business & Economics</option>
                    <option>Humanities & Research</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Extracurricular Highlights & Personal Essay</label>
                  <textarea value={essay} onChange={e => setEssay(e.target.value)} placeholder="Type or paste achievements, awards, leadership roles, research experience..." rows={4} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-teal-500 resize-none" />
                </div>
              </div>
            </div>

            {/* Run Button */}
            <button onClick={runEngine} disabled={running} className="w-full bg-teal-600 hover:bg-teal-500 disabled:bg-teal-800 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all text-sm flex items-center justify-center gap-2">
              {running ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Running AI Engine...
                </>
              ) : (
                <>Run Predictive Matching Engine 🚀</>
              )}
            </button>
          </div>
        </div>
        {/* ── COLUMN 2: Dynamic AI Matchmaker Output ─────────────── */}
        <div className="w-[30%] border-r border-slate-700 overflow-y-auto bg-slate-950" style={{minWidth:400}}>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold bg-teal-500 text-slate-900 px-2 py-0.5 rounded">2</span>
              <h2 className="text-base font-bold text-white">AI Matchmaker & Multi-Agent Risk Analysis</h2>
            </div>

            {!hasRun ? (
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-slate-400 text-sm">Awaiting student telemetry data... Enter parameters and click <strong className="text-teal-400">"Run Engine"</strong> to simulate cross-border matching.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {results.length === 0 && (
                  <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
                    <p className="text-slate-400 text-sm">No universities match the selected criteria. Try adjusting your track or region filter.</p>
                  </div>
                )}
                {results.map(u => {
                  const prob = effectiveProb(u);
                  const tier = getOverrideBadge(u);
                  const budgetOk = budget >= u.cost;
                  return (
                    <div key={u.id} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                      {/* Card Header */}
                      <div className="p-4" style={{borderBottom: "1px solid #1e293b"}}>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{backgroundColor: u.accentColor + "30"}}>{u.emoji}</div>
                            <div>
                              <div className="font-bold text-white text-sm">{u.name}</div>
                              <div className="text-xs text-slate-400">{u.location}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-slate-400">Probability</div>
                            <div className="text-xl font-extrabold" style={{color: getOverrideColor(u)}}>{prob}%</div>
                          </div>
                        </div>
                        {/* Track badges */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {u.tracks.map(t => (
                            <span key={t} className="bg-slate-700 text-slate-400 text-xs px-2 py-0.5 rounded-full">{t}</span>
                          ))}
                        </div>
                        {/* Probability bar */}
                        <div className="bg-slate-900 rounded-full h-2">
                          <div className="h-2 rounded-full transition-all" style={{width: prob + "%", backgroundColor: getOverrideColor(u)}}></div>
                        </div>
                      </div>
                      {/* Card Body */}
                      <div className="p-4 space-y-2">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex justify-between bg-slate-900 rounded-lg px-3 py-2">
                            <span className="text-slate-400">GPA Req</span>
                            <span className="text-white font-semibold">{u.minGPA}+</span>
                          </div>
                          <div className="flex justify-between bg-slate-900 rounded-lg px-3 py-2">
                            <span className="text-slate-400">SAT Req</span>
                            <span className="text-white font-semibold">{u.minSAT > 0 ? u.minSAT : "N/A"}</span>
                          </div>
                          <div className="flex justify-between bg-slate-900 rounded-lg px-3 py-2">
                            <span className="text-slate-400">IELTS Req</span>
                            <span className="text-white font-semibold">{u.minIELTS}+</span>
                          </div>
                          <div className="flex justify-between bg-slate-900 rounded-lg px-3 py-2">
                            <span className="text-slate-400">Annual Cost</span>
                            <span className="text-white font-semibold">${u.cost.toLocaleString()}</span>
                          </div>
                        </div>
                        {/* Tier Badge */}
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-xs text-slate-400">Match Tier</span>
                          <span className="text-xs font-bold px-3 py-1 rounded-full" style={{backgroundColor: tier.color + "20", color: tier.color}}>{tier.label}</span>
                        </div>
                        {/* Visa Status */}
                        <div className="text-xs text-slate-400 bg-slate-900 rounded-lg px-3 py-2">
                          <span className="text-slate-500">Visa: </span>{u.visaStatus}
                        </div>
                        {/* Budget Guardrail Banner */}
                        {budgetOk ? (
                          <div className="bg-green-50010 border border-green-50030 rounded-lg px-3 py-2 text-xs text-green-400 font-semibold">✅ Financial Compliance Verified</div>
                        ) : (
                          <div className="bg-red-50010 border border-red-50030 rounded-lg px-3 py-2 text-xs text-red-400 font-semibold animate-pulse">⚠️ Visa Financial Proof Risk: Budget below legal immigration criteria</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {/* ── COLUMN 3: Human-on-the-Loop Oversight Desk ────────── */}
        <div className="w-[30%] overflow-y-auto bg-slate-900" style={{minWidth:320}}>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold bg-teal-500 text-slate-900 px-2 py-0.5 rounded">3</span>
              <h2 className="text-base font-bold text-white">Human-on-the-Loop Oversight Desk</h2>
            </div>

            {/* Guardrail Status */}
            <div className="bg-slate-800 border border-teal-50030 rounded-xl p-3 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-teal-400">GUARDRAIL STATUS: ACTIVE</span>
              </div>
              <p className="text-xs text-slate-400">Monitoring structural anomalies and policy decay.</p>
            </div>

            {!hasRun ? (
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
                <p className="text-slate-500 text-sm text-xs">Run the matching engine first to activate oversight controls.</p>
              </div>
            ) : (
              <div className="space-y-4">

                {/* Probability Offset */}
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">Manual Probability Offset (+/- %)</p>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setOffset(o => Math.max(-30, o - 5))} className="w-9 h-9 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-bold text-lg flex items-center justify-center transition-colors">-</button>
                    <div className="flex-1 text-center bg-slate-900 rounded-lg py-2">
                      <span className="text-lg font-extrabold text-white">{offset > 0 ? "+" : ""}{offset}%</span>
                    </div>
                    <button onClick={() => setOffset(o => Math.min(30, o + 5))} className="w-9 h-9 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-bold text-lg flex items-center justify-center transition-colors">+</button>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => setOffset(-15)} className="flex-1 text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg py-1 transition-colors">-15%</button>
                    <button onClick={() => setOffset(0)} className="flex-1 text-xs bg-teal-600 hover:bg-teal-500 text-slate-900 font-bold rounded-lg py-1 transition-colors">Reset</button>
                    <button onClick={() => setOffset(15)} className="flex-1 text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg py-1 transition-colors">+15%</button>
                  </div>
                </div>

                {/* Override Tier */}
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">Override System Tier</p>
                  <select value={overrideTier} onChange={e => setOverrideTier(e.target.value)} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-teal-500">
                    <option>Maintain System Evaluation</option>
                    <option>Manually Elevate Status</option>
                    <option>Manually Downgrade Status</option>
                  </select>
                  {overrideTier !== "Maintain System Evaluation" && (
                    <div className={overrideTier === "Manually Elevate Status" ? "mt-2 text-xs px-3 py-2 rounded-lg font-semibold bg-green-500/15 text-green-400 border border-green-500/30" : "mt-2 text-xs px-3 py-2 rounded-lg font-semibold bg-red-500/15 text-red-400 border border-red-500/30"}>
                      {overrideTier === "Manually Elevate Status" ? "All universities elevated to Target tier" : "All universities downgraded"}
                    </div>
                  )}
                </div>

                {/* Advisory Notes */}
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">Human Advisory Adjustments & Strategic Notes</p>
                  <textarea value={advisorNotes} onChange={e => setAdvisorNotes(e.target.value)} placeholder="Enter strategic placement notes, context for overrides, student preferences..." rows={4} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-teal-500 resize-none" />
                </div>

                {/* Approve & Download */}
                <button onClick={handleDownload} className="w-full bg-teal-600 hover:bg-teal-500 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all text-sm flex items-center justify-center gap-2">
                  Approve & Download Final Education Roadmap 📄
                </button>
              </div>
            )}
          </div>
        </div>
        {/* ── COLUMN 3: Human-on-the-Loop Oversight Desk ────────── */}
        <div className="w-[30%] overflow-y-auto bg-slate-900" style={{minWidth:320}}>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold bg-teal-500 text-slate-900 px-2 py-0.5 rounded">3</span>
              <h2 className="text-base font-bold text-white">Human-on-the-Loop Oversight Desk</h2>
            </div>

            {/* Guardrail Status */}
            <div className="bg-slate-800 border border-teal-500/30 rounded-xl p-3 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-teal-400">GUARDRAIL STATUS: ACTIVE</span>
              </div>
              <p className="text-xs text-slate-400">Monitoring structural anomalies and policy decay.</p>
            </div>

            {!hasRun ? (
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
                <p className="text-slate-500 text-sm text-xs">Run the matching engine first to activate oversight controls.</p>
              </div>
            ) : (
              <div className="space-y-4">

                {/* Probability Offset */}
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">Manual Probability Offset (+/- %)</p>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setOffset(o => Math.max(-30, o - 5))} className="w-9 h-9 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-bold text-lg flex items-center justify-center transition-colors">-</button>
                    <div className="flex-1 text-center bg-slate-900 rounded-lg py-2">
                      <span className="text-lg font-extrabold text-white">{offset > 0 ? "+" : ""}{offset}%</span>
                    </div>
                    <button onClick={() => setOffset(o => Math.min(30, o + 5))} className="w-9 h-9 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-bold text-lg flex items-center justify-center transition-colors">+</button>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => setOffset(-15)} className="flex-1 text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg py-1 transition-colors">-15%</button>
                    <button onClick={() => setOffset(0)} className="flex-1 text-xs bg-teal-600 hover:bg-teal-500 text-slate-900 font-bold rounded-lg py-1 transition-colors">Reset</button>
                    <button onClick={() => setOffset(15)} className="flex-1 text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg py-1 transition-colors">+15%</button>
                  </div>
                </div>

                {/* Override Tier */}
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">Override System Tier</p>
                  <select value={overrideTier} onChange={e => setOverrideTier(e.target.value)} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-teal-500">
                    <option>Maintain System Evaluation</option>
                    <option>Manually Elevate Status</option>
                    <option>Manually Downgrade Status</option>
                  </select>
                  {overrideTier !== "Maintain System Evaluation" && (
                    <div className={`mt-2 text-xs px-3 py-2 rounded-lg font-semibold ${overrideTier === "Manually Elevate Status" ? "bg-green-500/15 text-green-400 border border-green-500/30" : "bg-red-500/15 text-red-400 border border-red-500/30"}`}>
                      {overrideTier === "Manually Elevate Status" ? "All universities elevated to Target tier" : "All universities downgraded"}
                    </div>
                  )}
                </div>

                {/* Advisory Notes */}
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                  <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">Human Advisory Adjustments & Strategic Notes</p>
                  <textarea value={advisorNotes} onChange={e => setAdvisorNotes(e.target.value)} placeholder="Enter strategic placement notes, context for overrides, student preferences..." rows={4} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-teal-500 resize-none" />
                </div>

                {/* Approve & Download */}
                <button onClick={handleDownload} className="w-full bg-teal-600 hover:bg-teal-500 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all text-sm flex items-center justify-center gap-2">
                  Approve & Download Final Education Roadmap
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* ─── ROADMAP MODAL ───────────────────────────────────────────── */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-600 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="bg-teal-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎉</span>
                <div>
                  <div className="font-bold text-slate-900">Roadmap Approved & Compiled</div>
                  <div className="text-xs text-teal-800">Human-verified Global Education Roadmap</div>
                </div>
              </div>
              <button onClick={() => setShowModal(false)} className="text-slate-900 hover:text-slate-700 font-bold text-xl">x</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">Matched Universities</p>
                <div className="space-y-2">
                  {results.length === 0 ? (
                    <p className="text-sm text-slate-400">No universities were matched. Run the engine first.</p>
                  ) : (
                    results.map(u => {
                      const prob = effectiveProb(u);
                      return (
                        <div key={u.id} className="flex items-center justify-between bg-slate-900 rounded-lg px-4 py-2 border border-slate-700">
                          <div className="flex items-center gap-2">
                            <span>{u.emoji}</span>
                            <span className="text-sm text-white font-medium">{u.name}, {u.country}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold" style={{color: getOverrideColor(u)}}>{prob}%</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">{getOverrideBadge(u).label}</span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
              {advisorNotes && (
                <div>
                  <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">Consultant Notes</p>
                  <div className="bg-slate-900 rounded-lg px-4 py-3 border border-slate-700 text-sm text-slate-300 max-h-32 overflow-y-auto">{advisorNotes}</div>
                </div>
              )}
              <button onClick={() => setShowModal(false)} className="w-full bg-teal-600 hover:bg-teal-500 text-slate-900 font-bold py-2.5 rounded-xl text-sm transition-all">Close & Return to Dashboard</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

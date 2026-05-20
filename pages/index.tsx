import { useState } from "react";

const UNIVERSITIES = [
  { id: 1, name: "Harvard University", country: "US", location: "Cambridge, MA", emoji: "H", accentColor: "#7c3aed", tracks: ["STEM & Robotics", "International Business & Economics", "Humanities & Research"], minGPA: 3.9, minIELTS: 7.5, cost: 65000, visaStatus: "High legal financial proof required", visaRisk: "high" },
  { id: 2, name: "Technical University of Munich", country: "Germany", location: "Munich", emoji: "T", accentColor: "#0891b2", tracks: ["STEM & Robotics"], minGPA: 3.4, minIELTS: 6.5, cost: 6000, visaStatus: "Highly favorable postgrad stay-back options", visaRisk: "low" },
  { id: 3, name: "National University of Singapore", country: "Singapore", location: "Singapore", emoji: "N", accentColor: "#ea580c", tracks: ["International Business & Economics", "STEM & Robotics"], minGPA: 3.8, minIELTS: 7.0, cost: 35000, visaStatus: "Strict localized enrollment quotas", visaRisk: "medium" },
  { id: 4, name: "Erasmus University Rotterdam", country: "Netherlands", location: "Rotterdam", emoji: "R", accentColor: "#0d9488", tracks: ["International Business & Economics"], minGPA: 3.5, minIELTS: 7.0, cost: 22000, visaStatus: "Standard EU student path", visaRisk: "low" },
  { id: 5, name: "University of Oxford", country: "UK", location: "Oxford", emoji: "O", accentColor: "#1d4ed8", tracks: ["Humanities & Research", "STEM & Robotics"], minGPA: 3.9, minIELTS: 7.5, cost: 52000, visaStatus: "Premium visa application checks", visaRisk: "medium" },
  { id: 6, name: "KAIST", country: "South Korea", location: "Daejeon", emoji: "K", accentColor: "#db2777", tracks: ["STEM & Robotics"], minGPA: 3.5, minIELTS: 6.5, cost: 15000, visaStatus: "Competitive regional tech incentives", visaRisk: "low" },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  if (currentPage === "home") {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
        <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-teal-500 rounded-lg flex items-center justify-center text-slate-900 font-extrabold text-lg">E</div>
            <div>
              <div className="font-bold text-white text-lg leading-none">EduCompass AI</div>
              <div className="text-xs text-teal-400">Predictive Global University Matchmaker</div>
            </div>
          </div>
        </nav>

        <section className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-xs text-teal-400 mb-6">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
            Multi-Agent AI Engine — Live Simulation
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            Navigate Global Higher Education<br />
            <span className="text-teal-400">with Multi-Agent AI</span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            We simulate <strong className="text-slate-200">admissions probabilities</strong> and cross-border <strong className="text-slate-200">visa risk scores</strong> for international students — powered by multi-agent AI that models each university&apos;s regulatory environment.
          </p>
          <button onClick={() => setCurrentPage("dashboard")} className="bg-teal-600 hover:bg-teal-500 text-slate-900 font-bold px-8 py-4 rounded-xl text-base transition-all">
            Launch Matchmaker Dashboard
          </button>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-16">
          <p className="text-center text-xs font-bold text-teal-400 uppercase tracking-widest mb-8">AI-Powered 3-Step Workflow</p>
          <div className="grid grid-cols-5 gap-4 items-center">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center">
              <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 text-lg font-extrabold text-teal-400">1</div>
              <div className="text-xs font-bold text-white mb-2">Student Data Entry</div>
              <div className="text-xs text-slate-400 space-y-1 text-left">
                <div className="bg-slate-900 rounded px-2 py-1 border-l-2 border-teal-500">GPA 3.7 | SAT 1480</div>
                <div className="bg-slate-900 rounded px-2 py-1 border-l-2 border-teal-500">Budget $45,000/yr</div>
                <div className="bg-slate-900 rounded px-2 py-1 border-l-2 border-teal-500">Region: N. America</div>
              </div>
            </div>
            <div className="text-center text-teal-400 text-xl">→</div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center">
              <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 text-lg font-extrabold text-teal-400">2</div>
              <div className="text-xs font-bold text-white mb-2">AI Multi-Agent</div>
              <div className="text-xs text-slate-400 space-y-1 text-left">
                <div className="bg-slate-900 rounded px-2 py-1 border-l-2 border-teal-400">Harvard <span className="text-teal-400 font-bold">78% Target</span></div>
                <div className="bg-slate-900 rounded px-2 py-1 border-l-2 border-teal-400">TUM <span className="text-amber-400 font-bold">62% Reach</span></div>
                <div className="bg-slate-900 rounded px-2 py-1 border-l-2 border-amber-400">NUS <span className="text-amber-400 font-bold">45% Reach</span></div>
              </div>
            </div>
            <div className="text-center text-teal-400 text-xl">→</div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center">
              <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 text-lg font-extrabold text-teal-400">3</div>
              <div className="text-xs font-bold text-white mb-2">Human Governance</div>
              <div className="text-xs text-slate-400 space-y-1 text-left">
                <div className="bg-slate-900 rounded px-2 py-1 border-l-2 border-teal-300">Override Tiering</div>
                <div className="bg-slate-900 rounded px-2 py-1 border-l-2 border-teal-300">Advisory Notes</div>
                <div className="bg-slate-900 rounded px-2 py-1 border-l-2 border-teal-300">Approve Roadmap</div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-16">
          <p className="text-center text-xs font-bold text-teal-400 uppercase tracking-widest mb-8">Simulated University Match Preview</p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { letter: "H", name: "Ivy League Elite", loc: "United States", prob: "42%", probColor: "text-amber-400", cost: "$72,000", visa: "OPT quota near limit for Intl applicants", visaAlert: true, accent: "#7c3aed" },
              { letter: "T", name: "European Tech Hub", loc: "Germany", prob: "78%", probColor: "text-teal-400", cost: "EUR6,000", visa: "18mo post-study stay-back available", visaAlert: false, accent: "#0891b2" },
              { letter: "N", name: "Asian Global Business Hub", loc: "Singapore", prob: "61%", probColor: "text-teal-400", cost: "SGD55,000", visa: "24mo stay-back, business hub clear", visaAlert: false, accent: "#ea580c" },
            ].map((u, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                <div className="p-4" style={{borderBottom: "1px solid #1e293b"}}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-extrabold" style={{backgroundColor: u.accent + "40", color: u.accent}}>{u.letter}</div>
                    <div>
                      <div className="font-bold text-white text-sm">{u.name}</div>
                      <div className="text-xs text-slate-400">{u.loc}</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-xs text-slate-400">Admission</div>
                      <div className={"text-xl font-extrabold " + u.probColor}>{u.prob}</div>
                    </div>
                  </div>
                  <div className="bg-slate-900 rounded-lg px-3 py-2 flex justify-between text-xs">
                    <span className="text-slate-400">Cost</span>
                    <span className="text-white font-semibold">{u.cost}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className={"text-xs font-semibold px-3 py-2 rounded-lg border " + (u.visaAlert ? "text-amber-400" : "text-green-400")} style={{borderColor: u.accent + "60", backgroundColor: "transparent"}}>
                    {u.visaAlert ? "⚠ " : "✅ "}{u.visa}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-20">
          <p className="text-center text-xs font-bold text-teal-400 uppercase tracking-widest mb-8">Who Is This For</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center text-lg font-bold text-teal-400">S</div>
                <h3 className="font-bold text-white text-sm">Graduating High School Students</h3>
              </div>
              <div className="space-y-2 text-xs text-slate-400">
                {["First-time cross-border applicants", "Need safety/target/reach strategy", "Visa & budget constraint evaluation", "Essay & extracurricular framing"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2"><span className="text-teal-400 font-bold">✓</span>{item}</div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center text-lg font-bold text-teal-400">C</div>
                <h3 className="font-bold text-white text-sm">Independent Academic Consultants</h3>
              </div>
              <div className="space-y-2 text-xs text-slate-400">
                {["Managing 10-50+ student portfolios", "AI-assisted probability tiering", "Cross-jurisdiction visa risk view", "Human-on-loop approval workflow"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2"><span className="text-teal-400 font-bold">✓</span>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-600">
          © 2026 EduCompass AI — Predictive Global University Matchmaker
        </footer>
      </div>
    );
  }

                <select value={overrideTier} onChange={e => setOverrideTier(e.target.value)} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-teal-500">
                  <option>Maintain System Evaluation</option>
                  <option>Manually Elevate Status</option>
                  <option>Manually Downgrade Status</option>
                </select>
                {overrideTier !== "Maintain System Evaluation" && (
                  <div className={"mt-2 text-xs px-3 py-2 rounded-lg font-semibold " + (overrideTier === "Manually Elevate Status" ? "bg-green-500/15 text-green-400 border border-green-500/30" : "bg-red-500/15 text-red-400 border border-red-500/30")}>
                    {overrideTier === "Manually Elevate Status" ? "All universities elevated to Target tier" : "All universities downgraded"}
                  </div>
                )}
              </div>

              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">Human Advisory Adjustments &amp; Strategic Notes</p>
                <textarea value={advisorNotes} onChange={e => setAdvisorNotes(e.target.value)} placeholder="Enter strategic placement notes, context for overrides, student preferences..." rows={4} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-teal-500 resize-none" />
              </div>

              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">Manual Override Checkboxes</p>
                <div className="space-y-2">
                  {results.map(u => (
                    <div key={u.id} className="flex items-center justify-between bg-slate-900 rounded-lg px-3 py-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" checked={overrideResults[u.id] || false} onChange={() => toggleOverride(u.id)} className="w-4 h-4 accent-teal-500" />
                        <span className="text-xs text-white">{u.name}</span>
                      </div>
                      <span className="text-xs text-slate-400">{u.country}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={() => setShowModal(true)} className="w-full bg-teal-600 hover:bg-teal-500 text-slate-900 font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
                Approve &amp; Download Final Education Roadmap
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ROADMAP MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-600 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="bg-teal-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">T</span>
                <div>
                  <div className="font-bold text-slate-900">Roadmap Approved &amp; Compiled</div>
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
                  ) : results.map(u => {
                    const prob = effectiveProb(u);
                    const badge = getFinalBadge(u);
                    return (
                      <div key={u.id} className="flex items-center justify-between bg-slate-900 rounded-lg px-4 py-2 border border-slate-700">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold" style={{color: u.accentColor}}>{u.emoji}</span>
                          <span className="text-sm text-white font-medium">{u.name}, {u.country}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold" style={{color: badge.color}}>{prob}%</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">{badge.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {advisorNotes && (
                <div>
                  <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">Consultant Notes</p>
                  <div className="bg-slate-900 rounded-lg px-4 py-3 border border-slate-700 text-sm text-slate-300 max-h-32 overflow-y-auto">{advisorNotes}</div>
                </div>
              )}
              <button onClick={() => setShowModal(false)} className="w-full bg-teal-600 hover:bg-teal-500 text-slate-900 font-bold py-2.5 rounded-xl text-sm transition-all">Close &amp; Return to Dashboard</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

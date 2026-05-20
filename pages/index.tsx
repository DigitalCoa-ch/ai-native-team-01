export default function Home() {
  return (
    <div style={{ backgroundColor: "#0a1628", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif", color: "#e2e8f0" }}>

      <nav style={{ backgroundColor: "#0d1f38", borderBottom: "1px solid #1e3a5f", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: 36, height: 36, backgroundColor: "#14b8a6", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.1rem", color: "#0a1628" }}>E</div>
          <span style={{ fontWeight: 700, fontSize: "1.25rem", color: "#fff" }}>EduCompass AI</span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.875rem" }}>
          <span style={{ color: "#94a3b8", cursor: "pointer" }}>Platform</span>
          <span style={{ color: "#94a3b8", cursor: "pointer" }}>Universities</span>
          <span style={{ color: "#94a3b8", cursor: "pointer" }}>Consultants</span>
          <span style={{ color: "#14b8a6", cursor: "pointer", fontWeight: 600 }}>Launch Dashboard</span>
        </div>
      </nav>

      <section style={{ padding: "5rem 2rem", textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#1e3a5f", borderRadius: 9999, padding: "0.35rem 1rem", fontSize: "0.8rem", color: "#5eead4", marginBottom: "1.5rem", border: "1px solid #14b8a640" }}>
          <span style={{ width: 6, height: 6, backgroundColor: "#14b8a6", borderRadius: "50%" }}></span>
          Multi-Agent AI Engine — Live Simulation
        </div>
        <h1 style={{ fontSize: "2.75rem", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: "1.25rem" }}>
          Navigate Global Higher Education<br />
          <span style={{ color: "#14b8a6" }}>with Multi-Agent AI</span>
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#94a3b8", maxWidth: 640, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          We simulate <strong style={{ color: "#e2e8f0" }}>admissions probabilities</strong> and cross-border <strong style={{ color: "#e2e8f0" }}>visa risk scores</strong> for international students — powered by multi-agent AI that models each university&apos;s regulatory environment.
        </p>
        <button style={{ backgroundColor: "#14b8a6", color: "#0a1628", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2.25rem", borderRadius: 8, border: "none", cursor: "pointer" }}>
          Launch Matchmaker Dashboard
        </button>
      </section>

      <section style={{ padding: "3rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#14b8a6", fontWeight: 600, marginBottom: "2rem", textTransform: "uppercase" }}>AI-Powered 3-Step Workflow</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: "1rem", alignItems: "center" }}>          <div style={{ backgroundColor: "#0d1f38", border: "1px solid #1e3a5f", borderRadius: 12, padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: 28, height: 28, backgroundColor: "#1e3a5f", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: "#14b8a6", fontWeight: 700 }}>1</div>
              <span style={{ fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}>Student Data Entry</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.75rem", color: "#94a3b8" }}>
              {["GPA 3.7 | SAT 1480 | IELTS 7.5", "Budget: $45,000 / yr", "Region: North America + EU", "Visa Stay-Back: Yes"].map((item, i) => (
                <div key={i} style={{ backgroundColor: "#0a1628", borderRadius: 6, padding: "0.45rem 0.65rem", borderLeft: "3px solid #14b8a6" }}>{item}</div>
              ))}
            </div>
          </div>
          <div style={{ color: "#14b8a6", fontSize: "1.5rem", textAlign: "center" }}>→</div>
          <div style={{ backgroundColor: "#0d1f38", border: "1px solid #1e3a5f", borderRadius: 12, padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: 28, height: 28, backgroundColor: "#1e3a5f", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: "#14b8a6", fontWeight: 700 }}>2</div>
              <span style={{ fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}>AI Multi-Agent Simulation</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.75rem" }}>
              {[{ label: "Ivy League Elite (US)", prob: 78, color: "#14b8a6" }, { label: "Euro Tech Hub (DE)", prob: 62, color: "#5eead4" }, { label: "Asian Biz Hub (SG)", prob: 45, color: "#f59e0b" }].map((u, i) => (
                <div key={i} style={{ backgroundColor: "#0a1628", borderRadius: 6, padding: "0.45rem 0.65rem", borderLeft: "3px solid " + u.color }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                    <span style={{ color: "#94a3b8" }}>{u.label}</span>
                    <span style={{ color: u.color, fontWeight: 700 }}>{u.prob}%</span>
                  </div>
                  <div style={{ backgroundColor: "#1e3a5f", borderRadius: 4, height: 4 }}>
                    <div style={{ backgroundColor: u.color, borderRadius: 4, height: 4, width: u.prob + "%" }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ color: "#14b8a6", fontSize: "1.5rem", textAlign: "center" }}>→</div>
          <div style={{ backgroundColor: "#0d1f38", border: "1px solid #1e3a5f", borderRadius: 12, padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: 28, height: 28, backgroundColor: "#1e3a5f", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: "#14b8a6", fontWeight: 700 }}>3</div>
              <span style={{ fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}>Human-on-the-Loop Governance</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.75rem", color: "#94a3b8" }}>
              {["Override Probability Tiering", "Add Advisory Adjustment Notes", "Regulatory Safety Rail Checks", "Approve & Download Roadmap"].map((item, i) => (
                <div key={i} style={{ backgroundColor: "#0a1628", borderRadius: 6, padding: "0.45rem 0.65rem", borderLeft: "3px solid #5eead4" }}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "3rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#14b8a6", fontWeight: 600, marginBottom: "2rem", textTransform: "uppercase" }}>Simulated University Match Preview</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          <div style={{ backgroundColor: "#0d1f38", border: "1px solid #1e3a5f", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ backgroundColor: "#1e3a5f", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ width: 44, height: 44, backgroundColor: "#7c3aed", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>🎓</div>
                <div>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: "1rem" }}>Ivy League Elite</div>
                  <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>United States</div>
                </div>
              </div>
              <div style={{ backgroundColor: "#0a1628", borderRadius: 8, padding: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Admission Probability</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#f59e0b" }}>42%</span>
              </div>
            </div>
            <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#94a3b8" }}><span>GPA Req</span><span style={{ color: "#e2e8f0", fontWeight: 600 }}>3.85+</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#94a3b8" }}><span>Annual Cost</span><span style={{ color: "#e2e8f0", fontWeight: 600 }}>$72,000</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#94a3b8" }}><span>Stay-Back Visa</span><span style={{ color: "#f59e0b", fontWeight: 600 }}>⚠ 12mo / OPT</span></div>
              <div style={{ backgroundColor: "#f59e0b15", border: "1px solid #f59e0b40", borderRadius: 6, padding: "0.5rem 0.75rem" }}>
                <span style={{ fontSize: "0.72rem", color: "#f59e0b", fontWeight: 600 }}>⚠ VISA RISK: Stay-back quota near limit</span>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#0d1f38", border: "1px solid #1e3a5f", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ backgroundColor: "#1e3a5f", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ width: 44, height: 44, backgroundColor: "#0891b2", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>🏛️</div>
                <div>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: "1rem" }}>European Public Tech Hub</div>
                  <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Germany</div>
                </div>
              </div>
              <div style={{ backgroundColor: "#0a1628", borderRadius: 8, padding: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Admission Probability</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#14b8a6" }}>78%</span>
              </div>
            </div>
            <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#94a3b8" }}><span>GPA Req</span><span style={{ color: "#e2e8f0", fontWeight: 600 }}>3.2+</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#94a3b8" }}><span>Annual Cost</span><span style={{ color: "#e2e8f0", fontWeight: 600 }}>EUR18,000</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#94a3b8" }}><span>Stay-Back Visa</span><span style={{ color: "#22c55e", fontWeight: 600 }}>✅ 18mo</span></div>
              <div style={{ backgroundColor: "#22c55e15", border: "1px solid #22c55e40", borderRadius: 6, padding: "0.5rem 0.75rem" }}>
                <span style={{ fontSize: "0.72rem", color: "#22c55e", fontWeight: 600 }}>✅ VISA CLEAR: Post-study stay-back available</span>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#0d1f38", border: "1px solid #1e3a5f", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ backgroundColor: "#1e3a5f", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ width: 44, height: 44, backgroundColor: "#ea580c", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>🌏</div>
                <div>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: "1rem" }}>Asian Global Business Hub</div>
                  <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Singapore</div>
                </div>
              </div>
              <div style={{ backgroundColor: "#0a1628", borderRadius: 8, padding: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Admission Probability</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#14b8a6" }}>61%</span>
              </div>
            </div>
            <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#94a3b8" }}><span>GPA Req</span><span style={{ color: "#e2e8f0", fontWeight: 600 }}>3.5+</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#94a3b8" }}><span>Annual Cost</span><span style={{ color: "#e2e8f0", fontWeight: 600 }}>SGD55,000</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#94a3b8" }}><span>Stay-Back Visa</span><span style={{ color: "#22c55e", fontWeight: 600 }}>✅ 24mo</span></div>
              <div style={{ backgroundColor: "#22c55e15", border: "1px solid #22c55e40", borderRadius: 6, padding: "0.5rem 0.75rem" }}>
                <span style={{ fontSize: "0.72rem", color: "#22c55e", fontWeight: 600 }}>✅ VISA CLEAR: Long stay-back, business hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "3rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#14b8a6", fontWeight: 600, marginBottom: "2rem", textTransform: "uppercase" }}>Who Is This For</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div style={{ backgroundColor: "#0d1f38", border: "1px solid #1e3a5f", borderRadius: 12, padding: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ width: 40, height: 40, backgroundColor: "#14b8a620", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>🎒</div>
              <h3 style={{ fontWeight: 700, color: "#fff", fontSize: "1.1rem" }}>Graduating High School Students</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["First-time cross-border applicants", "Need strategy for safety/target/reach schools", "Visa & budget constraints to evaluate", "Personal essay & extracurricular framing"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "#94a3b8" }}>
                  <span style={{ color: "#14b8a6", fontWeight: 700 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: "#0d1f38", border: "1px solid #1e3a5f", borderRadius: 12, padding: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ width: 40, height: 40, backgroundColor: "#5eead420", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>💼</div>
              <h3 style={{ fontWeight: 700, color: "#fff", fontSize: "1.1rem" }}>Independent Academic Consultants</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["Managing 10-50+ student portfolios", "Need AI-assisted probability tiering", "Cross-jurisdiction visa risk overview", "Human-on-loop final approval workflow"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "#94a3b8" }}>
                  <span style={{ color: "#5eead4", fontWeight: 700 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #1e3a5f", padding: "2rem", textAlign: "center", color: "#475569", fontSize: "0.8rem" }}>
        © 2026 EduCompass AI — Predictive Global University Matchmaker
      </footer>

    </div>
  );
}

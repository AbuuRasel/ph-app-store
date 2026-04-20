export default function NotFoundPage() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* 404 number */}
        <div style={styles.heroWrap}>
          <div style={styles.heroNumber}>404</div>
          <span style={styles.badge}>!</span>
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        <h1 style={styles.heading}>Page Not Found</h1>
        <p style={styles.subtext}>
          The page you're looking for has vanished into the void.
          <br />
          Maybe it moved, or never existed at all.
        </p>

        {/* Links card */}
        <div style={styles.card}>
          <p style={styles.cardLabel}>Try one of these instead</p>
          <ul style={styles.linkList}>
            {[
              {
                href: "/",
                color: "#6366f1",
                label: "Home",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                href: "/search",
                color: "#a855f7",
                label: "Search",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
              },
              {
                href: "/contact",
                color: "#ec4899",
                label: "Contact Support",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                ),
              },
            ].map(({ href, color, label, icon }) => (
              <li key={href}>
                <a href={href} style={styles.linkItem}>
                  <span style={{ color }}>{icon}</span>
                  <span style={styles.linkLabel}>{label}</span>
                  <span style={styles.linkArrow}>→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div style={styles.btnRow}>
          <button style={styles.btnPrimary} onClick={() => window.history.back()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Go Back
          </button>
          <a href="/" style={styles.btnOutline}>Take Me Home</a>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f3f4f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
  },
  container: {
    textAlign: "center",
    maxWidth: "480px",
    width: "100%",
  },
  heroWrap: {
    position: "relative",
    display: "inline-block",
    marginBottom: "24px",
  },
  heroNumber: {
    fontSize: "clamp(5rem, 18vw, 9rem)",
    fontWeight: 900,
    lineHeight: 1,
    letterSpacing: "-4px",
    background: "linear-gradient(135deg, #6366f1, #a855f7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    userSelect: "none",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-28px",
    background: "#ef4444",
    color: "#fff",
    fontSize: "12px",
    fontWeight: 700,
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(239,68,68,0.4)",
  },
  divider: {
    width: "80px",
    height: "3px",
    background: "linear-gradient(90deg, #6366f1, #a855f7)",
    borderRadius: "99px",
    margin: "0 auto 20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#111827",
    margin: "0 0 10px",
  },
  subtext: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: 1.7,
    margin: "0 0 32px",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "20px",
    marginBottom: "28px",
    textAlign: "left",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },
  cardLabel: {
    fontSize: "11px",
    fontWeight: 600,
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    margin: "0 0 12px",
  },
  linkList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  linkItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 12px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#374151",
    fontSize: "14px",
    cursor: "pointer",
  },
  linkLabel: {
    flex: 1,
    fontWeight: 500,
  },
  linkArrow: {
    color: "#d1d5db",
    fontSize: "14px",
  },
  btnRow: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "10px 20px",
    background: "linear-gradient(135deg, #6366f1, #a855f7)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(99,102,241,0.35)",
  },
  btnOutline: {
    display: "inline-flex",
    alignItems: "center",
    padding: "10px 20px",
    background: "transparent",
    color: "#6366f1",
    border: "1.5px solid #6366f1",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
  },
};
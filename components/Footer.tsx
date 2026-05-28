export function Footer() {
  return (
    <footer style={{
      borderTop: "0.5px solid rgba(255,255,255,0.07)",
      padding: "1.75rem 1.5rem",
    }}>
      <div style={{
        maxWidth: "72rem",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <p style={{ fontSize: "0.78rem", color: "#3f3f46" }}>
          © 2026 Breno Rodrigues
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="https://github.com/BrenoRodrigues05" target="_blank" rel="noreferrer"
            style={{ fontSize: "0.78rem", color: "#3f3f46", textDecoration: "none" }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/brenorodrigues05/" target="_blank" rel="noreferrer"
            style={{ fontSize: "0.78rem", color: "#3f3f46", textDecoration: "none" }}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
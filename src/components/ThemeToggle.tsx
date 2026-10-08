import { useTheme } from "./ThemeProvider"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === "ocean" ? "Arctic / Violet" : "Ocean / Electric"

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Activer le thème ${nextTheme}`}
      aria-pressed={theme === "arctic"}
      title={`Thème actuel : ${
        theme === "ocean" ? "Ocean / Electric" : "Arctic / Violet"
      }`}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <i className="theme-dot-ocean" />
        <i className="theme-dot-arctic" />
        <b className="theme-toggle-thumb" />
      </span>
      <span className="theme-toggle-label">
        {theme === "ocean" ? "Ocean" : "Arctic"}
      </span>
    </button>
  )
}

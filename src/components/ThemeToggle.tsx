import { useTheme } from "./ThemeProvider"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === "ocean" ? "Amber / Gold" : "Ocean / Electric"

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Activer le thème ${nextTheme}`}
      aria-pressed={theme === "amber"}
      title={`Thème actuel : ${
        theme === "ocean" ? "Ocean / Electric" : "Amber / Gold"
      }`}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <i className="theme-dot-ocean" />
        <i className="theme-dot-amber" />
        <b className="theme-toggle-thumb" />
      </span>
      <span className="theme-toggle-label">
        {theme === "ocean" ? "Ocean" : "Amber"}
      </span>
    </button>
  )
}

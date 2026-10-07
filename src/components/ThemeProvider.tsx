import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type ThemeName = "ocean" | "amber"

type ThemeContextValue = {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getInitialTheme(): ThemeName {
  if (typeof window === "undefined") return "ocean"
  try {
    return window.localStorage.getItem("portfolio-theme") === "amber"
      ? "amber"
      : "ocean"
  } catch {
    return "ocean"
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(getInitialTheme)

  const setTheme = (nextTheme: ThemeName) => {
    document.documentElement.classList.add("theme-transitioning")
    setThemeState(nextTheme)
    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning")
    }, 420)
  }

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = "dark"
    try {
      window.localStorage.setItem("portfolio-theme", theme)
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === "ocean" ? "amber" : "ocean"),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider")
  }
  return context
}

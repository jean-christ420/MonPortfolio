import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

export type Theme = "ocean" | "arctic"

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "ocean"
  try {
    const storedTheme = window.localStorage.getItem("portfolio-theme")
    return storedTheme === "arctic" || storedTheme === "amber"
      ? "arctic"
      : "ocean"
  } catch {
    return "ocean"
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)
  const transitionTimer = useRef<number | undefined>(undefined)

  const setTheme = useCallback((nextTheme: Theme) => {
    document.documentElement.classList.add("theme-transitioning")
    setThemeState(nextTheme)
    if (transitionTimer.current !== undefined) {
      window.clearTimeout(transitionTimer.current)
    }
    transitionTimer.current = window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning")
    }, 420)
  }, [])

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme =
      theme === "arctic" ? "light" : "dark"
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "arctic" ? "#f5f7ff" : "#020f18")
    try {
      window.localStorage.setItem("portfolio-theme", theme)
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
  }, [theme])

  useEffect(
    () => () => {
      if (transitionTimer.current !== undefined) {
        window.clearTimeout(transitionTimer.current)
      }
      document.documentElement.classList.remove("theme-transitioning")
    },
    [],
  )

  const toggleTheme = useCallback(
    () => setTheme(theme === "ocean" ? "arctic" : "ocean"),
    [setTheme, theme],
  )

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [setTheme, theme, toggleTheme],
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

import { RouterProvider } from "react-router"
import ExperienceEnhancer from "../components/ExperienceEnhancer"
import { ThemeProvider } from "../components/ThemeProvider"
import { router } from "./routes"

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <ExperienceEnhancer />
    </ThemeProvider>
  )
}

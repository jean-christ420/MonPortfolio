import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/App"
import "./index.css"
import "./polish.css"
import { SpeedInsights } from "@vercel/speed-insights/react"

const supportsVercelSpeedInsights =
  typeof window !== "undefined" &&
  !["localhost", "127.0.0.1", "::1", "[::1]"].includes(
    window.location.hostname,
  )

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {supportsVercelSpeedInsights && <SpeedInsights />}
  </React.StrictMode>,
)

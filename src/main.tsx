import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/App"
import "./index.css"
import "./polish.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

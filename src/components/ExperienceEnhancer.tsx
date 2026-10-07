import { useEffect } from "react"

const revealItemSelectors = [
  ".project-card",
  ".projects-page-card",
  ".service-card",
  ".testimonial-card",
  ".skill",
  ".skill-matrix-card",
  ".expertise-card",
  ".practice-card",
  ".value-card",
  ".interest-card",
  ".education-grid article",
  ".cv-certifications article",
  ".contact-info-list article",
  ".collaboration-card > div",
  ".faq-list article",
].join(",")

const tiltSelectors = [
  ".featured-project",
  ".project-card",
  ".projects-page-card",
  ".service-card",
  ".testimonial-card",
  ".value-card",
  ".practice-card",
  ".evolution-card",
  ".cv-technologies-card",
  ".contact-info-card",
  ".contact-form-card",
  ".world-map-card",
].join(",")

const parallaxSelectors = [
  ".wave",
  ".hero-orb",
  ".projects-hero-orb",
  ".portrait-halo",
  ".globe-particle",
  ".about-hero-note",
  ".contact-hand-note",
].join(",")

const heroSelectors = [
  ".hero",
  ".projects-hero",
  ".cs-hero",
  ".skills-hero",
  ".about-hero",
  ".cv-hero",
  ".contact-page-hero",
].join(",")

const heroVisualSelectors = [
  ".hero-visual",
  ".projects-hero-visual",
  ".cs-hero-screen",
  ".skills-globe-scene",
  ".about-identity-card",
  ".cv-hero-visual",
  ".contact-laptop-message",
].join(",")

export default function ExperienceEnhancer() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const finePointer = window.matchMedia("(pointer: fine)").matches
    let frame = 0
    const cleanups: Array<() => void> = []

    const canObserve = "IntersectionObserver" in window
    const revealObserver = canObserve
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible")
                revealObserver?.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
        )
      : null

    const revealElement = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect()
      const initiallyVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (initiallyVisible || !revealObserver) {
        requestAnimationFrame(() => element.classList.add("is-visible"))
      }

      revealObserver?.observe(element)
    }

    const enhance = () => {
      document
        .querySelectorAll<HTMLElement>("main section, footer")
        .forEach((section) => {
          if (section.dataset.ambientEnhanced) return
          section.dataset.ambientEnhanced = "true"
          section.classList.add("ambient-section")
          if (section.matches("main section:not(:first-child), footer")) {
            section.classList.add("reveal-section")
            revealElement(section)
            const ambient = document.createElement("span")
            ambient.className = "section-ambient"
            ambient.setAttribute("aria-hidden", "true")
            section.prepend(ambient)
          }
        })

      document
        .querySelectorAll<HTMLElement>(revealItemSelectors)
        .forEach((item, index) => {
          if (item.dataset.revealEnhanced) return
          item.dataset.revealEnhanced = "true"
          item.classList.add("reveal-item")
          item.style.setProperty("--reveal-delay", `${(index % 5) * 70}ms`)
          revealElement(item)
        })

      if (!reduceMotion && finePointer) {
        document
          .querySelectorAll<HTMLElement>(tiltSelectors)
          .forEach((card) => {
            if (card.dataset.tiltEnhanced) return
            card.dataset.tiltEnhanced = "true"
            card.classList.add("tilt-card")

            const glare = document.createElement("span")
            glare.className = "tilt-glare"
            glare.setAttribute("aria-hidden", "true")
            card.append(glare)

            const move = (event: PointerEvent) => {
              const bounds = card.getBoundingClientRect()
              const x = (event.clientX - bounds.left) / bounds.width
              const y = (event.clientY - bounds.top) / bounds.height
              card.style.setProperty("--tilt-x", `${(0.5 - y) * 6}deg`)
              card.style.setProperty("--tilt-y", `${(x - 0.5) * 8}deg`)
              card.style.setProperty("--glare-x", `${x * 100}%`)
              card.style.setProperty("--glare-y", `${y * 100}%`)
            }
            const leave = () => {
              card.style.setProperty("--tilt-x", "0deg")
              card.style.setProperty("--tilt-y", "0deg")
            }
            card.addEventListener("pointermove", move)
            card.addEventListener("pointerleave", leave)
            cleanups.push(() => {
              card.removeEventListener("pointermove", move)
              card.removeEventListener("pointerleave", leave)
              glare.remove()
            })
          })

        document
          .querySelectorAll<HTMLElement>(heroSelectors)
          .forEach((hero) => {
            if (hero.dataset.sceneEnhanced) return
            hero.dataset.sceneEnhanced = "true"
            const visual = hero.querySelector<HTMLElement>(heroVisualSelectors)
            if (!visual) return
            visual.classList.add("interactive-scene")

            const move = (event: PointerEvent) => {
              const bounds = hero.getBoundingClientRect()
              const x = (event.clientX - bounds.left) / bounds.width - 0.5
              const y = (event.clientY - bounds.top) / bounds.height - 0.5
              visual.style.setProperty("--scene-x", `${x * 8}px`)
              visual.style.setProperty("--scene-y", `${y * 6}px`)
            }
            const leave = () => {
              visual.style.setProperty("--scene-x", "0px")
              visual.style.setProperty("--scene-y", "0px")
            }
            hero.addEventListener("pointermove", move)
            hero.addEventListener("pointerleave", leave)
            cleanups.push(() => {
              hero.removeEventListener("pointermove", move)
              hero.removeEventListener("pointerleave", leave)
            })
          })
      }

      document
        .querySelectorAll<HTMLElement>(parallaxSelectors)
        .forEach((element, index) => {
          if (element.dataset.parallaxEnhanced) return
          element.dataset.parallaxEnhanced = "true"
          element.classList.add("parallax-element")
          element.style.setProperty("--parallax-depth", `${1 + (index % 3)}`)
        })
    }

    const updateScrollEffects = () => {
      frame = 0
      const scrollY = window.scrollY
      document
        .querySelectorAll<HTMLElement>(".parallax-element")
        .forEach((element) => {
          const depth = Number(
            element.style.getPropertyValue("--parallax-depth") || 1,
          )
          element.style.setProperty(
            "--parallax-y",
            `${Math.min(scrollY * depth * 0.008, 14)}px`,
          )
        })
      document.querySelectorAll(".header").forEach((header) => {
        header.classList.toggle("is-scrolled", scrollY > 24)
      })
    }

    const onScroll = () => {
      if (reduceMotion || frame) return
      frame = window.requestAnimationFrame(updateScrollEffects)
    }

    enhance()
    updateScrollEffects()

    const mutationObserver = new MutationObserver(() => enhance())
    mutationObserver.observe(document.getElementById("root")!, {
      childList: true,
      subtree: true,
    })
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      revealObserver?.disconnect()
      mutationObserver.disconnect()
      window.removeEventListener("scroll", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [])

  return null
}

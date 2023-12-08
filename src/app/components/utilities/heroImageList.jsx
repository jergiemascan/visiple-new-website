import hero from "../../../../public/images/hero.png"
import cozyInFire from "../../../../public/images/cozy-in-fire.jpg"
import familyCall from "../../../../public/images/family-call.jpg"
import underTheSun from "../../../../public/images/under-the-sun.png"

export const HeroImageList = [
  {
    src: hero,
    alt: "group video call image",
    title: "Your modern platform for cloud-based meetings.",
    buttons: [
      { href: "/account/register", text: "Subscribe Now" },
      { href: "/products", text: "View Products" },
    ],
  },
  {
    src: cozyInFire,
    alt: "A man working outdoor with a cozy bornfire",
    title: 'For people who call "remote work" ...work.',
    buttons: [
      { href: "/account/register", text: "Subscribe Now" },
      { href: "/products", text: "Learn More" },
    ],
  },
  {
    src: hero,
    alt: "video call image",
    title: 'For people who are "there" already.',
    buttons: [
      { href: "/account/register", text: "Subscribe Now" },
      { href: "/products", text: "Learn More" },
    ],
  },
  {
    src: underTheSun,
    srcSet: "300×195, 1090×708, 1512×982, 1800×1169, 2048×1330",
    // srcSet: "300×195, 1090×708, 1512×982, 1800×1169, 2048×1330",
    alt: "Video conference by the beach",
    title: "For people who hustle under the sun.",
    buttons: [
      { href: "/account/register", text: "Subscribe Now" },
      { href: "/products", text: "Learn More" },
    ],
  },
  {
    src: familyCall,
    srcSet:
      "300×200, 1070×713, 1480×987, 1800×1200, 2070×1380, 2310×1540, 2530×1687, 2720×1813, 2910×1940, 3090×2060, 3250×2167, 3410×2273, 3560×2373, 3700×2467, 3840×2560",
    alt: "Family video call ",
    title: "For people who want to spend time with their loved ones.",
    buttons: [
      { href: "/account/register", text: "Subscribe Now" },
      { href: "/products", text: "Learn More" },
    ],
  },
]

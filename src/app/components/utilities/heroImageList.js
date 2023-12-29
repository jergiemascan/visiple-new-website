import { Component } from "react"
import FooterComponent from "../footer/footerComponent"

export const HeroImageList = [
  {
    src: "/images/home/hero.png",
    // src: hero,
    alt: "group video call image",
    title: "Your modern platform for cloud-based meetings.",
    buttons: [
      { href: "/account/register", text: "Subscribe Now" },
      { href: "/products", text: "View Plans" },
    ],
  },
  {
    src: "/images/home/cozy-in-fire.jpg",
    // src: cozyInFire,
    alt: "A man working outdoor with a cozy bornfire",
    title: 'For people who call "remote work" ...work.',
    buttons: [
      { href: "/account/register", text: "Subscribe Now" },
      { href: "/products", text: "Learn More" },
    ],
  },
  {
    src: "/images/home/image01.png",
    alt: "video call image",
    title: 'For people who are "there" already.',
    buttons: [
      { href: "/account/register", text: "Subscribe Now" },
      { href: "/products", text: "Learn More" },
    ],
  },
  {
    src: "/images/home/under-the-sun.png",
    // src: underTheSun,
    alt: "Video conference by the beach",
    title: "For people who hustle under the sun.",
    buttons: [
      { href: "/account/register", text: "Subscribe Now" },
      { href: "/products", text: "Learn More" },
    ],
  },
  {
    src: "/images/home/family-call.jpg",
    // src: familyCall,
    alt: "Family video call ",
    title: "For people who want to spend time with their loved ones.",
    buttons: [
      { href: "/account/register", text: "Subscribe Now" },
      { href: "/products", text: "Learn More" },
    ],
    // component: <FooterComponent />,
  },
]

import product01 from "../../../../public/images/products/product01.jpg"
import product02 from "../../../../public/images/products/product02.jpg"
import product03 from "../../../../public/images/products/product03.jpg"

export const ProductsList = [
  {
    src: product01,
    alt: "Woman on call at work",
    productName: "Basic",
    title: "Up to 10 Participants",
    features: [
      "No Auto Expiry",
      "HD Video Conferencing",
      "File, Document Sharing",
      "Account Administration",
      "Safe & Secure",
      "Outlook Plugin",
      "Enhanced Caller ID",
      "Outlook Plugin",
      "Unlimited minutes on US, UK & Canada",
      "SMS",
    ],
    price: "$9.95/Month",
    subscribeLink: "/account/register",
  },
  {
    src: product02,
    alt: "Family video call",
    productName: "Standard",
    title: "25 Participants",
    description: "Extra Features",
    features: [
      "Theme Selection ",
      "HD Video Conferencing ",
      "Video & Audio Recording ",
      "Meeting Transcription",
      "Artificial Intelligence ",
      "Custom Hold Music ",
    ],
    price: "$14.95/Month",
    subscribeLink: "/account/register",
  },
  {
    src: product03,
    alt: "Man on conference call at home",
    productName: "Premium",
    title: "100 Participants",
    description: "Standard plus Premium Features",
    features: [
      "Premium Transcription",
      "Smart Search",
      "One Time Access Code",
      "Meeting Transcription",
      " Meeting & Call Lock",
    ],
    price: "$29.95/Month",
    subscribeLink: "/account/register",
  },
]

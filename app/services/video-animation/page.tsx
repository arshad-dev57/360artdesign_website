"use client";
import ServicePageTemplate, { ServicePageConfig } from "@/components/ServicePageTemplate";
import { FaPlay, FaFilm, FaMagic, FaCube, FaBullhorn } from "react-icons/fa";

const iconStroke = {
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
  stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const config: ServicePageConfig = {
  hero: {
    badge: "Video Animation",
    title: (
      <>
        Animations That Make Your Story <span style={{ color: "#1a4fd6", display: "inline-block" }}>Impossible to Skip</span>
      </>
    ),
    paragraphStart:
      "Explainer videos, motion graphics, and 3D animation that grab attention in the first three seconds and hold it to the last. Scripted, storyboarded, and animated by our",
    animatedWords: ["Motion Designers", "2D Animators", "3D Artists", "Video Editors"],
    checklist: [
      "Explainer & promo videos",
      "2D & 3D animation",
      "Logo animations & intros",
      "Social media video ads",
    ],
    primaryCta: "Start Your Video",
    stats: [
      { num: "400+", label: "Videos Produced" },
      { num: "4.9/5", label: "Client Rating" },
      { num: "10M+", label: "Views Generated" },
    ],
  },
  statsBand: [
    { num: "400+", label: "Videos Delivered", accent: "#4a7ae8" },
    { num: "10M+", label: "Total Views", accent: "#e25555" },
    { num: "2x", label: "Avg. Engagement Lift", accent: "#4a7ae8" },
    { num: "4K", label: "Render Quality", accent: "#e25555" },
  ],
  details: {
    badge: "Motion Production",
    title: "Video That Sells While You Sleep",
    desc: "From 30-second social ads to full product explainers, we handle the entire pipeline: script, voiceover, storyboard, animation, and sound design. The result is video content that explains complex products simply and drives viewers to act.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    ratingCard: { value: "4.9", label: "Client Rating" },
    floatCard: {
      icons: [
        { node: <FaPlay />, bg: "#fdeeee", color: "#e22222" },
        { node: <FaMagic />, bg: "#f0e9fb", color: "#7c3aed" },
      ],
      title: "Full Production",
      sub: "Script to final render",
    },
    tiles: [
      { label: "Explainer Videos", sub: "Complex ideas, simply told", icon: <FaPlay />, bg: "#fdeeee", color: "#e22222" },
      { label: "Motion Graphics", sub: "Kinetic type & animated infographics", icon: <FaMagic />, bg: "#f0e9fb", color: "#7c3aed" },
      { label: "2D & 3D Animation", sub: "Characters, products & scenes", icon: <FaCube />, bg: "#e9eefb", color: "#1a4fd6" },
      { label: "Video Editing", sub: "Cuts, color & sound design", icon: <FaFilm />, bg: "#fef6e6", color: "#f6a723" },
      { label: "Social Video Ads", sub: "Scroll-stopping shorts & reels", icon: <FaBullhorn />, bg: "#e6f6e9", color: "#2fae63" },
    ],
  },
  tech: {
    title: "Produced With Studio-Grade Tools",
    desc: "The same software behind the ads and shows you watch every day",
    chips: [
      { name: "After Effects", color: "#9999ff" },
      { name: "Premiere Pro", color: "#9999ff" },
      { name: "Blender", color: "#f5792a" },
      { name: "Cinema 4D", color: "#011a6a" },
      { name: "Illustrator", color: "#ff9a00" },
      { name: "DaVinci Resolve", color: "#233a51" },
      { name: "Audition", color: "#00e4bb" },
      { name: "Lottie", color: "#00ddb3" },
    ],
  },
  devSection: {
    heading: "How 360 ArtDesign's Animators Meet Your Expectations?",
    checkItems: [
      "Our animation team is 100% dedicated, ready to produce a single spot or a full content series.",
      "We offer in-depth creative briefs to nail your message, audience, and tone before animation begins.",
      "Our artists bring studio-level craft in 2D, 3D, and motion graphics with a proven portfolio.",
      "You approve at every stage — script, voiceover, storyboard, style frames — before we animate.",
      "We maintain swift and consistent communication using modern tools like Slack, Skype, and Google Hangout.",
      "Experience transparency in our pricing with clear per-video packages — no hidden costs or surprises.",
      "Every video is delivered in all the formats you need: 16:9, 9:16, 1:1, with captions and cutdowns.",
      "Our team is known for its quality-oriented approach, obsessing over every frame and transition.",
    ],
  },
  expertise: {
    heading: "Our Animation Expertise",
    desc: "We combine storytelling and motion craft to make videos people actually watch",
    featuredImage: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&q=80",
    featuredPills: [
      { text: "3s Hook Rate Optimised", dot: "#4ade80" },
      { text: "4K Delivery", dot: "#60a5fa" },
    ],
    featuredExtra: "Every video is built around a hook, a story, and a clear call to action.",
    items: [
      {
        num: "01",
        title: "Story-First Explainers",
        desc: "Scripts and visuals that turn complex products into stories anyone gets.",
        icon: <svg {...iconStroke}><polygon points="5 3 19 12 5 21 5 3" /></svg>,
      },
      {
        num: "02",
        title: "Motion Graphics",
        desc: "Kinetic typography and animated data that make information move.",
        icon: <svg {...iconStroke}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
      },
      {
        num: "03",
        title: "3D & Product Animation",
        desc: "Photorealistic product renders and 3D scenes that wow audiences.",
        icon: <svg {...iconStroke}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
      },
      {
        num: "04",
        title: "Character Animation",
        desc: "Expressive 2D characters that give your brand a friendly face.",
        icon: <svg {...iconStroke}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
      },
      {
        num: "05",
        title: "Sound & Voiceover",
        desc: "Professional voice talent, music, and sound design in any language.",
        icon: <svg {...iconStroke}><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>,
      },
      {
        num: "06",
        title: "Multi-Platform Delivery",
        desc: "Every aspect ratio and cutdown you need for web, TV, and social.",
        icon: <svg {...iconStroke}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
      },
    ],
  },
  process: {
    heading: "How We Produce Your Video",
    desc: "A studio production pipeline from brief to final render",
    steps: [
      { step: "01", title: "Creative Brief", desc: "We define your message, audience, style, and goals" },
      { step: "02", title: "Script & VO", desc: "Tight scripts and professional voiceover you approve first" },
      { step: "03", title: "Storyboard", desc: "Scene-by-scene visual plan so there are no surprises" },
      { step: "04", title: "Style Frames", desc: "The visual look locked before full animation begins" },
      { step: "05", title: "Animation", desc: "Full animation with music, sound design, and effects" },
      { step: "06", title: "Delivery", desc: "Final renders in every format, plus revisions included" },
    ],
  },
  cta: {
    heading: "Ready to Bring Your Story to Life?",
    desc: "Let's create video content your audience will watch, share, and act on",
  },
};

export default function VideoAnimationPage() {
  return <ServicePageTemplate config={config} />;
}

export type Project = {
  slug: string
  index: string
  name: string
  tagline: string
  summary: string
  role: string
  why: string
  problem: string
  approach: string
  howItWorks: string
  features: string[]
  technologies: string[]
  challenge: string
  learned: string
  future: string
  liveUrl?: string
  accent: "signal" | "sky" | "coral" | "violet" | "mint"
}

export const projects: Project[] = [
  {
    slug: "speakup-yuva-ai",
    index: "01",
    name: "SpeakUp Yuva AI",
    tagline: "A voice experience that listens first.",
    summary: "I built a voice-based experience for young people who may need a calm, judgment-free place to start talking about stress, anxiety, bullying, or cyberbullying.",
    role: "Student builder and designer",
    why: "I wanted to explore whether voice technology could feel more approachable for a young person who is unsure how to begin a difficult conversation.",
    problem: "Starting a difficult conversation can be hard when someone is worried about being judged or simply does not know what to say first.",
    approach: "I focused on listening first: a calm voice experience, careful language, and clear routes to verified government resources when they are useful.",
    howItWorks: "SpeakUp uses Vapi to guide a responsive voice conversation. It is meant to be a supportive first step, not a replacement for medical care.",
    features: ["Voice-led conversation", "Empathetic interaction design", "Youth-focused topics", "Links to verified government resources"],
    technologies: ["Vapi", "Conversational voice technology", "IVA design"],
    challenge: "The hardest part was making the experience feel supportive without promising more than technology can responsibly provide.",
    learned: "I learned that wording, pacing, and boundaries matter just as much as the underlying AI.",
    future: "I want to keep improving the conversations so they are clearer, safer, and easier to access.",
    liveUrl: "https://blogalot11.com/speak-up-yuva/",
    accent: "signal",
  },
  {
    slug: "codeverse-os",
    index: "02",
    name: "CodeVerse OS",
    tagline: "A more hands-on way to explore computer science.",
    summary: "I built a browser-based space where computer science concepts can be explored through algorithm visualizations, virtual files, and a desktop-style interface.",
    role: "Student builder",
    why: "I wanted abstract computer science ideas to feel less like definitions and more like things you could explore directly.",
    problem: "Some computing ideas are difficult to understand when they only appear as text or static diagrams.",
    approach: "I brought several small learning tools together inside a familiar desktop-inspired environment.",
    howItWorks: "Visitors move through the virtual interface and open interactive tools that make the ideas easier to see and try.",
    features: ["Algorithm visualizations", "Virtual file navigation", "Desktop-style interface", "Browser-based exploration"],
    technologies: ["React", "JavaScript / TypeScript", "CSS"],
    challenge: "I had to keep the interface playful without making it confusing or getting in the way of learning.",
    learned: "I learned that a good interaction can explain a technical idea before a paragraph of text has to.",
    future: "I would like to add more concepts and make the learning path easier to follow.",
    liveUrl: "https://code-verse-os.vercel.app/",
    accent: "sky",
  },
  {
    slug: "echotab",
    index: "03",
    name: "EchoTab",
    tagline: "A better way to find the things you meant to remember.",
    summary: "I started EchoTab as an AI and browser-productivity concept for turning browsing activity into something more organized and easier to search later.",
    role: "Student builder",
    why: "I kept losing track of useful pages while researching, so I started thinking about whether browsing history could work more like memory.",
    problem: "Useful pages disappear into long browsing histories, even when I know I will need them again.",
    approach: "I explored a calmer way to organize browsing around remembering something later, rather than simply listing it by date.",
    howItWorks: "EchoTab treats browsing activity as material that can be grouped and searched when it becomes useful again.",
    features: ["Organized browsing memory", "Search-oriented recall", "Browser productivity workflow", "Focused interface"],
    technologies: ["AI concepts", "Browser interfaces", "Web development"],
    challenge: "The challenge was turning a large stream of browsing activity into something useful without creating another noisy dashboard.",
    learned: "I learned to begin with a real habit and design around the moment a user needs help.",
    future: "I would like to add better grouping, lightweight notes, and faster ways to bring old context back when I need it.",
    liveUrl: "https://echo-tab-saahas.vercel.app/",
    accent: "coral",
  },
  {
    slug: "neural-arena",
    index: "04",
    name: "Neural Arena",
    tagline: "A clearer way to watch a neural network learn.",
    summary: "I built an interactive environment for composing and visualizing neural networks, including layer setup, activation flow, training views, and loss and accuracy curves.",
    role: "Student builder",
    why: "I wanted to make the structure and behavior of a neural network easier to inspect while learning.",
    problem: "Neural networks can feel like a black box when their layers and training process are hidden behind code.",
    approach: "I put network configuration and training feedback in the same view so the structure and behavior could be inspected together.",
    howItWorks: "You can configure layers, run a training view, and watch activation flow, loss, and accuracy change as the network learns.",
    features: ["Layer configuration", "Training visualization", "Activation flow", "Loss and accuracy curves"],
    technologies: ["React", "Data visualization", "Neural network concepts"],
    challenge: "The challenge was showing several technical ideas at once without turning the screen into visual noise.",
    learned: "I learned that a good visualization should reduce confusion rather than merely add movement.",
    future: "I would like to add clearer explanations, more layer types, and the option to try personal datasets.",
    liveUrl: "https://neural-arena-by-saahas.vercel.app/",
    accent: "violet",
  },
  {
    slug: "quantum-canvas",
    index: "05",
    name: "Quantum Canvas",
    tagline: "A small studio for code, waves, and chance.",
    summary: "I made a generative art studio using wave and procedural ideas with Canvas rendering. Despite the name, it is a creative-coding project, not a quantum-computing system.",
    role: "Student builder",
    why: "I wanted to explore how a small set of rules could produce visual results that feel organic and surprising.",
    problem: "Creative coding is most engaging when changing one input immediately changes what you see.",
    approach: "I built a simple studio around procedural and wave-based experiments rendered on a canvas.",
    howItWorks: "Adjustable inputs feed the Canvas renderer and produce evolving visual compositions.",
    features: ["Canvas rendering", "Procedural art", "Wave-based concepts", "Interactive controls"],
    technologies: ["HTML Canvas", "JavaScript", "Creative computing"],
    challenge: "The challenge was finding the line between useful unpredictability and controls that still made sense.",
    learned: "I learned how mathematical ideas and interface choices can meet inside a creative tool.",
    future: "I would like to add export options and make it easier to save, revisit, and build on a composition.",
    liveUrl: "https://quantum-canvas-saahas.vercel.app/",
    accent: "mint",
  },
]

export const skillGroups = [
  { label: "Programming", items: ["Java", "Python", "JavaScript / TypeScript"] },
  { label: "Frontend", items: ["React", "Angular", "HTML", "CSS", "Tailwind CSS"] },
  { label: "Areas of interest", items: ["Human-Centered AI", "Voice AI / IVA", "UI/UX", "Interactive Web Applications", "Algorithm Visualization", "Creative Computing"] },
]

export const academicScores = [
  { value: "1540", label: "SAT" },
  { value: "5", label: "Calculus BC" },
  { value: "4", label: "AP Computer Science A" },
  { value: "4", label: "Physics C: E&M" },
]

export const achievements = [
  { title: "AP Computer Science A", description: "Scored 4 on the College Board exam and strengthened my foundation in Java and algorithms.", earned: "2023", icon: "code" },
  { title: "SpeakUp Yuva AI", description: "Built a real-time voice experience for young people thinking through difficult conversations.", earned: "2024", icon: "wave" },
  { title: "EchoTab persistence", description: "Used IndexedDB to explore a more local-first approach to browsing memory.", earned: "2024", icon: "database" },
  { title: "Interactive web apps", description: "Built and shipped projects with React, Next.js, Tailwind, and motion design.", earned: "2023 – Present", icon: "layers" },
  { title: "Canvas experiments", description: "Created browser-based rendering tools for generative art and visual exploration.", earned: "2024", icon: "spark" },
  { title: "CodeVerse OS", description: "Developed a simulated desktop environment to make computer science concepts more approachable.", earned: "2024", icon: "terminal" },
] as const

export const recognition = [
  {
    slug: "certificate",
    organization: "India Book of Records",
    title: "Youngest to Develop an Empathetic AI-Based Mental Health Support System",
    status: "Record confirmed",
    date: "February 4, 2026",
    detail: "Certificate dated February 16, 2026",
    description: "Recognized at age 16 years, 2 months and 11 days in Faridabad, Haryana, for developing SpeakUpYuva AI—an empathetic voice and text support system for young people navigating stress, anxiety, fear of judgement, cyberbullying, and related wellbeing challenges.",
    path: "/documents/india-book-of-records-certificate.pdf",
    type: "PDF document",
  },
  {
    slug: "recommendation",
    organization: "District Mental Health Programme, The Nilgiris",
    title: "Professional Recommendation for Pradhan Mantri Rashtriya Bal Puraskar",
    status: "Recommendation — not an award received",
    date: "July 9, 2026",
    detail: "Dr. K. M. Poornajith, M.D., D.P.M.",
    description: "The recommendation recognizes SpeakUpYuva AI as a low-barrier, non-judgmental digital wellbeing and support ecosystem that may complement professional care and help bridge distressed adolescents with formal healthcare systems.",
    path: "/documents/dmhp-nilgiris-recommendation.pdf",
    type: "Image document",
  },
] as const

export const portfolioAssets = {
  portrait: "/saahas-ludhra.jpg",
  certificate: recognition[0].path,
  recommendation: recognition[1].path,
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  ArrowDown, 
  ArrowUp, 
  Menu, 
  X, 
  Code2, 
  ShieldCheck, 
  Database, 
  BrainCircuit, 
  Wrench, 
  CheckCircle, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  GraduationCap, 
  BookOpen, 
  Award,
  Terminal,
  ChevronDown
} from 'lucide-react';
import fallbackPhoto from './assets/images/sahil_khatkar_photo_1791815471249.jpg';

// ==========================================
// 1. DATA MODELS & CONSTANTS
// ==========================================

export interface Project {
  id: string;
  name: string;
  tagline: string;
  status: 'Public';
  primaryLanguage: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  snapshotImage?: string;
  description: string;
  dateRange: string;
  keyHighlights: string[];
  sdPerspective: string[];
  qaPerspective: string[];
  daPerspective?: string[];
  architectureNotes: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  score: string;
  highlights?: string;
}

export const PERSONAL_INFO = {
  name: 'Sahil Khatkar',
  role: 'Software Developer & Software Tester & QA',
  tagline: 'Bridging robust software development with rigorous testing and data-driven analytical precision.',
  location: 'Jind, Haryana, India',
  email: 'sahil.khatkar.11@gmail.com',
  telegram: 'https://t.me/SahilKhatkar11',
  telegramUsername: 'SahilKhatkar11',
  github: 'https://github.com/Sahilkhatkar11',
  githubUsername: 'Sahilkhatkar11',
  linkedin: 'https://linkedin.com/in/SahilKhatkar11',
  linkedinUsername: 'SahilKhatkar11',
  x: 'https://x.com/SahilKhatkar11',
  xUsername: 'SahilKhatkar11',
};

export const HIGHLIGHTED_PROJECTS: Project[] = [
  {
    id: 'pdfpilot',
    name: 'PDFPilot',
    tagline: 'Privacy-First Browser-Based PDF Suite',
    status: 'Public',
    primaryLanguage: 'TypeScript',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'WebAssembly (WASM)'],
    githubUrl: 'https://github.com/Sahilkhatkar11/pdfpilot',
    liveUrl: 'https://sahilkhatkar11.github.io/pdfpilot/',
    snapshotImage: 'https://i.ibb.co/4gJBj7H6/pdfpilot.png',
    description: 'A privacy-first, browser-only PDF toolkit spanning 24 distinct tools (merge, split, compress, sign, sanitize) that runs entirely client-side, eliminating server storage and removing data-privacy risks.',
    dateRange: 'Mar 2026 - Jun 2026',
    keyHighlights: [
      'Architected 24 distinct tools executing 100% in-browser with zero backend transmission',
      'Engineered for zero infrastructure spend: serves 1 or 100,000 users at identical zero cost',
      'Designed and executed test suites covering file corruption, oversized payloads, and memory bounds',
    ],
    sdPerspective: [
      'Built single-page modular UI and client-side processing pipeline solo without third-party cloud APIs',
      'Employed WASM/JS file parsers for rapid document mutation directly inside browser memory',
      'Implemented offline-first mechanics enabling document operations even when disconnected',
    ],
    qaPerspective: [
      'Validated functional integrity and edge-case handling across all 24 tools before release',
      'Conducted rigorous cross-browser testing (Chromium, Firefox, WebKit) for consistent WASM memory allocation',
      'Authored test scenarios for corrupt byte streams, malformed font tables, and password-protected PDFs',
    ],
    architectureNotes: 'Single-page client-only architecture with Web Workers and WebAssembly for parallelized, zero-leak binary stream mutation.',
  },
  {
    id: 'smart-plant-care',
    name: 'Smart Plant Care Assistant',
    tagline: 'AI/ML Plant Disease Detection & Advisory',
    status: 'Public',
    primaryLanguage: 'Python',
    techStack: ['Python', 'TensorFlow', 'Streamlit', 'NumPy', 'Image Classification'],
    githubUrl: 'https://github.com/Sahilkhatkar11/smart-plant-care',
    liveUrl: 'https://smart-plant-care.streamlit.app/',
    snapshotImage: 'https://i.ibb.co/7qJ07bN/smartplantcare.png',
    description: 'An AI/ML application that detects plant diseases from leaf imagery with 98–99% accuracy and returns personalized care recommendations via a Streamlit dashboard in under 2 seconds.',
    dateRange: 'Jun 2025 - Aug 2025',
    keyHighlights: [
      'Trained binary image-classification model (Healthy vs. Unhealthy) with 98–99% validation accuracy',
      'Sub-2-second end-to-end inference time surfacing immediate agricultural care insights',
      'Owned entire data lifecycle: sourcing, cleaning, augmentations, evaluation, and deployment',
    ],
    sdPerspective: [
      'Engineered an interactive Streamlit application translating complex tensor predictions into intuitive visual feedback',
      'Optimized model inference pipeline for fast load times and minimal memory footprint on free-tier compute',
      'Implemented image validation safeguards to reject non-plant or severely blurry uploads gracefully',
    ],
    qaPerspective: [
      'Constructed stratified test sets and edge-case testing with variable lighting, camera glare, and partial leaf occlusion',
      'Verified zero data leakage between train/validation/test partitions to prevent optimistic metric skew',
      'Monitored model reproducibility across different operating environments and dependency versions',
    ],
    daPerspective: [
      'Formulated data ingestion and normalization pipeline for raw image tensors',
      'Computed precision, recall, confusion matrix, and accuracy curves across training epochs',
      'Transformed model confidence distributions into actionable agricultural thresholds',
    ],
    architectureNotes: 'Convolutional neural network architecture fine-tuned for high-accuracy binary classification paired with a lightweight Streamlit web client.',
  },
  {
    id: 'mca-attendance',
    name: 'MCA Attendance System',
    tagline: 'Lightweight Web Attendance Tracker & Formatter',
    status: 'Public',
    primaryLanguage: 'HTML / JS',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'Responsive Design'],
    githubUrl: 'https://github.com/Sahilkhatkar11/mca-attendance',
    liveUrl: 'https://sahilkhatkar11.github.io/mca-attendance/',
    snapshotImage: 'https://i.ibb.co/SXzHqy3x/mcaattendance.png',
    description: 'A responsive web-based class attendance system featuring student-wise marking, automatic present/absent tally generation, dark mode, and ready-to-copy WhatsApp/SMS summaries.',
    dateRange: '2025',
    keyHighlights: [
      'Instant present/absent roll tallying with one-tap toggle marking',
      'One-click clipboard export generator formatted for instant messaging dispatches',
      'Persistent local session storage preventing data loss during accidental page refresh',
    ],
    sdPerspective: [
      'Engineered pure vanilla JavaScript DOM state manager without heavy framework overhead',
      'Implemented persistent local browser caching for offline classroom reliability',
      'Designed responsive dark and light themes matching high-contrast mobile screen needs',
    ],
    qaPerspective: [
      'Tested input sanitization against empty roll lists, duplicate entries, and special characters',
      'Verified clipboard API compatibility across Android Chrome, iOS Safari, and desktop browsers',
      'Conducted boundary testing on bulk student rosters exceeding 150+ records',
    ],
    architectureNotes: 'Zero-dependency client-side architecture leveraging modern ES6+, CSS variables, and LocalStorage for millisecond-fast responsiveness.',
  },
  {
    id: 'qrpilot',
    name: 'QRPilot',
    tagline: 'All-in-One Custom QR Code Studio & Scanner',
    status: 'Public',
    primaryLanguage: 'TypeScript',
    techStack: ['TypeScript', 'React', 'HTML5 Canvas', 'WebRTC', 'Vite'],
    githubUrl: 'https://github.com/Sahilkhatkar11/qrpilot',
    liveUrl: 'https://sahilkhatkar11.github.io/qrpilot/',
    snapshotImage: 'https://i.ibb.co/GfZ02YJr/qrpilot.png',
    description: 'A modern QR code generator and scanner that allows creating customized codes with gradients, logos, and custom frames, as well as real-time camera scanning.',
    dateRange: '2026',
    keyHighlights: [
      'High-DPI vector and canvas generator with custom color gradients, embedded logos, and frames',
      'Live in-browser barcode & QR scanning utilizing WebRTC video stream processing',
      'Client-side instant download support in PNG and SVG formats',
    ],
    sdPerspective: [
      'Architected pixel-perfect canvas rendering pipeline with configurable error correction levels',
      'Built reactive UI controls for gradient stops, radius styling, and image overlays',
      'Integrated WebRTC camera feed with requestAnimationFrame frame analysis',
    ],
    qaPerspective: [
      'Tested scanner decoding robustness against variable focal distances, tilts, and poor lighting',
      'Validated generated QR codes against multiple physical smartphone scanners for 100% read rate',
      'Handled camera permission denials and device orientation transitions gracefully',
    ],
    architectureNotes: 'Canvas 2D context manipulation paired with WebRTC MediaDevices API, executed fully client-side.',
  },
  {
    id: 'ytpilot',
    name: 'YTPilot',
    tagline: 'YouTube Media Processing Web App',
    status: 'Public',
    primaryLanguage: 'TypeScript',
    techStack: ['Next.js', 'FastAPI', 'Python', 'yt-dlp', 'FFmpeg', 'TypeScript'],
    githubUrl: 'https://github.com/Sahilkhatkar11/ytpilot',
    liveUrl: 'https://sahilkhatkar11.github.io/ytpilot/',
    snapshotImage: 'https://i.ibb.co/PH0NwQZ/ytpilot.png',
    description: 'A polished YouTube media processing web application built with Next.js, FastAPI, yt-dlp, and FFmpeg for analyzing links, selecting quality streams, and downloading video or audio.',
    dateRange: '2026',
    keyHighlights: [
      'Real-time link metadata extraction parsing multiple audio and video resolution streams',
      'FastAPI backend service delegating stream remuxing and extraction to FFmpeg',
      'Polished Next.js frontend with live download progress indicators',
    ],
    sdPerspective: [
      'Designed decoupled frontend-backend architecture with typed REST communication',
      'Integrated FFmpeg audio transcoding for high-bitrate MP3/AAC generation',
      'Structured asynchronous task queues preventing server process blocking during conversion',
    ],
    qaPerspective: [
      'Conducted negative testing on invalid URLs, private videos, age-restricted links, and deleted IDs',
      'Tested multiplexed audio/video synchronization across varying frame rates (24fps, 30fps, 60fps)',
      'Verified clean server temp file garbage collection following completed downloads',
    ],
    architectureNotes: 'Decoupled Next.js client with a Python FastAPI microservice utilizing yt-dlp and FFmpeg subprocess management.',
  },
  {
    id: 'scorepilot',
    name: 'ScorePilot',
    tagline: 'Responsive Tournament Leaderboard & Score Tracker',
    status: 'Public',
    primaryLanguage: 'TypeScript',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Local Storage'],
    githubUrl: 'https://github.com/Sahilkhatkar11/scorepilot',
    liveUrl: 'https://sahilkhatkar11.github.io/scorepilot/',
    snapshotImage: 'https://i.ibb.co/KxdWB8Dv/scorepilot.png',
    description: 'A modern, responsive leaderboard and score tracker designed to manage competitive rounds effortlessly, calculate live rankings, crown champions, and export styled scorecards.',
    dateRange: '2026',
    keyHighlights: [
      'Dynamic multi-round scoring algorithm with instant real-time ranking updates',
      'Automatic champion crowning with tie-break rules and visual standings',
      'Exportable formatted scorecards and CSV data summaries for event records',
    ],
    sdPerspective: [
      'Created deterministic ranking engine supporting custom scoring rules and point weighting',
      'Engineered fluid state persistence so tournament progress survives browser reloads',
      'Implemented clean, responsive data tables with keyboard navigation accessibility',
    ],
    qaPerspective: [
      'Verified ranking consistency during multi-way ties and sudden score corrections',
      'Executed boundary testing on maximum team counts and extreme numeric values',
      'Tested CSV export fidelity against Excel and Google Sheets parsing standards',
    ],
    architectureNotes: 'Client-driven state management with deterministic sorting algorithms and localized browser storage.',
  },
  {
    id: 'more-projects',
    name: 'More Self-Made & Passion Projects',
    tagline: 'Active Open-Source Ecosystem on GitHub',
    status: 'Public',
    primaryLanguage: 'GitHub Ecosystem',
    techStack: ['TypeScript', 'Python', 'React', 'FastAPI', 'Automation', 'CLI Utilities'],
    githubUrl: 'https://github.com/Sahilkhatkar11',
    snapshotImage: 'https://i.ibb.co/sdjrVtSm/explore-more.png',
    description: 'Beyond these highlighted builds, I actively build, experiment, and maintain numerous self-made open-source tools, automation utilities, daily problem-solvers, and testing scripts on GitHub.',
    dateRange: 'Active & Ongoing',
    keyHighlights: [
      'Self-made utilities & tools addressing real daily developer needs',
      'Passionate focus on clean architecture, performance, and reliability',
      'Complete public repositories with git commit histories & docs',
    ],
    sdPerspective: [
      'Engineered standalone tools tackling friction in automation, file handling, and workflows',
      'Modular architectures with clear README documentation and zero-cost client runtimes',
      'Continuous experimentation with modern web APIs, WebAssembly, and local ML workflows',
    ],
    qaPerspective: [
      'Comprehensive edge-case coverage and boundary stress tests across all utilities',
      'Defect isolation and cross-browser verification before repository release',
    ],
    architectureNotes: 'A continuously expanding collection of standalone developer tools, micro-libraries, and experimental prototypes hosted publicly on GitHub.',
  },
];

export const EDUCATION_RECORDS: Education[] = [
  {
    institution: 'Chaudhary Devi Lal University (CDLU)',
    location: 'Sirsa, Haryana, India',
    degree: 'Master of Computer Applications (MCA)',
    period: '2024 - 2026',
    score: 'Percentage: 67%',
    highlights: 'Coursework in Software Engineering, Advanced Web Development, Data Structures, Algorithms, and Database Management Systems.',
  },
  {
    institution: 'Chaudhary Ranbir Singh University (CRSU)',
    location: 'Jind, Haryana, India',
    degree: 'Bachelor of Arts (B.A. - English Hons.)',
    period: '2020 - 2023',
    score: 'Percentage: 64%',
    highlights: 'Honed analytical text decomposition, precise written articulation, and communication—providing an edge in bug reports, specifications, and stakeholder discussions.',
  },
  {
    institution: 'Board of School Education Haryana (BSEH)',
    location: 'Haryana, India',
    degree: 'Class XII (Senior Secondary Examination)',
    period: '2020',
    score: 'Percentage: 74%',
    highlights: 'Academic foundation in analytical problem solving and mathematics.',
  },
  {
    institution: 'Board of School Education Haryana (BSEH)',
    location: 'Haryana, India',
    degree: 'Class X (Secondary Examination)',
    period: '2018',
    score: 'Percentage: 75%',
    highlights: 'Secondary education with consistent academic standing.',
  },
];

const SKILLSETS_DATA = [
  {
    title: 'Software Development',
    minimalTitle: 'Software Development',
    icon: Code2,
    skills: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Vite',
      'Tailwind CSS',
      'HTML5 / CSS3',
      'SDLC',
      'WASM',
    ],
  },
  {
    title: 'Testing & Quality Assurance',
    minimalTitle: 'Testing & QA',
    icon: ShieldCheck,
    skills: [
      'Manual Testing',
      'Test Case Design',
      'STLC',
      'Bugs Triage',
      'Functional & Regression',
      'Cross-Browser',
      'Boundary & Stress',
    ],
  },
  {
    title: 'Backend & Database Systems',
    minimalTitle: 'Backend & Database',
    icon: Database,
    skills: [
      'Python',
      'FastAPI',
      'REST APIs',
      'DBMS & SQL',
      'IndexedDB',
      'LocalStorage',
      'FFmpeg Pipeline',
    ],
  },
  {
    title: 'Machine Learning & Localized AI',
    minimalTitle: 'Machine Learning & AI',
    icon: BrainCircuit,
    skills: [
      'TensorFlow',
      'NumPy',
      'Streamlit',
      'CNNs',
      'Model Evaluation',
      'EDA & Preprocessing',
    ],
  },
  {
    title: 'Developer Tools & Environment',
    minimalTitle: 'Dev Tools & CLI',
    icon: Wrench,
    skills: [
      'Git & GitHub',
      'VS Code',
      'Terminal / Bash',
      'Postman',
      'Chrome DevTools',
      'Responsive UI',
    ],
  },
];

// ==========================================
// 2. MODAL & HELPER COMPONENTS
// ==========================================

function AstronautMascot({ className = "w-8 h-8 sm:w-9 sm:h-9" }: { className?: string }) {
  return (
    <div 
      className={`relative shrink-0 flex items-center justify-center rounded-full border-2 border-white group-hover:border-orange-400 bg-[#0e121b] shadow-[2px_2px_0px_0px_#f97316] transition-all duration-200 overflow-hidden ${className}`}
      aria-hidden="true"
      title="Sahil Khatkar — Dev & QA Astronaut"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          {/* Deep space purple visor gradient matching reference */}
          <radialGradient id="astroVisorGrad" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#2e264f" />
            <stop offset="60%" stopColor="#1a1532" />
            <stop offset="100%" stopColor="#0f0c1f" />
          </radialGradient>
          
          {/* Monitor body subtle metallic gradient */}
          <linearGradient id="monitorGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>

        {/* --- DESK SURFACE BASELINE --- */}
        <line
          x1="12"
          y1="82"
          x2="88"
          y2="82"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* --- ASTRONAUT BODY & SUIT (Behind Monitor) --- */}
        {/* Chest & Shoulders */}
        <path
          d="M 32 54 C 27 58 24 67 22 76 L 31 77 C 33 71 36 64 42 60 L 58 60 C 64 64 67 71 69 77 L 78 76 C 76 67 73 58 68 54 Z"
          fill="#f8fafc"
          stroke="#0b0e14"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Suit Seams & Collar Band */}
        <path
          d="M 38 56 C 45 59.5 55 59.5 62 56"
          stroke="#0b0e14"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* --- LEFT HAND ON MOUSE (Viewer's Left) --- */}
        {/* Left Arm to Mouse */}
        <path
          d="M 28 62 C 24 67 20 73 19 78 L 26 79 C 27 75 30 70 33 66 Z"
          fill="#f8fafc"
          stroke="#0b0e14"
          strokeWidth="1.8"
        />
        {/* Arm Cuff Stripe (Orange Accent) */}
        <path
          d="M 20.5 74 C 23 74 25.5 74.5 27.5 75.5"
          stroke="#f97316"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Mouse */}
        <rect
          x="16"
          y="77"
          width="12"
          height="5.5"
          rx="2.75"
          fill="#475569"
          stroke="#0b0e14"
          strokeWidth="1.6"
        />
        {/* Mouse divider */}
        <line
          x1="22"
          y1="77"
          x2="22"
          y2="79.5"
          stroke="#0b0e14"
          strokeWidth="1"
        />
        {/* Glove resting on mouse */}
        <path
          d="M 18.5 76 C 18.5 73.5 21 72.5 24.5 73 C 27 73.5 28.5 75 28 77 C 27.5 78 25.5 78 24 77.5 C 21.5 76.8 19 78 18.5 76 Z"
          fill="#ffffff"
          stroke="#0b0e14"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* --- RIGHT HAND / ARM (Viewer's Right, resting at desk) --- */}
        {/* Right Arm to Desk */}
        <path
          d="M 72 62 C 76 67 80 73 81 78 L 74 79 C 73 75 70 70 67 66 Z"
          fill="#f8fafc"
          stroke="#0b0e14"
          strokeWidth="1.8"
        />
        {/* Arm Cuff Stripe (Orange Accent) */}
        <path
          d="M 79.5 74 C 77 74 74.5 74.5 72.5 75.5"
          stroke="#f97316"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Right Glove resting at desk */}
        <path
          d="M 81.5 76 C 81.5 73.5 79 72.5 75.5 73 C 73 73.5 71.5 75 72 77 C 72.5 78 74.5 78 76 77.5 C 78.5 76.8 81 78 81.5 76 Z"
          fill="#ffffff"
          stroke="#0b0e14"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* --- ASTRONAUT HELMET --- */}
        {/* Helmet Outer Shell */}
        <circle
          cx="49"
          cy="40"
          r="19.5"
          fill="#ffffff"
          stroke="#0b0e14"
          strokeWidth="2.4"
        />

        {/* Side Ear Cushions / Audio Cups */}
        {/* Left Ear Cushion */}
        <rect
          x="26.5"
          y="34"
          width="5"
          height="12"
          rx="2.5"
          fill="#f1f5f9"
          stroke="#0b0e14"
          strokeWidth="1.8"
        />
        {/* Right Ear Cushion */}
        <rect
          x="66.5"
          y="34"
          width="5"
          height="12"
          rx="2.5"
          fill="#f1f5f9"
          stroke="#0b0e14"
          strokeWidth="1.8"
        />

        {/* Helmet Forehead Brow Seam */}
        <path
          d="M 36 27 C 44 24 54 24 62 27"
          stroke="#0b0e14"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Dark Glossy Visor */}
        <ellipse
          cx="49"
          cy="41"
          rx="14.5"
          ry="13.5"
          fill="url(#astroVisorGrad)"
          stroke="#0b0e14"
          strokeWidth="2.2"
        />

        {/* Visor Specular Highlights (Curved Crescent + Dot) */}
        {/* Crescent Highlight (Top Left) */}
        <path
          d="M 39 35 C 42 30.5 48 29.5 53 30 C 47.5 32 43 35.5 41.5 41 C 40.5 44 40.5 47 41 49 C 39.5 45.5 38.5 40 39 35 Z"
          fill="#ffffff"
          opacity="0.65"
        />
        {/* Oval Glint (Right) */}
        <ellipse
          cx="59.5"
          cy="38"
          rx="2"
          ry="3"
          fill="#ffffff"
          opacity="0.75"
          transform="rotate(-15 59.5 38)"
        />
        {/* Tiny Star/Dot Highlight */}
        <circle
          cx="57"
          cy="46"
          r="1.2"
          fill="#ffffff"
          opacity="0.5"
        />

        {/* --- COMPUTER MONITOR (Foreground) --- */}
        {/* Monitor Stand Base */}
        <ellipse
          cx="49"
          cy="82"
          rx="7"
          ry="2"
          fill="#64748b"
          stroke="#0b0e14"
          strokeWidth="1.6"
        />
        {/* Stand Neck */}
        <path
          d="M 46 72 L 46 81.5 L 52 81.5 L 52 72 Z"
          fill="#94a3b8"
          stroke="#0b0e14"
          strokeWidth="1.8"
        />
        {/* Monitor Screen Back */}
        <rect
          x="32"
          y="56"
          width="34"
          height="22"
          rx="4"
          fill="url(#monitorGrad)"
          stroke="#0b0e14"
          strokeWidth="2.2"
        />
        {/* Monitor Inner Bevel Highlight */}
        <rect
          x="34"
          y="58"
          width="30"
          height="18"
          rx="2.5"
          fill="#cbd5e1"
          opacity="0.25"
        />
        {/* Center Camera / Apple-style Logo Dot on Monitor */}
        <circle
          cx="49"
          cy="65"
          r="2.2"
          fill="#0b0e14"
        />
      </svg>
    </div>
  );
}

const GeekMascot = AstronautMascot;

function Toast({ message, onClose }: { message: string | null; onClose: () => void }) {
  if (!message) return null;

  return (
    <div className="fixed top-20 right-6 z-50 animate-fade-in-up">
      <div className="px-4 py-2.5 rounded-xl border-2 border-white shadow-[4px_4px_0px_0px_#f97316] text-neutral-100 text-xs sm:text-sm flex items-center gap-2.5 bg-[#08090d]/95 backdrop-blur-md">
        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
          <Check className="w-3.5 h-3.5" />
        </div>
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-neutral-400 hover:text-white cursor-pointer p-0.5 rounded hover:bg-white/10"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-xl glass-header-blur border-2 border-white shadow-[4px_4px_0px_0px_#f97316] sm:shadow-[5px_5px_0px_0px_#f97316] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 group cursor-pointer animate-fade-in flex items-center justify-center"
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp className="w-5 h-5 text-white group-hover:text-orange-400 group-hover:-translate-y-0.5 transition-all duration-200 stroke-[2.2]" />
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'qa' | 'stack'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 glass-modal-backdrop animate-fade-in"
      onClick={onClose}
    >
      {/* Fixed-Size Frosted Glass Modal Window Container with Tech Grid accents */}
      <div 
        className="relative w-full max-w-2xl h-[580px] sm:h-[620px] max-h-[88vh] bg-[#0b0e14]/98 backdrop-blur-2xl rounded-2xl border-2 border-white shadow-[8px_8px_0px_0px_#f97316] sm:shadow-[10px_10px_0px_0px_#f97316] overflow-hidden flex flex-col text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Tech Corner Markers */}
        <div className="absolute top-2.5 left-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>
        <div className="absolute top-2.5 right-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>
        <div className="absolute bottom-2.5 left-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>
        <div className="absolute bottom-2.5 right-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>

        {/* Fixed Header */}
        <div className="p-5 sm:p-6 border-b border-white/[0.08] shrink-0 flex items-start justify-between gap-4 bg-white/[0.02]">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
              <span className="text-orange-400 font-semibold font-mono">{project.primaryLanguage}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="font-mono text-neutral-300">{project.status} Repository</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-0.5">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white hover:text-orange-400 bg-[#0b0e14] transition-all cursor-pointer border-2 border-white shadow-[2px_2px_0px_0px_#f97316] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Fixed Modal Tab Switcher */}
        <div className="px-5 sm:px-6 pt-3 border-b border-white/[0.08] shrink-0 flex items-center gap-2 bg-white/[0.02]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'overview'
                ? 'border-orange-500 text-white'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-orange-400" />
            <span>Architecture & Specs</span>
          </button>

          <button
            onClick={() => setActiveTab('qa')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'qa'
                ? 'border-amber-500 text-white'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Testing & Edge Cases</span>
          </button>

          <button
            onClick={() => setActiveTab('stack')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'stack'
                ? 'border-orange-500 text-white'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-orange-400" />
            <span>Tech Stack</span>
          </button>
        </div>

        {/* Scrollable Content Body with Constant Flex-1 Height */}
        <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-4 text-sm bg-transparent">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                  // SYSTEM OVERVIEW
                </h4>
                <p className="text-neutral-300 leading-relaxed text-xs sm:text-sm">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                  // SOFTWARE ENGINEERING IMPLEMENTATION
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {project.sdPerspective.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl tech-card text-xs text-neutral-300 border border-white/10">
                <span className="font-semibold text-white font-mono">ARCHITECTURAL NOTE: </span>
                <span>{project.architectureNotes}</span>
              </div>
            </div>
          )}

          {activeTab === 'qa' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 font-mono">
                  // TESTING STRATEGY & VERIFICATION
                </h4>
                <p className="text-neutral-300 leading-relaxed text-xs sm:text-sm mb-3">
                  Tested systematically across boundary conditions, corrupt or edge inputs, and cross-platform runtimes.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                  {project.qaPerspective.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.daPerspective && (
                <div className="pt-3 border-t border-white/[0.08]">
                  <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                    // DATA & EVALUATION METRICS
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {project.daPerspective.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'stack' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                  // LIBRARIES & RUNTIMES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 tech-card rounded-lg text-xs font-mono text-neutral-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.08]">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                  // KEY MILESTONES & OUTCOMES
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {project.keyHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Fixed Footer */}
        <div className="p-4 border-t border-white/[0.08] shrink-0 flex items-center justify-between gap-3 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl border border-white/40 hover:border-red-500 shadow-[2px_2px_0px_0px_#ef4444] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3 text-neutral-300" />
              </a>
            )}
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-xl border-2 border-white shadow-[3px_3px_0px_0px_#f97316] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3 h-3 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. PAGE SECTIONS
// ==========================================

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pageScrollPercent, setPageScrollPercent] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY || 0;
      const totalHeight = (document.documentElement.scrollHeight || 0) - (window.innerHeight || 0);
      if (totalHeight > 0) {
        const currentProgress = (scrollY / totalHeight) * 100;
        if (Number.isFinite(currentProgress)) {
          setPageScrollPercent(Math.min(100, Math.max(0, currentProgress)));
        }
      }
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const navLinks = [
    { label: 'Skills', href: '#skills', index: '01' },
    { label: 'Projects', href: '#projects', index: '02' },
    { label: 'About', href: '#about', index: '03' },
    { label: 'Education', href: '#education', index: '04' },
    { label: 'Contact', href: '#contact', index: '05' },
  ];

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full glass-header backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          
          {/* Brand Wordmark - Scrolls fully to top */}
          <a 
            href="#" 
            onClick={handleScrollToTop}
            className="text-white hover:text-orange-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
            title="Scroll to top"
          >
            <GeekMascot className="w-9 h-9 sm:w-10 sm:h-10" />
            <span className="font-signature font-bold text-2xl sm:text-[28px] tracking-[0.04em] text-white group-hover:text-orange-400 transition-colors select-none leading-none pt-1">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-400 px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
              DEV & QA
            </span>
          </a>

          {/* Navigation Links with Clean Grid/Tech Accent */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1.5 hover:text-white transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span className="text-[10px] font-mono text-neutral-400 group-hover:text-orange-400 transition-colors">{link.index}.</span>
                <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white bg-[#0b0e14] hover:bg-[#131722] rounded-xl border border-white/40 hover:border-white shadow-[2px_2px_0px_0px_#f97316] transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Global Page Scroll Progress Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.04]">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400 transition-[width] duration-75 shadow-[0_0_8px_rgba(249,115,22,0.8)]" 
            style={{ width: `${pageScrollPercent}%` }}
          />
        </div>
      </header>

      {/* Mobile Navigation Floating Overlay Window Modal */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex items-start justify-center pt-20 px-4 glass-modal-backdrop animate-fade-in">
          <div 
            className="fixed inset-0 -z-10"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div 
            className="w-full max-w-sm rounded-2xl bg-[#0b0e14]/98 backdrop-blur-2xl p-6 border-2 border-white shadow-[6px_6px_0px_0px_#f97316] space-y-4 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.8)]"></span>
                <span>Navigation</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-white hover:text-orange-400 bg-[#0b0e14] border border-white/40 hover:border-white shadow-[2px_2px_0px_0px_#f97316] cursor-pointer transition-all"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors cursor-pointer"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-neutral-400">{link.index}</span>
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-xl border-2 border-white shadow-[3px_3px_0px_0px_#f97316] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Hero() {
  const profileImageUrl = "https://i.ibb.co/Qv6rxwny/Screenshot-20261012-211706-Photos-2.jpg";
  const [imgSrc, setImgSrc] = useState(profileImageUrl);
  const [scrollScale, setScrollScale] = useState(1.43);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || 0;
          const maxScroll = 350;
          const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
          const newScale = 1.43 - progress * 0.33;
          if (Number.isFinite(newScale)) {
            setScrollScale(newScale);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="intro" className="relative pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-32 lg:pb-36 border-b border-white">
      
      {/* Decorative Technical Crosshairs and Grid Coordinates */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-2 left-6 text-neutral-400 font-mono text-[10px] hidden sm:block select-none pointer-events-none">
          SYS.LOC // [29.32° N, 76.31° E]
        </div>
        <div className="absolute top-2 right-6 text-neutral-400 font-mono text-[10px] hidden sm:block select-none pointer-events-none">
          STATUS // AVAILABLE_FOR_ROLES
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up relative z-10">
        
        {/* Dynamic Scale Square Profile Picture Frame with clearance below header */}
        <div className="flex justify-center pt-14 sm:pt-16 md:pt-20 pb-2">
          <div 
            className="relative aspect-square w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-3xl overflow-hidden bg-[#0b0e14] border-2 border-white shadow-[6px_6px_0px_0px_#f97316] sm:shadow-[8px_8px_0px_0px_#f97316] group transition-transform duration-75 will-change-transform"
            style={{
              transform: `scale(${scrollScale})`,
              transformOrigin: 'bottom center',
            }}
          >
            {/* Subtle Corner Markers on Photo Frame */}
            <div className="absolute top-2 left-2 text-white/30 font-mono text-[10px] pointer-events-none select-none z-10">+</div>
            <div className="absolute top-2 right-2 text-white/30 font-mono text-[10px] pointer-events-none select-none z-10">+</div>

            <img
              src={imgSrc}
              alt="Sahil Khatkar"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              onError={() => {
                setImgSrc(fallbackPhoto);
              }}
            />
          </div>
        </div>

        {/* Sahil Khatkar text positioned below the picture frame */}
        <div className="relative z-10 mt-6 sm:mt-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-xl">
            Sahil Khatkar
          </h1>

          {/* Clear, High-Contrast Subtitle: SOFTWARE DEVELOPER & TESTER/QA */}
          <p className="mt-2.5 text-xs sm:text-sm font-bold text-orange-400 tracking-wider uppercase font-mono">
            SOFTWARE DEVELOPER & TESTER/QA
          </p>

          {/* Thin gradient strip separator */}
          <div 
            aria-hidden="true" 
            className="mt-4 mx-auto w-24 sm:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full shadow-[0_0_10px_rgba(251,146,60,0.6)]" 
          />
        </div>

        {/* Short Precise Introduction */}
        <div className="mt-8 max-w-2xl mx-auto space-y-4 text-left">
          <div className="space-y-1 sm:space-y-1.5">
            <p className="text-xl sm:text-2xl md:text-[26px] font-bold text-white tracking-tight leading-snug">
              Engineering for speed, testing for durability.
            </p>
            <p className="text-xl sm:text-2xl md:text-[26px] font-bold text-white tracking-tight leading-snug">
              I build software end-to-end and <span className="text-orange-400">test it rigorously</span> for dependable delivery.
            </p>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            I’m a software engineer. Bring me an idea and I’ll turn it into a real product — whether you have a project to build from scratch, or an existing app that needs debugging, fixing, and solid architecture, I get it working properly.
          </p>
        </div>

        {/* Actions with Grid Theme */}
        <div className="mt-8 max-w-2xl mx-auto flex flex-wrap items-center justify-center sm:justify-start gap-3.5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 border-2 border-white shadow-[4px_4px_0px_0px_#f97316] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all group cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform stroke-[2.5]" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0d1017] hover:bg-white/[0.08] hover:text-orange-400 border-2 border-white shadow-[4px_4px_0px_0px_#f97316] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all group cursor-pointer"
          >
            <Mail className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
            <span>Get in Touch</span>
          </a>
        </div>

      </div>
    </section>
  );
}

function SubContainerDottedBorder({ rx = 12 }: { rx?: number }) {
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none rounded-xl" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect 
        x="0.75" 
        y="0.75" 
        width="calc(100% - 1.5px)" 
        height="calc(100% - 1.5px)" 
        rx={rx} 
        ry={rx} 
        fill="none" 
        className="stroke-white/25 group-hover:stroke-white/50 transition-colors" 
        strokeWidth="1.5" 
        strokeDasharray="4 3.5" 
        style={{ width: 'calc(100% - 1.5px)', height: 'calc(100% - 1.5px)' }}
      />
    </svg>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="pt-24 sm:pt-32 lg:pt-36 pb-24 sm:pb-32 lg:pb-36 border-b border-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Technical Pre-header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-orange-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span>01 // TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skillsets & Tech Stack
          </h2>
          <p className="mt-1 text-sm text-neutral-300">
            Concrete development, testing, and analytical capabilities.
          </p>
        </div>

        {/* Minimal Tech Stack Main Outer Container: White border on all 4 sides, orange shadows on right and bottom */}
        <div className="relative rounded-2xl border-2 border-white bg-[#0b0e14]/90 backdrop-blur-xl p-4 sm:p-6 lg:p-7 shadow-[6px_6px_0px_0px_#f97316] sm:shadow-[8px_8px_0px_0px_#f97316]">
          {/* Subtle Technical Corner Markers */}
          <div className="absolute top-2.5 left-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>
          <div className="absolute top-2.5 right-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>
          <div className="absolute bottom-2.5 left-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>
          <div className="absolute bottom-2.5 right-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>

          {/* Minimal Categories Grid: 2 top cards (Software Dev & QA), 3 bottom cards (Backend, ML/AI, Dev Tools) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {SKILLSETS_DATA.map((group, idx) => {
              const colSpan = idx < 2 ? 'lg:col-span-3' : 'lg:col-span-2';
              const mdColSpan = idx === 4 ? 'md:col-span-2' : 'md:col-span-1';
              return (
                <div
                  key={group.title}
                  className={`${colSpan} ${mdColSpan} relative rounded-xl bg-[#0d1017]/90 p-3.5 sm:p-4 transition-colors flex flex-col justify-between group`}
                >
                  <SubContainerDottedBorder />
                  <div>
                    {/* Compact Category Header */}
                    <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-white/[0.08]">
                      <group.icon className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <h3 className="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-white group-hover:text-orange-300 transition-colors truncate">
                        {group.minimalTitle}
                      </h3>
                    </div>

                    {/* Compact Short Precise Skills Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-mono text-neutral-200 bg-white/[0.04] border border-white/10 rounded-md hover:border-orange-400 hover:text-white hover:bg-orange-500/10 transition-colors select-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}


function ProjectsSection({ onOpenProjectModal }: { onOpenProjectModal: (project: Project) => void }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el || el.clientWidth <= 0) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardStep = firstCard ? firstCard.offsetWidth + 24 : (el.clientWidth > 500 ? 424 : el.clientWidth * 0.88);
    if (!cardStep || cardStep <= 0) return;
    const rawIdx = Math.round(el.scrollLeft / cardStep);
    if (Number.isFinite(rawIdx)) {
      const clampedIdx = Math.min(HIGHLIGHTED_PROJECTS.length - 1, Math.max(0, rawIdx));
      setActiveCardIndex(clampedIdx);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollToCard = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardStep = firstCard ? firstCard.offsetWidth + 24 : (el.clientWidth > 500 ? 424 : el.clientWidth * 0.88);
    el.scrollTo({
      left: Math.max(0, index) * cardStep,
      behavior: 'smooth',
    });
  };

  return (
    <section id="projects" className="pt-24 sm:pt-32 lg:pt-36 pb-24 sm:pb-32 lg:pb-36 border-b border-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Technical Pre-header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-orange-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span>02 // SHIPPED SYSTEMS & WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Highlighted Projects
          </h2>
          <p className="mt-1 text-sm text-neutral-300">
            Shipped applications with client-side privacy, performance, and testing rigor.
          </p>
        </div>

        {/* Horizontal Cards Scrollable Container - Individual containers with white border and orange shadow */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pt-2 pb-6 px-1 sm:px-2"
        >
          {HIGHLIGHTED_PROJECTS.map((project, idx) => {
            const isMoreProjectsCard = project.id === 'more-projects';
            const isActive = activeCardIndex === idx;

            return (
              <div
                key={project.id}
                className="snap-start shrink-0 w-[84vw] sm:w-[380px] md:w-[410px] rounded-2xl p-5 sm:p-6 relative border-2 border-white shadow-[6px_6px_0px_0px_#f97316] sm:shadow-[8px_8px_0px_0px_#f97316] bg-[#0b0e14]/95 backdrop-blur-xl flex flex-col justify-between transition-colors duration-200 hover:bg-[#0e121a] group cursor-default"
              >
                {/* Subtle Technical Corner Markers */}
                <div className="absolute top-2.5 left-3 text-white/30 group-hover:text-orange-400 font-mono text-[10px] select-none pointer-events-none transition-colors duration-200">+</div>
                <div className="absolute top-2.5 right-3 text-white/30 group-hover:text-orange-400 font-mono text-[10px] select-none pointer-events-none transition-colors duration-200">+</div>

                <div>
                  {/* First line: Primary Language & Status on Left, Live button on Top Right */}
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                    <div className="flex items-center gap-2">
                      {isMoreProjectsCard ? (
                        <span className="font-semibold text-orange-400 font-mono">
                          EXPLORE MORE
                        </span>
                      ) : (
                        <span className="font-semibold text-orange-400 font-mono">
                          {project.primaryLanguage}
                        </span>
                      )}
                      <span aria-hidden="true" className="text-neutral-600">·</span>
                      <span className="font-mono text-neutral-300">
                        {isMoreProjectsCard ? 'GitHub Repositories' : project.status}
                      </span>
                    </div>

                    {/* Live link button on top right without external link icon */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#131722] hover:bg-[#1a2030] border border-white/20 hover:border-red-500 text-[11px] font-mono font-medium text-white transition-all cursor-pointer shadow-sm group/live"
                        title={`Open ${project.name} live link`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                        <span className="font-bold">Live</span>
                      </a>
                    )}
                  </div>

                  {/* Project Snapshot Preview: exact 1080x463 resolution proportion, no cropping, dark bottom fade-out */}
                  {project.snapshotImage && (
                    <div 
                      className="relative w-full aspect-[1080/463] rounded-lg overflow-hidden mb-3.5 bg-[#0b0e14]"
                      style={{ aspectRatio: '1080 / 463' }}
                    >
                      <img
                        src={project.snapshotImage}
                        alt={`${project.name} snapshot`}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      {/* Dark fade-out effect at bottom edge merging smoothly into title and background */}
                      <div 
                        className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(11, 14, 20, 0) 0%, rgba(11, 14, 20, 0.35) 50%, rgba(11, 14, 20, 0.8) 85%, #0b0e14 100%)'
                        }}
                      />
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-orange-300 transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5 mb-3 font-medium">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="my-3">
                    <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-orange-400" />
                      <span>{isMoreProjectsCard ? 'PASSION & EXPERTISE' : 'TECH STACK'}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-0.5 text-[11px] font-mono text-neutral-200 bg-white/[0.04] border border-white/10 hover:border-orange-400 hover:text-white hover:bg-orange-500/10 transition-colors duration-150 cursor-default rounded-md tracking-tight"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-4 text-xs text-neutral-300">
                    {project.keyHighlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  {isMoreProjectsCard ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-xl border-2 border-white shadow-[3px_3px_0px_0px_#f97316] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all group/btn"
                    >
                      <Github className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform duration-200" />
                      <span>Explore All Projects on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/90" />
                    </a>
                  ) : (
                    <>
                      <button
                        onClick={() => onOpenProjectModal(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#0b0e14] hover:bg-[#151923] rounded-lg transition-all cursor-pointer border-2 border-white shadow-[3px_3px_0px_0px_#f97316] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                      >
                        <Layers className="w-3.5 h-3.5 text-orange-400" />
                        <span>Technical Specs</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-100 hover:text-white bg-[#0b0e14]/80 hover:bg-[#151923] rounded-lg transition-all border border-white/50 hover:border-white shadow-[2px_2px_0px_0px_#f97316] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                      >
                        <Github className="w-3.5 h-3.5 text-orange-400" />
                        <span>Code</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Navigation Footer: Squircle Scroll Dots (Bottom Left) & Project Counter "1/6" (Bottom Right) */}
        <div className="flex items-center justify-between mt-6 sm:mt-8 px-1 select-none">
          {/* Squircle Scroll Dots Indicator at Bottom Left */}
          <div className="flex items-center gap-2">
            {HIGHLIGHTED_PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                aria-label={`Jump to project ${i + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  activeCardIndex === i 
                    ? 'w-7 sm:w-8 h-2.5 sm:h-3 rounded-[4px] sm:rounded-[5px] bg-orange-500 border-2 border-white shadow-[2px_2px_0px_0px_#f97316]' 
                    : 'w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-[3px] sm:rounded-[4px] bg-transparent border-2 border-white/60 hover:border-white'
                }`}
              />
            ))}
          </div>

          {/* Project Numbering at Bottom Right (e.g. 1/7) in Geist Sans */}
          <div className="font-sans text-xs sm:text-sm font-semibold tracking-tight text-neutral-300 flex items-center">
            <span className="text-white font-bold">{Number.isFinite(activeCardIndex) ? activeCardIndex + 1 : 1}</span>
            <span className="text-neutral-500 mx-0.5">/</span>
            <span className="text-neutral-400">{HIGHLIGHTED_PROJECTS.length}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="pt-24 sm:pt-32 lg:pt-36 pb-24 sm:pb-32 lg:pb-36 border-b border-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Technical Pre-header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-orange-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span>03 // SKILLS, AIM & DEDICATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-1 text-sm text-neutral-300">
            How I build, how I test, and what I’m aiming for as an engineer.
          </p>
        </div>

        {/* Main About Container: White border on all 4 sides, orange shadows on right and bottom */}
        <div className="relative rounded-2xl border-2 border-white bg-[#0b0e14]/90 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[6px_6px_0px_0px_#f97316] sm:shadow-[8px_8px_0px_0px_#f97316]">
          {/* Subtle Technical Corner Markers */}
          <div className="absolute top-2.5 left-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>
          <div className="absolute top-2.5 right-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>
          <div className="absolute bottom-2.5 left-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>
          <div className="absolute bottom-2.5 right-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>

          <div className="max-w-3xl space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed">
            
            <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
              I’m <span className="text-orange-400 font-bold">Sahil Khatkar</span>, an MCA graduate and software developer focused on building fast web software and testing it thoroughly so it doesn’t break in production.
            </p>

            <div className="space-y-2">
              <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span>What I Build & The Skills I Rely On</span>
              </h3>
              <p>
                My day-to-day stack revolves around <strong>TypeScript, JavaScript, Python, React, Next.js, Vite, and Tailwind CSS</strong>. I enjoy building things that run fast and don’t need a massive cloud infrastructure behind them — like client-side web apps using WebAssembly, Web Workers, and HTML5 Canvas that do heavy document or media processing right inside the browser.
              </p>
              <p>
                At the same time, I don’t treat testing as an afterthought. Because of my background in Software Testing (STLC), I write code thinking about how it will fail: edge cases, slow network connections, weird user inputs, and race conditions. That combination means the software I write isn't just nice on the surface; it stays stable under pressure.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span>My Aim as an Engineer</span>
              </h3>
              <p>
                My goal is simple: to work as a software engineer or full-stack developer on real, high-impact products where performance and code quality actually matter. Right now, I’m actively pushing deeper into backend engineering, relational databases, and system design so I can take full ownership of features from database schema all the way to the frontend.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span>My Dedication & Work Ethic</span>
              </h3>
              <p>
                I don’t just watch tutorials or collect certificates. I build complete, functioning tools from scratch — projects like PDFPilot (24 browser-based PDF tools), Smart Plant Care (ML disease detection), YTPilot, and QRPilot. I spend hours tracking down edge cases, refining UI responsiveness, and testing across browsers. If something has my name on it, I make sure it’s fast, reliable, and easy for the next person to read and maintain.
              </p>
            </div>

            {/* Formatted Engineering Motto in Dotted Sub-Card Container */}
            <div className="pt-5 sm:pt-6">
              <div className="relative rounded-xl bg-[#0d1017]/90 p-4 sm:p-5 transition-colors group">
                <SubContainerDottedBorder />
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-[28px] sm:text-[34px] text-orange-400 font-serif leading-none select-none shrink-0 mt-0.5">
                    “
                  </span>
                  <blockquote className="text-[13.3px] sm:text-[15.2px] md:text-[17.1px] font-bold text-white tracking-tight leading-snug">
                    I care about two things: Software that’s fast, and code that doesn’t fall apart the moment someone else touches it.
                  </blockquote>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="pt-24 sm:pt-32 lg:pt-36 pb-24 sm:pb-32 lg:pb-36 border-b border-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Technical Pre-header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-orange-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span>04 // ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-1 text-sm text-neutral-300">
            Formal degrees in Computer Applications and English Literature Honours.
          </p>
        </div>

        {/* Education Signature Main Outer Container: White border on all 4 sides, orange shadows on right and bottom */}
        <div className="relative rounded-2xl border-2 border-white bg-[#0b0e14]/90 backdrop-blur-xl p-5 sm:p-7 lg:p-9 shadow-[6px_6px_0px_0px_#f97316] sm:shadow-[8px_8px_0px_0px_#f97316]">
          {/* Subtle Technical Corner Markers */}
          <div className="absolute top-2.5 left-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>
          <div className="absolute top-2.5 right-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>
          <div className="absolute bottom-2.5 left-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>
          <div className="absolute bottom-2.5 right-3 text-white/30 font-mono text-[10px] select-none pointer-events-none">+</div>

          {/* Education Sub Cards: Minimal, compact, NO orange shadows, and NO coursework summary paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {EDUCATION_RECORDS.map((edu, idx) => {
              const isMCA = edu.degree.includes('MCA');
              const isBA = edu.degree.includes('English Hons');

              return (
                <div
                  key={idx}
                  className="relative rounded-xl bg-[#0d1017]/90 p-4 sm:p-5 transition-colors flex flex-col justify-between group"
                >
                  <SubContainerDottedBorder />
                  {/* Duration Period in Top-Right Corner */}
                  <div className="absolute top-3.5 right-3.5 sm:right-4 font-mono text-xs font-semibold text-orange-400 select-none">
                    {edu.period}
                  </div>

                  <div>
                    <div className="flex items-center text-xs text-neutral-400 mb-2.5 pr-24">
                      <span className="font-mono text-neutral-400">{edu.location}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                        isMCA 
                          ? 'bg-orange-500/10 text-orange-400 border-orange-500/30' 
                          : isBA 
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' 
                          : 'bg-white/5 text-neutral-300 border-white/20'
                      }`}>
                        {isMCA ? (
                          <GraduationCap className="w-4 h-4" />
                        ) : isBA ? (
                          <BookOpen className="w-4 h-4" />
                        ) : (
                          <Award className="w-4 h-4" />
                        )}
                      </div>

                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-orange-300 transition-colors leading-snug">
                          {edu.degree}
                        </h3>
                        <p className="text-xs text-neutral-300 mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py-1.5 px-3 rounded-lg bg-black/50 border border-white/10 inline-flex items-center self-start text-xs mt-3">
                    <span className="text-orange-300 font-mono font-semibold">{edu.score}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

function XBrandIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TelegramBrandIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.94-1.28 4.91-2.12 5.9-2.54 2.81-1.17 3.39-1.37 3.77-1.38.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
    </svg>
  );
}

function ContactSection({ onCopyText }: { onCopyText: (text: string, label: string) => void }) {
  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [drafted, setDrafted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showQuickForm, setShowQuickForm] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).catch(() => {});
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleGenerateMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Connecting with Sahil Khatkar - Message from ${senderName || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hi Sahil,\n\n${senderMessage || 'I came across your portfolio and wanted to reach out regarding an opportunity.'}\n\nBest regards,\n${senderName || ''}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setDrafted(true);
  };

  return (
    <section id="contact" className="pt-24 sm:pt-32 lg:pt-36 pb-24 sm:pb-32 lg:pb-40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Technical Pre-header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-orange-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span>05 // QUICK MESSAGE & CONTACT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Contact
          </h2>
          <p className="mt-1 text-sm text-neutral-300">
            Open to software engineering and testing opportunities, collaborations, or tech discussions.
          </p>
        </div>

        {/* Contact Redesign: Full Orange background, white border on all 4 sides, white shadow */}
        <div className="relative rounded-2xl border-2 sm:border-[2.5px] border-white bg-orange-500 p-6 sm:p-8 lg:p-10 shadow-[6px_6px_0px_0px_#ffffff] sm:shadow-[8px_8px_0px_0px_#ffffff] text-white">
          {/* Subtle Technical Corner Markers */}
          <div className="absolute top-2.5 left-3 text-white/50 font-mono text-[11px] select-none pointer-events-none">+</div>
          <div className="absolute top-2.5 right-3 text-white/50 font-mono text-[11px] select-none pointer-events-none">+</div>
          <div className="absolute bottom-2.5 left-3 text-white/50 font-mono text-[11px] select-none pointer-events-none">+</div>
          <div className="absolute bottom-2.5 right-3 text-white/50 font-mono text-[11px] select-none pointer-events-none">+</div>

          <div className="max-w-3xl">
            {/* Main Title (black font color, slightly larger size) */}
            <h3 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-black tracking-tight leading-tight">
              Have a project or opportunity in mind?
            </h3>

            {/* Subtitle / Description (black font color) */}
            <p className="mt-2.5 text-sm sm:text-base text-black font-medium leading-relaxed max-w-2xl">
              I'm always open to discussing software engineering roles, testing & QA workflows, open source collaborations, or engineering ideas.
            </p>

            {/* Direct Email Address Display */}
            <div className="mt-5 sm:mt-6">
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-black/25 border border-white/30 backdrop-blur-sm">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="font-mono text-base sm:text-xl font-bold text-white hover:underline tracking-tight break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Action Buttons: Two white buttons with black borders and black shadows */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 relative">
              {/* Copy Email Button - Fixed width so it doesn't change size when Copied! is displayed */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-[138px] sm:w-[148px] shrink-0 inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-neutral-900 bg-white hover:bg-neutral-100 border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-900" />
                    <span>Copy email</span>
                  </>
                )}
              </button>

              {/* Write Email Button with Dropdown */}
              <div className="relative inline-block" ref={dropdownRef}>
                <div className="inline-flex rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_#000000] bg-white overflow-hidden hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Connecting%20with%20Sahil%20Khatkar`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 font-bold text-xs sm:text-sm text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-neutral-900" />
                    <span>Write email</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="px-2.5 sm:px-3 border-l-2 border-black hover:bg-neutral-100 text-neutral-900 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Toggle email client options"
                    aria-expanded={dropdownOpen}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-64 rounded-xl border-2 border-black bg-white shadow-[5px_5px_0px_0px_#000000] py-1.5 z-30 font-sans">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Connecting%20with%20Sahil%20Khatkar`}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-neutral-900 hover:bg-orange-50 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>Default Email App</span>
                    </a>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Connecting%20with%20Sahil%20Khatkar`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-neutral-900 hover:bg-orange-50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-red-600 shrink-0" />
                      <span>Open in Gmail (Web)</span>
                    </a>
                    <a
                      href={`https://outlook.live.com/mail/0/deeplink/compose?to=${PERSONAL_INFO.email}&subject=Connecting%20with%20Sahil%20Khatkar`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-neutral-900 hover:bg-orange-50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Open in Outlook (Web)</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setShowQuickForm(!showQuickForm);
                        setDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-neutral-900 hover:bg-orange-50 border-t border-neutral-200 transition-colors text-left cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-neutral-800 shrink-0" />
                      <span>{showQuickForm ? 'Hide Quick Note Composer' : 'Write Quick Note On-Page'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Optional Quick Message Composer */}
            {showQuickForm && (
              <form 
                onSubmit={handleGenerateMailto} 
                className="mt-6 pt-5 border-t border-white/30 space-y-3.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Quick Message Note
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowQuickForm(false)}
                    className="text-xs text-white/80 hover:text-white font-mono underline cursor-pointer"
                  >
                    Close
                  </button>
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/90 mb-1">
                    YOUR NAME OR ORGANIZATION
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex (Engineering Lead / Recruiter)"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full bg-black/35 border border-white/40 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/40 transition-colors font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/90 mb-1">
                    MESSAGE NOTE
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Write your note or collaboration inquiry here..."
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    className="w-full bg-black/35 border border-white/40 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/40 resize-none transition-colors font-sans"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-white hover:bg-neutral-100 border-2 border-black shadow-[3px_3px_0px_0px_#000000] cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                  {drafted && (
                    <span className="text-xs text-white flex items-center gap-1 font-mono font-bold">
                      <Check className="w-3.5 h-3.5" />
                      <span>Email client triggered!</span>
                    </span>
                  )}
                </div>
              </form>
            )}

          </div>
        </div>

        {/* Footer with Direct Channels (Social Media Icon Buttons moved here) */}
        <footer className="mt-20 sm:mt-28 pt-12 border-t border-white space-y-10">
          {/* Direct Channels / Social Media Icon Buttons: Email, GitHub, LinkedIn, Telegram, X */}
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
              DIRECT CHANNELS & PROFILES
            </span>
            <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4">
              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border-2 border-white bg-[#0d1017] hover:bg-orange-500 text-white flex items-center justify-center shadow-[3px_3px_0px_0px_#f97316] hover:shadow-[3px_3px_0px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all group cursor-pointer"
                title={`Email: ${PERSONAL_INFO.email}`}
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-neutral-200 group-hover:text-white transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border-2 border-white bg-[#0d1017] hover:bg-orange-500 text-white flex items-center justify-center shadow-[3px_3px_0px_0px_#f97316] hover:shadow-[3px_3px_0px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all group cursor-pointer"
                title={`GitHub: ${PERSONAL_INFO.githubUsername}`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-neutral-200 group-hover:text-white transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border-2 border-white bg-[#0d1017] hover:bg-orange-500 text-white flex items-center justify-center shadow-[3px_3px_0px_0px_#f97316] hover:shadow-[3px_3px_0px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all group cursor-pointer"
                title={`LinkedIn: ${PERSONAL_INFO.linkedinUsername}`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-neutral-200 group-hover:text-white transition-colors" />
              </a>

              {/* Telegram */}
              <a
                href={PERSONAL_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border-2 border-white bg-[#0d1017] hover:bg-orange-500 text-white flex items-center justify-center shadow-[3px_3px_0px_0px_#f97316] hover:shadow-[3px_3px_0px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all group cursor-pointer"
                title={`Telegram: @${PERSONAL_INFO.telegramUsername}`}
                aria-label="Telegram"
              >
                <TelegramBrandIcon className="w-5 h-5 text-neutral-200 group-hover:text-white transition-colors" />
              </a>

              {/* X */}
              <a
                href={PERSONAL_INFO.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border-2 border-white bg-[#0d1017] hover:bg-orange-500 text-white flex items-center justify-center shadow-[3px_3px_0px_0px_#f97316] hover:shadow-[3px_3px_0px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all group cursor-pointer"
                title="X (https://x.com/SahilKhatkar11)"
                aria-label="X (Twitter)"
              >
                <XBrandIcon className="w-4 h-4 text-neutral-200 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Bottom Footer Information and Navigation */}
          <div className="pt-6 border-t border-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <div className="text-center sm:text-left">
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-base sm:text-lg font-bold text-white tracking-tight hover:text-orange-400 transition-colors inline-block cursor-pointer"
                title="Scroll to top"
              >
                Sahil Khatkar
              </a>
              <div className="text-xs text-orange-400/90 font-mono mt-0.5">
                Software Developer · Software Tester & QA
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-neutral-400 font-mono text-xs">
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <a href="#education" className="hover:text-white transition-colors">Education</a>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
}

// ==========================================
// 4. MAIN APP EXPORT
// ==========================================

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setToastMessage(label);
        setTimeout(() => setToastMessage(null), 3000);
      },
      () => {
        setToastMessage('Copied to clipboard');
        setTimeout(() => setToastMessage(null), 3000);
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-neutral-100 flex flex-col font-sans selection:bg-orange-600 selection:text-white relative overflow-x-clip">
      
      {/* ============================================================ */}
      {/* DUAL TECH GRID BACKGROUND SYSTEM & AMBIENT GLOWS            */}
      {/* ============================================================ */}
      
      {/* Primary 44px Technical Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none bg-tech-grid opacity-80 z-0 radial-mask-tech" 
        aria-hidden="true" 
      />

      {/* Secondary Fine Grid Overlay for blueprint depth */}
      <div 
        className="fixed inset-0 pointer-events-none bg-tech-grid-fine opacity-30 z-0 radial-mask-tech" 
        aria-hidden="true" 
      />

      {/* Top Ambient Warm Spotlight Glow behind Hero */}
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-orange-500/[0.12] via-amber-500/[0.04] to-transparent blur-[140px] pointer-events-none z-0" 
        aria-hidden="true" 
      />

      {/* Middle Accent Subtle Ambient Glow behind Projects */}
      <div 
        className="fixed top-[45%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-amber-500/[0.04] via-orange-500/[0.03] to-transparent blur-[160px] pointer-events-none z-0" 
        aria-hidden="true" 
      />

      {/* Content Canvas */}
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 pt-16">
          <Hero />
          <SkillsSection />
          <ProjectsSection onOpenProjectModal={setSelectedProject} />
          <AboutSection />
          <EducationSection />
          <ContactSection onCopyText={handleCopyText} />
        </main>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <ScrollToTop />

        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      </div>
    </div>
  );
}

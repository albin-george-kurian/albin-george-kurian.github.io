import { useState, useEffect, useRef, useCallback } from "react";

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   RESUME DATA  (from old file â€” complete & accurate)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const RESUME = {
  name: "Albin George Kurian",
  title: "GenAI/LLM Engineer",
  location: "Ernakulam, India",
  phone: "+917902759554",
  email: "albingeorgekurian3@gmail.com",
  github: "https://github.com/albin-george-kurian",
  linkedin: "https://www.linkedin.com/in/albin-george-kurian/",
  resumeUrl: "https://drive.google.com/drive/u/0/folders/1sM4Gft5pQHB9UaoKJwpr68jf95M30qFH",
  tagline: "I build production-ready GenAI systems with RAG, AI agents, MCP, knowledge graphs, and LLMOps - from research prototypes to scalable cloud deployments.",
  skills: {
    Languages:       ["Python", "SQL"],
    Frameworks:      ["LangChain", "LangGraph", "FastAPI"],
    Databases:       ["Weaviate", "Neo4j", "MySQL"],
    "AI & Tools":    ["LLMs", "RAG", "GraphRAG", "MCP", "AI Agents", "LLMOps", "Vector Databases", "Prompt Engineering", "Git", "Docker"],
    "Cloud & Tools": ["AWS"],
    Technologies:    ["Generative AI", "Knowledge Graphs", "Multi-Agent Systems", "REST APIs", "Observability", "FHIR", "OMOP", "Linux"],
  },
  experience: [
    {
      role: "AI/ML Engineer",
      company: "Feathersoft Info Solutions Private Limited",
      period: "May 2025 - Present | Kerala, India",
      badge: "Current",
      points: [
        "Designed and deployed an end-to-end RAG application serving 10,000+ daily users using LLMs, Google Embeddings, Weaviate, MySQL, FastAPI REST APIs, Docker, and Azure.",
        "Engineered a LangChain/LangGraph-based Agentic AI research assistant using a custom MCP server to orchestrate medical tools for trial scoring, patient eligibility, drug information retrieval, and knowledge graph queries, reducing manual effort by 40%.",
        "Developed LLM-powered automation tools using Gemini for graph extraction and Text-to-SQL generation, reducing manual effort by 60-80%.",
        "Built a LangGraph Agentic AI architecture with MCP tool calling, GraphRAG, SQL retrieval, planners, and multi-step reasoning.",
      ],
    },
    {
      role: "Chatbot Development Intern",
      company: "Infosys Springboard",
      period: "Oct 2024 - Dec 2024 | Remote, India",
      badge: null,
      points: [
        "Developed and optimized Retrieval-Augmented Generation (RAG) pipelines using LLMs.",
        "Built semantic search using FAISS, SentenceTransformers, and vector embeddings for real-time retrieval.",
        "Experimented with BERT, LLaMA 2, Transformers, and fine-tuning on domain-specific datasets.",
      ],
    },
    {
      role: "Remote Freelance AI Developer",
      company: "Self Employed",
      period: "Jan 2023 - Sep 2024 | Remote",
      badge: null,
      points: [
        "Built a RAG chatbot for a Poland restaurant client using LangChain, ChromaDB, and OpenAI; Dockerized and deployed it on AWS EC2.",
        "Automated Excel data separation for a hostel client using Python, cutting manual processing time by 70%.",
        "Built a RAG pipeline for a health-tech client using LangChain, MongoDB, and FastAPI, covering embeddings, vector store setup, and document-grounded retrieval for accurate responses.",
      ],
    },
  ],
  projects: [
    {
      title: "Project details coming soon",
      stack: "GenAI / LLM Engineering",
      github: "",
      desc: "Selected projects will be added here with architecture, tech stack, links, and impact metrics.",
      num: "01",
    },
    {
      title: "Project details coming soon",
      stack: "RAG / AI Agents / Knowledge Graphs",
      github: "",
      desc: "This section is ready for polished case-study content once the final project list is available.",
      num: "02",
    },
    {
      title: "Project details coming soon",
      stack: "Python / FastAPI / Cloud",
      github: "",
      desc: "Add project outcomes, repository links, screenshots, and deployment details here later.",
      num: "03",
    },
  ],
  publications: [
    {
      title: "Improving the Performance of Supervised Machine Learning Algorithms on Small Datasets",
      venue: "2024 4th International Conference on Ubiquitous Computing and Intelligent Information Systems (ICUIS)",
      publisher: "IEEE",
      date: "Dec 2024",
      desc: "Research focused on improving supervised machine learning performance in small-data scenarios.",
    },
  ],
  education: [
    { degree: "Bachelor of Engineering in Computer Science, CGPA: 8.1/10", school: "Dhanalakshmi Srinivasan College of Engineering", period: "2021 - 2025 | Coimbatore, Tamil Nadu", icon: "BE" },
  ],
};

/* â”€â”€ Skill orbs â€” names only (no icons), matching uploaded image style â”€â”€ */
const SKILL_ORBS = [
  { id: 1,  label: "LangChain" },
  { id: 2,  label: "LangGraph" },
  { id: 3,  label: "MCP" },
  { id: 4,  label: "RAG" },
  { id: 5,  label: "LLMs" },
  { id: 6,  label: "GraphRAG" },
  { id: 7,  label: "LLMOps" },
  { id: 8,  label: "AI Agents" },
  { id: 9,  label: "Vector DBs" },
  { id: 10, label: "Weaviate" },
  { id: 11, label: "Neo4j" },
  { id: 12, label: "Python" },
  { id: 13, label: "SQL" },
  { id: 14, label: "FastAPI" },
  { id: 15, label: "Docker" },
  { id: 16, label: "AWS" },
  { id: 17, label: "MySQL" },
  { id: 18, label: "FHIR" },
  { id: 19, label: "OMOP" },
  { id: 20, label: "Linux" },
  { id: 21, label: "Gemini" },
  { id: 22, label: "REST APIs" },
  { id: 23, label: "Observability" },
  { id: 24, label: "Knowledge Graphs" },
  { id: 25, label: "FAISS" },
  { id: 26, label: "ChromaDB" },
  { id: 27, label: "MongoDB" },
  { id: 28, label: "Multi-Agent" },
  { id: 29, label: "Text-to-SQL" },
  { id: 30, label: "Prompt Eng." },
];

/* Nav sections â€” includes About & Education from old file */
const SECTIONS = [
  { id: "hero",       label: "Home",       icon: "Home" },
  { id: "about",      label: "About",      icon: "About" },
  { id: "skills",     label: "Skills",     icon: "Skills" },
  { id: "experience", label: "Experience", icon: "Work" },
  { id: "publications", label: "Publications", icon: "P" },
  { id: "projects",   label: "Projects",   icon: "Projects" },
  { id: "education",  label: "Education",  icon: "Edu" },
  { id: "contact",    label: "Contact",    icon: "Contact" },
];

const MARQUEE_ITEMS = [
  "LangChain","LangGraph","MCP","RAG","GraphRAG","LLMs","AI Agents","LLMOps","Vector Databases","FastAPI","AWS","Docker","Python","Weaviate","Neo4j","Knowledge Graphs","Prompt Engineering",
  "LangChain","LangGraph","MCP","RAG","GraphRAG","LLMs","AI Agents","LLMOps","Vector Databases","FastAPI","AWS","Docker","Python","Weaviate","Neo4j","Knowledge Graphs","Prompt Engineering",
];

function SymbolIcon({ code, label }) {
  const codes = Array.isArray(code) ? code : [code];
  return <span aria-hidden="true" title={label}>{String.fromCodePoint(...codes)}</span>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   ORB LAYOUT â€” scattered positions matching Antigravity style
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const ORB_LAYOUT = [
  { top:"6%",  left:"1%",  sz:82,  dur:"9s",  del:"0s",   dx1:"7px", dy1:"-10px",dx2:"-5px",dy2:"12px", dx3:"8px", dy3:"4px"  },
  { top:"2%",  left:"10%", sz:96,  dur:"11s", del:"0.8s", dx1:"-8px",dy1:"-14px",dx2:"6px", dy2:"9px",  dx3:"-7px",dy3:"6px"  },
  { top:"20%", left:"6%",  sz:90,  dur:"8s",  del:"1.5s", dx1:"9px", dy1:"-8px", dx2:"-7px",dy2:"14px", dx3:"6px", dy3:"-5px" },
  { top:"12%", left:"19%", sz:100, dur:"10s", del:"0.4s", dx1:"-6px",dy1:"-12px",dx2:"8px", dy2:"10px", dx3:"-9px",dy3:"7px"  },
  { top:"0%",  left:"29%", sz:110, dur:"12s", del:"0.2s", dx1:"10px",dy1:"-16px",dx2:"-8px",dy2:"12px", dx3:"7px", dy3:"-8px" },
  { top:"20%", left:"33%", sz:94,  dur:"9s",  del:"1.2s", dx1:"-9px",dy1:"-10px",dx2:"6px", dy2:"14px", dx3:"-8px",dy3:"5px"  },
  { top:"6%",  left:"41%", sz:88,  dur:"11s", del:"0.6s", dx1:"8px", dy1:"-12px",dx2:"-6px",dy2:"10px", dx3:"9px", dy3:"6px"  },
  { top:"38%", left:"15%", sz:78,  dur:"7s",  del:"1.8s", dx1:"-7px",dy1:"-9px", dx2:"5px", dy2:"12px", dx3:"-6px",dy3:"4px"  },
  { top:"40%", left:"27%", sz:94,  dur:"10s", del:"0.3s", dx1:"9px", dy1:"-13px",dx2:"-7px",dy2:"10px", dx3:"8px", dy3:"-7px" },
  { top:"32%", left:"39%", sz:82,  dur:"8s",  del:"2.1s", dx1:"-8px",dy1:"-11px",dx2:"6px", dy2:"13px", dx3:"-7px",dy3:"6px"  },
  { top:"4%",  left:"53%", sz:86,  dur:"9s",  del:"1.1s", dx1:"7px", dy1:"-14px",dx2:"-9px",dy2:"9px",  dx3:"6px", dy3:"7px"  },
  { top:"20%", left:"59%", sz:98,  dur:"12s", del:"0.5s", dx1:"-10px",dy1:"-10px",dx2:"8px",dy2:"15px", dx3:"-7px",dy3:"4px"  },
  { top:"2%",  left:"67%", sz:82,  dur:"8s",  del:"1.6s", dx1:"8px", dy1:"-12px",dx2:"-6px",dy2:"10px", dx3:"7px", dy3:"-6px" },
  { top:"36%", left:"51%", sz:90,  dur:"10s", del:"0.7s", dx1:"-9px",dy1:"-9px", dx2:"7px", dy2:"13px", dx3:"-8px",dy3:"5px"  },
  { top:"42%", left:"63%", sz:78,  dur:"7s",  del:"2.3s", dx1:"6px", dy1:"-11px",dx2:"-8px",dy2:"9px",  dx3:"7px", dy3:"7px"  },
  { top:"8%",  left:"78%", sz:90,  dur:"9s",  del:"1.0s", dx1:"-7px",dy1:"-13px",dx2:"9px", dy2:"11px", dx3:"-6px",dy3:"4px"  },
  { top:"26%", left:"83%", sz:78,  dur:"11s", del:"0.9s", dx1:"8px", dy1:"-10px",dx2:"-6px",dy2:"14px", dx3:"7px", dy3:"-5px" },
  { top:"0%",  left:"87%", sz:70,  dur:"8s",  del:"1.4s", dx1:"-6px",dy1:"-12px",dx2:"7px", dy2:"9px",  dx3:"-8px",dy3:"6px"  },
  { top:"22%", left:"77%", sz:86,  dur:"10s", del:"0.2s", dx1:"9px", dy1:"-11px",dx2:"-7px",dy2:"13px", dx3:"6px", dy3:"-7px" },
  { top:"38%", left:"4%",  sz:70,  dur:"7s",  del:"2.5s", dx1:"-8px",dy1:"-9px", dx2:"6px", dy2:"12px", dx3:"-5px",dy3:"5px"  },
  { top:"48%", left:"87%", sz:74,  dur:"9s",  del:"1.7s", dx1:"7px", dy1:"-13px",dx2:"-9px",dy2:"8px",  dx3:"6px", dy3:"6px"  },
  { top:"54%", left:"39%", sz:78,  dur:"8s",  del:"0.8s", dx1:"-7px",dy1:"-10px",dx2:"8px", dy2:"13px", dx3:"-6px",dy3:"4px"  },
  { top:"0%",  left:"29%", sz:110, dur:"12s", del:"0.2s", dx1:"10px",dy1:"-16px",dx2:"-8px",dy2:"12px", dx3:"7px", dy3:"-8px" },
  { top:"2%",  left:"67%", sz:82,  dur:"8s",  del:"1.6s", dx1:"8px", dy1:"-12px",dx2:"-6px",dy2:"10px", dx3:"7px", dy3:"-6px" },
  { top:"18%", left:"12%", sz:94,  dur:"11s", del:"0.4s", dx1:"-9px",dy1:"-11px",dx2:"8px", dy2:"14px", dx3:"-7px",dy3:"5px"  },
  { top:"32%", left:"71%", sz:88,  dur:"9s",  del:"1.1s", dx1:"7px", dy1:"-12px",dx2:"-8px",dy2:"10px", dx3:"6px", dy3:"-7px" },
  { top:"46%", left:"23%", sz:74,  dur:"7s",  del:"2.1s", dx1:"-8px",dy1:"-10px",dx2:"6px", dy2:"12px", dx3:"-7px",dy3:"5px"  },
  { top:"12%", left:"55%", sz:98,  dur:"10s", del:"0.6s", dx1:"9px", dy1:"-13px",dx2:"-8px",dy2:"11px", dx3:"7px", dy3:"-6px" },
  { top:"38%", left:"81%", sz:70,  dur:"8s",  del:"1.8s", dx1:"-6px",dy1:"-11px",dx2:"7px", dy2:"10px", dx3:"-8px",dy3:"7px"  },
  { top:"11%", left:"33%", sz:86,  dur:"9s",  del:"1.3s", dx1:"8px", dy1:"-12px",dx2:"-6px",dy2:"13px", dx3:"6px", dy3:"-5px" },
  { top:"6%",  left:"17%", sz:78,  dur:"11s", del:"0.5s", dx1:"-7px",dy1:"-10px",dx2:"8px", dy2:"14px", dx3:"-7px",dy3:"4px"  },
  { top:"52%", left:"65%", sz:92,  dur:"8s",  del:"2.0s", dx1:"9px", dy1:"-11px",dx2:"-7px",dy2:"12px", dx3:"6px", dy3:"-7px" },
  { top:"14%", left:"41%", sz:84,  dur:"10s", del:"0.3s", dx1:"-8px",dy1:"-13px",dx2:"7px", dy2:"11px", dx3:"-7px",dy3:"5px"  },
  { top:"30%", left:"89%", sz:76,  dur:"7s",  del:"2.4s", dx1:"6px", dy1:"-10px",dx2:"8px", dy2:"9px",  dx3:"7px", dy3:"6px"  },
  { top:"44%", left:"15%", sz:90,  dur:"9s",  del:"1.2s", dx1:"-9px",dy1:"-12px",dx2:"7px", dy2:"13px", dx3:"-8px",dy3:"4px"  },
  { top:"8%",  left:"69%", sz:82,  dur:"11s", del:"0.1s", dx1:"8px", dy1:"-11px",dx2:"-6px",dy2:"14px", dx3:"7px", dy3:"-5px" },
];

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   GLOBAL CSS â€” Google Antigravity aesthetic
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

:root {
  --bg: #0a0e16;
  --bg-alt: #0d1320;
  --surface: #121927;
  --surface-2: #161f30;
  --border: rgba(255,255,255,0.08);
  --border-strong: rgba(255,255,255,0.16);
  --text: #e8edf5;
  --text-dim: #9aa4b8;
  --text-faint: #5f6b80;
  --accent: #5eead4;
  --accent-2: #a78bfa;
  --accent-dim: rgba(94,234,212,0.12);
  --on-accent: #06110f;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: auto; font-size: 16px; }
body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  cursor: none;
}

/* â”€â”€ CUSTOM CURSOR â”€â”€ */
.cursor {
  position: fixed; pointer-events: none; z-index: 9999;
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--accent); transform: translate(-50%,-50%);
  transition: width .15s, height .15s;
  box-shadow: 0 0 10px rgba(94,234,212,0.6);
}
.cursor-ring {
  position: fixed; pointer-events: none; z-index: 9998;
  width: 36px; height: 36px; border-radius: 50%;
  border: 1px solid rgba(94,234,212,0.3);
  transform: translate(-50%,-50%);
  transition: width .3s, height .3s;
}
.cursor.hover  { width: 6px; height: 6px; }
.cursor-ring.hover { width: 54px; height: 54px; border-color: rgba(94,234,212,0.5); }

/* â”€â”€ PROGRESS â”€â”€ */
.prog { position: fixed; top: 0; left: 0; right: 0; height: 2px; z-index: 600; }
.prog-fill { height: 100%; background: var(--accent); box-shadow: 0 0 8px rgba(94,234,212,0.7); transition: width 0.08s linear; }

/* â”€â”€ NAV â”€â”€ */
.g-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 500;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 40px; height: 64px;
  background: rgba(10,14,22,0.85);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border);
  transition: box-shadow 0.3s;
}
.g-nav.raised { box-shadow: 0 1px 24px rgba(0,0,0,0.45); }

/* Logo */
.g-logo {
  display: inline-flex; align-items: center; gap: 1px;
  background: none; border: none; cursor: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.32rem; font-weight: 700; letter-spacing: -0.5px;
  padding: 4px 0;
}

.nav-links { display: flex; align-items: center; gap: 2px; list-style: none; }
.nav-btn {
  background: none; border: none; cursor: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem; font-weight: 500; letter-spacing: 0.01em;
  padding: 6px 13px; border-radius: 100px; color: var(--text-dim);
  transition: background 0.18s, color 0.18s; white-space: nowrap;
}
.nav-btn:hover { background: var(--accent-dim); color: var(--text); }
.nav-btn.active { color: var(--accent); font-weight: 600; background: var(--accent-dim); }

.resume-btn {
  background: var(--accent); color: var(--on-accent); border: none; cursor: none;
  font-family: 'Inter', sans-serif; font-size: 0.82rem; font-weight: 700;
  padding: 8px 18px; border-radius: 100px;
  transition: opacity 0.18s, transform 0.15s, box-shadow 0.18s; white-space: nowrap;
}
.resume-btn:hover { opacity: 0.88; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(94,234,212,0.3); }

/* Hamburger */
.hbg {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: none; padding: 6px; border-radius: 8px;
  transition: background 0.18s;
}
.hbg:hover { background: var(--accent-dim); }
.hbg span { display: block; width: 20px; height: 1.5px; background: var(--text); border-radius: 2px; transition: transform 0.3s, opacity 0.25s; }
.hbg.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hbg.open span:nth-child(2) { opacity: 0; }
.hbg.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile drawer */
.mob-menu {
  position: fixed; top: 64px; left: 0; right: 0; z-index: 490;
  background: var(--bg-alt); border-bottom: 1px solid var(--border);
  padding: 10px 14px 18px;
  display: flex; flex-direction: column; gap: 2px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.5);
  animation: slideDown 0.2s ease both;
}
.mob-item {
  display: flex; align-items: center; gap: 10px;
  background: none; border: none; cursor: none;
  font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 500;
  text-align: left; padding: 11px 16px; border-radius: 12px;
  color: var(--text); transition: background 0.15s;
}
.mob-item:hover, .mob-item.active { background: var(--surface); }
.mob-resume {
  margin-top: 10px; background: var(--accent); color: var(--on-accent);
  border: none; cursor: none;
  font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700;
  padding: 13px 16px; border-radius: 12px; transition: opacity 0.2s;
}
.mob-resume:hover { opacity: 0.88; }

/* â”€â”€ ANIMATIONS â”€â”€ */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeSlideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
@keyframes orbFloat {
  0%   { transform: translateY(0) scale(1); }
  50%  { transform: translateY(-10px) scale(1.02); }
  100% { transform: translateY(0) scale(1); }
}
@keyframes drift {
  0%,100% { transform: translate(0,0); }
  25%  { transform: translate(var(--dx1,8px), var(--dy1,-12px)); }
  50%  { transform: translate(var(--dx2,-6px), var(--dy2,10px)); }
  75%  { transform: translate(var(--dx3,7px), var(--dy3,5px)); }
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes gentleFloat {
  0%,100% { transform: translateY(0) rotate(-1.5deg); }
  50%     { transform: translateY(-14px) rotate(1.5deg); }
}
@keyframes orbitSpin { to { transform: rotate(360deg); } }

/* â”€â”€ SCROLL REVEAL â”€â”€ */
.rv { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
.rv.in { opacity: 1; transform: translateY(0); }

/* â”€â”€ HERO â”€â”€ */
.hero-section {
  min-height: 100vh; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 104px 40px 64px; text-align: center;
  position: relative; overflow: hidden; z-index: 1;
  background: radial-gradient(ellipse 800px 500px at 50% -10%, rgba(94,234,212,0.09), transparent 60%), var(--bg);
}
.hero-section::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 56px 56px;
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 20%, black 0%, transparent 75%);
  mask-image: radial-gradient(ellipse 70% 60% at 50% 20%, black 0%, transparent 75%);
  pointer-events: none; z-index: -1;
}
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.76rem; font-weight: 500; letter-spacing: 0.02em;
  color: var(--text-dim); background: var(--surface); border: 1px solid var(--border);
  border-radius: 100px; padding: 6px 16px; margin-bottom: 28px;
  animation: fadeSlideDown 0.55s ease both;
}
.hero-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px rgba(94,234,212,0.8); display: inline-block; animation: blink 1.8s ease infinite; }

/* Hero name */
.hero-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 104px;
  font-weight: 700;
  letter-spacing: -2px; line-height: 0.96;
  max-width: 1120px;
  margin: 0 auto 14px;
  animation: fadeUp 0.65s 0.1s ease both;
  animation-fill-mode: both; opacity: 0;
}

.hero-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem; font-weight: 500;
  color: var(--accent); margin-bottom: 18px;
  animation: fadeUp 0.65s 0.2s ease both;
  animation-fill-mode: both; opacity: 0;
}
.hero-tagline {
  font-size: 1.03rem; color: var(--text-dim);
  max-width: 660px; line-height: 1.75; margin: 0 auto 38px;
  animation: fadeUp 0.65s 0.28s ease both;
  animation-fill-mode: both; opacity: 0;
}
.hero-ctas {
  display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;
  max-width: 100%;
  animation: fadeUp 0.65s 0.36s ease both;
  animation-fill-mode: both; opacity: 0;
}
.btn-dark {
  background: var(--accent); color: var(--on-accent); border: none; cursor: none;
  font-family: 'Inter', sans-serif; font-size: 0.92rem; font-weight: 700;
  padding: 13px 28px; border-radius: 100px;
  transition: opacity 0.18s, transform 0.15s, box-shadow 0.18s;
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-dark:hover { opacity: 0.88; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(94,234,212,0.28); }
.btn-outline {
  background: transparent; color: var(--text);
  border: 1.5px solid var(--border-strong); cursor: none;
  font-family: 'Inter', sans-serif; font-size: 0.92rem; font-weight: 500;
  padding: 12px 28px; border-radius: 100px;
  transition: border-color 0.18s, transform 0.15s, color 0.18s;
  text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
}
.btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
.btn-blue {
  background: transparent; color: var(--accent-2);
  border: 1.5px solid var(--accent-2); cursor: none;
  font-family: 'Inter', sans-serif; font-size: 0.92rem; font-weight: 500;
  padding: 12px 28px; border-radius: 100px;
  transition: background 0.18s, transform 0.15s;
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-blue:hover { background: rgba(167,139,250,0.1); transform: translateY(-2px); }

/* Search bar (from old file) */
.hero-search {
  margin-top: 52px; width: 100%; max-width: 560px;
  animation: fadeUp 0.65s 0.44s ease both;
  animation-fill-mode: both; opacity: 0;
}
.search-inner {
  display: flex; align-items: center; gap: 12px;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 28px; padding: 14px 22px;
  box-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.hero-scroll-hint {
  margin-top: 36px; display: flex; flex-direction: column;
  align-items: center; gap: 5px; color: var(--text-faint); font-size: 0.72rem;
  font-family: 'JetBrains Mono', monospace;
  animation: blink 2.5s ease infinite;
}

/* â”€â”€ MARQUEE â”€â”€ */
.marquee-wrap {
  overflow: hidden; padding: 0;
  width: 100%; max-width: 100vw; height: 80px;
  position: relative; contain: layout paint;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--bg);
}
.marquee-track { position: absolute; top: 29px; left: 0; display: flex; gap: 48px; width: max-content; max-width: none; animation: marquee 22s linear infinite; }
.marquee-item { display: flex; align-items: center; gap: 10px; font-family: 'JetBrains Mono', monospace; font-size: 0.76rem; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; color: var(--text-faint); white-space: nowrap; }
.marquee-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); opacity: 0.5; flex-shrink: 0; }

/* â”€â”€ SKILL ORBS â”€â”€ */
.orbs-section { padding: 100px 40px; background: var(--bg-alt); position: relative; overflow: hidden; }
.orbs-header { text-align: center; margin-bottom: 72px; }
.section-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem; font-weight: 500; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--text-faint); margin-bottom: 16px;
  display: flex; align-items: center; justify-content: center; gap: 12px;
}
.section-eyebrow::before, .section-eyebrow::after { content:''; width: 32px; height: 1px; background: var(--border-strong); }
.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 700; letter-spacing: -1.5px; color: var(--text); line-height: 1.1;
}

/* Orbs field â€” scattered floating circles */
.orbs-field {
  position: relative; width: 100%; max-width: 1100px; margin: 0 auto; height: 520px;
}
.orb {
  position: absolute;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 8px; cursor: none;
  animation: drift var(--dur,8s) var(--del,0s) ease-in-out infinite;
}
.orb-circle {
  width: var(--sz,80px); height: var(--sz,80px); border-radius: 50%;
  background: var(--surface);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Inter', sans-serif;
  font-size: var(--lfs, 0.72rem); font-weight: 600; color: var(--text);
  text-align: center; padding: 0 8px; line-height: 1.3;
  border: 1px solid var(--border);
  transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  user-select: none;
}
.orb:hover .orb-circle {
  background: var(--accent); color: var(--on-accent);
  transform: scale(1.14);
  box-shadow: 0 12px 40px rgba(94,234,212,0.35);
}
.orb-label {
  font-size: 0.7rem; font-weight: 500; color: var(--text-dim);
  white-space: nowrap; opacity: 0; transform: translateY(4px);
  transition: opacity 0.2s, transform 0.2s;
}
.orb:hover .orb-label { opacity: 1; transform: translateY(0); color: var(--text); font-weight: 600; }

/* â”€â”€ ABOUT â”€â”€ */
.about-section { padding: 100px 40px; background: var(--bg); }
.chip {
  display: inline-block; padding: 5px 14px; border-radius: 100px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.76rem; font-weight: 500; cursor: default;
  border: 1.5px solid var(--border);
  background: var(--surface); color: var(--text);
  transition: all 0.18s; user-select: none;
}
.chip:hover { background: var(--accent); color: var(--on-accent); border-color: var(--accent); transform: translateY(-2px); }

/* â”€â”€ EXPERIENCE â”€â”€ */
.exp-section { padding: 120px 40px; background: var(--bg); }
.exp-grid { max-width: 860px; margin: 0 auto; }
.exp-item {
  padding: 40px 0; border-bottom: 1px solid var(--border);
  display: grid; grid-template-columns: 1fr 2fr; gap: 40px; align-items: start;
  transition: opacity 0.2s;
}
.exp-item:last-child { border-bottom: none; }
.exp-item:hover { opacity: 0.85; }
.exp-company { font-family: 'Space Grotesk', sans-serif; font-size: 1.05rem; font-weight: 700; color: var(--text); margin-bottom: 6px; }
.exp-period { font-family: 'JetBrains Mono', monospace; font-size: 0.76rem; color: var(--text-faint); font-weight: 500; letter-spacing: 0.02em; }
.exp-badge { display: inline-block; margin-top: 8px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 3px 10px; border-radius: 100px; background: var(--accent); color: var(--on-accent); }
.exp-role { font-size: 0.8rem; font-weight: 600; color: var(--text-dim); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.05em; }
.exp-points { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.exp-points li { font-size: 0.9rem; color: var(--text-dim); line-height: 1.75; padding-left: 16px; position: relative; }
.exp-points li::before { content: '>'; position: absolute; left: 0; color: var(--accent); opacity: 0.7; font-weight: 700; }

/* â”€â”€ PROJECTS â”€â”€ */
.proj-section { padding: 120px 40px; background: var(--bg-alt); }
.proj-grid { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); gap: 2px; }
.proj-card {
  background: var(--surface); padding: 40px 36px;
  border: 1px solid var(--border);
  position: relative; overflow: hidden; transition: all 0.22s; cursor: none;
}
.proj-card:hover { background: var(--surface-2); border-color: var(--accent); box-shadow: 0 12px 40px rgba(94,234,212,0.12); }
.proj-num { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--border-strong); margin-bottom: 24px; transition: color 0.22s; }
.proj-card:hover .proj-num { color: var(--text-faint); }
.proj-icon { font-size: 1.2rem; width: 48px; height: 48px; border-radius: 50%; background: var(--bg-alt); display: flex; align-items: center; justify-content: center; margin-bottom: 24px; border: 1px solid var(--border); transition: all 0.22s; color: var(--text); font-family: 'JetBrains Mono', monospace; font-weight: 700; }
.proj-card:hover .proj-icon { background: var(--accent-dim); border-color: var(--accent); color: var(--accent); }
.proj-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.15rem; font-weight: 700; color: var(--text); margin-bottom: 10px; letter-spacing: -0.3px; transition: color 0.22s; }
.proj-card:hover .proj-title { color: var(--accent); }
.proj-stack { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 500; color: var(--text-faint); letter-spacing: 0.04em; margin-bottom: 16px; transition: color 0.22s; text-transform: uppercase; }
.proj-card:hover .proj-stack { color: var(--text-dim); }
.proj-desc { font-size: 0.87rem; color: var(--text-dim); line-height: 1.78; transition: color 0.22s; }
.proj-links { display: flex; align-items: center; justify-content: flex-end; margin-top: 24px; }
.proj-gh { font-size: 0.78rem; font-weight: 600; color: var(--text-faint); text-decoration: none; transition: color 0.22s, transform 0.22s; display: inline-flex; align-items: center; gap: 5px; }
.proj-gh:hover { color: var(--accent); }

/* â”€â”€ EDUCATION â”€â”€ */
.edu-section { padding: 100px 40px; background: var(--bg); }
.edu-grid { max-width: 960px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); gap: 18px; }
.edu-card {
  background: var(--surface); border-radius: 20px; padding: 28px 24px;
  border: 1.5px solid var(--border);
  display: flex; gap: 18px; align-items: flex-start;
  transition: all 0.22s; cursor: none;
}
.edu-card:hover { border-color: var(--accent); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(94,234,212,0.15); }
.edu-icon { font-size: 1.6rem; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: var(--bg-alt); border-radius: 14px; flex-shrink: 0; font-family: 'JetBrains Mono', monospace; font-weight: 700; color: var(--text); transition: all 0.22s; }
.edu-card:hover .edu-icon { background: var(--accent-dim); color: var(--accent); }
.edu-degree { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 0.97rem; color: var(--text); margin-bottom: 5px; transition: color 0.22s; }
.edu-school { font-size: 0.83rem; font-weight: 600; color: var(--text-dim); margin-bottom: 5px; transition: color 0.22s; }
.edu-period { font-family: 'JetBrains Mono', monospace; font-size: 0.74rem; color: var(--text-faint); transition: color 0.22s; }

/* â”€â”€ CONTACT â”€â”€ */
.contact-section {
  padding: 140px 40px; background: #060911;
  text-align: center; position: relative; overflow: hidden;
  border-top: 1px solid var(--border);
}
.contact-section::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 700px 400px at 50% 100%, rgba(94,234,212,0.08), transparent 65%);
  pointer-events: none;
}
.contact-bg-text {
  position: absolute; bottom: -60px; left: 50%; transform: translateX(-50%);
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(5rem, 14vw, 14rem); font-weight: 700; letter-spacing: -4px;
  color: rgba(94,234,212,0.04); white-space: nowrap;
  pointer-events: none; user-select: none;
}
.contact-eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 0.74rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 24px; }
.contact-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.4rem, 6vw, 4.8rem); font-weight: 700;
  letter-spacing: -2px; color: var(--text); line-height: 1.05; margin-bottom: 48px;
}
.contact-title span { color: var(--accent); }
.contact-links { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
.c-link {
  display: inline-flex; align-items: center; gap: 9px;
  background: var(--surface); color: var(--text-dim);
  border: 1px solid var(--border); border-radius: 100px;
  padding: 12px 24px; font-size: 0.85rem; font-weight: 500;
  text-decoration: none; transition: all 0.2s; cursor: none;
}
.c-link:hover { background: var(--accent-dim); color: var(--accent); border-color: var(--accent); transform: translateY(-2px); }

/* â”€â”€ FOOTER â”€â”€ */
.g-footer {
  background: var(--bg); border-top: 1px solid var(--border);
  padding: 24px 40px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;
}
.footer-logo { font-family: 'Space Grotesk', sans-serif; font-size: 0.88rem; font-weight: 700; color: var(--text-dim); letter-spacing: -0.3px; display: flex; align-items: center; gap: 1px; }
.footer-copy { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: var(--text-faint); }

/* â”€â”€ SECTION HEADERS (experience / projects / edu) â”€â”€ */
.sec-header { max-width: 860px; margin: 0 auto 56px; }
.sec-header-wide { max-width: 1000px; margin: 0 auto 56px; }
.sec-eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-faint); display: flex; align-items: center; gap: 12px; }
.sec-eyebrow::before { content:''; width: 24px; height: 1px; background: var(--border-strong); display: inline-block; }
.sec-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem, 4.5vw, 3rem); font-weight: 700; letter-spacing: -1.5px; color: var(--text); margin-top: 14px; line-height: 1.1; }

/* â”€â”€ RESPONSIVE â”€â”€ */
@media (max-width: 820px) {
  .nav-links { display: none !important; }
  .hbg { display: flex !important; }
  .hero-name { font-size: 72px !important; line-height: 0.98 !important; }
  .hero-title { font-size: 1.18rem !important; }
  .hero-tagline { max-width: 620px !important; font-size: 0.98rem !important; }
  .orbs-field { height: auto !important; display: flex !important; flex-wrap: wrap !important; justify-content: center !important; gap: 14px !important; padding: 16px 0 !important; }
  .orb { position: static !important; animation: orbFloat var(--dur,5s) var(--del,0s) ease-in-out infinite !important; }
  .exp-item { grid-template-columns: 1fr !important; gap: 12px !important; }
  .about-main-grid { grid-template-columns: 1fr !important; }
  .g-nav { padding: 0 20px !important; }
  .hero-section, .orbs-section, .exp-section, .proj-section, .edu-section, .about-section { padding-left: 20px !important; padding-right: 20px !important; }
  .proj-grid { grid-template-columns: 1fr !important; }
  .contact-section { padding: 100px 24px !important; }
}
@media (max-width: 480px) {
  .hero-section { min-height: 100svh !important; padding-top: 88px !important; padding-bottom: 44px !important; }
  .hero-eyebrow { font-size: 0.72rem !important; padding: 6px 12px !important; margin-bottom: 22px !important; }
  .hero-name { font-size: 44px !important; letter-spacing: 0 !important; line-height: 1.04 !important; }
  .hero-title { font-size: 1.05rem !important; margin-bottom: 14px !important; }
  .hero-tagline { font-size: 0.92rem !important; line-height: 1.68 !important; margin-bottom: 28px !important; }
  .contact-title { letter-spacing: -1px !important; }
  .hero-ctas { flex-direction: column !important; align-items: center !important; }
  .hero-ctas > * { width: min(240px, 100%) !important; justify-content: center !important; }
  .marquee-wrap { height: auto !important; max-width: 100% !important; padding: 18px 20px !important; }
  .marquee-track { position: static !important; width: 100% !important; max-width: 100% !important; transform: none !important; animation: none !important; flex-wrap: wrap !important; justify-content: center !important; gap: 10px 16px !important; }
  .marquee-item:nth-child(n+13) { display: none !important; }
  .about-main-grid { overflow: hidden !important; }
  .about-main-grid, .about-main-grid * { min-width: 0 !important; }
  .about-main-grid > div { padding: 32px 24px !important; border-right: 0 !important; }
  .about-main-grid > div:last-child { padding: 0 !important; }
  .about-main-grid > div:last-child > div:first-child { grid-template-columns: 1fr !important; }
  .about-main-grid > div:last-child > div:first-child > div { border-right: 0 !important; border-bottom: 1px solid var(--border) !important; padding: 28px 24px !important; }
  .about-main-grid > div:last-child > div:last-child { padding: 22px 24px !important; }
  .about-main-grid a { max-width: 100% !important; overflow-wrap: anywhere !important; }
  .g-footer { flex-direction: column; text-align: center; }
  .edu-grid { grid-template-columns: 1fr !important; }
}
`;

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   HELPERS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
}

function useReveal() {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); obs.disconnect(); } }, { threshold: 0.07 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   CUSTOM CURSOR
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function Cursor() {
  const dot = useRef(); const ring = useRef();
  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0, raf;
    const move = e => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) { dot.current.style.left = mx + "px"; dot.current.style.top = my + "px"; }
    };
    const loop = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      if (ring.current) { ring.current.style.left = rx + "px"; ring.current.style.top = ry + "px"; }
      raf = requestAnimationFrame(loop);
    };
    const over = e => {
      const isHov = !!e.target.closest("button,a,.orb");
      dot.current?.classList.toggle("hover", isHov);
      ring.current?.classList.toggle("hover", isHov);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); cancelAnimationFrame(raf); };
  }, []);
  return (<><div ref={dot} className="cursor" /><div ref={ring} className="cursor-ring" /></>);
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PROGRESS BAR
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function Progress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => { const m = document.body.scrollHeight - window.innerHeight; setP(m > 0 ? (window.scrollY / m) * 100 : 0); };
    window.addEventListener("scroll", fn, { passive: true }); return () => window.removeEventListener("scroll", fn);
  }, []);
  return <div className="prog"><div className="prog-fill" style={{ width: `${p}%` }} /></div>;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   NAV â€” Google-coloured logo (from old file), links to all sections
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function Nav({ active }) {
  const [open, setOpen] = useState(false);
  const [raised, setRaised] = useState(false);
  useEffect(() => {
    const fn = () => setRaised(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true }); return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    const fn = e => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", fn); return () => window.removeEventListener("keydown", fn);
  }, []);
  useEffect(() => {
    if (!open) return;
    const fn = e => { if (!e.target.closest(".mob-menu") && !e.target.closest(".hbg")) setOpen(false); };
    document.addEventListener("mousedown", fn); return () => document.removeEventListener("mousedown", fn);
  }, [open]);
  const go = useCallback(id => { setOpen(false); goTo(id); }, []);

  return (
    <>
      <nav className={`g-nav${raised ? " raised" : ""}`}>
        {/* Logo â€” plain black, Antigravity style */}
        <button className="g-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span style={{ color: "var(--text)" }}>Albin</span>
          <span style={{ color: "var(--accent)", marginLeft: 2, fontWeight: 500, fontFamily: "'JetBrains Mono', monospace" }}>.ai</span>
        </button>

        <ul className="nav-links">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <button className={`nav-btn${active === id ? " active" : ""}`} onClick={() => go(id)}>{label}</button>
            </li>
          ))}
          <li>
            <button className="resume-btn" onClick={() => window.open(RESUME.resumeUrl, "_blank")}>Resume &rarr;</button>
          </li>
        </ul>

        <button className={`hbg${open ? " open" : ""}`} onClick={() => setOpen(o => !o)} aria-label="Menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
      </nav>

      {open && (
        <div className="mob-menu">
          {SECTIONS.map(({ id, label, icon }) => (
            <button key={id} className={`mob-item${active === id ? " active" : ""}`} onClick={() => go(id)}>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, minWidth: 56, textAlign: "left" }}>{icon}</span> {label}
            </button>
          ))}
          <button className="mob-resume" onClick={() => window.open(RESUME.resumeUrl, "_blank")}><SymbolIcon code={0x1F4C4} label="Resume" /> &nbsp;Resume</button>
        </div>
      )}
    </>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   HERO â€” full name in Google colours, weight 700 (old file style)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function Hero() {
  return (
    <div id="hero" className="hero-section">
      {/* Badge */}
      <div className="hero-eyebrow">
        <span className="hero-dot" />
        Available for GenAI, RAG, and AI agent engineering roles
      </div>

      {/* Name */}
      <h1 className="hero-name" style={{ color: "var(--text)" }}>
        {RESUME.name}
      </h1>

      {/* Title */}
      <div className="hero-title">{RESUME.title}</div>

      {/* Tagline */}
      <p className="hero-tagline">{RESUME.tagline}</p>

      {/* CTAs */}
      <div className="hero-ctas">
        <button className="btn-dark" onClick={() => goTo("projects")}><SymbolIcon code={0x1F680} label="View work" /> View Work</button>
        <a href={RESUME.github} target="_blank" rel="noreferrer" className="btn-outline"><SymbolIcon code={0x1F419} label="GitHub" /> GitHub</a>
        <button className="btn-blue" onClick={() => goTo("contact")}><SymbolIcon code={[0x2709, 0xFE0F]} label="Contact" /> Contact Me</button>
      </div>

      {/* Google-style search bar (from old file) */}
      {/* <div className="hero-search">
        <div className="search-inner">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9aa0a6" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span style={{ color: "#9aa0a6", fontSize: "0.92rem", flex: 1, textAlign: "left" }}>
            Search skills, projects, experienceâ€¦
          </span>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9aa0a6" strokeWidth="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
        </div>
      </div> */}

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <span>scroll to explore</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </div>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   MARQUEE
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <div key={i} className="marquee-item">
            <span className="marquee-dot" />{item}
          </div>
        ))}
      </div>
    </div>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SKILL ORBS â€” names only, no icons (user request)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function SkillOrbs() {
  const ref = useReveal();
  return (
    <div id="skills" className="orbs-section">
      <div ref={ref} className="rv">
        <div className="orbs-header">
          <div className="section-eyebrow">Skills &amp; Technologies</div>
          <h2 className="section-title">The Tools I Build With</h2>
        </div>

        <div className="orbs-field">
          {SKILL_ORBS.map((skill, i) => {
            const L = ORB_LAYOUT[i] || ORB_LAYOUT[i % ORB_LAYOUT.length];
            /* Dynamically size label font based on orb size */
            const labelFs = L.sz >= 100 ? "0.78rem" : L.sz >= 88 ? "0.72rem" : "0.66rem";
            return (
              <div key={skill.id} className="orb"
                style={{
                  top: L.top, left: L.left,
                  "--sz": `${L.sz}px`,
                  "--lfs": labelFs,
                  "--dur": L.dur, "--del": L.del,
                  "--dx1": L.dx1, "--dy1": L.dy1,
                  "--dx2": L.dx2, "--dy2": L.dy2,
                  "--dx3": L.dx3, "--dy3": L.dy3,
                }}>
                <div className="orb-circle">{skill.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   ABOUT â€” Antigravity editorial style
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function About() {
  const ref = useReveal();
  const stats = [
    { value: "2+",  label: "Years Experience" },
    { value: "3+",  label: "Projects Shipped" },
    { value: "10+", label: "Technologies" },
      ];
  return (
    <section id="about" className="about-section">
      <div ref={ref} className="rv">

        {/* Section header â€” same style as experience/projects */}
        <div style={{ maxWidth: 1000, margin: "0 auto 56px" }}>
          <div className="sec-eyebrow">About</div>
          <div className="sec-title">Who I Am</div>
        </div>

        {/* Main about grid */}
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", border: "1px solid var(--border)" }} className="about-main-grid">

          {/* Left â€” identity block */}
          <div style={{ padding: "52px 48px", borderRight: "1px solid var(--border)" }}>
            {/* Name + role */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 20, height: 1, background: "var(--border-strong)", display: "inline-block" }} />
                AI Engineer
              </div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 700, letterSpacing: "-1.5px", color: "var(--text)", lineHeight: 1.05, marginBottom: 8 }}>
                Albin George<br />Kurian
              </h2>
              <div style={{ width: 40, height: 2, background: "var(--accent)", borderRadius: 1, marginTop: 20 }} />
            </div>

            {/* Bio */}
            <p style={{ fontSize: "0.95rem", color: "var(--text-dim)", lineHeight: 1.85, marginBottom: 16 }}>
              AI Engineer specializing in Generative AI, RAG, MCP, AI Agents, Knowledge Graphs, and LLMOps.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--text-dim)", lineHeight: 1.85, marginBottom: 36 }}>
              Experienced in building scalable, production-ready AI systems using LangChain, LangGraph, Python, and cloud technologies.
            </p>

            {/* Tag pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["AI Engineer", "Generative AI", "RAG", "MCP", "Knowledge Graphs", "LLMOps"].map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>

          {/* Right â€” stats + contact strip */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", flex: 1 }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  padding: "40px 36px",
                  borderBottom: "none",
                  borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
                  transition: "background 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--surface)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem,3vw,2.8rem)", fontWeight: 700, letterSpacing: "-1.5px", color: "var(--accent)", lineHeight: 1, marginBottom: 8 }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.74rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-faint)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact strip */}
            <div style={{ borderTop: "1px solid var(--border)", padding: "24px 36px", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <a href={`mailto:${RESUME.email}`} style={{ fontSize: "0.8rem", color: "var(--text-dim)", textDecoration: "none", fontWeight: 500, transition: "color 0.18s", display: "flex", alignItems: "center", gap: 6 }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-dim)"}>
                <SymbolIcon code={[0x2709, 0xFE0F]} label="Email" /> {RESUME.email}
              </a>
              <span style={{ color: "var(--border-strong)" }}>-</span>
              <a href={RESUME.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: "0.8rem", color: "var(--text-dim)", textDecoration: "none", fontWeight: 500, transition: "color 0.18s", display: "flex", alignItems: "center", gap: 6 }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-dim)"}>
                LinkedIn &rarr;
              </a>
              <span style={{ color: "var(--border-strong)" }}>-</span>
              <a href={RESUME.github} target="_blank" rel="noreferrer" style={{ fontSize: "0.8rem", color: "var(--text-dim)", textDecoration: "none", fontWeight: 500, transition: "color 0.18s", display: "flex", alignItems: "center", gap: 6 }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-dim)"}>
                GitHub &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   EXPERIENCE
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="exp-section">
      <div ref={ref} className="rv">
        <div className="sec-header">
          <div className="sec-eyebrow">Experience</div>
          <div className="sec-title">Where I've Built Things</div>
        </div>
        <div className="exp-grid">
          {RESUME.experience.map((e, i) => (
            <div key={i} className="exp-item">
              <div>
                <div className="exp-company">{e.company}</div>
                <div className="exp-period">{e.period}</div>
                {e.badge && <div className="exp-badge">{e.badge}</div>}
              </div>
              <div>
                <div className="exp-role">{e.role}</div>
                <ul className="exp-points">
                  {e.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PROJECTS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function Publications() {
  const ref = useReveal();
  return (
    <section id="publications" className="exp-section">
      <div ref={ref} className="rv">
        <div className="sec-header">
          <div className="sec-eyebrow">Publications</div>
          <div className="sec-title">Research Work</div>
        </div>
        <div className="exp-grid">
          {RESUME.publications.map((p, i) => (
            <div key={i} className="exp-item">
              <div>
                <div className="exp-company">{p.publisher}</div>
                <div className="exp-period">{p.date}</div>
              </div>
              <div>
                <div className="exp-role">{p.title}</div>
                <ul className="exp-points">
                  <li>{p.venue}</li>
                  <li>{p.desc}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" className="proj-section">
      <div ref={ref} className="rv">
        <div className="sec-header-wide">
          <div className="sec-eyebrow">Projects</div>
          <div className="sec-title">What I've Shipped</div>
        </div>
        <div className="proj-grid">
          {RESUME.projects.map((p, i) => (
            <div key={i} className="proj-card">
              <div className="proj-num">{p.num || `0${i + 1}`}</div>
              <div className="proj-icon">{String(i + 1).padStart(2, "0")}</div>
              <div className="proj-title">{p.title}</div>
              <div className="proj-stack">{p.stack}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="proj-gh">GitHub</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   EDUCATION (from old file â€” 3 entries)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function Education() {
  const ref = useReveal();
  return (
    <section id="education" className="edu-section">
      <div ref={ref} className="rv">
        <div className="sec-header-wide">
          <div className="sec-eyebrow">Education</div>
          <div className="sec-title">Academic Background</div>
        </div>
        <div className="edu-grid">
          {RESUME.education.map((e, i) => (
            <div key={i} className="edu-card">
              <div className="edu-icon">{e.icon}</div>
              <div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
                <div className="edu-period"><SymbolIcon code={0x1F4C5} label="Date" /> {e.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   CONTACT
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function Contact() {
  const ref = useReveal();
  const links = [
    { icon: [0x2709, 0xFE0F], label: RESUME.email,         href: `mailto:${RESUME.email}` },
    { icon: 0x260E,           label: RESUME.phone,          href: `tel:${RESUME.phone}` },
    { icon: 0x1F419,          label: "GitHub",              href: RESUME.github },
    { icon: 0x25C6,           label: "LinkedIn",            href: RESUME.linkedin },
    { icon: 0x1F4C4,          label: "Resume / CV",         href: RESUME.resumeUrl },
  ];
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-text">BUILD AI</div>
      <div ref={ref} className="rv" style={{ position: "relative" }}>
        <div className="contact-eyebrow">Let's Work Together</div>
        <h2 className="contact-title">
          Let's turn complex AI ideas into <span>reliable systems</span>.
        </h2>
        <div className="contact-links">
          {links.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="c-link">
              <SymbolIcon code={l.icon} label={l.label} />{l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   FOOTER â€” Google-coloured logo from old file
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function Footer() {
  return (
    <footer className="g-footer">
      <div className="footer-logo">
        <span style={{ color: "var(--text-dim)" }}>Albin</span>
        <span style={{ color: "var(--accent)", marginLeft: 2, fontWeight: 500, fontFamily: "'JetBrains Mono', monospace" }}>.ai</span>
      </div>
      <div className="footer-copy">&copy; {new Date().getFullYear()} Albin George Kurian - GenAI/LLM Engineer</div>
    </footer>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   APP ROOT
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
export default function App() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <Cursor />
      <Progress />
      <Nav active={active} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <SkillOrbs />
        <Marquee />
        <Experience />
        <Publications />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


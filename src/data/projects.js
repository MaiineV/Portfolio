import robotpaloozaImage from '../images/robotpalooza_image.webp';
import toymakerImage from '../images/toymaker.webp';
import rollgeonImage from '../images/rollgeon.webp';
import redButtonImage from '../images/red-button.webp';
import sawiImage from '../images/banner.webp';
import waxyImage from '../images/MiniaturaWaxy.webp';
import retrucoImage from '../images/RetrucoImage.webp';
import oneStepImage from '../images/OneStepImage.webp';
import arcaneImage from '../images/claude-arcane.svg';
import mvgImage from '../images/mvg.webp';
import todoImage from '../images/todo-app.webp';
import warehouseImage from '../images/warehouse.svg';
import vabImage from '../images/vab.webp';
import docsappImage from '../images/docsapp.svg';

export const projects = [
  {
    id: 11,
    title: 'DocsApp · Real-time Collaborative Docs',
    description:
      'Notion-style collaborative docs app for small teams. Next.js 16 (App Router, Server Actions) + React 19 + TypeScript strict, on Supabase (Postgres, Auth, RLS, Realtime). Real-time co-editing with live cursors via a hand-built Yjs (CRDT) provider over Supabase Realtime - no third-party realtime vendor. Multi-tenant security enforced by Row-Level Security, token-based team invitations with roles, full-text search, trash with cascade, public share links, and a versioned REST API (Bearer auth, Markdown in/out, live-broadcast edits). Tested with Vitest and Playwright; deployed on Vercel.',
    image: docsappImage,
    viewLink: 'https://docs-app-orcin.vercel.app',
    codeLink: 'https://github.com/MaiineV/DocsApp',
    gddLink: '',
    categories: ['FullStack'],
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Yjs (CRDT)', 'Tailwind v4', 'Playwright'],
    status: 'Live',
    featured: true,
  },
  {
    id: 9,
    title: 'Warehouse Management System',
    description:
      'Production full-stack warehouse and inventory system. .NET 8 (C#) REST API with EF Core (PostgreSQL), JWT auth, real-time updates via SignalR, FluentValidation, API versioning and PDF/Excel export; React 19 + TypeScript frontend with Tailwind, React Hook Form + Zod, TanStack Table and Recharts dashboards. Tested with xUnit and Vitest, monitored with Sentry, deployed on Render (API) and Vercel (web). Demo login: admin / Admin123!',
    image: warehouseImage,
    viewLink: 'https://warehouse-frontend-dun.vercel.app',
    apiDocsLink: 'https://warehouse-backend-dao0.onrender.com/swagger',
    codeLink: 'https://github.com/MaiineV/warehouse-frontend',
    backendLink: 'https://github.com/MaiineV/warehouse-backend',
    gddLink: '',
    categories: ['FullStack'],
    technologies: ['.NET 8', 'C#', 'EF Core', 'PostgreSQL', 'React 19', 'TypeScript', 'SignalR', 'xUnit'],
    status: 'Live',
    featured: true,
  },
  {
    id: 6,
    title: 'claude-code-arcane',
    description:
      'A collaborative framework that extends and optimizes the Claude Code AI dev environment: custom skills, AI agents, automation hooks, and spec-driven development (SDD) workflows.',
    image: arcaneImage,
    viewLink: '',
    codeLink: 'https://github.com/SebastianLuser/claude-code-arcane',
    gddLink: '',
    categories: ['FullStack', 'AI'],
    technologies: ['Claude Code', 'SDD', 'Automation', 'Agents'],
    status: 'In Development',
    featured: true,
  },
  {
    id: 7,
    title: 'MVG · Software Studio',
    description:
      'Studio site for MVG (software and game studio in Buenos Aires): a responsive React + Vite single-page app with multi-section content, bilingual EN/ES, and an EmailJS contact form. Shipped on Netlify.',
    image: mvgImage,
    viewLink: 'https://mvg-games.netlify.app/',
    codeLink: 'https://github.com/MaiineV/MVG-Page',
    gddLink: '',
    categories: ['FullStack'],
    technologies: ['React', 'Vite', 'React Router', 'EmailJS', 'Netlify'],
    status: 'Live',
    featured: true,
  },
  {
    id: 8,
    title: 'Task Board · TODO App',
    description:
      'Full-stack TODO app built with Flask: user auth via Flask-Login (bcrypt, CSRF), SQLAlchemy models with migrations, a Tailwind UI, and a pytest test suite. Per-user task isolation; deployed on PythonAnywhere.',
    image: todoImage,
    viewLink: 'https://maiine.pythonanywhere.com/auth/login',
    codeLink: 'https://github.com/MaiineV/To-Do-App',
    gddLink: '',
    categories: ['FullStack'],
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'Flask-Login', 'SQLite', 'pytest', 'Tailwind'],
    status: 'Live',
    featured: true,
  },
  {
    id: 10,
    title: 'Creator Portfolio + CMS',
    description:
      'Custom portfolio site built for a content creator (Community Manager and Video Editor) with a headless CMS so the client edits her own content. React + TypeScript + Vite frontend with Tailwind, content modeled and served from Sanity (Studio + GROQ), plus migration tooling. Deployed on Vercel.',
    image: vabImage,
    viewLink: 'https://portfolio-vab.vercel.app/',
    codeLink: 'https://github.com/MaiineV/PortfolioVAB',
    gddLink: '',
    categories: ['FullStack'],
    technologies: ['React', 'TypeScript', 'Vite', 'Sanity CMS', 'GROQ', 'Tailwind'],
    status: 'Live',
    featured: true,
  },
  {
    id: 12,
    title: 'Project Toymaker',
    description:
      'State-funded multiplayer game built in Unity (C#) at INVI, where I work as both game designer and lead programmer. On the design side I design the gameplay systems, balance the economy and progression, work on level and content design, and write the GDD. On the technical side I own the gameplay and UI systems, the in-editor tooling the rest of the team builds on, and the real-time multiplayer networking with FishNet. Pitched at GamesCom Latam 2026.',
    image: toymakerImage,
    viewLink: 'https://www.youtube.com/watch?v=aO-Avejjl2I',
    codeLink: '',
    gddLink: '',
    categories: ['Game Design', 'Game Development'],
    technologies: ['Systems Design', 'Balancing', 'Level Design', 'Unity', 'C#', 'FishNet', 'Multiplayer'],
    status: 'In Development',
    featured: true,
  },
  {
    id: 13,
    title: 'Rollgeon',
    description:
      'Roguelike dice-builder by 3AM Games where your deck is a bag of dice and combat is built on Generala, the classic Rio de la Plata dice game. I designed the combat system and its dice combinations, balanced the economy (dice, enchantments, shops, enemies and run progression), designed content, and programmed it in Unity. Playable in the browser.',
    image: rollgeonImage,
    viewLink: 'https://3amgamesstudio.itch.io/rollgeon',
    codeLink: '',
    gddLink:
      'https://docs-app-orcin.vercel.app/share/kSQ8E_PsNG9ffnEZn4aP5TkXb7A7ACl2KMpAS79VoVM',
    categories: ['Game Design', 'Game Development'],
    technologies: ['Systems Design', 'Combat Design', 'Balancing', 'Roguelike', 'Unity', 'C#'],
    status: 'In Development',
    featured: true,
  },
  {
    id: 14,
    title: 'You CAnT Always Push the Red Button',
    description:
      'Decision-making game made for Unity BA Game Jam 2026: you are the president of the Cat Nation, keeping the country stable by choosing action plans, or giving in to your feline instincts and pushing the shiny red button. I came up with the concept and core loop, designed and balanced the systems behind each decision, wrote the events and outcomes, and programmed it in Unity.',
    image: redButtonImage,
    viewLink: 'https://zathmell.itch.io/you-cant-always-push-the-red-button',
    codeLink: '',
    gddLink: '',
    categories: ['Game Design', 'Game Development'],
    technologies: ['Core Loop Design', 'Systems Design', 'Narrative Design', 'Game Jam', 'Unity', 'C#'],
    status: 'Released',
    featured: true,
  },
  {
    id: 2,
    title: 'Sawi, The Void Buster',
    description:
      '2D platformer made in Godot, pitched on GamesCom Latam. I worked on the main game design and level design.',
    image: sawiImage,
    viewLink: 'https://mvg-games.com.ar/game/sawi',
    codeLink: 'https://github.com/MaiineV',
    gddLink: '',
    categories: ['Game Development', 'Game Design'],
    technologies: ['Godot', '2D'],
    status: 'In Development',
    featured: true,
  },
  {
    id: 3,
    title: 'Waxy: The Wick and the Witch',
    description:
      'A third-person 3D puzzle-platformer where you play as a living candle exploring the forgotten attic of a witch\u2019s house.',
    image: waxyImage,
    viewLink: 'https://3amgamesstudio.itch.io/waxy-the-wick-and-the-witch',
    codeLink: '',
    gddLink:
      'https://docs.google.com/document/d/1skRFyi93VuhgQmpYGfLQ1OmZlOqO3887zhP5It__0OI/edit?usp=sharing',
    categories: ['Game Development', 'Game Design'],
    technologies: ['C#', 'Unity'],
    status: 'In Development',
    featured: true,
  },
  {
    id: 5,
    title: 'One Step Behind',
    description:
      'An incremental bullet-hell with metroidvania mechanics. The unique twist: you fight side by side with your past life.',
    image: oneStepImage,
    viewLink: 'https://andres-pittaluga.itch.io/one-step-behind',
    codeLink: '',
    gddLink: 'https://miro.com/app/board/uXjVJFkucr0=/?share_link_id=695560825167',
    categories: ['Game Design', 'Game Development'],
    technologies: ['C#', 'Unity'],
    status: 'In Development',
    featured: true,
  },
  {
    id: 4,
    title: 'Retruco al Diablo',
    description:
      'A card game with single-match design, special abilities, and a complex lying system.',
    image: retrucoImage,
    viewLink: 'https://youtu.be/ntMhAfiPFYE',
    codeLink: '',
    gddLink:
      'https://docs.google.com/document/d/1nrsUY1v7X4N-dKN-YiLq7TMPnyXFkkjbknu9BOc9qPk/edit?usp=sharing',
    categories: ['Game Design'],
    technologies: ['C#', 'Unity'],
    status: 'Prototype',
    featured: false,
  },
  {
    id: 1,
    title: 'Robotpalooza',
    description:
      'Frenetic FPS made in Unity. Showcased at EVA 2023. I worked on the game\u2019s programming, game design and level design.',
    image: robotpaloozaImage,
    viewLink: 'https://burntcones.itch.io/robotpalooza',
    codeLink: 'https://github.com/TheSirYeti/ProjectFeverDream',
    gddLink:
      'https://docs.google.com/document/d/1bFFF-2n0IrftEVJ7uQ_9-dTtN_R2T2Wtoc3uTwaIJCc/edit?usp=sharing',
    categories: ['Game Development', 'Game Design'],
    technologies: ['Unity', 'C#', 'Game Design', 'Level Design'],
    status: 'Released',
    featured: false,
  },
];

export const projectCategories = ['FullStack', 'AI', 'Game Development', 'Game Design'];

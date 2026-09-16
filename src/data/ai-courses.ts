export type AiCourse = {
  id: string;
  number: number;
  title: string;
  level: string;
  duration: string;
  audience: string;
  build: string;
  sessions: string[];
  learn: string[];
  b2cPrice?: string;
  b2bPrice?: string;
  investmentNote?: string;
  stages?: { stage: string; capability: string }[];
  outcomes?: string[];
  formatText?: string;
  investmentLines?: string[];
  safetyPrinciple?: string;
};

const sharedCourse: Omit<AiCourse, 'id' | 'number'> = {
  title: 'AI Foundations & API Integration',
  level: 'Beginner',
  duration: '8 hours · 2 sessions × 4 hours · Max 10 participants',
  b2cPrice: '4,500,000 VND / person',
  b2bPrice: '20,000,000–30,000,000 VND / private cohort',
  audience: 'Software developers starting with AI, technical managers, and people building their own AI applications.',
  build: 'A working content aggregator. It takes in files, splits them into useful pieces, calls an AI model, handles failures, checks the result, and writes Markdown and JSON files.',
  sessions: [
    'Session 1 — Set up a safe Python workspace. Make your first model call. Learn sampling, message history, bounded memory, and checked output with Pydantic.',
    'Session 2 — Use async Python, streaming, and time-to-first-token measurement. Add fallback models, parallel processing, the content aggregator, and a security review.',
  ],
  learn: [
    'Create a secure Python AI workspace.',
    'Understand what happens inside a model call.',
    'Keep conversation state under control.',
    'Check structured output with Pydantic.',
    'Stream responses and measure first-token speed.',
    'Add fallback models and safe parallel work.',
    'Build a complete file-to-AI pipeline.',
  ],
};

const courseOne: AiCourse = {
  id: '2',
  number: 2,
  title: 'Low-Code & Visual AI Automation',
  level: 'Business / Low-Code',
  duration: '8 hours · 2 sessions × 4 hours · Max 10 participants',
  b2cPrice: '4,000,000 VND / person',
  b2bPrice: '20,000,000–30,000,000 VND / private cohort',
  audience: 'Product managers, operations leads, marketing agencies, and business owners who want automation without Python.',
  build: 'A customer-support workflow: request → n8n → Flowise RAG agent → CRM/search → policy router → reply or human escalation.',
  sessions: [
    'Session 1 — Infrastructure & Nodes — Set up n8n and Flowise. Add OpenRouter credentials. Build a webhook → transform → LLM → email workflow. Debug it and make its routing deterministic.',
    'Session 2 — Visual RAG & Agents — Build Flowise document stores, visual RAG, memory, and tools. Connect CRM/search, n8n, escalation, and human approval.',
  ],
  learn: [
    'Map a business process into triggers, nodes, and actions.',
    'Build and debug n8n workflows.',
    'Use structured LLM outputs safely.',
    'Build visual RAG in Flowise.',
    'Connect memory, knowledge, and tools correctly.',
    'Add escalation, approvals, and production checks.',
  ],
  investmentNote: 'Designed for small groups. The B2B version can use a sanitized company workflow.',
};

const courseThree: AiCourse = {
  id: '4',
  number: 4,
  title: 'Autonomous Agents & Vector RAG Systems',
  level: 'Advanced',
  duration: '12 hours · 3 sessions × 4 hours · Max 6 participants',
  audience: 'Intermediate and advanced developers, software engineers, and technical product architects.',
  build: 'A vector-grounded autonomous pipeline with retrieval, tools, specialist agents, provenance, usage controls, and production acceptance tests.',
  sessions: [
    'Session 1 — Tool Calling & Vector DB — Use native function calling, local embeddings, vector similarity, Qdrant or Chroma administration, and native RAG.',
    'Session 2 — Multi-Agent State Graphs — Build agent loops with LangGraph or CrewAI patterns, supervisor/worker flows, and multi-step processing.',
    'Session 3 — Deployment & Optimization — Add cycle aborts, specialist routing models, token thrift, telemetry, FastAPI health/run endpoints, and validation.',
  ],
  learn: [
    'Build native function-calling routers.',
    'Create embeddings and understand similarity and top-K behavior.',
    'Ingest and query a local vector database.',
    'Build RAG from first principles.',
    'Orchestrate supervisor/worker state graphs.',
    'Add abort rules, usage ledgers, health checks, and production validation.',
  ],
  b2cPrice: '8,500,000 VND / person',
  b2bPrice: '42,000,000–58,000,000 VND / private cohort',
  investmentNote: 'Cloud and API use can be included as a capped allowance or billed at cost.',
};

const courseFour: AiCourse = {
  id: '5',
  number: 5,
  title: 'Multi-Agent Systems & Advanced Orchestration',
  level: 'Advanced',
  duration: '12 hours · 3 sessions × 4 hours · Max 10 participants',
  audience: 'Intermediate and advanced developers moving from single-prompt scripts to stateful agent networks.',
  build: 'A production decision team with a supervisor, specialist workers, validator, budget and termination controls, and persistent state.',
  sessions: [
    'Session 1 — Agent Architecture — Learn autonomous-agent anatomy, Hermes and open models, custom Python state loops, tool calling, explicit state, and termination.',
    'Session 2 — Framework Deployment — Use LangGraph and CrewAI patterns, specialist workers, planning, supervisor routing, validation, and revision loops.',
    'Session 3 — Real-World Production — Add budgets, infinite-loop aborts, JSON contracts, persistence, memory boundaries, human approval, and observability.',
  ],
  learn: [
    'Build a manual tool-using agent loop before relying on a framework.',
    'Design explicit graph state and specialist worker boundaries.',
    'Implement supervisor routing, validation, and revision.',
    'Add token and cost budgets, iteration limits, and safe termination.',
    'Persist state and distinguish short-term state from durable memory.',
    'Add human approval and production observability.',
  ],
  b2cPrice: '8,500,000 VND / person',
  b2bPrice: '45,000,000–60,000,000 VND / private cohort',
  investmentNote: 'Recommended commercial range. Cloud and API use is billed separately where material.',
};

const courseFive: AiCourse = {
  id: '1',
  number: 1,
  title: 'Professional AI Engineer Program',
  level: 'Premium professional program',
  duration: '12 weeks · approximately 7 contact hours per week · 84 instructor-led hours · Max 10 participants',
  audience: 'Developers, technical founders, systems builders, automation engineers, and technically ambitious professionals who want a complete applied AI engineering pathway.',
  build: 'A portfolio of production-minded AI systems, ending with a cross-module capstone defended live.',
  sessions: [],
  learn: [],
  formatText: '12 weeks · approximately 7 contact hours per week · 84 instructor-led hours · Max 10 participants · English · Hands-on build-along delivery.',
  stages: [
    { stage: '1', capability: 'AI Foundations & API Integration — Python, APIs, structured output, memory, async, fallback' },
    { stage: '2', capability: 'Low-Code & Visual AI Automation — n8n, Flowise, OpenRouter, visual RAG' },
    { stage: '3', capability: 'Autonomous Agents & Vector RAG Systems — Qdrant, embeddings, retrieval, LangGraph, FastAPI' },
    { stage: '4', capability: 'Multi-Agent Systems & Advanced Orchestration — State graphs, supervisors, workers, validation, HITL' },
    { stage: '5', capability: 'Client-Facing UI Framework — Full-Stack AI — Streamlit/Chainlit-style UI, state, metrics, Docker' },
    { stage: '6', capability: 'Custom Model Engineering — Fine-Tuning & Quantization — Datasets, LoRA/QLoRA, evaluation, GGUF, Ollama' },
    { stage: '7', capability: 'Embodied AI — Robotics & Physical Hardware — Sensors, cameras, local vision, edge loops' },
    { stage: '8', capability: 'AI Governance, Data Privacy & Red-Teaming — PII gates, authorization, prompt injection, regression' },
    { stage: '9', capability: 'AI Strategy, ROI Mapping & Vendor Selection — TCO, ROI, use-case portfolio, vendor evaluation' },
  ],
  outcomes: [
    'A portfolio of working AI systems rather than prompt examples.',
    'A grounded RAG service and vector knowledge system.',
    'Controlled single-agent and multi-agent architectures.',
    'A client-facing, containerized AI application.',
    'Hands-on fine-tuning and quantization workflow.',
    'Edge and physical AI experience.',
    'Security and red-team acceptance evidence.',
    'A board-ready ROI/TCO and vendor decision framework.',
    'A final cross-module capstone defended live.',
  ],
  investmentLines: [
    'Professional Program: 49,000,000 VND / participant',
    'Professional+ with individual capstone mentoring: 59,000,000 VND / participant',
    'Private corporate cohorts: 240,000,000–320,000,000 VND / private cohort',
  ],
};

const courseSix: AiCourse = {
  id: '6',
  number: 6,
  title: 'Embodied AI — Connecting LLMs to Robotics & Physical Hardware',
  level: 'Advanced',
  duration: '12 hours · 3 sessions × 4 hours · Max 10 participants',
  audience: 'IoT engineers, hardware developers, robotics enthusiasts, manufacturing automation teams, and technical founders.',
  build: 'A tabletop embodied-AI inspection and sorting cell: camera and sensors → Raspberry Pi gateway → local Ollama/Qwen3-VL → deterministic safety and policy gate → ESP32 → low-voltage actuator → telemetry.',
  sessions: [
    'Session 1 — Hardware-to-LLM — Capture real sensor and button inputs. Package versioned JSON events. Connect to Ollama across a trusted LAN. Create strict semantic command contracts and build the policy gate between AI and hardware.',
    'Session 2 — Visual Grounding — Capture event-driven camera frames. Use a local multimodal model for structured object interpretation. Handle UNKNOWN and confidence thresholds. Translate perception into bounded commands. Measure end-to-end latency and actuator acknowledgement.',
    'Session 3 — Edge Agentic Loops — Build explicit state machines. Handle Wi-Fi, model, sensor, and heartbeat failure. Implement bounded retry and self-correction. Integrate the mini-MVP, run forced failure tests, and complete the technical handover.',
  ],
  learn: [
    'Connect sensors, cameras, local models, and microcontrollers.',
    'Use strict JSON contracts between models and hardware.',
    'Gate model proposals with deterministic safety rules.',
    'Build bounded edge loops with failure handling.',
    'Test latency, acknowledgements, and forced failures.',
  ],
  formatText: '12 hours · 3 × 4-hour sessions · Max 10 participants · Hands-on · English · On-site or at an agreed training premises.',
  investmentLines: [
    'B2C / open cohort: 10,000,000 VND / participant',
    'Private B2B cohort: 48,000,000–72,000,000 VND / private cohort',
  ],
  investmentNote: 'Hardware procurement, travel, and production industrial integration are quoted separately.',
  safetyPrinciple: 'AI proposes; deterministic control disposes. The model never controls arbitrary PWM, speed, or steering, and never replaces an emergency stop, watchdog, or local safety interlock.',
};

const courseSeven: AiCourse = {
  id: '7',
  number: 7,
  title: 'Legal & Tech Security Tier — AI Governance, Data Privacy & Red-Teaming',
  level: 'Legal & Technical Security',
  duration: '8 hours · 2 sessions × 4 hours · Max 10 participants',
  audience: 'Corporate legal counsel, CISOs, risk and compliance managers, privacy teams, tech directors, and security architects.',
  build: 'A defensible AI security layer: data classification → PII and secret filtering → strict schemas → privacy-aware logging → prompt-injection tests → RAG trust controls → tool authorization → output validation → automated regression → remediation register.',
  sessions: [
    'Session 1 — Data Privacy & Leak Prevention — Trace web, UI, API, RAG, provider, and log data flows. Create an enterprise data destination policy. Build PII detection and de-identification controls. Reject unnecessary fields before egress. Sanitize logs and prove raw synthetic PII cannot leave unchanged.',
    'Session 2 — Prompt Injection & Red Teaming — Test direct and indirect prompt injection safely. Protect RAG and retrieved-content trust boundaries. Keep tool authorization outside the model. Validate model output before downstream use. Run repeatable authorized red-team regression tests and turn findings into owned remediation actions.',
  ],
  learn: [
    'Map AI data and action flows across the complete system.',
    'Build PII filtering, de-identification, and privacy-aware logging.',
    'Test direct and indirect prompt injection safely.',
    'Protect RAG trust boundaries and keep tool authorization outside the model.',
    'Validate outputs, automate regression tests, and track remediation.',
  ],
  formatText: '8 hours · 2 × 4-hour sessions · Max 10 participants · Hands-on · English · On-site or at an agreed training premises.',
  investmentLines: [
    'B2C / open cohort: 7,500,000 VND / participant',
    'Private B2B cohort: 38,000,000–58,000,000 VND / private cohort',
  ],
  investmentNote: 'Authorized staging red-team engagements and production remediation are separately scoped.',
  safetyPrinciple: 'A stronger system prompt is not a security architecture. The model is not an authorization boundary, and model output must be treated as untrusted input.',
};

const courseEight: AiCourse = {
  id: '8',
  number: 8,
  title: 'Custom Model Engineering — Fine-Tuning & Quantization',
  level: 'Expert / Deep-Dive',
  duration: '16 hours · 4 sessions × 4 hours · Max 10 participants',
  audience: 'Highly advanced ML engineers, technical founders, and well-funded development departments.',
  build: 'A reproducible post-training pipeline: locked dataset → QLoRA → checkpoint → adapter → merged model → benchmark → GGUF → quantized Ollama deployment.',
  sessions: [
    'Session 1 — Dataset Architecture — Decide between fine-tuning and RAG. Build instruction datasets and chat templates. Run token diagnostics, cleaning, and versioned private datasets.',
    'Session 2 — Cloud Compute & PEFT — Provision GPUs, configure SSH and persistence, learn LoRA and QLoRA mechanics, set hyperparameters, run smoke tests, and recover checkpoints.',
    'Session 3 — Training & Telemetry — Run resilient training with loss and VRAM telemetry. Control experiment forks, export adapters, and complete a clean model merge.',
    'Session 4 — Evaluation & Porting — Use a frozen benchmark. Convert to GGUF, apply Q8 and Q4 quantization, integrate Ollama, and complete the technical handover.',
  ],
  learn: [
    'Decide when fine-tuning is justified.',
    'Engineer and version template-correct datasets.',
    'Provision and verify cloud GPU environments.',
    'Configure LoRA and QLoRA for recovery-safe training.',
    'Interpret loss and telemetry with experiment discipline.',
    'Merge and evaluate model artifacts.',
    'Convert to GGUF, quantize, and serve locally with Ollama.',
  ],
  b2cPrice: '15,000,000 VND / person',
  b2bPrice: '70,000,000–110,000,000 VND / private cohort',
  investmentNote: 'Recommended range. GPU/cloud compute and proprietary data preparation are quoted separately.',
};

// The course entries are separate on purpose. Replace their copy as each
// consulting course is finalised.
export const aiCourses: AiCourse[] = [
  courseFive,
  courseOne,
  { ...sharedCourse, id: '3', number: 3 },
  courseThree,
  courseFour,
  courseSix,
  courseSeven,
  courseEight,
];

export const getAiCourse = (id: string) => aiCourses.find((course) => course.id === id);

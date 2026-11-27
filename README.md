# Nadeem Anjum — AI Solutions & Automation Portfolio

Personal portfolio and client inquiry web app for **Nadeem Anjum** (AI Solutions Architect & Automation Specialist, Multan, Pakistan), built with **React 18, TypeScript, Tailwind CSS, and Vite**.

---

## Overview

This repository contains the single-page portfolio, project showcase, interactive sample demos, savings estimator, CV view, and Google Sheets discovery form for remote AI automation and software work.

---

## Implemented Modules

### 1. Ask About My Work (Guided Q&A)
- Client-side keyword matching (`String.includes`) returning pre-written replies from CV and project details across four topics:
  - **Mind_Dreams** (Personal Project — 24/7 AI customer support chatbot built with Google Gemini, Next.js 14, and 3-way Google Sheets sync)
  - **Education & Qualifications** (Computer Science graduation and AI/ML coursework)
  - **Contact & Delivery Terms** (WhatsApp `+92 307 7978277`, email, 48h POC delivery, 50% deposit rule, 100% IP transfer)
  - **Packages & Pricing** (Tier 1 `$350`, Tier 2 `$650`, Tier 3 `$1,200`)

### 2. Selected Builds & Interactive Sample Demos
- **Client Builds:**
  - **EduGuard AI: Smart Campus & Exam Surveillance** (`/demo/campus-ai`) — Interactive sample detection log explorer with zone filters, CSV export, and an external link to the campus dashboard (`https://university-ai-monitoring.vercel.app/demo`).
  - **Smart Commercial, Home & Animal Farm AI Security** (`/demo/farm-security`) — Interactive sample noise-filter comparison and zone CSV log exporter (`Chaki Gate`, `Animal Farm`, `Home Entrance`).
- **Personal Projects:**
  - **Mind_Dreams AI Customer Support** (`Next.js 14`, `Google Gemini API`, `Google Sheets API`, `https://github.com/nadeemanjum273-cmd/Mind_Dream-Agent`).
  - **Document Intelligence RAG Engine** (`Streamlit`, `Google Gemini`, `ChromaDB`, `LangChain Core`, `Pandas`, `openpyxl`, `docx2txt`).
  - **Customer Churn & Lead Scoring Portal** (`89.4%` precision measured on test data).

### 3. Technical Arsenal & Savings Estimator
- Grouped skill tags across **Generative AI & LLMs**, **Automation & n8n**, **Data Science & ML**, and **Full-Stack & Databases**.
- Interactive weekly-hours savings calculator (`hours * 30 * 4` monthly estimate) mapped to Tier 1–3 packages.

### 4. Experience, Printable CV & Discovery Form
- Timeline of **Mind_Dreams (Personal Project, Oct 2026)**, **Independent AI Automation Consultant (2026 — Present)**, **Graduation in Computer Science**, and **Data Science & AI Fellow**, plus a browser-printable CV view (`window.print()`).
- Discovery form with 3 required fields (`Name`, `Email or WhatsApp`, `Bottleneck to Automate`), collapsible optional fields (`Company`, `Role`, `Staff Count`, `AI Pillar`), a hidden `website` honeypot field, and `fetch` submission (`Content-Type: text/plain`, `mode: "no-cors"`) to a configured Google Apps Script Web App URL (`VITE_GOOGLE_SHEETS_WEBHOOK_URL`), followed by a **Send Details on WhatsApp** link.

---

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS v3
- **Icons & Visuals:** Lucide React, Material Symbols, HTML5/Three.js particle background (`JugnuBackground`)
- **Integrations:** Google Apps Script Web App (`VITE_GOOGLE_SHEETS_WEBHOOK_URL`), WhatsApp click-to-chat

---

## Local Development

### Prerequisites
- Node.js (v18 or later)
- npm

### Setup & Commands

```bash
# Clone the repository
git clone https://github.com/nadeemanjum273-cmd/my-resume-2.git
cd my-resume-2

# Install dependencies
npm install

# Configure Google Apps Script Web App URL in .env.local
cp .env.example .env.local

# Start local dev server (http://localhost:3000)
npm run dev

# Type-check and build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Contact

- **WhatsApp:** [+92 307 7978277](https://wa.me/923077978277)
- **Email:** [nadeemanjum273@gmail.com](mailto:nadeemanjum273@gmail.com)
- **LinkedIn:** [linkedin.com/in/nadeem-anjum-b23b1a269](https://www.linkedin.com/in/nadeem-anjum-b23b1a269)
- **GitHub:** [github.com/nadeemanjum273-cmd](https://github.com/nadeemanjum273-cmd)
- **Location:** 66000 Multan, Punjab, Pakistan (Available for Remote Worldwide Contracts)

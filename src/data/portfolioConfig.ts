import { VISIBLE_PROJECT_COUNT } from "../components/Projects";

export interface HeroStatItem {
  value: string;
  label: string;
  accentClass: string;
}

/** Editable hero stats displayed on the main landing section. */
export const HERO_STATS: HeroStatItem[] = [
  { value: "15+", label: "Automations Built", accentClass: "text-white" },
  { value: String(VISIBLE_PROJECT_COUNT), label: "Projects Built", accentClass: "text-[#38bdf8]" },
  { value: "48h", label: "POC Delivery", accentClass: "text-[#34d399]" },
];

/** Shared contact, profile, and CV configuration. */
export const SITE_LINKS = {
  whatsappDisplay: "+92 307 7978277",
  whatsappUrl: "https://wa.me/923077978277",
  email: "nadeemanjum273@gmail.com",
  github: "https://github.com/nadeemanjum273-cmd",
  linkedin: "https://www.linkedin.com/in/nadeem-anjum-b23b1a269",
  cvPdfPath: "/Nadeem-Anjum-CV.pdf",
  cvDownloadFilename: "Nadeem-Anjum-CV.pdf",
  hasCvPdf: false,
} as const;

export const GOOGLE_SHEETS_WEBHOOK_URL: string =
  import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || "";

/** Optional YouTube video IDs for demo walkthroughs (left empty until real IDs are provided). */
export const DEMO_VIDEOS: { campusVideoId: string; farmVideoId: string } = {
  campusVideoId: "",
  farmVideoId: "",
};

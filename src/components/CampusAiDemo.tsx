import React, { useState } from 'react';
import {
  ArrowLeft,
  Car,
  GraduationCap,
  FileSpreadsheet,
  Download,
  CheckCircle2,
  AlertTriangle,
  Video,
  ShieldCheck,
  Search,
  ExternalLink,
} from 'lucide-react';

interface ExamLog {
  id: string;
  timestamp: string;
  zone: 'Parking Gate' | 'Classroom' | 'Exam Hall';
  event: string;
  subject: string;
  confidence: string;
  excelStatus: 'Synced to Excel & DB';
  severity: 'info' | 'warning' | 'alert';
}

interface CampusAiDemoProps {
  onBack: () => void;
  onBookDemo?: () => void;
}

const SAMPLE_LOGS: ExamLog[] = [
  {
    id: 'LOG-1041',
    timestamp: '2026-11-25 09:14:22',
    zone: 'Exam Hall',
    event: 'Student Looking Back / Head Turn Detected (Seat #14)',
    subject: 'CS-301 Midterm Exam',
    confidence: '98.4%',
    excelStatus: 'Synced to Excel & DB',
    severity: 'alert',
  },
  {
    id: 'LOG-1040',
    timestamp: '2026-11-25 09:08:10',
    zone: 'Classroom',
    event: 'Teacher Active at Whiteboard (Lecture Started)',
    subject: 'Room 104 • Prof. Ahmed',
    confidence: '99.1%',
    excelStatus: 'Synced to Excel & DB',
    severity: 'info',
  },
  {
    id: 'LOG-1039',
    timestamp: '2026-11-25 09:02:45',
    zone: 'Classroom',
    event: 'Automated Student Attendance Marked (42/45 Present)',
    subject: 'Room 104 • Batch 2024',
    confidence: '97.8%',
    excelStatus: 'Synced to Excel & DB',
    severity: 'info',
  },
  {
    id: 'LOG-1038',
    timestamp: '2026-11-25 08:47:19',
    zone: 'Parking Gate',
    event: 'Registered Faculty Vehicle Entry (LEA-4921)',
    subject: 'Main North Gate Cam-01',
    confidence: '99.5%',
    excelStatus: 'Synced to Excel & DB',
    severity: 'info',
  },
  {
    id: 'LOG-1037',
    timestamp: '2026-11-25 08:41:03',
    zone: 'Exam Hall',
    event: 'Invigilator / Teacher Patrol Verified',
    subject: 'Exam Hall B',
    confidence: '98.9%',
    excelStatus: 'Synced to Excel & DB',
    severity: 'info',
  },
  {
    id: 'LOG-1036',
    timestamp: '2026-11-25 08:35:50',
    zone: 'Exam Hall',
    event: 'Suspicious Hand/Paper Exchange Flagged (Row 3)',
    subject: 'PHY-202 Final Paper',
    confidence: '96.7%',
    excelStatus: 'Synced to Excel & DB',
    severity: 'warning',
  },
];

/**
 * Interactive EduGuard AI smart campus & exam surveillance demo view.
 */
export default function CampusAiDemo({ onBack, onBookDemo }: CampusAiDemoProps) {
  const [selectedZone, setSelectedZone] = useState<'All' | 'Parking Gate' | 'Classroom' | 'Exam Hall'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLogs = SAMPLE_LOGS.filter((log) => {
    const matchesZone = selectedZone === 'All' || log.zone === selectedZone;
    const matchesQuery =
      log.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesZone && matchesQuery;
  });

  const handleDownloadCsv = () => {
    const headers = ['Log ID', 'Timestamp', 'Zone', 'Detected Event', 'Details', 'AI Confidence', 'Status'];
    const rows = filteredLogs.map((l) => [
      l.id,
      l.timestamp,
      l.zone,
      `"${l.event}"`,
      `"${l.subject}"`,
      l.confidence,
      l.excelStatus,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'EduGuard_AI_Campus_Report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 selection:bg-cyan-500/30">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-[#070B14]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-500/50 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </button>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Supabase + Excel Live Sync Ready
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Hero Section */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            Universities • Colleges • Schools
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            EduGuard AI: <span className="text-cyan-400">Smart Campus & Exam Surveillance</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Transform existing campus CCTV cameras into an automated intelligence system covering{' '}
            <strong className="text-slate-200">Parking Detection</strong>,{' '}
            <strong className="text-slate-200">Classroom Attendance & Teacher Whiteboard Tracking</strong>, and{' '}
            <strong className="text-slate-200">Exam Hall Anti-Cheating Excel Logging</strong>.
          </p>
        </div>

        {/* YouTube Video Walkthrough */}
        <section className="mb-12 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-cyan-400" />
              <h2 className="text-lg font-semibold text-white">Live System Video Walkthrough</h2>
            </div>
            <span className="text-xs text-slate-400">Real-time AI detection & dashboard demo</span>
          </div>

          {/* REPLACE YOUR_CAMPUS_YOUTUBE_ID WITH YOUR ACTUAL YOUTUBE VIDEO ID */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-800 bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/YOUR_CAMPUS_YOUTUBE_ID"
              title="EduGuard AI Campus Surveillance Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* 3 Core Modules */}
        <section className="mb-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-cyan-500/40">
            <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
              <Car className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">1. Smart Parking Detection</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Automatically logs vehicle entries, exits, and unauthorized parking at campus gates with instant timestamps.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-purple-500/40">
            <div className="mb-4 inline-flex rounded-xl bg-purple-500/10 p-3 text-purple-400">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">2. Classroom & Whiteboard AI</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Tracks student attendance automatically and verifies teacher presence and lecture activity at the whiteboard.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-amber-500/40">
            <div className="mb-4 inline-flex rounded-xl bg-amber-500/10 p-3 text-amber-400">
              <FileSpreadsheet className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">3. Exam Hall Anti-Cheating</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Monitors invigilator activity and detects suspicious student head-turns or paper sharing, logging every incident directly into an Excel sheet.
            </p>
          </div>
        </section>

        {/* Interactive Demo Log Explorer */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-7">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-white">Interactive Detection & Excel Log Explorer</h2>
              <p className="mt-1 text-sm text-slate-400">
                Filter by camera zone or download a sample Excel (.csv) report generated by the AI engine.
              </p>
            </div>
            <button
              type="button"
              onClick={handleDownloadCsv}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <Download className="h-4 w-4" />
              Download Sample Excel (.CSV)
            </button>
          </div>

          {/* Zone Tabs & Search */}
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              {(['All', 'Parking Gate', 'Classroom', 'Exam Hall'] as const).map((zone) => (
                <button
                  type="button"
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                    selectedZone === zone
                      ? 'bg-cyan-500 text-slate-950'
                      : 'border border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {zone}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search logs or subjects..."
                className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2 pl-9 pr-3 text-xs text-slate-200 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Log Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-800 bg-slate-950/90 text-xs uppercase text-slate-400">
                <tr>
                  <th className="px-4 py-3">Log ID</th>
                  <th className="px-4 py-3">Timestamp</th>
                  <th className="px-4 py-3">Zone</th>
                  <th className="px-4 py-3">AI Detected Event</th>
                  <th className="px-4 py-3">Confidence</th>
                  <th className="px-4 py-3">Output Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 bg-slate-900/30">
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="transition hover:bg-slate-800/40">
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-cyan-400">{log.id}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-slate-400">{log.timestamp}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="rounded-md border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-200">
                        {log.zone}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 font-medium text-slate-200">
                        {log.severity === 'alert' || log.severity === 'warning' ? (
                          <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400" />
                        ) : (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        )}
                        <span>{log.event}</span>
                      </div>
                      <div className="pl-6 text-xs text-slate-500">{log.subject}</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-emerald-400">{log.confidence}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                        <FileSpreadsheet className="h-3 w-3" />
                        {log.excelStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-purple-500/10 p-5 sm:flex-row">
            <div>
              <h3 className="text-base font-semibold text-white">Want EduGuard AI deployed at your institution?</h3>
              <p className="text-xs text-slate-400">Works with your existing IP/CCTV cameras and exports directly to Excel.</p>
            </div>
            <a
              href="/#demo-form"
              onClick={(e) => {
                if (onBookDemo) {
                  e.preventDefault();
                  onBookDemo();
                }
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Book Campus Demo
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

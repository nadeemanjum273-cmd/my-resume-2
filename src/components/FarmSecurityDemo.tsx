import React, { useState } from 'react';
import {
  ArrowLeft,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Warehouse,
  Home,
  Tractor,
  Video,
  FileSpreadsheet,
  Download,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { DEMO_VIDEOS } from '../data/portfolioConfig';

interface SecurityEntry {
  id: string;
  timestamp: string;
  location: 'Chaki Gate' | 'Animal Farm' | 'Home Entrance';
  event: string;
  details: string;
  status: 'Sample Entry Logged';
}

interface FarmSecurityDemoProps {
  onBack: () => void;
  onBookDemo?: () => void;
}

const SAMPLE_ENTRIES: SecurityEntry[] = [
  {
    id: 'ENT-408',
    timestamp: '2026-11-25 11:22:14',
    location: 'Chaki Gate',
    event: 'Flour Sack Unloading (Gattu Activity)',
    details: 'Commercial Gate Cam • 14 Sacks Unloaded',
    status: 'Sample Entry Logged',
  },
  {
    id: 'ENT-407',
    timestamp: '2026-11-25 10:54:09',
    location: 'Chaki Gate',
    event: 'Animal Cart Arrival at Commercial Door',
    details: 'Loading Bay Zone • Driver + Cart Logged',
    status: 'Sample Entry Logged',
  },
  {
    id: 'ENT-406',
    timestamp: '2026-11-25 10:18:41',
    location: 'Animal Farm',
    event: 'Livestock Movement Detected in Pen Area',
    details: 'Farm Zone 02 • Cattle Entered Target Area',
    status: 'Sample Entry Logged',
  },
  {
    id: 'ENT-405',
    timestamp: '2026-11-25 09:45:33',
    location: 'Home Entrance',
    event: 'Human Entry at Main Entrance Gate',
    details: 'Main Gate Cam • Clear Person Detection',
    status: 'Sample Entry Logged',
  },
  {
    id: 'ENT-404',
    timestamp: '2026-11-25 08:30:12',
    location: 'Animal Farm',
    event: 'Farm Caretaker Entered Animal Shed',
    details: 'Farm Zone 01 • Routine Morning Check',
    status: 'Sample Entry Logged',
  },
];

const IGNORED_NOISE_ITEMS = [
  { name: 'Locusts & Flying Insects (ٹڈی / مکھی)', count: 64 },
  { name: 'Spiders on Camera Lens (مکڑی)', count: 19 },
  { name: 'Wind-Blown Leaves & Plants (پودے اور پتے)', count: 112 },
  { name: 'Stray Cats & Birds (بلی / پرندے)', count: 27 },
];

/**
 * Interactive Commercial Chaki, Home & Animal Farm AI Security sample demo view.
 */
export default function FarmSecurityDemo({ onBack, onBookDemo }: FarmSecurityDemoProps) {
  const [selectedLocation, setSelectedLocation] = useState<'All' | 'Chaki Gate' | 'Animal Farm' | 'Home Entrance'>('All');
  const [showNoiseComparison, setShowNoiseComparison] = useState(true);
  const videoId = DEMO_VIDEOS.farmVideoId.trim();

  const filteredEntries = SAMPLE_ENTRIES.filter(
    (entry) => selectedLocation === 'All' || entry.location === selectedLocation
  );

  const handleDownloadExcelLog = () => {
    const headers = ['Entry ID', 'Timestamp', 'Location Zone', 'Sample Event', 'Details', 'CSV Status'];
    const rows = filteredEntries.map((e) => [
      e.id,
      e.timestamp,
      e.location,
      `"${e.event}"`,
      `"${e.details}"`,
      e.status,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Smart_Chaki_Farm_Sample_Entries.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 selection:bg-emerald-500/30">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-[#070B14]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:border-emerald-500/50 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </button>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            Interactive Sample Demo
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Hero */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <ShieldAlert className="h-3.5 w-3.5" />
            Commercial Chaki • Animal Farms • Private Homes
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Smart Commercial, Home & <span className="text-emerald-400">Animal Farm AI Security</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Computer vision trained for outdoor and commercial environments. Automatically logs{' '}
            <strong className="text-slate-200">gate entries, flour sack unloading (Gattu), animal carts, and livestock movement</strong>{' '}
            into Excel—while filtering out insects, spiders, moving leaves, birds, and stray cats.
          </p>
        </div>

        {/* YouTube Video Embed (rendered only when farmVideoId is configured) */}
        {videoId && (
          <section className="mb-12 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-emerald-400" />
                <h2 className="text-lg font-semibold text-white">Field Deployment Video (Chaki &amp; Farm Gate)</h2>
              </div>
              <span className="text-xs text-slate-400">Footage showing zone logging &amp; noise filtering</span>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-800 bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Commercial Chaki & Animal Farm AI Security Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* Noise Filter Comparison Demo */}
        <section className="mb-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">Why Standard Cameras Fail vs. Our AI Filter</h2>
              <p className="mt-1 text-sm text-slate-400">
                Illustrative comparison: standard motion cameras trigger frequent noise alerts, while our Excel sheet logs only relevant zone activity.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowNoiseComparison(!showNoiseComparison)}
              className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              {showNoiseComparison ? 'Showing Sample Filter Breakdown' : 'Show Filter Breakdown'}
            </button>
          </div>

          {showNoiseComparison && (
            <div className="grid gap-6 md:grid-cols-2">
              {/* Filtered Out Column */}
              <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-rose-400">Automatically Filtered Out (0 Excel Entries)</span>
                  <span className="rounded-full bg-rose-500/10 px-2.5 py-0.5 font-mono text-xs text-rose-300">
                    Sample: 222 Ignored
                  </span>
                </div>
                <div className="space-y-2.5">
                  {IGNORED_NOISE_ITEMS.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-lg border border-slate-800/80 bg-slate-950/70 px-3.5 py-2.5 text-xs"
                    >
                      <div className="flex items-center gap-2 text-slate-300">
                        <XCircle className="h-4 w-4 text-rose-400" />
                        <span>{item.name}</span>
                      </div>
                      <span className="font-mono text-slate-500">{item.count} sample</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Logged Column */}
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-400">Target Events (Logged to CSV / Excel)</span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs text-emerald-300">
                    Illustrative Output
                  </span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between rounded-lg border border-slate-800/80 bg-slate-950/70 px-3.5 py-2.5">
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Commercial Chaki Gate Loading / Gattu Unloading</span>
                    </div>
                    <span className="font-mono text-emerald-400">Logged</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-800/80 bg-slate-950/70 px-3.5 py-2.5">
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Animal Cart Arrivals & Commercial Deliveries</span>
                    </div>
                    <span className="font-mono text-emerald-400">Logged</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-800/80 bg-slate-950/70 px-3.5 py-2.5">
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Animal Farm Zone & Livestock Entry Rules</span>
                    </div>
                    <span className="font-mono text-emerald-400">Logged</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-800/80 bg-slate-950/70 px-3.5 py-2.5">
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span>Main Home Entrance Human Detection</span>
                    </div>
                    <span className="font-mono text-emerald-400">Logged</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Sample Excel Output Viewer */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-7">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold text-white">Interactive Sample Demo &amp; CSV Log Preview</h2>
              <p className="mt-1 text-sm text-slate-400">
                Switch between Chaki Gate, Animal Farm, and Home Entrance to inspect sample CSV entries.
              </p>
            </div>
            <button
              type="button"
              onClick={handleDownloadExcelLog}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              <Download className="h-4 w-4" />
              Download Sample Excel (.CSV)
            </button>
          </div>

          {/* Location Filter Pills */}
          <div className="mb-5 flex flex-wrap gap-2">
            {[
              { label: 'All Zones', value: 'All', icon: FileSpreadsheet },
              { label: 'Chaki Gate', value: 'Chaki Gate', icon: Warehouse },
              { label: 'Animal Farm', value: 'Animal Farm', icon: Tractor },
              { label: 'Home Entrance', value: 'Home Entrance', icon: Home },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  type="button"
                  key={tab.value}
                  onClick={() => setSelectedLocation(tab.value as typeof selectedLocation)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                    selectedLocation === tab.value
                      ? 'bg-emerald-500 text-slate-950'
                      : 'border border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-800 bg-slate-950/90 text-xs uppercase text-slate-400">
                <tr>
                  <th className="px-4 py-3">Entry ID</th>
                  <th className="px-4 py-3">Timestamp</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Sample Activity</th>
                  <th className="px-4 py-3">CSV Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 bg-slate-900/30">
                {filteredEntries.map((entry) => (
                  <tr key={entry.id} className="transition hover:bg-slate-800/40">
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-emerald-400">{entry.id}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-slate-400">{entry.timestamp}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="rounded-md border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-200">
                        {entry.location}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-slate-200">{entry.event}</div>
                      <div className="text-xs text-slate-500">{entry.details}</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                        <CheckCircle2 className="h-3 w-3" />
                        {entry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-slate-900 to-cyan-500/10 p-5 sm:flex-row">
            <div>
              <h3 className="text-base font-semibold text-white">Need Filtered CCTV AI for your Shop, Home, or Farm?</h3>
              <p className="text-xs text-slate-400">Custom detection zones with automatic local Excel entry logging.</p>
            </div>
            <a
              href="/#demo-form"
              onClick={(e) => {
                if (onBookDemo) {
                  e.preventDefault();
                  onBookDemo();
                }
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Request Custom Setup
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

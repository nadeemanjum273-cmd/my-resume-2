import React from "react";

export const MapSection: React.FC = () => {
  const googleMapsUrl = "https://maps.google.com/?q=66000+Multan,+Punjab,+Pakistan";

  return (
    <section id="location-map" className="scroll-mt-28 flex flex-col gap-space-md">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surface-container-highest/40 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-code-terminal text-label-caps border border-primary/20 mb-2">
            <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
            <span>GLOBAL REACH &bull; BASE LOCATION</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
            Location &amp; Global Availability
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Headquartered in <strong className="text-on-surface font-semibold">66000 Multan, Punjab, Pakistan</strong> &bull; Serving clients globally across North America, Europe, UAE &amp; Asia with seamless remote collaboration.
          </p>
        </div>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-xs font-code-terminal text-primary hover:text-on-surface transition-all shadow-sm shrink-0 border border-outline-variant/30 font-bold"
        >
          <span className="material-symbols-outlined text-[16px]">navigation</span>
          <span>Open in Google Maps</span>
          <span className="material-symbols-outlined text-[14px]">open_in_new</span>
        </a>
      </div>

      {/* Map Container Card */}
      <div className="rounded-3xl bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/30 p-3 sm:p-4 shadow-2xl space-y-3 overflow-hidden">
        <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-outline-variant/20 bg-surface-container-lowest">
          {/* Embedded Google Map with Dark Filter */}
          <iframe
            title="Nadeem Anjum - Location Map"
            src="https://maps.google.com/maps?q=Multan%2066000%20Punjab%20Pakistan&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[105%] opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Floating Location Pill Overlay */}
          <div className="absolute top-4 left-4 z-10 px-4 py-2.5 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md border border-primary/40 font-code-terminal text-xs text-on-surface shadow-xl flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
            <div>
              <div className="font-bold text-primary">Nadeem Anjum Base</div>
              <div className="text-[11px] text-on-surface-variant">66000 Multan, Punjab, Pakistan</div>
            </div>
          </div>
        </div>

        {/* Location Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-code-terminal text-xs pt-1">
          <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/20 flex items-center justify-between">
            <span className="text-on-surface-variant">Postal / Zip Code:</span>
            <span className="text-primary font-bold">66000</span>
          </div>
          <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/20 flex items-center justify-between">
            <span className="text-on-surface-variant">Region:</span>
            <span className="text-on-surface font-medium">Multan, Punjab</span>
          </div>
          <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/20 flex items-center justify-between">
            <span className="text-on-surface-variant">Timezone:</span>
            <span className="text-primary font-bold">PKT (UTC +5)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

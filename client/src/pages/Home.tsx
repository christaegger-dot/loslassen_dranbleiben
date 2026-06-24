/**
 * DESIGN SYSTEM: "Stilles Wasser"
 * Japanischer Minimalismus + Schweizer Typografie-Tradition
 * Palette: Warmes Creme (#F7F3EE), Schieferblau (#2C3E50), Terrakotta-Akzent
 * Fonts: Playfair Display (Display) + Source Serif 4 (Body)
 * Layout: Asymmetrisch mit linker Sticky-Navigation und breitem Hauptinhalt
 * Interactive: ControlCircles, PendulumViz, BalanceScale, AcceptanceSteps
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters, sources, resources, weiterlesen } from '@/lib/content';
import { ControlCircles, PendulumViz, BalanceScale, AcceptanceSteps } from '@/components/InteractiveVisuals';
import { Menu, X, ChevronRight, BookOpen, Heart, ExternalLink, ArrowUp, Link2, Bookmark, BookmarkCheck, Printer } from 'lucide-react';
import { toast } from 'sonner';

// ─── Reading Progress Bar ──────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      className="progress-bar"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

// ─── Back to Top Button ────────────────────────────────────────────────
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:shadow-xl active:scale-95"
          style={{
            background: 'var(--color-slate-deep)',
            color: 'white',
          }}
          aria-label="Nach oben scrollen"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── Anchor Copy Button ──────────────────────────────────────────────
function AnchorCopyButton({ chapterId }: { chapterId: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const url = `${window.location.origin}${window.location.pathname}#${chapterId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast.success('Link kopiert', {
        description: 'Direkt-Link zum Kapitel in der Zwischenablage.',
        duration: 2500,
      });
      setTimeout(() => setCopied(false), 2500);
    });
  }, [chapterId]);

  return (
    <button
      onClick={handleCopy}
      className="print-hide inline-flex items-center gap-1.5 ml-3 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:shadow-sm active:scale-95"
      style={{
        background: copied ? 'oklch(0.88 0.06 145 / 0.2)' : 'oklch(0.88 0.015 80 / 0.7)',
        color: copied ? 'oklch(0.38 0.09 145)' : 'var(--color-warm-grey)',
        border: `1px solid ${copied ? 'oklch(0.72 0.09 145 / 0.4)' : 'oklch(0.82 0.015 80)'}`,
      }}
      aria-label="Kapitel-Link kopieren"
      title="Direkt-Link zum Kapitel kopieren"
    >
      <Link2 className="w-3 h-3" />
      {copied ? 'Kopiert!' : 'Link'}
    </button>
  );
}

// ─── Bookmark Banner ──────────────────────────────────────────────────
const BOOKMARK_KEY = 'loslassen-bookmark';

function BookmarkBanner({ onJump }: { onJump: (id: string) => void }) {
  const [saved, setSaved] = useState<{ id: string; title: string } | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(BOOKMARK_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.id && parsed?.title) {
          setSaved(parsed);
          setVisible(true);
        }
      }
    } catch {}
  }, []);

  if (!visible || !saved) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="print-hide fixed top-14 lg:top-4 left-1/2 z-50 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-full shadow-lg text-sm"
        style={{
          background: 'oklch(0.975 0.012 80 / 0.97)',
          border: '1px solid oklch(0.88 0.015 80)',
          backdropFilter: 'blur(12px)',
          maxWidth: 'calc(100vw - 2rem)',
        }}
      >
        <BookmarkCheck className="w-4 h-4 text-[var(--color-terracotta)] flex-shrink-0" />
        <span className="text-[var(--color-slate-deep)]">
          Zuletzt gelesen:{' '}
          <span className="font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
            {saved.title}
          </span>
        </span>
        <button
          onClick={() => { onJump(saved.id); setVisible(false); }}
          className="ml-1 px-3 py-1 rounded-full text-xs font-semibold text-white transition-all active:scale-95"
          style={{ background: 'var(--color-slate-deep)' }}
        >
          Weiterlesen
        </button>
        <button
          onClick={() => setVisible(false)}
          className="text-[var(--color-warm-grey)] hover:text-[var(--color-slate-deep)] transition-colors"
          aria-label="Schliessen"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Chapter Navigation ────────────────────────────────────────────────
function ChapterNav({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  return (
    <nav aria-label="Kapitelnavigation">
      <div className="mb-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-terracotta)] mb-1">
          Inhalt
        </p>
        <div className="w-8 h-px bg-[var(--color-terracotta)] opacity-60" />
      </div>
      <ul className="space-y-0.5">
        {chapters.map((ch) => (
          <li key={ch.id}>
            <button
              onClick={() => onSelect(ch.id)}
              className={`nav-chapter-link w-full text-left py-1.5 text-sm transition-all duration-200 ${
                activeId === ch.id
                  ? 'active text-[var(--color-slate-deep)] font-medium'
                  : 'text-[var(--color-warm-grey)] hover:text-[var(--color-slate-deep)]'
              }`}
            >
              {ch.isIntro ? (
                <span className="font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Einleitung
                </span>
              ) : (
                <span>
                  <span className="text-xs text-[var(--color-terracotta)] mr-1.5 font-mono">
                    {String(ch.number).padStart(2, '0')}
                  </span>
                  {ch.title}
                </span>
              )}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onSelect('quellen')}
            className={`nav-chapter-link w-full text-left py-1.5 text-sm transition-all duration-200 ${
              activeId === 'quellen'
                ? 'active text-[var(--color-slate-deep)] font-medium'
                : 'text-[var(--color-warm-grey)] hover:text-[var(--color-slate-deep)]'
            }`}
          >
            <span className="text-xs text-[var(--color-terracotta)] mr-1.5 font-mono">—</span>
            Quellen & Ressourcen
          </button>
        </li>
      </ul>
    </nav>
  );
}

// ─── Section Content Renderer ──────────────────────────────────────────
function SectionContent({ section }: { section: import('@/lib/content').Section }) {
  if (section.type === 'paragraph') {
    return (
      <p className="text-[var(--color-slate-deep)] leading-relaxed mb-5" style={{ fontSize: '1.0625rem' }}>
        {section.text}
      </p>
    );
  }
  if (section.type === 'heading') {
    return (
      <h3
        className="text-xl font-semibold mt-8 mb-4 text-[var(--color-slate-deep)]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {section.text}
      </h3>
    );
  }
  if (section.type === 'quote') {
    return (
      <blockquote className="key-quote my-6">
        <p className="text-[var(--color-slate-deep)]">{section.text}</p>
      </blockquote>
    );
  }
  if (section.type === 'list' && section.items) {
    return (
      <ul className="my-5 space-y-2.5">
        {section.items.map((item, i) => (
          <li key={i} className="flex gap-3 text-[var(--color-slate-deep)]" style={{ fontSize: '1.0625rem' }}>
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)] flex-shrink-0" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (section.type === 'steps' && section.steps) {
    return (
      <ol className="my-6 space-y-5">
        {section.steps.map((step, i) => (
          <li key={i} className="flex gap-4">
            <div
              className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{
                background: `linear-gradient(135deg, var(--color-slate-deep), oklch(0.45 0.065 240))`,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {i + 1}
            </div>
            <div className="flex-1 pt-1">
              <p className="font-semibold text-[var(--color-slate-deep)] mb-1.5" style={{ fontFamily: "'Playfair Display', serif" }}>
                {step.title}
              </p>
              <p className="text-[var(--color-slate-deep)] leading-relaxed opacity-80 mb-2" style={{ fontSize: '1rem' }}>
                {step.text}
              </p>
              {step.quote && (
                <p
                  className="text-sm italic text-[var(--color-terracotta)] border-l-2 border-[var(--color-terracotta)] pl-3 opacity-90"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  {step.quote}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    );
  }
  if (section.type === 'highlight') {
    return (
      <div className="highlight-box my-5">
        <p className="text-[var(--color-slate-deep)] leading-relaxed" style={{ fontSize: '1rem' }}>
          {section.text}
        </p>
      </div>
    );
  }
  return null;
}

// ─── Chapter Card ──────────────────────────────────────────────────────
function ChapterCard({ chapter, index }: { chapter: import('@/lib/content').Chapter; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!chapter.isIntro) {
            try {
              localStorage.setItem(BOOKMARK_KEY, JSON.stringify({
                id: chapter.id,
                title: chapter.title,
              }));
            } catch {}
          }
        }
      },
      { threshold: 0.04, rootMargin: '-80px 0px 0px 0px' }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [chapter.id, chapter.title, chapter.isIntro]);

  // Inject interactive visuals at specific chapters
  const renderInteractiveExtra = () => {
    if (chapter.id === 'tauziehen') return <BalanceScale />;
    if (chapter.id === 'akzeptanz') return <AcceptanceSteps />;
    if (chapter.id === 'trauer') return <PendulumViz />;
    if (chapter.id === 'kontrolle') return <ControlCircles />;
    return null;
  };

  // Show tree image for chapter 13 (eigenes-leben)
  const showTreeImage = chapter.id === 'eigenes-leben';

  return (
    <motion.section
      ref={ref}
      id={chapter.id}
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1], delay: 0.04 }}
      className="mb-20 scroll-mt-24 chapter-section group"
    >
      {/* Chapter header */}
      <div className="mb-8">
        {!chapter.isIntro && (
          <div className="flex items-baseline gap-4 mb-3">
            <span className="chapter-number select-none" aria-hidden="true">
              {String(chapter.number).padStart(2, '0')}
            </span>
            <div className="w-12 h-px bg-[var(--color-terracotta)] opacity-40 self-center" />
          </div>
        )}
        <div className="flex items-baseline flex-wrap gap-2">
          <h2
            className={`font-bold text-[var(--color-slate-deep)] leading-tight ${
              chapter.isIntro ? 'text-4xl md:text-5xl mb-3' : 'text-2xl md:text-3xl mb-2'
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {chapter.title}
          </h2>
          {!chapter.isIntro && <AnchorCopyButton chapterId={chapter.id} />}
        </div>
        {chapter.subtitle && (
          <p className="text-lg text-[var(--color-warm-grey)] italic" style={{ fontFamily: "'Source Serif 4', serif" }}>
            {chapter.subtitle}
          </p>
        )}
      </div>

      {/* Tree image for chapter 13 */}
      {showTreeImage && (
        <div className="float-right ml-6 mb-4 w-40 md:w-52 rounded-xl overflow-hidden opacity-80">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031008193/iPZ7FKrWSkaYNvkkDuAdsx/chapter-visual-2-ZNC9jx59PHT4x94XSbJZCz.webp"
            alt="Herbstbaum mit Wurzeln — Symbol für Resilienz und Wandel"
            className="w-full aspect-square object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose-content">
        {chapter.content.map((section, i) => (
          <SectionContent key={i} section={section} />
        ))}
      </div>

      {/* Everyday-life example */}
      {chapter.example && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.12 }}
          className="example-box my-7"
        >
          <div className="example-label">
            <span aria-hidden="true">◈</span> Aus dem Alltag
          </div>
          <p
            className="text-[var(--color-slate-deep)] leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif", fontSize: '1.0625rem' }}
          >
            {chapter.example}
          </p>
        </motion.div>
      )}

      {/* Interactive visual */}
      {renderInteractiveExtra()}

      {/* Key quote */}
      {chapter.keyQuote && (
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
          className="mt-8 p-6 rounded-lg relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, oklch(0.32 0.065 240 / 0.05), oklch(0.72 0.085 55 / 0.08))',
            border: '1px solid oklch(0.32 0.065 240 / 0.12)',
          }}
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
            style={{ background: 'linear-gradient(180deg, var(--color-terracotta), var(--color-gold))' }}
          />
          <p
            className="text-[var(--color-slate-deep)] font-medium leading-relaxed pl-2"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.0625rem', fontStyle: 'italic' }}
          >
            {chapter.keyQuote}
          </p>
        </motion.div>
      )}

      {/* Divider */}
      {index < chapters.length - 1 && (
        <div className="mt-16 divider-ornament">
          <span className="text-xs tracking-widest uppercase opacity-60" style={{ fontFamily: 'monospace' }}>
            ✦
          </span>
        </div>
      )}
    </motion.section>
  );
}

// ─── Sources & Resources Section ──────────────────────────────────────
function SourcesSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.04 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.section
      ref={ref}
      id="quellen"
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
      className="mb-20 scroll-mt-24"
    >
      <div className="mb-8">
        <div className="flex items-baseline gap-4 mb-3">
          <span className="chapter-number select-none" aria-hidden="true">—</span>
          <div className="w-12 h-px bg-[var(--color-terracotta)] opacity-40 self-center" />
        </div>
        <h2
          className="text-2xl md:text-3xl font-bold text-[var(--color-slate-deep)] mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Fachliche Grundlagen
        </h2>
      </div>

      <p className="text-[var(--color-slate-deep)] opacity-80 mb-8 leading-relaxed">
        Dieser Text stützt sich auf etablierte psychologische Konzepte und Forschung. Die folgenden Quellen bilden die fachliche Grundlage.
      </p>

      <div className="space-y-4 mb-12">
        {sources.map((source, i) => (
          <details key={i} className="group">
            <summary
              className="flex items-center justify-between p-4 rounded-xl cursor-pointer list-none transition-all duration-200 hover:shadow-sm"
              style={{ background: 'oklch(0.985 0.008 75)', border: '1px solid oklch(0.88 0.015 80)' }}
            >
              <p className="font-semibold text-[var(--color-slate-deep)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {source.category}
              </p>
              <ChevronRight className="w-4 h-4 text-[var(--color-warm-grey)] group-open:rotate-90 transition-transform duration-200 flex-shrink-0 ml-2" />
            </summary>
            <div className="px-4 pb-4 pt-2">
              <ul className="space-y-2">
                {source.references.map((ref, j) => (
                  <li key={j} className="text-sm text-[var(--color-slate-deep)] opacity-75 leading-relaxed flex gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[var(--color-terracotta)]" />
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>

      {/* Zum Weiterlesen */}
      <h3
        className="text-xl font-semibold text-[var(--color-slate-deep)] mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Zum Weiterlesen für Angehörige
      </h3>
      <div className="space-y-4 mb-10">
        {weiterlesen.map((book, i) => (
          <div key={i} className="flex gap-3 text-[var(--color-slate-deep)]">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)] flex-shrink-0" />
            <div>
              <p className="text-sm leading-relaxed opacity-90">
                <span className="font-semibold">{book.author} ({book.year}):</span>{' '}
                <em>{book.title}</em>. {book.publisher}
              </p>
              {book.note && (
                <p className="text-xs text-[var(--color-warm-grey)] mt-0.5 leading-relaxed">{book.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Beratung Schweiz */}
      <h3
        className="text-xl font-semibold text-[var(--color-slate-deep)] mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Beratung und Austausch (Schweiz)
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {resources.map((res, i) => (
          <a
            key={i}
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-terracotta)] transition-all duration-200 hover:shadow-md"
            style={{ background: 'oklch(0.985 0.008 75)' }}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <p className="font-semibold text-[var(--color-slate-deep)] group-hover:text-[var(--color-terracotta)] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                {res.name}
              </p>
              <ExternalLink className="w-4 h-4 text-[var(--color-warm-grey)] group-hover:text-[var(--color-terracotta)] flex-shrink-0 mt-0.5 transition-colors" />
            </div>
            <p className="text-sm text-[var(--color-slate-deep)] opacity-70 leading-relaxed">
              {res.description}
            </p>
          </a>
        ))}
      </div>
    </motion.section>
  );
}

// ─── Chapter Overview Cards (intro section) ───────────────────────────
function ChapterOverview({ onSelect }: { onSelect: (id: string) => void }) {
  const highlights = [
    { id: 'akzeptanz', number: '06', title: 'Akzeptanz', desc: 'Die Realität anerkennen, ohne sie gutzuheissen' },
    { id: 'kontrolle', number: '09', title: 'Kontrolle & Einfluss', desc: 'Energie dorthin lenken, wo sie wirkt' },
    { id: 'selbstwirksamkeit', number: '10', title: 'Selbstwirksamkeit', desc: 'Wieder erleben, dass ich handeln kann' },
    { id: 'werte', number: '11', title: 'Werte als Kompass', desc: 'Orientierung, wenn das Alte bricht' },
    { id: 'orientierung', number: '15', title: 'Praktische Orientierung', desc: 'Fünf Schritte für Umbruchphasen' },
    { id: 'unterstuetzung', number: '16', title: 'Professionelle Hilfe', desc: 'Wann Unterstützung wichtig ist' },
  ];

  return (
    <div className="my-10 p-6 rounded-2xl" style={{ background: 'oklch(0.985 0.008 75)', border: '1px solid oklch(0.88 0.015 80)' }}>
      <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-terracotta)] mb-4">
        Schnellzugriff
      </p>
      <h3 className="text-lg font-semibold text-[var(--color-slate-deep)] mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
        Zentrale Themen
      </h3>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3">
        {highlights.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className="group text-left p-3 rounded-xl transition-all duration-200 hover:shadow-md active:scale-95"
            style={{
              background: 'oklch(0.975 0.012 80)',
              border: '1px solid oklch(0.88 0.015 80)',
            }}
          >
            <span className="text-xs font-mono text-[var(--color-terracotta)] block mb-1">{item.number}</span>
            <p className="text-sm font-semibold text-[var(--color-slate-deep)] group-hover:text-[var(--color-terracotta)] transition-colors leading-tight mb-1 break-words hyphens-auto" style={{ fontFamily: "'Playfair Display', serif" }}>
              {item.title}
            </p>
            <p className="text-xs text-[var(--color-warm-grey)] leading-tight">{item.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────
export default function Home() {
  const [activeId, setActiveId] = useState('intro');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Intersection Observer for active chapter tracking
  useEffect(() => {
    const allIds = [...chapters.map(c => c.id), 'quellen'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px -40% 0px' }
    );

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
      setMobileNavOpen(false);
    }
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-cream)' }}>
      <ReadingProgress />
      <BackToTop />
      <BookmarkBanner onJump={scrollTo} />

      {/* ── Hero Section ── */}
      <header className="relative overflow-hidden" style={{ minHeight: '72vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663031008193/iPZ7FKrWSkaYNvkkDuAdsx/hero-bg-iQ9EPLgRjKzxZDBVD3XCZa.webp')`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, oklch(0.975 0.012 80 / 0.10) 0%, oklch(0.975 0.012 80 / 0.45) 55%, oklch(0.975 0.012 80 / 0.95) 100%)',
          }}
        />

        {/* Subtle top bar */}
        <div
          className="absolute top-0 left-0 right-0 px-6 py-4 flex items-center justify-between print-hide"
          style={{ background: 'oklch(0.975 0.012 80 / 0.0)' }}
        >
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[var(--color-terracotta)]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-slate-deep)] opacity-70">
              Für Angehörige
            </span>
          </div>
          <button
            onClick={() => window.print()}
            className="print-hide hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:shadow-sm active:scale-95"
            style={{
              background: 'oklch(0.975 0.012 80 / 0.75)',
              color: 'var(--color-slate-deep)',
              border: '1px solid oklch(0.88 0.015 80)',
              backdropFilter: 'blur(8px)',
            }}
            title="Seite drucken oder als PDF speichern"
          >
            <Printer className="w-3.5 h-3.5" />
            Drucken / PDF
          </button>
        </div>

        <div className="relative container flex flex-col justify-end h-full" style={{ minHeight: '72vh', paddingBottom: '4rem', paddingTop: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            className="max-w-3xl"
          >
            <h1
              className="font-bold text-[var(--color-slate-deep)] mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 8vw, 4.5rem)' }}
            >
              Loslassen und
              <br />
              <em>Dranbleiben</em>
            </h1>
            <p
              className="text-base sm:text-xl text-[var(--color-slate-deep)] opacity-80 mb-2 leading-relaxed"
              style={{ fontFamily: "'Source Serif 4', serif", maxWidth: '560px' }}
            >
              Für Angehörige von Menschen mit einer psychischen Erkrankung
            </p>
            <p
              className="text-sm sm:text-base text-[var(--color-warm-grey)] italic mb-5"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              Über Akzeptanz, Selbstwirksamkeit und ein Leben nach eigenen Werten
            </p>
            <div
              className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full"
              style={{
                background: 'oklch(0.975 0.012 80 / 0.72)',
                border: '1px solid oklch(0.88 0.015 80)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span
                className="text-xs text-[var(--color-slate-deep)] opacity-75"
                style={{ fontFamily: "'Source Serif 4', serif" }}
              >
                Fachstelle Angehörigenarbeit &middot; Psychiatrische Universitätsklinik Zürich (PUK Zürich)
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <button
                onClick={() => scrollTo('intro')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg active:scale-95 w-full sm:w-auto"
                style={{
                  background: 'linear-gradient(135deg, var(--color-slate-deep), oklch(0.45 0.065 240))',
                  fontFamily: "'Source Serif 4', serif",
                }}
              >
                <BookOpen className="w-4 h-4" />
                Lesen beginnen
              </button>
              <button
                onClick={() => scrollTo('orientierung')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-md active:scale-95 w-full sm:w-auto"
                style={{
                  background: 'oklch(0.985 0.008 75 / 0.88)',
                  color: 'var(--color-slate-deep)',
                  border: '1px solid oklch(0.88 0.015 80)',
                  fontFamily: "'Source Serif 4', serif",
                  backdropFilter: 'blur(8px)',
                }}
              >
                Praktische Orientierung
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* ── Mobile Nav Toggle ── */}
      <div
        className="lg:hidden sticky top-0 z-50 flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)]"
        style={{ background: 'oklch(0.975 0.012 80 / 0.96)', backdropFilter: 'blur(12px)' }}
      >
        <span className="text-sm font-semibold text-[var(--color-slate-deep)]" style={{ fontFamily: "'Playfair Display', serif" }}>
          {activeId === 'intro' ? 'Einleitung' : chapters.find(c => c.id === activeId)?.title || 'Kapitel'}
        </span>
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="p-2 rounded-lg hover:bg-[var(--color-muted)] transition-colors"
          aria-label="Navigation öffnen"
        >
          {mobileNavOpen ? <X className="w-5 h-5 text-[var(--color-slate-deep)]" /> : <Menu className="w-5 h-5 text-[var(--color-slate-deep)]" />}
        </button>
      </div>

      {/* ── Mobile Nav Drawer ── */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-[49px] left-0 right-0 z-40 border-b border-[var(--color-border)] shadow-xl overflow-y-auto"
            style={{
              background: 'oklch(0.975 0.012 80 / 0.98)',
              backdropFilter: 'blur(16px)',
              maxHeight: '70vh',
            }}
          >
            <div className="px-6 py-6">
              <ChapterNav activeId={activeId} onSelect={scrollTo} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Layout ── */}
      <div className="container py-16">
        <div className="flex gap-16 lg:gap-20">

          {/* ── Sidebar Navigation (Desktop) ── */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <ChapterNav activeId={activeId} onSelect={scrollTo} />

              {/* Decorative watercolor image */}
              <div className="mt-10 rounded-xl overflow-hidden opacity-65 shadow-sm">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031008193/iPZ7FKrWSkaYNvkkDuAdsx/chapter-visual-1-c9Px2Hm8JHSUheSdNePwkC.webp"
                  alt="Abstrakte Wasserfarben — zwei Strömungen begegnen sich"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </aside>

          {/* ── Main Content ── */}
          <main className="flex-1 min-w-0 max-w-2xl">
            {chapters.map((chapter, index) => (
              <div key={chapter.id}>
                <ChapterCard chapter={chapter} index={index} />
                {/* Chapter overview after intro */}
                {chapter.isIntro && (
                  <ChapterOverview onSelect={scrollTo} />
                )}
              </div>
            ))}
            <SourcesSection />
          </main>
        </div>
      </div>

      {/* ── Impressum ── */}
      <section
        id="impressum"
        className="border-t border-[var(--color-border)] py-14"
        style={{ background: 'oklch(0.972 0.010 80)' }}
      >
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-terracotta)] mb-4">
              Impressum
            </p>
            <h3
              className="text-xl font-bold text-[var(--color-slate-deep)] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Fachstelle Angehörigenarbeit
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-[var(--color-warm-grey)] mb-2">Herausgeberin</p>
                <p className="text-sm text-[var(--color-slate-deep)] leading-relaxed">
                  Fachstelle Angehörigenarbeit<br />
                  Psychiatrische Universitätsklinik Zürich (PUK Zürich)<br />
                  Lenggstrasse 31, Postfach<br />
                  8032 Zürich
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-[var(--color-warm-grey)] mb-2">Kontakt</p>
                <p className="text-sm text-[var(--color-slate-deep)] leading-relaxed">
                  Telefon: 058 384 38 00<br />
                  <a
                    href="mailto:angehoerigenarbeit@pukzh.ch"
                    className="text-[var(--color-terracotta)] hover:underline"
                  >
                    angehoerigenarbeit@pukzh.ch
                  </a><br />
                  <a
                    href="https://www.pukzh.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-terracotta)] hover:underline"
                  >
                    www.pukzh.ch
                  </a>
                </p>
              </div>
            </div>

            <div
              className="p-4 rounded-xl mb-6"
              style={{ background: 'oklch(0.985 0.008 75)', border: '1px solid oklch(0.88 0.015 80)' }}
            >
              <p className="text-sm text-[var(--color-slate-deep)] leading-relaxed">
                Die Fachstelle Angehörigenarbeit der PUK Zürich unterstützt, begleitet und informiert Angehörige und nahestehende Personen von Menschen mit einer psychischen Erkrankung. Das Angebot umfasst Einzelgespräche, Gruppen und psychoedukative Materialien.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs text-[var(--color-warm-grey)]">
                Inhaltlich verantwortlich: Christa Egger &middot; Stand 2025
              </p>
              <p className="text-xs text-[var(--color-warm-grey)]">
                Dieser Text ersetzt keine professionelle Beratung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="border-t border-[var(--color-border)] py-8"
        style={{ background: 'oklch(0.96 0.008 80)' }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p
                className="text-sm font-semibold text-[var(--color-slate-deep)] mb-0.5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Loslassen und Dranbleiben
              </p>
              <p className="text-xs text-[var(--color-warm-grey)]">
                Fachstelle Angehörigenarbeit, PUK Zürich
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('impressum');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs text-[var(--color-warm-grey)] hover:text-[var(--color-terracotta)] transition-colors"
              >
                Impressum
              </button>
              <span className="text-xs text-[var(--color-warm-grey)] opacity-40">|</span>
              <span className="text-xs text-[var(--color-warm-grey)]">Stand 2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

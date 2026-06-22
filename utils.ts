/**
 * DESIGN SYSTEM: "Stilles Wasser"
 * Interactive visual components for psychoeducational content
 * - ControlCircles: Concentric circles showing Kontrolle/Einfluss/Sorge
 * - PendulumViz: Pendulum visualization for grief/mourning
 * - BalanceScale: Sicherheit vs. Entfaltung balance
 * - KeyQuoteHighlight: Animated key quote display
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Control Circles (Kapitel 9) ──────────────────────────────────────
export function ControlCircles() {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const zones = [
    {
      id: 'kontrolle',
      label: 'Kontrolle',
      color: 'var(--color-slate-deep)',
      bgColor: 'oklch(0.32 0.065 240 / 0.12)',
      borderColor: 'oklch(0.32 0.065 240 / 0.5)',
      size: 'inner',
      description: 'Was Sie direkt tun oder lassen können: Pausen machen, Unterstützung suchen, Grenzen formulieren, essen, schlafen, atmen.',
      examples: ['Heute eine Pause einlegen', 'Unterstützung anfragen', 'Einen kleinen Schritt tun'],
    },
    {
      id: 'einfluss',
      label: 'Einfluss',
      color: 'var(--color-sage)',
      bgColor: 'oklch(0.65 0.045 160 / 0.10)',
      borderColor: 'oklch(0.65 0.045 160 / 0.45)',
      size: 'middle',
      description: 'Dinge, die Sie nicht vollständig steuern, aber mitgestalten können: Gespräche, familiäre Dynamiken, Atmosphäre.',
      examples: ['Gespräche führen', 'Beziehungen gestalten', 'Rückmeldungen geben'],
    },
    {
      id: 'sorge',
      label: 'Sorge',
      color: 'var(--color-warm-grey)',
      bgColor: 'oklch(0.55 0.015 240 / 0.07)',
      borderColor: 'oklch(0.55 0.015 240 / 0.30)',
      size: 'outer',
      description: 'Dinge, die Sie beschäftigen, aber nicht direkt ändern können: Entscheidungen anderer, die Vergangenheit, die Krankheit an sich.',
      examples: ['Entscheidungen anderer', 'Die Vergangenheit', 'Wie schnell Besserung eintritt'],
    },
  ];

  const active = zones.find(z => z.id === activeZone);

  return (
    <div className="my-8 p-6 rounded-2xl" style={{ background: 'oklch(0.985 0.008 75)', border: '1px solid oklch(0.88 0.015 80)' }}>
      <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-terracotta)] mb-4">
        Interaktive Übersicht
      </p>
      <h4 className="text-lg font-semibold text-[var(--color-slate-deep)] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
        Drei Bereiche der Aufmerksamkeit
      </h4>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Concentric circles */}
        <div className="relative flex-shrink-0" style={{ width: 240, height: 240 }}>
          {/* Outer: Sorge */}
          <motion.button
            onClick={() => setActiveZone(activeZone === 'sorge' ? null : 'sorge')}
            className="absolute inset-0 rounded-full flex items-center justify-center cursor-pointer transition-all"
            style={{
              background: activeZone === 'sorge' ? 'oklch(0.55 0.015 240 / 0.15)' : zones[2].bgColor,
              border: `2px dashed ${zones[2].borderColor}`,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute top-3 text-xs font-semibold" style={{ color: zones[2].color, fontFamily: "'Source Serif 4', serif" }}>
              Sorge
            </span>
          </motion.button>

          {/* Middle: Einfluss */}
          <motion.button
            onClick={() => setActiveZone(activeZone === 'einfluss' ? null : 'einfluss')}
            className="absolute rounded-full flex items-center justify-center cursor-pointer"
            style={{
              inset: '30px',
              background: activeZone === 'einfluss' ? 'oklch(0.65 0.045 160 / 0.18)' : zones[1].bgColor,
              border: `2px solid ${zones[1].borderColor}`,
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute top-2 text-xs font-semibold" style={{ color: zones[1].color, fontFamily: "'Source Serif 4', serif" }}>
              Einfluss
            </span>
          </motion.button>

          {/* Inner: Kontrolle */}
          <motion.button
            onClick={() => setActiveZone(activeZone === 'kontrolle' ? null : 'kontrolle')}
            className="absolute rounded-full flex items-center justify-center cursor-pointer"
            style={{
              inset: '72px',
              background: activeZone === 'kontrolle' ? 'oklch(0.32 0.065 240 / 0.20)' : zones[0].bgColor,
              border: `2px solid ${zones[0].borderColor}`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs font-semibold text-center leading-tight" style={{ color: zones[0].color, fontFamily: "'Source Serif 4', serif" }}>
              Kontrolle
            </span>
          </motion.button>
        </div>

        {/* Detail panel */}
        <div className="flex-1 min-h-[120px]">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25 }}
              >
                <p className="font-semibold text-[var(--color-slate-deep)] mb-2" style={{ fontFamily: "'Playfair Display', serif", color: active.color }}>
                  {active.label}
                </p>
                <p className="text-sm text-[var(--color-slate-deep)] opacity-80 leading-relaxed mb-3">
                  {active.description}
                </p>
                <ul className="space-y-1.5">
                  {active.examples.map((ex, i) => (
                    <li key={i} className="flex gap-2 text-sm text-[var(--color-slate-deep)] opacity-70">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-terracotta)] flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <motion.p
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm text-[var(--color-warm-grey)] italic"
                style={{ fontFamily: "'Source Serif 4', serif" }}
              >
                Klicken Sie auf einen Bereich, um mehr zu erfahren.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ─── Pendulum Visualization (Kapitel 8) ───────────────────────────────
export function PendulumViz() {
  const [position, setPosition] = useState<'verlust' | 'center' | 'weiterleben'>('center');

  return (
    <div className="my-8 p-6 rounded-2xl" style={{ background: 'oklch(0.985 0.008 75)', border: '1px solid oklch(0.88 0.015 80)' }}>
      <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-terracotta)] mb-4">
        Das duale Prozessmodell
      </p>
      <h4 className="text-lg font-semibold text-[var(--color-slate-deep)] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        Das Pendeln der Trauer
      </h4>
      <p className="text-sm text-[var(--color-warm-grey)] mb-6">
        Trauer bewegt sich — zwischen Verlust und Weiterleben. Beides darf sein.
      </p>

      {/* Pendulum visual */}
      <div className="relative h-32 mb-6">
        <div className="absolute inset-x-0 top-0 flex justify-between px-4">
          <div
            className="text-center cursor-pointer group"
            onClick={() => setPosition('verlust')}
          >
            <div
              className={`w-28 py-3 px-2 rounded-xl text-center transition-all duration-300 ${
                position === 'verlust' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-80'
              }`}
              style={{
                background: position === 'verlust' ? 'oklch(0.32 0.065 240 / 0.12)' : 'oklch(0.32 0.065 240 / 0.05)',
                border: `1px solid oklch(0.32 0.065 240 / ${position === 'verlust' ? '0.3' : '0.15'})`,
              }}
            >
              <p className="text-xs font-semibold text-[var(--color-slate-deep)] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Verlust
              </p>
              <p className="text-xs text-[var(--color-slate-deep)] opacity-70 leading-tight">
                Schmerz · Sorge · Wut · Sehnsucht
              </p>
            </div>
          </div>

          <div
            className="text-center cursor-pointer"
            onClick={() => setPosition('weiterleben')}
          >
            <div
              className={`w-28 py-3 px-2 rounded-xl text-center transition-all duration-300 ${
                position === 'weiterleben' ? 'shadow-lg scale-105' : 'opacity-60 hover:opacity-80'
              }`}
              style={{
                background: position === 'weiterleben' ? 'oklch(0.72 0.085 55 / 0.12)' : 'oklch(0.72 0.085 55 / 0.05)',
                border: `1px solid oklch(0.72 0.085 55 / ${position === 'weiterleben' ? '0.3' : '0.15'})`,
              }}
            >
              <p className="text-xs font-semibold text-[var(--color-slate-deep)] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Weiterleben
              </p>
              <p className="text-xs text-[var(--color-slate-deep)] opacity-70 leading-tight">
                Alltag · Ruhe · Freude · Normalität
              </p>
            </div>
          </div>
        </div>

        {/* Pendulum arc */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 300 120"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 50 20 Q 150 80 250 20"
            fill="none"
            stroke="oklch(0.88 0.015 80)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <motion.circle
            cx={position === 'verlust' ? 50 : position === 'weiterleben' ? 250 : 150}
            cy={position === 'verlust' ? 20 : position === 'weiterleben' ? 20 : 75}
            r="8"
            fill="var(--color-terracotta)"
            animate={{
              cx: position === 'verlust' ? 50 : position === 'weiterleben' ? 250 : 150,
              cy: position === 'verlust' ? 20 : position === 'weiterleben' ? 20 : 75,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          />
        </svg>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setPosition('center')}
          className="text-xs text-[var(--color-warm-grey)] hover:text-[var(--color-terracotta)] transition-colors italic"
          style={{ fontFamily: "'Source Serif 4', serif" }}
        >
          Beides darf nebeneinander bestehen →
        </button>
      </div>
    </div>
  );
}

// ─── Balance Scale (Kapitel 2) ─────────────────────────────────────────
export function BalanceScale() {
  const [balance, setBalance] = useState(0); // -1 to 1, 0 = balanced

  return (
    <div className="my-8 p-6 rounded-2xl" style={{ background: 'oklch(0.985 0.008 75)', border: '1px solid oklch(0.88 0.015 80)' }}>
      <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-terracotta)] mb-4">
        Interaktive Reflexion
      </p>
      <h4 className="text-lg font-semibold text-[var(--color-slate-deep)] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        Sicherheit und Entfaltung
      </h4>
      <p className="text-sm text-[var(--color-warm-grey)] mb-6">
        Wo fühlen Sie sich gerade? Bewegen Sie den Regler.
      </p>

      <div className="flex items-center gap-4 mb-4">
        <span className="text-xs font-semibold text-[var(--color-slate-deep)] w-20 text-right" style={{ fontFamily: "'Source Serif 4', serif" }}>
          Sicherheit
        </span>
        <div className="flex-1 relative">
          <input
            type="range"
            min="-100"
            max="100"
            value={balance * 100}
            onChange={(e) => setBalance(Number(e.target.value) / 100)}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, oklch(0.32 0.065 240 / 0.3) 0%, oklch(0.32 0.065 240 / 0.3) ${(balance + 1) / 2 * 100}%, oklch(0.72 0.085 55 / 0.3) ${(balance + 1) / 2 * 100}%, oklch(0.72 0.085 55 / 0.3) 100%)`,
            }}
          />
        </div>
        <span className="text-xs font-semibold text-[var(--color-terracotta)] w-20" style={{ fontFamily: "'Source Serif 4', serif" }}>
          Entfaltung
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={balance < -0.3 ? 'sicherheit' : balance > 0.3 ? 'entfaltung' : 'balance'}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="text-center p-3 rounded-lg"
          style={{
            background: balance < -0.3
              ? 'oklch(0.32 0.065 240 / 0.07)'
              : balance > 0.3
              ? 'oklch(0.72 0.085 55 / 0.10)'
              : 'oklch(0.65 0.045 160 / 0.08)',
          }}
        >
          <p className="text-sm text-[var(--color-slate-deep)] italic" style={{ fontFamily: "'Source Serif 4', serif" }}>
            {balance < -0.3
              ? 'Sicherheit gibt Halt und Schutz — manchmal brauchen Sie zuerst Stabilisierung.'
              : balance > 0.3
              ? 'Entfaltung ermöglicht Wachstum — manchmal braucht es den Mut, Neues zu wagen.'
              : 'Balance: Beides darf nebeneinander bestehen. Reifung bedeutet nicht, eine Kraft zu besiegen.'}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Acceptance Steps (Kapitel 6) ─────────────────────────────────────
export function AcceptanceSteps() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const steps = [
    {
      icon: '✕',
      label: 'Nicht Akzeptanz',
      text: 'Resignation: „Es bringt sowieso nichts."',
      color: 'oklch(0.577 0.245 27.325)',
    },
    {
      icon: '≠',
      label: 'Nicht Zustimmung',
      text: 'Akzeptanz bedeutet nicht: „Es ist gut so."',
      color: 'var(--color-warm-grey)',
    },
    {
      icon: '✓',
      label: 'Akzeptanz',
      text: '„Es ist gerade so. Ich höre auf, meine Kraft gegen die Tatsache zu richten, dass es gerade so ist."',
      color: 'var(--color-sage)',
    },
  ];

  return (
    <div className="my-6 space-y-3">
      {steps.map((step, i) => (
        <motion.button
          key={i}
          onClick={() => setExpanded(expanded === i ? null : i)}
          className="w-full text-left p-4 rounded-xl transition-all duration-200"
          style={{
            background: expanded === i ? 'oklch(0.985 0.008 75)' : 'oklch(0.97 0.010 80)',
            border: `1px solid ${expanded === i ? step.color : 'oklch(0.88 0.015 80)'}`,
          }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="flex items-center gap-3">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
              style={{ background: `${step.color}20`, color: step.color }}
            >
              {step.icon}
            </span>
            <span className="font-semibold text-[var(--color-slate-deep)]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {step.label}
            </span>
          </div>
          <AnimatePresence>
            {expanded === i && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-3 text-sm text-[var(--color-slate-deep)] opacity-80 leading-relaxed pl-11 overflow-hidden"
                style={{ fontFamily: "'Source Serif 4', serif" }}
              >
                {step.text}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.button>
      ))}
    </div>
  );
}

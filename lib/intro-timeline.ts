/**
 * Intro timeline — single source of truth.
 *
 * These constants drive three synchronized points:
 *   1. Pre-hydration gate script (app/layout.tsx — inlined into <head>)
 *   2. React fallback timeout (components/intro-reveal.tsx)
 *   3. CSS animation durations/delays (app/globals.css — literal values, see comments)
 *
 * Desktop target (~2.85s):
 *   0 –  850ms  decode forms "Impulso X"        (INTRO_DECODE_MS)
 *   850 – 1050ms single shimmer pass           (INTRO_SHIMMER_START_MS)
 *   1050 – 1950ms legible hold + "Intelligence" (INTRO_TAG_START_MS -> INTRO_CURTAIN_START_MS)
 *   1950 – 2850ms curtain lifts (ease-in)       (INTRO_CURTAIN_START_MS -> INTRO_DESKTOP_TOTAL_MS)
 *
 * Mobile is proportional (~2.45s): same keyframe percentages, shorter duration.
 * brandHoldMs >= 800 guarantees the name stays static & legible before the curtain.
 *
 * When changing values here, update the literal numbers in app/globals.css
 * (search for "intro timeline sync") and keep the gate script in app/layout.tsx
 * interpolating these same exports.
 */
export const INTRO_DESKTOP_TOTAL_MS = 2850;
export const INTRO_MOBILE_TOTAL_MS = 2450;
export const INTRO_BRAND_HOLD_MS = 800;
export const INTRO_DECODE_MS = 850;
export const INTRO_SHIMMER_START_MS = 850;
export const INTRO_TAG_START_MS = 1050;
export const INTRO_CURTAIN_START_MS = 1950;

"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

/**
 * AmbientBackground
 * -----------------
 * Subtle, ambient animated background shared by EVERY page. Mounted once in
 * app/layout.tsx so future pages get it automatically.
 *
 * - Pure CSS animations (transform + opacity only) — no JS loop, no canvas.
 * - `fixed inset-0 z-[-10] pointer-events-none` so it can never block clicks
 *   or cover content.
 * - Picks a soft colour variant based on the current route; unknown routes
 *   fall back to the default palette.
 * - All timing/colour/intensity knobs are CSS variables declared in
 *   app/globals.css (`.ambient-bg` block).
 *
 * Respect prefers-reduced-motion: animations are disabled in CSS.
 */

const VARIANT_BY_PATH: Record<string, string> = {
    '/': 'ambient-bg--home',
    '/about': 'ambient-bg--about',
    '/services': 'ambient-bg--services',
    '/contact-us': 'ambient-bg--contact',
    '/book-appointment': 'ambient-bg--booking',
}

export default function AmbientBackground() {
    const pathname = usePathname()

    // Match the deepest known prefix so /services/general gets the
    // services variant too.
    const variant = Object.entries(VARIANT_BY_PATH)
        .sort(([a], [b]) => b.length - a.length)
        .find(([path]) => pathname === path || pathname.startsWith(`${path}/`))?.[1]
        ?? 'ambient-bg--home'

    return (
        <div aria-hidden="true" className={`ambient-bg ${variant}`}>
            <span className="ambient-blob ambient-blob--1" />
            <span className="ambient-blob ambient-blob--2" />
            <span className="ambient-blob ambient-blob--3" />
            <span className="ambient-ring ambient-ring--1" />
            <span className="ambient-ring ambient-ring--2" />
        </div>
    )
}

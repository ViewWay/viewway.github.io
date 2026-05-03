---
layout: home
title: "Honglin He (何红林)"
---

<p style="font-size:1.1em; max-width:700px;">
I am an independent researcher focusing on extending the capabilities of large language models through novel mathematical frameworks.
My research explores the intersection of <strong>hyperbolic geometry</strong>, <strong>quantum-inspired information retrieval</strong>, and <strong>adaptive context management</strong>.
</p>

---

## Research Interests

- **Hyperbolic Geometry for NLP** — Poincaré ball embeddings for hierarchical document retrieval
- **Quantum-Inspired IR** — Density matrix representations for context selection in LLMs
- **LLM Context Extension** — Adaptive compression with closed-loop quality feedback
- **Embedded Systems** — Rust/Zig firmware for smart energy metering (Cortex-M0+)

---

## 🔬 UCEF: Universal Context Extension Framework

I designed and implemented **UCEF**, a model-agnostic framework that enables any LLM to process documents far exceeding its native context window.

**Core innovations:**
1. Hyperbolic retrieval engine using Poincaré ball geodesic distance
2. Quantum-inspired context selection via density matrix measurement
3. Adaptive compression with 4-dimensional quality feedback loop
4. Three-layer memory architecture (hot/warm/cold)

**Results on LongBench (8 tasks, 30 samples/task):**

| Model | Method | ROUGE-L | vs RAG |
|-------|--------|---------|--------|
| GLM-4-flash | RAG top-k | 0.1340 | — |
| GLM-4-flash | **UCEF** | **0.1479** | **+10.3%** |
| DeepSeek-v3 | RAG top-k | 0.1800 | — |
| DeepSeek-v3 | **UCEF** | **0.2146** | **+19.3%** |

📄 [GitHub Repository](https://github.com/ViewWay/UCEF) · 📊 [Documentation](https://viewway.github.io/UCEF/)

---

## 🔧 FeMeter: Three-Phase Smart Energy Meter

A Rust-based firmware for FM33A0xx (Cortex-M0+) three-phase smart electricity meters.

- 6×UART + 2×LPUART with deep-sleep wake-up
- FreeRTOS 11.x migration
- ~10,400 lines of core firmware

📄 [GitHub Repository](https://github.com/ViewWay/FeMeter)

---

## What have I been up to?

- **May 2026** — Real benchmark experiments completed: UCEF evaluated on LongBench with GLM-4-flash and DeepSeek-v3
- **April 2026** — FeMeter firmware Phase 1-4 complete, FreeRTOS 11.x migration done
- **March 2026** — UCEF v2026.5.2 released: 15 crates, all phases complete
- **January 2026** — Competitive analysis of hyperbolic RAG landscape (HyperbolicRAG, HypRAG, Text Has Curvature)

---

## Contact

- 📧 [hehonglin525@gmail.com](mailto:hehonglin525@gmail.com)
- 🐙 [GitHub: ViewWay](https://github.com/ViewWay)
- 🌐 [UCEF Documentation](https://viewway.github.io/UCEF/)

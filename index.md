---
layout: home
title: "HongLin He"
---

<script src="/assets/i18n.js"></script>
<link rel="stylesheet" href="/assets/style.css">

<div class="top-bar">
  <div class="lang-switcher">
    <select id="lang-select" onchange="switchLang(this.value)">
      <option value="en">English</option>
      <option value="zh-CN">中文简体</option>
      <option value="zh-TW">中文繁體</option>
      <option value="ja">日本語</option>
      <option value="ko">한국어</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
      <option value="es">Español</option>
    </select>
  </div>
  <button class="theme-toggle" onclick="toggleTheme()" title="Toggle dark mode">🌙</button>
</div>

<div class="hero">
  <h1>HongLin He</h1>
  <p class="tagline" data-i18n="tagline">Independent researcher in hyperbolic geometry, quantum-inspired IR, and LLM context extension</p>
</div>

<hr>

<h2 data-i18n="research_interests">Research Interests</h2>

<div class="interest-grid">
  <div class="interest-card">
    <h3>🌐 Hyperbolic Geometry</h3>
    <p data-i18n="interest_hyperbolic">Poincaré ball embeddings for hierarchical document retrieval in RAG systems</p>
  </div>
  <div class="interest-card">
    <h3>⚛️ Quantum-Inspired IR</h3>
    <p data-i18n="interest_quantum">Density matrix representations and measurement collapse for context selection</p>
  </div>
  <div class="interest-card">
    <h3>🧠 LLM Context Extension</h3>
    <p data-i18n="interest_llm">Adaptive compression with closed-loop quality feedback for long-context processing</p>
  </div>
  <div class="interest-card">
    <h3>🔧 Embedded Systems</h3>
    <p data-i18n="interest_embedded">Rust/Zig firmware for smart energy metering on Cortex-M0+</p>
  </div>
</div>

<hr>

<h2>🔬 UCEF: Universal Context Extension Framework</h2>

<p data-i18n="ucef_desc">I designed UCEF, a model-agnostic framework enabling any LLM to process documents far exceeding its native context window through hyperbolic retrieval, quantum-inspired selection, adaptive compression, and quality feedback.</p>

<p><strong data-i18n="ucef_results">Results on LongBench (8 tasks × 30 samples/task × 2 models):</strong></p>

<table class="results-table">
  <thead>
    <tr>
      <th>Model</th>
      <th>Method</th>
      <th>ROUGE-L</th>
      <th>TokenF1</th>
      <th data-i18n="th_vs_rag">vs RAG</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>GLM-4-flash</td><td>RAG top-k</td><td>0.1340</td><td>0.1498</td><td>—</td></tr>
    <tr class="highlight"><td>GLM-4-flash</td><td><strong>UCEF</strong></td><td><strong>0.1479</strong></td><td><strong>0.1671</strong></td><td><strong>+10.3%</strong></td></tr>
    <tr><td>DeepSeek-v3</td><td>RAG top-k</td><td>0.1800</td><td>0.1919</td><td>—</td></tr>
    <tr class="highlight"><td>DeepSeek-v3</td><td><strong>UCEF</strong></td><td><strong>0.2146</strong></td><td><strong>0.2306</strong></td><td><strong>+19.3%</strong></td></tr>
  </tbody>
</table>

<p><strong data-i18n="ucef_sig">Statistical significance (DeepSeek-v3):</strong> Wilcoxon p=0.011, paired t-test p=0.007 ✅</p>

<p>
  📄 <a href="https://github.com/ViewWay/UCEF">GitHub</a> ·
  📊 <a href="https://viewway.github.io/UCEF/" data-i18n="link_docs">Documentation</a> ·
  📝 <a href="/papers.html" data-i18n="link_paper">Paper</a>
</p>

<hr>

<h2 data-i18n="heading_updates">What have I been up to?</h2>

<ul class="timeline">
  <li><strong>May 2026</strong> — <span data-i18n="update_may26">Real benchmark experiments: UCEF on LongBench with GLM-4-flash and DeepSeek-v3</span></li>
  <li><strong>Apr 2026</strong> — <span data-i18n="update_apr26">FeMeter firmware Phase 1-4 complete, FreeRTOS 11.x migration done</span></li>
  <li><strong>Mar 2026</strong> — <span data-i18n="update_mar26">UCEF v2026.5.2 released: all phases complete</span></li>
  <li><strong>Jan 2026</strong> — <span data-i18n="update_jan26">Competitive analysis of hyperbolic RAG landscape</span></li>
</ul>

<hr>

<h2 data-i18n="heading_contact">Contact</h2>

<ul class="contact-list">
  <li>📧 <a href="mailto:hehonglin525@gmail.com">hehonglin525@gmail.com</a></li>
  <li>🐙 <a href="https://github.com/ViewWay">GitHub: ViewWay</a></li>
  <li>🌐 <a href="https://viewway.github.io/UCEF/" data-i18n="link_docs2">UCEF Documentation</a></li>
</ul>

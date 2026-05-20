// ═══════════════════════════════════════════════════
// I18N - 8 Language Support
// ═══════════════════════════════════════════════════

const translations = {
  // ── Navigation ──────────────────────────────────────
  "nav_papers": {
    "en": "Papers", "zh-CN": "论文", "zh-TW": "論文", "ja": "論文",
    "ko": "논문", "fr": "Publications", "de": "Publikationen", "es": "Publicaciones"
  },
  "nav_projects": {
    "en": "Projects", "zh-CN": "项目", "zh-TW": "專案", "ja": "プロジェクト",
    "ko": "프로젝트", "fr": "Projets", "de": "Projekte", "es": "Proyectos"
  },
  "nav_awards": {
    "en": "Awards", "zh-CN": "奖项", "zh-TW": "獎項", "ja": "受賞",
    "ko": "수상", "fr": "Prix", "de": "Auszeichnungen", "es": "Premios"
  },
  "nav_cv": {
    "en": "CV", "zh-CN": "简历", "zh-TW": "履歷", "ja": "履歴書",
    "ko": "이력서", "fr": "CV", "de": "Lebenslauf", "es": "CV"
  },

  // ── Index Page ─────────────────────────────────────
  "tagline": {
    "en": "Independent researcher in hyperbolic geometry, quantum-inspired IR, and LLM context extension",
    "zh-CN": "独立研究者，专注于双曲几何、量子启发信息检索和大语言模型上下文扩展",
    "zh-TW": "獨立研究者，專注於雙曲幾何、量子啟發資訊檢索和大語言模型上下文擴展",
    "ja": "双曲幾何学、量子インスパイアード情報検索、LLMコンテキスト拡張の独立研究者",
    "ko": "쌍곡 기하학, 양자 영감 정보 검색 및 LLM 컨텍스트 확장 독립 연구자",
    "fr": "Chercheur indépendant en géométrie hyperbolique, recherche d'information quantique et extension de contexte LLM",
    "de": "Unabhängiger Forscher in hyperbolischer Geometrie, quanteninspirierter Informationssuche und LLM-Kontexterweiterung",
    "es": "Investigador independiente en geometría hiperbólica, recuperación de información cuántica y extensión de contexto LLM"
  },
  "research_interests": {
    "en": "Research Interests",
    "zh-CN": "研究方向", "zh-TW": "研究方向", "ja": "研究興味",
    "ko": "연구 관심사", "fr": "Intérêts de recherche", "de": "Forschungsinteressen", "es": "Intereses de investigación"
  },
  "interest_hyperbolic": {
    "en": "Poincaré ball embeddings for hierarchical document retrieval in RAG systems",
    "zh-CN": "Poincaré球嵌入用于RAG系统中的层次化文档检索",
    "zh-TW": "Poincaré球嵌入用於RAG系統中的層次化文件檢索",
    "ja": "RAGシステムにおける階層的文書検索のためのポアンカレ球埋め込み",
    "ko": "RAG 시스템의 계층적 문서 검색을 위한 푸앵카레 볼 임베딩",
    "fr": "Plongements en boule de Poincaré pour la recherche documentaire hiérarchique dans les systèmes RAG",
    "de": "Poincaré-Kugel-Einbettungen für hierarchische Dokumentenabfrage in RAG-Systemen",
    "es": "Embebimientos de bola de Poincaré para recuperación jerárquica en sistemas RAG"
  },
  "interest_quantum": {
    "en": "Density matrix representations and measurement collapse for context selection",
    "zh-CN": "密度矩阵表示与测量坍缩用于上下文选择",
    "zh-TW": "密度矩陣表示與測量坍縮用於上下文選擇",
    "ja": "コンテキスト選択のための密度行列表現と測定の崩壊",
    "ko": "컨텍스트 선택을 위한 밀도 행렬 표현과 측정 붕괴",
    "fr": "Représentations matricielles de densité et effondrement de mesure pour la sélection de contexte",
    "de": "Dichtematrix-Darstellungen und Messkollaps zur Kontextauswahl",
    "es": "Representaciones de matriz de densidad y colapso de medición para selección de contexto"
  },
  "interest_llm": {
    "en": "Adaptive compression with closed-loop quality feedback for long-context processing",
    "zh-CN": "带闭环质量反馈的自适应压缩用于长上下文处理",
    "zh-TW": "帶閉環質量反饋的自適應壓縮用於長上下文處理",
    "ja": "長文脈処理のための閉ループ品質フィードバック付き適応圧縮",
    "ko": "폐루프 품질 피드백을 갖춘 적응형 압축으로 긴 컨텍스트 처리",
    "fr": "Compression adaptative avec retour qualité en boucle fermée pour le traitement longue contexte",
    "de": "Adaptive Kompression mit Closed-Loop-Qualitätsfeedback für Langkontextverarbeitung",
    "es": "Compresión adaptativa con retroalimentación de calidad en bucle cerrado para procesamiento de contexto largo"
  },
  "interest_embedded": {
    "en": "Rust/Zig firmware for smart energy metering on Cortex-M0+",
    "zh-CN": "Rust/Zig固件用于Cortex-M0+智能电能计量",
    "zh-TW": "Rust/Zig韌體用於Cortex-M0+智慧電能計量",
    "ja": "Cortex-M0+向けスマート電力計測Rust/Zigファームウェア",
    "ko": "Cortex-M0+ 스마트 전력 계량을 위한 Rust/Zig 펌웨어",
    "fr": "Firmware Rust/Zig pour le comptage intelligent d'énergie sur Cortex-M0+",
    "de": "Rust/Zig-Firmware für intelligente Energiemessung auf Cortex-M0+",
    "es": "Firmware Rust/Zig para medición inteligente de energía en Cortex-M0+"
  },
  "ucef_desc": {
    "en": "I designed UCEF, a model-agnostic framework enabling any LLM to process documents far exceeding its native context window through hyperbolic retrieval, quantum-inspired selection, adaptive compression, and quality feedback.",
    "zh-CN": "我设计了UCEF，一个模型无关的框架，通过双曲检索、量子启发选择、自适应压缩和质量反馈，使任何LLM能处理远超其原生上下文窗口的文档。",
    "zh-TW": "我設計了UCEF，一個模型無關的框架，通過雙曲檢索、量子啟發選擇、自適應壓縮和質量反饋，使任何LLM能處理遠超其原生上下文視窗的文件。",
    "ja": "UCEFは、双曲検索、量子インスパイアード選択、適応圧縮、品質フィードバックにより、あらゆるLLMがネイティブコンテキストウィンドウを大幅に超える文書を処理できるモデル非依存フレームワークです。",
    "ko": "UCEF는 쌍곡 검색, 양자 영감 선택, 적응형 압축 및 품질 피드백을 통해 모든 LLM이 기본 컨텍스트 창을 훨씬 초과하는 문서를 처리할 수 있게 하는 모델 독립적 프레임워크입니다.",
    "fr": "J'ai conçu UCEF, un framework agnostique au modèle permettant à tout LLM de traiter des documents dépassant largement sa fenêtre de contexte native grâce à la récupération hyperbolique, la sélection quantique, la compression adaptative et le retour qualité.",
    "de": "Ich habe UCEF entworfen, ein modellunabhängiges Framework, das jedem LLM ermöglicht, Dokumente weit über sein natives Kontextfenster hinaus zu verarbeiten — durch hyperbolische Abfrage, quanteninspirierte Auswahl, adaptive Kompression und Qualitätsfeedback.",
    "es": "Diseñé UCEF, un framework agnóstico al modelo que permite a cualquier LLM procesar documentos que exceden ampliamente su ventana de contexto nativa mediante recuperación hiperbólica, selección cuántica, compresión adaptativa y retroalimentación de calidad."
  },
  "ucef_results": {
    "en": "Results on LongBench (8 tasks × 30 samples/task × 2 models):",
    "zh-CN": "LongBench实验结果（8任务 × 30样本/任务 × 2模型）：",
    "zh-TW": "LongBench實驗結果（8任務 × 30樣本/任務 × 2模型）：",
    "ja": "LongBench結果（8タスク × 30サンプル/タスク × 2モデル）：",
    "ko": "LongBench 결과 (8태스크 × 30샘플/태스크 × 2모델):",
    "fr": "Résultats sur LongBench (8 tâches × 30 échantillons × 2 modèles) :",
    "de": "Ergebnisse auf LongBench (8 Aufgaben × 30 Stichproben × 2 Modelle):",
    "es": "Resultados en LongBench (8 tareas × 30 muestras × 2 modelos):"
  },
  "ucef_sig": {
    "en": "Statistical significance (DeepSeek-v3):",
    "zh-CN": "统计显著性（DeepSeek-v3）：",
    "zh-TW": "統計顯著性（DeepSeek-v3）：",
    "ja": "統計的有意性（DeepSeek-v3）：",
    "ko": "통계적 유의성 (DeepSeek-v3):",
    "fr": "Significativité statistique (DeepSeek-v3) :",
    "de": "Statistische Signifikanz (DeepSeek-v3):",
    "es": "Significancia estadística (DeepSeek-v3):"
  },
  "th_vs_rag": {
    "en": "vs RAG", "zh-CN": "对比RAG", "zh-TW": "對比RAG", "ja": "RAG比",
    "ko": "RAG 대비", "fr": "vs RAG", "de": "vs RAG", "es": "vs RAG"
  },
  "link_docs": {
    "en": "Documentation", "zh-CN": "文档", "zh-TW": "文件", "ja": "ドキュメント",
    "ko": "문서", "fr": "Documentation", "de": "Dokumentation", "es": "Documentación"
  },
  "link_paper": {
    "en": "Paper", "zh-CN": "论文", "zh-TW": "論文", "ja": "論文",
    "ko": "논문", "fr": "Article", "de": "Paper", "es": "Artículo"
  },
  "link_docs2": {
    "en": "UCEF Documentation", "zh-CN": "UCEF文档站", "zh-TW": "UCEF文件站", "ja": "UCEFドキュメント",
    "ko": "UCEF 문서", "fr": "Documentation UCEF", "de": "UCEF-Dokumentation", "es": "Documentación UCEF"
  },
  "heading_updates": {
    "en": "What have I been up to?", "zh-CN": "最近动态", "zh-TW": "最近動態",
    "ja": "最近の動き", "ko": "최근 활동", "fr": "Actualités", "de": "Aktuelles", "es": "Novedades"
  },
  "update_may26": {
    "en": "Real benchmark experiments: UCEF on LongBench with GLM-4-flash and DeepSeek-v3",
    "zh-CN": "真实基准实验完成：UCEF在LongBench上使用GLM-4-flash和DeepSeek-v3",
    "zh-TW": "真實基準實驗完成：UCEF在LongBench上使用GLM-4-flash和DeepSeek-v3",
    "ja": "実際のベンチマーク実験完了：LongBench上のUCEF（GLM-4-flash、DeepSeek-v3使用）",
    "ko": "실제 벤치마크 실험 완료: GLM-4-flash 및 DeepSeek-v3로 LongBench에서 UCEF 평가",
    "fr": "Expériences de benchmark réelles : UCEF sur LongBench avec GLM-4-flash et DeepSeek-v3",
    "de": "Echte Benchmark-Experimente: UCEF auf LongBench mit GLM-4-flash und DeepSeek-v3",
    "es": "Experimentos de benchmark reales: UCEF en LongBench con GLM-4-flash y DeepSeek-v3"
  },
  "update_apr26": {
    "en": "FeMeter firmware Phase 1-4 complete, FreeRTOS 11.x migration done",
    "zh-CN": "FeMeter固件Phase 1-4完成，FreeRTOS 11.x迁移完成",
    "zh-TW": "FeMeter韌體Phase 1-4完成，FreeRTOS 11.x遷移完成",
    "ja": "FeMeterファームウェアPhase 1-4完了、FreeRTOS 11.x移行完了",
    "ko": "FeMeter 펌웨어 Phase 1-4 완료, FreeRTOS 11.x 마이그레이션 완료",
    "fr": "Firmware FeMeter Phase 1-4 terminé, migration FreeRTOS 11.x achevée",
    "de": "FeMeter-Firmware Phase 1-4 abgeschlossen, FreeRTOS 11.x-Migration fertig",
    "es": "Firmware FeMeter Fase 1-4 completado, migración FreeRTOS 11.x finalizada"
  },
  "update_mar26": {
    "en": "UCEF v2026.5.2 released: all phases complete",
    "zh-CN": "UCEF v2026.5.2发布：全部阶段完成",
    "zh-TW": "UCEF v2026.5.2發布：全部階段完成",
    "ja": "UCEF v2026.5.2リリース：全フェーズ完了",
    "ko": "UCEF v2026.5.2 출시: 모든 단계 완료",
    "fr": "UCEF v2026.5.2 publié : toutes les phases terminées",
    "de": "UCEF v2026.5.2 veröffentlicht: alle Phasen abgeschlossen",
    "es": "UCEF v2026.5.2 publicado: todas las fases completadas"
  },
  "update_jan26": {
    "en": "Competitive analysis of hyperbolic RAG landscape",
    "zh-CN": "双曲RAG竞争格局分析",
    "zh-TW": "雙曲RAG競爭格局分析",
    "ja": "双曲RAG競合分析",
    "ko": "쌍곡 RAG 경쟁 환경 분석",
    "fr": "Analyse concurrentielle du paysage RAG hyperbolique",
    "de": "Wettbewerbsanalyse der hyperbolischen RAG-Landschaft",
    "es": "Análisis competitivo del panorama RAG hiperbólico"
  },
  "heading_contact": {
    "en": "Contact", "zh-CN": "联系方式", "zh-TW": "聯繫方式",
    "ja": "連絡先", "ko": "연락처", "fr": "Contact", "de": "Kontakt", "es": "Contacto"
  },

  // ── Projects Page (continued) ──────────────────────
  "proj_ucef_what": {
    "en": "A model-agnostic framework that enables any LLM to process documents exceeding its context window.",
    "zh-CN": "一个模型无关的框架，使任何LLM能处理超出其上下文窗口的文档。",
    "zh-TW": "一個模型無關的框架，使任何LLM能處理超出其上下文視窗的文件。",
    "ja": "あらゆるLLMがコンテキストウィンドウを超える文書を処理できるモデル非依存フレームワーク。",
    "ko": "모든 LLM이 컨텍스트 창을 초과하는 문서를 처리할 수 있는 모델 독립적 프레임워크.",
    "fr": "Un framework agnostique permettant à tout LLM de traiter des documents dépassant sa fenêtre de contexte.",
    "de": "Ein modellunabhängiges Framework, das jedem LLM ermöglicht, Dokumente über sein Kontextfenster hinaus zu verarbeiten.",
    "es": "Un framework agnóstico que permite a cualquier LLM procesar documentos que exceden su ventana de contexto."
  },
  "proj_ucef_how": {
    "en": "Hyperbolic retrieval + quantum-inspired selection + adaptive compression + quality feedback loop.",
    "zh-CN": "双曲检索 + 量子启发选择 + 自适应压缩 + 质量反馈闭环。",
    "zh-TW": "雙曲檢索 + 量子啟發選擇 + 自適應壓縮 + 質量反饋閉環。",
    "ja": "双曲検索 + 量子インスパイアード選択 + 適応圧縮 + 品質フィードバックループ。",
    "ko": "쌍곡 검색 + 양자 영감 선택 + 적응형 압축 + 품질 피드백 루프.",
    "fr": "Récupération hyperbolique + sélection quantique + compression adaptative + boucle de retour qualité.",
    "de": "Hyperbolische Abfrage + quanteninspirierte Auswahl + adaptive Kompression + Qualitätsfeedback-Schleife.",
    "es": "Recuperación hiperbólica + selección cuántica + compresión adaptativa + bucle de retroalimentación de calidad."
  },
  "proj_femeter_what": {
    "en": "Rust firmware for FM33A0xx (Cortex-M0+) three-phase smart electricity meters.",
    "zh-CN": "FM33A0xx (Cortex-M0+) 三相智能电能表的Rust固件。",
    "zh-TW": "FM33A0xx (Cortex-M0+) 三相智慧電能表的Rust韌體。",
    "ja": "FM33A0xx (Cortex-M0+) 三相スマート電力計測のRustファームウェア。",
    "ko": "FM33A0xx (Cortex-M0+) 삼상 스마트 전력 계량기용 Rust 펌웨어.",
    "fr": "Firmware Rust pour compteurs d'électricité triphasés FM33A0xx (Cortex-M0+).",
    "de": "Rust-Firmware für FM33A0xx (Cortex-M0+) Drehstrom-Stromzähler.",
    "es": "Firmware Rust para medidores de electricidad trifásicos FM33A0xx (Cortex-M0+)."
  },
  "proj_femeter_features": {
    "en": "6×UART + 2×LPUART, FreeRTOS 11.x, DL/T645 protocol, ~10,400 lines",
    "zh-CN": "6×UART + 2×LPUART, FreeRTOS 11.x, DL/T645协议, ~10,400行",
    "zh-TW": "6×UART + 2×LPUART, FreeRTOS 11.x, DL/T645協議, ~10,400行",
    "ja": "6×UART + 2×LPUART, FreeRTOS 11.x, DL/T645プロトコル, ~10,400行",
    "ko": "6×UART + 2×LPUART, FreeRTOS 11.x, DL/T645 프로토콜, ~10,400줄",
    "fr": "6×UART + 2×LPUART, FreeRTOS 11.x, protocole DL/T645, ~10 400 lignes",
    "de": "6×UART + 2×LPUART, FreeRTOS 11.x, DL/T645-Protokoll, ~10.400 Zeilen",
    "es": "6×UART + 2×LPUART, FreeRTOS 11.x, protocolo DL/T645, ~10.400 líneas"
  },
  "proj_devpilot_what": {
    "en": "A Tauri 2 desktop application for AI-powered development workflow management.",
    "zh-CN": "一个Tauri 2桌面应用，用于AI驱动的开发工作流管理。",
    "zh-TW": "一個Tauri 2桌面應用，用於AI驅動的開發工作流管理。",
    "ja": "AI駆動の開発ワークフロー管理用Tauri 2デスクトップアプリケーション。",
    "ko": "AI 기반 개발 워크플로우 관리를 위한 Tauri 2 데스크톱 애플리케이션.",
    "fr": "Une application de bureau Tauri 2 pour la gestion de workflows de développement pilotée par l'IA.",
    "de": "Eine Tauri 2 Desktop-Anwendung für KI-gesteuerte Entwicklungs-Workflow-Verwaltung.",
    "es": "Una aplicación de escritorio Tauri 2 para la gestión de flujos de trabajo de desarrollo impulsada por IA."
  },
  "proj_devpilot_features": {
    "en": "15 crates, full-stack (Rust backend + React frontend), LLM integration",
    "zh-CN": "15个crate, 全栈(Rust后端+React前端), LLM集成",
    "zh-TW": "15個crate, 全棧(Rust後端+React前端), LLM集成",
    "ja": "15クレート, フルスタック(Rustバックエンド+Reactフロントエンド), LLM統合",
    "ko": "15 크레이트, 풀스택 (Rust 백엔드 + React 프론트엔드), LLM 통합",
    "fr": "15 crates, full-stack (backend Rust + frontend React), intégration LLM",
    "de": "15 Crates, Full-Stack (Rust-Backend + React-Frontend), LLM-Integration",
    "es": "15 crates, full-stack (backend Rust + frontend React), integración LLM"
  },
  "proj_nexus_what": {
    "en": "A high-availability web framework with custom io-uring async runtime, 58 crates covering HTTP, data layer, observability, and Web3.",
    "zh-CN": "一个高可用Web框架，自研io-uring异步运行时，58个crate覆盖HTTP、数据层、可观测性和Web3。",
    "zh-TW": "一個高可用Web框架，自研io-uring異步運行時，58個crate覆蓋HTTP、資料層、可觀測性和Web3。",
    "ja": "カスタムio-uring非同期ランタイムを搭載した高可用性Webフレームワーク。HTTP、データ層、オブザーバビリティ、Web3をカバーする58クレート。",
    "ko": "커스텀 io-uring 비동기 런타임을 갖춘 고가용성 웹 프레임워크. HTTP, 데이터 레이어, 관측 가능성, Web3를 포함하는 58개 크레이트.",
    "fr": "Un framework web haute disponibilité avec runtime async io-uring personnalisé, 58 crates couvrant HTTP, data, observabilité et Web3.",
    "de": "Ein hochverfügbares Web-Framework mit benutzerdefiniertem io-uring Async-Runtime, 58 Crates für HTTP, Daten, Observability und Web3.",
    "es": "Un framework web de alta disponibilidad con runtime async io-uring personalizado, 58 crates cubriendo HTTP, datos, observabilidad y Web3."
  },
  "proj_nexus_features": {
    "en": "Custom async runtime, circuit breaker, distributed tracing, ORM, i18n, 220K+ lines",
    "zh-CN": "自定义异步运行时, 熔断器, 分布式追踪, ORM, 国际化, 220K+行",
    "zh-TW": "自定義異步運行時, 熔斷器, 分散式追蹤, ORM, 國際化, 220K+行",
    "ja": "カスタム非同期ランタイム, サーキットブレーカー, 分散トレーシング, ORM, i18n, 220K+行",
    "ko": "커스텀 비동기 런타임, 서킷 브레이커, 분산 추적, ORM, i18n, 220K+줄",
    "fr": "Runtime async personnalisé, circuit breaker, tracing distribué, ORM, i18n, 220K+ lignes",
    "de": "Benutzerdefiniertes Async-Runtime, Circuit Breaker, Distributed Tracing, ORM, i18n, 220K+ Zeilen",
    "es": "Runtime async personalizado, circuit breaker, tracing distribuido, ORM, i18n, 220K+ líneas"
  },
  "proj_zpython_what": {
    "en": "A complete Python 3.15 interpreter implemented from scratch in Zig, with custom GC, PEG parser, and bytecode VM.",
    "zh-CN": "用Zig从零实现的完整Python 3.15解释器，含自定义GC、PEG解析器和字节码虚拟机。",
    "zh-TW": "用Zig從零實現的完整Python 3.15解釋器，含自定義GC、PEG解析器和字節碼虛擬機。",
    "ja": "Zigでゼロから実装した完全なPython 3.15インタプリタ。カスタムGC、PEGパーサー、バイトコードVMを搭載。",
    "ko": "Zig로 처음부터 구현한 완전한 Python 3.15 인터프리터. 커스텀 GC, PEG 파서, 바이트코드 VM 포함.",
    "fr": "Un interpréteur Python 3.15 complet implémenté de zéro en Zig, avec GC personnalisé, parser PEG et VM à bytecode.",
    "de": "Ein kompletter Python 3.15 Interpreter von Grund auf in Zig implementiert, mit benutzerdefiniertem GC, PEG-Parser und Bytecode-VM.",
    "es": "Un intérprete Python 3.15 completo implementado desde cero en Zig, con GC personalizado, parser PEG y VM de bytecode."
  },
  "proj_zpython_features": {
    "en": "PEG parser, bytecode compiler, custom GC (RC + mark-sweep + generational), 42K+ lines",
    "zh-CN": "PEG解析器, 字节码编译器, 自定义GC(引用计数+标记清除+分代), 42K+行",
    "zh-TW": "PEG解析器, 字節碼編譯器, 自定義GC(引用計數+標記清除+分代), 42K+行",
    "ja": "PEGパーサー, バイトコードコンパイラ, カスタムGC(RC+マークスイープ+世代別), 42K+行",
    "ko": "PEG 파서, 바이트코드 컴파일러, 커스텀 GC(RC+마크 스윕+세대별), 42K+줄",
    "fr": "Parser PEG, compilateur bytecode, GC personnalisé (RC + marquage + générationnel), 42K+ lignes",
    "de": "PEG-Parser, Bytecode-Compiler, benutzerdefiniertes GC (RC + Mark-Sweep + generational), 42K+ Zeilen",
    "es": "Parser PEG, compilador bytecode, GC personalizado (RC + marca-barrido + generacional), 42K+ líneas"
  },
  "proj_hbe_what": {
    "en": "A production-grade coding enhancement system with 10 specialized agents, 13 skills, and Ralph autonomous loop, supporting 10 languages and 4 AI platforms.",
    "zh-CN": "生产级编码增强系统，10个专业代理、13个技能、Ralph自主循环，支持10种语言和4个AI平台。",
    "zh-TW": "生產級編碼增強系統，10個專業代理、13個技能、Ralph自主循環，支持10種語言和4個AI平台。",
    "ja": "プロダクション級コーディング強化システム。10の専門エージェント、13のスキル、Ralph自律ループ。10言語・4AIプラットフォーム対応。",
    "ko": "프로덕션급 코딩 강화 시스템. 10개 전문 에이전트, 13개 스킬, Ralph 자율 루프. 10개 언어, 4개 AI 플랫폼 지원.",
    "fr": "Un système d'amélioration du codage de production avec 10 agents spécialisés, 13 compétences et boucle autonome Ralph, supportant 10 langages et 4 plateformes IA.",
    "de": "Ein produktionsreifes Coding-Enhancement-System mit 10 spezialisierten Agenten, 13 Skills und Ralph-Autonomie-Loop, 10 Sprachen und 4 KI-Plattformen.",
    "es": "Un sistema de mejora de codificación de producción con 10 agentes especializados, 13 habilidades y bucle autónomo Ralph, soportando 10 lenguajes y 4 plataformas IA."
  },
  "proj_hbe_features": {
    "en": "Agent orchestration, TDD workflow, security review, closed-loop learning, multi-platform",
    "zh-CN": "代理编排, TDD工作流, 安全审查, 闭环学习, 多平台",
    "zh-TW": "代理編排, TDD工作流, 安全審查, 閉環學習, 多平台",
    "ja": "エージェントオーケストレーション, TDDワークフロー, セキュリティレビュー, クローズドループ学習, マルチプラットフォーム",
    "ko": "에이전트 오케스트레이션, TDD 워크플로우, 보안 리뷰, 폐루프 학습, 멀티플랫폼",
    "fr": "Orchestration d'agents, workflow TDD, revue sécurité, apprentissage en boucle fermée, multi-plateforme",
    "de": "Agent-Orchestrierung, TDD-Workflow, Security-Review, Closed-Loop-Learning, Multi-Plattform",
    "es": "Orquestación de agentes, workflow TDD, revisión de seguridad, aprendizaje en bucle cerrado, multiplataforma"
  },
  "proj_features": {
    "en": "Features:", "zh-CN": "特性：", "zh-TW": "特性：", "ja": "機能：",
    "ko": "기능:", "fr": "Fonctionnalités :", "de": "Features:", "es": "Características:"
  },

  // ── Awards Page ─────────────────────────────────────
  "awards_academic": {
    "en": "Academic", "zh-CN": "学术", "zh-TW": "學術", "ja": "学術",
    "ko": "학술", "fr": "Académique", "de": "Akademisch", "es": "Académico"
  },
  "awards_technical": {
    "en": "Technical", "zh-CN": "技术", "zh-TW": "技術", "ja": "技術",
    "ko": "기술", "fr": "Technique", "de": "Technisch", "es": "Técnico"
  },
  "awards_certs": {
    "en": "Certifications", "zh-CN": "认证", "zh-TW": "認證", "ja": "資格",
    "ko": "자격증", "fr": "Certifications", "de": "Zertifizierungen", "es": "Certificaciones"
  },
  "award_research": {
    "en": "Independent Research — Designed and implemented UCEF framework from scratch, bridging hyperbolic geometry, quantum IR theory, and practical LLM context extension",
    "zh-CN": "独立研究 — 从零设计并实现UCEF框架，融合双曲几何、量子信息检索理论和LLM上下文扩展实践",
    "zh-TW": "獨立研究 — 從零設計並實現UCEF框架，融合雙曲幾何、量子資訊檢索理論和LLM上下文擴展實踐",
    "ja": "独力研究 — 双曲幾何学、量子IR理論、実用的LLMコンテキスト拡張を統合し、UCEFフレームワークをゼロから設計・実装",
    "ko": "독립 연구 — 쌍곡 기하학, 양자 IR 이론, 실용적 LLM 컨텍스트 확장을 융합하여 UCEF 프레임워크를 처음부터 설계 및 구현",
    "fr": "Recherche indépendante — Conception et implémentation du framework UCEF de zéro, reliant géométrie hyperbolique, théorie IR quantique et extension de contexte LLM pratique",
    "de": "Unabhängige Forschung — UCEF-Framework von Grund auf entworfen und implementiert, verbindet hyperbolische Geometrie, quanteninspirierte IR-Theorie und praktische LLM-Kontexterweiterung",
    "es": "Investigación independiente — Diseño e implementación del framework UCEF desde cero, uniendo geometría hiperbólica, teoría IR cuántica y extensión de contexto LLM práctica"
  },
  "award_opensource": {
    "en": "Open Source Contributions — Multiple public repositories with complete documentation and testing",
    "zh-CN": "开源贡献 — 多个公开仓库，含完整文档和测试",
    "zh-TW": "開源貢獻 — 多個公開倉庫，含完整文件和測試",
    "ja": "オープンソース貢献 — 完全なドキュメントとテストを備えた複数の公開リポジトリ",
    "ko": "오픈소스 기여 — 완전한 문서와 테스트를 갖춘 다수의 공개 저장소",
    "fr": "Contributions Open Source — Plusieurs dépôts publics avec documentation et tests complets",
    "de": "Open-Source-Beiträge — Mehrere öffentliche Repositories mit vollständiger Dokumentation und Tests",
    "es": "Contribuciones Open Source — Múltiples repositorios públicos con documentación y pruebas completas"
  },
  "award_fullstack": {
    "en": "Full-Stack Capability — Embedded Rust → Desktop Apps → Web Services → AI Research",
    "zh-CN": "全栈能力 — 嵌入式Rust → 桌面应用 → Web服务 → AI研究",
    "zh-TW": "全棧能力 — 嵌入式Rust → 桌面應用 → Web服務 → AI研究",
    "ja": "フルスタック能力 — 組み込みRust → デスクトップアプリ → Webサービス → AI研究",
    "ko": "풀스택 역량 — 임베디드 Rust → 데스크톱 앱 → 웹 서비스 → AI 연구",
    "fr": "Compétence Full-Stack — Rust embarqué → Apps bureau → Services web → Recherche IA",
    "de": "Full-Stack-Fähigkeit — Embedded Rust → Desktop-Apps → Web-Services → KI-Forschung",
    "es": "Capacidad Full-Stack — Rust embebido → Apps de escritorio → Servicios web → Investigación IA"
  },
  "award_infosec": {
    "en": "Information Security Engineer (信息安全工程师) — National Computer Technology and Software Qualification, in preparation",
    "zh-CN": "信息安全工程师 — 全国计算机技术与软件专业技术资格，备考中",
    "zh-TW": "資訊安全工程師 — 全國電腦技術與軟體專業技術資格，備考中",
    "ja": "情報セキュリティエンジニア — 国家コンピュータ技術・ソフトウェア資格試験、準備中",
    "ko": "정보보안 엔지니어 — 국가 컴퓨터 기술 및 소프트웨어 자격시험, 준비 중",
    "fr": "Ingénieur en Sécurité de l'Information — Qualification nationale en informatique et logiciels, en préparation",
    "de": "Informationssicherheits-Ingenieur — Nationale Computer- und Softwarequalifikation, in Vorbereitung",
    "es": "Ingeniero de Seguridad Informática — Cualificación nacional en tecnología informática y software, en preparación"
  },

  // ── CV Page ─────────────────────────────────────────
  "cv_selfresearch": {
    "en": "Self-directed Research", "zh-CN": "自学研究", "zh-TW": "自學研究",
    "ja": "独学・自主研究", "ko": "자기주도 연구", "fr": "Recherche autodidacte",
    "de": "Eigenständige Forschung", "es": "Investigación autodidacta"
  },
  "cv_mlfocus": {
    "en": "in Machine Learning & NLP (2024–present)",
    "zh-CN": "机器学习与NLP方向（2024至今）",
    "zh-TW": "機器學習與NLP方向（2024至今）",
    "ja": "機械学習・NLP分野（2024年～現在）",
    "ko": "머신러닝 및 NLP 분야 (2024–현재)",
    "fr": "en Machine Learning & NLP (2024–présent)",
    "de": "in Machine Learning & NLP (2024–heute)",
    "es": "en Machine Learning y NLP (2024–presente)"
  },
  "cv_mltopic": {
    "en": "Focus: Hyperbolic geometry, quantum-inspired IR, LLM context extension",
    "zh-CN": "方向：双曲几何、量子启发信息检索、LLM上下文扩展",
    "zh-TW": "方向：雙曲幾何、量子啟發資訊檢索、LLM上下文擴展",
    "ja": "重点：双曲幾何学、量子インスパイアードIR、LLMコンテキスト拡張",
    "ko": "중점: 쌍곡 기하학, 양자 영감 IR, LLM 컨텍스트 확장",
    "fr": "Focus : Géométrie hyperbolique, IR quantique, extension de contexte LLM",
    "de": "Schwerpunkt: Hyperbolische Geometrie, quanteninspirierte IR, LLM-Kontexterweiterung",
    "es": "Enfoque: Geometría hiperbólica, IR cuántica, extensión de contexto LLM"
  },
  "cv_infosec": {
    "en": "Information Security Engineer",
    "zh-CN": "信息安全工程师",
    "zh-TW": "資訊安全工程師",
    "ja": "情報セキュリティエンジニア",
    "ko": "정보보안 엔지니어",
    "fr": "Ingénieur en Sécurité de l'Information",
    "de": "Informationssicherheits-Ingenieur",
    "es": "Ingeniero de Seguridad Informática"
  },
  "cv_ruankao": {
    "en": "National Computer Technology Qualification (in preparation)",
    "zh-CN": "全国计算机技术与软件专业技术资格（备考中）",
    "zh-TW": "全國電腦技術與軟體專業技術資格（備考中）",
    "ja": "国家コンピュータ技術・ソフトウェア資格試験（準備中）",
    "ko": "국가 컴퓨터 기술 자격시험 (준비 중)",
    "fr": "Qualification nationale en informatique (en préparation)",
    "de": "Nationale Computer- und Softwarequalifikation (in Vorbereitung)",
    "es": "Cualificación nacional en informática (en preparación)"
  },
  "cv_proj_ucef": {
    "en": "LLM context extension framework",
    "zh-CN": "LLM上下文扩展框架",
    "zh-TW": "LLM上下文擴展框架",
    "ja": "LLMコンテキスト拡張フレームワーク",
    "ko": "LLM 컨텍스트 확장 프레임워크",
    "fr": "Framework d'extension de contexte LLM",
    "de": "LLM-Kontexterweiterungs-Framework",
    "es": "Framework de extensión de contexto LLM"
  },
  "cv_proj_femeter": {
    "en": "Smart energy meter firmware",
    "zh-CN": "智能电能表固件",
    "zh-TW": "智慧電能表韌體",
    "ja": "スマート電力計測ファームウェア",
    "ko": "스마트 전력 계량기 펌웨어",
    "fr": "Firmware de compteur d'énergie intelligent",
    "de": "Intelligentes Stromzähler-Firmware",
    "es": "Firmware de medidor de energía inteligente"
  },
  "cv_proj_devpilot": {
    "en": "Desktop AI dev assistant",
    "zh-CN": "桌面AI开发助手",
    "zh-TW": "桌面AI開發助手",
    "ja": "デスクトップAI開発アシスタント",
    "ko": "데스크톱 AI 개발 어시스턴트",
    "fr": "Assistant de développement IA de bureau",
    "de": "Desktop-KI-Entwicklungsassistent",
    "es": "Asistente de desarrollo IA de escritorio"
  },

  // ── Stats ────────────────────────────────────────────
  "stats_title": {
    "en": "By the Numbers", "zh-CN": "数据一览", "zh-TW": "數據一覽", "ja": "数字で見る",
    "ko": "숫자로 보기", "fr": "En chiffres", "de": "In Zahlen", "es": "En cifras"
  },
  "stats_projects": {
    "en": "Projects", "zh-CN": "项目", "zh-TW": "專案", "ja": "プロジェクト",
    "ko": "프로젝트", "fr": "Projets", "de": "Projekte", "es": "Proyectos"
  },
  "stats_loc": {
    "en": "Lines of Code", "zh-CN": "代码行数", "zh-TW": "程式碼行數", "ja": "コード行数",
    "ko": "코드 라인", "fr": "Lignes de code", "de": "Codezeilen", "es": "Líneas de código"
  },
  "stats_languages": {
    "en": "Languages", "zh-CN": "编程语言", "zh-TW": "程式語言", "ja": "プログラミング言語",
    "ko": "프로그래밍 언어", "fr": "Langages", "de": "Sprachen", "es": "Lenguajes"
  },
  "stats_papers": {
    "en": "Paper", "zh-CN": "论文", "zh-TW": "論文", "ja": "論文",
    "ko": "논문", "fr": "Article", "de": "Publikation", "es": "Artículo"
  },

  // ── Skills ───────────────────────────────────────────
  "skills_title": {
    "en": "Tech Stack", "zh-CN": "技术栈", "zh-TW": "技術棧", "ja": "技術スタック",
    "ko": "기술 스택", "fr": "Stack technique", "de": "Tech-Stack", "es": "Stack técnico"
  },
  "skills_languages": {
    "en": "Languages", "zh-CN": "编程语言", "zh-TW": "程式語言", "ja": "プログラミング言語",
    "ko": "프로그래밍 언어", "fr": "Langages", "de": "Sprachen", "es": "Lenguajes"
  },
  "skills_ml": {
    "en": "ML / AI", "zh-CN": "机器学习 / AI", "zh-TW": "機器學習 / AI", "ja": "ML / AI",
    "ko": "ML / AI", "fr": "ML / IA", "de": "ML / KI", "es": "ML / IA"
  },
  "skills_systems": {
    "en": "Systems", "zh-CN": "系统", "zh-TW": "系統", "ja": "システム",
    "ko": "시스템", "fr": "Systèmes", "de": "Systeme", "es": "Sistemas"
  },
  "skills_web": {
    "en": "Web", "zh-CN": "Web", "zh-TW": "Web", "ja": "Web",
    "ko": "Web", "fr": "Web", "de": "Web", "es": "Web"
  },

  // ── Featured Projects ────────────────────────────────
  "section_projects": {
    "en": "Featured Projects", "zh-CN": "精选项目", "zh-TW": "精選專案", "ja": "注目プロジェクト",
    "ko": "주요 프로젝트", "fr": "Projets phares", "de": "Highlight-Projekte", "es": "Proyectos destacados"
  },
  "ucef_title": {
    "en": "UCEF: Universal Context Extension Framework", "zh-CN": "UCEF：通用上下文扩展框架", "zh-TW": "UCEF：通用上下文擴展框架", "ja": "UCEF：汎用コンテキスト拡張フレームワーク",
    "ko": "UCEF: 범용 컨텍스트 확장 프레임워크", "fr": "UCEF : Framework d'extension de contexte universel", "de": "UCEF: Universelles Kontexterweiterungs-Framework", "es": "UCEF: Framework de extensión de contexto universal"
  },
  "proj_nexus_short": {
    "en": "Production-grade Rust web framework with custom io-uring async runtime, 58 crates, 220K+ lines.",
    "zh-CN": "生产级Rust Web框架，自研io-uring异步运行时，58个crate，220K+行。",
    "zh-TW": "生產級Rust Web框架，自研io-uring異步運行時，58個crate，220K+行。",
    "ja": "プロダクション級Rust Webフレームワーク。カスタムio-uring非同期ランタイム、58クレート、220K+行。",
    "ko": "프로덕션급 Rust 웹 프레임워크. 커스텀 io-uring 비동기 런타임, 58개 크레이트, 220K+줄.",
    "fr": "Framework web Rust de production avec runtime async io-uring personnalisé, 58 crates, 220K+ lignes.",
    "de": "Produktionsreifes Rust-Web-Framework mit benutzerdefiniertem io-uring Async-Runtime, 58 Crates, 220K+ Zeilen.",
    "es": "Framework web Rust de producción con runtime async io-uring personalizado, 58 crates, 220K+ líneas."
  },
  "proj_zpython_short": {
    "en": "Complete Python 3.15 interpreter in Zig with custom GC, PEG parser, and bytecode VM, 42K+ lines.",
    "zh-CN": "用Zig实现的完整Python 3.15解释器，含自定义GC、PEG解析器和字节码VM，42K+行。",
    "zh-TW": "用Zig實現的完整Python 3.15解釋器，含自定義GC、PEG解析器和字節碼VM，42K+行。",
    "ja": "Zigで実装した完全なPython 3.15インタプリタ。カスタムGC、PEGパーサー、バイトコードVM、42K+行。",
    "ko": "Zig로 구현한 완전한 Python 3.15 인터프리터. 커스텀 GC, PEG 파서, 바이트코드 VM, 42K+줄.",
    "fr": "Interpréteur Python 3.15 complet en Zig avec GC personnalisé, parser PEG et VM bytecode, 42K+ lignes.",
    "de": "Kompletter Python 3.15 Interpreter in Zig mit benutzerdefiniertem GC, PEG-Parser und Bytecode-VM, 42K+ Zeilen.",
    "es": "Intérprete Python 3.15 completo en Zig con GC personalizado, parser PEG y VM de bytecode, 42K+ líneas."
  },

  // ── Papers Page ─────────────────────────────────────
  "papers_title": {
    "en": "Papers", "zh-CN": "论文", "zh-TW": "論文", "ja": "論文",
    "ko": "논문", "fr": "Publications", "de": "Publikationen", "es": "Publicaciones"
  },
  "papers_preprints": {
    "en": "Preprints", "zh-CN": "预印本", "zh-TW": "預印本", "ja": "プレプリント",
    "ko": "프리프린트", "fr": "Prépublications", "de": "Preprints", "es": "Preprints"
  },
  "papers_ucef_abs": {
    "en": "We propose UCEF, a model-agnostic framework combining hyperbolic retrieval, quantum-inspired selection, and adaptive compression with quality feedback to extend any LLM's effective context window.",
    "zh-CN": "我们提出UCEF，一个模型无关的框架，结合双曲检索、量子启发选择和带质量反馈的自适应压缩来扩展任何LLM的有效上下文窗口。",
    "zh-TW": "我們提出UCEF，一個模型無關的框架，結合雙曲檢索、量子啟發選擇和帶質量反饋的自適應壓縮來擴展任何LLM的有效上下文視窗。",
    "ja": "UCEFは、双曲検索、量子インスパイアード選択、品質フィードバック付き適応圧縮を組み合わせ、あらゆるLLMの有効コンテキストウィンドウを拡張するモデル非依存フレームワークを提案する。",
    "ko": "UCEF는 쌍곡 검색, 양자 영감 선택 및 품질 피드백을 갖춘 적응형 압축을 결합하여 모든 LLM의 효과적인 컨텍스트 창을 확장하는 모델 독립적 프레임워크를 제안합니다.",
    "fr": "Nous proposons UCEF, un framework agnostique combinant récupération hyperbolique, sélection quantique et compression adaptative avec retour qualité pour étendre la fenêtre de contexte de tout LLM.",
    "de": "Wir schlagen UCEF vor, ein modellunabhängiges Framework, das hyperbolische Abfrage, quanteninspirierte Auswahl und adaptive Kompression mit Qualitätsfeedback kombiniert.",
    "es": "Proponemos UCEF, un framework agnóstico que combina recuperación hiperbólica, selección cuántica y compresión adaptativa con retroalimentación de calidad."
  },
  "papers_referenced": {
    "en": "Referenced In", "zh-CN": "相关工作引用", "zh-TW": "相關工作引用", "ja": "引用文献",
    "ko": "관련 인용", "fr": "Référencé dans", "de": "Referenziert in", "es": "Referenciado en"
  },

  // ── Projects Page ───────────────────────────────────
  "projects_title": {
    "en": "Projects", "zh-CN": "项目", "zh-TW": "專案", "ja": "プロジェクト",
    "ko": "프로젝트", "fr": "Projets", "de": "Projekte", "es": "Proyectos"
  },
  "proj_what": {
    "en": "What:", "zh-CN": "项目：", "zh-TW": "專案：", "ja": "概要：",
    "ko": "개요:", "fr": "Quoi :", "de": "Was:", "es": "Qué:"
  },
  "proj_how": {
    "en": "How:", "zh-CN": "方法：", "zh-TW": "方法：", "ja": "手法：",
    "ko": "방법:", "fr": "Comment :", "de": "Wie:", "es": "Cómo:"
  },
  "proj_stack": {
    "en": "Stack:", "zh-CN": "技术栈：", "zh-TW": "技術棧：", "ja": "技術：",
    "ko": "기술:", "fr": "Stack :", "de": "Stack:", "es": "Stack:"
  },
  "proj_links": {
    "en": "Links:", "zh-CN": "链接：", "zh-TW": "連結：", "ja": "リンク：",
    "ko": "링크:", "fr": "Liens :", "de": "Links:", "es": "Enlaces:"
  },

  // ── Awards Page ─────────────────────────────────────
  "awards_title": {
    "en": "Awards & Recognition", "zh-CN": "奖项与荣誉", "zh-TW": "獎項與榮譽", "ja": "受賞・実績",
    "ko": "수상 및 성과", "fr": "Prix et reconnaissance", "de": "Auszeichnungen", "es": "Premios y reconocimientos"
  },

  // ── CV Page ─────────────────────────────────────────
  "cv_tagline": {
    "en": "Independent researcher · Full-stack engineer · Open source contributor",
    "zh-CN": "独立研究者 · 全栈工程师 · 开源贡献者",
    "zh-TW": "獨立研究者 · 全棧工程師 · 開源貢獻者",
    "ja": "独立研究者 · フルスタックエンジニア · オープンソース貢献者",
    "ko": "독립 연구자 · 풀스택 엔지니어 · 오픈소스 기여자",
    "fr": "Chercheur indépendant · Ingénieur full-stack · Contributeur open source",
    "de": "Unabhängiger Forscher · Full-Stack-Ingenieur · Open-Source-Beitragender",
    "es": "Investigador independiente · Ingeniero full-stack · Contribuidor open source"
  },
  "cv_sk_lang": {
    "en": "Programming Languages", "zh-CN": "编程语言", "zh-TW": "程式語言", "ja": "プログラミング言語",
    "ko": "프로그래밍 언어", "fr": "Langages de programmation", "de": "Programmiersprachen", "es": "Lenguajes de programación"
  },
  "cv_sk_ai": {
    "en": "AI / Machine Learning", "zh-CN": "AI / 机器学习", "zh-TW": "AI / 機器學習", "ja": "AI / 機械学習",
    "ko": "AI / 머신러닝", "fr": "IA / Apprentissage automatique", "de": "KI / Maschinelles Lernen", "es": "IA / Aprendizaje automático"
  },
  "cv_sk_embedded": {
    "en": "Embedded & IoT", "zh-CN": "嵌入式 & IoT", "zh-TW": "嵌入式 & IoT", "ja": "組み込み & IoT",
    "ko": "임베디드 & IoT", "fr": "Embarqué & IoT", "de": "Embedded & IoT", "es": "Embebido & IoT"
  },
  "cv_sk_web": {
    "en": "Web & Desktop", "zh-CN": "Web & 桌面", "zh-TW": "Web & 桌面", "ja": "Web & デスクトップ",
    "ko": "Web & 데스크톱", "fr": "Web & Bureau", "de": "Web & Desktop", "es": "Web y Escritorio"
  },
  "cv_sk_tools": {
    "en": "Tools & DevOps", "zh-CN": "工具 & DevOps", "zh-TW": "工具 & DevOps", "ja": "ツール & DevOps",
    "ko": "도구 & DevOps", "fr": "Outils & DevOps", "de": "Tools & DevOps", "es": "Herramientas y DevOps"
  },
  "cv_ucef_detail": {
    "en": "Model-agnostic framework enabling any LLM to process documents far exceeding its context window via hyperbolic retrieval, quantum-inspired selection, adaptive compression, and quality feedback. Achieved +10.3% (GLM-4) and +19.3% (DeepSeek-v3) over baseline RAG on LongBench.",
    "zh-CN": "模型无关框架，通过双曲检索、量子启发选择、自适应压缩和质量反馈，使任何LLM能处理远超其上下文窗口的文档。在LongBench上相对基线RAG提升+10.3%（GLM-4）和+19.3%（DeepSeek-v3）。",
    "zh-TW": "模型無關框架，通過雙曲檢索、量子啟發選擇、自適應壓縮和質量反饋，使任何LLM能處理遠超其上下文視窗的文件。在LongBench上相對基線RAG提升+10.3%（GLM-4）和+19.3%（DeepSeek-v3）。",
    "ja": "双曲検索、量子インスパイアード選択、適応圧縮、品質フィードバックにより、あらゆるLLMがコンテキストウィンドウを大幅に超える文書を処理できるモデル非依存フレームワーク。LongBenchでベースラインRAGに対し+10.3%（GLM-4）、+19.3%（DeepSeek-v3）の改善を達成。",
    "ko": "쌍곡 검색, 양자 영감 선택, 적응형 압축 및 품질 피드백을 통해 모든 LLM이 컨텍스트 창을 훨씬 초과하는 문서를 처리할 수 있는 모델 독립적 프레임워크. LongBench에서 베이스라인 RAG 대비 +10.3%(GLM-4), +19.3%(DeepSeek-v3) 향상 달성.",
    "fr": "Framework agnostique permettant à tout LLM de traiter des documents dépassant sa fenêtre de contexte via récupération hyperbolique, sélection quantique, compression adaptative et retour qualité. Amélioration de +10,3% (GLM-4) et +19,3% (DeepSeek-v3) sur LongBench.",
    "de": "Modellunabhängiges Framework, das jedem LLM ermöglicht, Dokumente weit über sein Kontextfenster hinaus zu verarbeiten. +10,3% (GLM-4) und +19,3% (DeepSeek-v3) Verbesserung auf LongBench.",
    "es": "Framework agnóstico que permite a cualquier LLM procesar documentos que exceden su ventana de contexto. Mejora de +10.3% (GLM-4) y +19.3% (DeepSeek-v3) sobre RAG base en LongBench."
  },
  "cv_nexus_detail": {
    "en": "High-availability web framework with custom io-uring async runtime. 58 crates covering HTTP server, data layer (ORM, connection pool), observability (tracing, metrics), i18n, and Web3. 220K+ lines of Rust.",
    "zh-CN": "高可用Web框架，自研io-uring异步运行时。58个crate覆盖HTTP服务器、数据层（ORM、连接池）、可观测性（追踪、指标）、国际化和Web3。220K+行Rust。",
    "zh-TW": "高可用Web框架，自研io-uring異步運行時。58個crate覆蓋HTTP伺服器、資料層（ORM、連接池）、可觀測性（追蹤、指標）、國際化和Web3。220K+行Rust。",
    "ja": "高可用性Webフレームワーク。カスタムio-uring非同期ランタイム搭載。HTTP、データ層（ORM、接続プール）、オブザーバビリティ、i18n、Web3をカバーする58クレート。220K+行のRust。",
    "ko": "고가용성 웹 프레임워크. 커스텀 io-uring 비동기 런타임. HTTP, 데이터 레이어(ORM, 연결 풀), 관측 가능성, i18n, Web3를 포함하는 58개 크레이트. 220K+줄의 Rust.",
    "fr": "Framework web haute disponibilité avec runtime async io-uring. 58 crates couvrant HTTP, ORM, observabilité, i18n et Web3. 220K+ lignes de Rust.",
    "de": "Hochverfügbares Web-Framework mit benutzerdefiniertem io-uring Async-Runtime. 58 Crates für HTTP, ORM, Observability, i18n und Web3. 220K+ Zeilen Rust.",
    "es": "Framework web de alta disponibilidad con runtime async io-uring. 58 crates cubriendo HTTP, ORM, observabilidad, i18n y Web3. 220K+ líneas de Rust."
  },
  "cv_zpython_detail": {
    "en": "Complete Python interpreter implemented from scratch in Zig. Features PEG parser, bytecode compiler, custom garbage collector (RC + mark-sweep + generational), and full bytecode VM. 42K+ lines targeting CPython 3.15 spec.",
    "zh-CN": "用Zig从零实现的完整Python解释器。含PEG解析器、字节码编译器、自定义垃圾回收器（引用计数+标记清除+分代）和完整字节码虚拟机。42K+行，对标CPython 3.15规范。",
    "zh-TW": "用Zig從零實現的完整Python解釋器。含PEG解析器、字節碼編譯器、自定義垃圾回收器（引用計數+標記清除+分代）和完整字節碼虛擬機。42K+行，對標CPython 3.15規範。",
    "ja": "Zigでゼロから実装した完全なPythonインタプリタ。PEGパーサー、バイトコードコンパイラ、カスタムGC（RC+マークスイープ+世代別）、完全なバイトコードVMを搭載。42K+行、CPython 3.15仕様準拠。",
    "ko": "Zig로 처음부터 구현한 완전한 Python 인터프리터. PEG 파서, 바이트코드 컴파일러, 커스텀 GC(RC+마크 스윕+세대별), 완전한 바이트코드 VM 포함. 42K+줄, CPython 3.15 사양 대상.",
    "fr": "Interpréteur Python complet implémenté de zéro en Zig. PEG parser, compilateur bytecode, GC personnalisé (RC + marquage + générationnel), VM bytecode complète. 42K+ lignes.",
    "de": "Kompletter Python-Interpreter von Grund auf in Zig. PEG-Parser, Bytecode-Compiler, benutzerdefinierter GC (RC + Mark-Sweep + generational), Bytecode-VM. 42K+ Zeilen.",
    "es": "Intérprete Python completo implementado desde cero en Zig. Parser PEG, compilador bytecode, GC personalizado (RC + marca-barrido + generacional), VM bytecode completa. 42K+ líneas."
  },
  "cv_femeter_detail": {
    "en": "Rust firmware for FM33A0xx (Cortex-M0+) smart electricity meters. 6×UART + 2×LPUART, FreeRTOS 11.x integration, DL/T645 protocol support. ~10,400 lines of embedded Rust.",
    "zh-CN": "FM33A0xx (Cortex-M0+) 智能电能表的Rust固件。6×UART + 2×LPUART，FreeRTOS 11.x集成，DL/T645协议支持。约10,400行嵌入式Rust。",
    "zh-TW": "FM33A0xx (Cortex-M0+) 智慧電能表的Rust韌體。6×UART + 2×LPUART，FreeRTOS 11.x集成，DL/T645協議支持。約10,400行嵌入式Rust。",
    "ja": "FM33A0xx (Cortex-M0+) スマート電力計測のRustファームウェア。6×UART + 2×LPUART、FreeRTOS 11.x統合、DL/T645プロトコル対応。約10,400行の組み込みRust。",
    "ko": "FM33A0xx (Cortex-M0+) 스마트 전력 계량기용 Rust 펌웨어. 6×UART + 2×LPUART, FreeRTOS 11.x 통합, DL/T645 프로토콜 지원. 약 10,400줄의 임베디드 Rust.",
    "fr": "Firmware Rust pour compteurs d'électricité intelligents FM33A0xx (Cortex-M0+). 6×UART + 2×LPUART, FreeRTOS 11.x, protocole DL/T645. ~10 400 lignes.",
    "de": "Rust-Firmware für FM33A0xx (Cortex-M0+) Smart Meter. 6×UART + 2×LPUART, FreeRTOS 11.x, DL/T645-Protokoll. ~10.400 Zeilen Embedded Rust.",
    "es": "Firmware Rust para medidores inteligentes FM33A0xx (Cortex-M0+). 6×UART + 2×LPUART, FreeRTOS 11.x, protocolo DL/T645. ~10.400 líneas."
  },
  "cv_dlms_detail": {
    "en": "Protocol stack implementations for smart meter communication in 4 languages: Rust (no_std compatible), Go, C99 (zero malloc), and C++17. Covers DLMS/COSEM application layer with HDLC/TCP transport.",
    "zh-CN": "智能电表通信协议栈的4语言实现：Rust（no_std兼容）、Go、C99（零malloc）和C++17。覆盖DLMS/COSEM应用层，支持HDLC/TCP传输。",
    "zh-TW": "智慧電表通信協議棧的4語言實現：Rust（no_std相容）、Go、C99（零malloc）和C++17。覆蓋DLMS/COSEM應用層，支援HDLC/TCP傳輸。",
    "ja": "スマートメーター通信プロトコルスタックの4言語実装：Rust（no_std対応）、Go、C99（ゼロmalloc）、C++17。DLMS/COSEMアプリケーション層+HDLC/TCPトランスポート対応。",
    "ko": "스마트 미터 통신 프로토콜 스택의 4개 언어 구현: Rust(no_std 호환), Go, C99(제로 malloc), C++17. DLMS/COSEM 애플리케이션 레이어 + HDLC/TCP 전송 지원.",
    "fr": "Implémentations de pile protocolaire pour compteurs intelligents en 4 langages : Rust (no_std), Go, C99 (zéro malloc), C++17. Couche DLMS/COSEM avec transport HDLC/TCP.",
    "de": "Protokoll-Stack-Implementierungen für Smart Meter in 4 Sprachen: Rust (no_std), Go, C99 (zero malloc), C++17. DLMS/COSEM mit HDLC/TCP-Transport.",
    "es": "Implementaciones de pila de protocolo para medidores inteligentes en 4 lenguajes: Rust (no_std), Go, C99 (zero malloc), C++17. Capa DLMS/COSEM con transporte HDLC/TCP."
  },
  "cv_minihes_detail": {
    "en": "Cloud-based intelligent meter reading system with DLMS/COSEM protocol stack integration and multi-communication adapter support. Full-stack application for energy data management.",
    "zh-CN": "云端智能电表抄表系统，集成DLMS/COSEM协议栈，支持多通信适配器。全栈能源数据管理应用。",
    "zh-TW": "雲端智慧電表抄表系統，整合DLMS/COSEM協議棧，支援多通信適配器。全棧能源資料管理應用。",
    "ja": "クラウドベースのスマートメーター検針システム。DLMS/COSEMプロトコルスタック統合、マルチ通信アダプタ対応。エネルギーデータ管理のフルスタックアプリケーション。",
    "ko": "클라우드 기반 스마트 미터 검침 시스템. DLMS/COSEM 프로토콜 스택 통합, 다중 통신 어댑터 지원. 에너지 데이터 관리 풀스택 애플리케이션.",
    "fr": "Système de relève intelligent cloud avec intégration DLMS/COSEM et support multi-communication. Application full-stack de gestion de données énergétiques.",
    "de": "Cloud-basiertes intelligentes Zählerablesesystem mit DLMS/COSEM-Integration und Multi-Kommunikationsadapter. Full-Stack-Energiedatenmanagement.",
    "es": "Sistema de lectura inteligente de medidores en la nube con integración DLMS/COSEM y soporte multi-comunicación. Aplicación full-stack de gestión de datos energéticos."
  },
  "cv_devpilot_detail": {
    "en": "Tauri 2 desktop application for AI-powered development workflow management. 15 crates, full-stack Rust backend + React frontend with LLM integration.",
    "zh-CN": "Tauri 2桌面应用，用于AI驱动的开发工作流管理。15个crate，全栈Rust后端+React前端，集成LLM。",
    "zh-TW": "Tauri 2桌面應用，用於AI驅動的開發工作流管理。15個crate，全棧Rust後端+React前端，整合LLM。",
    "ja": "AI駆動の開発ワークフロー管理用Tauri 2デスクトップアプリ。15クレート、フルスタックRustバックエンド+Reactフロントエンド、LLM統合。",
    "ko": "AI 기반 개발 워크플로우 관리용 Tauri 2 데스크톱 앱. 15 크레이트, 풀스택 Rust 백엔드 + React 프론트엔드, LLM 통합.",
    "fr": "Application Tauri 2 pour la gestion de workflows de développement IA. 15 crates, backend Rust + frontend React, intégration LLM.",
    "de": "Tauri 2 Desktop-App für KI-gesteuerte Entwicklungs-Workflows. 15 Crates, Rust-Backend + React-Frontend, LLM-Integration.",
    "es": "Aplicación Tauri 2 para gestión de workflows de desarrollo con IA. 15 crates, backend Rust + frontend React, integración LLM."
  },
  "cv_hbe_detail": {
    "en": "Production-grade coding enhancement system with 10 specialized agents, 13 skills, and Ralph autonomous loop. Supports 10 languages and 4 AI platforms with closed-loop learning.",
    "zh-CN": "生产级编码增强系统，10个专业代理、13个技能、Ralph自主循环。支持10种语言和4个AI平台，带闭环学习。",
    "zh-TW": "生產級編碼增強系統，10個專業代理、13個技能、Ralph自主循環。支援10種語言和4個AI平台，帶閉環學習。",
    "ja": "プロダクション級コーディング強化システム。10の専門エージェント、13のスキル、Ralph自律ループ。10言語・4AIプラットフォーム対応、クローズドループ学習付き。",
    "ko": "프로덕션급 코딩 강화 시스템. 10개 전문 에이전트, 13개 스킬, Ralph 자율 루프. 10개 언어, 4개 AI 플랫폼 지원, 폐루프 학습.",
    "fr": "Système d'amélioration du codage avec 10 agents spécialisés, 13 compétences et boucle autonome Ralph. 10 langues, 4 plateformes IA, apprentissage en boucle fermée.",
    "de": "Produktionsreifes Coding-Enhancement-System mit 10 Agenten, 13 Skills und Ralph-Autonomie-Loop. 10 Sprachen, 4 KI-Plattformen, Closed-Loop-Learning.",
    "es": "Sistema de mejora de codificación con 10 agentes, 13 habilidades y bucle autónomo Ralph. 10 lenguajes, 4 plataformas IA, aprendizaje en bucle cerrado."
  },
  "cv_rutool_detail": {
    "en": "Using AI to replicate Java's Hutool utility library in Rust. Demonstrates AI-assisted cross-language porting with automated test generation.",
    "zh-CN": "使用AI将Java的Hutool工具库移植为Rust实现。展示了AI辅助的跨语言移植与自动化测试生成。",
    "zh-TW": "使用AI將Java的Hutool工具庫移植為Rust實現。展示了AI輔助的跨語言移植與自動化測試生成。",
    "ja": "AIを使用してJavaのHutoolユーティリティライブラリをRustに移植。AI支援のクロス言語ポーティングと自動テスト生成を実証。",
    "ko": "AI를 사용하여 Java의 Hutool 유틸리티 라이브러리를 Rust로 이식. AI 보조 크로스 언어 포팅과 자동 테스트 생성 시연.",
    "fr": "Réplication de la bibliothèque Java Hutool en Rust avec l'IA. Démonstration de portage inter-langage assisté par IA avec génération automatique de tests.",
    "de": "KI-gestützte Portierung von Javas Hutool-Bibliothek nach Rust. Demonstriert KI-gestütztes Cross-Language-Porting mit automatischer Testgenerierung.",
    "es": "Replicación de la biblioteca Java Hutool en Rust usando IA. Demuestra portado inter-lenguaje asistido por IA con generación automática de pruebas."
  },
  "cv_github": {
    "en": "Open Source Activity", "zh-CN": "开源活动", "zh-TW": "開源活動", "ja": "オープンソース活動",
    "ko": "오픈소스 활동", "fr": "Activité Open Source", "de": "Open-Source-Aktivität", "es": "Actividad Open Source"
  },
  "cv_os_repos": {
    "en": "Original Repos", "zh-CN": "原创仓库", "zh-TW": "原創倉庫", "ja": "オリジナルリポジトリ",
    "ko": "오리지널 저장소", "fr": "Dépôts originaux", "de": "Eigene Repos", "es": "Repos originales"
  },
  "cv_os_loc": {
    "en": "Lines of Code", "zh-CN": "代码行数", "zh-TW": "程式碼行數", "ja": "コード行数",
    "ko": "코드 라인", "fr": "Lignes de code", "de": "Codezeilen", "es": "Líneas de código"
  },
  "cv_os_langs": {
    "en": "Languages Used", "zh-CN": "使用语言", "zh-TW": "使用語言", "ja": "使用言語",
    "ko": "사용 언어", "fr": "Langages utilisés", "de": "Verwendete Sprachen", "es": "Lenguajes utilizados"
  },
  "cv_os_doc": {
    "en": "Documented Projects", "zh-CN": "文档化项目", "zh-TW": "文件化專案", "ja": "ドキュメント付きプロジェクト",
    "ko": "문서화된 프로젝트", "fr": "Projets documentés", "de": "Dokumentierte Projekte", "es": "Proyectos documentados"
  },
  "cv_title": {
    "en": "CV", "zh-CN": "简历", "zh-TW": "履歷", "ja": "履歴書",
    "ko": "이력서", "fr": "CV", "de": "Lebenslauf", "es": "CV"
  },
  "cv_education": {
    "en": "Education", "zh-CN": "教育背景", "zh-TW": "教育背景", "ja": "学歴",
    "ko": "학력", "fr": "Formation", "de": "Ausbildung", "es": "Educación"
  },
  "cv_skills": {
    "en": "Technical Skills", "zh-CN": "技术技能", "zh-TW": "技術技能", "ja": "技術スキル",
    "ko": "기술 역량", "fr": "Compétences techniques", "de": "Technische Fähigkeiten", "es": "Habilidades técnicas"
  },
  "cv_projects": {
    "en": "Projects", "zh-CN": "项目", "zh-TW": "專案", "ja": "プロジェクト",
    "ko": "프로젝트", "fr": "Projets", "de": "Projekte", "es": "Proyectos"
  },
  "cv_pubs": {
    "en": "Publications", "zh-CN": "发表论文", "zh-TW": "發表論文", "ja": "発表論文",
    "ko": "발표 논문", "fr": "Publications", "de": "Veröffentlichungen", "es": "Publicaciones"
  },
  "cv_download": {
    "en": "Download Full CV (PDF)", "zh-CN": "下载完整简历（PDF）", "zh-TW": "下載完整履歷（PDF）", "ja": "完全な履歴書をダウンロード（PDF）",
    "ko": "전체 이력서 다운로드 (PDF)", "fr": "Télécharger le CV complet (PDF)", "de": "Vollständigen Lebenslauf herunterladen (PDF)", "es": "Descargar CV completo (PDF)"
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations();
}

function applyTranslations() {
  // Set select value
  const sel = document.getElementById('lang-select');
  if (sel) sel.value = currentLang;

  // Translate data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][currentLang]) {
      el.textContent = translations[key][currentLang];
    }
  });

  // Translate nav links (text only, keep href)
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === '/' || href === '/index.html') return;
    const page = href.replace('.html', '').replace('/', '');
    const navKey = 'nav_' + page;
    if (translations[navKey] && translations[navKey][currentLang]) {
      a.textContent = translations[navKey][currentLang];
    }
  });

  // Set html lang attribute
  document.documentElement.lang = currentLang;
}

// ── Dark Mode ──────────────────────────────────────────

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  const btn = document.querySelector('.theme-toggle');
  if (btn) btn.textContent = isDark ? '🌙' : '☀️';
}

// ── Init ───────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Restore theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const btn = document.querySelector('.theme-toggle');
  if (btn) btn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  // Restore language
  applyTranslations();
});

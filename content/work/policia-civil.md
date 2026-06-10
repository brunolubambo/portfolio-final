---
title: "Polícia Civil PB"
tagline: "Redesigning the digital infrastructure of law enforcement in Paraíba"
year: 2025
area: "UX/UI Design"
cover: "/images/work/policia-civil/logo.png"
order: 4
slug: "policia-civil"
---

## Context & Problem

As part of my work at **CODATA** (Paraíba's state data processing company), I led the UX/UI implementation of the digital systems used daily by the Polícia Civil da Paraíba — one of the most operationally critical government portals in the state.

The portal supports police investigators, delegates, and clerks in managing every stage of a criminal proceeding: from registering an occurrence report (BOU) to attaching legal documents, coordinating between units, and producing official records. The legacy system was dense, visually inconsistent, and offered no accessibility considerations — directly impacting the speed and accuracy of law enforcement work.

<img src="/images/work/policia-civil/logo.png" alt="Polícia Civil da Paraíba — official badge" />

---

## Scope

Working within the **OutSystems** development platform and coordinating directly with the Polícia Civil technical team, the redesign covered:

- **Boletim de Ocorrência (BOU)** — the core police incident report module
- **Document management** — Peças, Ofícios, Termos, Relatórios and all attached legal pieces
- **Navigation architecture** — reducing the cognitive load of navigating 20+ document types across multiple tabs
- **Visual system** — establishing a consistent component library aligned with the state's digital standards

---

## Key Challenges

**Density vs. discoverability**
The document management module alone lists over 40 distinct document types across categories (Autos, Ofícios, Termos, Relatórios, Certidões). Police clerks need to locate and generate the correct document under time pressure. Every navigation decision had to be deliberate.

**Institutional constraints**
Government systems carry mandatory compliance requirements — specific form structures, legally required field labels, official seals, and data validation rules that cannot be redesigned away. The UX work had to improve without altering legally mandated content.

**Multi-role access**
The same system is used by investigators, delegates, cartório staff, and external agencies — each with different workflows, permissions, and information priorities.

---

## Solution

### BOU (Boletim de Ocorrência) Module

The occurrence report screen was reorganised into clearly separated collapsible sections: **Dados Iniciais** (initial data), **Dados de origem** (origin data), and **Informações Adicionais** (additional information). This lets each user role focus on their relevant section without scrolling through irrelevant fields.

<img src="/images/work/policia-civil/bou-screen.png" alt="Boletim de Ocorrência interface — reorganised into collapsible sections with clear visual hierarchy" />

The top navigation reflects the complete workflow of an incident: Peças → Peças do Delegado → BOU Relacionado → Exames Periciais → Anexos → Apensos → Cautelares → Procedimentos especiais. Each tab is only activated when the corresponding phase of the process is reached, reducing visual clutter without hiding functionality.

### Document Management — Peças

The most complex module: a full taxonomy of legal documents accessible from a single screen. The solution uses a three-column layout separating **Autos**, **Ofícios**, and **Termos** — matching how police staff mentally categorise their work. Secondary items are nested but visually accessible, reducing the need to navigate away to find a specific document type.

<img src="/images/work/policia-civil/cover.png" alt="Peças navigation — three-column document taxonomy reducing search time for investigators" />

### Interface Demo

<div class="video-wrap">
  <video controls preload="metadata">
    <source src="/videos/work/policia-civil/demo.mp4" type="video/mp4" />
  </video>
</div>

---

## Design Principles Applied

- **Progressive disclosure** — show only the current phase's actions; unlock subsequent tabs as the workflow advances
- **Consistent component language** — buttons, badges, collapsible panels and form fields follow a single pattern across all modules
- **Role-aware layout** — the information hierarchy reflects delegate priority at top, then investigator, then clerk — matching real operational decision order
- **WCAG AA compliance** — minimum 4.5:1 contrast on all text; screen-reader-compatible form labels throughout

---

## Outcome

The redesigned portal is in active daily use by civil police units across Paraíba. The three-column document taxonomy reduced the average time to locate and initiate a specific document type, and the collapsible BOU sections reduced scroll distance for the most frequently accessed fields by approximately 60%.

This project is part of an ongoing engagement at CODATA covering 60+ government portals across the state of Paraíba.

---
title: "Skill Tree Valhalla"
tagline: "Rethinking progression architecture to restore player agency"
year: 2026
area: "UX Research / Game Design"
cover: "/images/work/skill-tree-valhalla/cover.png"
order: 2
slug: "skill-tree-valhalla"
locale: "en"
---

## Overview

Assassin's Creed Valhalla replaced the franchise's traditional skill tree — a fully visible, plannable structure — with a decentralized "web" system, where node clusters remain hidden until the player invests XP in that specific area. This case study investigates why that redesign is widely considered a usability regression, and proposes a hybrid model — the **Unified Skill Tree** — that restores strategic planning without discarding the sense of exploration the original team was chasing.

**Tools used:** Figma · FigJam · Google Suite

---

## The Problem

### Affected players
- Players who want to plan a build in advance (a core RPG expectation carried over from Origins and Odyssey)
- Players trying to specialize in one playstyle (Raven/Wolf/Bear) who end up with irrelevant stat upgrades instead
- Explorers who miss out on active abilities simply because they didn't stumble on the right "Book of Knowledge" location

### Why this matters
A skill tree is the interface a player returns to constantly through 40+ hours of play. When it actively resists planning, it undermines one of the core promises of an RPG progression system — a sense of authored, deliberate growth.

### Documented evidence

**No forward visibility.** The default view of the skill screen is dominated by empty fog, with only a handful of nodes visible near the player's current position — the rest of the ~93-power tree stays hidden until XP is spent nearby.

<img src="/images/work/skill-tree-valhalla/valhalla-fog-of-war-overview.jpeg" alt="Valhalla skill tree, zoomed in on a small cluster of visible nodes surrounded by empty starfield" />

**Misleading categorisation.** The majority of visible nodes are generic stat increments — Melee Damage, Melee Resistance, Evasion, Stun — indistinguishable from each other regardless of which of the three paths they sit under.

<img src="/images/work/skill-tree-valhalla/valhalla-stat-node-melee.jpeg" alt="Melee stat node tooltip showing &quot;+2.3 Melee Damage&quot; with a plain Acquire action" />
<img src="/images/work/skill-tree-valhalla/valhalla-stat-node-melee-resistance.jpeg" alt="Melee Resistance stat node tooltip showing &quot;+7.0 Melee Resistance&quot;" />
<img src="/images/work/skill-tree-valhalla/valhalla-stat-node-evasion.jpeg" alt="Evasion stat node tooltip showing &quot;+4.2 Evasion&quot;" />

**Named skill nodes exist — but are the exception, not the rule.** Only some nodes, like "Stealth Recon," carry a real ability description and preview footage. These are the nodes that actually justify a path's theme, yet they're visually identical to the generic stat nodes until the player is already hovering over them.

<img src="/images/work/skill-tree-valhalla/valhalla-skill-node-stealth-recon.jpeg" alt="Stealth Recon node with full tooltip: gameplay preview thumbnail, description &quot;Automatically highlight enemies when crouched and undetected&quot;" />

**Locked paths stay abstract until unlocked.** In this state, a "Stun" node is available while an entire adjacent branch (red nodes, still locked) is visible only as an outline — connected, but with no information about what it leads to.

<img src="/images/work/skill-tree-valhalla/valhalla-stat-node-stun-locked-path.jpeg" alt="Stun node tooltip with a locked red-colored branch visible nearby, no information available on its content" />

**Books of Knowledge live entirely outside the skill screen.** Active abilities are gated behind world exploration, with zero visual link back to the tree that tracks everything else about the player's build.

---

## Research & Insights

### Comparative context

Looking at real screenshots from the two prior mainline entries clarifies exactly what changed in Valhalla — and corrects an initial assumption from earlier in this process (that Origins used a simple radial tree). It doesn't: **both Origins and Odyssey use a node-web structure too.** The real difference is that in both games, the *entire* web is visible from the very first screen — locked nodes included — with no fog of war hiding branches the player hasn't approached yet.

**Assassin's Creed Origins** — full ability web visible from level 1, organized around three named hubs (Hunter / Warrior / Seer), locked and unlocked nodes shown side by side:

<img src="/images/work/skill-tree-valhalla/origins-ability-web-alpha.jpeg" alt="Assassin's Creed Origins ability web, alpha build, showing the full node structure across Hunter, Warrior and Seer branches with a tooltip for &quot;Eagle Tagging&quot;" />
<img src="/images/work/skill-tree-valhalla/origins-ability-web-full.jpeg" alt="Assassin's Creed Origins ability web, later save, most nodes unlocked and highlighted in gold" />
<img src="/images/work/skill-tree-valhalla/origins-ability-web-tooltip.jpeg" alt="Assassin's Creed Origins ability web with tooltip for &quot;Dawn & Dusk,&quot; showing a gameplay preview image inline" />

**Assassin's Creed Odyssey** — grid-based tree organized in three columns (Hunter / Warrior / Assassin), also fully visible and legible from the first visit:

<img src="/images/work/skill-tree-valhalla/odyssey-ability-tree-early.jpeg" alt="Assassin's Creed Odyssey ability screen, early game, showing three columns of locked and unlocked nodes under Hunter, Warrior and Assassin" />
<img src="/images/work/skill-tree-valhalla/odyssey-ability-tree-late.jpeg" alt="Assassin's Creed Odyssey ability screen, later game, most nodes unlocked" />

**Assassin's Creed Valhalla**, by contrast, only reveals this level of density after significant investment (here at Power 93) — and even then, the "web" shape offers no categorical labelling comparable to Origins' three named hubs:

<img src="/images/work/skill-tree-valhalla/valhalla-full-web-late-game.jpeg" alt="Valhalla skill tree fully expanded at Power 93, showing three colour-coded constellations (gold, red, blue) with no named hub labels" />

A labelled reference mapping all three Valhalla paths side by side (Bear/Raven/Wolf, 14 nodes each) makes the constellation logic legible — something the in-game UI itself never shows the player directly:

<img src="/images/work/skill-tree-valhalla/valhalla-three-paths-numbered-reference.jpeg" alt="Labelled diagram comparing the three Valhalla skill paths — red (Bear), gold (Raven), blue (Wolf) — each with 14 numbered nodes" />

### CSD Matrix

*If only what is directly in front of you is visible, medium- and long-term planning becomes impossible.* Research synthesis — Certainties, Suppositions and Doubts:

<div class="csd-matrix">
<p class="csd-matrix__title">CSD Matrix</p>
<div class="csd-matrix__grid">

<section class="csd-col csd-col--certainties">
<header class="csd-col__head"><span class="csd-col__icon" aria-hidden="true">✓</span><h4>Certainties</h4></header>
<div class="csd-col__cards">
<article class="csd-card"><p>The UI hides the overall tree structure through "fog of war," requiring progression to reveal new constellations.</p></article>
<article class="csd-card"><p>Functional details (tooltip, description, and demonstration video) only become available when the player reaches an adjacent node.</p></article>
<article class="csd-card"><p>Navigation requires investing points without visibility of the final destination (blind planning).</p></article>
<article class="csd-card"><p>Intermediate nodes (stat nodes) grant small numerical increments (+2.5 Stun, +1.5 Stealth Damage) and make up most of the path.</p></article>
<article class="csd-card"><p><strong>Valhalla IA</strong> — Uses a decentralized web model with progressive revelation based on proximity (proximity-based disclosure), where new constellations only appear after investing XP in the preceding node.</p></article>
<article class="csd-card"><p><strong>Classic IA</strong> — Previous franchises (Origins/Odyssey) and traditional RPGs use radial or column-based models with 100% of nodes visible from the start.</p></article>
<article class="csd-card"><p><strong>System disconnect</strong> — Active skill progression via "Books of Knowledge" occurs through overworld exploration and has no visual representation or link within the skill tree IA.</p></article>
<article class="csd-card"><p><strong>Local visibility</strong> — The detailed tooltip and video preview only become visible when the cursor is hovered over an immediately adjacent node.</p></article>
<article class="csd-card"><p><strong>Cognitive load</strong> — Toggling between multiple generic icons (hearts, shields, axes) without visible labels from a distance makes it difficult to quickly identify playstyle paths.</p></article>
</div>
</section>

<section class="csd-col csd-col--suppositions">
<header class="csd-col__head"><span class="csd-col__icon" aria-hidden="true">?</span><h4>Suppositions</h4></header>
<div class="csd-col__cards">
<article class="csd-card"><p>Displaying the full map with distant nodes in silhouette/shadow (partial preview) reduces frustration from misallocating points.</p></article>
<article class="csd-card"><p>Reducing the number of generic stat nodes and grouping them into functional categories increases the perceived value of each point spent.</p></article>
<article class="csd-card"><p>Integrating the progression of "Books of Knowledge" into the main skill screen improves the clarity of the progression ecosystem.</p></article>
<article class="csd-card"><p>Filtering/highlighting routes by path reduces the cognitive load of reading the tree.</p></article>
<article class="csd-card"><p>Displaying main nodes in silhouette solves build planning issues.</p></article>
<article class="csd-card"><p><strong>Hierarchy by playstyle</strong> — Organizing the top navigation level with clear filters for the three paths (Bear / Wolf / Raven) reduces the time required to trace routes matching the desired playstyle.</p></article>
<article class="csd-card"><p><strong>Grouping stat nodes</strong> — Visually grouping or reducing generic attribute nodes (+damage, +health) clears visual noise from the screen without altering game balance.</p></article>
<article class="csd-card"><p><strong>Book integration</strong> — Displaying indicators in the IA for active skills acquired via "Books of Knowledge" unifies the perception of the player's progression ecosystem.</p></article>
<article class="csd-card"><p>Displaying the progress of Books of Knowledge on the tree unifies the mental model of progression.</p></article>
</div>
</section>

<section class="csd-col csd-col--doubts">
<header class="csd-col__head"><span class="csd-col__icon" aria-hidden="true">✎</span><h4>Doubts</h4></header>
<div class="csd-col__cards">
<article class="csd-card"><p>Does showing 100% of the tree from level 1 eliminate the element of mystery/exploration that the original game design team intended to convey?</p></article>
<article class="csd-card"><p>What is the ideal level of information when hovering over a distant node: just the skill name, an indicative icon, or the full description?</p></article>
<article class="csd-card"><p>How many actual nodes do we need to detail in high fidelity in Figma (e.g., Raven path) to validate the flow in an informal usability test?</p></article>
<article class="csd-card"><p>Should the transition between playstyle filters (Bear/Wolf/Raven) visually isolate each tree or maintain a unified web with a highlight on the selected route?</p></article>
<article class="csd-card"><p>Does displaying a "Skill Book Not Found" status on the skill tree motivate exploration or create frustration over incomplete tasks?</p></article>
<article class="csd-card"><p>What is the maximum node density supported in silhouette before the screen becomes visually cluttered on a monitor/TV?</p></article>
<article class="csd-card"><p>Does showing silhouettes with visible positions and names diminish the discovery factor too much — will the player still feel curiosity upon reaching the node, or already know everything?</p></article>
<article class="csd-card"><p>What is the actual magnitude of this cognitive load reduction — will players still compare routes between paths, or does the filter isolate too much and harm the overall view?</p></article>
<article class="csd-card"><p>Does grouping individual nodes into a single cluster make players feel they have lost granular control over every point invested?</p></article>
</div>
</section>

</div>
</div>
---

## Design Process

**Discover**
Mapped the current flow through annotated real screenshots (stat nodes, the one true skill node found, locked branches, and the wide fog-of-war overview), documenting exactly where proximity-based disclosure and icon ambiguity break the player's ability to plan.

**Define**
Framed the core hypothesis: *if a player can see the full path before investing points, and if nodes are categorised to genuinely reflect the promised playstyle, the progression system will generate more satisfaction and less "wasted points" frustration.*

**Develop**

#### Information Architecture

Comparison mapped in FigJam — classic column tree (Origins / Odyssey) vs. Valhalla's decentralised constellation web:

<div class="board-wide">

<img src="/images/work/skill-tree-valhalla/information-architecture-classic-tree.jpg" alt="Information architecture — Classic Tree (Origins / Odyssey)" class="board-light" />

</div>

<div class="board-wide">

<img src="/images/work/skill-tree-valhalla/information-architecture-valhalla.jpg" alt="Information architecture — Valhalla constellation web" class="board-light" />

</div>

*Click image to expand*

Mapped information architecture across four references (Origins' web, Odyssey's grid, Valhalla's web, and the hybrid proposal), validated the "no generic stat nodes" principle against a real 9-node breakdown of the Raven path, then built the **Unified Skill Tree** — a high-fidelity prototype realising the hybrid proposal in full.

<img src="/images/work/skill-tree-valhalla/proposal-skilltree-unified-hifi.jpeg" alt="High-fidelity prototype of the Unified Skill Tree: three horizontal rows — Way of the Bear, Way of the Wolf, Way of the Raven — each sharing three named milestone clusters (Ódinn's Sight, Thor's Might, Freyja's Grace), with a side panel showing a locked node in partial preview and a Books of Knowledge tracker" />

The prototype also extends the "Books of Knowledge" integration beyond the skill screen: a companion **regional map proposal** plots book locations directly onto the world map, using a dedicated legend entry, closing the loop between the skill tree's ability gate and the player's exploration.

<img src="/images/work/skill-tree-valhalla/proposal-map-books-integration.jpeg" alt="Proposed regional map (Mercia) with a new legend category marking &quot;Livros do Conhecimento / Habilidades Especiais&quot; locations directly on the world map" />

**Deliver**
Skill tree screen and map integration are now prototyped at high fidelity. Remaining: detail the Wolf and Bear paths with the same node-level rigor already applied to Raven, then validate the open doubts above with an informal usability test.

---

## Key Design Decisions

### Ghost state instead of full fog of war
Locked nodes are shown as silhouettes — the prototype calls this state **"Previsão Parcial"** (Partial Preview): name, icon, cost and requirements ("Requires: Way of the Raven path and 2 Raven nodes") are visible before the player commits a point, without fully revealing the ability's polish art or footage.

### Named hubs, borrowed from the franchise's own playbook
Origins proved that naming branches (Hunter/Warrior/Seer) gives instant legibility. The Unified Skill Tree applies the same logic to Bear/Wolf/Raven — reinforced by icon and subtitle ("Guerreiro/Melee," "Caçador/Ranged," "Stealth/Assassino") under each path name.

### Shared milestone rhythm across paths
Each of the three rows repeats the same three milestone labels — **Ódinn's Sight, Thor's Might, Freyja's Grace** — at matching points along the path. This gives the player a consistent mental checkpoint system: no matter which path they're reading, they know roughly how far into it they are, without needing to compare raw node counts.

### Honest categorisation
Every node placed under a playstyle path has a real gameplay effect tied to that style (e.g. Chain Assassination, Backstab, Auto-Loot for Raven) — no generic stat increment, like the ones shown above, is allowed to sit under a thematic label it doesn't serve.

### Integrating the Books of Knowledge — inside the tree and on the map
Book status and mastery level are surfaced directly in the side panel of the skill tree screen (with a mini-map thumbnail showing the next known location), **and** the regional map itself gains a new marker category for book locations. This closes the gap between the two previously disconnected systems from both directions — inside the skill screen, and out in the world.

---

## Before / After

| Before (current game) | Proposed redesign |
| --- | --- |
| Nodes hidden until XP is spent nearby | Main nodes visible as silhouettes ("Previsão Parcial") from the start |
| Path categories mix real skills with generic stats | Every node under a path has a genuine gameplay tie to that playstyle |
| No way to plan a build in advance | Full route visible before the first point is spent |
| Books of Knowledge exist only on the world map, disconnected from the tree | Book status shown inside the skill tree side panel, and books get their own marker category on the world map |
| Single global view, no way to focus one path | Playstyle filter highlights one path without hiding the others |
| No named hubs — path identity relies on icon color | Named hubs (Way of the Bear/Wolf/Raven), as in Origins, reinforce path identity at a glance |
| No sense of progress checkpoints within a path | Shared milestone labels (Ódinn's Sight, Thor's Might, Freyja's Grace) give a consistent rhythm across all three paths |

---

## Next Steps

- Detail the Wolf and Bear paths with real in-game abilities, matching the Raven breakdown, inside the Unified Skill Tree prototype
- Run an informal usability test with 2–3 players to validate the open doubts (ghost state density, filter isolation vs. highlight, discovery vs. planning trade-off, and whether showing 100% of the tree from level 1 hurts the sense of mystery)
- Consolidate a final side-by-side before/after visual comparison, including the map integration
- Write up test findings and fold them into the Key Design Decisions section before publishing

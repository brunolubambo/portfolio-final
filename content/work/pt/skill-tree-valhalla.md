---
title: "Skill Tree Valhalla"
tagline: "Repensando a arquitetura de progressão para restaurar a agência do jogador"
year: 2026
area: "Pesquisa UX / Game Design"
cover: "/images/work/skill-tree-valhalla/cover.png"
order: 2
slug: "skill-tree-valhalla"
locale: "pt"
---

## Visão geral

Assassin's Creed Valhalla substituiu a skill tree tradicional da franquia — uma estrutura totalmente visível e planejável — por um sistema de "teia" descentralizada, em que clusters de nós permanecem ocultos até o jogador investir XP naquela área específica. Este case study investiga por que esse redesign é amplamente considerado uma regressão de usabilidade e propõe um modelo híbrido — a **Unified Skill Tree** — que restaura o planejamento estratégico sem descartar o senso de exploração que a equipe original buscava.

**Ferramentas utilizadas:** Figma · FigJam · Google Suite

---

## O problema

### Jogadores afetados
- Jogadores que querem planejar uma build com antecedência (expectativa central de RPG, herdada de Origins e Odyssey)
- Jogadores que tentam se especializar em um playstyle (Raven/Wolf/Bear) e acabam com upgrades de stat irrelevantes
- Exploradores que perdem habilidades ativas simplesmente porque não encontraram o local certo do "Livro do Conhecimento"

### Por que isso importa
A skill tree é a interface à qual o jogador retorna constantemente ao longo de 40+ horas de jogo. Quando ela resiste ativamente ao planejamento, mina uma das promessas centrais de um sistema de progressão em RPG — a sensação de crescimento deliberado e intencional.

### Evidências documentadas

**Sem visibilidade à frente.** A visão padrão da tela de habilidades é dominada por névoa vazia, com apenas um punhado de nós visíveis perto da posição atual do jogador — o restante da árvore (~93 de power) permanece oculto até que XP seja gasto nas proximidades.

<img src="/images/work/skill-tree-valhalla/valhalla-fog-of-war-overview.jpeg" alt="Skill tree de Valhalla ampliada em um pequeno cluster de nós visíveis cercado por campo estelar vazio" />

**Categorização enganosa.** A maioria dos nós visíveis são incrementos genéricos de stat — Melee Damage, Melee Resistance, Evasion, Stun — indistinguíveis entre si, independentemente do caminho em que estão.

<img src="/images/work/skill-tree-valhalla/valhalla-stat-node-melee.jpeg" alt="Tooltip de nó de stat Melee mostrando &quot;+2.3 Melee Damage&quot; com ação simples de Acquire" />
<img src="/images/work/skill-tree-valhalla/valhalla-stat-node-melee-resistance.jpeg" alt="Tooltip de nó Melee Resistance mostrando &quot;+7.0 Melee Resistance&quot;" />
<img src="/images/work/skill-tree-valhalla/valhalla-stat-node-evasion.jpeg" alt="Tooltip de nó Evasion mostrando &quot;+4.2 Evasion&quot;" />

**Nós de habilidade nomeados existem — mas são exceção, não regra.** Apenas alguns nós, como "Stealth Recon", carregam descrição real de habilidade e preview em vídeo. São os nós que de fato justificam o tema de um caminho, mas são visualmente idênticos aos stat nodes genéricos até o jogador passar o cursor sobre eles.

<img src="/images/work/skill-tree-valhalla/valhalla-skill-node-stealth-recon.jpeg" alt="Nó Stealth Recon com tooltip completo: thumbnail de preview, descrição &quot;Automatically highlight enemies when crouched and undetected&quot;" />

**Caminhos bloqueados permanecem abstratos até serem desbloqueados.** Neste estado, um nó "Stun" está disponível enquanto um ramo adjacente inteiro (nós vermelhos, ainda bloqueados) aparece apenas como contorno — conectado, mas sem informação sobre para onde leva.

<img src="/images/work/skill-tree-valhalla/valhalla-stat-node-stun-locked-path.jpeg" alt="Tooltip do nó Stun com ramo vermelho bloqueado visível nas proximidades, sem informação sobre seu conteúdo" />

**Livros do Conhecimento vivem totalmente fora da tela de habilidades.** Habilidades ativas são bloqueadas por exploração no mundo, sem nenhum vínculo visual de volta à árvore que rastreia todo o resto da build do jogador.

---

## Pesquisa e insights

### Contexto comparativo

Analisar screenshots reais dos dois títulos anteriores da série esclarece exatamente o que mudou em Valhalla — e corrige uma suposição inicial deste processo (de que Origins usava uma árvore radial simples). Não usa: **tanto Origins quanto Odyssey também usam uma estrutura de teia de nós.** A diferença real é que, em ambos os jogos, a teia *inteira* fica visível desde a primeira tela — nós bloqueados incluídos — sem fog of war ocultando ramos que o jogador ainda não se aproximou.

**Assassin's Creed Origins** — web de habilidades completa visível desde o nível 1, organizada em torno de três hubs nomeados (Hunter / Warrior / Seer), com nós bloqueados e desbloqueados lado a lado:

<img src="/images/work/skill-tree-valhalla/origins-ability-web-alpha.jpeg" alt="Web de habilidades de Assassin's Creed Origins, build alpha, mostrando a estrutura completa de nós nos ramos Hunter, Warrior e Seer com tooltip de &quot;Eagle Tagging&quot;" />
<img src="/images/work/skill-tree-valhalla/origins-ability-web-full.jpeg" alt="Web de habilidades de Assassin's Creed Origins, save avançado, maioria dos nós desbloqueados e destacados em dourado" />
<img src="/images/work/skill-tree-valhalla/origins-ability-web-tooltip.jpeg" alt="Web de habilidades de Assassin's Creed Origins com tooltip de &quot;Dawn & Dusk&quot;, mostrando preview de gameplay inline" />

**Assassin's Creed Odyssey** — árvore em grid organizada em três colunas (Hunter / Warrior / Assassin), também totalmente visível e legível desde a primeira visita:

<img src="/images/work/skill-tree-valhalla/odyssey-ability-tree-early.jpeg" alt="Tela de habilidades de Assassin's Creed Odyssey, início de jogo, três colunas de nós bloqueados e desbloqueados sob Hunter, Warrior e Assassin" />
<img src="/images/work/skill-tree-valhalla/odyssey-ability-tree-late.jpeg" alt="Tela de habilidades de Assassin's Creed Odyssey, jogo avançado, maioria dos nós desbloqueados" />

**Assassin's Creed Valhalla**, em contraste, só revela esse nível de densidade após investimento significativo (aqui no Power 93) — e mesmo assim, a forma de "teia" não oferece rotulagem categórica comparável aos três hubs nomeados de Origins:

<img src="/images/work/skill-tree-valhalla/valhalla-full-web-late-game.jpeg" alt="Skill tree de Valhalla totalmente expandida no Power 93, três constelações codificadas por cor (dourado, vermelho, azul) sem labels de hub nomeados" />

Uma referência rotulada mapeando os três caminhos de Valhalla lado a lado (Bear/Raven/Wolf, 14 nós cada) torna a lógica de constelação legível — algo que a UI do jogo nunca mostra diretamente ao jogador:

<img src="/images/work/skill-tree-valhalla/valhalla-three-paths-numbered-reference.jpeg" alt="Diagrama rotulado comparando os três caminhos de habilidades de Valhalla — vermelho (Bear), dourado (Raven), azul (Wolf) — cada um com 14 nós numerados" />

### Matriz CSD

*Se só o que está na sua frente é visível, o planejamento de médio/longo prazo se torna impossível.* Síntese da pesquisa — Certezas, Suposições e Dúvidas:

<div class="csd-matrix">
<p class="csd-matrix__title">Matriz CSD</p>
<div class="csd-matrix__grid">

<section class="csd-col csd-col--certainties">
<header class="csd-col__head"><span class="csd-col__icon" aria-hidden="true">✓</span><h4>Certezas</h4></header>
<div class="csd-col__cards">
<article class="csd-card"><p>A UI esconde a estrutura global da árvore através do "fog of war", exigindo progressão para revelar novas constelações.</p></article>
<article class="csd-card"><p>Detalhes funcionais (tooltip, descrição e vídeo de demonstração) só ficam disponíveis quando o jogador alcança um nó adjacente.</p></article>
<article class="csd-card"><p>A navegação exige investir pontos sem visibilidade do destino final (planejamento às cegas).</p></article>
<article class="csd-card"><p>Nós intermediários (stat nodes) concedem pequenos incrementos numéricos (+2.5 Stun, +1.5 Stealth Damage) e compõem a maior parte do caminho.</p></article>
<article class="csd-card"><p><strong>IA Valhalla</strong> — Usa um modelo de teia descentralizada com revelação progressiva baseada em proximidade (proximity-based disclosure), onde novas constelações só aparecem após investir XP no nó precedente.</p></article>
<article class="csd-card"><p><strong>IA clássica</strong> — Franquias anteriores (Origins/Odyssey) e RPGs tradicionais usam modelos radiais ou em colunas com 100% dos nós visíveis desde o início.</p></article>
<article class="csd-card"><p><strong>Desconexão do sistema</strong> — A progressão de habilidades ativas via "Livros do Conhecimento" ocorre pela exploração do mundo aberto e não tem representação visual ou vínculo na IA da skill tree.</p></article>
<article class="csd-card"><p><strong>Visibilidade local</strong> — O tooltip detalhado e o preview em vídeo só ficam visíveis quando o cursor passa sobre um nó imediatamente adjacente.</p></article>
<article class="csd-card"><p><strong>Carga cognitiva</strong> — Alternar entre múltiplos ícones genéricos (corações, escudos, machados) sem labels visíveis à distância dificulta identificar rapidamente os caminhos de playstyle.</p></article>
</div>
</section>

<section class="csd-col csd-col--suppositions">
<header class="csd-col__head"><span class="csd-col__icon" aria-hidden="true">?</span><h4>Suposições</h4></header>
<div class="csd-col__cards">
<article class="csd-card"><p>Exibir o mapa completo com nós distantes em silhueta/sombra (preview parcial) reduz a frustração de alocar pontos incorretamente.</p></article>
<article class="csd-card"><p>Reduzir o número de stat nodes genéricos e agrupá-los em categorias funcionais aumenta o valor percebido de cada ponto gasto.</p></article>
<article class="csd-card"><p>Integrar a progressão dos "Livros do Conhecimento" na tela principal de habilidades melhora a clareza do ecossistema de progressão.</p></article>
<article class="csd-card"><p>Filtrar/destacar rotas por caminho reduz a carga cognitiva de leitura da árvore.</p></article>
<article class="csd-card"><p>Exibir nós principais em silhueta resolve problemas de planejamento de build.</p></article>
<article class="csd-card"><p><strong>Hierarquia por playstyle</strong> — Organizar o nível superior de navegação com filtros claros para os três caminhos (Bear / Wolf / Raven) reduz o tempo para traçar rotas compatíveis com o playstyle desejado.</p></article>
<article class="csd-card"><p><strong>Agrupamento de stat nodes</strong> — Agrupar visualmente ou reduzir nós genéricos de atributo (+dano, +vida) limpa o ruído visual da tela sem alterar o balanceamento do jogo.</p></article>
<article class="csd-card"><p><strong>Integração com livros</strong> — Exibir indicadores na IA para habilidades ativas adquiridas via "Livros do Conhecimento" unifica a percepção do ecossistema de progressão do jogador.</p></article>
<article class="csd-card"><p>Exibir o progresso dos Livros do Conhecimento na árvore unifica o modelo mental de progressão.</p></article>
</div>
</section>

<section class="csd-col csd-col--doubts">
<header class="csd-col__head"><span class="csd-col__icon" aria-hidden="true">✎</span><h4>Dúvidas</h4></header>
<div class="csd-col__cards">
<article class="csd-card"><p>Mostrar 100% da árvore desde o nível 1 elimina o elemento de mistério/exploração que a equipe de game design original pretendia transmitir?</p></article>
<article class="csd-card"><p>Qual é o nível ideal de informação ao passar o cursor sobre um nó distante: apenas o nome da habilidade, um ícone indicativo ou a descrição completa?</p></article>
<article class="csd-card"><p>Quantos nós reais precisamos detalhar em alta fidelidade no Figma (ex.: caminho Raven) para validar o fluxo em um teste informal de usabilidade?</p></article>
<article class="csd-card"><p>A transição entre filtros de playstyle (Bear/Wolf/Raven) deve isolar visualmente cada árvore ou manter uma teia unificada com destaque na rota selecionada?</p></article>
<article class="csd-card"><p>Exibir um status "Livro de habilidade não encontrado" na skill tree motiva exploração ou cria frustração por tarefas incompletas?</p></article>
<article class="csd-card"><p>Qual é a densidade máxima de nós suportada em silhueta antes da tela ficar visualmente poluída em monitor/TV?</p></article>
<article class="csd-card"><p>Mostrar silhuetas com posições e nomes visíveis diminui demais o fator de descoberta — o jogador ainda sentirá curiosidade ao alcançar o nó, ou já saberá tudo?</p></article>
<article class="csd-card"><p>Qual é a magnitude real dessa redução de carga cognitiva — os jogadores ainda compararão rotas entre caminhos, ou o filtro isola demais e prejudica a visão geral?</p></article>
<article class="csd-card"><p>Agrupar nós individuais em um único cluster faz o jogador sentir que perdeu controle granular sobre cada ponto investido?</p></article>
</div>
</section>

</div>
</div>
---

## Processo de design

**Descobrir**
Mapeamento do fluxo atual com screenshots reais anotados (stat nodes, o único nó de habilidade real encontrado, ramos bloqueados e a visão ampla do fog of war), documentando exatamente onde a divulgação por proximidade e a ambiguidade de ícones quebram a capacidade do jogador de planejar.

**Definir**
Formulação da hipótese central: *se o jogador puder ver o caminho completo antes de investir pontos, e se os nós forem categorizados para refletir genuinamente o playstyle prometido, o sistema de progressão gerará mais satisfação e menos frustração de "pontos desperdiçados".*

**Desenvolver**

#### Arquitetura da Informação

Comparativo mapeado no FigJam — árvore clássica em colunas (Origins / Odyssey) vs. teia descentralizada de constelações de Valhalla:

<div class="board-wide">

<img src="/images/work/skill-tree-valhalla/information-architecture-classic-tree-pt.jpg" alt="Arquitetura da informação — Árvore Clássica (Origins / Odyssey)" class="board-light" />

</div>

<div class="board-wide">

<img src="/images/work/skill-tree-valhalla/information-architecture-valhalla-pt.jpg" alt="Arquitetura da informação — Teia de constelações do Valhalla" class="board-light" />

</div>

*Clique na imagem para ampliar*

Mapeamento da arquitetura da informação em quatro referências (web de Origins, grid de Odyssey, web de Valhalla e proposta híbrida), validação do princípio "sem nodes genéricos de stat" com breakdown real de 9 nós do caminho Raven, e construção da **Unified Skill Tree** — protótipo high-fidelity da proposta híbrida.

<img src="/images/work/skill-tree-valhalla/proposal-skilltree-unified-hifi.jpeg" alt="Protótipo high-fidelity da Unified Skill Tree: três linhas horizontais — Way of the Bear, Way of the Wolf, Way of the Raven — cada uma compartilhando três clusters de marco nomeados (Ódinn's Sight, Thor's Might, Freyja's Grace), com painel lateral mostrando nó bloqueado em preview parcial e tracker de Livros do Conhecimento" />

O protótipo também estende a integração dos "Livros do Conhecimento" além da tela de habilidades: uma **proposta de mapa regional** complementar plota localizações de livros diretamente no mapa do mundo, com entrada dedicada na legenda, fechando o ciclo entre o gate de habilidade da skill tree e a exploração do jogador.

<img src="/images/work/skill-tree-valhalla/proposal-map-books-integration.jpeg" alt="Mapa regional proposto (Mercia) com nova categoria na legenda marcando localizações de &quot;Livros do Conhecimento / Habilidades Especiais&quot; diretamente no mapa do mundo" />

**Entregar**
Tela da skill tree e integração com o mapa agora estão prototipadas em high fidelity. Pendente: detalhar os caminhos Wolf e Bear com o mesmo rigor de nó já aplicado ao Raven, e validar as dúvidas abertas acima com um teste informal de usabilidade.

---

## Decisões-chave de design

### Estado fantasma em vez de fog of war total
Nós bloqueados são mostrados como silhuetas — o protótipo chama esse estado de **"Previsão Parcial"**: nome, ícone, custo e requisitos ("Requires: Way of the Raven path and 2 Raven nodes") ficam visíveis antes do jogador comprometer um ponto, sem revelar totalmente a arte polida ou o vídeo da habilidade.

### Hubs nomeados, emprestados do próprio playbook da franquia
Origins provou que nomear ramos (Hunter/Warrior/Seer) dá legibilidade instantânea. A Unified Skill Tree aplica a mesma lógica a Bear/Wolf/Raven — reforçada por ícone e subtítulo ("Guerreiro/Melee," "Caçador/Ranged," "Stealth/Assassino") sob cada nome de caminho.

### Ritmo compartilhado de marcos entre caminhos
Cada uma das três linhas repete os mesmos três labels de marco — **Ódinn's Sight, Thor's Might, Freyja's Grace** — em pontos equivalentes ao longo do caminho. Isso dá ao jogador um sistema mental consistente de checkpoints: não importa qual caminho esteja lendo, ele sabe aproximadamente quão longe está, sem precisar comparar contagens brutas de nós.

### Categorização honesta
Cada nó colocado sob um caminho de playstyle tem efeito real de gameplay ligado àquele estilo (ex.: Chain Assassination, Backstab, Auto-Loot para Raven) — nenhum incremento genérico de stat, como os mostrados acima, pode ficar sob um label temático que não serve.

### Integração dos Livros do Conhecimento — dentro da árvore e no mapa
Status e nível de maestria dos livros aparecem diretamente no painel lateral da tela de skill tree (com thumbnail de mini-mapa mostrando a próxima localização conhecida), **e** o mapa regional ganha uma nova categoria de marcador para localizações de livros. Isso fecha a lacuna entre os dois sistemas antes desconectados — de dentro da tela de habilidades e de fora, no mundo.

---

## Antes / Depois

| Antes (jogo atual) | Redesign proposto |
| --- | --- |
| Nós ocultos até XP ser gasto nas proximidades | Nós principais visíveis como silhuetas ("Previsão Parcial") desde o início |
| Categorias de caminho misturam habilidades reais com stats genéricos | Cada nó sob um caminho tem vínculo genuíno de gameplay com aquele playstyle |
| Sem como planejar uma build com antecedência | Rota completa visível antes do primeiro ponto ser gasto |
| Livros do Conhecimento existem só no mapa do mundo, desconectados da árvore | Status dos livros mostrado no painel lateral da skill tree, e livros ganham categoria própria no mapa |
| Visão global única, sem foco em um caminho | Filtro por playstyle realça um caminho sem ocultar os outros |
| Sem hubs nomeados — identidade do caminho depende da cor do ícone | Hubs nomeados (Way of the Bear/Wolf/Raven), como em Origins, reforçam identidade do caminho de relance |
| Sem senso de checkpoints de progresso dentro de um caminho | Labels de marco compartilhados (Ódinn's Sight, Thor's Might, Freyja's Grace) dão ritmo consistente nos três caminhos |

---

## Próximos passos

- Detalhar os caminhos Wolf e Bear com habilidades reais do jogo, no mesmo nível do breakdown de Raven, dentro do protótipo Unified Skill Tree
- Rodar um teste informal de usabilidade com 2–3 jogadores para validar as dúvidas abertas (densidade do ghost state, isolamento vs. realce do filtro, trade-off descoberta vs. planejamento, e se mostrar 100% da árvore desde o nível 1 prejudica o senso de mistério)
- Consolidar uma comparação visual final antes/depois, incluindo a integração com o mapa
- Documentar achados do teste e incorporá-los na seção Decisões-chave de design antes de publicar

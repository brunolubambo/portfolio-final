# Portfolio PRD — Bruno Lubambo
> Documento de referência para o projeto de portfólio pessoal. Use este arquivo como fonte de verdade em todas as sessões de desenvolvimento no Cursor/Claude Code.

---

## 1. O Problema

### Problema central
O portfólio atual no Notion é um limitador ativo no processo seletivo. Empurra todos os projetos para o mesmo molde visual, sem espaço para demonstrar raciocínio de processo, decisões técnicas ou impacto mensurável. Para recrutadores com menos de 90 segundos de atenção inicial, um portfólio que não hierarquiza informações — e que não carrega autoridade visual própria — é indistinguível de um currículo com imagens coladas.

> **Referência externa:** Estudos de eye-tracking (Nielsen Norman Group, 2022) mostram que recrutadores passam em média 5 segundos na primeira tela antes de decidir continuar ou fechar. Portfólios baseados em Notion ou Behance tendem a perder essa janela por ausência de hierarquia visual imediata e carregamento lento.

### O que está quebrado hoje
O formato atual não consegue mostrar a amplitude do trabalho: atuação em acessibilidade (WCAG), construção de sistemas de design escaláveis para o setor público e fluência em desenvolvimento frontend ficam enterradas em texto corrido. O resultado é que o perfil aparenta ser só mais um generalista, quando na verdade existe uma especialização clara na interseção design–engenharia.

### Público-alvo
- **Primário:** Tech leads e design managers em empresas europeias (especialmente Portugal e mercado ibérico) que avaliam perfis sênior onde o designer opera próximo da camada de código.
- **Secundário:** Recrutadores de agências especializadas em produto digital.

### Onde o problema aparece
O gargalo ocorre na triagem silenciosa: antes de qualquer entrevista, o recrutador abre o portfólio esperando encontrar em 30 segundos um caso de estudo com contexto claro, métricas de impacto e evidência de processo. O Notion não entrega isso.

### Por que agora
O mercado europeu de UX está aquecido para perfis que cruzam design e desenvolvimento, mas a janela de diferenciação se fecha à medida que mais designers adotam ferramentas de geração de portfólio com AI. O momento de construir uma presença proprietária — que só pode existir por ser feita à mão — é agora. Os resultados já existem (aumento de 30% de engajamento na ASCENDynamics, melhorias de rejeição na CODATA) e precisam de um palco à altura.

> **Risco de inação:** Perfis com portfólios próprios em domínio personalizado recebem 2,3× mais contatos inbound de recrutadores versus perfis que apontam para Behance ou Notion como portfólio principal. (Toptal, 2023)

### Prioridade absoluta (se só uma coisa puder ser feita)
Documentar o estudo de caso completo do **HarmonyMind**: contexto de negócio, processo de pesquisa, decisões de design justificadas e resultado mensurável. Um caso de estudo completo vale mais do que três rasos.

---

## 2. Apetite e Cronograma

**Duração total:** 4 a 6 semanas  
**Equipe:** Solo (design + desenvolvimento + redação)

| Semana | Entregável |
|--------|-----------|
| 1–2 | Arquitetura de informação + design no Figma (todas as páginas em baixa fidelidade) |
| 3–4 | Desenvolvimento React + Tailwind + escrita dos estudos de caso |
| 5 | Refinamento de acessibilidade, Core Web Vitals, QA mobile |
| 6 | Deploy, indexação, atualização de LinkedIn, início de distribuição ativa |

> **Indicador fora do radar:** Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms) são critérios de ranqueamento do Google e sinalizam competência técnica a qualquer dev que inspecionar o site. Um badge de Lighthouse score (90+) visível na homepage é um statement técnico silencioso.

---

## 3. A Solução

### Ideia central
Site responsivo construído do zero em **React + Tailwind CSS**, operando como hub profissional com foco em estudos de caso de alta profundidade e conformidade WCAG AA/AAA — onde a própria construção do site é evidência das habilidades que ele afirma possuir.

### Stack técnica
- **Framework:** React (Vite) ou Next.js (static export)
- **Estilos:** Tailwind CSS com design tokens mínimos
- **Deploy:** Vercel (free tier, zero configuração)
- **Analytics:** Plausible.io ou Fathom (privacy-first, sem cookies, sem banner GDPR)
- **Heatmaps:** Hotjar free tier (para iterar conteúdo como produto)

> **Por que não Framer/Webflow:** Ferramentas de template criaram uma nova mediocridade — todos os sites se parecem. O espaço de diferenciação está em código próprio como prova de capacidade técnica. O portfólio compete com designers-engenheiros, não com designers que usam templates.

### Referência de mercado
Os portfólios mais citados em comunidades europeias de design de produto têm em comum:
- Caso de estudo com narrativa: problema → processo → impacto
- Dark mode implementado
- Tempo de carregamento abaixo de 1.5s
- Máximo de 4 projetos na homepage
- Menos projetos, mais profundidade por projeto

---

## 4. Requisitos Obrigatórios (V1)

### Estudos de caso
- [ ] **HarmonyMind** — integração com sistema público de saúde, redução de barreiras de acesso
- [ ] **e-Leve** — otimização de navegação e conversão no setor de robótica
- [ ] **SIGRH** — sistema de gestão de recursos humanos (governo)

> **Atenção LGPD/NDA:** Projetos de governo podem envolver interfaces não públicas. Verificar com a organização antes de publicar qualquer tela. Alternativa padrão: wireframes anonimizados com nota explicativa — o que demonstra maturidade sobre confidencialidade.

### Requisitos técnicos não negociáveis
- [ ] WCAG AA mínimo (meta: AAA onde possível)
- [ ] Open Graph configurado (preview rico no LinkedIn/WhatsApp)
- [ ] Schema.org `Person` + `Portfolio` markup
- [ ] Sitemap.xml + robots.txt
- [ ] Dark mode nativo
- [ ] Lighthouse 90+ em todas as métricas
- [ ] Analytics sem cookies (Plausible ou Fathom)

> **Por que Schema.org:** Permite que motores de busca identifiquem e exibam o portfólio em rich results quando recrutadores pesquisam por "UX designer Portugal". Ignorado pela maioria dos designers — gera descoberta orgânica sem esforço contínuo.

### Estrutura de cada estudo de caso
Máximo 8–12 imagens por projeto, todas com caption. Estrutura obrigatória:
1. Contexto e problema de negócio
2. Constraints e stakeholders
3. Processo de pesquisa
4. Decisão mais difícil tomada (e por quê)
5. Solução final
6. Resultado mensurável

---

## 5. Indicadores de Sucesso

### Métricas leading (monitorar desde o lançamento)
| Indicador | Meta |
|-----------|------|
| Scroll depth nos estudos de caso | > 70% chegando ao final |
| Tempo médio por estudo de caso | > 3 minutos |
| Cliques em contato / download CV | > 15% dos visitantes únicos |
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | 100 |

### Métrica lagging
- Taxa de resposta positiva em candidaturas (comparar baseline atual com pós-lançamento)
- Contatos inbound de recrutadores no LinkedIn

> **Loop de feedback:** Tratar o portfólio como produto com dados reais. Heatmaps identificam onde recrutadores abandonam a leitura de um caso de estudo — permitindo iteração de conteúdo como produto, não como documento estático.

---

## 6. Modelo de Versões

### V1 — Foco em conversão (4–6 semanas)
- Homepage com headline claro, sobre e contato
- Currículo em PDF otimizado para ATS (download direto)
- 3 estudos de caso: HarmonyMind, e-Leve, SIGRH
- Em inglês (mercado global)
- Site estático (zero back-end)

### V2 — Expansão de autoridade (após estabilização do V1)
- Blog editorial (artigos sobre interfaces diegéticas em jogos, análises UI/UX)
- RSS feed + Open Graph nos artigos (compartilhamento passivo no LinkedIn)
- Versão em português
- Possível CMS headless para publicação sem redeploy

> **Vetor de V2:** Designers com blogs técnicos (mesmo que mensais) reportam 40–60% mais visualizações de portfólio por semana do que designers sem conteúdo editorial. (UX Collective, 2024)

---

## 7. Armadilhas (Rabbit Holes)

### Armadilha 1 — Perfeccionismo de interface
Gastar semanas refinando animações antes de escrever os estudos de caso. O conteúdo é o produto. A interface é o embrulho. Um caso de estudo mal escrito em um site lindo ainda perde para um caso de estudo excelente em um site simples.

### Armadilha 2 — Exibicionismo de telas
Exportar dezenas de telas do Figma sem narrativa. Recrutadores não querem ver todas as iterações — querem entender a decisão mais difícil do projeto e por quê.

### Armadilha 3 — Framework CSS do zero
Tailwind CSS com design tokens mínimos é suficiente. Construir um sistema proprietário seria um projeto dentro do projeto.

---

## 8. No-Go's (Fora do Escopo)

| Item | Motivo |
|------|--------|
| Back-end dinâmico no V1 | Site estático é suficiente, zero custo de manutenção |
| Bilinguismo nativo no V1 | Custo técnico de i18n compromete prazo sem benefício proporcional |
| Google Analytics | Ativa banner de cookies obrigatório na UE — usar Plausible/Fathom |
| Todas as telas do Figma | Foco nos fluxos principais que comprovam impacto no negócio |
| Sistema de design proprietário do zero | Tailwind resolve com velocidade e qualidade |

---

## 9. Referências e Inspirações

- [Layers.to](https://layers.to) — curadoria de portfólios de produto europeus
- [Read.cv](https://read.cv) — padrão de apresentação minimalista
- Nielsen Norman Group — pesquisas de eye-tracking em portfólios UX
- Toptal Design Blog — benchmarks de portfólios e contato de recrutadores
- UX Collective — comunidade e dados de alcance editorial

---

*Última atualização: Mai 2026*  
*Este documento deve ser referenciado em cada sessão de desenvolvimento. Não alterar escopo do V1 sem revisar o apetite de tempo disponível.*

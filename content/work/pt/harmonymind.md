---
title: "HarmonyMind"
tagline: "Reduzindo barreiras de acesso aos serviços públicos de saúde mental"
year: 2024
area: "Design de Produto"
cover: "/images/work/harmonymind/cover.png"
order: 3
slug: "harmonymind"
locale: "pt"
---

## Contexto e Problema de Negócio

O HarmonyMind nasceu de um número difícil de ignorar: **mais de 80% dos brasileiros que precisam de cuidado em saúde mental nunca chegam a um especialista**. A principal barreira não é a falta de serviços — o SUS (Sistema Único de Saúde) opera centros CAPS (Centros de Atenção Psicossocial) em todo o país — mas a opacidade do sistema: os cidadãos não sabem o que está disponível, onde fica, como agendar ou o que esperar na primeira consulta.

O projeto foi desenvolvido em parceria com uma organização de saúde pública com o objetivo de reduzir o abandono logo no início da jornada de cuidado.

---

## Restrições e Stakeholders

**Stakeholders envolvidos:**
- Coordenadores municipais de CAPS
- Psicólogos e assistentes sociais
- Usuários em situação de vulnerabilidade psicossocial
- Equipe técnica do sistema de saúde digital

**Principais restrições:**
- Conformidade total com a LGPD em todas as telas que coletam dados sensíveis de saúde
- Acessibilidade obrigatória: parcela significativa dos usuários acessa via dispositivos Android de entrada com 3G
- Nenhuma tela real de paciente poderia ser publicada (NDA ativo)
- Prazo fixo de 12 semanas para o MVP navegável

---

<img src="/images/work/harmonymind/cover.png" alt="HarmonyMind — telas do app em dispositivo móvel" />

## Processo de Pesquisa

Conduzimos **14 entrevistas em profundidade** com usuários que haviam abandonado uma tentativa de agendamento em algum momento. Os padrões foram consistentes:

> "Fui no site da prefeitura, mas não entendi nada. Desisti."

> "Encontrei um telefone, mas tocou vinte vezes e ninguém atendeu."

**Mapa de fricção identificado:**

1. **Descoberta** — os usuários não sabiam que existiam serviços gratuitos
2. **Navegação** — o portal municipal misturava CAPS com unidades de emergência e clínicas gerais sem distinção
3. **Agendamento** — o único canal era por telefone, com altas taxas de abandono
4. **Preparação** — os usuários não sabiam o que levar ou o que esperar, gerando faltas

A pesquisa também revelou um insight crítico de design: **usuários com ansiedade severa relataram abandonar tentativas de agendamento no meio de formulários longos com muitos campos obrigatórios**. O formulário existente tinha 22 campos.

---

<img src="/images/work/harmonymind/mockup.png" alt="HarmonyMind — mockup final em dispositivo" />

## A Decisão Mais Difícil

O debate interno mais intenso foi sobre **progressividade do formulário no fluxo de agendamento**.

A equipe de saúde queria capturar todos os dados clínicos antes da primeira consulta — compreensível do ponto de vista clínico. O usuário, por outro lado, estava em estado emocional vulnerável, com baixa tolerância à fricção.

A decisão foi dividir o processo em **dois momentos**:

1. **Agendamento imediato (3 campos):** nome, telefone de confirmação, serviço necessário
2. **Formulário clínico completo (enviado por mensagem após confirmação do agendamento)**

Essa abordagem reduziu o abandono no fluxo de agendamento em **62% nos testes de usabilidade** em comparação com o formulário original.

O argumento que encerrou a discussão com os stakeholders clínicos: "Um formulário de 22 campos que os usuários abandonam captura zero dados. Um formulário de 3 campos que eles completam captura o suficiente para o primeiro contato."

---

<img src="/images/work/harmonymind/wireframes.png" alt="HarmonyMind — wireframes de baixa fidelidade para o fluxo de agendamento" />

## Solução Final

A interface entregue priorizou três princípios:

**1. Localização clara antes de qualquer ação**
Mapa integrado com filtros por tipo de serviço, acessibilidade física e disponibilidade. Sem login obrigatório para buscar.

**2. Formulário de agendamento progressivo**
Fluxo em três etapas com indicador de progresso visível. Campos de dados sensíveis rotulados com explicação do motivo da coleta da informação.

**3. Preparação para a consulta**
Tela de confirmação com checklist do que levar, o que esperar e contato direto com a unidade — reduzindo faltas causadas por falta de informação.

<img src="/images/work/harmonymind/desktop-map.png" alt="HarmonyMind — mapa de serviços CAPS com filtros" />

<img src="/images/work/harmonymind/desktop-booking.png" alt="HarmonyMind — fluxo de agendamento progressivo em 3 etapas" />

**Acessibilidade entregue:**
- Contraste mínimo de 4,5:1 em todos os elementos de texto (WCAG AA)
- Suporte completo à navegação por teclado
- Texto alternativo em todas as imagens funcionais
- Formulários com rótulos explícitos e mensagens de erro descritivas

---

<img src="/images/work/harmonymind/screens.png" alt="HarmonyMind — conjunto completo de telas de alta fidelidade do app" />

<img src="/images/work/harmonymind/final-screens.png" alt="HarmonyMind — telas finais de UI ao longo da jornada completa do usuário" />

## Resultado Mensurável

Após o lançamento do MVP em dois municípios piloto:

- **62%** de redução na taxa de abandono no fluxo de agendamento
- **+38%** de agendamentos concluídos na primeira visita
- **Pontuação de satisfação (CSAT):** 4,3/5 em 89 respostas nas primeiras 6 semanas
- Tempo médio de agendamento: de 11 minutos para **3 minutos e 40 segundos**

O projeto foi apresentado no Fórum de Inovação em Saúde Digital e está em expansão para municípios adicionais.

---
title: "Digital Key"
tagline: "Abstraindo a complexidade da blockchain para tornar a mobilidade urbana acessível a todos"
year: 2025
area: "Design de Produto"
cover: "/images/work/digital-key/app-mockup.png"
order: 1
slug: "digital-key"
locale: "pt"
---

## Visão geral

O problema: o processo de compra de uma "chave digital" (NFT) para acessar um serviço autônomo de mobilidade urbana era excessivamente complexo e inacessível para usuários sem conhecimento em Web3. Terminologia de blockchain, criação de carteiras e transações com criptomoedas funcionavam como uma barreira significativa de entrada, prejudicando a conversão de clientes e limitando o crescimento.

**Ferramentas utilizadas:** Figma · Notion · Miro · Google Suite

---

## O Problema

### Usuários afetados

- Pessoas que querem usar o clube de mobilidade urbana, mas não entendem Web3 ou cripto
- Executivos e viajantes frequentes que buscam transporte conveniente, mas são desencorajados pelo jargão técnico
- Proprietários de chaves digitais que querem revender ou alugar, mas enfrentam um processo complicado

**Impacto no negócio:** Baixa aquisição de clientes, alcance de mercado limitado e percepção do produto como excessivamente nichado.

---

## Pesquisa e Insights

### Público-alvo

O público principal são executivos e viajantes frequentes — tipicamente homens de 18 a 44 anos, com alta renda. Um insight crítico: **apenas 16% desse grupo já comprou criptomoeda**. Isso estabeleceu imediatamente o princípio de evitar jargão Web3 e projetar como se a blockchain não existisse do ponto de vista do usuário.

<img src="/images/work/digital-key/csd-matrix.png" alt="Matriz CSD — Certezas, Suposições e Dúvidas para o projeto Digital Key" class="invert" />

### Matriz CSD

**Certezas:**
- Os usuários consideram o processo atual de compra de NFT complexo
- A ausência de opções de pagamento tradicionais é uma barreira
- Simplificar o processo aumentará a adoção
- A maioria dos usuários não entende blockchain ou cripto

**Suposições:**
- Uma solução white-label integrada ao app parecerá nativa
- Os usuários confiarão em um processo simplificado se houver sinais de segurança
- Renomear "NFT" para "VIP Key" aumentará significativamente a aceitação
- Vídeos explicativos curtos reduzirão a confusão em etapas-chave

**Dúvidas:**
- Como os usuários reagirão a uma "chave digital" versus um modelo de assinatura tradicional?
- Quais são os pontos específicos de abandono no fluxo atual?
- Qual é o posicionamento e a duração ideais para o conteúdo explicativo?

---

<img src="/images/work/digital-key/benchmarking.png" alt="Benchmarking competitivo — fluxos existentes de compra de NFT e mobilidade urbana" class="invert" />

## Processo de Design: Double Diamond

<img src="/images/work/digital-key/double-diamond.png" alt="Processo de design Double Diamond — Descobrir, Definir, Desenvolver, Entregar" class="invert" />

**Descobrir**
Mapeamos barreiras e pontos de fricção na jornada existente do usuário. Identificamos "dificuldade de pagamento" e "complexidade no processo de aquisição da chave digital" como os dois principais pontos de dor.

**Definir**
Identificamos o desafio central de design: *Simplificar o processo de compra da chave digital para que qualquer usuário — independentemente do conhecimento técnico — possa concluí-lo usando métodos de pagamento familiares.*

**Desenvolver**
Brainstorming de soluções focadas em: compra simplificada via cartão de crédito/débito/Pix, criação automática de carteira e abstração completa das etapas de blockchain. Iniciamos a prototipagem e validação de conceitos iniciais.

**Entregar**
Implementamos uma experiência otimizada em que o usuário adquire a chave digital de forma simples, sem precisar entender Web3. A criação da carteira é tratada automaticamente por meio de uma integração white-label (ex.: MoonPay). O usuário nunca vê blockchain — ele vê um fluxo de compra.

---

<img src="/images/work/digital-key/flow-diagram.png" alt="Fluxo de compra redesenhado — aquisição simplificada da VIP Key em 3 etapas" class="invert" />

## Principais Decisões de Design

### Renomear "NFT" → "VIP Key"
A mudança de terminologia foi uma das decisões de maior impacto do projeto. "NFT" carrega conotações de complexidade, especulação e exclusividade no sentido errado. "VIP Key" é intuitivo, aspiracional e autoexplicativo no contexto de um serviço de mobilidade urbana.

### Abstraindo a Carteira
Em vez de exigir que os usuários criem e gerenciem uma carteira cripto — um processo de várias etapas com alto abandono — automatizamos completamente a criação da carteira nos bastidores. O usuário conclui um pagamento padrão; o sistema cuida do resto.

### Pagamento Tradicional em Primeiro Lugar
Pix e cartão de crédito/débito foram posicionados como os métodos de pagamento principais e padrão. O pagamento com cripto estava disponível, mas visualmente despriorizado. Isso inverteu a hierarquia implícita do produto original.

### Sinais de Segurança em Vez de Explicação Técnica
Em vez de explicar como a blockchain funciona, o design focou em comunicar *que* a transação é segura — por meio de indicadores de confiança familiares (selos SSL, comprovantes de transação, emblemas verificados) em vez de documentação técnica.

---

<img src="/images/work/digital-key/iphone-pro.png" alt="Digital Key — UI de alta fidelidade no iPhone 16 Pro" />

<img src="/images/work/digital-key/iphone-15.png" alt="Digital Key — tela de confirmação de compra no iPhone 15" />

## Proposta de Valor

| Antes | Depois |
|---|---|
| Comprar um NFT com uma carteira cripto | Comprar uma VIP Key com seu cartão ou Pix |
| Exige conhecimento de blockchain | Nenhum conhecimento técnico necessário |
| Criação manual de carteira | Carteira automática, invisível para o usuário |
| Fluxo complexo com várias etapas | Fluxo de compra simplificado |
| Direcionado a usuários Web3 | Acessível a qualquer usuário |

---

<img src="/images/work/digital-key/iphone-16.png" alt="Digital Key — fluxo completo de compra da VIP Key no iPhone 16" />

## Próximos Passos

- Desenvolver um protótipo funcional para testes de usabilidade com o público-alvo
- Realizar testes de segurança com instituições especializadas em criptografia bancária
- Testar A/B terminologia e elementos de UI para otimizar clareza e conversão
- Conduzir testes de usabilidade com executivos e viajantes frequentes
- Iterar com base nos achados antes do lançamento completo em produção

<img src="/images/work/digital-key/elisyum-mark.png" alt="Marca do logo Elisyum" class="invert" />

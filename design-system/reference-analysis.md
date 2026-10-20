# Análise de referência — RED Digital Cinema

Fonte: reddigitalcinema.com, inspecionado em 20/10/2026 pelo CSS computado no navegador.
Páginas: home (`/`), produto (`/komodo-x`) e institucional (`/power-of-red`), em 1440×900 e 390×844.

Objetivo: extrair a **linguagem visual** como referência. Nenhum asset, logo, fonte proprietária ou texto da RED é reaproveitado.

---

## 1. Paleta

O site é praticamente monocromático: preto absoluto, branco puro e um único vermelho escuro usado com moderação. Os cinzas aparecem quase só como texto secundário e superfície.

| Papel | Valor observado | Onde aparece |
|---|---|---|
| Fundo da página | `#000000` | `#layout`, seções, footer e header |
| Fundo alternativo (gradiente) | `#000000 → #222222 (70%) → #000000` | Seção "Camera Systems" (`.hp-content .cameras`) |
| Superfície translúcida | `rgba(255,255,255,.10)` | Seção de especificações técnicas |
| Superfície de menu | `rgba(20,20,20,.96)` | Submenu do header |
| Superfície de overlay | `rgba(15,15,15,.75)`, `rgba(0,0,0,.70)` | Overlays e modais |
| Cabeçalho de tabela | `#666666` com texto `#000000` | Linhas de grupo nas specs |
| Texto primário | `#FFFFFF` | ~95% do texto |
| Texto secundário | `#999999`, `#9E9E9E` | Placeholders e metadados |
| Texto desativado/inativo | `rgba(255,255,255,.50)`, `#707070` | Abas inativas e modelos não selecionados |
| Bordas | `1px solid #FFFFFF`; `1px solid rgba(255,255,255,.50)` | Botões e inputs |
| **Acento** | `#990000` | Botão sólido "BUY NOW", títulos de submenu, item ativo |
| Acento hover | `#A70202` | Hover dos links do menu principal |
| Fundo de botão ghost | `rgba(0,0,0,.10)` | Botões outline sobre imagem |

**Estados**
- **Hover em botão outline:** inverte para fundo `#FFF` com texto `#000` (`transition: background-color .1s ease-in-out`).
- **Hover em link do menu:** muda a cor para `#A70202` (`color .3s ease-in-out`).
- **Hover em link de texto:** tira o sublinhado (os links começam sublinhados).
- **Inativo / disabled:** branco a 50% de opacidade.
- **Foco:** o site **não** define um estilo de foco próprio. É uma lacuna que **não** vamos copiar.

**Acessibilidade:** `#990000` sobre preto tem contraste **2,35:1**, o que reprova no AA para texto. A RED usa esse vermelho como texto no menu, o que é um problema de contraste. Como **preenchimento** com texto branco por cima, o contraste é 8,92:1 e passa.

## 2. Tipografia

| Família | Uso | Disponibilidade |
|---|---|---|
| **Barlow** (400, 500, 600, 700) | Corpo, nav, botões, links e metadados | Google Fonts (gratuita) |
| **RDC BOLD** / **RDC BOLD X** | Títulos de seção e de produto, sempre em caixa alta. A versão "X" é expandida. | **Proprietária da RED, não usar** |

**Alternativa ao RDC BOLD:** **Archivo** no eixo `wdth 125` com peso 800–900 (Google Fonts, variável), que dá um grotesco expandido e pesado bem próximo. Uma segunda opção é **Archivo Black**, que é mais estreita.

**Escala observada** (desktop → mobile)

| Nível | Família | Tamanho | Line-height | Peso | Tracking | Caixa |
|---|---|---|---|---|---|---|
| Display hero (h1) | display | `clamp(40px, 5vw, 75px)` | 1.0 | 900 | normal | alta |
| Display de seção (contorno) | display | 65–67px | 1.0 | 400 (fonte já pesada) | normal | alta, `-webkit-text-stroke: 2px #fff` e preenchimento quase transparente |
| H2 seção | display | 42px → 28px | 1.2 | — | normal | alta |
| H2 card | display | 26px → 18px | 1.2 | — | normal | alta |
| H3 produto | display | 20px | 1.2 | — | normal | alta |
| Lead | Barlow | `clamp(16px, 1.333vw, 20px)` / 17px | 1.6 | 500 | normal | normal |
| Corpo | Barlow | 14–15px | 1.6–1.67 (23–24px) | 400 | 0.21px | normal |
| Nav | Barlow | 15–16px | — | 500 | **1.5px** | alta |
| Link do footer | Barlow | 17px | 1.19 | 500 | 0.85px (0.05em) | alta |
| Botão | Barlow | 14–19px | 2em (botão ghost) | 400–500 | normal | alta |
| Legal/caption | Barlow | 13px | 1.19 | 400–500 | normal | normal |

**Padrões:** os títulos ficam sempre em caixa alta e na fonte display. O corpo fica sempre em caixa normal e com tamanho pequeno. Nav, botões e links levam tracking aberto de **1,5px (~0,1em)**. Uma assinatura forte do site é sobrepor um título sólido pequeno a um título enorme só em contorno, na mesma posição.

## 3. Espaçamento e grid

- **Container:** o conteúdo vai de borda a borda. As seções de produto usam `max-width: 1440px` centralizado, e os blocos de texto ficam limitados a `max-width: 850px` com `padding: 0 2em`.
- **Gutter lateral:** **16px** no mobile (`padding: 0 16px`) e **20px** no desktop (header, specs).
- **Ritmo vertical:** as seções de produto têm **altura de viewport** (`900px` = `100vh`), e o hero tem `calc(100vh - 80px)`. Seções de conteúdo usam `padding: 5em 0` (~80px).
- **Unidade base:** **4/8px**. Valores recorrentes: 4, 8, 10, 12, 16, 20, 28, 40, 48, 80px.
- **Grid de produto:** 4 colunas a partir de 1440px, 2 colunas entre 900 e 1440px e 1 coluna abaixo de 900px, com `row-gap: 1em` e tiles centralizados.
- **Grid de destaques:** 3 colunas iguais, sem gap, viram 1 coluna abaixo de 960px.
- **Breakpoints:** 360, 480, 768, 1024, 1200, 1440px (mais 900 e 960 em componentes específicos).

## 4. Componentes

### Header / nav
- Barra **preta sólida de 80px**, com logo à esquerda, links no centro e ícones à direita.
- Links: Barlow 16px, peso 500, caixa alta, tracking 1,5px, `padding: 25px 40px`, **separados por barras verticais finas**. Hover em vermelho.
- Submenu: painel `rgba(20,20,20,.96)` com títulos em vermelho, Barlow 21px bold.
- **Mobile:** 80px com logo e ícones (carrinho, busca, hambúrguer).
- **Subnav de produto (sticky):** barra de 48px com o nome do produto, abas em cinza `#707070` (14px; a ativa em vermelho) e um botão sólido vermelho à direita.

### Hero
- Slider de largura total com `height: calc(100vh - 80px)`, imagem de fundo `cover` e conteúdo centralizado ou alinhado à direita (largura de 50–60%).
- Pontos de paginação (círculos) embaixo e um chevron de "scroll down" com 67% de opacidade (100% no hover).
- **Mobile:** a imagem vai para o topo (`background-size: 100%`) e o texto fica embaixo sobre o preto, centralizado.

### Botões (raio **0** em todos)
| Variante | Estilo | Estados |
|---|---|---|
| **Primário (sólido)** | Fundo `#990000`, texto branco, 18px/600, altura 36px, `padding: 0 18px` | — |
| **Secundário (outline)** | `1px solid #fff`, fundo `rgba(0,0,0,.1)`, texto branco em caixa alta, `min-width: 12.5em`, `line-height: 2em`, `padding: 0 1em` | Hover: fundo branco e texto preto em 100ms |
| **Ghost / link** | Texto em caixa alta, 16px, **sublinhado** | Hover: sem sublinhado, `.25s cubic-out` |

### Cards / tiles
- **Tile de produto:** sem caixa, borda ou sombra. Imagem centralizada, título display de 20px, descrição de 15/24px com `max-width: 350px` e links "BUY / LEARN" sublinhados.
- **Tile de destaque (bottom touts):** vídeo `object-fit: cover` com gradiente `transparent → rgba(0,0,0,.3) 20% → rgba(0,0,0,.75) 75%` e o texto embaixo. No hover, o gradiente encolhe para 25% (`scaleY`) e o texto sobe, revelando o link.

### Seções de destaque
- Painéis com altura de viewport, foto em largura total e título gigante em contorno com um rótulo sólido por cima.
- Navegação lateral fixa à esquerda com traços verticais que indicam a seção atual (transição de `border-color` em 150ms).

### Footer
- Fundo preto com `padding: 45px 0 100px` e tudo centralizado.
- Newsletter em linha: rótulo, input e botão "SUBMIT", com input de 34px, borda branca, raio 0 e placeholder `#999` em caixa alta.
- Links em caixa alta (17px, 500, tracking 0,05em) separados por pontos.
- Ícones sociais em linha, copyright de 13px e a marca da empresa-mãe no rodapé.

### Links e inputs
- Links de conteúdo começam sublinhados e perdem o sublinhado no hover.
- Inputs com raio 0, borda branca ou branca a 50% e fundo transparente. A busca do header é a exceção, com raio de 3px e 48px de altura.

## 5. Imagem e mídia
- Mídia de **largura total** em praticamente todas as seções, sem molduras nem cantos arredondados.
- **Fotografia escura e de alto contraste** (produto em fundo preto, sets de filmagem).
- **Vídeo em loop** de fundo no hero institucional, com `object-fit: cover`.
- **Overlays:** gradiente vertical para preto embaixo dos textos; gradiente radial `rgba(0,0,0,.83) → transparente` atrás de logos sobre imagem; e `text-shadow: 0 1px 12px rgba(0,0,0,.5)` no texto sobre vídeo.
- **Proporções:** hero em viewport, destaques em 16:9 (`56.25vw`), carrossel em `41.667vw` (~2,4:1), e imagens secundárias com 47% de opacidade quando inativas.
- **Ticker horizontal** de pôsteres de filmes rolando continuamente (200s por ciclo).

## 6. Motion
O site define um conjunto completo de easings (`--ease-*`). Os que aparecem mais:

| Uso | Duração | Easing |
|---|---|---|
| Cor de link e menu | 300ms | `ease-in-out` |
| Links de conteúdo | 250ms | `cubic-bezier(.33,1,.68,1)` (cubic-out) |
| Micro-interações | 175ms | `cubic-bezier(.22,1,.36,1)` (quint-out) |
| Revelar tile / cubo 3D | 333ms | `cubic-bezier(.65,0,.35,1)` (cubic-in-out), entrada em expo-out `(.16,1,.3,1)` |
| Hover de botão outline | 100ms | `ease-in-out` |
| Nav lateral | 150ms | `ease-in-out` |

- **Hover:** inversão de cor, gradiente que encolhe e conteúdo que sobe. Sem `scale` em botões.
- **Scroll:** troca de seção pela nav lateral, carrossel arrastável (Embla) e ticker contínuo.
- **Reduced motion:** **nenhuma** regra de `prefers-reduced-motion` no site. É outra lacuna que **não** vamos copiar.

## 7. Princípios gerais
1. **Preto absoluto como palco.** A imagem é a única fonte de cor, e a interface quase desaparece.
2. **Contraste extremo:** branco puro sobre preto puro, sem tons médios na interface.
3. **Um único acento, usado pouco:** o vermelho só aparece em ação de compra, item ativo e títulos de submenu.
4. **Geometria reta:** raio 0 e bordas de 1px. Sem sombras visíveis na interface (só nos widgets de terceiros).
5. **Tipografia industrial:** display expandido e pesado em caixa alta, combinado com um grotesco neutro e pequeno no corpo.
6. **Densidade baixa nas seções de marketing e alta nas specs:** uma ideia por tela; a informação densa fica numa tabela à parte.
7. **Espaço negativo vertical:** seções com altura de viewport e muito preto em volta do conteúdo.
8. **Hierarquia por escala**, não por cor: títulos de 65px contra corpo de 14px.

## 8. O que **não** levar
- Logo, wordmark, fontes RDC, ícones, fotos, vídeos e textos da RED.
- Vermelho `#990000` como cor de **texto** sobre preto (2,35:1, reprova AA).
- A falta de estilo de foco e de suporte a `prefers-reduced-motion`.
- A faixa diagonal listrada do banner de avisos, que é um elemento muito específico deles.

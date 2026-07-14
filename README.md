# Animoos — Site institucional

Landing page institucional da Animoos, fornecedora de gelo tradicional e saborizado para bares, restaurantes, adegas, hotéis e eventos em Campos do Jordão-SP. Posicionamento: parceira operacional que garante continuidade do negócio, não uma distribuidora de commodity.

## Stack

HTML + CSS + JavaScript puros, sem build step. Abra `index.html` diretamente ou sirva a pasta com qualquer servidor estático:

```bash
python3 -m http.server 8000
```

## Como o design foi definido

- **Skill `ui-ux-pro-max`** (`.claude/skills/ui-ux-pro-max`): usada para pesquisar estilo (Trust & Authority + Social Proof) e estrutura de landing page (Hero → Prova → Solução → CTA) adequados a um serviço B2B de confiança/logística.
- **MCP 21st.dev**: usado via `search` para levantar referências de hero e seções de estatísticas/prova social antes de escrever o HTML/CSS à mão (stack final é HTML/CSS/JS puro, não React/shadcn).
- **Identidade visual oficial da Animoos**: aplicada por cima da recomendação inicial da skill — paleta verde (`Verde Chá #00FF6B`, `Verde Meso #09BF21`, `Preto #191A1E`, `Cinza Meso #C0C6C9`, `Neve #E9EFF2`) e tipografia (Archivo Expanded para títulos, Work Sans para texto corrido). Logos reais em `assets/logo/`.

Os tokens de design (cores, tipografia, espaçamento, raio) estão centralizados em `:root` no topo de `css/style.css`.

### Ajuste de acessibilidade sobre a paleta

O verde da marca (`#00FF6B` / `#09BF21`) não passa no contraste mínimo do WCAG como texto branco sobre fundo claro, nem como texto branco sobre o próprio verde. Para manter a identidade sem perder legibilidade:
- Botões/preenchimentos verdes usam **texto preto** (`--color-accent-foreground: #191A1E`), não branco.
- Texto/ícones verdes sobre fundo claro (eyebrows, links, badges) usam uma variação mais escura do verde (`--color-accent-text: #0B7A1E`), só o verde puro da marca é usado sobre fundos escuros/pretos, onde o contraste é excelente.

### Tipografia "Expanded"

"Archivo Expanded" não existe como família separada no Google Fonts — é a família variável `Archivo` no eixo de largura (`wdth`) expandido a 125%, carregada via `family=Archivo:wdth,wght@125,...`. Aplicado com `font-stretch: expanded` nos elementos de título/destaque.

### Logos (`assets/logo/`)

- `Logo-Animoos-004.png` — horizontal, preto (usado no header/menu, fundo claro)
- `Logo-Animoos-008.png` — horizontal, branco (usado no rodapé, fundo escuro)
- `Logo-Animoos-000.png` / `001.png` — versão empilhada, verde (não usada no site atual, disponível para outras aplicações)
- `Logo-Animoos-007.png` — ícone isolado, preto, alta resolução (fonte do favicon)
- `icon-white.png`, `icon-black.png`, `favicon.png` — variantes derivadas do ícone isolado (máscara alfa de `007`) para uso em fundos escuros e como favicon

## Placeholders que ainda precisam ser substituídos antes do lançamento

- **WhatsApp**: número `5512999999999` usado nos links `wa.me` (hero, CTA final, botão flutuante) e em `js/main.js` (`WHATSAPP_NUMBER`).
- **Telefone**: `(12) 99999-9999` no CTA final e no rodapé.
- **E-mail**: `contato@animoos.com.br` no rodapé.
- **Instagram**: link `#` no rodapé — adicionar a URL real do perfil.
- **Imagens/fotografia**: o site atual é 100% sem fotografia (usa apenas ícones e gradientes) para não depender de assets que não temos. Adicionar fotos reais do estoque, entregas e produtos deixa o site mais forte.
- **Formulário de contato**: não há backend — o envio monta uma mensagem e abre o WhatsApp com o texto preenchido. Se quiser também receber por e-mail/CRM, será necessário integrar um serviço de formulário (ex: Formspree) ou backend próprio.

## Estrutura

```
index.html        Marcação semântica de todas as seções
css/style.css      Design tokens + estilos
js/main.js         Menu mobile, animações de entrada, contador, integração WhatsApp
assets/logo/        Arquivos de logo da marca
```

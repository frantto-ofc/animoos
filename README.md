# Animoos — Site institucional

Landing page institucional da Animoos, fornecedora de gelo tradicional e saborizado para bares, restaurantes, adegas, hotéis e eventos em Campos do Jordão-SP. Posicionamento: parceira operacional que garante continuidade do negócio, não uma distribuidora de commodity.

## Stack

HTML + CSS + JavaScript puros, sem build step. Abra `index.html` diretamente ou sirva a pasta com qualquer servidor estático:

```bash
python3 -m http.server 8000
```

## Como o design foi definido

- **Skill `ui-ux-pro-max`** (`.claude/skills/ui-ux-pro-max`): usada para pesquisar estilo (Trust & Authority + Social Proof), paleta de cores (B2B Service — navy `#0F172A` + azul `#2563EB`), tipografia (Lexend + Source Sans 3) e estrutura de landing page (Hero → Prova → Solução → CTA) adequados a um serviço B2B de confiança/logística.
- **MCP 21st.dev**: usado via `search` para levantar referências de hero e seções de estatísticas/prova social antes de escrever o HTML/CSS à mão (stack final é HTML/CSS/JS puro, não React/shadcn).

Os tokens de design (cores, tipografia, espaçamento, raio) estão centralizados em `:root` no topo de `css/style.css` — trocar a identidade visual oficial da marca é uma questão de editar essas variáveis.

## Placeholders que precisam ser substituídos antes do lançamento

Buscados no site (`index.html`) e marcados com dados de exemplo:

- **WhatsApp**: número `5512999999999` usado nos links `wa.me` (hero, CTA final, botão flutuante) e em `js/main.js` (`WHATSAPP_NUMBER`).
- **Telefone**: `(12) 99999-9999` no CTA final e no rodapé.
- **E-mail**: `contato@animoos.com.br` no rodapé.
- **Instagram**: link `#` no rodapé — adicionar a URL real do perfil.
- **Identidade visual oficial**: paleta/tipografia atuais foram definidas com o `ui-ux-pro-max` na ausência da identidade oficial da marca (o link fornecido, frantto.space, não pôde ser acessado neste ambiente por política de rede). Ajustar as variáveis em `css/style.css` quando a identidade oficial (logo, cores exatas, fontes) estiver disponível.
- **Imagens/fotografia**: o site atual é 100% sem fotografia (usa apenas ícones e gradientes) para não depender de assets que não temos. Adicionar fotos reais do estoque, entregas e produtos deixa o site mais forte.
- **Formulário de contato**: não há backend — o envio monta uma mensagem e abre o WhatsApp com o texto preenchido. Se quiser also receber por e-mail/CRM, será necessário integrar um serviço de formulário (ex: Formspree) ou backend próprio.

## Estrutura

```
index.html      Marcação semântica de todas as seções
css/style.css    Design tokens + estilos
js/main.js       Menu mobile, animações de entrada, contador, integração WhatsApp
```

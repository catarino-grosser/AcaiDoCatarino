# Açaí do Catarino — site

Site de uma página só, feito em HTML/CSS/JS puro (sem framework, sem
processo de build). Funciona direto no GitHub + Netlify, do jeito que
você já usa.

## Arquivos

- `index.html` — todo o conteúdo e a estrutura do site
- `style.css` — todo o visual (cores, fontes, layout)
- `script.js` — menu do celular e pequenos efeitos
- `README.md` — este guia

## O que já está atualizado

- WhatsApp: `5548988662824` (em todos os botões)
- Cardápio com os tamanhos, preços e acompanhamentos reais
- Instagram foi removido do rodapé (o carrinho ainda não tem)

## O que falta editar

Procure por `EDITAR` dentro do `index.html` — restam 3 pontos:

1. Texto sobre o Catarino (seção "O Catarino")
2. Ponto exato do carrinho na praia (seção "Onde estamos")
3. Horário de funcionamento (seção "Onde estamos")

Se um dia o Catarino abrir um Instagram, é só me chamar que eu
devolvo o link no rodapé.

## Como publicar pelo celular (SPCK Editor + GitHub + Netlify)

1. **Crie o repositório no GitHub**
   - No app ou site do GitHub, crie um repositório novo, por exemplo
     `acai-do-catarino`.
   - Marque como público (o Netlify grátis funciona com repositório
     público ou privado, tanto faz).

2. **Coloque os 3 arquivos no repositório**
   - No SPCK Editor, clone esse repositório (ou crie os arquivos
     `index.html`, `style.css` e `script.js` direto nele) e cole o
     conteúdo de cada um.
   - Dê commit e push direto pelo SPCK (ele tem integração com Git).

3. **Conecte o repositório ao Netlify**
   - Entre em [app.netlify.com](https://app.netlify.com) → **Add new
     site** → **Import an existing project** → escolha GitHub e
     autorize o acesso.
   - Selecione o repositório `acai-do-catarino`.
   - Em **Build settings**, deixe:
     - Build command: (vazio)
     - Publish directory: `/`
   - Clique em **Deploy site**.

4. **Pronto**
   - O Netlify te dá um link tipo `acai-do-catarino.netlify.app`.
   - Toda vez que você der push de uma alteração no GitHub (mesmo
     pelo celular), o Netlify publica a versão nova sozinho, em
     menos de um minuto.

5. **Domínio próprio (opcional, depois)**
   - Se um dia quiser algo como `acaidocatarino.com.br`, é em
     **Site settings → Domain management** dentro do próprio Netlify.

## Trocar as fotos depois

O site hoje usa uma ilustração desenhada em SVG no lugar de foto (pra
não depender de imagem nenhuma pra já ir no ar). Quando você tiver
fotos boas do carrinho e da praia, me chame de novo que eu ajudo a
encaixar uma galeria de fotos reais no lugar.

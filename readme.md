# 🎲 Sorteador de Números

Este é um projeto simples e funcional de um **sorteador de números aleatórios** entre 00 e 99. Criado com foco em praticidade, visual moderno e código organizado, o sorteador oferece uma experiência rápida e intuitiva ao usuário.

## 🧩 Tecnologias utilizadas

- **HTML5** — estrutura semântica e limpa.
- **CSS3** — estilização moderna e responsiva.
- **JavaScript** — lógica de sorteio e formatação dos números.

## 📸 Visual

A interface conta com dois principais blocos:

- À esquerda: descrição do sorteador, explicações e identidade visual.
- À direita: exibição do resultado e botão para sortear novamente.

## 🎯 Funcionalidades

- Geração de 2 números aleatórios (entre 0 e 99).
- Formatação para exibir sempre com dois dígitos (ex: 01 98).
- Estilo responsivo e centralizado para boa visualização.
- Possibilidade de repetir o sorteio quantas vezes quiser.

## 🗂 Estrutura de pastas

📁 projeto-sorteador │ ├── index.html # Estrutura da página ├── style.css # Estilos personalizados ├── script.js # Lógica de sorteio └── img/ ├── logo.png ├── Shapes.png ├── Frame.png └── Vector (Stroke).png

## 💡 Como utilizar

1. Clone ou baixe este repositório.
2. Garanta que a pasta `img` esteja no mesmo nível dos arquivos HTML, CSS e JS.
3. Abra o `index.html` no seu navegador.
4. Clique em **"Sortear novamente"** e divirta-se!

## 📌 Observações

- O sorteio é feito usando `Math.random()` e arredondamento com `Math.floor()`.
- O número é sempre formatado com `padStart` para garantir dois dígitos.
- O layout é construído com **CSS Grid** para manter o conteúdo alinhado.

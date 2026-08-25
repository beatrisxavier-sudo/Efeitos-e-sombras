# 🚀 DevFeed — Cartões Interativos com Hover, Modo Escuro e Sistema de Curtidas

Uma interface moderna de feed de postagens desenvolvida com **HTML5**, **CSS3 Avançado** e **JavaScript ES6+**. O projeto conta com efeitos de elevação em `:hover`, suporte completo ao modo escuro com persistência, sistema de curtidas animado e filtragem dinâmica de tópicos.

---

## 🎨 Funcionalidades

- **Efeito Hover Premium (`:hover`)**:
  - Ampliação leve com `transform: translateY(-6px) scale(1.02)`.
  - Transição de bordas e sombra com efeito de brilho suave (*glow*).
- **Modo Escuro com Iluminação Neon**:
  - Alternância de tema com ajuste de sombras para tom de azul brilhante/neon.
  - Salva a preferência do usuário no `localStorage`.
- **Sistema de Curtidas Interativo**:
  - Botões de curtir independentes por cartão.
  - Animação no estilo *Heartbeat* (pulso) ao curtir/descurtir.
  - Incremento e decremento dinâmico do contador.
- **Filtragem por Tags**:
  - Filtro em tempo real de cards por categorias (`Frontend`, `CSS3`, `JavaScript`).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica (`<header>`, `<main>`, `<article>`).
- **CSS3**:
  - Variáveis CSS (`:root` e `body.dark-mode`).
  - Keyframes e animação `@keyframes heartbeat`.
  - Propriedades de elevação `box-shadow` e `transform`.
- **JavaScript (Vanilla)**: Manipulação DOM, eventos de clique e `localStorage`.
- **Lucide Icons**: Biblioteca de ícones vetoriais leves.

---

## 📂 Como Executar O Projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/devfeed-interativo.git](https://github.com/seu-usuario/devfeed-interativo.git)

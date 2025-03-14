# Trivia

Este é um aplicativo de quiz interativo desenvolvido em React. Ele permite que os usuários sorteiam categorias, escolham perguntas baseadas na dificuldade e respondam dentro de um tempo específico.

## Funcionalidades

- **Roda de Categorias**: Uma animação de roda que permite ao usuário selecionar uma categoria de perguntas.
- **Lista de Perguntas**: Exibe perguntas filtradas por nível de dificuldade (Fácil, Médio, Difícil).
- **Perguntas Individuais**: Mostra uma pergunta com um temporizador e uma animação de fundo.
- **Transições Suaves**: Animações de transição entre páginas usando `framer-motion`.
- **Responsivo**: Design adaptável para diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **Framer Motion**: Biblioteca para animações e transições.
- **CSS/SCSS**: Estilização do aplicativo.
- **React Router**: Navegação entre páginas no aplicativo.
- **SVG**: Elementos gráficos vetoriais para animações de fundo.

## Como Executar o Projeto

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Passos para Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
2. **Instale as dependências**:
   ```bash
   npm install
3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
4. **Acesse o aplicativo**:
   Abra o navegador e acesse http://localhost:3000.

### Estrutura do Projeto
  ```bash
  src/
  ├── components/          # Componentes reutilizáveis
  │   ├── CategoryWheel.js # Roda de seleção de categorias
  │   ├── QuestionList.js  # Lista de perguntas por categoria
  │   ├── Question.js      # Tela de pergunta individual
  ├── utils/               # Dados e utilitários
  │   ├── Questions.js     # Banco de dados de perguntas
  │   ├── App.scss         # Estilos globais
  ├── App.js               # Componente principal
  ├── index.js             # Ponto de entrada do aplicativo
  public/
  ├── images/              # Imagens e SVGs
  ├── index.html           # Template HTML
  ```
### Personalização

1. **Para adicionar mais perguntas, edite o arquivo src/utils/Questions.js. O formato das perguntas é**:
   ```javascript
   { level: "1", question: "Pergunta?", answer: "Resposta" }
2. **Alterar Animações**:
   As animações são controladas pelo framer-motion. Para alterá-las, edite as propriedades pageVariants e pageTransition no arquivo App.js.

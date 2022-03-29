# Projeto 2: O Inimigo agora é outro

[Proposta](https://drive.google.com/file/d/103lmaiM0H3XMy8mB7EBKlL17CBfzB4Ho/view?usp=sharing) | [Site Atual](https://youtu.be/Yw6u6YkTgQ4) | [Versão de Testes](https://youtu.be/MaNW4bPX0Iw) | [Versão Final](https://youtu.be/dQw4w9WgXcQ)

Site institucional para a Escola de Teatro da UFBA.

## Sumário

- [Informações comerciais](#informações-comerciais)
- [Equipe](#equipe)
- [Especificações técnicas](#especificações-técnicas)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Instruções de instalação](#instruções-de-instalação)
  - [Executando o projeto localmente](#executando-o-projeto-localmente)
  - [Uso das branches](#uso-das-branches)
- [Cronograma](#cronograma)

## Informações comerciais

### Cliente

- **Nome:** André Ricardo Araujo Virgens
- **Telefone:** (71) 98765-6668
- **E-mail:** 

### Datas

- **Início do desenvolvimento:** 28/02/2022
- **Prazo de entrega:** ----
- **Fim do período de manutenção:** ----

## Equipe

- **Coordenador**: [Rafael Pondé](@Ralph_1307)
- **Revisor:** [Nome do revisor](@gitlab_revisor)
- **Front-end:** [Membro 1](@gitlab_m1), [Membro 2](@gitlab_m2)
- **Designer**: [Nome do designer](@gitlab_designer)

## Especificações técnicas

### Tecnologias utilizadas

- **Front-end:** React com Next.js

### Instruções de instalação

Antes de tudo, você precisará instalar o [NodeJS](https://nodejs.org/en/download/). Além disso, você precisará instalar o [Yarn](https://yarnpkg.com/getting-started), usando o comando:

```bash
npm install -g yarn
```

Clone este repositório na sua máquina usando HTTPS:

```bash
git clone "link do repositório HTTPS"
```

ou SSH:

```bash
git clone "link do repositório SSH"
```

Instale as dependências do projeto:

```bash
cd infojr-projeto-show
yarn
```

### Executando o projeto localmente

Você deverá instalar as extensões do ESLint e do Prettier no seu VSCode, e, caso já não tenha configurado, você deverá configurar o seu VSCode para que ele rode o ESLint automaticamente ao salvar o arquivo. Para isso, apertar `CTRL + Shift + P` e digitar "Open Settings (JSON)". Depois, basta adicionar o trecho a seguir em qualquer lugar do arquivo:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
```

Para executar o front-end em desenvolvimento, basta executar o comando abaixo:

```bash
yarn dev
```

O projeto possui ferramentas para garantir mensagens de commit consistentes de forma automatizada. Sendo assim, seu commit "_mudanças_" não vai colar. Para garantir que suas mensagens de commit estão seguindo o padrão estabelecido, basta adicionar um arquivo à _staged_ através do comando `git add /path/to/file` ou `git add .` para adicionar todas as modificações e executar o comando abaixo:

```bash
yarn commit
```

Logo após, todos os arquivos commitados irão passar por uma fase de linting, onde o ESLint vai verificar se o código está de acordo com as regras estabelecidas. Se não estiver, o ESLint irá mostrar uma mensagem de erro, e você poderá corrigi-lo. Após a correção, basta rodar o comando `yarn commit` novamente para que as mudanças sejam commitadas.

### Uso das branches

Existem 3 branches principais do projeto:

- **dev:** Versão para desenvolvimento de novas features.
- **staging:** Branch para revisão e testes internos antes de atualizar a master. Possui deploy automático para `staging.[nome do projeto].infojr.com.br`. Não será apresentada ao cliente.
- **master:** Possui deploy automático para `[nome doprojeto].infojr.com.br`. Será apresentada ao cliente durante as milestones. O revisor só poderá dar merge nessa branch com a autorização do **coordenador do projeto**.

Ao trabalhar numa issue, você deverá criar uma nova branch a partir da `dev`, seguindo o padrão de nomenclatura: _{id_da_issue}-descricao-breve_, evitando usar mais que 3 palavras.

**Exemplo**: _14-tela-de-login_

Lembre-se de manter a sua branch atualizada e, quando terminar o trabalho, realizar o merge request para a `dev`, a ser aprovado ou reprovado pelo **revisor do projeto**. Além disso, mantenha os seus commits organizados: as mensagens devem ser objetivas e condizentes com as alterações feitas (então nada de alterar 70 arquivos e commitar tudo de uma vez só como "Ajuste")

Periodicamente, o revisor deverá fazer o merge da `dev` com a `staging` para que o coordenador verifique se o projeto está funcional e de acordo com o escopo previsto antes de autorizar o revisor a atualizar a `master`.

## Cronograma Provisório

- [ ] **Milestone 01** - Primeiros passos: Header, Footer e Home. [??/??/2022 - ??/??/2022, ? sprints]
  - [ ] Header
  - [ ] Footer
  - [ ] Banners
  - [ ] ...

---

- [ ] **Milestone 02** - Meia-noite te conto. [??/??/2022 - ??/??/2022, ? sprints]
  - [ ] Tarefa 1
  - [ ] Tarefa 2
  - [ ] Tarefa 3

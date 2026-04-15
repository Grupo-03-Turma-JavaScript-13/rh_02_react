River RH - Frontend
<br /> <div align="center"> <img src="https://i.imgur.com/AzshGmS.png" width="50%"/> </div>

<br /><br />

1. Descrição

O River RH é uma aplicação frontend desenvolvida em React para gerenciamento e visualização de colaboradores de uma empresa.

A aplicação permite pesquisar colaboradores por diversos campos, filtrar por status (ativos ou desligados) e visualizar informações detalhadas como matrícula, cargo, datas de admissão e demissão.

O projeto foi construído com foco em componentização, tipagem com TypeScript e estilização moderna com TailwindCSS.

2. Recursos

Principais funcionalidades implementadas:

🔎 Busca dinâmica por colaboradores

Nome<br>
Email<br>
Matrícula<br>
Cargo<br>
Status (ativo/demitido)<br>
Datas de admissão e demissão<br>

👥 Listagem de colaboradores ativos na Home por padrão<br>

🚫 Filtro de colaboradores desligados através da Navbar<br>

🔄 Reset automático da Home ao limpar busca<br>

🧩 Arquitetura organizada em:<br>

Components<br>

Pages<br>

Services<br>

Data<br>

🎨 Interface moderna com TailwindCSS

3. Captura da Tela Principal

<div align="center"> <img src="./public/img/tela_rv_rh.PNG" width="50%"/> </div>

4. Tecnologias<br>

Item	        Descrição<br>
Servidor	    Node.js<br>
Linguagem	    TypeScript<br>
Biblioteca	  React<br>
Build Tool	  Vite<br>
Estilização	  TailwindCSS<br>
Roteamento	  React Router DOM<br>

5. Pré-requisitos

Antes de iniciar, instale:

Node.js (v16 ou superior)
npm ou yarn

6. Configuração e Execução
1️⃣ Clone o repositório
git clone <url-do-repositorio>

2️⃣ Entre na pasta do projeto
cd rh_02_react

3️⃣ Instale as dependências
npm install

4️⃣ Execute o projeto
npm run dev

5️⃣ Acesse no navegador
http://localhost:5173

7. Estrutura do Projeto

src/<br>
│
├── components/<br>
│   ├── Cards/           # Card de colaborador<br>
│   ├── CampoDeBusca/    # Barra de busca<br>
│   └── Navbar/          # Filtro de status<br>
│
├── data/<br>
│   └── Data.ts          # Base mockada de colaboradores<br>
│
├── pages/
│   └── home/            # Página principal<br>
│
├── services/
│   └── Services.ts      # Regras de negócio e filtros<br>
│
├── App.tsx              # Rotas e estado global da Home<br>
└── main.tsx             # Entrada da aplicação<br>


8. Regras de Negócio

✔️ A Home inicia mostrando apenas colaboradores ativos<br>
✔️ Colaboradores desligados aparecem somente quando:<br>

Pesquisados na busca<br>
Filtrados pelo botão Desligados<br>

9. Como Contribuir<br>
Faça um fork do projeto<br>
Crie uma branch<br>
git checkout -b minha-feature<br>
Commit suas mudanças<br>
git commit -m "Nova feature"<br>
Push<br>
git push origin minha-feature<br>
Abra um Pull Request 🚀<br>

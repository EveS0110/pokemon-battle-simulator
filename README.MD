#  Pokémon Battle Simulator

Projeto Frontend desenvolvido com **HTML**, **CSS** e **JavaScript**, consumindo a **PokeAPI**.

O objetivo é criar uma aplicação onde dois jogadores escolhem seus Pokémon e batalham entre si.  
O vencedor será determinado pela soma dos atributos (*base stats*) dos Pokémon escolhidos.

---

##  Estrutura do Projeto (MVC)

O projeto já está estruturado seguindo o padrão **MVC (Model–View–Controller)**:

pokemon-battle-simulator/
│
├── index.html → View (estrutura e interface da aplicação)
│
├── assets/
│ └── css/
│ └── style.css → View (estilos e layout do projeto)
│
├── js/
│ ├── service.js → Model (requisições e comunicação com a PokeAPI)
│ └── controller.js → Controller (lógica da aplicação, integração e manipulação do DOM)
│
└── README.md


**Funções de cada parte:**
- **View (HTML/CSS):** cuida do visual e da interface do usuário.  
- **Model (service.js):** busca e retorna os dados da API.  
- **Controller (controller.js):** conecta a interface com os dados, gerencia eventos e lógica da batalha.

---

##  Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/pokemon-battle-simulator.git
Abra a pasta do projeto no VS Code.

Instale a extensão “Live Server” (caso ainda não tenha).

No VS Code, vá em Extensões (Ctrl+Shift+X) → pesquise por Live Server → clique em Instalar.

Clique com o botão direito no arquivo index.html e selecione:

“Open with Live Server”

O projeto abrirá automaticamente no navegador, geralmente em:

http://localhost:5500
- Observações
O projeto não utiliza banco de dados nem requer instalações adicionais.

Todo o código roda diretamente no navegador (sem Node.js, sem package.json).

Usem essa estrutura como base para desenvolver as partes de HTML, CSS e JavaScript.

Mantenham o padrão de pastas e nomes de arquivos para garantir que tudo funcione corretamente.

- Fluxo de trabalho com Git (para o time)
Para evitar conflitos e manter a branch principal (main) limpa, sigam este fluxo:

Atualize o repositório antes de começar a trabalhar:

git pull origin main
Crie sua própria branch de trabalho:

git checkout -b nome-da-sua-branch
Exemplo:
git checkout -b feature-html ou git checkout -b estilo-css

Faça suas alterações e salve o progresso:

git add .
git commit -m "Descrição breve do que foi feito"
Envie sua branch para o GitHub:

git push origin nome-da-sua-branch
Abra um Pull Request (PR) no GitHub para revisar e juntar suas mudanças a main.
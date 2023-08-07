Contact management(Gerenciamento de contatos)

Este projeto foi desenvolvido com a intenção de simplificar a organização de contatos dos usuários, oferecendo
uma série de funcionalidades de forma acessível e fácil de entender. Ao se cadastrar, o usuário pode adicionar
informações como nome, e-mail, número e senha. Na página de login, basta inserir o e-mail e a senha para acessar
uma área exclusiva.

Na página principal, é possível pesquisar contatos pelo nome, além de atualizar informações como e-mail, senha,
nome e número. Também é viável adicionar novos contatos de maneira intuitiva. Ao clicar no botão 'Adicionar Contatos',
um modal é aberto, permitindo a inclusão de informações como e-mail, nome, número e detalhes extras
(sendo nome e número os únicos campos obrigatórios).

Após a adição dos contatos, eles são automaticamente exibidos na página. Na seção de contatos, é possível visualizar
todos os detalhes de cada contato. Além disso, é possível editar os dados de um contato ao clicar no ícone de
edição (lápis) e excluir um contato através do ícone de deletar (lixeira).


Preparando e Executando o Projeto Full Stack

Se você deseja executar o projeto full stack, siga estas etapas para configurar tanto o backend quanto o frontend.

Requisitos Prévios:

Node.js instalado (recomendado a versão LTS)
Yarn instalado (recomendado para o gerenciamento de pacotes)

Navegue até a pasta backend:

Copy code
cd backend
Instale as dependências usando o Yarn:

Copy code
yarn install

Crie um arquivo .env na pasta backend e defina as variáveis de ambiente necessárias, como conexão com o banco de dados e segredos.

Execute as migrações do Prisma para criar o banco de dados e as tabelas:

Copy code
npx prisma migrate dev

Inicie o servidor do backend:

Copy code
yarn start:dev


Frontend (React.js):
Passo 3: Configuração do Frontend

Navegue até a pasta frontend:

Copy code
cd frontend

Instale as dependências usando o Yarn:

Copy code
yarn install

Inicie o servidor de desenvolvimento do frontend:

Copy code
cd front-end

Copy code
yarn start

Acessando o Projeto:

Após completar os passos acima, o backend estará sendo executado na porta especificada (geralmente 3000), e o 
frontend será acessível em outra porta (geralmente 3001).

Abra seu navegador e acesse http://localhost:5173 para ver o projeto em ação.

Observações Finais:

Certifique-se de ajustar as variáveis de ambiente (.env) de acordo com suas configurações locais.
Para um ambiente de produção, lembre-se de configurar os arquivos .env adequadamente e ajustar as configurações 
do banco de dados, URLs e segredos.

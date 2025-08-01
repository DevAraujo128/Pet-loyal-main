# 🐾 PetLoyal - Plataforma de Adoção de Pets

Uma aplicação web moderna para conectar pessoas que desejam adotar pets com animais que precisam de um lar amoroso. O PetLoyal facilita o processo de adoção, permitindo que usuários cadastrem pets para adoção, visualizem animais disponíveis e realizem adoções de forma simples e intuitiva.

## ✨ Funcionalidades

### 🏠 Página Inicial
- Apresentação da plataforma com design atrativo
- Navegação intuitiva para cadastro e login
- Informações sobre o processo de adoção

### 👤 Sistema de Autenticação
- Cadastro de usuários
- Login e logout
- Contexto de autenticação para gerenciar sessões

### 📋 Dashboard Principal
- **Visualização de Pets**: Lista completa de todos os pets cadastrados
- **Filtro de Status**: Separação entre pets disponíveis para adoção e pets já adotados
- **Sistema de Busca**: Pesquisa por nome do pet
- **Gerenciamento**: Editar e deletar pets cadastrados
- **Adoção**: Processo simplificado para adotar um pet

### 🐕 Cadastro de Pets
- Formulário completo para cadastrar novos pets
- Campos: nome, idade, gênero, porte, raça, cidade, telefone
- Validação de dados

### ✏️ Edição de Pets
- Atualização de informações dos pets
- Interface intuitiva para modificações

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** - Roteamento da aplicação
- **Vite** - Build tool e servidor de desenvolvimento
- **Axios** - Cliente HTTP para requisições à API
- **JSON Server** - API REST simulada para desenvolvimento
- **Faker.js** - Geração de dados fictícios para testes
- **CSS Modules** - Estilização modular e organizada

## 📦 Estrutura do Projeto

```
Pet-loyal-main/
├── src/
│   ├── app.jsx                 # Componente principal da aplicação
│   ├── main.jsx                # Ponto de entrada
│   ├── routes.jsx              # Configuração de rotas
│   ├── contexts/
│   │   └── auth-context.jsx    # Contexto de autenticação
│   ├── data/                   # Serviços de API
│   │   ├── adopt-pet.js
│   │   ├── create-pet.js
│   │   ├── delete-pet.js
│   │   ├── fetch-pets.js
│   │   ├── get-pet.js
│   │   └── update-pet.js
│   ├── functions/
│   │   └── format-phone.js     # Utilitários
│   ├── hooks/
│   │   └── use-auth.js         # Hook personalizado para autenticação
│   ├── lib/
│   │   ├── axios.js            # Configuração do Axios
│   │   └── faker.js            # Configuração do Faker
│   ├── pages/                  # Páginas da aplicação
│   │   ├── app/
│   │   │   ├── create-pet/
│   │   │   ├── dashboard/
│   │   │   ├── home/
│   │   │   └── update-pet/
│   │   ├── auth/
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   └── not-found/
│   └── styles/
│       └── global.css          # Estilos globais
├── public/                     # Arquivos estáticos
├── db.json                     # Banco de dados JSON
└── package.json                # Dependências e scripts
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou pnpm

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd Pet-loyal-main
```

2. **Instale as dependências**
```bash
npm install
# ou
pnpm install
```

3. **Inicie o servidor de dados (JSON Server)**
```bash
npm run server
# ou
pnpm server
```

4. **Em outro terminal, inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
pnpm dev
```

5. **Acesse a aplicação**
Abra seu navegador e acesse: `http://localhost:5173`

## 📊 Banco de Dados

O projeto utiliza JSON Server como API simulada. O arquivo `db.json` contém:

- **Pets**: Lista de animais cadastrados para adoção
- **Users**: Usuários cadastrados no sistema

### Estrutura dos Dados

**Pet:**
```json
{
  "id": "string",
  "name": "string",
  "age": "number",
  "gender": "string",
  "size": "string",
  "breed": "string",
  "city": "string",
  "phone": "string",
  "userId": "string | null"
}
```

**User:**
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "password": "string"
}
```

## 🎯 Funcionalidades Principais

### Para Usuários Não Autenticados
- Visualizar pets disponíveis para adoção
- Navegar pela página inicial
- Acessar sistema de cadastro e login

### Para Usuários Autenticados
- Cadastrar novos pets para adoção
- Editar informações dos pets
- Deletar pets cadastrados
- Adotar pets disponíveis
- Visualizar pets adotados vs disponíveis
- Buscar pets por nome

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run server` - Inicia o JSON Server (API)
- `npm run lint` - Executa o linter

## 🎨 Interface

A aplicação possui uma interface moderna e responsiva com:
- Design limpo e intuitivo
- Navegação clara entre seções
- Tabelas organizadas para visualização de pets
- Formulários bem estruturados
- Feedback visual para ações do usuário

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Author

**João Araujo**

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório! 
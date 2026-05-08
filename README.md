# Syntax Wear - Loja de Roupas Online

Aplicação de e-commerce para venda de roupas construída com tecnologias modernas. Um projeto em React com TypeScript que oferece uma experiência de compra completa com autenticação, carrinho de compras, catálogo de produtos e gerenciamento de endereços.

## 📋 Sobre o Projeto

**Syntax Wear** é uma plataforma de e-commerce que permite:
- ✨ Visualizar catálogo de produtos organizados por categorias
- 🛒 Adicionar produtos ao carrinho de compras
- 👤 Criar conta e fazer login
- 📦 Visualizar detalhes de produtos individuais
- 📍 Gerenciar endereços de entrega via CEP
- 🏪 Localizar lojas físicas
- 📱 Interface responsiva e intuitiva

## 🛠 Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca JavaScript para construir interfaces de usuário
- **TypeScript** - Superset de JavaScript com tipagem estática
- **Vite** - Build tool moderno e rápido
- **TailwindCSS 4** - Framework CSS utilitário
- **React Router** (TanStack Router) - Roteamento de páginas
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas
- **React Icons** - Biblioteca de ícones

### Desenvolvimento
- **ESLint** - Linter para JavaScript/TypeScript
- **TypeScript ESLint** - Plugin ESLint para TypeScript

## 📁 Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis
│   ├── Button/       # Botão genérico
│   ├── Header/       # Cabeçalho da página
│   ├── Footer/       # Rodapé da página
│   ├── ProductCard/  # Card de produto
│   ├── ProductList/  # Lista de produtos
│   ├── CartButton/   # Botão do carrinho
│   ├── CartDrawer/   # Drawer do carrinho
│   ├── LoginForm/    # Formulário de login
│   ├── RegisterForm/ # Formulário de registro
│   ├── CEPForm/      # Formulário de CEP
│   ├── Categories/   # Seção de categorias
│   ├── Gallery/      # Galeria de produtos
│   └── Hero/         # Seção hero da homepage
├── pages/           # Páginas da aplicação
│   ├── _app/        # Layout principal
│   ├── _auth/       # Páginas de autenticação
│   └── products/    # Páginas de produtos
├── contexts/        # Context API para estado global
│   ├── CartContext.tsx    # Contexto do carrinho
│   └── CartProvider.tsx   # Provedor do carrinho
├── interfaces/      # Definições de tipos TypeScript
│   ├── product.ts
│   ├── category.ts
│   └── address.ts
├── utils/          # Funções utilitárias
│   ├── format-currency.ts
│   └── cpf-validator.ts
├── mocks/          # Dados mockados para desenvolvimento
│   ├── products.ts
│   └── categories.ts
├── styles/         # Estilos globais
└── assets/         # Imagens e fontes
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn como gerenciador de pacotes

### Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd syntax-wear-app
```

2. Instale as dependências:
```bash
npm install
```

### Modo Desenvolvimento

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (porta padrão do Vite).

O Vite oferece Hot Module Replacement (HMR), então suas alterações serão refletidas instantaneamente no navegador.

### Build para Produção

Crie uma build otimizada para produção:
```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/`.

### Preview da Build

Para visualizar a build de produção localmente:
```bash
npm run preview
```

### Linting

Verifique o código em busca de erros de estilo e possíveis problemas:
```bash
npm run lint
```

## 📋 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila o TypeScript e cria a build de produção |
| `npm run lint` | Executa ESLint para verificar o código |
| `npm run preview` | Visualiza a build de produção localmente |

## 🔧 Configuração

### Roteamento Automático
O projeto usa o plugin **TanStack Router** com geração automática de rotas. As rotas são geradas automaticamente a partir da estrutura de pastas em `src/pages/`.

Arquivo gerado: `src/router-tree-gen.ts`

### Estilização
O projeto usa **TailwindCSS 4** com integração via Vite para melhor performance.

### Tipos TypeScript
Configurações de TypeScript em:
- `tsconfig.json` - Configuração base
- `tsconfig.app.json` - Configuração da aplicação
- `tsconfig.node.json` - Configuração para ferramentas de build

## 📦 Contexto Global (Context API)

### CartContext
Gerencia o estado do carrinho de compras, permitindo adicionar/remover produtos e acessar o carrinho de qualquer componente.

```typescript
// Uso em componentes
const { cart, addToCart, removeFromCart } = useContext(CartContext);
```

## 🎨 Componentes Principais

- **Header** - Navegação principal e logo
- **Hero** - Seção destaque da homepage
- **ProductCard** - Exibe informações de um produto
- **ProductList** - Lista produtos com filtros
- **CartDrawer** - Drawer lateral mostrando items do carrinho
- **LoginForm / RegisterForm** - Autenticação de usuários
- **Categories** - Navegação por categorias
- **Gallery** - Galeria de produtos em destaque

## 📝 Formulários

- **Login** - Validação com React Hook Form e Zod
- **Registro** - Validação com CPF
- **CEP** - Busca e validação de endereço

## 🚀 Deploy

O projeto está configurado para ser deployado no Vercel (veja `vercel.json` na raiz).

Para fazer deploy:
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente conforme necessário
3. O Vercel automaticamente executará `npm run build` e fará o deploy

## 📚 Recursos Úteis

- [Documentação React](https://react.dev)
- [Documentação TypeScript](https://www.typescriptlang.org)
- [Documentação Vite](https://vite.dev)
- [Documentação TailwindCSS](https://tailwindcss.com)
- [TanStack Router](https://tanstack.com/router)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)

## 📄 Licença

Este projeto está sob licença MIT.
import reactDom from 'eslint-plugin-react-dom'


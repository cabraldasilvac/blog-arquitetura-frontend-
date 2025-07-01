# Blog com Arquitetura Frontend Escalável

## 🚀 Tecnologias

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- JSON Server (API fake)

## � Arquitetura

```plaintext
src/
├── app/            # Rotas
├── components/     # UI e Lógica
├── lib/            # API e Utilitários
└── types/          # Tipos
```

⚙️ Como Rodar

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Inicia a API fake ( em outro terminal):

```bash
json-server --watch db.json --port 3001
```

4. Rode o porjeto:

```bash
npm run dev
```

🔗 Links

- [Deploy na Vercel](https://vercel.com/)

---

### **🚀 Passo 5: Deploy na Vercel**

1. Suba o projeto para o GitHub.
2. Acesse [Vercel](https://vercel.com), importe o repositório.
3. Configure a **variável de ambiente** `API_URL` (se usasse uma API real).

---

### **💡 Dicas Extras**

- **Adicione testes** (opcional):

  ```bash
  npm install -D vitest @testing-library/react
  ```

- Documente componentes com Storybook:

```bash
npx storybook@latest init
```

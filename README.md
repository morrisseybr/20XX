# Webapp Template

Template para aplicações web com NextJS.

## Incluso

- [x] create-next-app com Typescript, Eslint, App router e TailwindCSS
- [x] Prettier com plugins do Eslint e do TailwindCSS
- [x] TRPC usando React Query, SuperJSON e Zod, com rotas e providers configurados
- [x] Limpeza de arquivos desnecessários
- [x] class-variance-authority, clsx e tailwind-merge para facilitar a criação de variantes de componentes

> **Nota:** Para melhor uso dessas libs com o intellisense do VSCode, instale o plugin [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) e adicione o seguinte ao seu `settings.json`:
>
> ```json
> {
>   "tailwindCSS.experimental.classRegex": [
>     ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
>     ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
>     ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
>   ]
> }
> ```

- [x] Vitest com Testing Library (react, jest-dom e user-event)
- [ ] Configurações para internacionalização
- [ ] Configurações para autenticação

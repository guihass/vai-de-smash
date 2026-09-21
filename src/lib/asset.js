// Resolve um caminho de `public/` contra a base do site.
//
// O Vite reescreve a base no index.html e nos imports, mas não em strings
// literais do JSX. Sem isso, "/images/x.jpg" quebra em qualquer deploy que
// não esteja na raiz do domínio — caso do GitHub Pages, que serve o site em
// /<nome-do-repo>/. BASE_URL é "/" na Vercel e "/vai-de-smash/" no Pages.
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

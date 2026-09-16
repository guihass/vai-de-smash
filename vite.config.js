import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

/**
 * Remove blocos `<!--#if VAR--> ... <!--#endif-->` do index.html quando a
 * variável de ambiente estiver vazia. Usado para incluir o Google Analytics
 * apenas quando VITE_GA_ID for definido.
 */
function conditionalHtml(env) {
  return {
    name: 'conditional-html',
    transformIndexHtml(html) {
      return html.replace(
        /\s*<!--#if (\w+)-->([\s\S]*?)<!--#endif-->/g,
        (_, name, block) => (env[name] ? block : ''),
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // "/" para domínio próprio; "/nome-do-repo/" para GitHub Pages
    base: env.VITE_BASE_PATH || '/',
    plugins: [react(), tailwindcss(), conditionalHtml(env)],
    build: {
      sourcemap: false,
    },
    // Permite acessar o dev/preview por túneis (ngrok) sem erro 403
    server: { allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.io'] },
    preview: { allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.io'] },
  }
})

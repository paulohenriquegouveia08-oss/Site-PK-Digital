import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      // O caminho onde o site fica publicado.
      //
      // Hoje e' /Site-PK-Digital/ (GitHub Pages de um repositorio).
      // QUANDO lspk.com.br APONTAR PARA CA, troque por '/' — e' a
      // unica linha que muda.
      //
      // Nao da para usar './' aqui: o React Router precisa saber o
      // prefixo para casar as rotas (App.tsx usa este mesmo valor como
      // basename). Com './' o BASE_URL vira "./", que nao serve de
      // prefixo, e a home nao casa — a pagina abre so com o cabecalho
      // e o rodape, sem conteudo.
      base: env.SITE_BASE || '/Site-PK-Digital/',
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

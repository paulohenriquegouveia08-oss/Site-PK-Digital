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
      // O site e' servido na RAIZ do dominio (Vercel).
      //
      // Ja quebrou uma vez por causa disto: com base '/Site-PK-Digital/'
      // (caminho do GitHub Pages), a Vercel servia o index.html mas o
      // CSS e o JS eram pedidos em /Site-PK-Digital/assets/... — que
      // nao existe la. Resultado: pagina totalmente branca, sem erro
      // visivel para quem abre.
      //
      // Fica em '/' e nao em './' porque o React Router usa este valor
      // como basename (App.tsx). Com './' o BASE_URL vira "./", que nao
      // e' prefixo de rota valido.
      //
      // SITE_BASE existe para publicar num subdiretorio sem tocar aqui.
      base: env.SITE_BASE || '/',
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

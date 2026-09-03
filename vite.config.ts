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
      // Caminhos RELATIVOS nos arquivos gerados.
      //
      // Sem isto o Vite gera "/assets/...", que so funciona quando o
      // site esta na raiz do dominio. No GitHub Pages ele fica em
      // /Site-PK-Digital/, e todo CSS e JS daria 404 — pagina em branco.
      //
      // Com './' o mesmo build serve nos dois lugares: no endereco do
      // GitHub Pages agora e em lspk.com.br quando o dominio apontar,
      // sem precisar reconfigurar nada.
      base: './',
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

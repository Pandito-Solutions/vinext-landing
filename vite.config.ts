import { defineConfig } from 'vite';
import vinext from 'vinext';
import { cloudflare } from '@cloudflare/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command }) => ({
  plugins: [
    tsconfigPaths(),
    vinext(),
    // Cloudflare plugin only for build/deploy — avoids 404 in dev (workerd routing)
    ...(command === 'build'
      ? [
          cloudflare({
            viteEnvironment: { name: 'rsc', childEnvironments: ['ssr'] },
          }),
        ]
      : []),
  ],
}));

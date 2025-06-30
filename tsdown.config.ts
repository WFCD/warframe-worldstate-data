import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['exports.ts', 'safeImport.ts', './tools'],
  copy: ['./data']
});

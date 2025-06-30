import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [
    'exports.ts',
    'safeImport.ts',
    './tools/integrity.ts',
    './tools/timeDate.ts',
    './tools/translation.ts',
    './tools/utilities.ts',
  ],
  copy: ['./data'],
});

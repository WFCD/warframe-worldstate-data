import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [
    'exports.ts',
    'safeImport.ts',
    'types.ts',
    './tools/timeDate.ts',
    './tools/translation.ts',
    './tools/utilities.ts',
  ],
  copy: ['./data'],
  dts: true,
  format: 'esm',
});

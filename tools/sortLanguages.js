import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dirName = dirname(fileURLToPath(import.meta.url));

const dataDir = join(dirName, '..', 'data');
const data = JSON.parse(readFileSync(join(dataDir, 'languages.json'), 'utf8'));

const sortedData = JSON.stringify(data, Object.keys(data).sort(), 2);
writeFileSync(join(dataDir, 'languages_sorted.json'), sortedData);

// eslint-disable-next-line no-console
console.log('language.json has been sorted!');

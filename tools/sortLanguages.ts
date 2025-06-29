#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies */

import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import yargs from 'yargs/yargs';

const options = yargs(process.argv)
  .usage('Usage -c')
  .option('c', { alias: 'check', describe: "Check only, don't write file", type: 'boolean', demandOption: false })
  .parse();

const checkOnly = (await options).c;

const dirName: string = dirname(fileURLToPath(import.meta.url));
const sort = (obj: Record<string, { value: string; desc?: string }>) => {
  return Object.keys(obj)
    .sort()
    .reduce(
      function (result, key: string) {
        result[key] = obj[key];
        return result;
      },
      {} as Record<string, { value: string; desc?: string }>
    );
};

const dataDir = join(dirName, '..', 'data');
const data = JSON.parse(await readFile(join(dataDir, 'languages.json'), 'utf8'));

const sortedData = sort(data);

if (JSON.stringify(sortedData, undefined, 2) !== JSON.stringify(data, undefined, 2)) {
  console.error('Data not sorted');
  if (checkOnly) process.exit(1);
}

if (checkOnly) process.exit(0);

await writeFile(join(dataDir, 'languages.json.bak'), JSON.stringify(data, undefined, 2));
await writeFile(join(dataDir, 'languages.json'), JSON.stringify(sortedData, undefined, 2));

console.log('language.json has been sorted!');

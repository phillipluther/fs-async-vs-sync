import fs from 'fs';
import makeFiles from './make-files.js';
import readFilesSync from './read-files-sync.js';
import readFilesAsync from './read-files-async.js';
import { FILE_COUNT, TEST_FILES_DIR } from './constants.js';

makeFiles();

const syncTestName = `Synchronously read ${FILE_COUNT} files`;
const asyncTestName = `Asynchronously read ${FILE_COUNT} files`;
const dirContents = fs.readdirSync(TEST_FILES_DIR);

// run sync
console.time(syncTestName);
readFilesSync(dirContents);
console.timeEnd(syncTestName);

// ... then async
console.time(asyncTestName);
await readFilesAsync(dirContents);
console.timeEnd(asyncTestName);

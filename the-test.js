import makeFiles from './make-files.js';
import readFilesSync from './read-files-sync.js';
import { FILE_COUNT } from './constants.js';

makeFiles();

const syncTestName = `Synchronously read ${FILE_COUNT} files`;
const asyncTestName = `Asynchronously read ${FILE_COUNT} files`;

console.time(syncTestName);
readFilesSync();
console.timeEnd(syncTestName);

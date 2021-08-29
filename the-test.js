import makeFiles from './make-files.js';
import readFilesSync from './read-files-sync.js';
import readFilesAsync from './read-files-async.js';
import { FILE_COUNT } from './constants.js';

makeFiles();

const syncTestName = `Synchronously read ${FILE_COUNT} files`;
const asyncTestName = `Asynchronously read ${FILE_COUNT} files`;

function runSync() {
  console.time(syncTestName);
  readFilesSync();
  console.timeEnd(syncTestName);
}

async function runAsync() {
  console.time(asyncTestName);
  await readFilesAsync();
  console.timeEnd(asyncTestName);
}

runSync();
runAsync();

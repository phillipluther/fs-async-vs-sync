import fs from 'fs/promises';
import path from 'path';
import { TEST_FILES_DIR } from './constants.js';

export default function readFilesAsync(dirContents) {
  return Promise.all(dirContents.map((fileName) => {
    const filePath = path.join(TEST_FILES_DIR, fileName);
    return fs.readFile(filePath, 'utf8');
  }));
}

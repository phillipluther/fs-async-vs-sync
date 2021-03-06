import fs from 'fs';
import path from 'path';
import { TEST_FILES_DIR } from './constants.js';

export default function readFilesSync(dirContents) {
  const contentBlob = [];

  for (let i = dirContents.length; i--;) {
    const filePath = path.join(TEST_FILES_DIR, dirContents[i]);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    contentBlob.push(fileContents);
  }
}

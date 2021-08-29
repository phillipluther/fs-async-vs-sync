import fs from 'fs';
import path from 'path';
import { TEST_FILES_DIR, FILE_COUNT } from './constants.js';

export default function makeFiles() {
  function makeRandomString() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charsLength = chars.length;
    const strLength = Math.floor(Math.random() * 50) + 1;

    let randomString = '';
    for (let i = 0; i < strLength; i++) {
      randomString += chars.charAt(Math.floor(Math.random() * charsLength));
    }

    return randomString;
  }

  // start with a clean batch of test files each time
  fs.rmSync(TEST_FILES_DIR, {
    recursive: true,
    force: true,
  });
  fs.mkdirSync(TEST_FILES_DIR);

  for (let i = 0; i < FILE_COUNT; i++) {
    const filePath = path.join(TEST_FILES_DIR, `file-${i}.txt`);
    fs.writeFileSync(filePath, makeRandomString());
  }
}

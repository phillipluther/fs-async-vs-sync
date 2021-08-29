import path from 'path';

export const CWD = path.resolve();
export const TEST_FILES_DIR = path.join(CWD, 'test-files');
export const FILE_COUNT = process.env.FILE_COUNT || 100;

import { randomBytes } from 'node:crypto';
import { join, resolve } from 'node:path';

export function uniqueFilename(path, extension = '') {
    const ext = extension && extension[0] !== '.' ? '.' + extension : extension;
    const name = [Date.now(), process.pid, randomBytes(8).toString('hex')].join('-') + ext;

    return join(resolve(path), name);
}

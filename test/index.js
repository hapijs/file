import { sep } from 'node:path';

import { describe, expect, it } from 'vitest';

import * as File from '../src/index.js';

describe('uniqueFilename()', () => {
    it('generates a random file path', () => {
        const result = File.uniqueFilename('./test/modules');

        expect(result).toBeTypeOf('string');
        expect(result).toContain(`test${sep}modules`);
    });

    it('is random enough to use in fast loops', () => {
        const results = [];

        for (let i = 0; i < 10; ++i) {
            results[i] = File.uniqueFilename('./test/modules');
        }

        expect(new Set(results).size).toBe(10);
    });

    it('combines the random elements with a supplied character', () => {
        const result = File.uniqueFilename('./test', 'txt');

        expect(result).toContain(`test${sep}`);
        expect(result).toContain('.txt');
    });

    it('accepts extensions with a "." in it', () => {
        const result = File.uniqueFilename('./test', '.mp3');

        expect(result).toContain(`test${sep}`);
        expect(result).toContain('.mp3');
    });
});

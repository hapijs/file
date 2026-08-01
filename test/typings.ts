import { describe, expectTypeOf, it } from 'vitest';

import * as File from '../src/index.js';

describe('typings', () => {
    describe('uniqueFilename', () => {
        it('call signatures compile', () => {
            expectTypeOf(File.uniqueFilename).toBeFunction();
            expectTypeOf(File.uniqueFilename('/root')).toBeString();
            expectTypeOf(File.uniqueFilename('/root', '.txt')).toBeString();
        });

        it('invalid calls rejected', () => {
            try {
                // @ts-expect-error path is required
                File.uniqueFilename();
            } catch {}

            try {
                // @ts-expect-error path must be a string
                File.uniqueFilename(123);
            } catch {}

            // @ts-expect-error extension must be a string
            File.uniqueFilename('x', 123);
            // @ts-expect-error only two arguments accepted
            File.uniqueFilename('x', 'x', true);
        });
    });
});

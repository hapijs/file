'use strict';

const Path = require('path');

const Code = require('@hapi/code');
const File = require('..');
const Lab = require('@hapi/lab');


const internals = {};


const { describe, it } = exports.lab = Lab.script();
const expect = Code.expect;


describe('uniqueFilename()', () => {

    it('generates a random file path', () => {

        const result = File.uniqueFilename('./test/modules');

        expect(result).to.exist();
        expect(result).to.be.a.string();
        expect(result).to.contain(`test${Path.sep}modules`);
    });

    it('is random enough to use in fast loops', () => {

        const results = [];

        for (let i = 0; i < 10; ++i) {
            results[i] = File.uniqueFilename('./test/modules');
        }

        const filter = results.filter((item, index, array) => {

            return array.indexOf(item) === index;
        });

        expect(filter.length).to.equal(10);
        expect(results.length).to.equal(10);
    });

    it('combines the random elements with a supplied character', () => {

        const result = File.uniqueFilename('./test', 'txt');

        expect(result).to.contain(`test${Path.sep}`);
        expect(result).to.contain('.txt');
    });

    it('accepts extensions with a "." in it', () => {

        const result = File.uniqueFilename('./test', '.mp3');

        expect(result).to.contain(`test${Path.sep}`);
        expect(result).to.contain('.mp3');
    });
});

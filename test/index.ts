import * as File from '..';
import * as Lab from '@hapi/lab';


const { expect } = Lab.types;


// uniqueFilename()

File.uniqueFilename('/root');
File.uniqueFilename('/root', '.txt');

expect.type<string>(File.uniqueFilename('/root'));

expect.error(File.uniqueFilename());
expect.error(File.uniqueFilename(123));
expect.error(File.uniqueFilename('x', 123));
expect.error(File.uniqueFilename('x', 'x', true));

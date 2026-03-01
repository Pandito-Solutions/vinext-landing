import { describe, it, expect } from 'vitest';
import { existsSync } from 'fs';
import { join } from 'path';
import { slugify } from '../utils/slugify';

describe('Smoke test', () => {
  it('verifies app directory structure has key files', () => {
    const root = join(import.meta.dirname, '../..');
    expect(existsSync(join(root, 'app/layout.tsx'))).toBe(true);
    expect(existsSync(join(root, 'app/page.tsx'))).toBe(true);
    expect(existsSync(join(root, 'app/globals.css'))).toBe(true);
  });

  it('tests slugify utility', () => {
    expect(slugify('Hello World')).toBe('hello-world');
    expect(slugify('Multiple   Spaces')).toBe('multiple-spaces');
    expect(slugify('Special Chars!@#')).toBe('special-chars');
  });
});

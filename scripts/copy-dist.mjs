import fs from 'node:fs';
import path from 'node:path';

const src = path.resolve('artifacts/eolarity-innovations/dist/public');
const dst = path.resolve('dist');

if (fs.existsSync(src)) {
  fs.rmSync(dst, { recursive: true, force: true });
  fs.cpSync(src, dst, { recursive: true });
  console.log('✓ Successfully copied build artifacts to root ./dist directory');
} else {
  console.error(`Source directory not found: ${src}`);
  process.exit(1);
}

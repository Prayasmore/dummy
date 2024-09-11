// build.mjs
import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: true,
  outfile: 'dist/bundle.js',
  format: 'esm',  // This ensures it uses ES module format
}).catch(() => process.exit(1));
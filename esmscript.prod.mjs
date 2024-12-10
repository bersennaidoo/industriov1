import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['static/react/main.tsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  loader: { '.png': 'file', '.jpg': 'file' },
  publicPath: 'https://three-cities.netlify.app/react',
  outdir: 'static/react', 
  define: {
      'process.env.VITE_CLERK_PUBLISHABLE_KEY': '""',
  },
})

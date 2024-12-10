import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  entryPoints: ['static/react/main.tsx'],
  bundle: true,
  sourcemap: true,
  loader: { '.png': 'file', '.jpg': 'file' },
  publicPath: 'http://localhost:1313/react',
  outdir: 'static/react',
  define: {
      'process.env.VITE_CLERK_PUBLISHABLE_KEY': '""',
  },
})

await ctx.watch()

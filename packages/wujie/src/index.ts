import type { Plugin } from 'vite'

export default function wujiePlugin(): Plugin[] {
  const wujie: Plugin = {
    name: 'vite-plugin-wujie-share',
    configureServer(config) {
      console.log(config)
    },
  }

  return [wujie]
}

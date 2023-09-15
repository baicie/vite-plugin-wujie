import type { Plugin } from 'vite'

export default function wujiePlugin() {
  const wujie: Plugin = {
    name: 'vite-plugin-wujie-share',
    configResolved(config) {
      console.log(config)
    },
  }

  return [wujie]
}

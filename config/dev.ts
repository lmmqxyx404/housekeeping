import type { UserConfigExport } from "@tarojs/cli"

export default {

  mini: {},
  h5: {
    devServer: {
      port: 18080,
      host: 'localhost',
      open: true,
    }
  }
} satisfies UserConfigExport<'vite'>

import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#34495E] text-[#ddd])',
  },
  theme: {
    colors: {
      vgreen: '#41B883',
      vblue: '#34495E',
    },
  },
  content: {
    pipeline: {
      include: [/\.(css|postcss|sass|scss|less|stylus|styl)($|\?)/, /\.(vue|ts|md)/]
    }
  }
  // ...
})

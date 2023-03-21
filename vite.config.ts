import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import babelpreset from '@babel/preset-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

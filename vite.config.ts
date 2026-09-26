import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = '/Upender/'

// https://vitejs.dev/config/
export default defineConfig({
    base,
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})

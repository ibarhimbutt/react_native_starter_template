#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectName = process.argv[2]

if (!projectName) {
    console.log('❌ Please provide a project name')
    process.exit(1)
}

const targetDir = path.join(process.cwd(), projectName)
const templateDir = path.join(__dirname, '../template')

// Copy template
fs.cpSync(templateDir, targetDir, { recursive: true })

// Replace placeholders
const filesToReplace = ['package.json', 'app.json']

filesToReplace.forEach(file => {
    const filePath = path.join(targetDir, file)
    let content = fs.readFileSync(filePath, 'utf8')
    content = content.replace(/__APP_NAME__/g, projectName)
    fs.writeFileSync(filePath, content)
})

// Install deps
console.log('📦 Installing dependencies...')
execSync('npm install', { cwd: targetDir, stdio: 'inherit' })

console.log(`
✅ Project created successfully!

cd ${projectName}
npx expo start
`)

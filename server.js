import express from 'express'
import serveStatic from 'serve-static'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

const port = process.env.PORT || 80
app.listen(port)

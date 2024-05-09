import express from 'express'
import serveStatic from 'serve-static'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import {config} from 'dotenv'
config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log(import.meta.url);
const app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
const port = process.env.PORT || 80
app.listen(port, () => console.log(`App listening on port ${port}`))

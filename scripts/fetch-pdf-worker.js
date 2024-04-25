const { pdfjs } = require('react-pdf')
const { createWriteStream } = require("fs")
const { Readable } = require("stream")

async function fetchPDFWorker() {
    try {
        console.log(`Getting pdf worker for pdfjs version ${pdfjs.version}...`)
        const response = await fetch(`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`)
        const filename = 'src/pdf.worker.min.js'
        if (response.ok && response.body) {
            const writer = createWriteStream(filename)
            await Readable.fromWeb(response.body).pipe(writer)
            console.log(`Wrote worker file to "${filename}"`)
        }
    } catch(e) {
        console.error(`Could not retrieve PDF worker file (${e})`)
    }
}

fetchPDFWorker()

const fs = require("fs")
const pdfparser = require("pdf-parse")

// const pdffile = fs.readFileSync("sample-text.pdf")

// pdfparser(pdffile).then(data => {
//     // console.log(data.info)
//     // console.log(data.numpages)
//     console.log(data.text)
// }).catch(err => {
//     console.log(err)
// })

const pdffile = fs.readFileSync("Scanned Text.pdf")

pdfparser(pdffile).then(data => {
    console.log(data.info)
    console.log(data.numpages)
    // console.log(data.text)
}).catch(err => {
    console.log(err)
})

const getPDFText = async (pdfFile, maxPages) => {
    let parsedPDF = ""
    let pdfBuffer = null
    try {
        if (fs.existsSync(pdfFile)) {
            pdfBuffer = fs.readFileSync(pdfFile)
            if (maxPages) {
                parsedPDF = await pdfparser(pdfBuffer, { max: maxPages })
            } else {
                parsedPDF = await pdfparser(pdfBuffer)
            }
            if (parsedPDF) {
                return parsedPDF.text
            }
        }
    } catch (err) {
        return err.message
    }
}

// getPDFText("sample1-text.pdf").then(text => {
//     console.log(text)
// }).catch(err => {
//     console.log(err)
// })

// getPDFText("Scanned Text.pdf").then(text => {
//     console.log(text)
// }).catch(err => {
//     console.log(err)
// })


const WordExtractor = require("word-extractor");
const extractor = new WordExtractor();
const extracted = extractor.extract("word-text.docx");
const fs = require("fs")

extracted.then(docx => {
    // console.log(docx.getBody())
    // console.log(docx.getHeaders())
    console.log(docx.getHeaders({ includeFooters: false }))
    // console.log(docx.getFootnotes())
    console.log(docx.getTextboxes())
    console.log(docx.getTextboxes({ includeHeadersAndFooters: false }))
}).catch(err => {
    console.log(err.message)
})

const getWordText = async (fileName) => {
    try {
        if (fs.existsSync(fileName)) {
            const extractor = new WordExtractor()
            const extracted = await extractor.extract(fileName)
            if (extracted) {
                return extracted.getBody()
            }
        }
    } catch (error) {
        console.log(error.message)
    }
}

getWordText("word-text.docx").then(content => {
    console.log(content)
}).catch(errMsg => {
    console.log(errMsg)
})
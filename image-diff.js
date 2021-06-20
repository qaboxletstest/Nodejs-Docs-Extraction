const Jimp = require("jimp");

const compareImages = async (fileName1, fileName2) => {
    // const example1 = await Jimp.read("image-text.jpg")
    const example1 = await Jimp.read(fileName1)
    const example2 = await Jimp.read(fileName2)
    const example1Hash = example1.hash()
    const example2Hash = example2.hash()
    const distance = Jimp.distance(example1, example2)
    const diff = Jimp.diff(example1, example2)

    if (example1Hash !== example2Hash || distance > 0.15 || diff > 0.15) {
        return "Images don't match"
    } else {
        return "Images are same"
    }
}

compareImages("Example1.jpg", "Example2.jpg").then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

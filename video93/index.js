import fs from "fs/promises"
import fsn from "fs"
import path from "path"


const basepath = "./"
// console.log(fs)
let files = await fs.readdir(basepath)
// console.log(files)
// for (const item of files) {
//     console.log(item)
// }

// let extensions =  []
for (const item of files) {
    console.log("running for ", item)


    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && item != "package.json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            fs.rename(path.join(basepath, item), path.join(basepath, ext,item))
        }
        else {
            await fs.mkdir(ext)  // Use promise-based fs with await
            fs.rename(path.join(basepath, item), path.join(basepath, ext,item))
        }
    }
    // console.log(ext)

    // console.log(item)
}
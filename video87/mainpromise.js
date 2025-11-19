import fs from "fs/promises"

let a = await fs.readFile("nihal.txt")
let b = await fs.writeFile("al.txt", "this is amazing promise ")
console.log(a.toString())
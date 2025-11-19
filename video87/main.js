const fs = require("fs")
console.log(fs)

console.log("starting")
// fs.writeFileSync("nihal.txt", "haryy is good boy")

//use this 
fs.writeFile("nihal2.txt", "haryy is good boy", ()=>{
    console.log("done")
    fs.readFile("nihal2.txt", (error,data)=>{
        console.log(error, data.toString())
    })
})



fs.appendFile("nihal2.txt", "wtfff", (e,d)=>
{
    console.log(d)
})
console.log("ending")
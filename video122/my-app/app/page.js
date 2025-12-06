//"use client"//
//import { useState, useEffect } from "react";
import fs from "fs/promises"

export default function Home() {

  console.log("hey I am Nihal")
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  const [count , setcount] = useState(0)
  return (
    <div>I am a component {count} 
     <button onClick={()=> setcount(count+1)}>Click </button></div>
   
  );
}
//running on server site 
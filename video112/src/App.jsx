import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("harry")
  const [form, setForm] = useState({email : "", phone: ""})

  const handleclick = () => {
    alert("Button clicked")
  }

  const handlemouseover = () => {
    alert("Mouse over the red div")
  }

  const handlechange = (e)=>
  {
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
     <div className="button">
      <button onClick={handleclick}> Clickme</button>
     </div>

     {/* <div className="red" onMouseOver={handlemouseover}>
      i am red div  
     </div> */}

     <input type="text" name = 'email'  value = {form.email} onChange={handlechange}/>
     <input type="text" name='phone' value = {form.phone} onChange={handlechange}/>
    </>
  )
}

export default App

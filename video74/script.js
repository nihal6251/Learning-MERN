let button = document.getElementById("btn")
let box = document.querySelector(".box")
// Store the original content
let originalContent = box.innerHTML
let isToggled = false

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("click", ()=>{
    if (isToggled) {
         // console.log("Second toggle")
        // Change back to original content
        box.innerHTML = originalContent
        isToggled = false
    } else {
       // console.log("First toggle")
        // Change to new content
        box.innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
        isToggled = true
    }
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})
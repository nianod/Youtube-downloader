const mainContainer = document.querySelector(".container");
const miniContainer = document.querySelector("sub-container");
const link = document.getElementById("link");
const downloadBtn = document.getElementById("download") 
let url = true

 
link.addEventListener("paste", function() {
    if(!url) {
        
    }
    console.log("pated");
    
})


//Debugging
downloadBtn.addEventListener("click", () => {
    alert("cliked")
})
 
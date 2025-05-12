const mainContainer = document.querySelector(".container");
const miniContainer = document.querySelector(".sub-container");
const link = document.getElementById("link");
const downloadBtn = document.getElementById("download") 
let url = true

 //Demo before getting The main API
link.addEventListener("paste", function(event) {
    
    const pastesData = (event.clipboardData || window.clipboardData).getData("text")
       showarn = document.createElement("i")

    if(!pastesData.startsWith("https://")) { //Meaning not starting with https
        url = false;
        showarn.textcontent = "invalid link";
    } else {
        url = true;
        showarn.style.display = "none"
    }
 miniContainer.appendChild(showarn)
    
})


 
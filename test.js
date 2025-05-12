const mainContainer = document.querySelector(".container");
const miniContainer = document.querySelector(".sub-container");
const link = document.getElementById("link");
const downloadBtn = document.getElementById("download") 
 downloadBtn.disabled = false

 //Demo before getting The main API
link.addEventListener("paste", function(event) {

    const pastesData = (event.clipboardData || window.clipboardData).getData("text")
       showarn = document.createElement("i")
        if(showarn) {
        //miniContainer.removeChild(showarn)
        }

    if(!pastesData.startsWith("https://")) { //Meaning not starting with https
        url = false;
        showarn.textContent = "invalid link";
        downloadBtn.disabled = true;
    } 

    else {
        url = true;
        showarn.style.display = "none"
    }

 miniContainer.appendChild(showarn)
    
})


 
const mainContainer = document.querySelector(".container");
const miniContainer = document.querySelector(".sub-container");
const link = document.getElementById("link");
const downloadBtn = document.getElementById("download") 
 
 //Demo before getting The main API
link.addEventListener("paste", function(event) {
    event.preventDefault();

    const pastedData = (event.clipboardData || window.clipboardData).getData("text");
       showarn = document.createElement("i")
       showarn.style.color = "red"
       showarn.style.textAlign = "center"
       showarn.style.color = "red"

        // if(showarn) {
        //     miniContainer.removeChild(showarn)
        // }

        if(!pastedData.startsWith("https://")) { //Meaning not starting with https
            showarn.textContent = "invalid link";
        setTimeout(() => {
            url = false;
            downloadBtn.disabled = true;
            location.reload();
        }, 2000)
    
    } 

    else {
        url = true;
        showarn.style.display = "none"
        downloadBtn.disabled = false;
    }

 miniContainer.appendChild(showarn)
    link.value = pastedData
})

 

const mediaQualities = document.querySelector(".Media")
downloadBtn.addEventListener("click", () => {
   const mp4 = document.createElement("button")
   const mp3 = document.createElement("button")
   const hd = document.createElement("button")

    mp4.innerHTML = "Mp4"
    mp3.innerHTML = "Mp3"
    hd.innerHTML = "HD"

   mediaQualities.appendChild(mp4)
   mediaQualities.appendChild(mp3)
   mediaQualities.appendChild(hd)
    if(link.value === "") {
        mediaQualities.addEventListener("c")
    }
//    location.reload()
})
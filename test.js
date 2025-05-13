const mainContainer = document.querySelector(".container");
const miniContainer = document.querySelector(".sub-container");
const link = document.getElementById("link");
const downloadBtn = document.getElementById("download") 
let validUrl = false;
 //Demo before getting The main API
link.addEventListener("paste", function(event) {
    event.preventDefault();

    const pastedData = (event.clipboardData || window.clipboardData).getData("text");
       showarn = document.createElement("i")
       showarn.style.color = "red"
       showarn.style.textAlign = "center"
       showarn.style.color = "red"


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

    if(mediaQualities.childElementCount === 0) {
   mediaQualities.appendChild(mp4)
   mediaQualities.appendChild(mp3)
   mediaQualities.appendChild(hd)
}    

   [mp4, mp3, hd].forEach(btn => {
        btn.addEventListener("click", () => {
            if(!validUrl) {
                alert("Please enter a valid URL")
            } else {
                // alert(`${btn.innerHTML}, selected`)
                ("selected")
            }
        })
   })
})

const mainContainer = document.querySelector(".container");
const miniContainer = document.querySelector("sub-container");
const link = document.getElementById("link");
const downloadBtn = document.getElementById("download") 
let url;

link.addEventListener("paste", function() {
    console.log("pated");
    
})


//Debigging
downloadBtn.addEventListener("click", () => {
    alert("cliked")
})

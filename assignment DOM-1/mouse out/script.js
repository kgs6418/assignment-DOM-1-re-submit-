const image = document.getElementById("image");

image.addEventListener("mouseover", ()=>{
    image.style.width = "200px"
    image.style.height = "200px"
})
image.addEventListener("mouseout", ()=>{
    image.style.width= "50px"
    image.style.height= "50px"
})
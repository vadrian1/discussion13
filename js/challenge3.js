let images = document.getElementsByClassName("thumbnail")
for(var i = 0; i < images.length; ++i){
    let p = document.createElement("p")
    p.innerHTML = images[i].getAttribute("alt")
    p.classList.add("hidden")
    images[i].after(p)
    images[i].addEventListener("mouseenter", function(){
        this.nextElementSibling.classList.remove("hidden")
    })
    images[i].addEventListener("mouseleave", function(){
        this.nextElementSibling.classList.add("hidden")
    })
}
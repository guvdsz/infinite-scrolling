
const printData = () => {
    const container = document.querySelector("#container")
    const newFigure = document.createElement("figure")
    const newImage = document.createElement("img")
    newFigure.appendChild(newImage)
    newImage.src = `https://picsum.photos/1280/1280?t=${Date.now()}`;
    container.appendChild(newFigure)
}

async function loadNewImages() {
    printData()  
}

const lastCardObserver = new IntersectionObserver((entries) => {
    const lastCard = entries[0]
    if(!lastCard.isIntersecting) return
    loadNewImages()
    lastCardObserver.unobserve(lastCard.target)
    lastCardObserver.observe(document.querySelector("figure:last-child"))
}, {threshold: 0.5}, {rootMargin: "100px"})    
setTimeout(lastCardObserver.observe(document.querySelector("figure:last-child"), {threshold: 0.5}), 500)



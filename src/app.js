const imgUn = document.querySelector("#img-un")
const imgDeux = document.querySelector("#img-deux")
const btnsEffect1 = document.querySelector(".btnsEffect1")
const btnsEffect2 = document.querySelector(".btnsEffect2")
const overeffect1 = document.querySelector(".overeffect1")
const overeffect2 = document.querySelector(".overeffect2")


overeffect1.addEventListener("mouseover", () => {
    imgUn.classList.add("over")
    btnsEffect1.classList.add("btnsDisplayOn")
    imgUn.addEventListener("mouseout", () => {
        imgUn.classList.remove("over")
        btnsEffect1.classList.remove("btnsDisplayOn")
    })
})


overeffect2.addEventListener("mouseover", () => {
    imgDeux.classList.add("over")
    btnsEffect2.classList.add("btnsDisplayOn")
    imgDeux.addEventListener("mouseout", () => {
        imgDeux.classList.remove("over")
        btnsEffect2.classList.remove("btnsDisplayOn")
    })
})
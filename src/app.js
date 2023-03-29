const imgUn = document.querySelector("#img-un")
const imgDeux = document.querySelector("#img-deux")
const btnsEffect1 = document.querySelector(".btnsEffect1")
const btnsEffect2 = document.querySelector(".btnsEffect2")
const overeffect1 = document.querySelector(".overeffect1")
const overeffect2 = document.querySelector(".overeffect2")
const email = document.querySelector(".email")
const btnForm = document.querySelector("#sendMessage")
const errorMessageEmail = document.querySelector(".errorMessageEmail")
const form = document.querySelector(".footer-top-right")


overeffect1.addEventListener("mouseover", () => {
    imgUn.classList.add("over")
    btnsEffect1.classList.add("btnsDisplayOn")
    btnsEffect1.addEventListener("mouseout", () => {
        imgUn.classList.remove("over")
    })
    imgUn.addEventListener("mouseout", () => {
        imgUn.classList.remove("over")
        btnsEffect1.classList.remove("btnsDisplayOn")
    })
})




overeffect2.addEventListener("mouseover", () => {
    imgDeux.classList.add("over")
    btnsEffect2.classList.add("btnsDisplayOn")
    btnsEffect2.addEventListener("mouseout", () => {
        imgDeux.classList.remove("over")
    })
    imgDeux.addEventListener("mouseout", () => {
        imgDeux.classList.remove("over")
        btnsEffect2.classList.remove("btnsDisplayOn")
    })
})

btnForm.addEventListener("click", () => {

    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (email.value.match(pattern)) {
        email.classList.add("email")
        email.classList.remove("errorEmail")
    } else {
        email.classList.remove("email")
        email.classList.add("errorEmail")
        event.preventDefault(btnForm)
        errorMessageEmail.style.display = "flex"
        errorMessageEmail.style.color = "#FF6F5B"
        errorMessageEmail.style.margin = "0 0"
        errorMessageEmail.style.fontSize = "12px"
        email.style.marginBottom = "0"
    }

});




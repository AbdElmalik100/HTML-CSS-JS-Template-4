// background Box Change ----------------
let landing = document.querySelector(".landing")
let backgroundBtn = document.querySelectorAll(".background-btn span")
let backgroundOption = true
let counter

if (localStorage.getItem("backbroundOption")) {
    backgroundBtn.forEach((ele) => {
        ele.classList.remove("active")
    })
    if (localStorage.getItem("backbroundOption") === "true") {
        backgroundOption = true
        document.querySelector(".background-btn .yes").classList.add("active")
    } else {
        backgroundOption = false
        document.querySelector(".background-btn .no").classList.add("active")
        landing.style.backgroundImage = localStorage.getItem("currentBackground")
    }
}

backgroundBtn.forEach((ele) => {
    ele.addEventListener("click", function(e) {
        handleActiveClass(e)
        if (e.target.getAttribute("data-background") === "yes") {
            backgroundOption = true
            randomizeImages()
            localStorage.setItem("backbroundOption" , true)
        } else {
            backgroundOption = false
            clearInterval(counter)
            localStorage.setItem("backbroundOption" , false)
        }
    })
})
// background Box Change ----------------


// Color Box Change ----------------
let colors = document.querySelectorAll(".color-list li")

if (window.localStorage.getItem("colorOption")) {
    document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("colorOption"))
    colors.forEach((ele) => {
        ele.classList.remove("active")
        if (ele.getAttribute("data-color") === window.localStorage.getItem("colorOption")) {
            ele.classList.add("active")
        }
    })
}

colors.forEach((ele) => {
    
    ele.addEventListener("click", function(e) {
        document.documentElement.style.setProperty("--main-color", e.target.getAttribute("data-color"))
        localStorage.setItem("colorOption", e.target.getAttribute("data-color"))
        handleActiveClass(e)
    })
})
// Color Box Change ----------------


// Setting Button Toggle ----------------
let toggleIcon = document.querySelector(".icon-container i")

toggleIcon.onclick = function() {
    this.classList.toggle("fa-spin")
    this.classList.toggle("wide")
    document.querySelector(".setting-box").classList.toggle("open")
}
// Setting Button Toggle ----------------


// Landing Images Change ----------------
let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg"]

// Random Images -------------

/* function randomizeImages() {
    if (backgroundOption === true) {
        counter = setInterval(function() {
            let randomNumber = Math.trunc(Math.random() * imgArray.length)
            landing.style.backgroundImage = `url(imgs/${imgArray[randomNumber]})`
            localStorage.setItem("currentBackground" , landing.style.backgroundImage)
        },2000)
    }
} */

// Ascending imgs  -------------

function randomizeImages() {
    let timer = 0
    if (backgroundOption === true) {
        counter = setInterval(function() {
            landing.style.backgroundImage = `url(imgs/${imgArray[timer]})`
            localStorage.setItem("currentBackground" , landing.style.backgroundImage)
            timer++
            if (timer > imgArray.length - 1) {
                timer = 0
            }
        },2000)
    }
}

randomizeImages()
// Landing Images Change ----------------


// Skills Progress Width ----------------
let skillSection = document.querySelector(".our-skills")
let skills = document.querySelectorAll(".skill-progress span")

window.onscroll = function() {
    if (Math.trunc(window.scrollY) > skillSection.offsetTop - 200) {
        skills.forEach(span => {
            span.style.width = span.getAttribute("data-width")
        })
    }
}
// Skills Progress Width ----------------


// Gallery Icons Action ----------------
let iconBox = document.querySelectorAll(".icon-box")

iconBox.forEach(box => {
    box.addEventListener("click" ,(e) => {
        let overlay = document.createElement("div")
        overlay.className = "popup-overlay"
        document.body.appendChild(overlay)

        let card = document.createElement("div")
        card.className = "card"
        
        let iconCard = document.createElement("div")
        iconCard.className = "icon-card"

        let theIcon = document.createElement("i")
        theIcon.className = e.target.children[0].className

        let cardInfo = document.createElement("div")
        cardInfo.className = "card-info"

        let mainText = document.createElement("h3")
        mainText.textContent = e.target.getAttribute("data-info")
        let paraText = document.createElement("p")
        paraText.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis similique amet numquam repellat? Nemo non enim ullam optio ipsa, animi hic iusto necessitatibus beatae mollitia voluptatem rem cum quibusdam ab."
        let spanBtn = document.createElement("span")
        spanBtn.textContent = "Learn More"

        let closeBtn = document.createElement("span")
        closeBtn.className = "close-btn"
        closeBtn.textContent = "X"

        cardInfo.appendChild(mainText)
        cardInfo.appendChild(paraText)
        cardInfo.appendChild(spanBtn)
        
        iconCard.appendChild(theIcon)

        card.appendChild(iconCard)
        card.appendChild(cardInfo)
        card.appendChild(closeBtn)
        document.body.appendChild(card)

        setInterval(function() {
            card.classList.add("came")
        },10)
        exitMethods(e)
    })
    
})
// Gallery Icons Action ----------------

// Nav Bullets Action And Links Button Action ----------------
let bullets = document.querySelectorAll(".nav-bullets .bullet")
let links = document.querySelectorAll(".links li")

function scrollToSections (elements) {
    elements.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault()
            document.querySelector(e.target.getAttribute("data-section")).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}

scrollToSections(bullets)
scrollToSections(links)
// Nav Bullets Action And Links Button Action ----------------

// Handle Active Class ----------------
function handleActiveClass(event) {
    event.target.parentElement.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active")
    })
    event.target.classList.add("active")
}
// Handle Active Class ----------------

// Show Bullets Action ----------------
let bulletSpan = document.querySelectorAll(".bullet-btn span")
let navBullets = document.querySelector(".nav-bullets")

if (localStorage.getItem("bullet-option")) {
    bulletSpan.forEach(span => {
        span.classList.remove("active")
    })
    if (localStorage.getItem("bullet-option") === "block") {
        navBullets.style.display = localStorage.getItem("bullet-option")
        document.querySelector(".bullet-btn .yes").classList.add("active")
    } else {
        navBullets.style.display = localStorage.getItem("bullet-option")
        document.querySelector(".bullet-btn .no").classList.add("active")
    }
} 
bulletSpan.forEach(span => {
    span.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-bullet") === "block") {
            navBullets.style.display = e.target.getAttribute("data-bullet")
            localStorage.setItem("bullet-option", e.target.getAttribute("data-bullet"))
        } else {
            navBullets.style.display = e.target.getAttribute("data-bullet")
            localStorage.setItem("bullet-option", e.target.getAttribute("data-bullet"))
        }
        handleActiveClass(e)
    })
})
// Show Bullets Action ----------------

// Reset Options ----------------
document.querySelector(".reset-options").onclick = function() {
    localStorage.clear()
    window.location.reload()
}
// Reset Options ----------------


// Toggle Menu ----------------
let tobbleBtn = document.querySelector(".toggle-menu")
let theLinks = document.querySelector(".links")

tobbleBtn.onclick = function() {
    this.classList.toggle("menu-active")
    theLinks.classList.toggle("open")
}
document.addEventListener("click", (e) => {
    if (e.target !== tobbleBtn && e.target !== theLinks) {
        if (theLinks.classList.contains("open")) {
            tobbleBtn.classList.toggle("menu-active")
            theLinks.classList.toggle("open")
        }
    }
})
// Toggle Menu ----------------

// Register Button Action ----------------
let regBtn = document.querySelector(".register")
console.log(regBtn)

regBtn.addEventListener("click", (e) => {
    let overlay = document.createElement("div")
    overlay.className = "popup-overlay"
    document.body.appendChild(overlay)

    let card = document.createElement("div")
    card.className = "card"
    card.classList.add("reg")

    let signUp = document.createElement("div")
    signUp.className = "sign-up"

    let icon = document.createElement("i")
    icon.className = "fas fa-user"
    signUp.appendChild(icon)

    let signUpTxt = document.createElement("h2")
    signUpTxt.textContent = "Sign Up"
    signUp.appendChild(signUpTxt)

    let form = document.createElement("form")
    
    let fn = document.createElement("input")
    fn.type = "text"
    fn.name = "firstname"
    fn.placeholder = "First Name"
    form.appendChild(fn)

    let ln = document.createElement("input")
    ln.type = "text"
    ln.name = "lastname"
    ln.placeholder = "Last Name"
    form.appendChild(ln)

    let username = document.createElement("input")
    username.type = "text"
    username.name = "username"
    username.placeholder = "Username"
    form.appendChild(username)

    let telephone = document.createElement("input")
    telephone.type = "tel"
    telephone.name = "phone"
    telephone.placeholder = "Phone Number"
    form.appendChild(telephone)

    let email = document.createElement("input")
    email.type = "email"
    email.name = "email"
    email.placeholder = "Email"
    form.appendChild(email)

    let password = document.createElement("input")
    password.type = "password"
    password.name = "password"
    password.placeholder = "Password"
    form.appendChild(password)

    let information = document.createElement("div")
    information.className = "info"

    let checkBoxInput = document.createElement("input")
    checkBoxInput.type = "checkbox"
    checkBoxInput.id = "remeber-me"

    let label = document.createElement("label")
    label.htmlFor = "remeber-me"
    label.textContent = "Remeber Me"

    information.appendChild(checkBoxInput)
    information.appendChild(label)
    form.appendChild(information)

    let forgetPasswordLink = document.createElement("a")
    forgetPasswordLink.href = "#"
    forgetPasswordLink.textContent = "Forgot your password?"
    form.appendChild(forgetPasswordLink)

    let submitBtn = document.createElement("input")
    submitBtn.type = "submit"
    submitBtn.name = "register"
    submitBtn.value = "Sign Up"
    form.appendChild(submitBtn)

    let closeBtn = document.createElement("span")
    closeBtn.className = "close-btn"
    closeBtn.textContent = "X"


    card.appendChild(signUp)
    card.appendChild(form)
    card.appendChild(closeBtn)
    document.body.appendChild(card)

    setInterval(function() {
        card.classList.add("came")
    },100)
    exitMethods(e)
})
// Register Button Action ----------------


// Exit Action Handling ----------------
function exitMethods(event) {
    // Exit Methods ----------
    document.querySelector(".close-btn").onclick = () => {
        document.querySelector(".popup-overlay").remove()
        document.querySelector(".card").remove()
    }
    window.onclick = function(e) {
        if (e.target == document.querySelector(".popup-overlay")) {
            document.querySelector(".popup-overlay").remove()
            document.querySelector(".card").remove()
        }
    }
    document.onkeyup = function(e) {
        if (e.key === "Escape") {
            document.querySelector(".popup-overlay").remove()
            document.querySelector(".card").remove()
        }
    }
}
// Exit Action Handling ----------------
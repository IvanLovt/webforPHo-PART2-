window.addEventListener("scroll",()=>{
    document.querySelector(".layer-1").style.backgroundSize = `${window.scrollY * 1.5 + 2000}px`
    document.querySelector(".layer-2").style.backgroundSize = `${window.scrollY * 1.5 + 2000}px`
    document.querySelector(".hero-content").style.backgroundSize = `${window.scrollY * 1.5 + 2000}px`
    document.querySelector(".hero-content h1").style.opacity =  `${(-window.scrollY + 500) * .004}`
    document.querySelector(".hero-content__p").style.opacity =  `${(-window.scrollY + 500) * .004}`
    document.querySelector(".button-start").style.opacity =  `${(-window.scrollY + 500) * .004}`
})

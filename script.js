var tl = gsap.timeline()

tl.from("#name",{
    y:-30,
    opacity:0,
    duratoin:1,
    delay:1
})

tl.from("ul li",{
    y:-30,
    opacity:0,
    duratoin:1,
    stagger:0.25
})
tl.from("iframe",{
    y:-30,
    opacity:0,
    duratoin:1.5,
})
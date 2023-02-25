gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollSmoother.isTouch !== 1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    })

    gsap.fromTo('.header', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.header', 
            start: 'center',
            end: '820',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.portfolio__galery-left .portfolio__item')

    itemsL.forEach(item => {
        gsap.fromTo(item, { x: -50, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item, 
            start: '-800',
            end: '-100',
            scrub: true 
        }
    })
    })


    let itemsR = gsap.utils.toArray('.portfolio__galery-right .portfolio__item')

    itemsR.forEach(item => {
        gsap.fromTo(item, { x: 50, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item, 
            start: '-800',
            end: '-100',
            scrub: true 
        }
    })
    })

}
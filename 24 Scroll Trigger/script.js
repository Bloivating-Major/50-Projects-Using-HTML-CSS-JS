document.querySelectorAll('.card').forEach(card =>{
    gsap.to(card, {
    scale : 0.75,
    opacity : 0,
    scrollTrigger : {
        trigger : card,
        start: "top 10%",
        end : "bottom 0%",
        scrub : true,
    }
})
})
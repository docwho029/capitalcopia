const hamburger = document.querySelector('.mobile-nav-hamburger');
const tabs = document.querySelector('.mobile-nav-tabs');
const hamburgers = document.querySelector('.hamburgers')
const tab = Array.from(document.getElementsByClassName('mobile-nav-tab'));
const classes = tabs.classList
const slides = document.querySelector('#swiper2')
const nav_container = document.querySelector('.mobile-nav-link-container')
// const slides = document.querySelector('.mobile-main-slide')
const cancel_button = document.querySelector('.mobile-nav-cancel')
hamburgers.addEventListener('click', () => {
    if (classes.contains('passive')) {
        setTimeout(function() {
            slides.classList.add('hidden')
        }, 150);
        classes.remove('passive')
        nav_container.setAttribute('style', 
        "display:flex;"
        )
        tabs.setAttribute('style', `
        position:absolute;
        display:flex;
        flex-direction: column;
        justify-content : space-around;
        align-items : center;
        right:  -3vh;
        top : 0;
        height : 100vh ;
        background-color : 	#CBD8D7;
        // backdrop-filter: blur(1rem);
        // border-radius : 2vh;
        z-index : +2;
        width:80vw;
        width: 300px;
        border-left: 1px solid #282738;
        'transition: width 0.25s ease-in-out,height 0.25s ease-in-out;'
        `
        )
        tab.forEach(e => {
            e.setAttribute('style', 'display:block')
        });
        cancel_button.setAttribute('style', 'display:flex')
        classes.add('flex')
        classes.add('active')
        hamburgers.setAttribute('style', 'display : none')
        hamburger.setAttribute('style', `
        width : 0 ;
        height : 0  ;
        `
        )
    } else {
        
    }

})

cancel_button.addEventListener('click', () => {
    if(classes.contains('active')){ 
        tabs.setAttribute('style', '')
        classes.remove('flex')
        slides.classList.remove('hidden')
        classes.remove('active')
        classes.add('passive')
        hamburger.setAttribute('style', ``)
        tab.forEach(e => {
            e.setAttribute('style', 'display:none')
        });
        hamburgers.setAttribute('style', 'display : flex')
        cancel_button.setAttribute('style', 'display:none')
        console.log(tabs.attributes)
    }
})



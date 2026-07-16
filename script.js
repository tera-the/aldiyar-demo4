document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('nav-open');
    const closeBtn = document.getElementById('nav-close');
    const burgerMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__link');
    const header = document.getElementById('header');

    toggleBtn.addEventListener('click', () => {
        burgerMenu.classList.add('show-menu');
    })

    closeBtn.addEventListener('click', () => {
        burgerMenu.classList.remove('show-menu');
    })


    navLinks.forEach(link =>
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('show-menu');
        })
    );
})

document.addEventListener('DOMContentLoaded', () => {
    function scrollHeader() {
        if (this.scrollY >= 50) {
            header.classList.add('scroll-header')
        } else if (this.scrollY < 50) {
            header.classList.remove('scroll-header')
        } else header;
    }

    window.addEventListener('scroll', scrollHeader)
})

document.addEventListener('DOMContentLoaded', () => {
    const okBtn = document.querySelector('.warning__modal-close');
    const warningModal = document.querySelector('.warning__modal');

    function closeModal() {
        warningModal.classList.remove('warning__modal-active')
    }

    okBtn.addEventListener('click', () => {
        warningModal.classList.remove('warning__modal-active')
    })

    warningModal.addEventListener('click', (event) => {
        if (event.target === warningModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Enter') {
            closeModal();
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const scrollUpBtn = document.getElementById('scroll-up')

    function scrollUp() {
        if (this.scrollY >= 200) {
            scrollUpBtn.classList.add('show-scroll')
        } else if (this.scrollY < 50) {
            scrollUpBtn.classList.remove('show-scroll')
        } else scrollUpBtn;
    }

    window.addEventListener('scroll', scrollUp)
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            // Высота секции в пикселях 
            const sectionTop = current.offsetTop - 50;
            // Высота от начала страницы до секции -50 пикселей
            const sectionId = current.getAttribute('id');

            const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active-link');
                } else {
                    navLink.classList.remove('active-link');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);
});


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    delay: 100,
})

sr.reveal(`.home__header, .section__title`, { delay: 300 })
sr.reveal(`.home__footer`, { delay: 100 })
sr.reveal(`.home__img`, { delay: 200, origin: 'top' })

sr.reveal(`.sponsor__logo, .products__card, .footer__copy`, { origin: 'top', interval: 100 })
sr.reveal(`.specs__data, .discount__animate`, { origin: 'left', interval: 200 })
sr.reveal(`.specs__img, .discount__img`, { origin: 'right' })
sr.reveal(`.case__img`, { origin: 'top' })
sr.reveal(`.case__data`)
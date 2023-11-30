document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu');
    const spans = burgerMenu.querySelectorAll('span, span:before, span:after');

    function toggleMenu() {
        menu.classList.toggle('show');
        burgerMenu.classList.toggle('close');
        if (menu.classList.contains('show')) {
            document.querySelector('#main-body').style.top = '192px'; // Move main body down

        }
        else {
            // Scrolling up
            document.querySelector('#main-body').style.top = '0'; // Move main body down
        }
    }

    burgerMenu.addEventListener('click', toggleMenu);


    function disableTransitionsAndOpacity() {
        menu.style.transition = 'none';
        burgerMenu.style.transition = 'none';
        spans.forEach(span => span.style.transition = 'none');
        burgerMenu.style.opacity = 1;
    }

    function resetTransitionsAndOpacity() {
        menu.style.transition = '';
        burgerMenu.style.transition = '';
        spans.forEach(span => span.style.transition = '');
        burgerMenu.style.opacity = '';
    }

    burgerMenu.addEventListener('click', toggleMenu);

    let resizeTimer;
    window.addEventListener('resize', function() {
        disableTransitionsAndOpacity();

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            resetTransitionsAndOpacity();
        }, 250);
        if (menu.classList.contains('show')) {
            // If the menu is open, close it
            toggleMenu();
        }
        if (window.innerWidth > 768 && menu.classList.contains('show')) {
            menu.classList.remove('show');
            burgerMenu.classList.remove('close');
        }
    });

    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            if (menu.classList.contains('show')) {
            }
            else {
                document.querySelector('nav').style.top = '-79px';
                document.querySelector('#main-body').style.top = '-79px'; // Move main body up
            }

        } else {
            if (menu.classList.contains('show')) {
                document.querySelector('nav').style.top = '0px'; // Show the navbar
                document.querySelector('#main-body').style.top = '185px'; // Move main body down
            }
            else {
                // Scrolling up
                document.querySelector('nav').style.top = '0'; // Show the navbar
                document.querySelector('#main-body').style.top = '0'; // Move main body down
            }

        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative scrolling values
    }, false);

});
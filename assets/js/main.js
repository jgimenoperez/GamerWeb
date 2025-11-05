document.addEventListener("DOMContentLoaded",(evet)=>{
    
    let input_search = document.querySelector(".search__input")
    let btn_search = document.querySelector(".navbar__btn-search")
    let mobile_btn = document.querySelector(".navbar__mobile-btn")
    let mobile_menu = document.querySelector(".navbar__mobile-list")
    let drop_down1_btn = document.querySelector("#icon1")
    let drop_down1_submenu = document.querySelector("#submenu1")
    let drop_down2_btn = document.querySelector("#icon2")
    let drop_down2_submenu = document.querySelector("#submenu2")

    let marquee = (selector, speed)=>{
        const container = document.querySelector(selector);
        const list = container.children[0];
        let i = 0;
        setInterval(() => {
            list.style.marginLeft = `-${i}px`;

            if (i > list.clientWidth) {
                i = 0;
            }
            i = i + speed

        }, 0);
    }

    const submenu = (boton ,submenu, className)=>{
        boton.addEventListener("click", () =>{
            let drop= document.querySelector("."+className);

            if(!drop){
                submenu.style.display="block";
                mobile_menu.classList.add(className)

            }
            else{
                submenu.style.display="none";
                mobile_menu.classList.remove(className)
            }
        })
    }

    marquee(".marquee_container",0.2);

    btn_search.addEventListener("click",()=>{
        input_search.classList.contains("search__input--visible")
        ? (() => {

            input_search.classList.remove("search__input--visible");

            console.log(11,window.getComputedStyle(input_search).display)

          })()
        :(
            ()=>{

                input_search.classList.add("search__input--visible");
                console.log(2,window.getComputedStyle(input_search).display)
            }) ()
        
        // input_search && window.getComputedStyle(searchInput).width === '0px' 
        // ? console.log(1)
        // : console.log(2)


        // input_search.style.width="0";
        // input_search.style.padding="0";
        // input_search.classList.remove("visible")
    })

    mobile_btn.addEventListener("click",()=>{
       let menu_open= document.querySelector(".menu_open")

       if(!menu_open) {
        mobile_menu.style.display="block";
        mobile_menu.classList.add("menu_open")
       }
       else{
        mobile_menu.style.display="none";
        mobile_menu.classList.remove("menu_open")
       }
    })

    submenu(drop_down1_btn,drop_down1_submenu,"drop1")
    submenu(drop_down2_btn,drop_down2_submenu,"drop2")

    window.addEventListener("resize", () =>{
        let win = parseFloat(document.body.clientWidth)

        if (win > 1020){
            mobile_menu.style.display="none";
            mobile_menu.classList.remove("menu_open")
        }

    })

    // Funcionalidad: Contador animado de vistas
    const animateCounters = () => {
        const counters = document.querySelectorAll('.footer-post__number-views, .recent__number-views, .main-post__number-views, .list-popular__number-view');

        counters.forEach(counter => {
            if (counter.dataset.animated) return; // Skip if already animated

            const target = parseInt(counter.textContent);
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                    counter.dataset.animated = 'true';
                }
            };

            // Intersection Observer para animar cuando sea visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !counter.dataset.animated) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(counter);
        });
    };

    // Inicializar contadores animados
    animateCounters();

    // Funcionalidad: Scroll suave para todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Funcionalidad: Efecto parallax simple en el header
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('.layout_header');

        if (header) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.style.transform = 'translateY(-5px)';
                header.style.transition = 'transform 0.3s ease';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);


})


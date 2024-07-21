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

    window.addEventListener(resize , () =>{
        let win = parseFloat(document.body.clientWidth)

        if (win > 1020){
            mobile_menu.style.display="none";
            mobile_menu.classList.remove("menu_open")
        }
            
    })


})


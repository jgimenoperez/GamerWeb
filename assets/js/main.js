document.addEventListener("DOMContentLoaded",(evet)=>{
    
    let input_search = document.querySelector(".search__input")
    let btn_search = document.querySelector(".navbar__btn-search")


    btn_search.addEventListener("click",()=>{
        console.log(1)
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

})


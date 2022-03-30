categoriesButtons = document.querySelectorAll(".categories__button");
categoriesButtons[0].classList.add("categories__button--enabled");

for(let item of categoriesButtons){
    item.onclick = function(){
        for (let item of categoriesButtons){
            item.classList.remove("categories__button--enabled");
        }
        item.classList.toggle("categories__button--enabled");
    }
}

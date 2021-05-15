const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
    //let op currentTarget returns the whole div, no matter where you click, it always returns article class=about;
    //here we use target, to get the child and specific parts of the div.
    // console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if (id) { //if (id) 就是说点出来的结果不是undefined, 就说明点击的是button,而不是其他的部分。

        //remove active from other buttons; add one active to the current target.
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        })
        e.target.classList.add("active");


        //hide all the other articles; add one active to the current target with the matching id.
        articles.forEach(function (article) {
            article.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
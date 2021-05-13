
//这个是以button那里当入口，再去找该加的article或者section. 很有可能要选的是它的parent的parent, 但没有关系。
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function(btn){
//     btn.addEventListener('click', (e)=>{
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     })
// })
// // traversing the dom


//这个直接从该加class的article或者section为入口，然后去找button， 在加eventListener. 一点击让本section 加减（toggle）show-text.

//using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach(function(question){
    //别忘了这时就不是document.querySelector 而是 question.querySelector.
    const btn = question.querySelector(".question-btn");
    btn.addEventListener('click', ()=>{
        //现在什么都不做3个就全开着， 如果想要开别的时上一个被关掉， 就再写一个LOOP， 去查每一个QUESTION（最高层）是不是和现在点击的相等
        //这里用的ITEM和QUESITON是一个东西。只不过是更清楚。
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })


})

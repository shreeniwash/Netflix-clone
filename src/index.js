let allquestion=document.querySelectorAll('.faqQuestion');
console.log(allquestion);
allquestion.forEach((v,index)=>{
 v.addEventListener('click',()=>{
v.nextElementSibling.classList.toggle("h-[auto]");
v.nextElementSibling.classList.toggle("scale-y-100");
v.nextElementSibling.classList.toggle("p-[20px]");
v.children[1].classList.toggle('rotate-45');

allquestion.forEach((ele,i)=>{
    if(!i==index){
        ele.nextElementSibling.classList.remove("h-[auto]","scale-y-100","p-[20px]");
    }
})
 })
})
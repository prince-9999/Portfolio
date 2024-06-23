const project=document.getElementById("skill");
const nav=Array.from(document.getElementsByClassName("nav"));
const skills=Array.from(document.getElementsByClassName("start"));
function fillwidth(){
    var coordinates=project.getBoundingClientRect();
    console.log(coordinates.top);
    if(coordinates.top<=200){
    skills.forEach(skill =>{
        skill.setAttribute("class", "fill");
    });
}
    if(coordinates.top<=-260 || coordinates.top>=500){
    skills.forEach(skill =>{
        skill.removeAttribute("class", "fill");
    });
}
}

document.addEventListener("scroll", fillwidth);

nav.forEach(element => {
    element.addEventListener("click",(event)=>{
        
        //event.preventDefault();
        let ele=document.getElementById(element.innerHTML);
        let interval=setInterval(()=>{
            let length=ele.getBoundingClientRect();
            if(length.top<=15){
                clearInterval(interval);
                if(element.innerHTML==="Skill"){
                    fillwidth();
                }
                return;
            }
            else if(element.innerHTML==="Contact Me" && length.top<=200){
                clearInterval(interval);
                return;
            }
          //   else if(element.innerHTML==="Project" && length.top<=100){
          //     clearInterval(interval);
          //     return;
          // }

            window.scrollBy(0,10);
        },5);
    })
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




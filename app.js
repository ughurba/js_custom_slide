const slides = document.querySelectorAll('.slide')


for(const slide of slides){
    slide.addEventListener('click',() =>{
        cleaActiveClasses();

        slide.classList.add('active');

    });
}
function cleaActiveClasses(){
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}

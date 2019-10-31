 var slideIndex = 0;
 // var contador = 0;
 // plusSlides(slideIndex);

 export default function plusSlides(contador) {
     parseInt(slideIndex);
     slideIndex += contador;
     var slides = document.getElementsByClassName("mySlides");
     for (let i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     var slide2 = slideIndex + 1;
     var slide3 = slideIndex + 2;

     var slide4 = slideIndex + 3;
     if (slideIndex > slides.length - 5) {
         slideIndex = slides.length - 4;
     }
     if (slideIndex < 0) {
         slideIndex = 0;
     }
     slide2 = slideIndex + 1;
     slide3 = slideIndex + 2;
     slide4 = slideIndex + 3;
     console.log(slideIndex);
     slides[slideIndex].style.display = "block";
     slides[slide2].style.display = "block";
     slides[slide3].style.display = "block";
     slides[slide4].style.display = "block";
 }
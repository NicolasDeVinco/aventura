function redirectToPage() {
    
    window.location.href = 'paginas/pagina1.html'; 
  }

/* primer slide */


  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  setInterval(nextSlide, 5000);


/* segundo slide */

  const mySlides = document.querySelectorAll('.my-slide');
  let actualSlide = 0;
  
  function showMySlide(index) {
    mySlides.forEach(slide => slide.classList.remove('active'));
    mySlides[index].classList.add('active');
  }
  
  function nextMySlide() {
    actualSlide = (actualSlide + 1) % mySlides.length;
    showMySlide(actualSlide);
  }
  
  setInterval(nextMySlide, 3000);


/* faqs */

  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
    const arrow = question.querySelector('.arrow');
    const answer = question.querySelector('.answer');
  
    question.addEventListener('click', () => {
      arrow.classList.toggle('rotate');
      answer.classList.toggle('show');
  
      if (answer.classList.contains('show')) {
        question.style.height = `${question.scrollHeight}px`;
      } else {
        question.style.height = null;
      }
    });
  });


  /* select */


  function showSelectedOption() {
    var select = document.getElementById("mySelect");
    var selectedOption = select.options[select.selectedIndex].text;
    var result = document.getElementById("result");
    result.innerHTML = "<h1>" + selectedOption + "</h1>";
}



/* tercer slide */

const slideItems = document.querySelectorAll('.slide-item');
let currentSlideIndex = 0;
const slideInterval = setInterval(nextSlider, 2000); // Cambia el slide cada 2 segundos

function nextSlider() {
  slideItems[currentSlideIndex].classList.remove('active');
  currentSlideIndex = (currentSlideIndex + 1) % slideItems.length;
  slideItems[currentSlideIndex].classList.add('active');
}


/* alert */

const noButton = document.getElementById('noButton');

noButton.addEventListener('click', () => {
  alert('Lo siento, creo que te equivocaste de botón');
});

function redirigir() {
    
    window.location.href = 'pagina2.html'; 
  }


  function redirigirte() {
    
    window.location.href = 'pagina3.html'; 
  }
//Le tableau slides contient les informations de chaque diapositive : le chemin de l'image (image) et le texte associé (tagLine).
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentSlide = 0;

// Je récupère l'image, le texte et le conteneur des points
const bannerImg = document.querySelector('#banner .banner-img');
const bannerText = document.querySelector('#banner p');
const dotsContainer = document.querySelector('#bullet_point');

// Cette fonction change l'image et le texte du slide
function updateSlide() {
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;

    // Je mets à jour les points en fonction du slide actif
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.style.backgroundColor = 'white'; // Le point actif est blanc
            dot.style.border = 'none'; // Pas de bordure pour celui actif
        } else {
            dot.style.backgroundColor = 'gray'; // Les autres points sont gris
            dot.style.border = '1px solid white'; // Avec une bordure blanche
        }
    });
}

// Je crée les points en bas du carrousel
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.style.height = '10px';
    dot.style.width = '10px';
    dot.style.margin = '0 5px';
    dot.style.borderRadius = '50%'; 
    dot.style.cursor = 'pointer';
    dotsContainer.appendChild(dot);
    
    // Quand je clique sur un point, je vais au slide correspondant
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlide();
    });
});

// J'appelle cette fonction pour afficher le premier slide
updateSlide();

// Je gère les flèches pour changer de slide
document.getElementById('slide_left').addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1; // Retour au dernier si c'est le premier
    updateSlide();
});

document.getElementById('slide_right').addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1; // Retour au premier si c'est le dernier
    updateSlide();
});
